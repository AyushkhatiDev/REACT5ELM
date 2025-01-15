import { useState, useEffect } from 'react';
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react';
import oilImage from '../assets/oil.webp';
import skinImage from '../assets/skin.webp';
import herbalImage from '../assets/herbal.jpg.webp';
import teaImage from '../assets/Tea.webp';

const products = [
  {
    id: 1,
    name: 'Ayurvedic Face Oil',
    category: 'Face',
    price: 58,
    description: 'Natural botanical blend for radiant skin',
    imageUrl: oilImage,
  },
  {
    id: 2,
    name: 'Body Massage Oil',
    category: 'Body',
    price: 45,
    description: 'Traditional healing massage oil',
    imageUrl: skinImage,
  },
  {
    id: 3,
    name: 'Essential Oil Blend',
    category: 'Fragrance',
    price: 35,
    description: 'Pure essential oil aromatherapy blend',
    imageUrl: herbalImage,
  },
  {
    id: 4,
    name: 'Wellness Gift Set',
    category: 'Gift Sets',
    price: 120,
    description: 'Complete Ayurvedic wellness collection',
    imageUrl: oilImage,
  },
  {
    id: 5,
    name: 'Herbal Tea',
    category: 'Face',
    price: 32,
    description: 'Experience the benefits of Ayurvedic herbs',
    imageUrl: teaImage,
  },
];

const ExplorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Face', 'Body', 'Fragrance', 'Gift Sets'];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Subtle Page Header */}
      <div className="bg-white border-b border-stone-100">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-2xl font-light text-emerald-950 tracking-wider mb-2">
            COLLECTION
          </h1>
          <p className="text-emerald-800/70 font-light text-sm tracking-wide">
            Discover ancient Ayurvedic remedies for modern wellness
          </p>
        </div>
      </div>

      {/* Category Filter Bar */}
      <div className={`sticky top-0 bg-white/95 backdrop-blur-sm border-b border-stone-100 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <Filter className="w-5 h-5 text-emerald-900 transition-transform duration-300 hover:rotate-180" />
              {categories.map(category => (
                <button
                  key={category}
                  className={`text-sm font-light tracking-wide transition-all duration-300 relative ${
                    selectedCategory === category 
                      ? 'text-emerald-900' 
                      : 'text-emerald-800/70 hover:text-emerald-900'
                  } py-2`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.toUpperCase()}
                  {selectedCategory === category && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-900 transform transition-transform duration-300" />
                  )}
                </button>
              ))}
            </div>
            <button className="flex items-center space-x-2 text-sm font-light text-emerald-900 tracking-wide transition-colors duration-300 hover:text-emerald-700">
              <span>SORT BY</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 hover:rotate-180" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
            .map(product => (
              <div 
                key={product.id} 
                className="group bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Product Image Container */}
                <div className="relative aspect-square overflow-hidden bg-white">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  <button className="absolute bottom-4 right-4 bg-white/95 p-3 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-emerald-50">
                    <ShoppingBag className="w-5 h-5 text-emerald-900" />
                  </button>
                </div>
                {/* Product Info */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="text-emerald-950 font-medium mb-1 transition-colors duration-300 group-hover:text-emerald-800">
                        {product.name}
                      </h3>
                      <p className="text-sm text-emerald-800/70 font-light line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    <span className="text-emerald-900 font-medium ml-4">
                      ${product.price}
                    </span>
                  </div>
                  <span className="inline-block px-2 py-1 bg-emerald-50 text-xs text-emerald-800 font-light rounded-full tracking-wide">
                    {product.category.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default ExplorePage;