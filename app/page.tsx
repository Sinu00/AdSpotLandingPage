"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Mail, MapPin, Phone, Heart, Building2, Cake, Flower2, Palette, Gift } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { QuoteCalculator } from "@/components/quote-calculator"
import { InstagramFeed } from "@/components/instagram-feed"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full" aria-label="AdSpot Event - Premium Event Planning Services in Kasaragod">
        <HeroCarousel />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="container px-4 text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Creating Magical</span>
              <span className="block text-gold-400">Moments</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-white">
              ADSPOT EVENT - Kasaragod's Premier Event Planning & Decoration Services
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600">
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button asChild size="lg" className="w-full sm:w-auto border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-white py-16" aria-label="AdSpot Event Services in Kasaragod">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We offer a wide range of event planning and decoration services to make your special day unforgettable.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Wedding Planning & Decoration in Kasaragod"
              description="AdSpot Event specializes in wedding planning and decoration services in Kasaragod. Transform your wedding day with our exquisite decorations and flawless planning services."
              icon={Heart}
              image="/images/wedding.jpg"
              href="/services#wedding"
            />
            <ServiceCard
              title="Corporate Events in Kasaragod"
              description="AdSpot Event provides professional corporate event planning and decoration services in Kasaragod. Elevate your corporate events with sophisticated decor."
              icon={Building2}
              image="/images/corporate.jpg"
              href="/services#corporate"
            />
            <ServiceCard
              title="Birthday Celebrations in Kasaragod"
              description="AdSpot Event creates magical birthday celebrations in Kasaragod with creative themes and stunning decorations for all ages."
              icon={Cake}
              image="/images/birthday.jpg"
              href="/services#birthday"
            />
            <ServiceCard
              title="Floral Arrangements in Kasaragod"
              description="AdSpot Event offers beautiful custom floral designs in Kasaragod to enhance any event or special occasion with exquisite arrangements."
              icon={Flower2}
              image="/images/floral.jpg"
              href="/services#floral"
            />
            <ServiceCard
              title="Custom Craft Items in Kasaragod"
              description="AdSpot Event provides unique handcrafted items and personalized decor elements for your events in Kasaragod, Kerala."
              icon={Palette}
              image="/images/craft.jpg"
              href="/services#craft"
            />
            <ServiceCard
              title="Luxury Hampers in Kasaragod"
              description="AdSpot Event curates exquisite gift hampers in Kasaragod for corporate events, weddings, and special occasions."
              icon={Gift}
              image="/images/hamper.jpg"
              href="/services#hampers"
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/services">
                View All AdSpot Event Services
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="w-full bg-gray-50 py-16" aria-label="AdSpot Event Portfolio - Kasaragod Event Planning">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Portfolio
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Explore our recent work and get inspired for your next event.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { category: "Wedding", image: "/images/portfolio-wedding.jpg" },
              { category: "Corporate", image: "/images/portfolio-corporate.jpg" },
              { category: "Birthday", image: "/images/portfolio-birthday.jpg" },
              { category: "Floral", image: "/images/portfolio-floral.jpg" },
              { category: "Outdoor", image: "/images/portfolio-outdoor.jpg" },
              { category: "Themed", image: "/images/portfolio-themed.jpg" },
            ].map((item, index) => (
              <Link
                key={index}
                href={`/portfolio#${item.category.toLowerCase()}`}
                className="group overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl"
                aria-label={`View ${item.category} events by AdSpot Event in Kasaragod`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.category} decoration by AdSpot Event in Kasaragod`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 w-full p-4">
                      <h3 className="text-xl font-bold text-white">{item.category}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="gap-2 bg-gold-500 hover:bg-gold-600">
              <Link href="/portfolio">
                View Full AdSpot Event Portfolio
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-white py-16" aria-label="AdSpot Event Client Testimonials - Kasaragod">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Client Testimonials
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Hear what our clients have to say about their experience with AdSpot Event.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Quote Calculator */}
      <section className="w-full bg-gray-50 py-16" aria-label="AdSpot Event Quote Calculator - Kasaragod">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get a Quick Quote from AdSpot Event - Kasaragod
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Use our calculator to get an estimate for your event planning and decoration services in Kasaragod.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <QuoteCalculator />
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="w-full bg-white py-16" aria-label="Contact AdSpot Event - Kasaragod Event Planning">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/contact.jpg"
                alt="Contact AdSpot Event - Kasaragod Event Planning Services"
                width={800}
                height={500}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Let's Create Something Special with AdSpot Event
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Ready to start planning your perfect event in Kasaragod? Contact AdSpot Event today and let's bring your vision to life with our expert event planning and decoration services.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-600">+91 7736353636</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-600">contact@adspotevent.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-600">AdSpot Event, Kasaragod, Kerala, India</span>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="gap-2 bg-gold-500 hover:bg-gold-600">
                  <Link href="/contact">
                    Contact AdSpot Event
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="w-full bg-gray-50 py-16" aria-label="AdSpot Event Instagram - Kasaragod Event Planning">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Follow AdSpot Event on Instagram
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Stay updated with AdSpot Event's latest events and decorations in Kasaragod, Kerala.
            </p>
          </div>
          <InstagramFeed />
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="https://www.instagram.com/adspot_event?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                View AdSpot Event Instagram
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
