import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const isLoading = !product; // Determine loading state based on the presence of 'product'

  const imagePlaceholder = (
    <div className="image-placeholder"></div> // Use a class instead of inline styles for the placeholder
  );

  const productImage = product && (
    <img src={product.Image || 'default_product.jpg'} alt={product.Name || ""} />
  );

  return (
    <div className={`card ${isLoading ? 'loading-card' : ''}`}>
      {isLoading ? imagePlaceholder : productImage}
      <div className="card-body">
        <h2 className='name'>{product && product.Name}</h2>
        <p className='price'>{product && `$${product.Price.toFixed(2)}`}</p>
        {product && <button className='btn-primary' id='addToCart'>Add to Cart</button>}
      </div>
    </div>
  );
};

export default ProductCard;