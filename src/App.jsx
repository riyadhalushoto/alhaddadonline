<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useMemo } from "react";
>>>>>>> ae4ca85 (affiliate-site)
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import CategoryFilter from "./components/CategoryFilter";
<<<<<<< HEAD
=======
import ProductDetail from "./components/ProductDetail"; // Nouveau composant à créer
>>>>>>> ae4ca85 (affiliate-site)

import Service from "./components/Service";
import Contact from "./components/Contact";
import Boutique from "./components/Boutique";
import About from "./components/About";
import Favoris from "./components/Favoris";

import { products } from "./products";
import "./style.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
<<<<<<< HEAD
=======
  const [searchTerm, setSearchTerm] = useState("");
>>>>>>> ae4ca85 (affiliate-site)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

<<<<<<< HEAD
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);
=======
  // Filtrage optimisé pour grand volume
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);
>>>>>>> ae4ca85 (affiliate-site)

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <Router>
      <div className="app-container">
<<<<<<< HEAD

=======
>>>>>>> ae4ca85 (affiliate-site)
        {/* Sidebar */}
        {isMenuOpen && (
          <div className="sidebar-overlay">
            <div className="overlay-bg" onClick={closeMenu}></div>
<<<<<<< HEAD

=======
>>>>>>> ae4ca85 (affiliate-site)
            <div className="sidebar">
              <div className="sidebar-header">
                <h2>Al Haddad</h2>
                <button onClick={closeMenu}>×</button>
              </div>
<<<<<<< HEAD

=======
>>>>>>> ae4ca85 (affiliate-site)
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

<<<<<<< HEAD
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
=======
        <button onClick={() => setIsMenuOpen(true)} className="menu-button">☰</button>
        <Header />

        <Routes>
          <Route path="/" element={
>>>>>>> ae4ca85 (affiliate-site)
              <>
                <section className="hero">
                  <h1>Al Haddad Online</h1>
                  <p>Les meilleures pépites du web, sélectionnées pour vous</p>
<<<<<<< HEAD
=======
                  
                  {/* Barre de recherche ajoutée */}
                  <div className="search-container">
                    <input 
                      type="text" 
                      placeholder="Rechercher un produit..." 
                      className="search-input"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
>>>>>>> ae4ca85 (affiliate-site)
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
<<<<<<< HEAD

          {/* Pages */}
=======
          
          {/* Route pour les détails */}
          <Route path="/product/:id" element={<ProductDetail />} />
          
>>>>>>> ae4ca85 (affiliate-site)
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/service" element={<Service />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD

=======
>>>>>>> ae4ca85 (affiliate-site)
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> ae4ca85 (affiliate-site)
