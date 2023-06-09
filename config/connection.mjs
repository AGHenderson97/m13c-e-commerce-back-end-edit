import dotenv from 'dotenv';
dotenv.config();

import pool from '../database.mjs';

pool.getConnection((err) => {
  if (err) {
    console.error(`Error connecting to database: ${err}`);
    return;
  }
  console.log(`Connected to database with threadId ${pool.threadId}`);
});

export default pool;
