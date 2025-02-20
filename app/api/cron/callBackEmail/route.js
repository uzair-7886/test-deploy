import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { client } from '@/sanity/lib/client';

// Helper: check if "submittedAt" is >= 7 days ago
function isAtLeast7DaysOld(dateString) {
//   if (!dateString) return false;
//   const submittedDate = new Date(dateString);
//   const now = new Date();
//   const diffInMs = now - submittedDate;
  
//   const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000; // 7 days
//   return diffInMs >= sevenDaysInMs;
if (!dateString) return false;
const submittedDate = new Date(dateString);
const now = new Date();
const diffInMs = now - submittedDate;

// 1 minute in milliseconds
const tenMinutesInMs = 1 * 60 * 1000; // 600,000 ms

return diffInMs >= tenMinutesInMs;
}

export async function GET() {
  try {
    // 1. Fetch "completed" apps where 7-day callback email NOT sent
    const query = `
      *[_type == "application" && status == "completed" && sevenDayCallbackEmailSent != true]{
        _id,
        step2,
        account,
        submittedAt
      }
    `;
    const applications = await client.fetch(query);

    // 2. Filter only those that are 7 days old
    const eligibleApps = applications.filter(app =>
      isAtLeast7DaysOld(app.submittedAt)
    );

    if (eligibleApps.length === 0) {
      return NextResponse.json({ message: 'No 7-day old completed apps found.' });
    }

    // 3. Prepare nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true, 
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // 4. For each eligible application, send the 7-day callback email
    for (const app of eligibleApps) {
      const applicantEmail = app.step2?.email || app.account?.email;
      if (!applicantEmail) {
        console.warn(`No applicant email for doc ID: ${app._id}`);
        continue;
      }

      // Insert whatever text/HTML you want here; for example:
      const emailHtml = `
        <p>Dear ${app.step2?.firstName || app.account?.firstName},</p>
        <p>
          I hope this message finds you well. We are reaching out to confirm whether you have received your offer letter successfully. Kindly let us know if you are interested in joining the Oxford Summer Program at St Anne's College, University of Oxford, and when you anticipate making the payment outlined in your offer to secure your place.
        </p>
        <p>
          If you require additional time to make the payment or have any questions about the program, please do not hesitate to reach out. We will do our best to accommodate your needs and provide any clarification regarding your admission.


        </p>
        <p>
          We look forward to hearing from you. If you have any questions, please
          feel free to contact me directly at 07916702699..
        </p>
        <p>
          Lucy Aitchison <br/>
          Program Coordinator<br />
          The Oxford Institute<br />
          T: +44 (0) 1865 600 840<br />
          E: info@theoxfordinstitute.co.uk<br />
          W: www.oxfordsummerprogram.com
        </p>
                <p>
          <img src="cid:bacLogo" alt="BAC Logo" style="max-width:100px; margin-right: 10px;" />
          <img src="cid:oxfordLogo" alt="Oxford Logo" style="max-width:100px;" />
        </p>
        <hr/>
        <p style="font-size: 0.9em; color: #777;">
Disclaimer: This message and any attachments are confidential and are intended solely for the use of the individual to whom it is addressed. If you are not the intended recipient of this email, you must neither take any action based upon its contents, nor copy or show it to anyone. Please contact the sender if you believe you have received this email in error.
        </p>
      `;

      // Example attachments
      const mailOptions = {
        from: `"The Oxford Institute" <${process.env.MAIL_USERNAME}>`,
        to: applicantEmail,
        subject: 'Confirmation of Offer Letter Receipt – Oxford Summer Program',
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

      // Send the email
      await transporter.sendMail(mailOptions);

      // Mark 7-day callback email as sent
      await client
        .patch(app._id)
        .set({ sevenDayCallbackEmailSent: true })
        .commit();
    }

    return NextResponse.json({
      message: `7-day callback emails sent to ${eligibleApps.length} application(s).`,
    });
  } catch (error) {
    console.error('Error sending 7-day callback emails:', error);
    return NextResponse.json({ error: 'Error sending 7-day callback emails.' }, { status: 500 });
  }
}
