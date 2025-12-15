const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    default: ''
  },
  coverUrl: {
    type: String,
    default: ''
  },
  publishYear: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  userNotes: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['want-to-read', 'reading', 'completed'],
    default: 'want-to-read'
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Book', bookSchema);
