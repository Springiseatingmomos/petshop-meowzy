import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Shop = ({ user }) => {
  const [products, setProducts] = useState([]);
  const query = useQuery();
  const urlCategory = query.get("category");
  const [category, setCategory] = useState(urlCategory || 'all');
  const navigate = useNavigate();

  // Fetch products once
  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  
  useEffect(() => {
    setCategory(urlCategory || 'all');
  }, [urlCategory]);

  const filteredProducts = category === 'all'
    ? products
    : products.filter(product => product.category === category);

  const handleCategoryClick = (cat) => {
    navigate(cat === 'all' ? '/shop' : `/shop?category=${encodeURIComponent(cat)}`);
  };

  return (
    <div className="flex max-w-7xl mx-auto p-6 gap-4">
      {/* Sidebar */}
      <div className="w-52 bg-base-200 p-4 rounded-box shadow-sm">
        <h2 className="text-xl font-bold mb-2">Filter by Category</h2>
        <ul className="menu">
          {["all", "cat", "dog", "fish", "bird", "reptile", "small pet"].map(cat => (
            <li key={cat}>
              <button
                onClick={() => handleCategoryClick(cat)}
                className={category === cat ? "active font-bold" : ""}
              >
                {cat === 'all' ? 'All Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
        {filteredProducts.map(product => (
          <div key={product.id} className="card bg-base-100 shadow-md hover:shadow-lg">
            <figure>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="text-primary font-bold">{product.price}৳</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-sm" disabled={!user}>
                  Add to Cart
                </button>
                <button className="btn btn-primary btn-sm" disabled={!user}>
                  Buy Now
                </button>
              </div>
              {!user && (
                <p className="text-xs text-error mt-2">Sign in to buy or add to cart</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
