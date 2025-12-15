const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('/', async (req, res) => {
  try {
    const books = await Book.find().sort({ dateAdded: -1 });
    res.render('books/index', { books, title: 'My Book Collection' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving books');
  }
});

router.get('/new', (req, res) => {
  res.render('books/new', { title: 'Add New Book' });
});

router.post('/', async (req, res) => {
  try {
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn || '',
      coverUrl: req.body.coverUrl || '',
      publishYear: req.body.publishYear || '',
      description: req.body.description || '',
      userNotes: req.body.userNotes || '',
      status: req.body.status || 'want-to-read'
    });
    await book.save();
    res.redirect('/books');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating book');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.render('books/show', { book, title: book.title });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving book');
  }
});

router.get('/:id/edit', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.render('books/edit', { book, title: 'Edit Book' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving book');
  }
});

router.post('/:id', async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn || '',
      coverUrl: req.body.coverUrl || '',
      publishYear: req.body.publishYear || '',
      description: req.body.description || '',
      userNotes: req.body.userNotes || '',
      status: req.body.status
    });
    res.redirect('/books/' + req.params.id);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating book');
  }
});

router.post('/:id/delete', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect('/books');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting book');
  }
});

module.exports = router;
