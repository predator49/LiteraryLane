// src/components/Orders.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Your Orders</h2>
      {orders.map((order) => (
        <div key={order._id}>
          <h3>Order Date: {new Date(order.orderDate).toLocaleDateString()}</h3>
          <p>Total Amount: ${order.totalAmount}</p>
          <ul>
            {order.books.map((book) => (
              <li key={book.bookId._id}>
                {book.bookId.title} - {book.quantity} x ${book.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Orders;
