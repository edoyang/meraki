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
    padding: '50px 100px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1rem',
  };

  return (
    <div className='productList' style={productListStyle}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;