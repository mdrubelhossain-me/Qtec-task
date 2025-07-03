// ProductCard component displays individual product details and allows adding the product to the cart
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

// Receives a single product object as a prop
const ProductCard = ({ product }) => {
  // Destructure addToCart function from CartContext
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
        <h3 className="text-lg hover:text-red-600">{product.title}</h3>
      </Link>
      <p className="text-red-600 my-2">${product.price.toFixed(2)}</p>
      {/* Add to cart button */}
      <button
        className="bg-red-500 text-white px-2 py-2 rounded-md"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
