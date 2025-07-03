import React from "react";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Qtec</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Qtec is a leading tech solutions provider, delivering high-quality
              software and services worldwide. Our mission is to empower
              businesses through innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" aria-label="Facebook" className="hover:text-red-600 transition">
                <FacebookLogo size={20} weight="fill" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-red-600 transition">
                <TwitterLogo size={20} weight="fill" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-red-600 transition">
                <InstagramLogo size={20} weight="fill" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-red-600 transition">
                <LinkedinLogo size={20} weight="fill" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Qtec. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
