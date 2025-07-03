import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import CheckoutModal from '../components/CheckoutModal';

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, totalPrice } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-6 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link to="/products" className="text-red-600 underline">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      <div className="flex flex-col gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-6 border-b pb-4">
            <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500">{item.brand}</p>
              <p className="text-red-600 font-bold">${item.price.toFixed(2)}</p>
              <div className="flex items-center gap-2 mt-2">
                <button className="bg-gray-200 px-2 py-1 rounded" onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button className="bg-gray-200 px-2 py-1 rounded" onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <button className="text-red-500 underline" onClick={() => removeFromCart(item.id)}>Remove</button>
              <span className="font-bold">Subtotal: ${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center border-t pt-4">
        <span className="text-xl font-bold">Total: <span className="text-red-600">${totalPrice}</span></span>
        <button
          onClick={() => setShowModal(true)}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Checkout
        </button>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Cart;
