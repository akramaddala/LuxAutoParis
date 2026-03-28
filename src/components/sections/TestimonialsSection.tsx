'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Quote} from 'lucide-react';

export function TestimonialsSection() {
  const t = useTranslations('Testimonials');

  const reviews = [
    {
      name: t('review1Name'),
      role: t('review1Role'),
      content: t('review1Content')
    },
    {
      name: t('review2Name'),
      role: t('review2Role'),
      content: t('review2Content')
    },
    {
      name: t('review3Name'),
      role: t('review3Role'),
      content: t('review3Content')
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4"
          >
            {t('heading')}
          </motion.h2>
          <motion.h3 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.1}}
            className="text-4xl md:text-5xl font-light text-white"
          >
            {t('subheading')}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: "-100px"}}
              transition={{duration: 0.8, delay: idx * 0.2}}
              className="p-10 bg-white/[0.02] border border-white/5 rounded-2xl relative group"
            >
              <Quote className="text-gold/20 absolute top-8 right-8 w-16 h-16 group-hover:text-gold/40 transition-colors duration-500" />
              
              <div className="flex gap-1 mb-6 text-gold">
                {/* 5 stars */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              <p className="text-neutral-300 font-light leading-relaxed mb-8 italic relative z-10">
                "{review.content}"
              </p>

              <div>
                <h4 className="text-white font-semibold tracking-wide">{review.name}</h4>
                <p className="text-neutral-500 text-sm uppercase tracking-wider mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
