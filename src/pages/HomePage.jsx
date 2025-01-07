// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ElementsSection from '../components/ElementsSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#C9C0BB] bg-opacity-10">
      <Navbar />
      <HeroSection />
      <ElementsSection />
      <Footer />
    </div>
  );
};

export default HomePage;