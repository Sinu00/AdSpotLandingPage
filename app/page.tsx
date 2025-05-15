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
      <section className="relative w-full">
        <HeroCarousel />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="container px-4 text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Creating Magical</span>
              <span className="block text-gold-400">Moments</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-white">
              Premium event planning and decoration services in Kasaragod
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600">
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button asChild size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-white py-16">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We offer a wide range of event planning and decoration services to make your special day unforgettable.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Wedding Planning & Decoration"
              description="Transform your wedding day with our exquisite decorations and flawless planning services."
              icon={Heart}
              image="/images/wedding.jpg"
              href="/services#wedding"
            />
            <ServiceCard
              title="Corporate Events"
              description="Elevate your corporate events with professional planning and sophisticated decor."
              icon={Building2}
              image="/images/corporate.jpg"
              href="/services#corporate"
            />
            <ServiceCard
              title="Birthday Celebrations"
              description="Create memorable birthday celebrations with our creative themes and decorations."
              icon={Cake}
              image="/images/birthday.jpg"
              href="/services#birthday"
            />
            <ServiceCard
              title="Floral Arrangements"
              description="Beautiful custom floral designs to enhance any event or special occasion."
              icon={Flower2}
              image="/images/floral.jpg"
              href="/services#floral"
            />
            <ServiceCard
              title="Custom Craft Items"
              description="Unique handcrafted items and personalized decor elements for your events."
              icon={Palette}
              image="/images/craft.jpg"
              href="/services#craft"
            />
            <ServiceCard
              title="Luxury Hampers"
              description="Exquisite gift hampers for corporate events, weddings, and special occasions."
              icon={Gift}
              image="/images/hamper.jpg"
              href="/services#hampers"
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/services">
                View All Services
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Portfolio</h2>
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
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.category} decoration`}
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
                View Full Portfolio
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-white py-16">
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
      <section className="w-full bg-gray-50 py-16">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get a Quick Quote
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Use our calculator to get an estimate for your event.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <QuoteCalculator />
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="w-full bg-white py-16">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/contact.jpg"
                alt="Contact us"
                width={800}
                height={500}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Let&apos;s Create Something Special
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Ready to start planning your perfect event? Get in touch with us today and let&apos;s bring your vision to life.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-600">+91 1234567890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-600">contact@adspotevent.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-600">Kasaragod, Kerala, India</span>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="gap-2 bg-gold-500 hover:bg-gold-600">
                  <Link href="/contact">
                    Contact Us
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Follow Us on Instagram
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Stay updated with our latest events and decorations.
            </p>
          </div>
          <InstagramFeed />
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="https://www.instagram.com/adspot_event?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                View Instagram
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
