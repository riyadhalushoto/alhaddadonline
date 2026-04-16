import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-image" 
          loading="lazy"
        />
        {product.rating && (
          <span className="product-rating">⭐ {product.rating}</span>
        )}
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>
        <Link to={`/product/${product.id}`} className="product-button">
          Voir les détails
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
