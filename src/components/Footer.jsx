import React from "react";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
import favLogo from '../assets/fav.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-950 to-gray-900 text-gray-300 font-poppins border-t border-gray-800">
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={favLogo} alt="Qtec Logo" className="w-8 h-8 rounded-full shadow" />
              <h3 className="text-white text-2xl font-extrabold tracking-tight">Qtec</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Qtec is a leading tech solutions provider, delivering high-quality software and services worldwide. Our mission is to empower businesses through innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-red-500 transition-colors focus:text-red-500 focus:outline-none">Home</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-red-500 transition-colors focus:text-red-500 focus:outline-none">About Us</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-red-500 transition-colors focus:text-red-500 focus:outline-none">Services</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-red-500 transition-colors focus:text-red-500 focus:outline-none">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link to="#" className="hover:text-red-500 transition-colors focus:text-red-500 focus:outline-none">Blog</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-red-500 transition-colors focus:text-red-500 focus:outline-none">Help Center</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-red-500 transition-colors focus:text-red-500 focus:outline-none">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-red-500 transition-colors focus:text-red-500 focus:outline-none">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" aria-label="Facebook" className="hover:text-red-500 transition-colors focus:text-red-500 focus:outline-none">
                <FacebookLogo size={24} weight="fill" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-red-500 transition-colors focus:text-red-500 focus:outline-none">
                <TwitterLogo size={24} weight="fill" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-red-500 transition-colors focus:text-red-500 focus:outline-none">
                <InstagramLogo size={24} weight="fill" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-red-500 transition-colors focus:text-red-500 focus:outline-none">
                <LinkedinLogo size={24} weight="fill" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-10" />

        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Qtec. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
