import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ user }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => String(p.id) === id);
        setProduct(found);
        setLoading(false);
      });
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments(prev => [...prev, { text: comment, user: user?.name || "Guest" }]);
      setComment('');
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!product) return <p className="text-center mt-10 text-red-500">Product not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-primary text-xl font-semibold mt-2">{product.price}৳</p>
          <p className="mt-4 text-gray-600">{product.description || "No description available."}</p>
          <p className="mt-2 text-yellow-500">⭐⭐⭐⭐☆ (4/5)</p>

          <div className="mt-6 flex gap-3">
            <button className="btn btn-outline" disabled={!user}>Add to Cart</button>
            <button className="btn btn-primary" disabled={!user}>Buy Now</button>
          </div>

          {!user && (
            <p className="text-error text-sm mt-2">Please log in to purchase or comment.</p>
          )}
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Customer Comments</h2>
        <form onSubmit={handleCommentSubmit} className="flex flex-col gap-2 mb-4">
          <textarea
            className="textarea textarea-bordered"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            disabled={!user}
          ></textarea>
          <button type="submit" className="btn btn-primary self-end" disabled={!user}>Post Comment</button>
        </form>

        {/* Display comments */}
        <div className="space-y-3">
          {comments.length === 0 && <p className="text-gray-500">No comments yet.</p>}
          {comments.map((c, i) => (
            <div key={i} className="p-3 bg-base-200 rounded">
              <p className="font-semibold">{c.user}</p>
              <p className="text-sm text-gray-700">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
