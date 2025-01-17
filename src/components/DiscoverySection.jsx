import { Leaf, Sun, Star, Heart, ArrowRight, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';

const BackgroundPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
    <pattern id="mandala-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
      <circle cx="25" cy="25" r="2" fill="#954535"/>
      <path d="M25 15 Q30 20 25 25 Q20 30 25 35 Q30 30 35 25 Q30 20 25 15" 
            fill="none" stroke="#954535" strokeWidth="0.5"/>
      <circle cx="25" cy="25" r="10" fill="none" stroke="#555D50" strokeWidth="0.5"/>
      <path d="M15 25 Q25 15 35 25" fill="none" stroke="#555D50" strokeWidth="0.5"/>
      <path d="M24 15 Q35 20 20 30" fill="none" stroke="#555D50" strokeWidth="0.4"/>
    </pattern>
    <rect x="0" y="0" width="100" height="100" fill="url(#mandala-pattern)"/>
  </svg>
);

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div 
      className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden
                    transition-all duration-500 hover:shadow-xl
                    transform hover:-translate-y-1">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.imageUrl || "/api/placeholder/800/600"}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700
                     ${isHovered ? 'scale-110 blur-sm' : 'scale-100'}`}
          />
          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500
                        flex items-center justify-center
                        ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button className="bg-white text-[#954535] px-6 py-3 rounded-full
                           transform transition-all duration-300
                           hover:bg-[#954535] hover:text-white
                           flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Quick View</span>
            </button>
          </div>
          <div className="absolute top-4 right-4 z-10">
            <span className={`px-3 py-1 text-xs font-medium rounded-full
                          transition-all duration-300 transform
                          ${isHovered ? 'bg-white text-[#954535]' : 'bg-[#954535] text-white'}`}>
              {product.tag}
            </span>
          </div>
        </div>
        <div className={`p-6 bg-white transition-all duration-500
                      ${isHovered ? 'bg-opacity-95' : 'bg-opacity-100'}`}>
          <h4 className="text-lg font-medium text-[#555D50] mb-2
                       transition-colors duration-300
                       hover:text-[#954535]">
            {product.name}
          </h4>
          <div className="flex justify-between items-center mb-4">
            <p className="text-[#954535] font-medium text-lg">
              {product.price}
            </p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill={i < 4 ? 'currentColor' : 'none'}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-[#555D50]/80 mb-4
                     line-clamp-2 hover:line-clamp-none
                     transition-all duration-300">
            {product.description}
          </p>
          <button 
            className="w-full px-4 py-3 bg-transparent border-2 border-[#954535] text-[#954535]
                     rounded-full transition-all duration-300 flex items-center justify-center
                     hover:bg-[#954535] hover:text-white group"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300
                                group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const DiscoverySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Natural Ingredients",
      description: "Carefully sourced organic herbs and botanicals, following traditional Ayurvedic principles for optimal wellness."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pure Extraction",
      description: "Traditional extraction methods preserve the vital essence and potency of each ingredient."
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Holistic Balance",
      description: "Formulated to balance the five elements (Panchamahabhutas) within your body's constitution."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Ancient Wisdom",
      description: "Centuries-old Ayurvedic knowledge adapted for modern wellness needs."
    }
  ];

  const products = [
    {
      name: "Ashwagandha Plus+",
      price: "$45.99",
      description: "Premium stress relief & energy boost formula with organic Ashwagandha root extract and adaptogenic herbs.",
      tag: "Bestseller",
      imageUrl: "https://images.unsplash.com/photo-1665757516805-ead01c014ceb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Golden Turmeric",
      price: "$39.99",
      description: "Anti-inflammatory & immunity support blend featuring premium organic turmeric and black pepper extract.",
      tag: "New",
      imageUrl: "https://plus.unsplash.com/premium_photo-1733342675493-2464e394a969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEdvbGRlbiUyMFR1cm1lcmljJTIwc2tpbiUyMGNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Tranquil Mind",
      price: "$49.99",
      description: "Mental clarity & focus enhancement formula with Brahmi, Shankhpushpi, and other cognitive boosters.",
      tag: "Popular",
      imageUrl: "https://plus.unsplash.com/premium_photo-1679064287018-a47e283f73f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFRyYW5xdWlsJTIwTWluZCUyMHNraW4lMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Vital Balance",
      price: "$54.99",
      description: "Complete wellness & vitality formula combining traditional Ayurvedic herbs with modern nutritional science.",
      tag: "Featured",
      imageUrl: "https://media.istockphoto.com/id/1221022583/photo/ayurvedic-copper-neti-pot.webp?a=1&b=1&s=612x612&w=0&k=20&c=PI_DROwzQJv-6Mf27iRNk_mXYuC4jD-hwbWiT4jDYt8=",
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#C4C3C0]/20 to-white min-h-screen">
      <BackgroundPattern />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Rest of the JSX remains the same */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-[#555D50] mb-4">
            Discover Our Products
          </h2>
          <p className="text-[#954535] max-w-2xl mx-auto">
            Ancient wisdom meets modern wellness in our carefully crafted formulations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg 
                       transition-all duration-300 border border-[#954535]/10 hover:border-[#954535]/30
                       overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`text-[#954535] mb-4 transition-transform duration-300 inline-block
                            ${hoveredIndex === index ? 'scale-110' : ''}`}>
                {feature.icon}
              </div>
              <h3 className="text-[#555D50] text-lg mb-2 font-medium">
                {feature.title}
              </h3>
              <p className="text-[#555D50]/80 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl text-center text-[#555D50] mb-12">
            Featured Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            className="bg-[#954535] text-white px-8 py-3 rounded-full 
                     hover:bg-[#954535]/90 transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-[#954535]
                     transform hover:scale-105 hover:shadow-lg"
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverySection;