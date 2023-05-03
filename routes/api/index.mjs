import express from 'express';
import categoryRoutes from './category-routes.mjs';
import productRoutes from './product-routes.mjs';
import tagRoutes from './tag-routes.mjs';

const router = express.Router();

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

export default router;
