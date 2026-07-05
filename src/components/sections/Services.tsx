import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';
import { SERVICES } from '../../data/content';

const serviceImages = [
  'https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  'https://images.pexels.com/photos/4461256/pexels-photo-4461256.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  'https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
];

function ServiceCard({
  image,
  alt,
  title,
  body,
  index,
}: {
  image: string;
  alt: string;
  title: string;
  body: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.15,
      }}
      viewport={{ once: true, margin: '-50px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-[30px] md:rounded-[40px] aspect-[4/3] mb-6">
        <motion.img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />

        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent flex items-end p-6 md:p-8"
        >
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-12 h-12 rounded-full bg-[var(--color-paper-white)] flex items-center justify-center"
          >
            <ArrowUpRight
              size={20}
              weight="bold"
              className="text-[var(--color-carbon-warm)]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-1">
        <h3 className="text-xl md:text-2xl font-light tracking-[-0.01em] text-[var(--color-carbon-warm)] mb-3">
          {title}
        </h3>
        <p className="text-sm md:text-base text-[var(--color-carbon-warm)]/70 leading-relaxed">
          {body}
        </p>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="section bg-[var(--color-paper-white)]"
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-2 bg-[var(--color-carbon-warm)] rounded-full flex-shrink-0" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-carbon-warm)]">
              {SERVICES.label}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-carbon-warm)] whitespace-pre-line"
          >
            {SERVICES.headline}
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {SERVICES.items.map((item, index) => (
            <ServiceCard
              key={index}
              image={serviceImages[index]}
              alt={item.alt}
              title={item.title}
              body={item.body}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
