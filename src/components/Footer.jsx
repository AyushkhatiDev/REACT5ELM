// src/components/Footer.jsx
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3B3C36] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">5ELM</h3>
            <p>Address, City, Code</p>
            <p>5elm@care.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-[#C9C0BB]">Products</a></li>
              <li><a href="#elements" className="hover:text-[#C9C0BB]">Elements</a></li>
              <li><a href="#about" className="hover:text-[#C9C0BB]">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Instagram className="hover:text-[#C9C0BB] cursor-pointer" />
              <Facebook className="hover:text-[#C9C0BB] cursor-pointer" />
              <Twitter className="hover:text-[#C9C0BB] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 5ELM Ayurvedic Cosmetics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;