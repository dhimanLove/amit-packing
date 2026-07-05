  import { useState, useEffect } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { List, X } from '@phosphor-icons/react';
  import { NAV } from '../../data/content';

  export function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.5, rootMargin: '-10% 0px -40% 0px' }
      );

      NAV.links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) observer.observe(section);
      });

      return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    };

    return (
      <>
        {/* Desktop Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className={`
            fixed top-0 left-0 w-full z-50 flex justify-center
            hidden md:flex transition-all duration-700 ease-in-out
            ${isScrolled ? 'pt-4' : 'pt-8'}
          `}
        >
          <div
            className={`
              flex items-center justify-between px-4 py-2 
              transition-all duration-700 ease-in-out
              ${isScrolled 
                ? 'w-full max-w-3xl bg-black/90 backdrop-blur-xl rounded-full' 
                : 'w-full max-w-7xl bg-transparent'
              }
            `}
          >
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 px-4 py-2 group cursor-pointer"
            >
              <span className="w-2 h-2 bg-white transition-transform duration-500 group-hover:rotate-45" />
              <span className="text-sm font-semibold tracking-widest uppercase text-white">
                AP
              </span>
            </button>

            {/* Nav Links */}
            <div className="flex items-center gap-1">
              {NAV.links.map((link) => {
                const isActive = activeSection === link.toLowerCase();
                return (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link)}
                    className={`
                      px-6 py-2.5 text-xs font-medium tracking-[0.15em] uppercase
                      cursor-pointer transition-all duration-500 rounded-full
                      ${isActive 
                        ? 'bg-white text-black' 
                        : 'bg-transparent text-white/60 hover:bg-white/10 hover:text-white'
                      }
                    `}
                  >
                    {link}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.nav>

        {/* Mobile Header */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className={`
            fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 py-4 md:hidden
            transition-all duration-700 ease-in-out
            ${isScrolled ? 'bg-black/90 backdrop-blur-xl' : 'bg-transparent'}
          `}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white text-sm font-semibold tracking-widest uppercase flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-white" />
            AP
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="w-10 h-10 flex items-center justify-center text-white rounded-full bg-white/10 transition-all duration-300 hover:bg-white/20 active:scale-90"
          >
            <List size={20} weight="bold" />
          </button>
        </motion.div>

        {/* Mobile Fullscreen Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-50 bg-black/95 flex flex-col px-6 py-8 md:hidden"
            >
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center mb-12">
                <span className="text-white text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white" />
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-black active:scale-90"
                >
                  <X size={20} weight="bold" />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <div className="flex-1 flex flex-col justify-center gap-6">
                {NAV.links.map((link, index) => {
                  const isActive = activeSection === link.toLowerCase();
                  return (
                    <motion.div
                      key={link}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1, 
                        type: 'spring', 
                        damping: 25 
                      }}
                    >
                      <button
                        onClick={() => scrollToSection(link)}
                        className={`
                          text-left text-4xl sm:text-5xl font-light tracking-widest uppercase w-full flex items-center justify-between
                          pb-4 border-b transition-all duration-500
                          ${isActive 
                            ? 'text-white border-white' 
                            : 'text-white/30 border-white/10 hover:text-white hover:border-white/50'
                          }
                        `}
                      >
                        {link}
                        {isActive && <span className="w-2 h-2 bg-white" />}
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }