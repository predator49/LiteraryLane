// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext"; // Import CartProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <WishlistProvider>
        <CartProvider> {/* Wrap with CartProvider if needed */}
          <div className="dark:bg-slate-900 dark:text-white">
            <App />
          </div>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  </BrowserRouter>
);
