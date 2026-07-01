import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function FloatingControls() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide back to top button
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[999]">
        <div
          className="h-full bg-gradient-to-r from-maroon-700 via-gold-500 to-rosegold-500 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              id="back-to-top"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              onClick={scrollToTop}
              className="p-3 bg-charcoal-900 text-beige-50 hover:bg-gold-600 transition-colors shadow-xl rounded-full border border-gold-400/20 cursor-pointer"
              title="Back to Top"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Call Now Floating */}
        <motion.a
          id="floating-call"
          href={BUSINESS_INFO.socials.call}
          className="p-4 bg-maroon-800 text-beige-50 hover:bg-maroon-700 transition-colors shadow-2xl rounded-full border border-gold-400/30 flex items-center justify-center cursor-pointer relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Call Janak Kapadiwala"
        >
          {/* Wave ripple effect */}
          <span className="absolute inset-0 rounded-full bg-maroon-800 animate-ping opacity-25 group-hover:hidden" />
          <Phone className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-32 group-hover:ml-2 transition-all duration-500 ease-out whitespace-nowrap text-xs font-medium uppercase tracking-wider">
            Call Tailor
          </span>
        </motion.a>

        {/* WhatsApp Floating */}
        <motion.a
          id="floating-whatsapp"
          href={BUSINESS_INFO.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors shadow-2xl rounded-full flex items-center justify-center cursor-pointer relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:hidden" />
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.067 1.01 11.999 1.01c-5.438 0-9.863 4.37-9.868 9.8-.001 1.77.463 3.5 1.34 5.013l-.99 3.616 3.704-.97a9.782 9.782 0 0 0 4.862 1.285zM17.13 14.34c-.28-.14-1.65-.81-1.91-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.89 1.1-.16.19-.32.21-.6.07-1.18-.58-1.97-1.03-2.75-2.37-.2-.35.2-.33.58-1.08.06-.12.03-.23-.02-.33-.05-.1-.45-1.09-.62-1.5-.16-.4-.35-.34-.48-.34s-.28-.02-.43-.02c-.15 0-.38.06-.58.28-.2.22-.76.75-.76 1.83 0 1.08.79 2.13.9 2.28.11.15 1.55 2.37 3.76 3.33.53.23.94.37 1.26.47.53.17 1.02.14 1.4.09.43-.06 1.33-.55 1.51-1.08.19-.53.19-.99.13-1.08-.05-.1-.2-.17-.48-.31z" />
          </svg>
          <span className="max-w-0 overflow-hidden group-hover:max-w-32 group-hover:ml-2 transition-all duration-500 ease-out whitespace-nowrap text-xs font-medium uppercase tracking-wider">
            WhatsApp
          </span>
        </motion.a>
      </div>
    </>
  );
}
