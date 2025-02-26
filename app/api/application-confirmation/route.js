
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    
    const body = await req.json();
    const { applicantEmail, applicantName } = body;

    // 2. Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true, // true if using SSL (port 465)
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // 3. Compose the HTML for your confirmation email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif;">
        <p>Dear ${applicantName || 'Applicant'},</p>
        <p>
          Thank you for submitting your application. I am pleased to confirm that 
          our admissions team has successfully received it.
        </p>
        <p>
          Your application will now be reviewed by our admissions committee. 
          If further discussion is required, we may contact you for a brief conversation. 
          Should your application meet our criteria, you will soon receive an offer letter 
          along with payment instructions to complete the enrollment process.
        </p>
        <p>
          If you have any questions in the meantime, please don’t hesitate to reach us.
        </p>
        
        <p>
          <strong>Admission Team,</strong><br/>
          Program Coordinator<br/>
          The Oxford Institute<br/>
          T +44 (0) 1865 600 840<br/>
          <a href="mailto:info@theoxfordinstitute.co.uk ">info@theoxfordinstitute.co.uk </a><br/>
          <a href="https://www.oxfordsummerprogram.com" target="_blank">
            www.oxfordsummerprogram.com
          </a>
        </p>

        <p>
          <img src="cid:bacLogo" alt="BAC Logo" style="max-width:100px; margin-right: 10px;" />
          <img src="cid:oxfordLogo" alt="Oxford Logo" style="max-width:100px;" />
        </p>

        <hr/>
        <p style="font-size: 0.8em; color: #666;">
         Disclaimer: This message and any attachments are confidential and are intended solely for the use of the individual to whom it is addressed. If you are not the intended recipient of this email, you must neither take any action based upon its contents, nor copy or show it to anyone. Please contact the sender if you believe you have received this email in error.
        </p>
      </div>
    `;

    // 4. Configure mail options, including attachments for inline images
    const mailOptions = {
      from: `"The Oxford Institute" <${process.env.MAIL_USERNAME}>`,
      to: applicantEmail,
      subject: 'Thank You for Submitting Your Application',
      html: emailHtml,
      attachments: [
        {
          filename: 'bac-logo.jpg',
          path: './public/bac-logo.jpg', 
          cid: 'bacLogo',
        },
        {
          filename: 'osi-logo.jpeg',
          path: './public/osi-logo.jpeg',
          cid: 'oxfordLogo',
        },
      ],
    };

    // 5. Send the email
    await transporter.sendMail(mailOptions);

    // 6. Respond back to client
    return NextResponse.json(
      { message: 'Application confirmation email sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending application confirmation:', error);
    return NextResponse.json(
      { error: 'Error sending application confirmation.' },
      { status: 500 }
    );
  }
}
