// src/context/WishlistContext.js
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const addToWishlist = (book) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = [...prevWishlist, book];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const removeFromWishlist = (bookId) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((book) => book.id !== bookId);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const isInWishlist = (bookId) => wishlist.some((book) => book.id === bookId);

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWishlist = () => useContext(WishlistContext);
