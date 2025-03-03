// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
// import { client } from '@/sanity/lib/client';

// import fs from 'fs';
// import path from 'path';
// import PizZip from 'pizzip';
// import Docxtemplater from 'docxtemplater';

// // Helper: check if "submittedAt" is >= 3 days ago
// function isAtLeast3DaysOld(dateString) {
//   if (!dateString) return false;
//   const submittedDate = new Date(dateString);
//   const now = new Date();
//   const diffInMs = now - submittedDate;
//   const threeDaysInMs = 3 * 24 * 60 * 60 * 1000; // 3 days
//   return diffInMs >= threeDaysInMs;
// // if (!dateString) return false;
// // const submittedDate = new Date(dateString);
// // const now = new Date();
// // const diffInMs = now - submittedDate;

// // // 1 minute in milliseconds
// // const tenMinutesInMs = 1 * 60 * 1000; // 600,000 ms

// // return diffInMs >= tenMinutesInMs;
// }

// function getProgramDetails(program) {
//   switch (program) {
//     case 'Oxford Summer Program - £5,999':
//       return { name: 'Oxford Summer Program', price: 5999 };
//     case 'Oxford Executive Leadership Program - £7,999':
//       return { name: 'Oxford Executive Leadership Program', price: 7999 };
//     case 'Oxford China Summer Program - £2,999':
//       return { name: 'Oxford China Summer Program', price: 2999 };
//     default:
//       // Fallback if the program doesn't match one of the above
//       return { name: program || 'Oxford Program', price: 0 };
//   }
// }

// function formatDateToOrdinal(dateObj) {
//   const day = dateObj.getDate();
//   const monthNames = [
//     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//   ];
//   const month = monthNames[dateObj.getMonth()];
//   const year = dateObj.getFullYear();

//   // Convert day to ordinal (1 -> '1st', 2 -> '2nd', 3 -> '3rd', etc.)
//   const dayOrdinal = getOrdinal(day);

//   return `${dayOrdinal} ${month} ${year}`;
// }

// function getOrdinal(day) {
//   if (day > 3 && day < 21) return day + 'th'; // covers 11th, 12th, 13th, etc.
//   switch (day % 10) {
//     case 1:  return day + 'st';
//     case 2:  return day + 'nd';
//     case 3:  return day + 'rd';
//     default: return day + 'th';
//   }
// }

// async function generateOfferLetterDocx({
//   firstName,
//   lastName,
//   programName,
//   programPrice,
//   currentDate,
// }) {
//   // 1. Load the .docx template from your file system
//   const templatePath = path.resolve('./public/docs/Offer Letter.docx');
//   const content = fs.readFileSync(templatePath, 'binary');

//   // 2. Create PizZip instance
//   const zip = new PizZip(content);

//   // 3. Create docxtemplater instance
//   // const doc = new Docxtemplater(zip, {
//   //   // paragraphLoop: true,
//   //   // linebreaks: true,
//   // });

//   const doc = new Docxtemplater(zip, {
//     delimiters: {
//       start: '<<',
//       end: '>>',
//     },
//   });

//   // 4. Replace placeholders with real data
//   doc.setData({
//     FN: firstName,
//     LN: lastName,
//     PN: programName,
//     PP: programPrice,
//     CD: currentDate,
//   });

//   // 5. Render the document
//   doc.render();

//   // 6. Generate the docx as a Node.js buffer
//   const buffer = doc.getZip().generate({
//     type: 'nodebuffer',
//     compression: 'DEFLATE',
//   });

//   return buffer;
// }

// export async function GET() {
//   try {
//     // 1. Fetch all "completed" apps where followUpEmailSent is NOT true
//     // We'll filter further in code for the 3-day condition
//     const query = `
//       *[_type == "application" && status == "completed" && followUpEmailSent != true]{
//         _id,
//         step1,
//         step2,
//         account,
//         submittedAt
//       }
//     `;
//     const applications = await client.fetch(query);

//     // 2. Filter out only those that are 3 days old
//     const threeDayOldApps = applications.filter((app) =>
//       isAtLeast3DaysOld(app.submittedAt)
//     );

//     if (threeDayOldApps.length === 0) {
//       return NextResponse.json({ message: 'No 3-day old completed apps found.' });
//     }

//     // 3. Prepare nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       port: Number(process.env.MAIL_PORT),
//       secure: true, // true if using SSL (port 465)                                                                                     
//       auth: {
//         user: process.env.MAIL_USERNAME,
//         pass: process.env.MAIL_PASSWORD,
//       },
//     });

//     // 4. For each application, send the follow-up email
//     for (const app of threeDayOldApps) {
//       const applicantEmail = app.step2?.email || app.account?.email;
//       if (!applicantEmail) {
//         console.warn(`No applicant email found for doc ID: ${app._id}`);
//         continue; // skip if no email
//       }

