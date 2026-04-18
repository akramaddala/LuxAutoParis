'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {MapPin, Phone, Mail} from 'lucide-react';

export function LocationSection() {
  const t = useTranslations('Location');

  return (
    <section id="location" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Text & Details */}
          <div className="lg:col-span-1 flex flex-col justify-center">
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
              className="text-3xl md:text-4xl font-light text-white mb-10"
            >
              {t('subheading')}
            </motion.h3>

            <motion.div 
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
              className="flex flex-col gap-8"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                  <MapPin size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 uppercase tracking-widest text-sm">Adresse</h4>
                  <p className="text-neutral-400 font-light text-sm">{t('address')}</p>
                  <p className="text-neutral-400 font-light text-sm">{t('city')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                  <Phone size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 uppercase tracking-widest text-sm">{t('phoneLabel')}</h4>
                  <p className="text-neutral-400 font-light text-sm">+33 6 18 23 52 21</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                  <Mail size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 uppercase tracking-widest text-sm">{t('emailLabel')}</h4>
                  <p className="text-neutral-400 font-light text-sm">contact@servicesluxllc.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div 
            initial={{opacity: 0, scale: 0.95}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 0.3}}
            className="lg:col-span-2 w-full h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-neutral-900"
          >
            {/* CSS Filter to make Google Maps look dark and premium */}
            <iframe
              src="https://maps.google.com/maps?q=30%20N%20GOULD%20ST%20STE%20N%20SHERIDAN,%20WY%2082801&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'invert(100%) hue-rotate(180deg) brightness(85%) contrast(90%) grayscale(60%)',
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Overlay to disable scroll zooming unintentionally and add subtle vintage golden glow to the map */}
            <div className="absolute inset-0 pointer-events-none bg-gold/5 mix-blend-overlay" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
