import mysql from "mysql2";

const db = mysql.createConnection({
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PSWD,
  // database: process.env.DB_NAME,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blog',
});

db.connect((err) =>
  console.log(err || "Database Connection Established")
);

export default db;
