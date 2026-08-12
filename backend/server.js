const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Safar Tours backend is running",
  });
});

// Create Razorpay Order
app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Amount is required",
      });
    }

    const options = {
      amount: Number(amount),
      currency: "INR",
      receipt: `safar_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("RAZORPAY ORDER ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to create Razorpay order",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
  });
}

module.exports = app;