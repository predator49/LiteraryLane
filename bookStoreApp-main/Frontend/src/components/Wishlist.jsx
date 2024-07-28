// Wishlist.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useWishlist } from '../context/WishlistContext';
import Cards from './Cards';
import BookDetailModal from './BookDetailModal'; // Import the BookDetailModal component
import { useNavigate } from 'react-router-dom';

function Wishlist() {
  const { wishlist } = useWishlist();
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null); // State to manage the selected book

  const handleCardClick = (item) => {
    setSelectedBook(item);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-6">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          Your <span className="text-pink-500">Wishlist</span>
        </h1>
        <button
          className="mt-4 px-4 py-2 rounded bg-blue-500 text-white"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
        {wishlist.length === 0 ? (
          <p className="mt-12 font-medium text-xl">Your wishlist is empty.</p>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {wishlist.map((item) => (
              <Cards
                key={item.id}
                item={item}
                isWishlistView
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        )}
      </div>
      {selectedBook && (
        <BookDetailModal book={selectedBook} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Wishlist;
