import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {HeroSection} from '@/components/sections/HeroSection';
import {ServicesSection} from '@/components/sections/ServicesSection';
import {FleetSection} from '@/components/sections/FleetSection';
import {RentalSection} from '@/components/sections/RentalSection';
import {ApartmentsSection} from '@/components/sections/ApartmentsSection';
import {VehiclesForSaleSection} from '@/components/sections/VehiclesForSaleSection';
import {AutoPartsSection} from '@/components/sections/AutoPartsSection';
import {WhyUsSection} from '@/components/sections/WhyUsSection';
import {TestimonialsSection} from '@/components/sections/TestimonialsSection';
import {BookingSection} from '@/components/sections/BookingSection';

import {LocationSection} from '@/components/sections/LocationSection';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <FleetSection />
      <RentalSection />
      <ApartmentsSection />
      <VehiclesForSaleSection />
      <AutoPartsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <BookingSection />
      <LocationSection />
    </main>
  );
}
