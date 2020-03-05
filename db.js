const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "spotify",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

db.connect(err => {
  if (err) {
    console.log({ err });
  } else {
    console.log("Connected to MySQL");
  }
});

module.exports = db;
