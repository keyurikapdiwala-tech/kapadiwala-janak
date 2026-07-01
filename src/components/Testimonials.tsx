import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-beige-50 dark:bg-charcoal-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold-600 dark:text-gold-400 uppercase block mb-2">
            Client Voices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 dark:text-white leading-tight">
            Loved By <span className="italic font-normal text-maroon-800 dark:text-gold-300">Our Patrons</span>
          </h2>
          <div className="w-20 h-[1px] bg-gold-500 mx-auto mt-4" />
          <p className="text-sm text-charcoal-600 dark:text-beige-300 font-light mt-5 leading-relaxed">
            Read stories of absolute satisfaction from the beautiful women of Surat who trust Gargi Ladies Tailor for their life's most precious celebrations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6" id="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => {
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-beige-100/20 dark:bg-charcoal-800/40 p-8 rounded-2xl border border-gold-400/5 hover:border-gold-400/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Decorative Giant Quote Icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gold-500/10 group-hover:text-gold-500/20 transition-colors pointer-events-none" />

                <div>
                  {/* Star Rating row */}
                  <div className="flex items-center gap-1 text-gold-500 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Review Quote */}
                  <p className="text-xs sm:text-sm text-charcoal-700 dark:text-beige-200 font-light italic leading-relaxed mb-6 text-justify">
                    "{t.review}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="border-t border-gold-400/10 pt-4 mt-2 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-charcoal-900 dark:text-white uppercase tracking-wider">
                      {t.name}
                    </h4>
                    <span className="text-[10px] text-gold-600 dark:text-gold-400 font-semibold uppercase tracking-wider block mt-0.5">
                      {t.location}
                    </span>
                  </div>
                  <span className="text-[10px] text-charcoal-500 dark:text-beige-300/80 font-light font-mono">
                    {t.date}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
