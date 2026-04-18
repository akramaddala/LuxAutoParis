import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import {Navbar} from '@/components/layout/Navbar';
import {Footer} from '@/components/layout/Footer';
import {WhatsAppButton} from '@/components/ui/WhatsAppButton';

const inter = Inter({
  variable: "--font-geist-sans", // Keeping variable name for tailwind compatibility
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SERVICESLUXLLC | Premium Chauffeur Service & Apartments",
  description: "Location voiture Paris, VTC Paris, chauffeur privé Paris. The ultimate luxury transport experience.",
  openGraph: {
    title: "SERVICESLUXLLC | Luxury Transport & Living",
    description: "The ultimate luxury transport experience. Private chauffeurs and sport car rentals.",
    type: "website",
    locale: "fr_FR",
    siteName: "SERVICESLUXLLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "SERVICESLUXLLC | Premium Service",
    description: "The ultimate luxury transport experience.",
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
