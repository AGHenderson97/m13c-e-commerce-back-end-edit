import pool from '.db/db.mjs';
import express from 'express';
import apiRoutes from './api/index.mjs';

const router = express.Router();

router.use('/api', apiRoutes);

export default router;
