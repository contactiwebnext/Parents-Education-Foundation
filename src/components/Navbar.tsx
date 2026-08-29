import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  BookOpen, 
  Users, 
  Info, 
  MessageSquare,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenAssistant?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab,
  onOpenAssistant 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageTab; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Home', icon: GraduationCap },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'resources', label: 'Parent Resources', icon: BookOpen },
    { id: 'get-involved', label: 'Get Involved', icon: Users },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Waltham, MA • Supporting Parents in MA & Beyond</span>
            </div>
            <a 
              href="tel:7818906001" 
              id="topbar-phone-link"
              className="hidden sm:flex items-center space-x-1.5 text-slate-300 hover:text-teal-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>781-890-6001</span>
            </a>
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            <a 
              href="mailto:BCamenker@yahoo.com" 
              id="topbar-email-link"
              className="flex items-center space-x-1.5 text-slate-300 hover:text-teal-300 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>BCamenker@yahoo.com</span>
            </a>

            {onOpenAssistant && (
              <button
                onClick={onOpenAssistant}
                id="topbar-ai-assistant-btn"
                className="hidden md:flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-blue-900/60 hover:bg-blue-800 border border-blue-700/50 text-blue-200 text-xs font-medium transition-all"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>AI Parent Guide</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-white shadow-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <button 
            onClick={() => handleNavClick('home')}
            id="brand-logo-btn"
            className="flex items-center space-x-3.5 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center text-white shadow-md shadow-blue-950/20 group-hover:scale-105 transition-transform duration-200 ring-2 ring-blue-100">
              <GraduationCap className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
                Parents Education Foundation
              </span>
              <span className="block text-xs font-medium text-slate-500 tracking-wide uppercase">
                Waltham, MA • Non-Profit Organization
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-2 relative ${
                    isActive
                      ? 'text-blue-900 bg-blue-50/80 font-bold'
                      : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-700' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('contact')}
              id="nav-contact-cta-btn"
              className="px-5 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150 flex items-center space-x-2"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4 text-blue-200" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'text-blue-900 bg-blue-50 font-bold border-l-4 border-blue-800'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-blue-800' : 'text-slate-400'}`} />
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-800' : 'text-slate-300'}`} />
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
            <button
              onClick={() => handleNavClick('contact')}
              id="mobile-contact-cta-btn"
              className="w-full py-3 rounded-xl bg-blue-900 text-white font-semibold text-center shadow-md flex items-center justify-center space-x-2"
            >
              <Mail className="w-4 h-4 text-blue-200" />
              <span>Contact Us Today</span>
            </button>

            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center space-x-2 text-slate-700 font-medium">
                <Phone className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <a href="tel:7818906001" className="hover:underline">781-890-6001</a>
              </div>
              <div className="flex items-center space-x-2 text-slate-700 font-medium">
                <Mail className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <a href="mailto:BCamenker@yahoo.com" className="hover:underline truncate">BCamenker@yahoo.com</a>
              </div>
              <div className="flex items-center space-x-2 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Waltham, MA</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
