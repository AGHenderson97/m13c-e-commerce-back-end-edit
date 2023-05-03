import express from 'express';
import { Product } from '../../models/Product.mjs';

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get one product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'No product found with this id' });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

