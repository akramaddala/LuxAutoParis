'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {Check} from 'lucide-react';
import {useState} from 'react';

export function VehiclesForSaleSection() {
  const t = useTranslations('VehiclesForSale');
  const [visibleCount, setVisibleCount] = useState(3);

  const baseVehicle = {
    name: t('sportsCar'),
    desc: t('sportsCarDesc'),
    price: t('sportsCarPrice'),
    image: '/images/porsche-911.png',
    features: [t('featMileage'), t('featHistory'), t('featWarranty')]
  };

  const vehicles = [
    baseVehicle,
    {...baseVehicle, name: "Ferrari 488 Pista", image: "/images/porsche-911.png"},
    {...baseVehicle, name: "Lamborghini Aventador SVJ", image: "/images/s-class.png"},
    {...baseVehicle, name: "McLaren Senna", image: "/images/porsche-911.png"},
    {...baseVehicle, name: "Porsche 911 Turbo S", image: "/images/v-class.png"},
    {...baseVehicle, name: "Aston Martin DBS Superleggera", image: "/images/s-class.png"}
  ];

  return (
    <section id="vehicles-for-sale" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
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
          {vehicles.slice(0, visibleCount).map((vehicle, idx) => (
            <motion.div 
              key={idx}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: "-100px"}}
              transition={{duration: 0.8, delay: idx * 0.1}}
              className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-gold/20 transition-all duration-500 group flex flex-col h-full shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
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

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className="text-gold font-semibold text-xl">{vehicle.price}</span>
                </div>
                
                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {vehicle.desc}
                </p>

                <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
                  {vehicle.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-sm text-neutral-300 font-light">
                      <Check size={16} className="text-gold mr-3" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="w-full py-3 border border-gold/20 text-white hover:bg-gold hover:text-black transition-colors duration-300 rounded-lg text-sm uppercase tracking-widest font-semibold mt-auto">
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
