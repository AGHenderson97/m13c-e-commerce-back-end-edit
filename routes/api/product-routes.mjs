import express from 'express';
import Product from '../../models/Product.mjs';

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

// Create or update a product
router.post('/', async (req, res) => {
  try {
    // Try to find a product with the same ID
    const product = await Product.findByPk(req.body.id);
    
    // If the product doesn't exist, create a new one
    if (!product) {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } 
    // Otherwise, update the existing product
    else {
      const updatedProduct = await Product.update(req.body, {
        where: {
          id: req.body.id
        }
      });
      res.status(200).json(updatedProduct);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
