import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_S8jT1GNe_6zjwtV6xYBbSVtYGw2Z3VadM");

export async function POST(request: Request) {
  try {
    // Extract data from the request body
    const { firstName, phoneNumber, service, message } = await request.json();
    const mail = 'example@example.com'; //import your verified email

    console.log("Data to be sent in the email:", { firstName, phoneNumber, service, message }); // Debugging

    // Prepare email content
    const emailBody = `
      Hi,

      You have a new submission from the form:

      Name: ${firstName}
      Phone Number: ${phoneNumber}
      Service: ${service}
      Message: ${message}

      Best,
      Your Team
    `;

    // Send email using Resend API
    await resend.emails.send({
      from: 'noreply@shockfit.majesticsofts.com',  // Make sure this is verified by Resend
      to: [mail],  // Send to your email
      subject: 'New Form Submission',
      text: emailBody,  // Use text field instead of react for plain text email
    });

    // Return success response
    return NextResponse.json({
      status: "Ok",
      message: `Email sent with submission data`,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      status: "Error",
      message: "Email failed to send",
    }, { status: 500 });
  }
}
