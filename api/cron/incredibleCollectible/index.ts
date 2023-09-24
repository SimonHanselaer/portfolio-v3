require("dotenv").config();
const mysql = require("mysql2");
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to PlanetScale!");
connection.query("INSERT INTO ic_votes (id_items, date) VALUES (?, ?)", [
  Math.ceil(Math.random() * 7),
  new Date().toISOString().slice(0, 19).replace("T", " "),
]);
connection.end();
