import React, { useState, useContext } from "react";
import { List, X, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import CartSidebar from "./CartSidebar.jsx";
import CheckoutModal from "./CheckoutModal.jsx";

const Navbar = () => {
  // State for mobile menu, cart sidebar, and checkout modal
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);
  // Toggle cart sidebar
  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <div className="w-full bg-white shadow-md fixed top-0 z-50">
      {/* Main navigation bar */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Left Section: logo and mobile menu button */}
        <div className="flex items-center gap-3">
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </div>
          <Link to="/" className="text-xl font-bold">Qtec</Link>
        </div>

        {/* Desktop Menu: navigation links and cart icon */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li>
            <Link to="/" className="hover:text-red-600 transition">
              Home
            </Link>
          </li>
          <li className="relative cursor-pointer">
            {/* Cart icon with item count badge */}
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

        {/* Mobile Menu: collapses/expands on small screens */}
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

      {/* Cart Sidebar: slides in from right when cartOpen is true */}
      <CartSidebar
        cartOpen={cartOpen}
        toggleCart={toggleCart}
        setCheckoutOpen={setCheckoutOpen}
      />
      {/* Checkout Modal: overlays the whole screen when checkoutOpen is true */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </div>
  );
};

export default Navbar;
