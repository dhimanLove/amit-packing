import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROCESS } from '../../data/content';

function ProcessItem({
  index,
  title,
  body,
  isOpen,
  onToggle,
}: {
  index: number;
  title: string;
  body: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="border-b border-[var(--color-carbon-warm)]/10 first:border-t"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 md:py-8 flex items-center gap-6 text-left group"
        aria-expanded={isOpen}
      >
        {/* Step Number */}
        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[var(--color-carbon-warm)]/20 flex items-center justify-center transition-all duration-300 group-hover:border-[var(--color-carbon-warm)]/40">
          <span className="text-sm md:text-base font-light text-[var(--color-carbon-warm)]">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <span className="flex-1 text-lg md:text-xl lg:text-2xl font-light tracking-[-0.01em] text-[var(--color-carbon-warm)] group-hover:text-[var(--color-carbon-warm)]/80 transition-colors duration-300">
          {title}
        </span>

        {/* Toggle Icon */}
        <div
          className={`
            flex-shrink-0 w-10 h-10 rounded-full
            flex items-center justify-center
            transition-all duration-400
            ${isOpen
              ? 'bg-[var(--color-carbon-warm)] rotate-180'
              : 'bg-[var(--color-paper-white)] border border-[var(--color-carbon-warm)]/10'
            }
          `}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={`transition-colors duration-300 ${isOpen ? 'text-[var(--color-paper-white)]' : 'text-[var(--color-carbon-warm)]'}`}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-20 md:pl-22 pb-6 md:pb-8 pr-4">
              <p className="text-sm md:text-base text-[var(--color-carbon-warm)]/70 leading-relaxed max-w-xl">
                {body}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="process"
      className="section bg-[var(--color-paper-white)]"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
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
                {PROCESS.label}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-carbon-warm)] whitespace-pre-line mb-8"
            >
              {PROCESS.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-[var(--color-carbon-warm)]/70"
            >
              From initial consultation to final delivery, every step is designed to ensure quality and precision.
            </motion.p>

            {/* Progress indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  {PROCESS.steps.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        openIndex === i
                          ? 'bg-[var(--color-carbon-warm)] w-6'
                          : 'bg-[var(--color-carbon-warm)]/20'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-[var(--color-mercury)] ml-2">
                  Step {openIndex !== null ? openIndex + 1 : 0} of {PROCESS.steps.length}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Process Steps */}
          <div className="group">
            {PROCESS.steps.map((step, index) => (
              <ProcessItem
                key={index}
                index={index}
                title={step.title}
                body={step.body}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
