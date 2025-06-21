import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css";

const products = [
  { id: 1, name: "Classic Walnut Baklava", price: 4.99, description: "Layered pastry with walnut, honey-based syrup", image: process.env.PUBLIC_URL + "/images/walnut-baklava.jpg" },
  { id: 2, name: "Pistachio Baklava", price: 5.49, description: "Layered pastry with pistachios and simple syrup", image: process.env.PUBLIC_URL + "/images/pistachio-baklava.jpg" },
  { id: 3, name: "Chocolate Drizzle Baklava", price: 5.99, description: "Walnut baklava with chocolate topping (no dairy)", image: process.env.PUBLIC_URL + "/images/chocolate-baklava.jpg" },
  { id: 4, name: "Pogaca", price: 3.49, description: "Savory pastry with sliced olives only (no cheese or potato)", image: process.env.PUBLIC_URL + "/images/pogaca.jpg" },
  { id: 5, name: "Simit", price: 2.99, description: "Sesame-coated bread ring", image: process.env.PUBLIC_URL + "/images/simit.jpg" },
  { id: 6, name: "Bagels", price: 1.99, description: "Plain, non-dairy bagels only", image: process.env.PUBLIC_URL + "/images/bagel.jpg" },
  { id: 7, name: "Tulumba", price: 3.99, description: "Fried syrup-soaked dough pastries (no dairy)", image: process.env.PUBLIC_URL + "/images/tulumba.jpg" },
  { id: 8, name: "Sekerpare", price: 3.99, description: "Semolina-based baked dessert soaked in syrup", image: process.env.PUBLIC_URL + "/images/sekerpare.jpg" },
  { id: 9, name: "Chocolate Chip Cookies", price: 4.49, description: "No cream filling. With chocolate, hazelnuts, cinnamon, cocoa", image: process.env.PUBLIC_URL + "/images/cookies.jpg" },
  { id: 10, name: "Muffins", price: 3.99, description: "No dairy or meat. Fruit & nut as available", image: process.env.PUBLIC_URL + "/images/muffins.jpg" },
  { id: 11, name: "Cakes", price: 6.99, description: "No cream, custard or dairy fillings", image: process.env.PUBLIC_URL + "/images/cake.jpg" },
  { id: 12, name: "Bread", price: 2.49, description: "Plain, fruit, or nut bread – no cheese or meat", image: process.env.PUBLIC_URL + "/images/bread.jpg" },
  { id: 13, name: "Brownies", price: 3.99, description: "No cream or dairy toppings", image: process.env.PUBLIC_URL + "/images/brownie.jpg" }
];

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Taste Of Home Ca</div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/cart">Cart</Link>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="footer" style={{ backgroundColor: '#09595b', color: 'white', padding: '20px', textAlign: 'center', marginTop: '40px' }}>
    <p style={{ margin: '5px 0' }}>Email: <a href="mailto:tasteofhomeca1@gmail.com" style={{ color: '#e4a42d', textDecoration: 'none' }}>tasteofhomeca1@gmail.com</a></p>
    <p style={{ margin: '5px 0' }}>Phone: <a href="tel:9162618880" style={{ color: '#e4a42d', textDecoration: 'none' }}>916-261-8880</a></p>
    <p style={{ fontSize: '12px', color: '#ccc', marginTop: '10px' }}>© 2025 Taste Of Home Ca. All rights reserved.</p>
  </footer>
);

const Payment = () => (
  <div className="page">
    <h2 className="section-title">Payment Page</h2>
    <p>To complete your purchase, please contact us directly at <a href="mailto:tasteofhomeca1@gmail.com">tasteofhomeca1@gmail.com</a> or call <a href="tel:9162618880">916-261-8880</a>.</p>
    <p>Online payment integration is coming soon! We appreciate your patience and support.</p>
  </div>
);

const Home = ({ addToCart }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    const qty = parseInt(value) || 1;
    setQuantities({ ...quantities, [id]: qty });
  };

  return (
    <div className="page">
      <h2 className="section-title">Our Bakery Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
<img src={product.image} alt={product.name} className="product-image" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }} />

            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <input
              type="number"
              min="1"
              value={quantities[product.id] || 1}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              style={{ width: '60px', marginBottom: '10px' }}
            />
            <button onClick={() => addToCart(product, quantities[product.id] || 1)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => (
  <div className="page">
    <h2 className="section-title">About Us</h2>
    <p>We are a large and close-knit family with deep roots in the restaurant and hospitality industry. With over 30 years of experience, we’ve dedicated ourselves to mastering our craft and delivering quality at every level.</p>
    <p>Now, we’re proud to bring our skills to California and share the unique flavors that define us. Baklava is our specialty, and through years of hard work and teamwork, we’ve elevated it to an art form. From traditional desserts to a wide range of market-ready products, we offer a diverse selection made with care and expertise.</p>
    <p>Our goal is to introduce you, our valued customers, to a taste that speaks for itself. We hope you’ll have the chance to try our products and experience the quality that sets us apart.</p>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page">
      <h2 className="section-title">Contact Us</h2>
      <p>Phone: 916-261-8880</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
      {submitted && <p style={{ color: 'green', marginTop: '10px' }}>Message sent successfully!</p>}
    </div>
  );
};

const Cart = ({ cart }) => {
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="page">
      <h2 className="section-title">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your selected products will appear here.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.quantity} × {item.name} — ${ (item.quantity * item.price).toFixed(2) }</li>
            ))}
          </ul>
          <p><strong>Total: ${total.toFixed(2)}</strong></p>
          <button onClick={() => navigate('/payment')}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<div className="page"><h2>Page Not Found</h2></div>} />
      </Routes>
      <Footer />
    </Router>
  );
}
