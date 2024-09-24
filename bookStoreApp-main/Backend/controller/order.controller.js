import Order from "../model/order.model.js";
import Book from "../model/book.model.js";

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const { userId, items } = req.body;
    const order = new Order({ userId, items });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get orders for a specific user
export const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
