import React, { useState, useContext } from "react";
import { List, X, ShoppingCart, Plus, Minus } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import CartSidebar from './CartSidebar.jsx';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCart = () => setCartOpen(!cartOpen);

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
            <Link to="/" className="hover:text-red-600 transition">
              Home
            </Link>
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
          <Link to="/" className="hover:text-red-600 transition">
            Home
          </Link>
        </div>
      </nav>

      {/* 🛒 Cart Sidebar */}
      <CartSidebar cartOpen={cartOpen} toggleCart={toggleCart} />
    </div>
  );
};

export default Navbar;
