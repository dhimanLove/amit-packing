import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from '@phosphor-icons/react';
import { REVIEWS } from '../../data/content';

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          weight={star <= rating ? 'fill' : 'regular'}
          className={star <= rating ? 'text-[#c4a35a]' : 'text-[var(--color-mercury)]/30'}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  name,
  rating,
  date,
  text,
  index,
}: {
  name: string;
  rating: number;
  date: string;
  text: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.15,
      }}
      viewport={{ once: true, margin: '-50px' }}
      className="group relative"
    >
      <div className="h-full p-6 md:p-8 rounded-[24px] bg-[var(--color-paper-white)] transition-all duration-500 group-hover:bg-[var(--color-vellum)]">
        {/* Quote mark */}
        <div className="absolute -top-4 left-6 md:left-8">
          <span className="text-6xl md:text-7xl font-light text-[var(--color-carbon-warm)]/5 leading-none">
            "
          </span>
        </div>

        {/* Rating */}
        <div className="mb-4 relative z-10">
          <StarRating rating={rating} size={18} />
        </div>

        {/* Quote */}
        <p className="text-sm md:text-base text-[var(--color-carbon-warm)] leading-relaxed mb-6 relative z-10">
          "{text}"
        </p>

        {/* Author */}
        <div className="flex items-center justify-between relative z-10">
          <div>
            <p className="text-sm font-medium text-[var(--color-carbon-warm)]">
              {name}
            </p>
            <p className="text-xs text-[var(--color-mercury)] mt-0.5">
              {date}
            </p>
          </div>

          {/* Google badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[var(--color-vellum)]">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-[10px] text-[var(--color-mercury)]">Verified</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="section bg-[var(--color-vellum)]"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-2 h-2 bg-[var(--color-carbon-warm)] rounded-full flex-shrink-0" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-carbon-warm)]">
              {REVIEWS.label}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-carbon-warm)] whitespace-pre-line mb-6"
          >
            {REVIEWS.headline}
          </motion.h2>

          {/* Aggregate rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3"
          >
            <StarRating rating={5} size={20} />
            <span className="text-lg font-light text-[var(--color-carbon-warm)]">
              {REVIEWS.aggregate.rating}
            </span>
            <span className="text-sm text-[var(--color-mercury)]">
              ({REVIEWS.aggregate.count} reviews)
            </span>
          </motion.div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.items.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              rating={review.rating}
              date={review.date}
              text={review.text}
              index={index}
            />
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-sm text-[var(--color-mercury)] mb-4">
            What our customers say
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {REVIEWS.highlights.map((highlight, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[var(--color-paper-white)] rounded-full text-xs md:text-sm text-[var(--color-carbon-warm)]/70"
              >
                "{highlight}"
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
