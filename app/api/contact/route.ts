import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received form data:', body);
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Shengxin Plastic <noreply@shengxinplastics.com>',
      to: 'tengk958@hotmail.com',
      subject: `[网站询盘] ${body.subject} - 来自 ${body.name}`,
      html: `<h2>新的网站询盘</h2>
        <p><strong>姓名:</strong> ${body.name}</p>
        <p><strong>公司:</strong> ${body.company || '未填写'}</p>
        <p><strong>电话:</strong> ${body.phone || '未填写'}</p>
        <p><strong>邮箱:</strong> ${body.email}</p>
        <p><strong>主题:</strong> ${body.subject}</p>
        <p><strong>留言:</strong></p>
        <p>${body.message}</p>`,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error, null, 2));
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Catch error:', err);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
