import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      id="floating-scroll-to-top-btn"
      className="fixed bottom-5 left-5 z-40 p-3 rounded-full bg-slate-900 hover:bg-blue-900 text-white shadow-lg hover:shadow-xl border border-slate-700 hover:scale-110 transition-all duration-200"
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp className="w-5 h-5 text-amber-300" />
    </button>
  );
};
