# Quick Start - Contact Form Email Setup

## 🚀 Get Email Working in 5 Minutes

### Step 1: Get Resend API Key

1. Go to [resend.com/signup](https://resend.com/signup)
2. Sign up with your email
3. Verify your email
4. Go to [API Keys](https://resend.com/api-keys)
5. Click "Create API Key"
6. Name it: "Shengxin Website"
7. Copy the key (starts with `re_...`)

### Step 2: Add API Key to Project

1. Open `.env.local` file in your project root
2. Replace `your_resend_api_key_here` with your actual key:
   ```env
   RESEND_API_KEY=re_abc123xyz...
   ```
3. Save the file

### Step 3: Restart Dev Server

```bash
# Stop the server (Ctrl+C) if running
npm run dev
```

### Step 4: Test the Form

1. Open browser: `http://localhost:3000/zh/contact-us`
2. Fill out the form
3. Click "发送消息" / "Send Message"
4. Check your email at `tengk958@hotmail.com`

**That's it!** 🎉

---

## 📧 What Emails Are Sent?

### Email 1: To Company (tengk958@hotmail.com)
- **Subject:** `[网站询盘] {subject} - 来自 {name}`
- **Contains:** All form details in a branded HTML template
- **Purpose:** You get notified of new inquiries

### Email 2: To Customer (auto-confirmation)
- **Subject:** `感谢您的咨询 - 盛欣塑化` (ZH) / `Thank You for Your Inquiry` (EN)
- **Contains:** Confirmation + your contact info
- **Purpose:** Customer knows you received their inquiry

---

## ⚠️ Important Notes

### Free Tier Limitations

Resend free tier:
- ✅ 100 emails per day
- ✅ 1 domain verification
- ⚠️ Can only send from `onboarding@resend.dev` (initially)

**This means:**
- Emails will come from `onboarding@resend.dev`
- Still works perfectly for receiving inquiries!
- To use your own domain email (e.g., `noreply@shengxinplastic.com`):
  1. Verify your domain in Resend
  2. Update `RESEND_FROM_EMAIL` in `.env.local`

### Testing

**Test email is working:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "测试用户",
    "email": "your-email@example.com",
    "subject": "测试询盘",
    "message": "这是一条测试消息",
    "locale": "zh"
  }'
```

Expected response:
```json
{"success":true,"message":"Emails sent successfully"}
```

---

## 🔧 Troubleshooting

### "Email service is not configured"
- Check `.env.local` has the correct API key
- Restart the dev server (`Ctrl+C` then `npm run dev`)

### Emails not arriving
- Check spam folder
- Wait 1-2 minutes (sometimes delayed)
- Check Resend dashboard logs: https://resend.com/logs

### Form shows error message
- Open browser console (F12)
- Check Network tab for API errors
- Verify API key is correct

---

## 📱 Contact Info in Emails

Current settings:
- Company Email: `tengk958@hotmail.com`
- Phone 1: `+86 139 5783 3126`
- Phone 2: `+1 215 433 3611`
- Address: `宁波市海曙区石碶街道双江安丰家村`

**To change these:**
Edit `/app/api/contact/route.ts` (search for these values)

---

## 🌐 When Deploying to Vercel

1. Go to your project settings in Vercel
2. Environment Variables section
3. Add `RESEND_API_KEY` with your key
4. Redeploy

---

## 📚 Full Documentation

For detailed setup, API reference, and advanced features:
→ See `CONTACT_FORM_SETUP.md`

---

## ✅ Checklist

- [ ] Created Resend account
- [ ] Got API key from dashboard
- [ ] Added API key to `.env.local`
- [ ] Restarted dev server
- [ ] Tested form submission
- [ ] Received email at tengk958@hotmail.com
- [ ] (Optional) Verified custom domain
- [ ] (Optional) Updated RESEND_FROM_EMAIL

---

**Need help?** Check the full guide in `CONTACT_FORM_SETUP.md`
