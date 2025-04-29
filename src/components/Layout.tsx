import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain, ChevronUp } from 'lucide-react';
import NavLink from './NavLink';
import Footer from './Footer';

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="EmotionLearn Home"
          >
            <Brain className="w-8 h-8 text-primary-500" />
            <span className="font-heading font-bold text-xl text-gray-900">
              Emotion-Aware
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/demo">Try Demo</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>

          <div className="hidden md:block">
            <Link to="/demo" className="btn btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-500 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="container-custom py-4 space-y-3">
            <Link
              to="/"
              className="block py-2 px-4 text-gray-800 hover:text-primary-500 font-medium"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="block py-2 px-4 text-gray-800 hover:text-primary-500 font-medium"
              onClick={closeMenu}
            >
              Features
            </Link>
            <Link
              to="/demo"
              className="block py-2 px-4 text-gray-800 hover:text-primary-500 font-medium"
              onClick={closeMenu}
            >
              Try Demo
            </Link>
            <Link
              to="/about"
              className="block py-2 px-4 text-gray-800 hover:text-primary-500 font-medium"
              onClick={closeMenu}
            >
              About
            </Link>
            <div className="pt-2">
              <Link 
                to="/demo" 
                className="block w-full btn btn-primary text-center"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      {/* Scroll to top button */}
      <button
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-primary-500 text-white shadow-lg transition-opacity duration-300 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Layout;