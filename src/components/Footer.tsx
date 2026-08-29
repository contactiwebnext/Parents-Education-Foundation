import React from 'react';
import { PageTab } from '../types';
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Heart, 
  ChevronRight, 
  ArrowUp,
  BookOpen,
  Users,
  Info,
  MessageSquare
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenAssistant?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenAssistant }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper CTA Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-900/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-800/40">
                <MapPin className="w-3 h-3 text-teal-400" />
                <span>Waltham, Massachusetts</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to become an active advocate for your child’s education?
              </h3>
              <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with Parents Education Foundation for trustworthy educational guidance, practical toolkits, and support across Massachusetts and beyond.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => handleNavClick('resources')}
                id="footer-explore-resources-cta"
                className="px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-semibold text-sm shadow-md transition-all flex items-center space-x-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Resource Hub</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                id="footer-contact-cta"
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 & 2: Organization Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center text-white ring-2 ring-blue-700/50">
                <GraduationCap className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Parents Education Foundation
                </h4>
                <p className="text-xs text-slate-400">Nonprofit Educational Support • Waltham, MA</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Parents Education Foundation exists to provide parents in Massachusetts and beyond with the knowledge, resources, tools, and support they need to stay informed and actively involved in their children's education.
            </p>

            {/* Direct Contact Badges */}
            <div className="space-y-2.5 pt-2">
              <a
                href="tel:7818906001"
                id="footer-phone-contact"
                className="flex items-center space-x-3 text-sm text-slate-300 hover:text-teal-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 group-hover:border-teal-500/50">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Telephone Inquiry</span>
                  <span className="font-semibold text-white">781-890-6001</span>
                </div>
              </a>

              <a
                href="mailto:BCamenker@yahoo.com"
                id="footer-email-contact"
                className="flex items-center space-x-3 text-sm text-slate-300 hover:text-teal-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 group-hover:border-teal-500/50">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Direct Email</span>
                  <span className="font-semibold text-white">BCamenker@yahoo.com</span>
                </div>
              </a>

              <div className="flex items-center space-x-3 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Mailing Address</span>
                  <span className="text-slate-300 font-medium">PO Box 1612, Waltham, MA 02454</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Home Page</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>About Our Mission</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('resources')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Parent Resource Hub</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('get-involved')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Get Involved</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Contact Our Team</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Key Resource Topics */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Key Resource Areas
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => handleNavClick('resources')} 
                  className="hover:text-teal-300 text-left transition-colors"
                >
                  • Understanding Curriculum
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('resources')} 
                  className="hover:text-teal-300 text-left transition-colors"
                >
                  • Parent-Teacher Conferences
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('resources')} 
                  className="hover:text-teal-300 text-left transition-colors"
                >
                  • IEP & 504 Accommodations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('resources')} 
                  className="hover:text-teal-300 text-left transition-colors"
                >
                  • Student Privacy (FERPA)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('resources')} 
                  className="hover:text-teal-300 text-left transition-colors"
                >
                  • Massachusetts DESE Standards
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('resources')} 
                  className="hover:text-teal-300 text-left transition-colors"
                >
                  • Home Study & Executive Function
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Massachusetts Community & Disclaimer */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Community Notice
            </h5>
            <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 text-xs text-slate-400 space-y-2">
              <p className="leading-relaxed">
                Parents Education Foundation is an independent nonprofit educational resource based in Waltham, Massachusetts.
              </p>
              <p className="text-slate-500 leading-normal">
                Materials are provided for informational and educational advocacy purposes to empower families and foster constructive partnerships with schools.
              </p>
            </div>

            {onOpenAssistant && (
              <button
                onClick={onOpenAssistant}
                id="footer-open-assistant-btn"
                className="mt-4 w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-blue-300 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>Need quick answers? Launch Assistant</span>
              </button>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-800/80" />

        {/* Bottom Legal & Attribution */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Parents Education Foundation. All rights reserved. Waltham, MA.</p>
          
          <div className="flex items-center space-x-6">
            <button onClick={() => handleNavClick('about')} className="hover:text-slate-400">About</button>
            <button onClick={() => handleNavClick('resources')} className="hover:text-slate-400">Resources</button>
            <button onClick={() => handleNavClick('contact')} className="hover:text-slate-400">Contact</button>
            <button 
              onClick={scrollToTop} 
              id="footer-scroll-top-btn"
              className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Developer Attribution Center Aligned */}
        <div className="mt-8 pt-4 border-t border-slate-900 text-center text-xs text-slate-500">
          <p>
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 font-medium underline underline-offset-2 transition-colors">iWebNext</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
