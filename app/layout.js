
// import './globals.css';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   metadataBase: new URL('https://lnbgintinvestments.com'),
//   title: 'LNBG INT INVESTMENTS - Licensed Company Based in BVI',
//   description:
//     'LNBG International Investments is a IBC (International Business Company). LNBG is a company offering an alternative to Traditional funding...',
  
//   // Custom Favicons & App Icons
//   icons: {
//     icon: [
//       { url: '/assets/favicon.ico', sizes: 'any' },
//       { url: '/assets/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
//       { url: '/assets/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
//     ],
//     shortcut: '/assets/favicon.ico',
//     apple: [
//       { url: '/assets/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
//     ],
//     other: [
//       {
//         rel: 'android-chrome-192x192',
//         url: '/assets/android-chrome-192x192.png',
//       },
//       {
//         rel: 'android-chrome-512x512',
//         url: '/assets/android-chrome-512x512.png',
//       },
//     ],
//   },

//   // Web Manifest File
//   manifest: '/assets/site.webmanifest',

//   // Canonical URL
//   alternates: {
//     canonical: 'https://lnbgintinvestments.com/',
//   },

//   // Open Graph Preview (WhatsApp, Facebook, LinkedIn, iMessage)
//   openGraph: {
//     locale: 'en_US',
//     type: 'website',
//     title: 'LNBG INT INVESTMENTS - Licensed Company Based in BVI',
//     description:
//       'LNBG International Investments is a IBC (International Business Company). LNBG is a company offering an alternative to Traditional funding...',
//     url: 'https://lnbgintinvestments.com/',
//     siteName: 'LNBG INT INVESTMENTS',
//     modifiedTime: '2022-04-06T17:41:13+00:00',
//     images: [
//       {
//         url: '/assets/og-banner.jpg', // Path to your banner image in public/assets/
//         width: 1200,
//         height: 630,
//         alt: 'LNBG INT INVESTMENTS Banner Preview',
//       },
//     ],
//   },

//   // Twitter/X Card Preview
//   twitter: {
//     card: 'summary_large_image',
//     title: 'LNBG INT INVESTMENTS - Licensed Company Based in BVI',
//     description:
//       'LNBG International Investments is a IBC (International Business Company). LNBG is a company offering an alternative to Traditional funding...',
//     images: ['/assets/og-banner.jpg'],
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Active Dev Tunnel URL
const DEV_TUNNEL_URL = 'https://lnbgintinvestment.com';


export const metadata = {
  metadataBase: new URL(DEV_TUNNEL_URL),
  title: 'LNBG INT INVESTMENTS - Licensed Company Based in BVI',
  description:
    'LNBG International Investments is a IBC (International Business Company). LNBG is a company offering an alternative to Traditional funding...',
  
  // Custom Favicons & App Icons
  icons: {
    icon: [
      { url: '/assets/favicon.ico', sizes: 'any' },
      { url: '/assets/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/assets/favicon.ico',
    apple: [
      { url: '/assets/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/assets/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/assets/android-chrome-512x512.png',
      },
    ],
  },

  // Web Manifest File
  manifest: '/assets/site.webmanifest',

  // Canonical URL
  alternates: {
    canonical: `${DEV_TUNNEL_URL}/`,
  },

  // Open Graph Preview
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'LNBG INT INVESTMENTS - Licensed Company Based in BVI',
    description:
      'LNBG International Investments is a IBC (International Business Company). LNBG is a company offering an alternative to Traditional funding...',
    url: `${DEV_TUNNEL_URL}/`,
    siteName: 'LNBG INT INVESTMENTS',
    modifiedTime: '2022-04-06T17:41:13+00:00',
    images: [
      {
        url: `${DEV_TUNNEL_URL}/assets/og-banner.jpg`,
        secureUrl: `${DEV_TUNNEL_URL}/assets/og-banner.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'LNBG INT INVESTMENTS Banner Preview',
      },
    ],
  },

  // Twitter/X Card Preview
  twitter: {
    card: 'summary_large_image',
    title: 'LNBG INT INVESTMENTS - Licensed Company Based in BVI',
    description:
      'LNBG International Investments is a IBC (International Business Company). LNBG is a company offering an alternative to Traditional funding...',
    images: [`${DEV_TUNNEL_URL}/assets/og-banner.jpg`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}