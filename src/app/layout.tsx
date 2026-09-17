import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/design-system.css';
import Header from '../components/Header';
import OrganizationSchema from '../components/OrganizationSchema';
import WebsiteSchema from '../components/WebsiteSchema';
import Footer from '../components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const BASE_URL = 'https://yoycolpod.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'yoycol | Wholesale Print-on-Demand Caps Supplier',
    template: '%s | yoycol',
  },
  description: 'Professional print-on-demand cap factory. 3D full-print hats, baseball caps, berets, fisherman hats, knit caps. MOQ 1 piece, worldwide shipping. Perfect for Amazon, Etsy, Temu, Shopify sellers.',
  authors: [{ name: 'yoycol', url: BASE_URL }],
  creator: 'yoycol',
  publisher: '莆田市荔城区新度蔡国林喜庆用品店',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'yoycol',
    title: 'yoycol | Wholesale Print-on-Demand Caps Supplier',
    description: 'Professional print-on-demand cap factory. 3D full-print hats, MOQ 1 piece, worldwide shipping. Perfect for Amazon, Etsy, Temu sellers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'yoycol - Print-on-Demand Caps Wholesale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'yoycol | Wholesale POD Caps',
    description: 'Professional print-on-demand cap supplier. 3D full-print hats, MOQ 1 piece, worldwide shipping.',
    site: '@yoycolpod',
    creator: '@yoycolpod',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="facebook-domain-verification" content="9djhv8xoqvo8smfl9v05t8oiamqwe7" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <OrganizationSchema />
        <WebsiteSchema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
