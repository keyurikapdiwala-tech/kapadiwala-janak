import { motion } from 'motion/react';
import { Phone, Calendar, ArrowDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center bg-maroon-950 text-beige-50 pt-24 overflow-hidden"
    >
      {/* Background with Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BUSINESS_INFO.images.hero}
          alt="Luxury Gargi Tailoring Boutique Background"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform animate-slow-pulse"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/80 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/90 to-maroon-950/45 md:hidden block" />
        
        {/* Subtle Decorative Golden Particle */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rosegold-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        {/* Main Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
              Premium Ladies Tailoring & Boutique
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05] mb-6"
          >
            Perfect Stitching <br />
            <span className="font-serif italic text-gold-300 font-normal">for Every Woman</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-beige-200 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed mb-10 text-justify"
          >
            Custom tailoring with precision, style, and elegance. From daily wear to bespoke bridal collections, we create masterfully finished outfits that perfectly fit your unique body and personality.
          </motion.p>

          {/* Action Callouts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* Book Appointment CTA */}
            <button
              id="hero-cta-appointment"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-900 rounded-lg font-semibold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2.5 shadow-2xl transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            {/* Call Now CTA */}
            <a
              id="hero-cta-call"
              href={BUSINESS_INFO.socials.call}
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-gold-300 text-white hover:text-gold-300 rounded-lg font-semibold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </motion.div>

          {/* Master Details Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8 text-[11px] tracking-widest text-beige-300/80 uppercase"
          >
            <div>
              <span className="text-gold-400 font-serif text-lg block font-semibold">Decades</span>
              <span>of Expertise</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div>
              <span className="text-gold-400 font-serif text-lg block font-semibold">100%</span>
              <span>Perfect Fit Guarantee</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div>
              <span className="text-gold-400 font-serif text-lg block font-semibold">Surat</span>
              <span>Boutique Hub</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual Card / Floating Motif */}
        <div className="lg:col-span-5 hidden lg:block relative justify-self-center w-full max-w-[340px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative border border-gold-400/20 p-4 bg-maroon-900/35 backdrop-blur-md rounded-2xl shadow-3xl overflow-hidden aspect-[3/4]"
          >
            {/* Soft gold outline design */}
            <div className="absolute inset-2 border border-gold-400/10 rounded-xl pointer-events-none" />
            
            {/* Visual content: Bridal showcase mini banner */}
            <img
              src={BUSINESS_INFO.images.bridalBlouse}
              alt="Premium Indian Bridal Blouse Stitching Showcase"
              className="w-full h-full object-cover rounded-lg opacity-95 hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Label Overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-maroon-950/80 backdrop-blur-md p-4 rounded-xl border border-gold-400/15 text-center">
              <span className="text-[10px] tracking-widest text-gold-300 uppercase font-semibold block mb-1">
                Bridal Masterpiece
              </span>
              <span className="font-serif text-lg text-white font-light tracking-wide italic block">
                Stitched by Janak Kapadiwala
              </span>
            </div>
          </motion.div>

          {/* Rotating decorative emblem in background */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            className="absolute -top-12 -right-12 w-32 h-32 border border-gold-400/10 rounded-full flex items-center justify-center opacity-30 pointer-events-none"
          >
            <div className="w-24 h-24 border border-dashed border-gold-400/15 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Bounce-Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-beige-300/60 hover:text-gold-400 transition-colors cursor-pointer"
        >
          <span className="text-[9px] uppercase tracking-[0.2em] font-light">Scroll Down</span>
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
