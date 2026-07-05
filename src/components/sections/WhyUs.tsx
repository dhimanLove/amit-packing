import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Truck,
  ChartLine,
  HeadCircuit,
} from '@phosphor-icons/react';
import { WHY_US } from '../../data/content';

const iconMap: Record<string, typeof ShieldCheck> = {
  ShieldCheck,
  Truck,
  ChartLine,
  HeadCircuit,
};

function FeatureTile({
  icon,
  title,
  body,
  index,
}: {
  icon: string;
  title: string;
  body: string;
  index: number;
}) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      viewport={{ once: true, margin: '-50px' }}
      className="group relative"
    >
      <div className="p-8 md:p-10 rounded-[24px] bg-[var(--color-paper-white)] transition-all duration-500 group-hover:bg-[var(--color-vellum)]">
        {/* Number */}
        <span className="absolute top-6 right-6 text-[10px] font-mono tracking-[0.1em] text-[var(--color-mercury)]/50">
          0{index + 1}
        </span>

        {/* Icon */}
        <div className="mb-6">
          {Icon && (
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-vellum)] group-hover:bg-[var(--color-paper-white)] flex items-center justify-center transition-colors duration-500">
              <Icon size={28} className="text-[var(--color-carbon-warm)]" />
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-light tracking-[-0.01em] text-[var(--color-carbon-warm)] mb-3">
          {title}
        </h3>

        {/* Body */}
        <p className="text-sm md:text-base text-[var(--color-carbon-warm)]/70 leading-relaxed">
          {body}
        </p>
      </div>
    </motion.div>
  );
}

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="section bg-[var(--color-vellum)]"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 bg-[var(--color-carbon-warm)] rounded-full flex-shrink-0" />
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-carbon-warm)]">
                {WHY_US.label}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-carbon-warm)] whitespace-pre-line mb-8"
            >
              {WHY_US.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-[var(--color-carbon-warm)]/70"
            >
              Every box we produce is built on a foundation of precision, reliability, and deep expertise in industrial packaging.
            </motion.p>
          </div>

          {/* Right Column - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {WHY_US.points.map((point, index) => (
              <FeatureTile
                key={index}
                icon={point.icon}
                title={point.title}
                body={point.body}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
