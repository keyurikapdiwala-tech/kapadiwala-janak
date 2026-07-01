import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('f1'); // defaults to opening first item

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-beige-100/50 dark:bg-charcoal-900/40 transition-colors duration-300 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold-600 dark:text-gold-400 uppercase block mb-2">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 dark:text-white leading-tight">
            Frequently Asked <span className="italic font-normal text-maroon-800 dark:text-gold-300">Queries</span>
          </h2>
          <div className="w-20 h-[1px] bg-gold-500 mx-auto mt-4" />
          <p className="text-sm text-charcoal-600 dark:text-beige-300 font-light mt-5 leading-relaxed">
            Have questions about custom tailors, booking consultations, or fabric selection? Find immediate answers below or contact us on WhatsApp.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-container">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`border border-gold-400/10 rounded-xl overflow-hidden bg-beige-50 dark:bg-charcoal-800 transition-shadow duration-300 ${
                  isOpen ? 'shadow-md ring-1 ring-gold-400/10' : 'hover:shadow-sm'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                  id={`faq-trigger-${faq.id}`}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-maroon-800 dark:text-gold-400 flex-shrink-0" />
                    <span className="font-serif text-base sm:text-lg font-semibold text-charcoal-900 dark:text-white group-hover:text-maroon-800 dark:group-hover:text-gold-300 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gold-600 dark:text-gold-400 flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Accordion Body Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal-600 dark:text-beige-300 font-light leading-relaxed border-t border-gold-400/5 text-justify">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
