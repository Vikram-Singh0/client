import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <Link to={`/book/${book._id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-book">Add New Book</Link>
    </div>
  );
}

export default BookList;