//         const applicantFirstName = app.step2?.firstName || app.account?.firstName;
//         const applicantLastName = app.step2?.lastName || app.account?.lastName || '';
//         // Get dynamic program name and price
//         const { name: programName, price: programPrice } = getProgramDetails(app.step1?.program);

//         const currentDateFormatted = formatDateToOrdinal(new Date());
//         // Generate the .docx offer letter buffer
//       const docxBuffer = await generateOfferLetterDocx({
//         firstName: applicantFirstName,
//         lastName: applicantLastName,
//         programName,
//         programPrice,
//         currentDate: currentDateFormatted,
//       });


//       const emailHtml = `
//   <p>Dear ${app.step2?.firstName || app.account?.firstName},</p>

//   <p>
//     On behalf of The Oxford Institute, I am delighted to offer you provisional admission to the <strong> ${programName} 2025</strong>, held at 
//     <strong>St Anne’s College, University of Oxford.</strong>
//     Congratulations on securing this exciting opportunity!
//   </p>

//   <h3>Conditional Offer and Payment Details</h3>
//   <p>
//     This offer is conditional upon the payment of a 
//     <strong>minimum deposit of £1,999</strong> or the full program fee (<strong>£${programPrice}</strong>)
//     within <strong>10 working days</strong> of receiving this letter. You may complete 
//     the transaction using this link:
//     https://buy.stripe.com/aEUcMZ0M62Wo0SI7ss 
//     (a 3.5% surcharge will be applied to all online payments to cover card processing fees)
//     or you may use the bank details below to make the payment directly:
//   </p>

//   <ul>
//     <li><strong>Bank Name:</strong> Barclays Bank</li>
//     <li><strong>Account Name:</strong> The Oxford Institute</li>
//     <li><strong>Sort Code:</strong> 20-08-64</li>
//     <li><strong>Account Number:</strong> 00399833</li>
//     <li><strong>Swift Code:</strong> BUKBGB22</li>
//     <li><strong>IBAN:</strong> GB86BUKB 20086400399833</li>
//     <li><strong>Branch:</strong> 54 Cornmarket St, Oxford, OX1 3HB, United Kingdom</li>
//   </ul>

//   <h3>Your Oxford Experience</h3>
//   <p>
//     We are thrilled to welcome you to Oxford, where we’re committed to providing 
//     an enriching and unforgettable experience that enhances your education 
//     and fully immerses you in “The Oxford Experience.” Designed to prepare you 
//     for future academic pursuits, this unique program offers a blend of learning, 
//     culture, and community.
//   </p>
//   <p>Your time with us will include:</p>
//   <ul>
//     <li>
//       <strong>Engaging Tutorials:</strong> Dive into intellectually stimulating tutorials 
//       led by Oxford’s distinguished academics. With a student-to-teacher ratio of 1:3, 
//       our program uses Oxford’s unique tutorial teaching methodology to foster critical 
//       thinking and deep exploration of subjects.
//     </li>
//     <li>
//       <strong>Admissions Preparation and Career Guidance:</strong> We offer specialized 
//       support to prepare you for competitive university applications, including guidance 
//       on personal statements, essay writing, and interview techniques.
//     </li>
//     <li>
//       <strong>Essay Counselling:</strong> You will learn the art of essay writing in 
//       specialised classes, and our tutors and residential deans will be available 
//       around the clock to assist you in choosing the topics which interest you the most, 
//       conducting research, and drafting your essays.
//     </li>
//     <li>
//       <strong>Debating at the Oxford Union:</strong> Public speaking is a core component 
//       of our program, with multiple workshops in debating and public speaking led by 
//       expert debaters at the world-famous Oxford Union. You’ll develop invaluable skills 
//       in argumentation, articulation, and persuasion.
//     </li>
//     <li>
//       <strong>Inspirational Lectures:</strong> Attend thought-provoking lectures delivered 
//       by Oxford academics and guest speakers on diverse topics, inspiring you to consider 
//       new perspectives and global issues with a critical and analytical mind.
//     </li>
//   </ul>

//   <h3>Cultural and Social Experiences</h3>
//   <ul>
//     <li>
//       <strong>Harry Potter-style Dining:</strong> Experience magical dining in Oxford’s 
//       historic halls, reminiscent of Harry Potter’s famous feasts, creating unforgettable memories.
//     </li>
//     <li>
//       <strong>Cultural Exploration:</strong> Take part in guided tours of other historic 
//       Oxford colleges, explore local museums, and enjoy a walking tour of London to experience 
//       its vibrant culture and iconic landmarks.
//     </li>
//     <li>
//       <strong>Global Friendships:</strong> Forge connections with students from around the world, 
//       building friendships that last a lifetime.
//     </li>
//     <li>
//       <strong>University Accommodation:</strong> Each participant will have a private room with 
//       en-suite facilities in the beautiful campus of St Anne's College, giving you a genuine 
//       taste of Oxford student life.
//     </li>
//   </ul>

//   <h3>Additional Resources</h3>
//   <p>To give you a sense of what awaits, we encourage you to explore the following resources:</p>
//   <ul>
//     <li><strong>Program Highlights Video: </strong> <a href="https://www.youtube.com/watch?v=YoJO8TNvxA8">2024 Program Glimpse</a></li>
//     <li><strong>Student Testimonials: </strong><a href="https://www.youtube.com/watch?v=MCubCobT9nA">The Oxford Institute - YouTube</a></li>
//     <li><strong>Website: </strong><a href="www.oxfordsummerprogram.com">The Oxford Institute Website</a></li>
//     <li><strong>Social Media: </strong><a href="https://www.instagram.com/oxford_summer_program/">Instagram</a> and <a href="https://www.facebook.com/oxfordinstitute1/">Facebook</a></li>
//   </ul>

//   <h3>Next Steps</h3>
//   <p>
//     Please proceed with the payment of the initial deposit to confirm your seat, and kindly 
//     send us an email to update us once completed. Should you have any further questions or wish 
//     to speak with a member of our staff, please feel free to email us or call our landline.
//   </p>
//   <p>
//     <strong>International students requiring a visa</strong> must complete <strong>full fee payment </strong>
//     (at least 4 months prior to the course start date) to receive a visa sponsorship letter.
//   </p>
//   <p>
//     We will keep you informed with program updates and send a pre-arrival questionnaire for you 
//     to complete. Please don’t hesitate to reach out with any questions or if you need further assistance.
//   </p>
//   <p>
//     Once again, congratulations on your admission to the <strong>${programName}</strong> 2025! We eagerly look 
//     forward to welcoming you to Oxford for an inspiring and memorable summer.
//   </p>

//   <p>
//     Yours Sincerely,<br />
//     Lucy Aitchison<br />
//     Program Coordinator<br />
//     The Oxford Institute<br />
//     T: +44 (0) 1865 600 840<br />
//     E: info@theoxfordinstitute.co.uk<br />
//     W: www.oxfordsummerprogram.com
//   </p>

//   <p style="font-size: 0.9em; color: #777;">
//     Disclaimer: This message and any attachments are confidential and are intended solely for 
//     the use of the individual to whom it is addressed. If you are not the intended recipient 
//     of this email, you must neither take any action based upon its contents, nor copy or 
//     show it to anyone. Please contact the sender if you believe you have received this email 
//     in error.
//   </p>
// `;

    

//       const mailOptions = {
//         from: `"The Oxford Institute" <${process.env.MAIL_USERNAME}>`,
//         to: applicantEmail,
//         subject: `Offer Letter- ${programName} 2025!`,
//         html: emailHtml,
//         attachments: [
//             {
//                 filename: 'osi-logo.jpeg',
//                 path: './public/osi-logo.jpeg',
//                 cid: 'letterHead',
//               },
//               {
//                 // Attach the generated .docx
//                 filename: `OfferLetter-${applicantFirstName}-${applicantLastName}.docx`,
//                 content: docxBuffer,
//                 contentType:
//                   'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//               },
//         ],
//       };

//       // Send the email
//       await transporter.sendMail(mailOptions);

//       // 5. Mark followUpEmailSent = true
//       await client.patch(app._id).set({ followUpEmailSent: true }).commit();
//     }

//     return NextResponse.json({
//       message: `Follow-up emails sent to ${threeDayOldApps.length} application(s).`,
//     });
//   } catch (error) {
//     console.error('Error sending follow-up emails:', error);
//     return NextResponse.json({ error: 'Error sending follow-up emails.' }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { client } from '@/sanity/lib/client';

import fs from 'fs';
import path from 'path';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

// Helper: Check if "submittedAt" is at least N days old (using scheduleDays from config)
function isAtLeastNDaysOld(dateString, days) {
  if (!dateString) return false;
  const submittedDate = new Date(dateString);
  const now = new Date();
  const diffInMs = now - submittedDate;
  const daysInMs = days * 24 * 60 * 60 * 1000;
  return diffInMs >= daysInMs;
}

function getProgramDetails(program) {
  switch (program) {
    case 'Oxford Summer Program - £5,999':
      return { name: 'Oxford Summer Program', price: 5999 };
    case 'Oxford Executive Leadership Program - £7,999':
      return { name: 'Oxford Executive Leadership Program', price: 7999 };
    case 'Oxford China Summer Program - £2,999':
      return { name: 'Oxford China Summer Program', price: 2999 };
    default:
      // Fallback if the program doesn't match one of the above
      return { name: program || 'Oxford Program', price: 0 };
  }
}

