<<<<<<< HEAD
import React from "react";
import "../style.css";

const ProductCard = ({ product }) => {

  const handleShare = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const shareUrl = `${window.location.origin}${window.location.pathname}#product-${product.id}`;

    if (navigator.share) {
      navigator.share({
        url: shareUrl,
      })
      .catch(() => {
        navigator.clipboard.writeText(shareUrl);
      });
    } else {
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          alert("Lien copié !");
        })
        .catch(err => {
          console.error("Erreur copie :", err);
        });
    }
  };

  return (

    <div id={`product-${product.id}`} className="product-card">

      {/* image produit */}
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
      >

        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

      </a>

      {/* catégorie */}
      <p className="product-category">
        {product.category}
      </p>

      {/* titre */}
      <h3 className="product-title">
        {product.title}
      </h3>

      {/* description */}
      <p className="product-description">
        {product.description}
      </p>

      {/* bouton offre */}
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="product-button"
      >
        Voir l'offre officielle
      </a>

      {/* bouton partage */}
      <button
        onClick={handleShare}
        className="share-button"
      >
        Partager
      </button>

    </div>

  );
};

export default ProductCard;
=======
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-category">{product.category}</div>
      <h3 className="product-title">{product.title}</h3>
      <Link to={`/product/${product.id}`} className="product-button">
        Voir les détails
      </Link>
    </div>
  );
};

export default ProductCard;
>>>>>>> ae4ca85 (affiliate-site)
