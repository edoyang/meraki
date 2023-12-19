import React, { useState, useEffect } from 'react';
import './ProductCard.scss';

const ProductCard = ({ product: initialProduct }) => {
  const [product, setProduct] = useState(initialProduct);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProduct(initialProduct);
      setIsLoading(false);
    });

    return () => clearTimeout(timer);
  }, [initialProduct]);

  const imagePlaceholder = (
    <div style={{ height: '250px', backgroundColor: '#cccccc' }}></div>
  );

  const productImage = (
    <img src={product && product.Image ? product.Image : 'default_product.jpg'} 
         alt={product ? product.Name : ""}
    />
  );

  return (
    <div className={`card ${isLoading ? 'loading-card' : ''}`}>
      {isLoading ? imagePlaceholder : productImage}
      <div className="card-body">
        <h2 className='name'>{!isLoading && product ? product.Name : ""}</h2>
        <p className='price'>{!isLoading && product ? `$${product.Price.toFixed(2)}` : ""}</p>
        {!isLoading && <button className='btn-primary' id='addToCart'>Add to Cart</button>}
      </div>
    </div>
  );
};

export default ProductCard;
