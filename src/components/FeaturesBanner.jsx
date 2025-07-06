import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturesBanner = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 7))); // Limit to first 7 products (like "featured")
  }, []);

  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>

      <div className="carousel rounded-box space-x-4 w-full pb-5">
        {products.map(product => (
          <div key={product.id} className="carousel-item w-64">
            <Link
              to={`/product/${product.id}`}
              className="bg-white rounded-lg shadow-md p-4 w-full hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-48 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold line-clamp-2">{product.name}</h3>
                <p className="text-indigo-600 font-bold">{product.price}৳</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesBanner;
