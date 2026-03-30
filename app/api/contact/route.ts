// API Route for Contact Form Submission
// Handles form validation and sends emails via Resend

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Type definition for form data
interface ContactFormData {
  name: string;
  company?: string;
  phone?: string;
  email: string;
  subject: string;
  message: string;
  locale?: string;
}

// HTML template for company email (inquiry notification)
function generateCompanyEmailHTML(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f9f8;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 32px;
      box-shadow: 0 2px 8px rgba(27, 94, 58, 0.08);
    }
    .header {
      background: linear-gradient(135deg, #1B5E3A 0%, #00695C 100%);
      color: white;
      padding: 24px;
      border-radius: 8px 8px 0 0;
      margin: -32px -32px 24px -32px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
    }
    .header p {
      margin: 8px 0 0 0;
      opacity: 0.9;
      font-size: 14px;
    }
    .field {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #e0f2f1;
    }
    .field:last-child {
      border-bottom: none;
    }
    .label {
      font-weight: 600;
      color: #1B5E3A;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
    }
    .value {
      color: #37474F;
      font-size: 15px;
      word-wrap: break-word;
    }
    .message-content {
      background-color: #f5f9f8;
      padding: 16px;
      border-radius: 6px;
      border-left: 4px solid #1B5E3A;
      white-space: pre-wrap;
    }
    .footer {
      margin-top: 32px;
      padding-top: 20px;
      border-top: 2px solid #e0f2f1;
      text-align: center;
      color: #78909C;
      font-size: 13px;
    }
    .badge {
      display: inline-block;
      background-color: #FF8F00;
      color: white;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      margin-top: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 新的网站询盘</h1>
      <p>来自 Shengxin Plastic 官网的客户咨询</p>
    </div>

    <div class="field">
      <div class="label">👤 客户姓名</div>
      <div class="value">${data.name}</div>
    </div>

    ${data.company ? `
    <div class="field">
      <div class="label">🏢 公司名称</div>
      <div class="value">${data.company}</div>
    </div>
    ` : ''}

    <div class="field">
      <div class="label">📧 电子邮箱</div>
      <div class="value"><a href="mailto:${data.email}" style="color: #00695C; text-decoration: none;">${data.email}</a></div>
    </div>

    ${data.phone ? `
    <div class="field">
      <div class="label">📞 联系电话</div>
      <div class="value"><a href="tel:${data.phone}" style="color: #00695C; text-decoration: none;">${data.phone}</a></div>
    </div>
    ` : ''}

    <div class="field">
      <div class="label">📋 咨询主题</div>
      <div class="value"><strong>${data.subject}</strong></div>
    </div>

    <div class="field">
      <div class="label">💬 留言内容</div>
      <div class="message-content">${data.message}</div>
    </div>

    <div class="footer">
      <div class="badge">来自官网联系表单</div>
      <p style="margin-top: 12px;">请尽快回复客户咨询</p>
      <p style="margin: 8px 0 0 0; color: #B0BEC5; font-size: 12px;">
        宁波市海曙盛欣塑化有限公司 © ${new Date().getFullYear()}
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

// HTML template for customer confirmation email
function generateCustomerEmailHTML(data: ContactFormData): string {
  const isZh = data.locale === 'zh';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f9f8;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 32px;
      box-shadow: 0 2px 8px rgba(27, 94, 58, 0.08);
    }
    .header {
      text-align: center;
      padding-bottom: 24px;
      border-bottom: 2px solid #e0f2f1;
      margin-bottom: 24px;
    }
    .logo {
      font-size: 28px;
      font-weight: 800;
      color: #1B5E3A;
      letter-spacing: 2px;
      margin-bottom: 8px;
    }
    .tagline {
      color: #78909C;
      font-size: 14px;
    }
    .content {
      color: #37474F;
      font-size: 15px;
    }
    .content h2 {
      color: #1B5E3A;
      font-size: 20px;
      margin-bottom: 16px;
    }
    .content p {
      margin-bottom: 12px;
    }
    .highlight-box {
      background-color: #E0F2F1;
      border-left: 4px solid #1B5E3A;
      padding: 16px;
      border-radius: 6px;
      margin: 20px 0;
    }
    .contact-info {
      background-color: #f5f9f8;
      padding: 20px;
      border-radius: 6px;
      margin: 24px 0;
    }
    .contact-info h3 {
      color: #1B5E3A;
      font-size: 16px;
      margin-top: 0;
      margin-bottom: 12px;
    }
    .contact-item {
      margin-bottom: 8px;
      font-size: 14px;
      color: #37474F;
    }
    .footer {
      margin-top: 32px;
      padding-top: 20px;
      border-top: 2px solid #e0f2f1;
      text-align: center;
      color: #78909C;
      font-size: 13px;
    }
    .footer a {
      color: #00695C;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">SHENGXIN PLASTIC</div>
      <div class="tagline">${isZh ? '宁波市海曙盛欣塑化有限公司' : 'Ningbo Haishu Shengxin Plastic Co., Ltd.'}</div>
    </div>

    <div class="content">
      <h2>${isZh ? '感谢您的咨询！' : 'Thank You for Your Inquiry!'}</h2>

      <p>${isZh ? `尊敬的 ${data.name}，` : `Dear ${data.name},`}</p>

      <p>
        ${isZh
          ? '感谢您通过我们的官网与我们联系。我们已经收到您的咨询，我们的专业团队会尽快审阅您的需求并给予回复。'
          : 'Thank you for contacting us through our website. We have received your inquiry and our professional team will review your requirements and respond as soon as possible.'
        }
      </p>

      <div class="highlight-box">
        <strong>${isZh ? '您提交的信息：' : 'Your Submitted Information:'}</strong><br>
        ${isZh ? '主题' : 'Subject'}: <strong>${data.subject}</strong><br>
        ${isZh ? '邮箱' : 'Email'}: ${data.email}
      </div>

      <p>
        ${isZh
          ? '在此期间，如果您有任何紧急问题，欢迎直接拨打我们的电话或发送邮件与我们联系。'
          : 'In the meantime, if you have any urgent questions, please feel free to call us directly or send us an email.'
        }
      </p>

      <div class="contact-info">
        <h3>${isZh ? '联系方式' : 'Contact Information'}</h3>
        <div class="contact-item">📞 ${isZh ? '电话' : 'Phone'}: +86 139 5783 3126 / +1 215 433 3611</div>
        <div class="contact-item">📧 ${isZh ? '邮箱' : 'Email'}: tengk958@hotmail.com</div>
        <div class="contact-item">📍 ${isZh ? '地址' : 'Address'}: ${isZh ? '宁波市海曙区石碶街道双江安丰家村' : 'Shuangjiang\'an, Fengjia Village, Shiqi Subdistrict, Haishu District, Ningbo'}</div>
      </div>

      <p style="margin-top: 24px;">
        ${isZh
          ? '期待与您的合作！'
          : 'We look forward to working with you!'
        }
      </p>

      <p style="margin-top: 16px; color: #78909C;">
        ${isZh ? '此致敬礼，' : 'Best regards,'}<br>
        <strong style="color: #1B5E3A;">${isZh ? '盛欣塑化团队' : 'Shengxin Plastic Team'}</strong>
      </p>
    </div>

    <div class="footer">
      <p>
        <a href="${isZh ? 'https://yourwebsite.com/zh' : 'https://yourwebsite.com/en'}">${isZh ? '访问我们的网站' : 'Visit Our Website'}</a>
      </p>
      <p style="margin-top: 8px; color: #B0BEC5; font-size: 12px;">
        © ${new Date().getFullYear()} ${isZh ? '宁波市海曙盛欣塑化有限公司' : 'Ningbo Haishu Shengxin Plastic Co., Ltd.'}
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

// POST handler for contact form submission
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!body.email || !body.email.trim()) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!body.subject || !body.subject.trim()) {
      return NextResponse.json(
        { success: false, error: 'Subject is required' },
        { status: 400 }
      );
    }

    if (!body.message || !body.message.trim()) {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { success: false, error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Prepare email data
    const companyEmailSubject = `[网站询盘] ${body.subject} - 来自 ${body.name}`;
    const customerEmailSubject = body.locale === 'zh'
      ? `感谢您的咨询 - 盛欣塑化`
      : `Thank You for Your Inquiry - Shengxin Plastic`;

    // Use onboarding@resend.dev for testing (change to verified domain later)
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    // Send email to company
    const companyEmailResult = await resend.emails.send({
      from: fromEmail,
      to: 'tengk958@hotmail.com',
      subject: companyEmailSubject,
      html: generateCompanyEmailHTML(body),
    });

    if (companyEmailResult.error) {
      console.error('Failed to send company email:', companyEmailResult.error);
      return NextResponse.json(
        { success: false, error: 'Failed to send inquiry email' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const customerEmailResult = await resend.emails.send({
      from: fromEmail,
      to: body.email,
      subject: customerEmailSubject,
      html: generateCustomerEmailHTML(body),
    });

    if (customerEmailResult.error) {
      console.error('Failed to send customer email:', customerEmailResult.error);
      // Don't fail the request if only customer email fails
      // Company already got the inquiry which is the main goal
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Emails sent successfully',
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      },
      { status: 500 }
    );
  }
}
