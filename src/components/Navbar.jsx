import { useState, useEffect } from 'react';
import { Search, ShoppingBag, X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const searchContainer = document.getElementById('search-container');
      if (searchContainer && !searchContainer.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categories = [
    { name: 'Face', subcategories: ['Cleansers', 'Moisturizers', 'Serums', 'Face Masks'] },
    { name: 'Body', subcategories: ['Body Wash', 'Lotions', 'Scrubs', 'Oils'] },
    { name: 'Fragrance', subcategories: ['Perfumes', 'Body Mists', 'Essential Oils'] },
    { name: 'Gift Sets', subcategories: ['Holiday Sets', 'Value Sets', 'Limited Edition'] },
  ];

  return (
    <>
      {/* Offer Banner */}
      
      {isBannerVisible && (
        <div className="fixed top-0 w-full bg-[#954535] text-white text-center py-2 z-50">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex-1" />
            <p className="text-sm font-medium">Buy products of ₹1199 to get free delivery!!</p>
            <button 
              onClick={() => setIsBannerVisible(false)}
              className="flex-1 flex justify-end"
              aria-label="Close banner"
            >
              <X className="h-4 w-4 hover:opacity-75 transition-opacity" />
            </button>
          </div>
        </div>
      )}
      

      {/* Main Navbar */}
      <nav 
        className={`fixed w-full top-0 z-40 transition-all duration-300`}
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
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-[#3B3C36]">5ELM</h1>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8 ml-10">
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
              </div>

              {/* Right Section - Search & Cart */}
              <div className="flex items-center space-x-6">
                {/* Search Bar */}
                <div className="relative" id="search-container">
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="text-gray-700 hover:text-[#954535] transition-colors p-2"
                    aria-label="Search"
                    aria-expanded={isSearchOpen}
                  >
                    <Search className="h-5 w-5" />
                  </button>
                  {isSearchOpen && (
                    <div className="absolute right-0 top-full mt-2 w-72">
                      <div className="bg-white rounded-lg shadow-lg p-4">
                        <input
                          type="text"
                          placeholder="Search products..."
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#954535]/50 transition-shadow"
                          autoFocus
                        />
                      </div>
                    </div>
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

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-gray-700 hover:text-[#954535] transition-colors p-2"
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
