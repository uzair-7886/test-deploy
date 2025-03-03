// /app/api/confirmation-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

function getEmailConfig() {
  const filePath = path.resolve('./config/emailConfig.json'); 
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

function populateTemplate(template, data) {
  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] || '');
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { applicantEmail, applicantName } = body;

    const emailConfig = getEmailConfig().confirmationEmail;
    const subject = emailConfig.subject;
    const htmlTemplate = emailConfig.html;

    // Populate the template with dynamic data
    const emailHtml = populateTemplate(htmlTemplate, { applicantName });

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: { user: process.env.MAIL_USERNAME, pass: process.env.MAIL_PASSWORD }
    });

    const mailOptions = {
      from: `"The Oxford Institute" <${process.env.MAIL_USERNAME}>`,
      to: applicantEmail,
      subject,
      html: emailHtml,
      attachments: [
        { filename: 'bac-logo.jpg', path: './public/bac-logo.jpg', cid: 'bacLogo' },
        { filename: 'osi-logo.jpeg', path: './public/osi-logo.jpeg', cid: 'oxfordLogo' }
      ]
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Application confirmation email sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending application confirmation:', error);
    return NextResponse.json({ error: 'Error sending application confirmation.' }, { status: 500 });
  }
}
