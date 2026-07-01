import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or media query preference on startup
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      return true;
    }
    return false;
  });

  // Sync class name on documentElement on change
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-beige-50 text-charcoal-800 dark:bg-charcoal-900 dark:text-beige-100 selection:bg-gold-500 selection:text-charcoal-900">
      {/* Luxury Loading Intro */}
      <LoadingScreen />

      {/* Primary Sticky Header */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Showcase */}
        <Services />

        {/* Lookbook Collection Gallery */}
        <Gallery />

        {/* Pricing Table List */}
        <Pricing />

        {/* Why Choose Us Highlights */}
        <WhyChooseUs />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Interactive FAQ Accordions */}
        <FAQ />

        {/* Contact Coordinates & Appointment Booking Form */}
        <Contact />
      </main>

      {/* Unified Footer */}
      <Footer />

      {/* Floating Call, WhatsApp, and Scroll-to-Top elements */}
      <FloatingControls />
    </div>
  );
}
