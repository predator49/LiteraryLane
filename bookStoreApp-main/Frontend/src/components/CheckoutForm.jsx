// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const API_KEY = 'bc5ead557ef5cbdd5ce71895'; // Your actual Exchangerate-API key
const USD_TO_INR_API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

function CheckoutForm({ onCheckout }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [usdToInrRate, setUsdToInrRate] = useState(1);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await axios.get(USD_TO_INR_API_URL);
        setUsdToInrRate(response.data.conversion_rates.INR);
      } catch (error) {
        console.error("Error fetching conversion rate:", error);
      }
    };

    fetchConversionRate();
  }, []);

  const handlePayment = () => {
    const totalAmount = 50.00; // Replace with your total amount calculation logic
    const amountInUSD = totalAmount;
    const amountInINR = amountInUSD * usdToInrRate;
    const amountInPaise = Math.round(amountInINR * 100); // Amount in the smallest unit (paise)

    const options = {
      key: "rzp_test_r3h5rcSErH0KME", // Use your actual Razorpay key
      amount: amountInPaise,
      currency: "INR",
      name: "Your Company Name",
      description: "Test Transaction",
      handler: function (response) {
        console.log(response.razorpay_payment_id);
        alert("Payment Successful");
        onCheckout(response); // Call onCheckout with the response
      },
      prefill: {
        name: "om yadav",
        email: "omyaduvanshi9@gmail.com", // Ensure this is a valid email
        contact: +918318347920, // Ensure this is a valid phone number
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function(response) {
      console.error(response.error);
      alert("Payment Failed: " + response.error.description);
    });
    rzp.open();
  };

  return (
    <div className="container mx-auto px-4 py-6 mt-16">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Checkout</h1>
      <form className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button
          type="button"
          onClick={handlePayment}
          className="bg-blue-500 dark:bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-200"
        >
          Pay with Razorpay
        </button>
      </form>
    </div>
  );
}

CheckoutForm.propTypes = {
  onCheckout: PropTypes.func.isRequired, // Mark onCheckout as required
};

export default CheckoutForm;
