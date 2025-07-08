import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: {
    default: "ADSPOT EVENT | AdSpot | Premium Event Planning & Decoration Services in Kasaragod",
    template: "%s | ADSPOT EVENT | AdSpot"
  },
  description: "ADSPOT EVENT (AdSpot) is Kasaragod's #1 event planning and decoration company. We specialize in weddings, corporate events, birthday celebrations, floral arrangements, and luxury hampers. Transform your special moments into unforgettable experiences with AdSpot.",
  keywords: [
    "ADSPOT EVENT",
    "AdSpot",
    "AdSpot Event",
    "AdSpot Events",
    "AdSpot Kasaragod",
    "AdSpot Event Planning",
    "AdSpot Wedding",
    "AdSpot Decoration",
    "AdSpot Services",
    "AdSpot Kerala",
    "AdSpot Event Management",
    "AdSpot Corporate Events",
    "AdSpot Birthday Party",
    "AdSpot Floral",
    "AdSpot Hampers",
    "Kasaragod Event Planning",
    "Kasaragod Event Planner",
    "Wedding Decoration Kasaragod",
    "Corporate Events Kasaragod",
    "Birthday Party Kasaragod",
    "Floral Arrangements Kasaragod",
    "Event Management Kasaragod",
    "Wedding Planner Kasaragod",
    "Party Decoration Kasaragod",
    "Luxury Hampers Kasaragod",
    "Event Decorator Kasaragod",
    "Kerala Event Planning",
    "Best Event Planner Kasaragod"
  ],
  authors: [{ name: "ADSPOT EVENT" }],
  creator: "ADSPOT EVENT",
  publisher: "ADSPOT EVENT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://adspotevent.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://adspotevent.com',
    title: 'ADSPOT EVENT | AdSpot | Premium Event Planning & Decoration Services in Kasaragod',
    description: 'ADSPOT EVENT (AdSpot) is Kasaragod\'s #1 event planning and decoration company. We specialize in weddings, corporate events, birthday celebrations, floral arrangements, and luxury hampers.',
    siteName: 'ADSPOT EVENT',
    images: [
      {
        url: '/images/portfolio/wedding-1.jpg',
        width: 1200,
        height: 630,
        alt: 'ADSPOT EVENT - Wedding Planning & Decoration in Kasaragod',
      },
      {
        url: '/images/portfolio/corporate-1.jpg',
        width: 1200,
        height: 630,
        alt: 'ADSPOT EVENT - Corporate Event Planning in Kasaragod',
      },
      {
        url: '/images/portfolio/birthday-1.jpg',
        width: 1200,
        height: 630,
        alt: 'ADSPOT EVENT - Birthday Party Planning in Kasaragod',
      },
      {
        url: '/images/portfolio/floral-1.jpg',
        width: 1200,
        height: 630,
        alt: 'ADSPOT EVENT - Floral Arrangements in Kasaragod',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADSPOT EVENT | AdSpot | Premium Event Planning & Decoration Services in Kasaragod',
    description: 'ADSPOT EVENT (AdSpot) is Kasaragod\'s #1 event planning and decoration company. We specialize in weddings, corporate events, birthday celebrations, floral arrangements, and luxury hampers.',
    images: [
      '/images/portfolio/wedding-1.jpg',
      '/images/portfolio/corporate-1.jpg',
      '/images/portfolio/birthday-1.jpg',
      '/images/portfolio/floral-1.jpg'
    ],
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
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
    'yandex-verification': 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Multiple favicon sizes for better compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" /> 
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/adspotlogosquare.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/adspotlogosquare.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/logo/adspotlogosquare.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/adspotlogosquare.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/logo/adspotlogosquare.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/logo/adspotlogosquare.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/logo/adspotlogosquare.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/logo/adspotlogosquare.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/logo/adspotlogosquare.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/logo/adspotlogosquare.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/logo/adspotlogosquare.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/logo/adspotlogosquare.png" />
        
        {/* Microsoft tiles */}
        <meta name="msapplication-TileColor" content="#f59e0b" />
        <meta name="msapplication-TileImage" content="/logo/adspotlogosquare.png" />
        <meta name="msapplication-square70x70logo" content="/logo/adspotlogosquare.png" />
        <meta name="msapplication-square150x150logo" content="/logo/adspotlogosquare.png" />
        <meta name="msapplication-wide310x150logo" content="/logo/adspotlogosquare.png" />
        <meta name="msapplication-square310x310logo" content="/logo/adspotlogosquare.png" />
        
        {/* Theme color */}
        <meta name="theme-color" content="##FFCF5C" />
        
        <link rel="manifest" href="/manifest.json" />
        
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ADSPOT EVENT",
              "alternateName": ["ADSPOT EVENT", "AdSpot", "AdSpot Events", "AdSpot Kasaragod"],
              "description": "ADSPOT EVENT (AdSpot) is Kasaragod's premier event planning and decoration company specializing in weddings, corporate events, birthday celebrations, floral arrangements, and luxury hampers.",
              "url": "https://adspotevent.com",
              "telephone": "+91-7736353636",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Secondary Phone",
                  "value": "+91-8907488000"
                }
              ],
              "email": "adspotadvt@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kasaragod",
                "addressLocality": "Kasaragod",
                "addressRegion": "Kerala",
                "addressCountry": "IN",
                "postalCode": "671121"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.5031",
                "longitude": "74.9899"
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "UPI", "Digital Wallet"],
              "areaServed": [
                {
                "@type": "City",
                "name": "Kasaragod"
              },
                {
                  "@type": "State",
                  "name": "Kerala"
                }
              ],
              "serviceType": [
                "Wedding Planning",
                "Wedding Decoration",
                "Corporate Events",
                "Birthday Celebrations",
                "Floral Arrangements",
                "Event Decoration",
                "Luxury Hampers",
                "Event Management",
                "Party Planning"
              ],
              "logo": "https://adspotevent.com/logo/adspotlogosquare.png",
              "image": [
                "https://adspotevent.com/logo/adspotlogosquare.png",
                "https://adspotevent.com/images/portfolio/wedding-1.jpg",
                "https://adspotevent.com/images/portfolio/corporate-1.jpg",
                "https://adspotevent.com/images/portfolio/birthday-1.jpg",
                "https://adspotevent.com/images/portfolio/floral-1.jpg"
              ],
              "sameAs": [
                "https://www.instagram.com/adspot_event",
                "https://www.facebook.com/adspotevent"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5"
              },
              "foundingDate": "2020",
              "slogan": "Transform your special moments into unforgettable experiences"
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ADSPOT EVENT",
              "alternateName": ["ADSPOT EVENT", "AdSpot", "AdSpot Events"],
              "url": "https://adspotevent.com",
              "logo": "https://adspotevent.com/logo/adspotlogosquare.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7736353636",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Malayalam"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kasaragod",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.instagram.com/adspot_event",
                "https://www.facebook.com/adspotevent"
              ]
            })
          }}
        />
        
        {/* Image Gallery Schema for Portfolio */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageGallery",
              "name": "ADSPOT EVENT Portfolio - Event Planning & Decoration in Kasaragod",
              "description": "ADSPOT EVENT portfolio showcasing wedding planning, corporate events, birthday celebrations, and floral arrangements in Kasaragod, Kerala",
              "url": "https://adspotevent.com/portfolio",
              "associatedMedia": [
                {
                  "@type": "ImageObject",
                  "url": "https://adspotevent.com/images/portfolio/wedding-1.jpg",
                  "name": "ADSPOT EVENT - Wedding Planning & Decoration in Kasaragod",
                  "description": "Beautiful wedding decoration and planning services by ADSPOT EVENT in Kasaragod",
                  "width": "1200",
                  "height": "800"
                },
                {
                  "@type": "ImageObject",
                  "url": "https://adspotevent.com/images/portfolio/corporate-1.jpg",
                  "name": "ADSPOT EVENT - Corporate Event Planning in Kasaragod",
                  "description": "Professional corporate event planning and decoration by ADSPOT EVENT in Kasaragod",
                  "width": "1200",
                  "height": "800"
                },
                {
                  "@type": "ImageObject",
                  "url": "https://adspotevent.com/images/portfolio/birthday-1.jpg",
                  "name": "ADSPOT EVENT - Birthday Party Planning in Kasaragod",
                  "description": "Creative birthday party planning and decoration by ADSPOT EVENT in Kasaragod",
                  "width": "1200",
                  "height": "800"
                },
                {
                  "@type": "ImageObject",
                  "url": "https://adspotevent.com/images/portfolio/floral-1.jpg",
                  "name": "ADSPOT EVENT - Floral Arrangements in Kasaragod",
                  "description": "Exquisite floral arrangements and decorations by ADSPOT EVENT in Kasaragod",
                  "width": "1200",
                  "height": "800"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
