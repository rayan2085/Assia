import React, { useState, useEffect } from 'react';
import ProductList from '../pages/ProductList';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace with actual API call
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
