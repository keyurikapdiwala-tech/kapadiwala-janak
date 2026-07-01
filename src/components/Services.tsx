import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scissors, 
  Sparkles, 
  Crown, 
  Shirt, 
  Palette, 
  Gem, 
  Layers, 
  Maximize, 
  Wind, 
  PenTool, 
  Heart, 
  Baby,
  ArrowRight
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';
import { Service } from '../types';

// Icon Map Resolver
const iconMap: { [key: string]: any } = {
  Scissors,
  Sparkles,
  Crown,
  Shirt,
  Palette,
  Gem,
  Layers,
  Maximize,
  Wind,
  PenTool,
  Heart,
  Baby
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const tabs = ['All', 'Essential', 'Boutique', 'Bridal', 'Maintenance'];

  const filteredServices = activeTab === 'All'
    ? SERVICES
    : SERVICES.filter(service => service.category === activeTab);

  const handleBookClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
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
    <section id="services" className="py-24 bg-beige-50 dark:bg-charcoal-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold-600 dark:text-gold-400 uppercase block mb-2">
            What We Do Best
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 dark:text-white leading-tight">
            Our Custom <span className="italic font-normal text-maroon-800 dark:text-gold-300">Stitching Services</span>
          </h2>
          <div className="w-20 h-[1px] bg-gold-500 mx-auto mt-4" />
          <p className="text-sm text-charcoal-600 dark:text-beige-300 font-light mt-5 leading-relaxed">
            From sleek office kurtis to magnificent bridal lehengas, we tailor each piece using state-of-the-art sewing parameters, perfect linings, and designer necklines.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="services-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 focus:outline-none border cursor-pointer ${
                activeTab === tab
                  ? 'bg-maroon-800 text-beige-50 border-maroon-800 shadow-md dark:bg-gold-500 dark:text-charcoal-900 dark:border-gold-500'
                  : 'bg-beige-100/50 text-charcoal-600 border-gold-400/10 hover:border-gold-400/30 dark:bg-charcoal-800/40 dark:text-beige-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Services Grid with Framer Motion */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="services-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service: Service, idx) => {
              const IconComponent = iconMap[service.iconName] || Scissors;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  key={service.id}
                  className="group relative bg-beige-100/30 dark:bg-charcoal-800/40 border border-gold-400/10 hover:border-gold-400/30 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Decorative Background Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-500/5 to-transparent rounded-tr-2xl group-hover:from-gold-500/10 transition-colors" />

                  <div>
                    {/* Icon Header */}
                    <div className="w-12 h-12 rounded-xl bg-maroon-800/5 dark:bg-gold-500/5 border border-maroon-800/10 dark:border-gold-500/10 flex items-center justify-center text-maroon-800 dark:text-gold-400 mb-6 group-hover:bg-maroon-800 group-hover:text-beige-50 dark:group-hover:bg-gold-500 dark:group-hover:text-charcoal-900 transition-all duration-300">
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>

                    {/* Category Stamp */}
                    <span className="text-[9px] tracking-[0.2em] font-bold uppercase text-gold-600 dark:text-gold-400">
                      {service.category} Service
                    </span>

                    {/* Service Name */}
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-charcoal-900 dark:text-white mt-2 mb-4 group-hover:text-maroon-800 dark:group-hover:text-gold-300 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-charcoal-600 dark:text-beige-300 font-light leading-relaxed mb-6 text-justify">
                      {service.description}
                    </p>
                  </div>

                  {/* Book Trigger Button */}
                  <button
                    onClick={handleBookClick}
                    className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-maroon-800 dark:text-gold-400 group-hover:text-gold-600 dark:group-hover:text-gold-300 hover:underline cursor-pointer focus:outline-none self-start mt-4"
                  >
                    <span>Inquire Style</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Design Consulting Callout */}
        <div className="mt-16 bg-gradient-to-r from-maroon-950 to-maroon-900 text-beige-50 rounded-2xl p-8 md:p-12 border border-gold-400/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[10px] font-bold tracking-[0.2em] text-gold-300 uppercase block mb-1">
              Have a custom design on Pinterest?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light leading-snug">
              Bring your design screenshots to us. <span className="italic font-normal text-gold-300">We will stitch it precisely!</span>
            </h3>
          </div>
          <button
            onClick={handleBookClick}
            className="px-6 py-4 bg-gold-500 hover:bg-gold-400 text-charcoal-900 rounded-lg text-xs font-bold uppercase tracking-widest shadow-xl transition-all cursor-pointer flex-shrink-0 whitespace-nowrap transform hover:-translate-y-0.5"
          >
            Consult Janak Bhai Now
          </button>
        </div>

      </div>
    </section>
  );
}
