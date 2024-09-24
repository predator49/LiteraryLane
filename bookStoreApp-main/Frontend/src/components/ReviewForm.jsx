// components/ReviewForm.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ReviewForm = ({ bookId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const submitReview = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/bookreviews', { bookId, rating, comment });
      toast.success('Review submitted!');
      setRating(0);
      setComment('');
    } catch (error) {
      toast.error('Failed to submit review');
    }
  };

  return (
    <form onSubmit={submitReview}>
      <label>Rating:</label>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
        required
      />
      <label>Comment:</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit Review</button>
    </form>
  );
};

ReviewForm.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default ReviewForm;
