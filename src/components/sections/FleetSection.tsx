'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {Check, Info} from 'lucide-react';
import {useState} from 'react';

export function FleetSection() {
  const t = useTranslations('Fleet');
  const [visibleCount, setVisibleCount] = useState(3);

  const vehicles = [
    {
      name: t('sClass'),
      desc: t('sClassDesc'),
      price: t('sClassPrice'),
      image: '/images/s-class.png',
      features: [t('featWifi'), t('featWater'), t('featPress')]
    },
    {
      name: t('vClass'),
      desc: t('vClassDesc'),
      price: t('vClassPrice'),
      image: '/images/v-class.png',
      features: [t('featSpace'), t('featWater'), t('featWifi')]
    },
    {
      name: "Mercedes E-Class",
      desc: "L'équilibre parfait entre confort et élégance pour vos trajets quotidiens à Paris.",
      price: "À partir de 90€",
      image: '/images/s-class.png',
      features: [t('featWifi'), t('featWater'), "Confort optimal"]
    },
    {
      name: "Range Rover Autobiography",
      desc: "Dominance et raffinement absolu. Le SUV par excellence pour les escapades en sécurité.",
      price: "À partir de 200€",
      image: '/images/v-class.png', // using existing images as placeholders
      features: ["Vue Panoramique", t('featWater'), "Sécurité maximale"]
    },
    {
      name: "Bentley Flying Spur",
      desc: "L'artisanat britannique dans toute sa splendeur pour une arrivée inoubliable.",
      price: "À partir de 350€",
      image: '/images/s-class.png', // using existing images as placeholders
      features: ["Champagne", "Intimité totale", "Chauffeur VIP"]
    }
  ];

  return (
    <section id="fleet" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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
          {vehicles.slice(0, visibleCount).map((vehicle, idx) => (
            <motion.div 
              key={idx}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: "-100px"}}
              transition={{duration: 0.8, delay: idx * 0.1}}
              className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 group flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80" />
                <div className="absolute bottom-4 left-6">
                  <h4 className="text-2xl font-light text-white">{vehicle.name}</h4>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className="text-gold font-semibold text-xl">{vehicle.price}</span>
                  <span className="text-neutral-500 text-sm ml-2">/ transfert</span>
                </div>
                
                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {vehicle.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
                  {vehicle.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-sm text-neutral-300 font-light">
                      <Check size={16} className="text-gold mr-3" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="w-full py-3 border border-white/10 text-white hover:bg-gold hover:text-black hover:border-gold transition-colors duration-300 rounded-lg text-sm uppercase tracking-widest font-semibold mt-auto">
                  {t('bookBtn')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < vehicles.length && (
          <div className="flex justify-center mt-16">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-colors duration-300 rounded-full text-sm uppercase tracking-widest font-semibold"
            >
              {t('loadMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
