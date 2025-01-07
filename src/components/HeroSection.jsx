// src/components/HeroSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import ElementSymbol from './ElementSymbol';

const ELEMENTS = [
  { name: 'AIR', className: 'top-20 left-20 animate-float' },
  { name: 'FIRE', className: 'top-40 right-20 animate-float-delay-1' },
  { name: 'WATER', className: 'bottom-20 left-20 animate-float-delay-2' },
  { name: 'EARTH', className: 'bottom-40 right-20 animate-float-delay-3' },
  { name: 'SPACE', className: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-delay-4' }
];

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-800" />
        <div className="absolute inset-0 bg-gray-700 opacity-50" />
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle, rgb(209 213 219) 1px, transparent 1px), 
                               radial-gradient(circle, rgb(209 213 219) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 20px 20px'
            }}
          />
        </div>
      </div>

      {/* Element Symbols */}
      {ELEMENTS.map(({ name, className }) => (
        <ElementSymbol key={name} element={name} className={className} />
      ))}
      
      {/* Main Content */}
      <div className="container mx-auto text-center px-4 relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-300 mb-6 opacity-0 animate-slideDown">
          5ELM
        </h1>
        <h2 
          className="text-2xl md:text-3xl font-light text-gray-300 mb-4 opacity-0 animate-slideDown"
          style={{ animationDelay: '200ms' }}
        >
          Ayurvedic Cosmetics
        </h2>
        <p 
          className="text-lg md:text-xl text-gray-300/90 mb-8 max-w-2xl mx-auto opacity-0 animate-slideUp"
          style={{ animationDelay: '400ms' }}
        >
          Embrace the harmony of the five elements in your beauty routine. 
          Discover natural, sustainable ingredients that nurture your skin and soul.
        </p>
        
        <div 
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 opacity-0 animate-slideUp"
          style={{ animationDelay: '600ms' }}
        >
          <button className="bg-rose-800 text-gray-300 px-8 py-3 rounded-lg group 
            hover:bg-gray-300 hover:text-gray-800 transition-all duration-300">
            <span className="flex items-center justify-center">
              Shop Now 
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          <button className="border-2 border-gray-300 text-gray-300 px-8 py-3 rounded-lg 
            hover:bg-gray-300 hover:text-gray-800 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent" />
    </section>
  );
};

export default HeroSection;