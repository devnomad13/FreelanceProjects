import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: {
    default: 'Jalalabad Mutton - Best Punjabi Mutton Restaurant in Jalalabad, Punjab',
    template: '%s | Jalalabad Mutton'
  },
  description: 'Experience authentic Punjabi mutton dishes at Jalalabad Mutton. Located in Jalalabad, Punjab. Order online for the best mutton in town with traditional recipes and fresh ingredients.',
  keywords: 'mutton restaurant, Punjabi food, Jalalabad restaurant, best mutton in Jalalabad, Punjab mutton, traditional Punjabi cuisine, online food ordering',
  authors: [{ name: 'Jalalabad Mutton' }],
  creator: 'Jalalabad Mutton',
  publisher: 'Jalalabad Mutton',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jalalabadmutton.com',
    title: 'Jalalabad Mutton - Best Punjabi Mutton Restaurant in Jalalabad',
    description: 'Experience authentic Punjabi mutton dishes at Jalalabad Mutton. Located in Jalalabad, Punjab.',
    siteName: 'Jalalabad Mutton',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jalalabad Mutton - Authentic Punjabi Mutton Restaurant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jalalabad Mutton - Best Punjabi Mutton Restaurant',
    description: 'Experience authentic Punjabi mutton dishes at Jalalabad Mutton.',
    images: ['/twitter-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Jalalabad Mutton',
  image: 'https://jalalabadmutton.com/restaurant-image.jpg',
  '@id': 'https://jalalabadmutton.com',
  url: 'https://jalalabadmutton.com',
  telephone: '+91-XXXXXXXXXX',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Main Market Street',
    addressLocality: 'Jalalabad',
    addressRegion: 'Punjab',
    postalCode: '152024',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.6167,
    longitude: 74.2833,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '11:00',
    closes: '22:00',
  },
  servesCuisine: 'Punjabi',
  priceRange: '₹₹',
  menu: 'https://jalalabadmutton.com/menu',
  acceptsReservations: true,
  hasDeliveryService: true,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '156',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://jalalabadmutton.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-inter bg-amber-50 text-gray-900 antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}