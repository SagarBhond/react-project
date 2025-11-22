const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Test route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

// Products route
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "iPhone 15", price: 79999, rating: 5, image: "https://m.media-amazon.com/images/I/71bf9IpGjtL._SL1500_.jpg" },
    { id: 2, name: "Samsung S23 Ultra", price: 109999, rating: 4, image: "https://m.media-amazon.com/images/I/71S8U9VzLTL._SL1500_.jpg" },
    { id: 3, name: "Sony WH-1000XM4 Headphones", price: 29999, rating: 5, image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg" },
    { id: 4, name: "Dell Inspiron Laptop", price: 65999, rating: 4, image: "https://m.media-amazon.com/images/I/71neCEWsoUL._SL1500_.jpg" }
  ]);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

