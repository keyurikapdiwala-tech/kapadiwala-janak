import { motion } from 'motion/react';
import { Check, ShieldCheck, Award, ThumbsUp, Scissors, Sparkles, Clock, TrendingUp, CreditCard } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function About() {
  const pillars = [
    {
      title: 'Perfect Fitting',
      desc: 'Expert body-shape analysis and custom master cutting to sit perfectly on your unique frame.',
      icon: Scissors,
      color: 'bg-maroon-900/10 text-maroon-800'
    },
    {
      title: 'Premium Finishing',
      desc: 'Neat double-stitched piping, premium linings, overlocked seams, and pristine hidden zippers.',
      icon: Sparkles,
      color: 'bg-gold-500/15 text-gold-600'
    },
    {
      title: 'Latest Fashion Trends',
      desc: 'Infusing contemporary designer cuts, celebrity catalog inspirations, and modern necklines.',
      icon: TrendingUp,
      color: 'bg-rosegold-500/15 text-rosegold-600'
    },
    {
      title: 'Affordable Pricing',
      desc: 'Transparent boutique rates that bring premium custom-cut fashion to every budget.',
      icon: CreditCard,
      color: 'bg-maroon-900/10 text-maroon-800'
    },
    {
      title: 'Timely Delivery',
      desc: 'Guaranteed delivery dates so your premium outfits are perfectly ready before any occasion.',
      icon: Clock,
      color: 'bg-gold-500/15 text-gold-600'
    }
  ];

  return (
    <section id="about" className="py-24 bg-beige-100/50 dark:bg-charcoal-900/40 relative overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-400/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-maroon-900/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Editorial Image Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/10"
            >
              <img
                src={BUSINESS_INFO.images.about}
                alt="Bespoke Tailoring Workshop Details"
                className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Gold Grid Accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-maroon-950/20 to-transparent pointer-events-none" />
              
              {/* Floating Quality Stamp */}
              <div className="absolute bottom-8 left-8 bg-beige-50/95 dark:bg-charcoal-800/95 backdrop-blur-md p-5 rounded-xl border border-gold-400/20 flex items-center gap-4 max-w-[280px]">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold tracking-wide text-charcoal-900 dark:text-gold-300 uppercase">
                    Trusted Master Tailor
                  </h4>
                  <p className="text-xs text-charcoal-600 dark:text-beige-300 mt-0.5">
                    Stitching perfection for generations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Narrative and Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Heading */}
            <div className="mb-8">
              <span className="text-xs font-semibold tracking-[0.2em] text-gold-600 dark:text-gold-400 uppercase block mb-2">
                Heritage of Craftsmanship
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 dark:text-white leading-tight">
                About <span className="italic font-normal text-maroon-800 dark:text-gold-300">Gargi Ladies Tailor</span>
              </h2>
              <div className="w-20 h-[1px] bg-gold-500 mt-4" />
            </div>

            {/* Narrative */}
            <div className="text-charcoal-700 dark:text-beige-200 text-sm sm:text-base font-light leading-relaxed mb-10 space-y-4 text-justify">
              <p>
                Founded and directed by master fashion designer <span className="font-semibold text-maroon-900 dark:text-gold-400">Janak Kapadiwala</span>, Gargi Ladies Tailor is Surat’s premier boutique destination for exquisite custom stitching. For years, we have combined timeless Indian textile aesthetics with modern cuts, translating fabric dreams into wearable works of art.
              </p>
              <p>
                Whether it is the intricate, royal zardosi detailing on a designer wedding lehenga, the perfect contouring of a princess-cut bridal blouse, or a simple, daily-wear kurti tailored for absolute comfort, we approach every needle-point with extreme attention to detail.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5">
              <h4 className="font-serif text-lg text-maroon-800 dark:text-gold-300 uppercase tracking-widest border-b border-gold-400/10 pb-2 mb-1">
                Our Core Promises
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
                      className="p-4 bg-beige-50 dark:bg-charcoal-800/60 rounded-xl border border-gold-400/5 hover:border-gold-400/20 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4"
                    >
                      <div className={`w-10 h-10 rounded-lg ${pillar.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-serif text-sm font-semibold tracking-wider text-charcoal-900 dark:text-gold-300 uppercase">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-charcoal-600 dark:text-beige-300 mt-1 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
