'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {ShieldCheck, Clock, UserCheck, Star} from 'lucide-react';

export function WhyUsSection() {
  const t = useTranslations('WhyUs');

  const features = [
    {icon: Clock, title: t('punctuality'), desc: t('punctualityDesc')},
    {icon: UserCheck, title: t('discretion'), desc: t('discretionDesc')},
    {icon: Star, title: t('luxury'), desc: t('luxuryDesc')},
    {icon: ShieldCheck, title: t('security'), desc: t('securityDesc')}
  ];

  return (
    <section id="why-us" className="py-32 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: "-100px"}}
            transition={{duration: 0.8}}
          >
            <h2 className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">{t('heading')}</h2>
            <h3 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
              {t('subheading')}
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed mb-10 text-lg">
              {t('description')}
            </p>
            
            <div className="flex gap-4">
              <div className="flex flex-col items-center p-6 bg-white/[0.02] border border-white/5 rounded-xl min-w-[120px]">
                <span className="text-3xl text-gold font-light mb-2">10+</span>
                <span className="text-xs text-neutral-500 uppercase tracking-widest text-center">{t('yearsExp')}</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/[0.02] border border-white/5 rounded-xl min-w-[120px]">
                <span className="text-3xl text-gold font-light mb-2">5K+</span>
                <span className="text-xs text-neutral-500 uppercase tracking-widest text-center">{t('clients')}</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true, margin: "-100px"}}
                transition={{duration: 0.6, delay: idx * 0.15}}
                className="p-8 bg-black border border-white/5 rounded-2xl hover:border-gold/30 transition-colors"
              >
                <feature.icon className="text-gold mb-6" size={32} strokeWidth={1.5} />
                <h4 className="text-xl text-white font-light mb-4">{feature.title}</h4>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
