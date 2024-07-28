// src/App.js
// eslint-disable-next-line no-unused-vars
import React from "react";
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
import Contact from "./components/Contact"; // Import the Contact component
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

function App() {
  const [authUser] = useAuth();
  console.log(authUser);

  const handleCheckout = () => {
    console.log("Handling checkout...");
  };

  return (
    <WishlistProvider>
      <CartProvider>
        <Navbar />
        <div className="dark:bg-slate-900 dark:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
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
              element={authUser ? <BestSeller /> : <Navigate to="/signup" />}
            />
            <Route
              path="/wishlist"
              element={authUser ? <Wishlist /> : <Navigate to="/signup" />}
            />
            <Route path="/contact" element={<Contact />} /> {/* Add this line */}
          </Routes>
          <Toaster />
        </div>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
