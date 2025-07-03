import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const ProductDetails = () => {
  // Get the product id from the URL params
  const { id } = useParams();
  // Find the product object by id
  const product = products.find((p) => p.id === parseInt(id));
  // Get addToCart function from CartContext
  const { addToCart } = useContext(CartContext);

  // If product not found, show a message
  if (!product)
    return <div className="p-8 text-center">Product not found.</div>;

  // Handle add to cart button click
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-6 py-20 mt-5">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/3 h-80 object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-lg text-gray-600 mb-2">{product.brand}</p>
          <p className="text-red-600 text-2xl font-bold mb-2">
            ${product.price.toFixed(2)}
          </p>
          {/* Availability text with color */}
          <p
            className={`mb-2 ${
              product.availability === "In Stock"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {product.availability}
          </p>
          <p className="mb-4">{product.description}</p>
          {/* Add to Cart button: only enabled if product is in stock */}
          <button
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleAddToCart}
            disabled={product.availability !== "In Stock"} // Disable if not in stock
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