function formatDateToOrdinal(dateObj) {
  const day = dateObj.getDate();
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const month = monthNames[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  const dayOrdinal = getOrdinal(day);
  return `${dayOrdinal} ${month} ${year}`;
}

function getOrdinal(day) {
  if (day > 3 && day < 21) return day + 'th';
  switch (day % 10) {
    case 1:  return day + 'st';
    case 2:  return day + 'nd';
    case 3:  return day + 'rd';
    default: return day + 'th';
  }
}

async function generateOfferLetterDocx({ firstName, lastName, programName, programPrice, currentDate }) {
  // 1. Load the .docx template from your file system
  const templatePath = path.resolve('./public/docs/Offer Letter.docx');
  const content = fs.readFileSync(templatePath, 'binary');

  // 2. Create PizZip instance
  const zip = new PizZip(content);

  // 3. Create docxtemplater instance with custom delimiters
  const doc = new Docxtemplater(zip, {
    delimiters: { start: '<<', end: '>>' }
  });

  // 4. Replace placeholders with actual data
  doc.setData({
    FN: firstName,
    LN: lastName,
    PN: programName,
    PP: programPrice,
    CD: currentDate,
  });

  // 5. Render the document
  doc.render();

  // 6. Generate the docx as a Node.js buffer
  const buffer = doc.getZip().generate({
    type: 'nodebuffer',
    compression: 'DEFLATE',
  });

  return buffer;
}

// Helper to load email configuration from JSON
function getEmailConfig() {
  const filePath = path.resolve('./config/emailConfig.json'); 
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

// Helper to populate template strings with dynamic data
function populateTemplate(template, data) {
  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] || '');
}

export async function GET() {
  try {
    // Load email configuration (including scheduleDays)
    const emailConfig = getEmailConfig();
    const { subject, html, scheduleDays } = emailConfig.followUpEmail;

    // 1. Fetch all "completed" apps where followUpEmailSent is not true
    const query = `
      *[_type == "application" && status == "completed" && followUpEmailSent != true]{
        _id,
        step1,
        step2,
        account,
        submittedAt
      }
    `;
    const applications = await client.fetch(query);

    // 2. Filter applications based on the scheduleDays value from the JSON config
    const scheduledApps = applications.filter((app) =>
      isAtLeastNDaysOld(app.submittedAt, scheduleDays)
    );

    if (scheduledApps.length === 0) {
      return NextResponse.json({ message: `No ${scheduleDays}-day old completed apps found.` });
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

    // 4. Process each application and send the follow-up email
    for (const app of scheduledApps) {
      const applicantEmail = app.step2?.email || app.account?.email;
      if (!applicantEmail) {
        console.warn(`No applicant email found for doc ID: ${app._id}`);
        continue;
      }

      const applicantFirstName = app.step2?.firstName || app.account?.firstName;
      const applicantLastName = app.step2?.lastName || app.account?.lastName || '';
      const { name: programName, price: programPrice } = getProgramDetails(app.step1?.program);
      const currentDateFormatted = formatDateToOrdinal(new Date());

      // Generate the offer letter as a .docx file
      const docxBuffer = await generateOfferLetterDocx({
        firstName: applicantFirstName,
        lastName: applicantLastName,
        programName,
        programPrice,
        currentDate: currentDateFormatted,
      });

      // Populate the email template with dynamic data
      const emailHtml = populateTemplate(html, {
        firstName: applicantFirstName,
        programName,
        programPrice,
        // add any additional dynamic fields as needed
      });

      // Prepare mail options
      const mailOptions = {
        from: `"The Oxford Institute" <${process.env.MAIL_USERNAME}>`,
        to: applicantEmail,
        subject: populateTemplate(subject, { programName }),
        html: emailHtml,
        attachments: [
          {
            filename: 'osi-logo.jpeg',
            path: './public/osi-logo.jpeg',
            cid: 'letterHead',
          },
          {
            filename: `OfferLetter-${applicantFirstName}-${applicantLastName}.docx`,
            content: docxBuffer,
            contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          },
        ],
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      // Mark followUpEmailSent as true
      await client.patch(app._id).set({ followUpEmailSent: true }).commit();
    }

    return NextResponse.json({
      message: `Follow-up emails sent to ${scheduledApps.length} application(s).`,
    });
  } catch (error) {
    console.error('Error sending follow-up emails:', error);
    return NextResponse.json({ error: 'Error sending follow-up emails.' }, { status: 500 });
  }
}

