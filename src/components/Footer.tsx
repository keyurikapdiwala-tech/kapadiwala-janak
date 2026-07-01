import { Instagram, MessageSquare, Phone, MapPin, Heart } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
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

  const footerQuickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer id="main-footer" className="bg-charcoal-900 text-beige-100 border-t border-gold-400/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background Decorative Gold Motif */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gold-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
        
        {/* Brand Description Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex flex-col">
            <span className="font-serif text-3xl font-bold tracking-widest text-gold-300 uppercase">
              Gargi
            </span>
            <span className="text-[10px] tracking-[0.25em] text-beige-300/80 uppercase font-light">
              Ladies Tailor & Boutique
            </span>
          </div>
          
          <p className="text-xs sm:text-sm text-beige-300/60 font-light leading-relaxed text-justify">
            Premium custom ladies tailoring, custom designer blouses, bridal gowns, heavy lehengas, and alterations directed by Janak Kapadiwala. Providing perfect comfort-fit silhouettes across Surat.
          </p>

          {/* Social Icons row */}
          <div className="flex items-center gap-3 pt-2">
            
            {/* Instagram */}
            <a
              href={BUSINESS_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold-500 hover:text-charcoal-900 flex items-center justify-center border border-white/10 transition-all cursor-pointer"
              title="Follow our Lookbook on Instagram"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>

            {/* WhatsApp */}
            <a
              href={BUSINESS_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#25D366] hover:text-white flex items-center justify-center border border-white/10 transition-all cursor-pointer"
              title="Chat with us on WhatsApp"
            >
              <MessageSquare className="w-4.5 h-4.5" />
            </a>

            {/* Call */}
            <a
              href={BUSINESS_INFO.socials.call}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-maroon-800 hover:text-white flex items-center justify-center border border-white/10 transition-all cursor-pointer"
              title="Call Janak Bhai"
            >
              <Phone className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-gold-400 border-b border-white/5 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {footerQuickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="text-xs text-beige-300/60 hover:text-gold-300 font-light transition-colors cursor-pointer focus:outline-none"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tailoring Services Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-gold-400 border-b border-white/5 pb-2">
            Stitching Services
          </h4>
          <ul className="grid grid-cols-1 gap-2">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-xs text-beige-300/60 hover:text-gold-300 font-light transition-colors cursor-pointer focus:outline-none text-left"
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Coordinates Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-gold-400 border-b border-white/5 pb-2">
            Our Studio
          </h4>
          <ul className="space-y-4 text-xs font-light text-beige-300/60">
            <li className="flex gap-2 items-start">
              <MapPin className="w-4.5 h-4.5 text-gold-500 flex-shrink-0 mt-0.5" />
              <span className="text-justify leading-relaxed">{BUSINESS_INFO.address}</span>
            </li>
            <li className="flex gap-2 items-center">
              <Phone className="w-4.5 h-4.5 text-gold-500 flex-shrink-0" />
              <span>{BUSINESS_INFO.formattedPhone}</span>
            </li>
            <li className="pt-2 border-t border-white/5">
              <span className="text-[10px] text-gold-500 uppercase tracking-widest block font-semibold">
                Owner & Designer
              </span>
              <span className="text-white mt-1 block font-medium">Janak Kapadiwala</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-beige-300/40 font-light">
        <p>
          &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1 text-[11px] tracking-wider uppercase">
          <span>Stitched with</span>
          <Heart className="w-3.5 h-3.5 text-rose-600 fill-current animate-pulse" />
          <span>by</span>
          <span className="font-semibold text-beige-300/80">{BUSINESS_INFO.owner}</span>
        </p>
      </div>
    </footer>
  );
}
