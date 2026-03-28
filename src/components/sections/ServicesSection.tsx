'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Briefcase, PlaneLanding, MapPin, CalendarClock, Home} from 'lucide-react';

export function ServicesSection() {
  const t = useTranslations('Services');
  
  // Need to add this to translations:
  /*
  "Services": {
    "heading": "Nos Services",
    "subheading": "L'excellence à chaque trajet",
    "airport": "Transfert Aéroport",
    "airportDesc": "Un accueil personnalisé dès votre arrivée. Ponctualité et confort garantis entre les aéroports de Paris (CDG, Orly, Le Bourget) et votre destination.",
    "hourly": "Mise à Disposition",
    "hourlyDesc": "Votre chauffeur privé à votre disposition pour la durée de votre choix. Idéal pour vos rendez-vous d'affaires ou virées shopping.",
    "events": "Événements Privés",
    "eventsDesc": "Un service prestigieux pour vos mariages, soirées de gala, ou événements VIP. Une arrivée remarquée et élégante.",
    "tours": "Circuits Touristiques",
    "toursDesc": "Découvrez Paris et ses alentours dans un confort absolu. Laissez-nous vous guider vers les plus beaux monuments."
  }
  */

  const services = [
    {
      icon: PlaneLanding,
      title: t('airport'),
      desc: t('airportDesc')
    },
    {
      icon: Briefcase,
      title: t('hourly'),
      desc: t('hourlyDesc')
    },
    {
      icon: CalendarClock,
      title: t('events'),
      desc: t('eventsDesc')
    },
    {
      icon: MapPin,
      title: t('tours'),
      desc: t('toursDesc')
    },
    {
      icon: Home,
      title: t('apartments'),
      desc: t('apartmentsDesc')
    }
  ];

  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: {opacity: 0, y: 30},
    show: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut" as const}}
  };

  return (
    <section id="services" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Abstract Background Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-100px"}}
            transition={{duration: 0.8}}
            className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4"
          >
            {t('heading')}
          </motion.h2>
          <motion.h3 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-100px"}}
            transition={{duration: 0.8, delay: 0.1}}
            className="text-4xl md:text-5xl font-light text-white"
          >
            {t('subheading')}
          </motion.h3>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, margin: "-100px"}}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              className="group p-10 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_10px_40px_rgba(212,175,55,0.05)]"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-8 border border-gold/20 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="text-gold" size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-light text-white mb-4">{service.title}</h4>
              <p className="text-neutral-400 font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
