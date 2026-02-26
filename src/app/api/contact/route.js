import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message, checkbox } = body;

    if (!firstName || !lastName || !email || !message || !checkbox) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create transporter — configure via .env.local (see .env.local.example)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `Portfolio contact from ${firstName} ${lastName}`,
      text: [
        `Name:    ${firstName} ${lastName}`,
        `Email:   ${email}`,
        `Phone:   ${phone || 'not provided'}`,
        ``,
        message,
      ].join('\n'),
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || 'not provided'}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact route error:', err);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
