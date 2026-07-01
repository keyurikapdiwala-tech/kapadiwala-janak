import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section tracking
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120; // offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-beige-50/90 dark:bg-charcoal-900/90 backdrop-blur-md py-3 shadow-md border-b border-gold-400/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex flex-col items-start focus:outline-none text-left cursor-pointer group"
          id="nav-logo"
        >
          <span className="font-serif text-2xl font-bold tracking-widest text-maroon-800 dark:text-gold-300 uppercase transition-colors duration-300 group-hover:text-gold-500">
            Gargi
          </span>
          <span className="text-[9px] tracking-[0.25em] text-charcoal-500 dark:text-beige-300/80 uppercase font-light -mt-1">
            Ladies Tailor & Boutique
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs uppercase tracking-widest font-medium transition-all duration-300 focus:outline-none relative py-1 cursor-pointer ${
                activeSection === item.id
                  ? 'text-maroon-800 dark:text-gold-400 font-semibold'
                  : 'text-charcoal-600 hover:text-maroon-800 dark:text-beige-200 dark:hover:text-gold-300'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-maroon-800 dark:bg-gold-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Actions & Toggles */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-charcoal-700 hover:text-maroon-800 dark:text-beige-200 dark:hover:text-gold-400 hover:bg-beige-100 dark:hover:bg-charcoal-800 rounded-full transition-colors cursor-pointer"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            id="theme-toggle-desktop"
          >
            {darkMode ? <Sun className="w-5 h-5 text-gold-400" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Direct CTA */}
          <a
            id="nav-cta-call"
            href={BUSINESS_INFO.socials.call}
            className="px-4 py-2 border border-maroon-800/20 hover:border-maroon-800 text-maroon-800 dark:border-gold-400/20 dark:hover:border-gold-400 dark:text-gold-400 text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-2 hover:bg-maroon-900/5 dark:hover:bg-gold-500/5 font-medium cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Tailor</span>
          </a>
        </div>

        {/* Mobile & Small Screen Row (Hamburger & Theme Toggle) */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Theme Toggle for Mobile */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-charcoal-700 dark:text-beige-200 rounded-full cursor-pointer"
            id="theme-toggle-mobile"
          >
            {darkMode ? <Sun className="w-5 h-5 text-gold-400" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Hamburger Toggler */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-charcoal-800 dark:text-beige-100 focus:outline-none cursor-pointer"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden w-full bg-beige-50 dark:bg-charcoal-900 border-b border-gold-400/10 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm uppercase tracking-wider text-left py-2 font-medium border-b border-gold-400/5 focus:outline-none cursor-pointer ${
                    activeSection === item.id
                      ? 'text-maroon-800 dark:text-gold-400 font-semibold pl-2 border-l-2 border-maroon-800 dark:border-gold-400'
                      : 'text-charcoal-600 dark:text-beige-200 hover:text-maroon-800 dark:hover:text-gold-300'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  id="mobile-drawer-call"
                  href={BUSINESS_INFO.socials.call}
                  className="flex-1 py-3 bg-maroon-800 hover:bg-maroon-900 text-beige-50 text-center rounded-lg font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  id="mobile-drawer-whatsapp"
                  href={BUSINESS_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-center rounded-lg font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
