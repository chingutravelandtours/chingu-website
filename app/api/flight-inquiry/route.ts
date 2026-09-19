import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      agentName,
      agency,
      email,
      contact,
      tripType,
      departure,
      destination,
      departureDate,
      returnDate,
      passengers,
      cabin,
      message,
      airline,
    } = body;


    await resend.emails.send({
      from: "CHINGU Travel <onboarding@resend.dev>",
      
      // PALITAN ITO NG EMAIL MO
      to: "chingutravelandtours@gmail.com",

      subject: "New Flight Booking Inquiry - CHINGU Travel",

      html: `
        <h2>New Flight Booking Inquiry</h2>

        <p><b>Agent Name:</b> ${agentName}</p>
        <p><b>Agency:</b> ${agency}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Contact Number:</b> ${contact}</p>

        <hr/>

        <p><b>Trip Type:</b> ${tripType}</p>
        <p><b>Departure:</b> ${departure}</p>
        <p><b>Destination:</b> ${destination}</p>
        <p><b>Departure Date:</b> ${departureDate}</p>
        <p><b>Return Date:</b> ${returnDate}</p>

        <hr/>

        <p><b>Passengers:</b> ${passengers}</p>
        <p><b>Cabin Class:</b> ${cabin}</p>
        <p><b>Preferred Airline:</b> ${airline}</p>

        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });


    return NextResponse.json({
      success: true,
      message: "Inquiry sent successfully",
    });


  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send inquiry",
      },
      {
        status: 500,
      }
    );

  }
}
