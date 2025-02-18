// /api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  // Parse the JSON body from the request
  const {
    firstName,
    lastName,
    email,
    inquiryTopic,
    userType,
    message,
    acceptsCommunications,
    submittedAt,
  } = await req.json();

  // Create a transporter using your SMTP configuration
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: true, // true for port 465 (SSL)
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: `"OSI Contact Form" <${process.env.MAIL_USERNAME}>`,
    to: process.env.NOTIFY_EMAIL, // Email address to be notified
    subject: 'New Contact Form Submission',
    text: `You have received a new contact form submission:
    
Name: ${firstName} ${lastName}
Email: ${email}
Inquiry Topic: ${inquiryTopic}
User Type: ${userType}
Message: ${message}
Accepts Communications: ${acceptsCommunications ? 'Yes' : 'No'}
Submitted At: ${submittedAt}`,
html: `<p>You have received a new contact form submission:</p>
<ul>
  <li><strong>Name:</strong> ${firstName} ${lastName}</li>
  <li><strong>Email:</strong> ${email}</li>
  <li><strong>Inquiry Topic:</strong> ${inquiryTopic}</li>
  <li><strong>User Type:</strong> ${userType}</li>
  <li>
    <strong>Message:</strong> 
    <span style="font-size: 1.5em;">${message}</span>
  </li>
  <li><strong>Accepts Communications:</strong> ${acceptsCommunications ? 'Yes' : 'No'}</li>
  <li><strong>Submitted At:</strong> ${submittedAt}</li>
</ul>`

  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Contact form submitted successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error sending email.' },
      { status: 500 }
    );
  }
}
