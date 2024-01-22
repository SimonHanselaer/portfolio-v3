import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function bxl(request: NextRequest) {
  //Create a single supabase client for interacting with your database
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!
  );

  const { data, error } = await supabase
    .from("ratings")
    .insert({
      id_tour: Math.ceil(Math.random() * 3),
      score: Math.round(Math.random() * (5 - 3) + 3),
    })
    .select();

  if (error) {
    return new NextResponse(JSON.stringify({ error }), { status: 500 });
  }
  return new NextResponse(JSON.stringify({ data }), { status: 200 });
}
