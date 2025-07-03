import React, { useContext } from "react";
import { X, Plus, Minus } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const CartSidebar = ({ cartOpen, toggleCart }) => {
  const { cartItems, increaseQty, decreaseQty, totalPrice } = useContext(CartContext);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 z-50 transform transition-transform duration-300 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={toggleCart}>
          <X size={24} />
        </button>
      </div>

      <div className="space-y-4 max-h-[70vh] overflow-y-auto">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border p-3 rounded-md flex justify-between items-center"
          >
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-500">
                ৳{item.price} × {item.quantity}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="bg-gray-200 p-1 rounded"
                onClick={() => decreaseQty(item.id)}
              >
                <Minus size={16} />
              </button>
              <span>{item.quantity}</span>
              <button
                className="bg-gray-200 p-1 rounded"
                onClick={() => increaseQty(item.id)}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Total:</span>
          <span className="font-bold text-red-600">৳{totalPrice}</span>
        </div>
        <Link to="/cart" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default CartSidebar; 