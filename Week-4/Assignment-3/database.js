import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "3030416",
    database: "node.js.appwork",
  })
  .promise();

const result = await pool.query("SELECT * FROM user");
console.log(result);
//To create function with SQL that can help me insert value to Email & Password
export async function createAccount(Email, Password) {
  await pool.query(
    `INSERT INTO user (Email,Password)
  VALUES (?,?) `,
    [Email, Password]
  );
}

//Function that can help me to query the value of table
export async function logIn(Email, Password) {
  const result = await pool.query(
    `SELECT Email,Password FROM user WHERE Email = ? AND Password = ?`,
    [Email, Password]
  );
  return result[0];
}
