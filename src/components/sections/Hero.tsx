import { motion } from 'framer-motion';
import { ArrowDown } from '@phosphor-icons/react';
import { HERO } from '../../data/content';

// Premium Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const textRevealVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split headline into words for the typewriter/reveal effect
  const words = HERO.headline.split(' ');

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center bg-[#1a1614] overflow-hidden"
    >
      {/* Background Image with Infinite Slow Pan */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          src="https://images.unsplash.com/photo-1769355104335-acef3aa4c9b6?q=80&w=1969&auto=format&fit=crop"
          alt="Industrial packaging facility"
          className="w-full h-full object-cover origin-center"
        />
        {/* Deep, premium brownish/black gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171311] via-[#2a221d]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171311] via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Label with pulsing dot */}
          <motion.div variants={fadeUpVariants} className="flex items-center gap-4 mb-8">
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 bg-[#d4af37] rounded-full shadow-[0_0_12px_#d4af37]"
            />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#d4af37]">
              {HERO.label}
            </span>
          </motion.div>

          {/* Headline - Word by Word Reveal */}
          <motion.h1
            variants={textRevealVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-[-0.04em] text-white flex flex-wrap gap-[0.25em] mb-8"
          >
            {words.map((word, index) => (
              <motion.span key={index} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUpVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl mb-12"
          >
            {HERO.sub}
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={() => scrollToSection('services')}
              className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-9 py-4 bg-white text-[#171311] text-sm font-semibold tracking-[0.03em] rounded-full cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">{HERO.cta.primary}</span>
              <ArrowDown size={18} className="relative z-10 opacity-70 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="relative overflow-hidden inline-flex items-center justify-center px-9 py-4 border border-white/20 bg-white/5 backdrop-blur-md text-white text-sm font-medium tracking-[0.03em] rounded-full cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95"
            >
              {HERO.cta.secondary}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[22px] h-[34px] rounded-full border-2 border-white/20 flex items-start justify-center pt-2 backdrop-blur-sm"
        >
          <motion.div 
            animate={{ height: ['4px', '12px', '4px'], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 rounded-full bg-white/80" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}