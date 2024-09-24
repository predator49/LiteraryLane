// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { CartContext } from '../context/CartContext'; // Import your CartContext
import { useWishlist } from '../context/WishlistContext'; // Import WishlistContext
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // Import heart icons

function BookDetailModal({ book, onClose }) {
  const [authUser] = useAuth();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // Get addToCart from context
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist(); // Get wishlist methods from context

  const handleBuyNow = () => {
    if (!authUser && book.price > 0) {
      navigate('/signup');
    } else {
      addToCart({ ...book, quantity: 1 });
      onClose(); // Optionally close the modal after adding to cart
    }
  };

  const handleWishlistClick = () => {
    if (isInWishlist(book.id)) {
      removeFromWishlist(book.id);
    } else {
      addToWishlist(book);
    }
  };

  if (!book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-2xl font-bold p-2"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={book.image}
          alt={book.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{book.name}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{book.title}</p>
        <p className="text-xl font-semibold mb-4">${book.price}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{book.category}</p>
        <div className="flex items-center space-x-4 mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
          <button
            className="text-xl"
            onClick={handleWishlistClick}
          >
            {isInWishlist(book.id) ? (
              <AiFillHeart className="text-pink-500" />
            ) : (
              <AiOutlineHeart />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

BookDetailModal.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default BookDetailModal;