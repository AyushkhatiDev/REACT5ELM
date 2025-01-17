import { useState, useEffect } from 'react';
import { Search, ShoppingBag, X, Menu } from 'lucide-react';
import logoimage from '../assets/logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Face', subcategories: ['Cleansers', 'Moisturizers', 'Serums', 'Face Masks'] },
    { name: 'Body', subcategories: ['Body Wash', 'Lotions', 'Scrubs', 'Oils'] },
    { name: 'Fragrance', subcategories: ['Perfumes', 'Body Mists', 'Essential Oils'] },
    { name: 'Gift Sets', subcategories: ['Holiday Sets', 'Value Sets', 'Limited Edition'] },
  ];

  return (
    <>
      <style>
        {`
          @keyframes scrollText {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .scrolling-text {
            animation: scrollText 20s linear infinite;
          }
        `}
      </style>

      {/* Animated Offer Banner */}
      <div className="fixed top-0 w-full bg-[#954535] text-white overflow-hidden z-50 py-2">
        <div className="relative flex whitespace-nowrap scrolling-text">
          <span className="mx-4 text-sm font-medium">Buy products of ₹1199 to get free delivery!!</span>
          <span className="mx-4 text-sm font-medium">Buy products of ₹1199 to get free delivery!!</span>
          <span className="mx-4 text-sm font-medium">Buy products of ₹1199 to get free delivery!!</span>
          <span className="mx-4 text-sm font-medium">Buy products of ₹1199 to get free delivery!!</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className="fixed w-full top-10 z-40 transition-all duration-300"
        role="navigation"
        aria-label="Main navigation"
      >
        <div 
          className={`
            w-full
            ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-md'}
            transition-all duration-300
          `}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Left Section - Brand Name */}
              <div className="flex-none">
                <h1 className="text-2xl font-bold text-[#3B3C36]">5ELM</h1>
              </div>

              {/* Center Section - Logo */}
              <div className="flex-none absolute left-1/2 transform -translate-x-1/2">
                <img src={logoimage} alt="Logo" className="h-12 w-12 rounded-full object-cover" />
              </div>

              {/* Right Section - Navigation, Search & Cart */}
              <div className="flex items-center space-x-6">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                  {categories.map((category) => (
                    <div key={category.name} className="relative group">
                      <button 
                        className="text-gray-700 hover:text-[#954535] font-medium transition-colors py-2"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        {category.name}
                      </button>
                      {/* Dropdown */}
                      <div className="absolute top-full left-0 hidden group-hover:block">
                        <div className="bg-white shadow-lg rounded-md py-2 mt-2 w-48">
                          {category.subcategories.map((sub) => (
                            <a
                              key={sub}
                              href={`#${sub.toLowerCase().replace(' ', '-')}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#954535] transition-colors"
                            >
                              {sub}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Search */}
                  <div className="relative flex items-center">
                    {isSearchOpen ? (
                      <div className="flex items-center bg-white rounded-md">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="w-32 px-3 py-1 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-[#954535]"
                          autoFocus
                        />
                        <button
                          onClick={() => setIsSearchOpen(false)}
                          className="p-1 text-gray-700 hover:text-[#954535] transition-colors"
                          aria-label="Close search"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setIsSearchOpen(true)}
                        className="text-gray-700 hover:text-[#954535] transition-colors p-2"
                        aria-label="Search"
                      >
                        <Search className="h-5 w-5" />
                      </button>
                    )}
                  </div>

                  {/* Cart */}
                  <button 
                    className="text-gray-700 hover:text-[#954535] transition-colors relative p-2"
                    aria-label="Shopping cart"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span className="absolute -top-2 -right-2 bg-[#954535] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                  <div className="relative">
                    {isSearchOpen ? (
                      <div className="flex items-center bg-white rounded-md">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="w-32 px-3 py-1 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-[#954535]"
                          autoFocus
                        />
                        <button
                          onClick={() => setIsSearchOpen(false)}
                          className="p-1 text-gray-700 hover:text-[#954535] transition-colors"
                          aria-label="Close search"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setIsSearchOpen(true)}
                        className="text-gray-700 hover:text-[#954535] transition-colors p-2"
                        aria-label="Search"
                      >
                        <Search className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  
                  <button 
                    className="text-gray-700 hover:text-[#954535] transition-colors relative p-2"
                    aria-label="Shopping cart"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span className="absolute -top-2 -right-2 bg-[#954535] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </button>
                  
                  <button
                    className="text-gray-700 hover:text-[#954535] transition-colors p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                    aria-expanded={isMobileMenuOpen}
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out transform
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-[#3B3C36]">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#954535] transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              {categories.map((category) => (
                <div key={category.name} className="space-y-2">
                  <h3 className="text-lg font-medium text-[#3B3C36]">{category.name}</h3>
                  <div className="pl-4 space-y-2">
                    {category.subcategories.map((sub) => (
                      <a
                        key={sub}
                        href={`#${sub.toLowerCase().replace(' ', '-')}`}
                        className="block text-gray-700 hover:text-[#954535] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;