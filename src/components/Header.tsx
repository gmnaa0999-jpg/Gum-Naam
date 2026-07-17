import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection based on scroll position
      const sections = ['home', 'services', 'results', 'calculator', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'results', label: 'Case Studies' },
    { id: 'calculator', label: 'ROI Calculator' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/85 backdrop-blur-md border-b border-slate-800/50 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
      id="nav-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Styled after Immersive UI */}
          <div 
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center font-bold text-white shadow-lg shadow-brand-blue/20 group-hover:scale-105 transition-all">
              <span className="font-display font-extrabold text-base tracking-tight">A</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              APEX<span className="text-brand-blue">GROWTH</span><span className="text-brand-violet font-medium text-lg">LABS</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-sm font-medium transition-colors cursor-pointer relative py-1 ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button - Immersive UI aesthetic */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 bg-slate-100 hover:bg-white text-slate-950 text-sm font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-white/5 cursor-pointer"
            >
              Get Free Proposal
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800/50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-brand-dark/95 backdrop-blur-lg border-b border-gray-800 px-4 pt-2 pb-6"
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-sans text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-brand-blue/10 to-brand-violet/10 text-white border-l-4 border-brand-violet'
                      : 'text-gray-400 hover:bg-gray-800/30 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-800/60 px-4">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-violet text-white font-medium hover:brightness-110 transition-all cursor-pointer"
                >
                  <span>Get Free Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
