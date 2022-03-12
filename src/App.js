import "./App.css";
import Navbar from "./commponent/Navbar";
import Home from "./commponent/Home";
import Products from "./commponent/Products";
import Product from "./commponent/Product"
import { Route, Routes } from "react-router-dom";
import Cart from "./commponent/Cart"
import About from "./About";
import Contact from "./Contact";
import Checkout from "./commponent/Checkout";

function App() {
  return (
    <>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/Products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
