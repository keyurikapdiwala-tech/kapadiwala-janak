import { motion } from 'motion/react';
import { 
  UserCheck, 
  Scissors, 
  CreditCard, 
  Calendar, 
  Sparkles, 
  TrendingUp, 
  PenTool, 
  Heart 
} from 'lucide-react';
import { REASONS_TO_CHOOSE } from '../data';

const iconMap: { [key: string]: any } = {
  UserCheck,
  Scissors,
  CreditCard,
  Calendar,
  Sparkles,
  TrendingUp,
  PenTool,
  Heart
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-beige-100/50 dark:bg-charcoal-900/40 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold-600 dark:text-gold-400 uppercase block mb-2">
            Signature Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 dark:text-white leading-tight">
            Why Choose <span className="italic font-normal text-maroon-800 dark:text-gold-300">Gargi Ladies Tailor</span>
          </h2>
          <div className="w-20 h-[1px] bg-gold-500 mx-auto mt-4" />
          <p className="text-sm text-charcoal-600 dark:text-beige-300 font-light mt-5 leading-relaxed">
            Our commitment to dressmaking excellence guarantees you look outstanding on every occasion. Here is what defines our luxury tailoring house.
          </p>
        </div>

        {/* Reasons Grid (Bento Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="why-choose-us-grid">
          {REASONS_TO_CHOOSE.map((reason, idx) => {
            const IconComponent = iconMap[reason.iconName] || Heart;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="group relative bg-beige-50 dark:bg-charcoal-800 p-6 rounded-2xl border border-gold-400/5 hover:border-gold-400/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Decorative gold background circle */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gold-500/5 group-hover:bg-gold-500/10 transition-colors pointer-events-none" />

                {/* Card Icon */}
                <div className="w-10 h-10 rounded-lg bg-maroon-800/5 dark:bg-gold-500/5 border border-maroon-800/10 dark:border-gold-500/10 flex items-center justify-center text-maroon-800 dark:text-gold-400 mb-6 group-hover:bg-maroon-800 group-hover:text-beige-50 dark:group-hover:bg-gold-500 dark:group-hover:text-charcoal-900 transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Reason Title */}
                <h3 className="font-serif text-base sm:text-lg font-semibold tracking-wide text-charcoal-900 dark:text-white mb-2 group-hover:text-maroon-800 dark:group-hover:text-gold-300 transition-colors">
                  {reason.title}
                </h3>

                {/* Reason Description */}
                <p className="text-xs text-charcoal-600 dark:text-beige-300 font-light leading-relaxed text-justify">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
