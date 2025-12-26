const express = require('express');
const Gallery = require('../models/Gallery');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Multer configuration for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Get all gallery images
router.get('/', async (req, res) => {
  try {
    const images = await Gallery.find().sort({ order: 1, createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new gallery image
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const gallery = new Gallery({
      title: req.body.title,
      image: req.file.filename,
      category: req.body.category,
      order: req.body.order
    });
    await gallery.save();
    res.json(gallery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;