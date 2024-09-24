// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:4002/orders');
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6 mt-16">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Your Orders</h1>
      {orders.length === 0 ? (
        <p className="text-lg text-center text-gray-900 dark:text-gray-100">You have no orders yet.</p>
      ) : (
        <ul className="max-w-4xl mx-auto space-y-4">
          {orders.map((order) => (
            <li key={order._id} className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Order #{order._id}</h2>
              <p className="text-gray-700 dark:text-gray-300">Name: {order.name}</p>
              <p className="text-gray-700 dark:text-gray-300">Address: {order.address}</p>
              <p className="text-gray-700 dark:text-gray-300">Phone: {order.phone}</p>
              <p className="text-gray-700 dark:text-gray-300">Amount: ₹{order.amount / 100}</p>
              <p className="text-gray-700 dark:text-gray-300">Date: {new Date(order.date).toLocaleString()}</p>
              <ul className="list-disc pl-5 mt-2">
                {order.items.map((item, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">{item.name} - {item.quantity}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;
