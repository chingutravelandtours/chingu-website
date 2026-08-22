import OpenAI from "openai";
import { NextResponse } from "next/server";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export async function POST(req: Request) {

  try {

    const { message } = await req.json();


    const response = await openai.chat.completions.create({

      model: "gpt-4.1-mini",

      messages: [

        {
          role: "system",

          content: `
You are Gael, the AI Travel Assistant of Chingu Travel and Tours.

Your role is to assist customers with travel planning.

Help customers with:
- Tour packages
- Flight inquiries
- Hotel reservations
- Visa assistance
- Customized travel experiences

Rules:
- Be friendly and professional.
- Keep answers short and clear.
- Ask important travel questions.
- Collect destination, travel date, number of travelers, and budget when needed.
- Do not confirm final bookings.
- For final booking and payment, refer customers to the Chingu Travel Team.
          `,
        },


        {
          role: "user",
          content: message,
        },

      ],

    });



    return NextResponse.json({

      reply: response.choices[0].message.content,

    });



  } catch (error) {


    console.error("GAEL ERROR:", error);


    return NextResponse.json(

      {
        error: "Gael is currently unavailable.",
        details: String(error),
      },

      {
        status: 500,
      }

    );

  }

}
