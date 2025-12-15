# Quick Start Guide

## Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd book-app
npm install
```

### 2. Start MongoDB
Make sure MongoDB is running on your system:

**Option A: Local MongoDB**
```bash
# Start MongoDB service
mongod
```

**Option B: MongoDB Atlas (Cloud)**
- Create a free account at https://www.mongodb.com/cloud/atlas
- Create a cluster
- Get your connection string
- Update MONGODB_URI in server.js

### 3. Start the Application
```bash
npm start
```

Visit: http://localhost:3000

## First Steps in the App

1. **Search for Books**
   - On the home page, search for your favorite books
   - Example: "Harry Potter", "1984", "The Great Gatsby"

2. **Add to Collection**
   - Click "Add to Collection" on search results
   - Or manually add books via "Add Book" in the navigation

3. **Manage Your Books**
   - View all books in "My Books"
   - Click on any book to see details
   - Edit books to add personal notes
   - Update reading status

## Common Issues

**"MongoDB connection error"**
- Solution: Make sure MongoDB is running (`mongod` command)

**"Port 3000 already in use"**
- Solution: Change PORT in server.js or run: `PORT=3001 npm start`

**"Cannot find module"**
- Solution: Run `npm install` again

## Need Help?

Check the full README.md for detailed documentation.
