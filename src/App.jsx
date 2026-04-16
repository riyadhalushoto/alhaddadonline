import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import CategoryFilter from "./components/CategoryFilter";
import ProductDetail from "./components/ProductDetail"; // Nouveau composant à créer

import Service from "./components/Service";
import Contact from "./components/Contact";
import Boutique from "./components/Boutique";
import About from "./components/About";
import Favoris from "./components/Favoris";

import { products } from "./products";
import "./style.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // Filtrage optimisé pour grand volume
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

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

        <button onClick={() => setIsMenuOpen(true)} className="menu-button">☰</button>
        <Header />

        <Routes>
          <Route path="/" element={
              <>
                <section className="hero">
                  <h1>Al Haddad Online</h1>
                  <p>Les meilleures pépites du web, sélectionnées pour vous</p>
                  
                  {/* Barre de recherche ajoutée */}
                  <div className="search-container">
                    <input 
                      type="text" 
                      placeholder="Rechercher un produit..." 
                      className="search-input"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
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
          
          {/* Route pour les détails */}
          <Route path="/product/:id" element={<ProductDetail />} />
          
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
