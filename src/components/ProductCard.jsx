import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-md p-4 shadow hover:shadow-lg transition">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover mb-3 rounded"
        />
      </Link>
      <Link to={`/products/${product.id}`}>
        <h3 className="font-semibold text-lg">{product.title}</h3>
      </Link>
      <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
      <p className="text-red-600 font-bold mb-1">${product.price.toFixed(2)}</p>
      <p
        className={`text-sm ${
          product.availability === "In Stock" ? "text-green-600" : "text-red-600"
        }`}
      >
        {product.availability}
      </p>
      <p className="text-gray-600 text-xs mt-2">{product.description}</p>

      <button className="bg-red-500 text-white px-2 py-2" onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
