import { useState, useEffect } from 'react';
import { Search, ShoppingBag, X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('₹ INR');
  const [hoveredCategory, setHoveredCategory] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 400) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const categories = [
    { name: 'FACE', subcategories: ['Cleansers', 'Moisturizers', 'Serums', 'Face Masks'] },
    { name: 'BATH & BODY', subcategories: ['Body Wash', 'Lotions', 'Scrubs', 'Oils'] },
    { name: 'HAIR', subcategories: ['Shampoo', 'Conditioner', 'Hair Oil', 'Hair Masks'] },
    { name: 'MAKEUP', subcategories: ['Lipstick', 'Foundation', 'Eye Products', 'Blush'] },
    { name: 'GIFTING', subcategories: ['Gift Cards', 'Gift Sets', 'Special Offers'] },
    { name: 'TRAVEL MINIS', subcategories: ['Travel Sets', 'Mini Products'] },
    { name: 'MEN', subcategories: ['Grooming', 'Skincare', 'Hair Care'] },
    { name: 'WELLNESS', subcategories: ['Aromatherapy', 'Supplements', 'Yoga Essentials'] },
  ];

  return (
    <>
      <style>
        {`
          @keyframes scrollText {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleIn {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .scrolling-text {
            animation: scrollText 20s linear infinite;
          }
          .nav-item {
            transition: all 0.3s ease;
            position: relative;
          }
          .nav-item::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 1px;
            background-color: #954535;
            transition: width 0.3s ease;
          }
          .nav-item:hover::after {
            width: 100%;
          }
          .dropdown {
            animation: fadeIn 0.3s ease forwards;
          }
          .search-animation {
            animation: scaleIn 0.3s ease forwards;
          }
          .logo-image {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
          }
          .logo-image:hover {
            filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.15));
            transform: translateY(-2px);
          }
        `}
      </style>

      <div className="fixed top-0 w-full bg-[#954535] text-white overflow-hidden z-50 py-2">
        <div className="relative flex whitespace-nowrap scrolling-text">
          <span className="mx-4 text-sm font-light">Buy products of ₹1199 to get free delivery!!</span>
          <span className="mx-4 text-sm font-light">Buy products of ₹1199 to get free delivery!!</span>
          <span className="mx-4 text-sm font-light">Buy products of ₹1199 to get free delivery!!</span>
          <span className="mx-4 text-sm font-light">Buy products of ₹1199 to get free delivery!!</span>
        </div>
      </div>

      <nav 
        className={`
          fixed w-full top-8 z-40 transition-all duration-500
          ${isHidden ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <div 
          className={`
            w-full transition-all duration-300
            ${isScrolled 
              ? 'bg-white/95 shadow-lg py-2' 
              : 'bg-white/90 backdrop-blur-md py-4'
            }
          `}
        >
          <div className="container mx-auto px-4">
            <div className={`
              flex justify-between items-center
              transition-all duration-300
              ${isScrolled ? 'h-20' : 'h-24'}
            `}>
              <div className="flex items-center space-x-4">
                <button 
                  className="md:hidden hover:text-[#954535] transition-colors"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </button>
                <div className="hidden md:flex items-center space-x-6">
                  <button className="nav-item text-base font-light tracking-wide">STORES</button>
                  <select 
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="nav-item bg-transparent text-base font-light tracking-wide cursor-pointer"
                  >
                    <option value="₹ INR">₹ INR</option>
                    <option value="$ USD">$ USD</option>
                  </select>
                </div>
              </div>

              <div className={`
                flex-none absolute left-1/2 transform -translate-x-1/2
                transition-all duration-500 z-10
                ${isScrolled ? 'scale-95' : 'scale-100'}
              `}>
                <a href="/" className="block">
                  <img 
                    src="/src/assets/logo.jpg" 
                    alt="5ELM Logo" 
                    className={`
                      logo-image
                      ${isScrolled ? 'h-16' : 'h-20'}
                      w-auto object-contain
                    `}
                  />
                </a>
                <p className="text-xs font-light text-center tracking-widest uppercase mt-1 text-[#954535]"></p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="hidden md:flex items-center space-x-6">
                  <button className="nav-item text-base font-light tracking-wide">ACCOUNT</button>
                  <div className="relative flex items-center">
                    {isSearchOpen ? (
                      <div className="flex items-center bg-white rounded-md shadow-lg search-animation">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="w-48 px-4 py-2 rounded-l-md text-sm focus:outline-none font-light"
                          autoFocus
                        />
                        <button
                          onClick={() => setIsSearchOpen(false)}
                          className="p-2 hover:text-[#954535] transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setIsSearchOpen(true)}
                        className="nav-item p-2"
                      >
                        <Search className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
                <button className="nav-item relative p-2 group">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-[#954535] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    0
                  </span>
                </button>
              </div>
            </div>

            <div className={`
              hidden md:flex justify-center space-x-8 
              transition-all duration-300
              ${isScrolled ? 'py-2' : 'py-4'}
            `}>
              {categories.map((category) => (
                <div 
                  key={category.name} 
                  className="group relative"
                  onMouseEnter={() => setHoveredCategory(category.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button className="nav-item text-base font-light tracking-wide">
                    {category.name}
                  </button>
                  {hoveredCategory === category.name && (
                    <div className="dropdown absolute left-0 top-full">
                      <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-md p-4 w-56 mt-2">
                        {category.subcategories.map((sub) => (
                          <a
                            key={sub}
                            href={`#${sub.toLowerCase().replace(' ', '-')}`}
                            className="block py-2 text-base font-light hover:text-[#954535] hover:translate-x-2 transition-all"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 md:hidden">
          <div className="p-4">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 hover:text-[#954535] transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="mt-12 space-y-6">
              {categories.map((category) => (
                <div key={category.name} className="space-y-2">
                  <h3 className="font-light text-base tracking-wide">{category.name}</h3>
                  <div className="pl-4 space-y-2">
                    {category.subcategories.map((sub) => (
                      <a
                        key={sub}
                        href={`#${sub.toLowerCase().replace(' ', '-')}`}
                        className="block text-base font-light text-gray-600 hover:text-[#954535] hover:translate-x-2 transition-all"
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
      )}
    </>
  );
};

export default Navbar;