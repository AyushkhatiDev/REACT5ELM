// src/components/ElementSymbol.jsx
import React from 'react';

const ElementSymbol = ({ element, className }) => (
  <div 
    className={`absolute ${className} bg-gray-400/10 backdrop-blur-sm rounded-full w-24 h-24 
    flex items-center justify-center transform hover:scale-110 transition-all duration-300`}
  >
    <span className="text-sm font-medium text-gray-300">{element}</span>
  </div>
);

export default ElementSymbol;