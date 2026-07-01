import { motion } from 'motion/react';
import { Check, Info, Sparkles, MessageSquare } from 'lucide-react';
import { PRICING_LIST, BUSINESS_INFO } from '../data';

export default function Pricing() {
  const handlePricingInquiry = (name: string) => {
    const text = `Hello Janak Bhai, I am looking at your pricing table and would like to inquire about stitching: "${name}".`;
    window.open(`${BUSINESS_INFO.socials.whatsapp}&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-beige-50 dark:bg-charcoal-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold-600 dark:text-gold-400 uppercase block mb-2">
            Transparent Rates
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 dark:text-white leading-tight">
            Our Custom <span className="italic font-normal text-maroon-800 dark:text-gold-300">Stitching Pricing</span>
          </h2>
          <div className="w-20 h-[1px] bg-gold-500 mx-auto mt-4" />
          <p className="text-sm text-charcoal-600 dark:text-beige-300 font-light mt-5 leading-relaxed">
            Get premium boutique custom finishing at highly competitive, transparent rates. No hidden fees. Minor fit adjustment trials are always complimentary.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="pricing-grid">
          {PRICING_LIST.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group relative bg-beige-100/20 dark:bg-charcoal-800/40 p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
                  item.popular 
                    ? 'border-gold-400 dark:border-gold-500 ring-1 ring-gold-400/20 shadow-lg' 
                    : 'border-gold-400/10 hover:border-gold-400/30 shadow-sm'
                }`}
              >
                {/* Popular Ribbon badge */}
                {item.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-600 to-gold-400 text-charcoal-900 text-[9px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Popular Style</span>
                  </div>
                )}

                <div>
                  {/* Name */}
                  <h3 className="font-serif text-lg font-bold text-charcoal-900 dark:text-white mb-4 mt-2">
                    {item.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl sm:text-3xl font-serif font-semibold text-maroon-800 dark:text-gold-400 block">
                      {item.stitchingPrice}
                    </span>
                    <span className="text-[10px] text-charcoal-500 dark:text-beige-300 font-light">
                      (Stitching Charges Only)
                    </span>
                  </div>

                  {/* Delivery Info */}
                  <div className="flex items-center gap-2 text-xs text-charcoal-600 dark:text-beige-300 font-light border-t border-gold-400/10 pt-4 mb-6">
                    <span className="font-semibold uppercase tracking-wider text-[9px] text-gold-600 dark:text-gold-400">
                      Standard Timeframe:
                    </span>
                    <span>{item.timeframe}</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 text-xs text-charcoal-700 dark:text-beige-200 font-light mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span>Complimentary Trial & Minor alterations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span>Comfort-fit sweat proof lining options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span>Double stitching on primary pressure seams</span>
                    </li>
                  </ul>
                </div>

                {/* WhatsApp Query CTA */}
                <button
                  id={`pricing-cta-book-${item.id}`}
                  onClick={() => handlePricingInquiry(item.name)}
                  className={`w-full py-3 text-center rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    item.popular
                      ? 'bg-maroon-800 hover:bg-maroon-900 text-beige-50 dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-charcoal-900 shadow-md'
                      : 'bg-beige-100 dark:bg-charcoal-800 hover:bg-beige-200 dark:hover:bg-charcoal-700 text-charcoal-800 dark:text-beige-200 border border-gold-400/10'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Book Custom Fitting</span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Note Disclaimer */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <div className="w-full p-5 bg-maroon-900/5 dark:bg-gold-500/5 border border-gold-500/20 rounded-2xl flex items-start gap-4 shadow-sm text-left">
            <Info className="w-5 h-5 text-maroon-900 dark:text-gold-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-serif text-sm font-bold text-maroon-900 dark:text-gold-300 block mb-1">
                Pattern & Accessory Details
              </span>
              <p className="text-xs text-charcoal-700 dark:text-beige-200 font-light leading-relaxed">
                Please note that <strong className="font-semibold text-maroon-900 dark:text-gold-400">Pattern, Chain, and Custom Designer Pattern Charges are extra</strong>. Final pricing is tailored depending on specific lining options, design complexity, and embellishments selected.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
