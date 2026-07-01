import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(progressTimer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-maroon-950 text-beige-50"
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          <div className="relative flex flex-col items-center max-w-md px-6 text-center">
            {/* Elegant luxury crest animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center w-24 h-24 mb-6 border border-gold-400/30 rounded-full"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                className="absolute inset-2 border-t-2 border-b-2 border-gold-400 rounded-full"
              />
              <Sparkles className="w-8 h-8 text-gold-400 animate-pulse" />
            </motion.div>

            {/* Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-3xl md:text-4xl tracking-widest text-gold-300 uppercase"
            >
              Gargi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xs tracking-[0.3em] text-beige-200/80 uppercase mt-2 font-light"
            >
              Ladies Tailor & Boutique
            </motion.p>

            {/* Elegant Progress bar */}
            <div className="w-48 h-[2px] bg-maroon-900 rounded-full overflow-hidden mt-8 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-500 to-gold-300"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeInOut' }}
              />
            </div>
            
            <motion.span 
              className="text-[10px] font-mono tracking-widest text-gold-400/60 mt-2 block"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              CRAFTING THE PERFECT FIT... {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
