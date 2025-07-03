import React, { useState } from "react";
import { List, X, ShoppingCart, Plus, Minus } from "@phosphor-icons/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Dummy cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", price: 50, quantity: 1 },
    { id: 2, name: "Product B", price: 80, quantity: 2 },
  ]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCart = () => setCartOpen(!cartOpen);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full bg-white shadow-md relative z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </div>
          <h1 className="text-xl font-bold">Qtec</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li>
            <a href="#" className="hover:text-red-600 transition">
              Home
            </a>
          </li>
          <li className="relative cursor-pointer">
            <button onClick={toggleCart}>
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            </button>
          </li>
        </ul>

        {/* Mobile Cart Icon */}
        <div className="md:hidden relative">
          <button onClick={toggleCart}>
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 transition-all duration-300 ease-in-out overflow-hidden md:hidden z-40 ${
            menuOpen ? "max-h-40 py-4 gap-4" : "max-h-0 py-0 gap-0"
          }`}
        >
          <a href="#" className="hover:text-red-600 transition">
            Home
          </a>
        </div>
      </nav>

      {/* 🛒 Cart Sidebar */}
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
          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
            View Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
