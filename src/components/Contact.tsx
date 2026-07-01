import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  User, 
  Send, 
  CheckCircle, 
  CalendarDays,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleWhatsAppRedirect = () => {
    const serviceText = selectedService ? `for ${selectedService}` : '';
    const messageText = message ? ` Message: ${message}` : '';
    const fullText = `Hello Gargi Ladies Tailor! I would like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nService Interested: ${selectedService || 'Custom Stitching'}\n${messageText}`;
    
    const whatsappUrl = `https://wa.me/916352902879?text=${encodeURIComponent(fullText)}`;
    window.open(whatsappUrl, '_blank');
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setSelectedService('');
    setMessage('');
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-beige-50 dark:bg-charcoal-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold-600 dark:text-gold-400 uppercase block mb-2">
            Visit & Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 dark:text-white leading-tight">
            Schedule Your <span className="italic font-normal text-maroon-800 dark:text-gold-300">Fitting Session</span>
          </h2>
          <div className="w-20 h-[1px] bg-gold-500 mx-auto mt-4" />
          <p className="text-sm text-charcoal-600 dark:text-beige-300 font-light mt-5 leading-relaxed">
            Fill out our premium booking form below to secure a prioritized custom consultation slot with master fashion designer Janak Kapadiwala.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-container">
          
          {/* Left Column: Direct Info & Google Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              
              {/* Brand Block Card */}
              <div className="p-6 bg-beige-100/30 dark:bg-charcoal-800/40 border border-gold-400/10 rounded-2xl">
                <h3 className="font-serif text-2xl font-semibold text-maroon-800 dark:text-gold-300 uppercase tracking-wider">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-charcoal-500 dark:text-beige-300 uppercase tracking-widest mt-1 font-medium">
                  By {BUSINESS_INFO.owner}
                </p>
                <div className="w-12 h-[1px] bg-gold-500/50 mt-4 mb-4" />
                <p className="text-xs sm:text-sm text-charcoal-700 dark:text-beige-200 font-light leading-relaxed text-justify">
                  Our professional stitching boutique in Surat is fully equipped with multiple fitting rooms, customized design sketches, and catalog booklets. Visit us today to bring your fabric designs to life.
                </p>
              </div>

              {/* Direct Info list */}
              <div className="space-y-4">
                
                {/* Phone */}
                <a 
                  id="contact-info-phone"
                  href={BUSINESS_INFO.socials.call}
                  className="p-4 bg-beige-50 dark:bg-charcoal-800 border border-gold-400/5 hover:border-gold-400/20 rounded-xl flex items-center gap-4 transition-all duration-300 group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-maroon-800/5 dark:bg-gold-500/5 text-maroon-800 dark:text-gold-400 flex items-center justify-center group-hover:bg-maroon-800 group-hover:text-white dark:group-hover:bg-gold-500 dark:group-hover:text-charcoal-900 transition-colors">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-500 dark:text-beige-300 font-bold block">
                      Call Janak Bhai
                    </span>
                    <span className="text-sm font-semibold text-charcoal-900 dark:text-white">
                      {BUSINESS_INFO.formattedPhone}
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div 
                  id="contact-info-address"
                  className="p-4 bg-beige-50 dark:bg-charcoal-800 border border-gold-400/5 rounded-xl flex items-start gap-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-maroon-800/5 dark:bg-gold-500/5 text-maroon-800 dark:text-gold-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-500 dark:text-beige-300 font-bold block">
                      Boutique Location
                    </span>
                    <span className="text-xs sm:text-sm text-charcoal-900 dark:text-white font-light leading-relaxed block mt-0.5 text-justify">
                      {BUSINESS_INFO.address}
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div 
                  id="contact-info-hours"
                  className="p-4 bg-beige-50 dark:bg-charcoal-800 border border-gold-400/5 rounded-xl flex items-start gap-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-maroon-800/5 dark:bg-gold-500/5 text-maroon-800 dark:text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-500 dark:text-beige-300 font-bold block">
                      Business Hours
                    </span>
                    <span className="text-xs sm:text-sm text-charcoal-900 dark:text-white mt-1 block">
                      <span className="font-semibold">{BUSINESS_INFO.hours.weekdays}</span>
                    </span>
                    <span className="text-xs text-rose-600 font-semibold uppercase tracking-wider text-[10px] mt-0.5 block">
                      {BUSINESS_INFO.hours.sunday}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Maps Embed iframe */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-gold-400/10 h-64 lg:h-full min-h-[220px]">
              <iframe
                src={BUSINESS_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="Gargi Ladies Tailor Location Map"
                className="absolute inset-0 w-full h-full"
              />
            </div>

          </div>

          {/* Right Column: Appointment Form Container */}
          <div className="lg:col-span-7 bg-beige-100/30 dark:bg-charcoal-800/40 border border-gold-400/10 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                /* Dynamic Interactive Form */
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl font-bold text-charcoal-900 dark:text-white">
                      Request Fitting Booking
                    </h3>
                    <p className="text-xs text-charcoal-500 dark:text-beige-300 font-light mt-1">
                      No payment required online. We will call you to confirm your date.
                    </p>
                  </div>

                  {/* Customer Name */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-700 dark:text-beige-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-gold-500" />
                      <span>Your Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-beige-50 dark:bg-charcoal-800 border border-gold-400/15 focus:border-maroon-800 dark:focus:border-gold-500 rounded-lg text-sm text-charcoal-900 dark:text-white outline-none transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-700 dark:text-beige-300 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-gold-500" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-beige-50 dark:bg-charcoal-800 border border-gold-400/15 focus:border-maroon-800 dark:focus:border-gold-500 rounded-lg text-sm text-charcoal-900 dark:text-white outline-none transition-colors"
                    />
                  </div>

                  {/* Selected Service */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-700 dark:text-beige-300 flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5 text-gold-500" />
                      <span>Service Required (Optional)</span>
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 bg-beige-50 dark:bg-charcoal-800 border border-gold-400/15 focus:border-maroon-800 dark:focus:border-gold-500 rounded-lg text-sm text-charcoal-900 dark:text-white outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a Tailoring Service</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-700 dark:text-beige-300">
                      Stitching Requirements & Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Let us know your design ideas, custom measurements, fabric status, or dress references..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-beige-50 dark:bg-charcoal-800 border border-gold-400/15 focus:border-maroon-800 dark:focus:border-gold-500 rounded-lg text-sm text-charcoal-900 dark:text-white outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Book Button */}
                  <button
                    id="contact-form-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-maroon-800 hover:bg-maroon-900 dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-charcoal-900 font-bold text-xs uppercase tracking-[0.18em] rounded-lg shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-beige-50 border-t-transparent dark:border-charcoal-900 dark:border-t-transparent rounded-full animate-spin" />
                        <span>Verifying Slots...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Book Appointment</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Success Animated State */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 border border-emerald-500/25 shadow-lg"
                  >
                    <CheckCircle className="w-10 h-10" />
                  </motion.div>

                  <h3 className="font-serif text-3xl font-light text-charcoal-900 dark:text-white mb-2">
                    Appointment <span className="italic font-normal text-emerald-600">Requested!</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 dark:text-beige-300 max-w-md font-light leading-relaxed mb-8">
                    Thank you <span className="font-semibold text-maroon-800 dark:text-gold-400">{name}</span>! Master Tailor Janak Bhai will contact you shortly on your phone (<span className="font-semibold">{phone}</span>) to verify fabric details and slot timings.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    {/* Instant WhatsApp Handshake */}
                    <button
                      id="success-whatsapp-handshake"
                      onClick={handleWhatsAppRedirect}
                      className="flex-1 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-lg"
                    >
                      <span>Forward to WhatsApp</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Reset Button */}
                    <button
                      onClick={resetForm}
                      className="flex-1 py-3.5 bg-transparent border border-gold-400/20 hover:border-gold-400 text-charcoal-600 dark:text-beige-300 rounded-lg text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                    >
                      Book Another Fit
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
