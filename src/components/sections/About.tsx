import { useRef, useLayoutEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ABOUT } from '../../data/content';

function StatItem({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState('0');

  useLayoutEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const endValue = parseFloat(numericMatch[0]);
    const suffix = value.replace(numericMatch[0], '');
    let startTime: number | null = null;
    const duration = 1500;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * endValue;
      setDisplayValue(
        (value.includes('.') ? current.toFixed(1) : Math.floor(current).toString()) + suffix
      );
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center md:text-left p-4"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[var(--color-carbon-warm)] mb-2">
        {displayValue}
      </div>
      <div className="text-sm font-normal tracking-[0.02em] text-[var(--color-mercury)]">
        {label}
      </div>
    </motion.div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section bg-[var(--color-vellum)]"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="order-1 lg:order-first relative"
          >
            <div className="relative overflow-hidden rounded-[40px] md:rounded-[60px] aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
                alt="Amit Packaging Industries manufacturing facility in Kota"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              {/* Overlay decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[rgba(50,45,42,0.3)] to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 border border-[var(--color-carbon-warm)]/20 rounded-[30px] md:rounded-[40px] -z-10" />
          </motion.div>

          {/* Right Column - Content */}
          <div className="order-2 lg:order-last">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 bg-[var(--color-carbon-warm)] rounded-full flex-shrink-0" />
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-carbon-warm)]">
                {ABOUT.label}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-carbon-warm)] mb-8 whitespace-pre-line"
            >
              {ABOUT.headline}
            </motion.h2>

            {/* Body */}
            {ABOUT.body.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-[var(--color-carbon-warm)]/80 mb-5 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 pt-12 border-t border-[var(--color-carbon-warm)]/10"
            >
              {ABOUT.stats.map((stat, index) => (
                <StatItem
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
