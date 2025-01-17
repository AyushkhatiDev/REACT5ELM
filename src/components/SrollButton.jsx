import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 400px
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      
      setIsVisible(scrolled > 400);
      // Check if we're near bottom (100px threshold)
      setIsAtBottom(fullHeight - (windowHeight + scrolled) < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2">
      <button
        onClick={() => scrollToPosition(0)}
        className={`p-3 rounded-full bg-[#555D50] text-white shadow-lg 
          transition-all duration-300 hover:bg-[#954535] hover:shadow-xl
          transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#954535]
          ${isAtBottom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      <button
        onClick={() => scrollToPosition(document.documentElement.scrollHeight)}
        className={`p-3 rounded-full bg-[#555D50] text-white shadow-lg 
          transition-all duration-300 hover:bg-[#954535] hover:shadow-xl
          transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#954535]
          ${!isAtBottom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to bottom"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ScrollButton;