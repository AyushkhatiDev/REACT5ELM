import { Leaf, Sun, Star, Heart } from 'lucide-react';
import { useState } from 'react';

const BackgroundPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
    <pattern id="mandala-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
      {/* Mandala-inspired pattern */}
      <circle cx="25" cy="25" r="2" fill="#954535"/>
      <path d="M25 15 Q30 20 25 25 Q20 30 25 35 Q30 30 35 25 Q30 20 25 15" 
            fill="none" stroke="#954535" strokeWidth="0.5"/>
      <circle cx="25" cy="25" r="10" fill="none" stroke="#555D50" strokeWidth="0.5"/>
      {/* Leaf motifs */}
      <path d="M15 25 Q25 15 35 25" fill="none" stroke="#555D50" strokeWidth="0.4"/>
      <path d="M24 15 Q35 20 20 30" fill="none" stroke="#555D50" strokeWidth="0.4"/>
    </pattern>
    <rect x="0" y="0" width="100" height="100" fill="url(#mandala-pattern)"/>
  </svg>
);

const DiscoverySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Natural Ingredients",
      description: "Carefully sourced organic herbs and botanicals, following traditional Ayurvedic principles for optimal wellness."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pure Extraction",
      description: "Traditional extraction methods preserve the vital essence and potency of each ingredient."
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Holistic Balance",
      description: "Formulated to balance the five elements (Panchamahabhutas) within your body's constitution."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Ancient Wisdom",
      description: "Centuries-old Ayurvedic knowledge adapted for modern wellness needs."
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#C4C3C0]/20 to-white min-h-screen">
      {/* Custom Background Pattern */}
      <BackgroundPattern />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Rest of the component remains the same */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-light text-[#555D50] mb-4 hover:text-[#954535] transition-colors duration-300">
            Discover 5ELM Ayurvedic Experience
          </h2>
          <p className="text-[#954535] max-w-2xl mx-auto hover:scale-105 transition-transform duration-300">
            Ancient wisdom meets modern wellness in our carefully crafted formulations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/90 p-6 rounded-lg shadow-lg hover:shadow-xl 
                         transform hover:-translate-y-1 transition-all duration-300
                         border border-[#954535]/20 hover:border-[#954535]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`text-[#954535] mb-4 transform transition-transform duration-300
                              ${hoveredIndex === index ? 'scale-110 rotate-12' : ''}`}>
                {feature.icon}
              </div>
              <h3 className="text-[#555D50] text-xl mb-2 font-medium">
                {feature.title}
              </h3>
              <p className="text-[#555D50]/80 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl text-[#555D50] mb-8 hover:text-[#954535] transition-colors duration-300">
            Our Sacred Ingredients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Ashwagandha", "Turmeric", "Holy Basil", 
              "Triphala", "Brahmi", "Shatavari"
            ].map((ingredient, index) => (
              <div 
                key={index}
                className="p-4 bg-white/90 rounded-lg shadow-md
                           hover:bg-white hover:shadow-lg transform hover:-translate-y-1
                           transition-all duration-300 cursor-pointer
                           border border-[#954535]/10 hover:border-[#954535]
                           text-[#555D50]"
              >
                {ingredient}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            className="bg-[#954535] text-white px-8 py-3 rounded-full 
                     hover:bg-[#954535]/90 transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-[#954535]
                     transform hover:scale-105 hover:shadow-lg
                     animate-pulse hover:animate-none"
          >
            Learn More About Our Ingredients
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverySection;