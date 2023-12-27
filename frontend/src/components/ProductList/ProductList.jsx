import { useState, useEffect, useRef } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './index.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const productListRef = useRef(null); // Ref for the product list container


  const scrollLeft = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://server-lime-omega.vercel.app/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);
  

  return (
    <div>
      <div className='productList' ref={productListRef}>
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCard key={index} product={null} />
            ))
          : products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </div>
      <div className="indicator">
        <img id='left' onClick={scrollLeft} src="left-arrow.svg" alt="left-arrow" />
        <img id='right' onClick={scrollRight} src="right-arrow.svg" alt="right-arrow" />
      </div>
    </div>
  );
};

export default ProductList;