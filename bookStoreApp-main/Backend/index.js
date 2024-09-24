import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import orderRoute from "./route/order.route.js"; // Import the order route

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const db_url = process.env.DB_URL.replace(
    "<password>",
    process.env.DB_PASS
);

// Connect to MongoDB
try {
    mongoose.connect(db_url);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// Define routes
app.use("/books", bookRoute);
app.use("/users", userRoute);
app.use("/orders", orderRoute); // Add orders route

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
