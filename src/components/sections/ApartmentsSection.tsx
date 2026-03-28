'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {Check, Home, MapPin, Star} from 'lucide-react';
import {useState} from 'react';

export function ApartmentsSection() {
  const t = useTranslations('Apartments');
  const [visibleCount, setVisibleCount] = useState(3);

  const apartments = [
    {
      name: t('item1'),
      desc: t('item1Desc'),
      price: t('item1Price'),
      image: '/images/apartment-1.jpg',
      features: [t('featWifi'), t('featConcierge'), t('featView')]
    },
    {
      name: t('item2'),
      desc: t('item2Desc'),
      price: t('item2Price'),
      image: '/images/apartment-1.jpg',
      features: [t('featWifi'), t('featConcierge'), "Haussmannien"]
    },
    {
      name: t('item3'),
      desc: t('item3Desc'),
      price: t('item3Price'),
      image: '/images/apartment-1.jpg',
      features: [t('featWifi'), "Près des Boutiques", t('featView')]
    },
    {
      name: t('item4'),
      desc: t('item4Desc'),
      price: t('item4Price'),
      image: '/images/apartment-1.jpg',
      features: [t('featWifi'), "Quartier Littéraire", "Loft Moderne"]
    },
    {
      name: t('item5'),
      desc: t('item5Desc'),
      price: t('item5Price'),
      image: '/images/apartment-1.jpg',
      features: [t('featWifi'), t('featConcierge'), "Discrétion Totale"]
    },
    {
      name: t('item6'),
      desc: t('item6Desc'),
      price: t('item6Price'),
      image: '/images/apartment-1.jpg',
      features: [t('featWifi'), "Vue Montmartre", "Espace Design"]
    },
    {
      name: t('item7'),
      desc: t('item7Desc'),
      price: t('item7Price'),
      image: '/images/apartment-1.jpg',
      features: [t('featWifi'), "Vue Opéra", "Très Lumineux"]
    },
    {
      name: t('item8'),
      desc: t('item8Desc'),
      price: t('item8Price'),
      image: '/images/apartment-1.jpg',
      features: [t('featWifi'), t('featConcierge'), t('featView')]
    },
    {
      name: t('item9'),
      desc: t('item9Desc'),
      price: t('item9Price'),
      image: '/images/apartment-1.jpg',
      features: [t('featWifi'), "Face au Louvre", "Cadre Historique"]
    }
  ];

  return (
    <section id="apartments" className="py-32 bg-[#080808] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-100px"}}
            className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4"
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
          {apartments.slice(0, visibleCount).map((apt, idx) => (
            <motion.div 
              key={idx}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: "-100px"}}
              transition={{duration: 0.8, delay: idx * 0.1}}
              className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-gold/20 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-black">
                <Image 
                  src={apt.image} 
                  alt={apt.name} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                  <Star size={12} className="text-gold fill-gold" />
                  <span className="text-[10px] text-white font-medium uppercase tracking-widest">Premium</span>
                </div>
                <div className="absolute bottom-4 left-6">
                  <h4 className="text-2xl font-light text-white">{apt.name}</h4>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className="text-gold font-semibold text-xl">{apt.price}</span>
                  <span className="text-neutral-500 text-sm ml-2">/ {t('perNight')}</span>
                </div>
                
                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {apt.desc}
                </p>

                <ul className="grid grid-cols-1 gap-3 mb-8 border-t border-white/5 pt-6">
                  {apt.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-xs text-neutral-300 font-light">
                      <Check size={14} className="text-gold mr-3 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="w-full py-4 border border-gold/20 text-white hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 rounded-lg text-xs uppercase tracking-[0.2em] font-bold mt-auto">
                  {t('bookBtn')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < apartments.length && (
          <div className="flex justify-center mt-16">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-full text-xs uppercase tracking-[0.2em] font-bold"
            >
              {t('loadMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
