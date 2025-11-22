import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://YOUR_PUBLIC_IP:3001/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>🛒 Amazon Clone</h1>
        <input className="search" placeholder="Search for products..." />
        <button className="cart-btn">Cart (0)</button>
      </header>

      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-img" />

            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>

            <div className="rating">
              {"⭐".repeat(product.rating)}
            </div>

            <button className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

