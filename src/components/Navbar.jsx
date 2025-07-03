import React, { useState } from "react";
import { List, X, ShoppingCart } from "@phosphor-icons/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full bg-white shadow-md">
      <nav className="container mx-auto  px-4 py-4 flex items-center justify-between relative">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* Mobile Hamburger */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </div>

          {/* Logo */}
          <h1 className="text-xl font-bold">Qtec</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-primary font-medium">
          <li>
            <a href="#" className="hover:text-red-600 transition">
              Home
            </a>
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

        {/* Mobile Menu (Animated) */}
        <div
          className={`absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 transition-all duration-300 ease-in-out overflow-hidden md:hidden z-50 ${
            menuOpen ? "max-h-40 py-4 gap-4" : "max-h-0 py-0 gap-0"
          }`}
        >
          <a href="#" className="hover:text-red-600 transition">
            Home
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
