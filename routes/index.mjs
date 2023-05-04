import { Router } from 'express';
import apiRoutes from './api/index.mjs';

const router = Router();

router.use('/api', apiRoutes);

export default router;
