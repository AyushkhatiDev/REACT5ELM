// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-700 text-white p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">5ELM</div>
        
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#products" className="hover:text-gray-300">Products</a>
          <a href="#elements" className="hover:text-gray-300">Elements</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-gray-700 md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#home" className="hover:text-gray-300">Home</a>
              <a href="#products" className="hover:text-gray-300">Products</a>
              <a href="#elements" className="hover:text-gray-300">Elements</a>
              <a href="#about" className="hover:text-gray-300">About</a>
              <a href="#contact" className="hover:text-gray-300">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;