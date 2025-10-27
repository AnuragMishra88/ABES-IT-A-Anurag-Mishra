import React from "react";
import "./App.css";

const products = [
  { id: 1, name: "Smartphone", price: "₹12,999", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "₹55,999", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: "₹1,999", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Smartwatch", price: "₹3,499", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Shoes", price: "₹2,499", image: "https://via.placeholder.com/150" },
  { id: 6, name: "T-Shirt", price: "₹799", image: "https://via.placeholder.com/150" },
];

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Flipkart Clone</h2>
        <input type="text" placeholder="Search for products..." className="search" />
        <div className="nav-links">
          <span>Login</span>
          <span>Become a Seller</span>
          <span>More</span>
          <span>Cart 🛒</span>
        </div>
      </nav>

      {/* Banner */}
      <div className="banner">
        <h3>Welcome to Flipkart Clone</h3>
        <p>Shop your favorite items at the best prices!</p>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 Flipkart Clone | Built with ❤️ using React</p>
      </footer>
    </div>
  );
}

export default App;
