import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import CategoryFilter from "./components/CategoryFilter";

import Service from "./components/Service";
import Contact from "./components/Contact";
import Boutique from "./components/Boutique";
import About from "./components/About";
import Favoris from "./components/Favoris";

import { products } from "./products";
import "./style.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <Router>
      <div className="app-container">

        {/* Sidebar */}
        {isMenuOpen && (
          <div className="sidebar-overlay">
            <div className="overlay-bg" onClick={closeMenu}></div>

            <div className="sidebar">
              <div className="sidebar-header">
                <h2>Al Haddad</h2>
                <button onClick={closeMenu}>×</button>
              </div>

              <nav className="sidebar-nav">
                <Link to="/" onClick={closeMenu}>Accueil</Link>
                <Link to="/boutique" onClick={closeMenu}>Boutique</Link>
                <Link to="/service" onClick={closeMenu}>Services</Link>
                <Link to="/favoris" onClick={closeMenu}>Favoris</Link>
                <hr />
                <Link to="/about" onClick={closeMenu}>À propos</Link>
                <Link to="/contact" onClick={closeMenu}>Contact</Link>
              </nav>
            </div>
          </div>
        )}

        {/* Menu Button */}
        <button onClick={() => setIsMenuOpen(true)} className="menu-button">
          ☰
        </button>

        <Header />

        {/* Routes */}
        <Routes>

          {/* Accueil */}
          <Route
            path="/"
            element={
              <>
                <section className="hero">
                  <h1>Al Haddad Online</h1>
                  <p>Les meilleures pépites du web, sélectionnées pour vous</p>
                </section>

                <div className="categories-container">
                  <CategoryFilter
                    categories={categories}
                    selected={selectedCategory}
                    setSelected={setSelectedCategory}
                  />
                </div>

                <main className="products-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </main>
              </>
            }
          />

          {/* Pages */}
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/service" element={<Service />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;