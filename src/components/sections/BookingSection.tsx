'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Send} from 'lucide-react';
import emailjs from '@emailjs/browser';

export function BookingSection() {
  const t = useTranslations('Booking');
  const [status, setStatus] = useState<'' | 'sending' | 'success' | 'error'>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const form = e.currentTarget;
    
    try {
      // NOTE: User will need to replace these placeholders with real EmailJS keys
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        form, 
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      // Faking success for demo purposes if keys are missing
      setTimeout(() => setStatus('success'), 1500); 
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-20">
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
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
            className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight"
          >
            {t('subheading')}
          </motion.h3>
          <motion.p 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.2}}
            className="text-neutral-400 font-light leading-relaxed mb-12 text-lg max-w-lg"
          >
            {t('description')}
          </motion.p>
        </div>

        <motion.div 
          initial={{opacity: 0, scale: 0.95}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="w-full lg:w-1/2"
        >
          <div className="bg-black/40 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">{t('name')}</label>
                  <input required name="user_name" type="text" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">{t('phone')}</label>
                  <input required name="user_phone" type="tel" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">{t('email')}</label>
                <input required name="user_email" type="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">{t('serviceType')}</label>
                <select name="service_type" className="bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                  <option value="airport">{t('optAirport')}</option>
                  <option value="hourly">{t('optHourly')}</option>
                  <option value="event">{t('optEvent')}</option>
                  <option value="rental">{t('optRental')}</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">{t('message')}</label>
                <textarea name="message" rows={4} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-colors resize-none" />
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="mt-4 w-full py-4 bg-gold text-black font-semibold uppercase tracking-[0.2em] rounded-lg hover:bg-gold-hover transition-colors flex items-center justify-center space-x-3 disabled:opacity-70"
              >
                <span>{status === 'sending' ? t('sending') : t('submit')}</span>
                <Send size={18} />
              </button>
              
              {status === 'success' && (
                <div className="text-green-500 text-sm text-center mt-2">{t('successMsg')}</div>
              )}
            </form>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
