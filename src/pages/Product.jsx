import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Product = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">Our Products</h1>
      <h2 className="text-lg text-center text-gray-600 mb-10">Browse our exclusive collection and find your favorites!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
