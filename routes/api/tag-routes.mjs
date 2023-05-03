import express from 'express';
import Tag from '../../models/Tag.mjs';

const router = express.Router();

// Get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get one tag by ID
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
    } else {
      res.status(200).json(tag);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update a tag by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedTag[0]) {
      res.status(404).json({ message: 'No tag found with this id' });
    } else {
      res.status(200).json(updatedTag);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a tag by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedTag) {
      res.status(404).json({ message: 'No tag found with this id' });
    } else {
      res.status(200).json(deletedTag);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
