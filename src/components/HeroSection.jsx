import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import backgroundImg from '../assets/image.jpg.png';
import whiteImg from '../assets/image.jpg2.png';
import greenImg from '../assets/green.png';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: backgroundImg },
    { image: whiteImg },
    { image: greenImg }, // Ayurvedic herbs
    { image: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1920&q=80' }, // Herbal medicine
    { image: 'https://images.unsplash.com/photo-1604152135912-04a022e23694?auto=format&fit=crop&w=1920&q=80' }, // Nature and wellness
    { image: 'https://images.unsplash.com/photo-1594041681586-d1e04eabbf7e?auto=format&fit=crop&w=1920&q=80' } // Organic products
  ];
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  return (
    <div className="relative h-[500px] mt-40 overflow-hidden">
      {/* Carousel Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      {/* Carousel Navigation */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
