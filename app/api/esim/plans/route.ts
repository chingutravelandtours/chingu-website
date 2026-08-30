import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/esim_plans?select=*&active=eq.true&order=validity_days.asc`,
      {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch eSIM plans");
    }

    const plans = await response.json();

    return NextResponse.json(plans);
  } catch (error) {
    console.error("ESIM PLANS ERROR:", error);

    return NextResponse.json(
      {
        error: "Unable to load eSIM plans.",
      },
      {
        status: 500,
      }
    );
  }
}
