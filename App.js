import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/home";
import Products from "./pages/products";
import Prices from "./pages/prices";
import Contact from "./pages/contact";
import About from "./pages/about"

import Header from "./components/header";
import Footer from "./components/footer";

import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="prices" element={<Prices />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
