import mysql from 'mysql';

const pool = mysql.createPool({
  host: 'localhost',
  user: process.env.m13c_username,
  password: process.env.m13c_password,
  database: process.env.m13c_database
});

export default pool;
