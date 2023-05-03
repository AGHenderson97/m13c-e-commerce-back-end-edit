import mysql from 'mysql';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'm13c_username',
  password: 'm13c_password',
  database: 'm13c_database'
});

export default pool;
