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
    default: "AdSpot Event - Premium Event Planning & Decoration Services in Kasaragod",
    template: "%s | AdSpot Event"
  },
  description: "AdSpot Event is Kasaragod's leading event planning and decoration company. We specialize in weddings, corporate events, birthday celebrations, floral arrangements, and luxury hampers. Transform your special moments into unforgettable experiences.",
  keywords: [
    "AdSpot Event",
    "AdSpot Events",
    "AdSpot Kasaragod",
    "Kasaragod Event",
    "Event Planning Kasaragod",
    "Wedding Decoration Kasaragod",
    "Corporate Events Kasaragod",
    "Birthday Party Kasaragod",
    "Floral Arrangements Kasaragod",
    "Event Management Kasaragod",
    "Wedding Planner Kasaragod",
    "Party Decoration Kasaragod",
    "Luxury Hampers Kasaragod",
    "Event Decorator Kasaragod"
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
    title: 'AdSpot Event - Premium Event Planning & Decoration Services in Kasaragod',
    description: 'AdSpot Event is Kasaragod\'s leading event planning and decoration company. We specialize in weddings, corporate events, birthday celebrations, floral arrangements, and luxury hampers.',
    siteName: 'AdSpot Event',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AdSpot Event - Event Planning & Decoration Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdSpot Event - Premium Event Planning & Decoration Services in Kasaragod',
    description: 'AdSpot Event is Kasaragod\'s leading event planning and decoration company. We specialize in weddings, corporate events, birthday celebrations, floral arrangements, and luxury hampers.',
    images: ['/images/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "AdSpot Event",
              "description": "Premium event planning and decoration services in Kasaragod, Kerala",
              "url": "https://adspotevent.com",
              "telephone": "+91-7736353636",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kasaragod",
                "addressLocality": "Kasaragod",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.5031",
                "longitude": "74.9899"
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "areaServed": {
                "@type": "City",
                "name": "Kasaragod"
              },
              "serviceType": [
                "Wedding Planning",
                "Corporate Events",
                "Birthday Celebrations",
                "Floral Arrangements",
                "Event Decoration",
                "Luxury Hampers"
              ],
              "image": [
                "https://adspotevent.com/images/hero-1.jpg",
                "https://adspotevent.com/images/hero-2.jpg",
                "https://adspotevent.com/images/hero-3.jpg"
              ],
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
