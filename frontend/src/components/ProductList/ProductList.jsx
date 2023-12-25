import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true); // Start loading before fetching
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
      setIsLoading(false); // Stop loading after fetching
    };

    fetchProducts();
  }, []);

  const productListStyle = {
    display: 'grid',
    padding: '0 var(--padding-lg)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, auto))',
    gap: '1rem',
  };

  return (
    <div className='productList' style={productListStyle}>
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <ProductCard key={index} product={null} />
          ))
        : products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
    </div>
  );
};

export default ProductList;