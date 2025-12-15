# Book Collection Manager

A full-stack web application for managing your personal book collection using Node.js, Express, MongoDB, and the Open Library API.

## Features

- 📚 Search for books using the Open Library API
- ➕ Add books to your personal collection
- ✏️ Edit book details and add personal notes
- 🗑️ Delete books from your collection
- 📊 Track reading status (Want to Read, Reading, Completed)
- 🎨 Modern, responsive UI with Google Fonts

## Requirements Met

✅ **Node.js/Express.js/MongoDB**: Built with Node.js and Express framework  
✅ **Express Router**: Uses `express.Router()` for book and API routes  
✅ **Mongoose**: Uses Mongoose ODM for MongoDB interactions  
✅ **Database Storage**: Stores and retrieves book data from MongoDB  
✅ **User Forms**: Multiple forms for adding, editing, and searching books  
✅ **CSS Styling**: Custom CSS with background-color, color, font-size properties  
✅ **Google Fonts**: Uses Poppins font from Google Fonts  
✅ **External API**: Integrates with Open Library API for book search  
✅ **No PHP**: Pure Node.js/JavaScript application

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Template Engine**: EJS
- **API**: Open Library API
- **Frontend**: HTML5, CSS3, Vanilla JavaScript

## Project Structure

```
book-app/
├── models/
│   └── Book.js              # Mongoose Book model
├── routes/
│   ├── books.js             # Book CRUD routes (express.Router)
│   └── api.js               # Open Library API routes
├── views/
│   ├── partials/
│   │   ├── header.ejs       # Header partial
│   │   └── footer.ejs       # Footer partial
│   ├── books/
│   │   ├── index.ejs        # Book collection view
│   │   ├── show.ejs         # Single book details
│   │   ├── new.ejs          # Add book form
│   │   └── edit.ejs         # Edit book form
│   └── index.ejs            # Home page with search
├── public/
│   ├── styles.css           # Main stylesheet with Google Fonts
│   └── script.js            # Client-side JavaScript
├── server.js                # Express server setup
└── package.json             # Dependencies

```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Setup Steps

1. **Install MongoDB** (if not already installed)
   - Local: Download from https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas

2. **Install dependencies**
   ```bash
   cd book-app
   npm install
   ```

3. **Configure MongoDB Connection**
   
   By default, the app connects to `mongodb://localhost:27017/bookapp`
   
   To use a different MongoDB URI, set the environment variable:
   ```bash
   export MONGODB_URI="your-mongodb-connection-string"
   ```
   
   Or modify the connection string in `server.js`

4. **Start the application**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

5. **Access the application**
   
   Open your browser and navigate to: `http://localhost:3000`

## Usage

### Search for Books

1. Go to the home page
2. Enter a book title, author, or ISBN in the search bar
3. Click "Search"
4. Browse results from the Open Library API
5. Click "Add to Collection" to add any book

### Manage Your Collection

- **View Collection**: Click "My Books" in the navigation
- **Add Manually**: Click "Add Book" to manually enter book details
- **View Details**: Click on any book card to see full details
- **Edit Book**: Click "Edit Book" on the detail page
- **Delete Book**: Click "Delete Book" (with confirmation)
- **Update Status**: Change reading status (Want to Read, Reading, Completed)

### Forms Available

1. **Search Form** (Home page): Search Open Library API
2. **Add Book Form** (/books/new): Manually add books with all details
3. **Edit Book Form** (/books/:id/edit): Update existing book information

## API Integration

The application uses the **Open Library API**:

- **Search Endpoint**: `https://openlibrary.org/search.json`
- **Book Details**: `https://openlibrary.org/works/{id}.json`
- **Cover Images**: `https://covers.openlibrary.org/b/id/{id}-M.jpg`

The API integration is implemented in:
- `/routes/api.js` - Backend API routes
- `/public/script.js` - Frontend search functionality

## Database Schema

**Book Model** (Mongoose):
```javascript
{
  title: String (required),
  author: String (required),
  isbn: String,
  coverUrl: String,
  publishYear: String,
  description: String,
  userNotes: String,
  status: String (enum: 'want-to-read', 'reading', 'completed'),
  dateAdded: Date (default: now)
}
```

## CSS Features

The `styles.css` file includes:

- ✅ **background-color**: Used throughout (body, header, cards, buttons)
- ✅ **color**: Text colors for various elements
- ✅ **font-size**: Multiple font sizes for hierarchy
- ✅ **Google Font**: Poppins font family
- Responsive design with media queries
- Modern card-based layout
- Hover effects and transitions

## Routes

### Main Routes
- `GET /` - Home page with search
- `GET /books` - View all books
- `GET /books/new` - Add book form
- `POST /books` - Create new book
- `GET /books/:id` - View single book
- `GET /books/:id/edit` - Edit book form
- `POST /books/:id` - Update book
- `POST /books/:id/delete` - Delete book

### API Routes
- `GET /api/search?q={query}` - Search Open Library API
- `GET /api/book/:key` - Get book details from Open Library

## Development

### To modify the application:

1. **Add new routes**: Edit files in `/routes/`
2. **Change database schema**: Edit `/models/Book.js`
3. **Update UI**: Modify files in `/views/` and `/public/styles.css`
4. **Add features**: Update `/server.js` and create new routes/views

### Useful npm commands:

```bash
npm start          # Start the server
npm run dev        # Start with nodemon (auto-restart)
npm install        # Install dependencies
```

## Troubleshooting

**MongoDB Connection Error**:
- Ensure MongoDB is running: `mongod` (for local installation)
- Check connection string in `server.js`
- Verify MongoDB service is active

**Port Already in Use**:
- Change PORT in `server.js` or set environment variable:
  ```bash
  PORT=3001 npm start
  ```

**API Search Not Working**:
- Check internet connection
- Open Library API might be temporarily down
- Check browser console for errors

## Future Enhancements

- User authentication and multiple user support
- Book ratings and reviews
- Reading progress tracking
- Book recommendations
- Export/import collection
- Advanced search filters
- Book categories/tags

## License

MIT License - Feel free to use and modify for your projects

## Credits

- Open Library API: https://openlibrary.org/developers/api
- Google Fonts: https://fonts.google.com/
- Built with Node.js, Express, and MongoDB
