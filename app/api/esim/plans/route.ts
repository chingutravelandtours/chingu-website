import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const countryId = searchParams.get("country_id");

    let url =
      `${SUPABASE_URL}/rest/v1/esim_plans` +
      `?select=*` +
      `&active=eq.true` +
      `&order=validity_days.asc`;

    if (countryId) {
      url += `&country_id=eq.${countryId}`;
    }

    const response = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
      cache: "no-store",
    });

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
