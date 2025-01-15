import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ElementsSection from '../components/ElementsSection';
import Footer from '../components/Footer';
import DiscoverySection from '../components/DiscoverySection';  
import IngredientsSection from '../components/IngredientsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#C9C0BB] bg-opacity-10">
      <Navbar />
      <HeroSection />
      <IngredientsSection />
      <DiscoverySection />
      <ElementsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
