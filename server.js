require('dotenv').config();  

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3003

const MONGODB_URI = process.env.MONGODB_URI 

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const bookRoutes = require('./routes/books');
const apiRoutes = require('./routes/api');

app.use('/books', bookRoutes);
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.render('index', { title: 'Book Collection Manager' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
