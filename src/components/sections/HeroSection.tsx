'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with slight Parallax / Scale */}
      <motion.div 
        initial={{scale: 1.1}}
        animate={{scale: 1}}
        transition={{duration: 2, ease: "easeOut"}}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/images/hero-bg.png" 
          alt="LuxAutoParis Hero" 
          fill 
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-20">
        <motion.h1 
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter text-white drop-shadow-2xl whitespace-pre-line leading-tight"
        >
          {t('title')}
        </motion.h1>
        
        <motion.p 
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 0.6, ease: "easeOut"}}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-neutral-300 font-light drop-shadow-md leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>
        
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 1, ease: "easeOut"}}
        >
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="group relative px-10 py-5 bg-gold text-black font-semibold uppercase tracking-[0.2em] rounded-sm overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]">
            <span className="relative z-10">{t('cta')}</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-sm transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-white/20" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 2}}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <motion.div 
          animate={{y: [0, 10, 0]}}
          transition={{duration: 1.5, repeat: Infinity, ease: "easeInOut"}}
          className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
