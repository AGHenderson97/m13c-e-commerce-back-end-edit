import { Router } from 'express';
import { Category, Product } from '../../models/index.mjs';

const router = Router();

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get category by id
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, { include: [{ model: Product }] });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(new
