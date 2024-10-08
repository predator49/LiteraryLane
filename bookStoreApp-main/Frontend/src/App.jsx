// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Course from "./components/Course";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import CheckoutForm from "./components/CheckoutForm";
import BestSeller from "./components/BestSeller";
import Wishlist from "./components/Wishlist";
import Contact from "./components/Contact";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import BookDetailModal from "./components/BookDetailModal"; // Import the BookDetailModal component

function App() {
  const [authUser] = useAuth();
  console.log(authUser);

  const [selectedBook, setSelectedBook] = useState(null);

  const handleCheckout = () => {
    console.log("Handling checkout...");
  };

  const handleCardClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <WishlistProvider>
      <CartProvider>
        <Navbar />
        <div className="dark:bg-slate-900 dark:text-white">
          <Routes>
            <Route path="/" element={<Home onCardClick={handleCardClick} />} />
            <Route
              path="/course"
              element={authUser ? <Course /> : <Navigate to="/signup" />}
            />
            <Route
              path="/cart"
              element={authUser ? <Cart /> : <Navigate to="/signup" />}
            />
            <Route
              path="/checkout"
              element={authUser ? <CheckoutForm onCheckout={handleCheckout} /> : <Navigate to="/signup" />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route
              path="/bestseller"
              element={authUser ? <BestSeller onCardClick={handleCardClick} /> : <Navigate to="/signup" />}
            />
            <Route
              path="/wishlist"
              element={authUser ? <Wishlist /> : <Navigate to="/signup" />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Toaster />
        </div>
        {selectedBook && (
          <BookDetailModal book={selectedBook} onClose={handleCloseModal} />
        )}
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
