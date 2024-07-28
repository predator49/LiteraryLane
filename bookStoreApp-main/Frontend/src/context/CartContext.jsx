// src/context/CartContext.js
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id
            ? { ...i, quantity: (i.quantity || 0) + (item.quantity || 1) } // Ensure quantity is a number
            : i
        );
      }
      return [...prevItems, { ...item, quantity: item.quantity || 1 }]; // Default quantity to 1
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 0) + 1 } // Ensure quantity is a number
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && (item.quantity || 0) > 1
          ? { ...item, quantity: (item.quantity || 0) - 1 } // Ensure quantity is a number
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// PropTypes validation
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
