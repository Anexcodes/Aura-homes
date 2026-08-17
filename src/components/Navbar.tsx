import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Moon, 
  Sun, 
  Bookmark, 
  Calendar, 
  Menu, 
  X, 
  Phone, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Project } from '../types';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  savedFavorites: string[];
  projects: Project[];
  onOpenFavorites: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  savedFavorites,
  onOpenFavorites,
  onOpenBooking
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Design Map', href: '#map' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/20 py-3.5' 
            : 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 shadow-md shadow-stone-900/5 py-3.5'
          : darkMode
            ? 'bg-transparent py-5'
            : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          id="brand-logo"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className={`w-9 h-9 rounded-sm flex items-center justify-center transition-transform group-hover:scale-105 ${
            darkMode ? 'bg-amber-500/15 border border-amber-500/30 text-amber-400' : 'bg-stone-900 text-stone-100'
          }`}>
            <Compass className="w-5 h-5 transition-transform group-hover:rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl sm:text-2xl font-serif tracking-[0.2em] font-semibold transition-colors ${
              darkMode ? 'text-stone-100 group-hover:text-amber-300' : 'text-stone-900 group-hover:text-amber-900'
            }`}>
              AURA
            </span>
            <span className={`text-[9px] uppercase tracking-[0.3em] -mt-1 font-mono ${
              darkMode ? 'text-neutral-400' : 'text-stone-500'
            }`}>
              Spatial Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-3 py-1.5 text-xs uppercase tracking-widest font-medium transition-all rounded-md ${
                darkMode
                  ? 'text-stone-300 hover:text-amber-300 hover:bg-neutral-900/60'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark / Light Toggle */}
          <button
            id="theme-toggle-button"
            onClick={onToggleDarkMode}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`p-2 rounded-full transition-colors ${
              darkMode 
                ? 'bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-neutral-800' 
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-300'
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Saved Favorites Drawer Trigger */}
          <button
            id="saved-favorites-button"
            onClick={onOpenFavorites}
            className={`relative p-2 rounded-full transition-colors flex items-center justify-center ${
              darkMode 
                ? 'bg-neutral-900 hover:bg-neutral-800 text-stone-300 border border-neutral-800' 
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-300'
            }`}
            title="Saved Inspiration & Projects"
            aria-label="View Saved Items"
          >
            <Bookmark className="w-4 h-4" />
            {savedFavorites.length > 0 && (
              <span 
                id="favorites-count-badge"
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-600 text-white text-[10px] font-bold flex items-center justify-center shadow-sm"
              >
                {savedFavorites.length}
              </span>
            )}
          </button>

          {/* Book Consultation Button */}
          <button
            id="nav-book-consultation-btn"
            onClick={onOpenBooking}
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all duration-200 shadow-sm group ${
              darkMode
                ? 'bg-amber-500 hover:bg-amber-400 text-neutral-950 hover:shadow-amber-500/20'
                : 'bg-stone-900 hover:bg-stone-800 text-stone-50 hover:shadow-stone-900/15'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md ${
              darkMode ? 'text-stone-200 hover:bg-neutral-900' : 'text-stone-800 hover:bg-stone-100'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className={`lg:hidden border-b px-6 py-5 transition-all animate-fadeIn ${
            darkMode 
              ? 'bg-neutral-950 border-neutral-800 text-stone-200' 
              : 'bg-stone-50 border-stone-200 text-stone-800'
          }`}
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm uppercase tracking-widest font-medium border-b ${
                  darkMode 
                    ? 'border-neutral-900 hover:text-amber-400' 
                    : 'border-stone-100 hover:text-amber-800'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className={`w-full py-3 text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center justify-center gap-2 ${
                  darkMode ? 'bg-amber-500 text-neutral-950' : 'bg-stone-900 text-white'
                }`}
              >
                <Calendar className="w-4 h-4" />
                Book Private Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
