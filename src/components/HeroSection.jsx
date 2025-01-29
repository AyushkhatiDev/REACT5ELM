import { ArrowRight } from 'lucide-react';
import backgroundImg from '../assets/image.jpg.png';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImg})`  
        }}
      />

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container mx-auto px-6 pb-12">
          <div className="flex justify-between items-end max-w-4xl mx-auto">
            {/* Explore Button */}
            <button 
              className="bg-white/90 text-emerald-900 px-6 py-3 rounded-full font-light text-sm tracking-wider hover:bg-white transition-colors duration-300 flex items-center gap-2 group"
              onClick={() => window.location.href = '/explore'}
            >
              EXPLORE COLLECTION
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            {/* Scroll Indicator */}
            <div className="text-emerald-900/80 text-xs tracking-wider font-light transform -rotate-90 origin-bottom-right pb-8 pr-4">
              {/* SCROLL TO DISCOVER */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
