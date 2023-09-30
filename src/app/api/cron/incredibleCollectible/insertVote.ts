import mysql from "mysql2";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export default function insertVote(req: NextRequest) {
  const connection = mysql.createConnection(
    'mysql://rz5xvipzr5vvv5bmkcgb:pscale_pw_bJZv7MCw5C6QntvUAjRRaPyneqG3ZUYJAbEnDwU0b0x@aws.connect.psdb.cloud/incrediblecollectible?ssl={"rejectUnauthorized":true}'
  );
  connection.query("INSERT INTO ic_votes (id_items, date) VALUES (?, ?)", [
    Math.ceil(Math.random() * 7),
    new Date().toISOString().slice(0, 19).replace("T", " "),
  ]);
  connection.end();

  return new NextResponse(JSON.stringify({ response: "success!" }), {
    status: 200,
  });
}
