const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  title: String,
  image: {
    type: String,
    required: true
  },
  category: String,
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Gallery', GallerySchema);