// src/components/ElementsSection.jsx
import React from 'react';

const ElementsSection = () => {
  const elements = [
    { name: 'Air', description: 'Lightness and freshness in our products' },
    { name: 'Fire', description: 'Dynamic and transformative qualities' },
    { name: 'Water', description: 'Soothing and hydrating properties' },
    { name: 'Earth', description: 'Organic and grounding nature' },
    { name: 'Space', description: 'Cosmic connection and innovation' }
  ];

  return (
    <section id="elements" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          The Five Elements
        </h2>
        <div className="grid md:grid-cols-5 gap-8">
          {elements.map((element) => (
            <div 
              key={element.name} 
              className="text-center p-6 rounded-lg bg-neutral-200 bg-opacity-20 hover:bg-opacity-30 transition-all"
            >
              <h3 className="text-2xl font-bold text-rose-900 mb-4">{element.name}</h3>
              <p className="text-gray-800">{element.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElementsSection;