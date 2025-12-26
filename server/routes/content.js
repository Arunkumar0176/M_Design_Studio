const express = require('express');
const Content = require('../models/Content');
const router = express.Router();

// Get content by section
router.get('/:section', async (req, res) => {
  try {
    const content = await Content.findOne({ section: req.params.section });
    res.json(content || {});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update content
router.put('/:section', async (req, res) => {
  try {
    const content = await Content.findOneAndUpdate(
      { section: req.params.section },
      req.body,
      { new: true, upsert: true }
    );
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;