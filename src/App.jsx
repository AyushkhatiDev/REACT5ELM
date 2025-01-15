import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage'; 
import Navbar from './components/Navbar';
import ElementsSection from './components/ElementsSection'; 
import ExplorePage from './pages/ExplorePage';



const NotFound = () => <div>404 Not Found</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} /> {/* Corrected route */}
        <Route path="/elements" element={<ElementsSection />} /> {/* Corrected route */}
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
