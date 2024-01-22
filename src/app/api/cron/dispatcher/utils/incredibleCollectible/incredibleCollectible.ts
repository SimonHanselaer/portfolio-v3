import mysql from "mysql2/promise";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function incredibleCollectible(request: NextRequest) {
  const connection = await mysql.createConnection(
    process.env.NEXT_PUBLIC_PLANETSCALE_URI!
  );
  const [result] = await connection.query(
    "INSERT INTO ic_votes (id_items, date) VALUES (?, ?)",
    [
      Math.ceil(Math.random() * 7),
      new Date().toISOString().slice(0, 19).replace("T", " "),
    ]
  );
  await connection.end();
  return new NextResponse(JSON.stringify({ result }), { status: 200 });
}
