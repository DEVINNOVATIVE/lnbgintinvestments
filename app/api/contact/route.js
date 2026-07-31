import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = String(body?.name ?? '').trim();
  const email = String(body?.email ?? '').trim();
  const phone = String(body?.phone ?? '').trim();
  const message = String(body?.message ?? '').trim();

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  if (name.length > 100 || email.length > 200 || phone.length > 50 || message.length > 5000) {
    return NextResponse.json({ error: 'One or more fields are too long.' }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_TO_EMAIL) {
    console.error('Contact form: missing SMTP environment variables.');
    return NextResponse.json(
      { error: 'Email service is not configured. Please try again later.' },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT);

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      // Most SMTP providers reject a From address they do not own, so the
      // visitor's address goes in Reply-To instead.
      from: `"LNBG INT INVESTMENTS" <${CONTACT_FROM_EMAIL || SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: `New contact enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;line-height:1.6">
          <h2 style="color:#dc2626;margin-bottom:16px">New Contact Enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;background:#f8fafc;padding:16px;border-radius:8px">${escapeHtml(
            message
          )}</p>
        </div>
      `,
    });
  } catch (error) {
    console.error('Contact form: failed to send email.', error);
    return NextResponse.json(
      { error: 'Could not send your message right now. Please try again later.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
