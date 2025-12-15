document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  if (searchForm) {
    searchForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const query = searchInput.value.trim();
      
      if (!query) {
        return;
      }

      searchResults.innerHTML = '<p style="text-align: center; color: #7f8c8d;">Searching...</p>';

      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (data.error) {
          searchResults.innerHTML = `<p style="text-align: center; color: #e74c3c;">${data.error}</p>`;
          return;
        }

        if (data.books.length === 0) {
          searchResults.innerHTML = '<p style="text-align: center; color: #7f8c8d;">No books found. Try a different search term.</p>';
          return;
        }

        displaySearchResults(data.books);
      } catch (error) {
        console.error('Search error:', error);
        searchResults.innerHTML = '<p style="text-align: center; color: #e74c3c;">An error occurred while searching. Please try again.</p>';
      }
    });
  }

  function displaySearchResults(books) {
    searchResults.innerHTML = '';

    books.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.className = 'search-result-item';
      
      const coverUrl = book.coverUrl || 'https://via.placeholder.com/200x300?text=No+Cover';
      
      bookElement.innerHTML = `
        <img src="${coverUrl}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/200x300?text=No+Cover'">
        <div>
          <h4>${book.title}</h4>
          <p class="author">${book.author}</p>
          <p class="year">${book.publishYear || 'Year unknown'}</p>
          <button class="btn btn-small" onclick="addBookToCollection('${escapeHtml(book.title)}', '${escapeHtml(book.author)}', '${escapeHtml(book.isbn)}', '${escapeHtml(coverUrl)}', '${escapeHtml(book.publishYear)}')">Add to Collection</button>
        </div>
      `;
      
      searchResults.appendChild(bookElement);
    });
  }
});

function addBookToCollection(title, author, isbn, coverUrl, publishYear) {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = '/books';
  
  const fields = {
    title: title,
    author: author,
    isbn: isbn,
    coverUrl: coverUrl,
    publishYear: publishYear,
    status: 'want-to-read'
  };
  
  for (const [key, value] of Object.entries(fields)) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }
  
  document.body.appendChild(form);
  form.submit();
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text).replace(/[&<>"']/g, function(m) { return map[m]; });
}
