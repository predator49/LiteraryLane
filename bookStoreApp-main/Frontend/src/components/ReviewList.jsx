// components/ReviewList.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ReviewList = ({ bookId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/bookreviews/books/${bookId}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Failed to fetch reviews', error);
      }
    };
    fetchReviews();
  }, [bookId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map((review) => (
        <div key={review._id}>
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.comment}</p>
          <p>By: {review.userId.name}</p>
        </div>
      ))}
    </div>
  );
};

ReviewList.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default ReviewList;
