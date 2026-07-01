import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Info, Eye, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  
  // Specific state for Before/After alteration preview toggle
  const [showAfterMap, setShowAfterMap] = useState<{ [key: string]: boolean }>({});

  const categories = [
    'All',
    'Designer Blouse',
    'Bridal Collection',
    'Lehenga',
    'Kurti',
    'Party Wear',
    'Traditional Wear',
    'Designer Dress',
    'Signature Packaging',
    'Before & After Alteration'
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const toggleBeforeAfter = (id: string) => {
    setShowAfterMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="gallery" className="py-24 bg-beige-100/50 dark:bg-charcoal-900/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold-600 dark:text-gold-400 uppercase block mb-2">
            The Gargi Lookbook
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 dark:text-white leading-tight">
            Our Handcrafted <span className="italic font-normal text-maroon-800 dark:text-gold-300">Creations Gallery</span>
          </h2>
          <div className="w-20 h-[1px] bg-gold-500 mx-auto mt-4" />
          <p className="text-sm text-charcoal-600 dark:text-beige-300 font-light mt-5 leading-relaxed">
            Take inspiration from our premium collection of bridal blouses, heavy royal lehengas, chic designer outfits, and masterfully tailored restorations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="gallery-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs tracking-wider transition-all duration-300 focus:outline-none font-medium border cursor-pointer ${
                activeCategory === cat
                  ? 'bg-maroon-800 text-beige-50 border-maroon-800 shadow-sm dark:bg-gold-500 dark:text-charcoal-900 dark:border-gold-500'
                  : 'bg-beige-100/30 text-charcoal-600 border-gold-400/10 hover:border-gold-400/20 dark:bg-charcoal-800/30 dark:text-beige-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const isAlteration = item.category === 'Before & After Alteration';
              const showAfter = showAfterMap[item.id] !== false; // defaults to true (after image) for ultimate presentation

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  key={item.id}
                  className="group relative bg-beige-50 dark:bg-charcoal-800 rounded-2xl border border-gold-400/5 shadow-sm overflow-hidden flex flex-col justify-between"
                >
                  
                  {/* Image Display */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-beige-100 dark:bg-charcoal-900 image-zoom-container">
                    
                    {isAlteration ? (
                      /* Before & After Interactive Image frame */
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={showAfter ? 'after' : 'before'}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          src={showAfter ? item.afterImageUrl : item.beforeImageUrl}
                          alt={`${item.title} - ${showAfter ? 'After Alteration' : 'Before Alteration'}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </AnimatePresence>
                    ) : (
                      /* Regular Showcase Image */
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Left Badges (Category) */}
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                      <span className="px-3 py-1 bg-maroon-950/80 backdrop-blur-sm text-gold-400 text-[9px] font-bold uppercase tracking-widest rounded-full border border-gold-400/20 shadow-md">
                        {item.category}
                      </span>
                      {isAlteration && (
                        <span className="px-3 py-1 bg-gold-600 text-charcoal-900 text-[9px] font-extrabold uppercase tracking-widest rounded-full shadow-md">
                          {showAfter ? 'After (Fitted)' : 'Before (Oversized)'}
                        </span>
                      )}
                    </div>

                    {/* Action Hover Controls */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      
                      {isAlteration ? (
                        /* Toggle Button for Alterations */
                        <button
                          onClick={() => toggleBeforeAfter(item.id)}
                          className="p-3 bg-beige-50/95 text-maroon-800 hover:bg-maroon-800 hover:text-white rounded-full shadow-xl border border-gold-400/15 cursor-pointer flex items-center gap-1 text-xs uppercase font-bold tracking-wider px-4 transition-colors focus:outline-none"
                        >
                          <Sparkles className="w-4 h-4 animate-spin-slow" />
                          <span>View {showAfter ? 'Before' : 'After'}</span>
                        </button>
                      ) : (
                        /* Zoom Button for Regular Images */
                        <button
                          onClick={() => setLightboxItem(item)}
                          className="p-3.5 bg-beige-50/95 text-charcoal-900 hover:bg-gold-500 hover:text-charcoal-900 rounded-full shadow-xl border border-gold-400/15 cursor-pointer transition-colors focus:outline-none"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Card Info Details */}
                  <div className="p-5 border-t border-gold-400/5">
                    <h3 className="font-serif text-lg font-semibold text-charcoal-900 dark:text-white leading-tight mb-2 group-hover:text-maroon-800 dark:group-hover:text-gold-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-charcoal-500 dark:text-beige-300 font-light tracking-wide">
                      {isAlteration 
                        ? 'Master-crafted alteration fixing body contouring, hemline adjustments, and structural shape.' 
                        : `Bespoke tailor design carefully modeled and finished by Janak Kapadiwala.`}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Zoom Dialog Modal */}
        <AnimatePresence>
          {lightboxItem && (
            <motion.div
              id="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-charcoal-950/95 p-4 backdrop-blur-sm"
              onClick={() => setLightboxItem(null)}
            >
              {/* Close Hotspot */}
              <button
                className="absolute top-6 right-6 p-2 bg-charcoal-800 text-white hover:text-gold-400 hover:bg-charcoal-700 rounded-full cursor-pointer focus:outline-none z-50 transition-all"
                onClick={() => setLightboxItem(null)}
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full bg-charcoal-900 border border-gold-400/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Left Column: Image */}
                <div className="md:w-3/5 aspect-[3/4] bg-charcoal-950 flex items-center justify-center relative">
                  <img
                    src={lightboxItem.imageUrl}
                    alt={lightboxItem.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute top-4 left-4 bg-maroon-900/95 text-gold-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-gold-400/20 rounded-full">
                    {lightboxItem.category}
                  </div>
                </div>

                {/* Modal Right Column: Story */}
                <div className="md:w-2/5 p-8 flex flex-col justify-between bg-charcoal-900 text-beige-50">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.25em] text-gold-400 uppercase">
                      Bespoke Masterpiece
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-white leading-tight mt-2 mb-4">
                      {lightboxItem.title}
                    </h3>
                    
                    <div className="w-12 h-[1px] bg-gold-500 mb-6" />

                    <div className="space-y-4 text-xs sm:text-sm text-beige-300/80 font-light leading-relaxed">
                      <p>
                        Stitched with ultra-fine cotton lining and reinforced side-zippers for structural integrity. Pattern features customizable back-drops, delicate loops, and hand-molded dori tassels.
                      </p>
                      <div className="flex flex-col gap-2 pt-4 border-t border-white/10 text-xs">
                        <div className="flex justify-between">
                          <span className="text-beige-400/60 uppercase tracking-wider text-[10px]">Stitching Master:</span>
                          <span className="text-gold-300 font-medium">Janak Kapadiwala</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-beige-400/60 uppercase tracking-wider text-[10px]">Fabric Class:</span>
                          <span className="text-beige-100">Premium Silk / Velvet / Organza</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-beige-400/60 uppercase tracking-wider text-[10px]">Finishing Style:</span>
                          <span className="text-beige-100">Boutique Double Lining</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    id="lightbox-cta-whatsapp"
                    href={`${BUSINESS_INFO.socials.whatsapp}&text=Hello%20Gargi%20Ladies%20Tailor%20-%20I%20am%20interested%20in%20stitching%20something%20similar%20to%20your%20Gallery%20item%3A%20${encodeURIComponent(lightboxItem.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 w-full py-3.5 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-900 text-center rounded-lg font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Inquire About Design</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
