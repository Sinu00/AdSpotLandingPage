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
    default: "AdSpot Event | AdSpot | Premium Event Planning & Decoration Services in Kasaragod",
    template: "%s | AdSpot Event | AdSpot"
  },
  description: "AdSpot Event (AdSpot) is Kasaragod's #1 event planning and decoration company. We specialize in weddings, corporate events, birthday celebrations, floral arrangements, and luxury hampers. Transform your special moments into unforgettable experiences with AdSpot.",
  keywords: [
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
  authors: [{ name: "AdSpot Event" }],
  creator: "AdSpot Event",
  publisher: "AdSpot Event",
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
    title: 'AdSpot Event | AdSpot | Premium Event Planning & Decoration Services in Kasaragod',
    description: 'AdSpot Event (AdSpot) is Kasaragod\'s #1 event planning and decoration company. We specialize in weddings, corporate events, birthday celebrations, floral arrangements, and luxury hampers.',
    siteName: 'AdSpot Event',
    images: [
      {
        url: '/logo/adspotlogo.jpg',
        width: 1200,
        height: 630,
        alt: 'AdSpot Event - AdSpot Logo - Event Planning & Decoration Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdSpot Event | AdSpot | Premium Event Planning & Decoration Services in Kasaragod',
    description: 'AdSpot Event (AdSpot) is Kasaragod\'s #1 event planning and decoration company. We specialize in weddings, corporate events, birthday celebrations, floral arrangements, and luxury hampers.',
    images: ['/logo/adspotlogo.jpg'],
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
        <link rel="icon" href="/logo/adspotlogosquare.png" />
        <link rel="apple-touch-icon" href="/logo/adspotlogosquare.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "AdSpot Event",
              "alternateName": ["AdSpot", "AdSpot Events", "AdSpot Kasaragod"],
              "description": "AdSpot Event (AdSpot) is Kasaragod's premier event planning and decoration company specializing in weddings, corporate events, birthday celebrations, floral arrangements, and luxury hampers.",
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
              "logo": "https://adspotevent.com/logo/adspotlogo.jpg",
              "image": [
                "https://adspotevent.com/logo/adspotlogo.jpg",
                "https://adspotevent.com/images/hero-1.jpg",
                "https://adspotevent.com/images/hero-2.jpg",
                "https://adspotevent.com/images/hero-3.jpg"
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
              "name": "AdSpot Event",
              "alternateName": ["AdSpot", "AdSpot Events"],
              "url": "https://adspotevent.com",
              "logo": "https://adspotevent.com/logo/adspotlogo.jpg",
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
