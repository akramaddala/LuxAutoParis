'use client';

import {useState, useEffect} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import {Link, usePathname, useRouter} from '@/i18n/routing';
import {Menu, X, Globe} from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLocale = () => {
    const nextLocale = locale === 'fr' ? 'en' : 'fr';
    router.replace({pathname}, {locale: nextLocale});
  };

  const navLinks = [
    {href: '#services', label: t('services')},
    {href: '#fleet', label: t('fleet')},
    {href: '#rentals', label: t('rentals')},
    {href: '#apartments', label: t('apartments')},
    {href: '#why-us', label: t('whyUs')},
    {href: '#testimonials', label: t('testimonials')},
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${
      scrolled ? 'bg-black/70 backdrop-blur-xl border-white/5 shadow-2xl py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-widest uppercase text-white hover:opacity-80 transition-opacity">
          LuxServices<span className="text-gold">Paris</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href as any} className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300 hover:text-gold transition-colors duration-300">
              {link.label}
            </Link>
          ))}
          
          {/* Language Toggle */}
          <button onClick={toggleLocale} className="flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors">
            <Globe size={16} />
            <span className="text-xs font-medium uppercase">{locale}</span>
          </button>

          <Link href="#contact" as={undefined} className="px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-sm text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            {t('bookNow')}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[500px] py-8' : 'max-h-0 py-0'}`}>
        <div className="px-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href as any} onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold uppercase tracking-widest text-neutral-300 hover:text-gold transition-colors">
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-white/10 w-full my-4" />
          <button onClick={() => {toggleLocale(); setMobileMenuOpen(false);}} className="flex items-center space-x-3 text-neutral-300 text-sm uppercase tracking-widest">
            <Globe size={18} />
            <span>Switch to {locale === 'fr' ? 'English' : 'Français'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
