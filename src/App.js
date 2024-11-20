import './App.css';
import React, { useState } from "react";
import Home from './component/Home';
import Product from './component/Product';
import Navbar from './component/Navbar';
import Cart from './component/Cart';
import Banner from './component/Banner';
import Review from './component/Review';
import Footer from './component/Footer';
import ContactSection from './component/ContactSection';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Banner />
      <Product addToCart={addToCart} />
      <Cart cart={cart} setCart={setCart} />
      <Review />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
