import { motion } from 'framer-motion';
import { ArrowUpRight, Phone, MapPin, Clock, CaretRight } from '@phosphor-icons/react';
import { FOOTER } from '../../data/content';

// Clean, smooth animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black overflow-hidden pt-20">
      {/* Crisp solid top border instead of gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

      <div className="container relative z-10 pb-16 md:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8"
        >
          {/* Column 1 - Brand & Big CTA */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
                {/* Solid white square for a more minimalist/brutalist structural feel */}
                <span className="w-2.5 h-2.5 bg-white" />
                <div>
                  <span className="text-white text-3xl font-light tracking-tight">
                    Amit Packaging
                  </span>
                  <span className="block text-white/50 text-[10px] font-semibold tracking-[0.3em] uppercase mt-1">
                    Industries
                  </span>
                </div>
              </motion.div>

              {/* Tagline */}
              <motion.p variants={itemVariants} className="text-white/60 text-lg font-light leading-relaxed max-w-sm mb-10">
                {FOOTER.tagline}
              </motion.p>
            </div>

            {/* Stark B&W CTA Button */}
            <motion.div variants={itemVariants}>
              <a
                href="tel:+918056265802"
                className="group relative inline-flex items-center gap-4 px-8 py-4 border border-white text-white text-sm font-medium tracking-wide uppercase rounded-full cursor-pointer transition-all duration-500 hover:bg-white hover:text-black active:scale-95"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-black/10 transition-colors">
                  <Phone size={16} weight="fill" />
                </div>
                <span>Call Us Now</span>
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </div>

          {/* Column 2 - Navigation */}
          <div className="md:col-span-3 md:col-start-7 pt-4">
            <motion.h4 variants={itemVariants} className="text-white/40 text-xs font-semibold tracking-[0.25em] uppercase mb-8 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-white/40"></span>
              Quick Links
            </motion.h4>
            <ul className="space-y-4">
              {FOOTER.nav.map((link) => (
                <motion.li key={link} variants={itemVariants}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="group flex items-center gap-3 text-white/60 text-base font-light tracking-wide cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-2"
                  >
                    <CaretRight size={14} className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="md:col-span-3 md:col-start-10 pt-4">
            <motion.h4 variants={itemVariants} className="text-white/40 text-xs font-semibold tracking-[0.25em] uppercase mb-8 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-white/40"></span>
              Contact Us
            </motion.h4>

            <div className="space-y-6">
              {/* Address */}
              <motion.a
                variants={itemVariants}
                href="https://maps.google.com/?q=5V89+Q6+Kota,+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex-shrink-0 mt-1">
                  <MapPin size={20} className="text-white" weight="light" />
                </div>
                <div>
                  <span className="block text-white/40 text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5">Location</span>
                  <address className="not-italic text-white/80 text-sm font-light leading-relaxed">
                    {FOOTER.address.split(',').map((part, i) => (
                      <span key={i} className="block">{part.trim()}{i < FOOTER.address.split(',').length - 1 ? ',' : ''}</span>
                    ))}
                  </address>
                </div>
              </motion.a>

              {/* Hours */}
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Clock size={20} className="text-white" weight="light" />
                </div>
                <div>
                  <span className="block text-white/40 text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5">Business Hours</span>
                  <span className="block text-white/80 text-sm font-light">Mon - Sat</span>
                  <span className="block text-white/60 text-sm font-light">8:00 AM - 6:00 PM</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-black">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-xs font-light tracking-wide">
              © {currentYear} Amit Packaging Industries. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://maps.google.com/?q=5V89+Q6+Kota,+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/40 text-xs font-light transition-colors duration-300 hover:text-white"
              >
                <MapPin size={14} className="transition-colors" />
                <span>View on Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Strict B&W Return to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="fixed z-50 bottom-8 right-8 w-14 h-14 rounded-full bg-white text-black border border-transparent flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-black hover:text-white hover:border-white hover:scale-110 active:scale-95"
        aria-label="Return to top"
      >
        <ArrowUpRight size={20} weight="bold" className="-rotate-45" />
      </motion.button>
    </footer>
  );
}