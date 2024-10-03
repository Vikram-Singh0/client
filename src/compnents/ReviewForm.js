import React, { useState } from 'react';
import axios from 'axios';

function ReviewForm({ bookId }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/books/${bookId}/review`, { text })
      .then(response => {
        alert('Review added!');
        setText('');
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your review..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
