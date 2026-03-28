import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export function Footer() {
  const t = useTranslations('Navigation');
  
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-widest uppercase text-white mb-6 inline-block">
            LuxAuto<span className="text-gold">Paris</span>
          </Link>
          <p className="text-sm max-w-sm leading-relaxed mb-6 font-light">
            L'excellence du transport privé à Paris. Un service sur-mesure pour vos déplacements professionnels et personnels, avec une flotte de véhicules d'exception.
          </p>
        </div>
        
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-6">Liens Rapides</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><Link href="#services" as={undefined} className="hover:text-gold transition-colors">{t('services')}</Link></li>
            <li><Link href="#fleet" as={undefined} className="hover:text-gold transition-colors">{t('fleet')}</Link></li>
            <li><Link href="#rentals" as={undefined} className="hover:text-gold transition-colors">{t('rentals')}</Link></li>
            <li><Link href="#testimonials" as={undefined} className="hover:text-gold transition-colors">{t('testimonials')}</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-6">Contact</h4>
          <ul className="space-y-4 text-sm font-light">
            <li>Paris, France</li>
            <li>+33 (0)1 23 45 67 89</li>
            <li>contact@luxautoparis.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-light">
        <p>&copy; {new Date().getFullYear()} LuxAutoParis. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer transition-colors">Mentions Légales</span>
          <span className="hover:text-white cursor-pointer transition-colors">Politique de Confidentialité</span>
        </div>
      </div>
    </footer>
  );
}
