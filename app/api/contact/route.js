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
    secure: false, // false for port 587 (STARTTLS)
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    logger: true, // enable logging to console
    debug: true,  // include SMTP traffic details
  });

  // Verify connection configuration
  transporter.verify((error, success) => {
    if (error) {
      console.error("Error verifying transporter:", error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  // Email options for admin notification
  const mailOptions = {
    from: `"OSI Contact Form" <${process.env.MAIL_USERNAME}>`,
    to: process.env.NOTIFY_EMAIL, // Admin or notification email
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
</ul>`,
  };

  // Email options for the auto-reply to the user
  const autoReplyMailOptions = {
    from: `"OSI Support" <${process.env.MAIL_USERNAME}>`,
    to: email, // The email address the user entered
    subject: 'Thank you for contacting OSI!',
    text: `Dear ${firstName},

Thank you for reaching out to us. Our representative will get back to you soon at this email.

Best regards,
OSI Team`,
    html: `<p>Dear ${firstName},</p>
           <p>Thank you for reaching out to us. Our representative will get back to you soon at this email.</p>
           <p>Best regards,<br>OSI Team</p>`,
  };

  try {
    // Send both emails concurrently
    const [adminInfo, autoReplyInfo] = await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyMailOptions)
    ]);
    console.log("Admin email info:", adminInfo);
    console.log("Auto reply email info:", autoReplyInfo);

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
