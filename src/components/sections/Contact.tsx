import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowUpRight } from '@phosphor-icons/react';
import { CONTACT } from '../../data/content';

// Premium Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-black overflow-hidden border-t border-white/10"
    >
      <div className="container relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Column - Headline & Main CTA */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Premium Label */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
                <span className="w-2.5 h-2.5 bg-white" />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white">
                  {CONTACT.label}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-light leading-[1.05] tracking-[-0.03em] text-white whitespace-pre-line mb-12"
              >
                {CONTACT.headline}
              </motion.h2>
            </div>

            {/* Massive Typographic Phone CTA */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-white/10">
              <span className="block text-white/40 text-[10px] font-semibold tracking-[0.25em] uppercase mb-4">
                Direct Line
              </span>
              <a
                href="tel:+91xxxxxxxxxx"
                className="group flex items-center gap-6 w-fit"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full border border-white/20 text-white transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:border-white group-active:scale-95">
                  <Phone size={24} weight="fill" />
                </div>
                <span className="block text-3xl md:text-5xl font-light tracking-tight text-white transition-all duration-500 group-hover:translate-x-2">
                  {CONTACT.phone}
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Info Cards (Minimalist B&W) */}
          <div className="flex flex-col justify-center space-y-2">
            {/* Address Row */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-col sm:flex-row gap-6 p-8 border border-white/10 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.05] hover:border-white/30"
            >
              <div className="flex-shrink-0">
                <MapPin size={28} weight="light" className="text-white" />
              </div>
              <div>
                <h3 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-3">
                  Visit our facility
                </h3>
                <address className="not-italic text-lg md:text-xl font-light text-white leading-relaxed whitespace-pre-line mb-6">
                  {CONTACT.address}
                </address>
                <a
                  href="https://maps.google.com/?q=5V89+Q6+Kota,+Rajasthan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300 hover:gap-4"
                >
                  <span className="border-b border-white/30 pb-0.5">Get directions</span>
                  <ArrowUpRight size={16} className="transition-transform duration-300" />
                </a>
              </div>
            </motion.div>

            {/* Hours Row */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-col sm:flex-row gap-6 p-8 border border-white/10 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.05] hover:border-white/30"
            >
              <div className="flex-shrink-0">
                <Clock size={28} weight="light" className="text-white" />
              </div>
              <div>
                <h3 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-3">
                  Operating hours
                </h3>
                <p className="text-lg md:text-xl font-light text-white">
                  {CONTACT.hours}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}