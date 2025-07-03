// CartSidebar.jsx
// Sidebar component for displaying cart items, quantity controls, and checkout button.
// Receives cartOpen (sidebar visibility), toggleCart (close/open handler), and setCheckoutOpen (to open checkout modal) as props.
import React, { useContext } from "react";
import { X, Plus, Minus } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const CartSidebar = ({ cartOpen, toggleCart, setCheckoutOpen }) => {
  // Access cart state and actions from context
  const { cartItems, increaseQty, decreaseQty, totalPrice } = useContext(CartContext);

  return (
    // Sidebar container, slides in/out based on cartOpen
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 z-50 transform transition-transform duration-300 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header with title and close button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={toggleCart}>
          <X size={24} />
        </button>
      </div>

      {/* Cart items list */}
      <div className="space-y-4 max-h-[70vh] overflow-y-auto">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border p-3 rounded-md"
          >
            <div>
              <div className="flex items-start gap-3">
                <img src={item.image} alt={item.title} className="w-10 h-10 object-cover rounded" />
                <h4 className="text-md">{item.title.split(' ').length > 4 ? item.title.split(' ').slice(0, 4).join(' ') + '...' : item.title}</h4>
              </div>
      
            </div>
            {/* Quantity controls */}
            <div className="flex items-center justify-between mt-3">
            <p className="text-sm text-gray-500 flex items-center gap-1">
                <span>${item.price}</span>   
                <X size={10} /> 
                <span>{item.quantity}</span>
              </p>
             <div className=" w-40 flex items-center justify-end gap-3">
             <button
                className="bg-gray-200 p-1 rounded"
                onClick={() => decreaseQty(item.id)}
              >
                <Minus size={14} />
              </button>
              <span className="w-4 text-center text-sm">{item.quantity}</span>
              <button
                className="bg-gray-200 p-1 rounded"
                onClick={() => increaseQty(item.id)}
              >
                <Plus size={14} />
              </button>
             </div>
            </div>
          </div>
        ))}
      </div>

      {/* total price and checkout button */}
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Total:</span>
          <span className="font-bold text-red-600">${totalPrice}</span>
        </div>
        {/* Checkout button opens the modal via setCheckoutOpen */}
        <button
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          onClick={() => setCheckoutOpen(true)}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar; 