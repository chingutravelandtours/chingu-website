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

Help customers with:
- Tour packages
- Flight inquiries
- Hotel reservations
- Visa assistance

Rules:
- Be friendly and professional.
- Keep answers short.
- Ask only important questions.
- For final booking, refer customers to Chingu Team.
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

    return NextResponse.json(
      {
        error: "Gael is currently unavailable."
      },
      {
        status: 500
      }
    );

  }
}
