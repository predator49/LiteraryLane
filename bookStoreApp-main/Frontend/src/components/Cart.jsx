// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate(); // Use useNavigate hook

  const calculateTotal = () => {
    if (!Array.isArray(cartItems)) return '0.00';
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = parseInt(item.quantity, 10) || 0;
        return total + price * quantity;
      }, 0)
      .toFixed(2);
  };

  const handlePlaceOrder = () => {
    navigate("/checkout"); // Navigate to checkout screen
  };

  return (
    <div className="container mx-auto px-4 py-6 mt-16">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg text-center text-gray-900 dark:text-gray-100">Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 p-4 max-w-4xl mx-auto">
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.name}</h2>
                      <p className="text-gray-600 dark:text-gray-400">{item.category}</p>
                      <p className="text-gray-800 dark:text-gray-200">${parseFloat(item.price).toFixed(2)}</p>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md"
                        >
                          -
                        </button>
                        <p className="text-gray-600 dark:text-gray-400">Quantity: {item.quantity}</p>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-600 font-semibold"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={clearCart}
                className="bg-red-500 dark:bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-600 dark:hover:bg-red-500 transition duration-200"
              >
                Clear Cart
              </button>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Total: ${calculateTotal()}</h2>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={handlePlaceOrder}
                className="bg-blue-500 dark:bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-200"
              >
                Place Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
