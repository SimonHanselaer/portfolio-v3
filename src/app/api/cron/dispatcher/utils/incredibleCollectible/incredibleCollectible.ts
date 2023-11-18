import mysql from "mysql2/promise";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function incredibleCollectible(request: NextRequest) {
  const connection = await mysql.createConnection(
    'mysql://rz5xvipzr5vvv5bmkcgb:pscale_pw_bJZv7MCw5C6QntvUAjRRaPyneqG3ZUYJAbEnDwU0b0x@aws.connect.psdb.cloud/incrediblecollectible?ssl={"rejectUnauthorized":true}'
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
