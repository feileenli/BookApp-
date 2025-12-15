const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/search', async (req, res) => {
  const query = req.query.q;
  
  if (!query) {
    return res.json({ error: 'Search query is required' });
  }

  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`);
    const data = await response.json();
    
    const books = data.docs.map(book => ({
      title: book.title,
      author: book.author_name ? book.author_name.join(', ') : 'Unknown',
      isbn: book.isbn ? book.isbn[0] : '',
      coverUrl: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : '',
      publishYear: book.first_publish_year || '',
      key: book.key
    }));
    
    res.json({ books });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error searching books' });
  }
});

router.get('/book/:key', async (req, res) => {
  const key = req.params.key;
  
  try {
    const response = await fetch(`https://openlibrary.org${key}.json`);
    const data = await response.json();
    
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching book details' });
  }
});

module.exports = router;
