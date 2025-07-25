const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");


// 🟢 Test route
router.get("/", (req, res) => {
  res.send("✅ Products route working!");
});

// 🟢 Sample POST route (optional)
router.post("/add", (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).send("❌ Name and price are required.");
  }

  // For now, just echo the product (you can later connect this to DB)
  res.send({
    message: "✅ Product added successfully!",
    product: { name, price },
  });
});

module.exports = router;