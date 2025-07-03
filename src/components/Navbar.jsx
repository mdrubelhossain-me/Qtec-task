import React, { useState } from 'react';
import { List, X, ShoppingCart } from "@phosphor-icons/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <List size={28} />}
        </div>

        {/* Logo */}
        <h1 className="text-xl font-bold">MyShop</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 font-medium">
        <li>
          <a href="#" className="hover:text-blue-600 transition">Home</a>
        </li>
        <li className="relative cursor-pointer">
          <ShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </li>
      </ul>

      {/* Mobile Cart Icon */}
      <div className="md:hidden relative">
        <ShoppingCart size={24} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          2
        </span>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-4 md:hidden z-50">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
