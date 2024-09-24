import express from "express";
import { createOrder, getUserOrders } from "../controller/order.controller.js";
import { protect } from "../middleware/authMiddleware.js"; // Adjust the path

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/:userId", protect, getUserOrders);

export default router;
