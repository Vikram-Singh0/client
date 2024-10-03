import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewForm from './ReviewForm';

function BookDetails({ match }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`/api/books/${match.params.id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error(error));
  }, [match.params.id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <h2>Reviews:</h2>
      <ul>
        {book.reviews.map(review => (
          <li key={review._id}>{review.text}</li>
        ))}
      </ul>
      <ReviewForm bookId={book._id} />
    </div>
  );
}

export default BookDetails;
