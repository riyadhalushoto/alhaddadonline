import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, AFFILIATE_TAG } from '../products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="page">Produit introuvable.</div>;

  const handleBuyClick = () => {
    const searchQuery = encodeURIComponent(product.title);
    const amazonUrl = `https://www.amazon.fr/s?k=${searchQuery}&tag=${AFFILIATE_TAG}&linkCode=ll2`;
    window.open(amazonUrl, '_blank');
  };

  return (
    <div className="page product-detail-page">
      <Link to="/" className="back-link">← Retour à l'accueil</Link>
      <div className="detail-container">
        <img src={product.image} alt={product.title} className="detail-image" />
        <div className="detail-info">
          <span className="product-category">{product.category}</span>
          <h1 className="page-title">{product.title}</h1>
          <p className="page-text">{product.description}</p>
          
          <button onClick={handleBuyClick} className="buy-button">
            Acheter sur Amazon
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
