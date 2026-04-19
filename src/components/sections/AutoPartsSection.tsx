'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {Check} from 'lucide-react';
import {useState} from 'react';

export function AutoPartsSection() {
  const t = useTranslations('AutoParts');
  const [visibleCount, setVisibleCount] = useState(3);

  const basePart = {
    name: t('partName'),
    desc: t('partDesc'),
    price: t('partPrice'),
    image: '/images/porsche-911.png', // Temporary placeholder for parts
    features: [t('featOriginal'), t('featStock'), t('featDelivery')]
  };

  const parts = [
    basePart,
    {...basePart, name: "Exhaust System Titanium", image: "/images/porsche-911.png"},
    {...basePart, name: "Carbon Ceramic Brake Kit", image: "/images/s-class.png"},
    {...basePart, name: "Aerokit Carbon Fiber", image: "/images/porsche-911.png"},
    {...basePart, name: "Suspension Kit Adjustable", image: "/images/v-class.png"},
    {...basePart, name: "Premium Leather Seats", image: "/images/s-class.png"}
  ];

  return (
    <section id="auto-parts" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-100px"}}
            className="text-white/50 text-xs font-bold tracking-[0.3em] uppercase mb-4"
          >
            {t('heading')}
          </motion.h2>
          <motion.h3 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-100px"}}
            transition={{delay: 0.1}}
            className="text-4xl md:text-5xl font-light text-white"
          >
            {t('subheading')}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parts.slice(0, visibleCount).map((part, idx) => (
            <motion.div 
              key={idx}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: "-100px"}}
              transition={{duration: 0.8, delay: idx * 0.1}}
              className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 group flex flex-col h-full shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image 
                  src={part.image} 
                  alt={part.name} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80" />
                <div className="absolute bottom-4 left-6">
                  <h4 className="text-2xl font-light text-white">{part.name}</h4>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className="text-white font-semibold text-xl">{part.price}</span>
                </div>
                
                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {part.desc}
                </p>

                <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
                  {part.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-sm text-neutral-300 font-light">
                      <Check size={16} className="text-white/70 mr-3" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="w-full py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-lg text-sm uppercase tracking-widest font-semibold mt-auto">
                  {t('buyBtn')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < parts.length && (
          <div className="flex justify-center mt-16">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-full text-sm uppercase tracking-widest font-semibold"
            >
              {t('loadMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
