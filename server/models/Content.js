const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
    unique: true
  },
  title: String,
  subtitle: String,
  description: String,
  image: String,
  data: mongoose.Schema.Types.Mixed
}, {
  timestamps: true
});

module.exports = mongoose.model('Content', ContentSchema);