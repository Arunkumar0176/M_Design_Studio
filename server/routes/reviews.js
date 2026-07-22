const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const reviewsFilePath = path.join(__dirname, '../../client/src/data/reviewsData.js');

const readReviews = () => {
  const content = fs.readFileSync(reviewsFilePath, 'utf8');
  const start = content.indexOf('[');
  const end = content.lastIndexOf(']');
  return JSON.parse(content.slice(start, end + 1));
};

const writeReviews = (reviews) => {
  const content = `const defaultReviews = ${JSON.stringify(reviews, null, 2)};\n\nexport default defaultReviews;\n`;
  fs.writeFileSync(reviewsFilePath, content, 'utf8');
};

// GET all reviews
router.get('/', (req, res) => {
  try {
    res.json(readReviews());
  } catch (err) {
    res.status(500).json({ error: 'Failed to read reviews' });
  }
});

// POST new review - saves permanently to reviewsData.js
router.post('/', (req, res) => {
  try {
    const reviews = readReviews();
    const newReview = {
      id: Date.now(),
      name: req.body.name,
      company: req.body.company || '',
      rating: req.body.rating || 5,
      comment: req.body.comment,
      date: new Date().toISOString().split('T')[0],
      photo: req.body.photo || null,
    };
    reviews.unshift(newReview);
    writeReviews(reviews);
    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save review' });
  }
});

// DELETE review by id - removes permanently from reviewsData.js
router.delete('/:id', (req, res) => {
  try {
    const reviews = readReviews();
    const filtered = reviews.filter(r => String(r.id) !== String(req.params.id));
    if (filtered.length === reviews.length) return res.status(404).json({ error: 'Review not found' });
    writeReviews(filtered);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete review' });
  }
});

module.exports = router;
