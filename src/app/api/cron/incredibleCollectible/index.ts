require("dotenv").config();
const mysql = require("mysql2");
const { NextResponse } = require("next/server");

export default function insertVote() {
  const connection = mysql.createConnection(process.env.DATABASE_URL as string);
  connection.query("INSERT INTO ic_votes (id_items, date) VALUES (?, ?)", [
    Math.ceil(Math.random() * 7),
    new Date().toISOString().slice(0, 19).replace("T", " "),
  ]);
  connection.end();

  return NextResponse.json({}, { status: 200 });
}
