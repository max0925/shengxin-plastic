# Contact Form Email Setup Guide

This guide explains how to set up the contact form email functionality using Resend.

## Overview

The contact form uses:
- **Resend** - Email delivery service
- **Next.js API Routes** - Backend endpoint at `/api/contact`
- **React** - Frontend form with validation

When a user submits the form:
1. Frontend validates required fields
2. POST request sent to `/api/contact`
3. API validates data and sends two emails:
   - **Company email** → `tengk958@hotmail.com` (inquiry notification)
   - **Customer email** → User's email (confirmation)

---

## Setup Instructions

### 1. Install Dependencies

Already installed:
```bash
npm install resend
```

### 2. Get Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to [API Keys](https://resend.com/api-keys)
3. Create a new API key
4. Copy the key (you'll only see it once!)

### 3. Configure Environment Variables

1. Copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your API key:
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. (Optional) Add custom sender email if you have a verified domain:
   ```env
   RESEND_FROM_EMAIL=noreply@yourdomain.com
   ```

### 4. Domain Verification (Optional but Recommended)

**Free tier limitations:**
- Can only send emails using `onboarding@resend.dev`
- Limited to sending to your own email for testing

**To send from your domain:**
1. Go to [Domains](https://resend.com/domains) in Resend dashboard
2. Add your domain (e.g., `shengxinplastic.com`)
3. Add the DNS records they provide to your domain registrar
4. Wait for verification (usually a few minutes)
5. Update `RESEND_FROM_EMAIL` in `.env.local`

**Recommended sender emails:**
- `noreply@yourdomain.com`
- `contact@yourdomain.com`
- `inquiry@yourdomain.com`

---

## Email Templates

### Company Email (Inquiry Notification)

**To:** `tengk958@hotmail.com`
**Subject:** `[网站询盘] {subject} - 来自 {name}`

Includes:
- Customer name, company, email, phone
- Subject and message
- Formatted with branded HTML template
- Green gradient header matching website theme

### Customer Email (Confirmation)

**To:** User's email address
**Subject:** `感谢您的咨询 - 盛欣塑化` (ZH) / `Thank You for Your Inquiry - Shengxin Plastic` (EN)

Includes:
- Personalized greeting
- Confirmation that inquiry was received
- Summary of submitted information
- Company contact details
- Branded HTML template with logo

---

## Testing

### Local Testing

1. Start development server:
   ```bash
   npm run dev
   ```

2. Navigate to contact page:
   - Chinese: `http://localhost:3000/zh/contact-us`
   - English: `http://localhost:3000/en/contact-us`

3. Fill out and submit the form

4. Check:
   - Browser console for any errors
   - Network tab to see API request/response
   - Your email inbox (both company and customer emails)

### Test with cURL

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "company": "Test Company",
    "email": "test@example.com",
    "phone": "+86 123 4567 8900",
    "subject": "Test Inquiry",
    "message": "This is a test message",
    "locale": "zh"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Emails sent successfully"
}
```

---

## API Endpoint

**Endpoint:** `POST /api/contact`

**Request Body:**
```typescript
{
  name: string;        // Required
  company?: string;    // Optional
  phone?: string;      // Optional
  email: string;       // Required, validated
  subject: string;     // Required
  message: string;     // Required
  locale?: string;     // Optional (zh/en)
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Emails sent successfully"
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Error message"
}
```

**Status Codes:**
- `200` - Success
- `400` - Validation error (missing/invalid fields)
- `500` - Server error (email sending failed)

---

## Form Validation

### Frontend (React)
- Required fields marked with red asterisk
- HTML5 validation for email format
- Disabled submit button during submission
- Loading spinner during submission

### Backend (API Route)
- Checks required fields are not empty
- Validates email format with regex
- Returns clear error messages

---

## Troubleshooting

### "Email service is not configured"
- Check that `RESEND_API_KEY` is set in `.env.local`
- Restart the dev server after adding environment variables

### "Failed to send inquiry email"
- Verify API key is correct
- Check Resend dashboard for error logs
- Ensure you're within free tier limits (100 emails/day)

### Emails not arriving
- Check spam/junk folder
- Verify sender email domain is verified (if using custom domain)
- Check Resend dashboard logs for delivery status

### CORS errors
- API routes are on same domain, shouldn't have CORS issues
- If deployed, ensure environment variables are set on hosting platform

---

## Deployment

### Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - Go to Project Settings → Environment Variables
   - Add `RESEND_API_KEY`
   - Add `RESEND_FROM_EMAIL` (optional)
4. Deploy

### Other Platforms

Ensure you:
1. Set `RESEND_API_KEY` environment variable
2. Set `RESEND_FROM_EMAIL` if using custom domain
3. Build command: `npm run build`
4. Start command: `npm start`

---

## Security Notes

- ✅ API key stored in environment variables (not in code)
- ✅ `.env.local` is gitignored
- ✅ Input validation on backend
- ✅ Rate limiting can be added via middleware if needed
- ✅ Email addresses validated with regex

**Never commit `.env.local` to git!**

---

## Future Enhancements

Possible improvements:
- Add rate limiting to prevent spam
- Add CAPTCHA (reCAPTCHA v3)
- Save inquiries to database
- Add admin dashboard to view inquiries
- Add email notifications for specific inquiry types
- Add attachments support for spec sheets

---

## Support

- Resend Docs: https://resend.com/docs
- Resend Support: support@resend.com
- API Reference: https://resend.com/docs/api-reference

---

## Files Modified/Created

- ✅ `app/api/contact/route.ts` - API endpoint
- ✅ `app/[locale]/contact-us/page.tsx` - Frontend form
- ✅ `messages/zh.json` - Chinese translations
- ✅ `messages/en.json` - English translations
- ✅ `.env.local.example` - Environment template
- ✅ `package.json` - Resend dependency
- ✅ `CONTACT_FORM_SETUP.md` - This guide
