import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3B3C36] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">5ELM</h3>
            <p className="text-sm">Address, City, Code</p>
            <p className="text-sm">5elm@care.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-sm hover:text-[#C9C0BB] transition-colors">Products</a></li>
              <li><a href="#elements" className="text-sm hover:text-[#C9C0BB] transition-colors">Elements</a></li>
              <li><a href="#about" className="text-sm hover:text-[#C9C0BB] transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#faq" className="text-sm hover:text-[#C9C0BB] transition-colors">FAQ</a></li>
              <li><a href="#support" className="text-sm hover:text-[#C9C0BB] transition-colors">Support</a></li>
              <li><a href="#contact" className="text-sm hover:text-[#C9C0BB] transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 hover:text-[#C9C0BB] cursor-pointer transition-colors" />
              </a>
              <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 hover:text-[#C9C0BB] cursor-pointer transition-colors" />
              </a>
              <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 hover:text-[#C9C0BB] cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-sm border-t border-white/10 pt-8">
          © 2024 5ELM Ayurvedic Cosmetics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
