import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: NextRequest) {
  //Create a single supabase client for interacting with your database
  const supabase = createClient(
    "https://ppgpmnmillhwrpkzltzf.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwZ3Btbm1pbGxod3Jwa3psdHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNTE4MzMsImV4cCI6MjAxMTcyNzgzM30.w6NIc6i1IZPddUkh2RntJGGBIX4kbxwJw4fQ8Sw7-Rs"
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
