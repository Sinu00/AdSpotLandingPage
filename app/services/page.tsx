"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Heart, Building2, Cake, Flower2, Palette, Gift } from "lucide-react"

import { Button } from "@/components/ui/button"

const services = [
  {
    id: "wedding",
    title: "Wedding Planning & Decoration",
    description: "Transform your special day into an unforgettable celebration with our comprehensive wedding planning and decoration services.",
    image: "/images/wedding.jpg",
    icon: Heart,
    features: [
      "Complete wedding planning and coordination",
      "Custom mandap and stage decoration",
      "Floral arrangements and bouquets",
      "Lighting and ambiance design",
      "Seating arrangements and table settings",
      "Entry and venue decoration"
    ]
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Elevate your corporate events with our professional planning and sophisticated decor solutions.",
    image: "/images/corporate.jpg",
    icon: Building2,
    features: [
      "Conference and seminar setup",
      "Product launch events",
      "Corporate dinner arrangements",
      "Stage and backdrop design",
      "Branded decorations and displays",
      "Technical setup coordination"
    ]
  },
  {
    id: "birthday",
    title: "Birthday Celebrations",
    description: "Create magical birthday memories with our creative themes and stunning decorations.",
    image: "/images/birthday.jpg",
    icon: Cake,
    features: [
      "Theme-based decorations",
      "Balloon arrangements and arches",
      "Custom backdrop design",
      "Cake table styling",
      "Party favor arrangements",
      "Entertainment area setup"
    ]
  },
  {
    id: "floral",
    title: "Floral Designs",
    description: "Enhance any event with our exquisite floral designs and arrangements.",
    image: "/images/floral.jpg",
    icon: Flower2,
    features: [
      "Custom floral installations",
      "Wedding bouquets and centerpieces",
      "Stage and mandap flowers",
      "Car decoration",
      "Table arrangements",
      "Venue entrance decoration"
    ]
  },
  {
    id: "craft",
    title: "Custom Craft Items",
    description: "Add a personal touch to your events with our handcrafted decorative elements.",
    image: "/images/craft.jpg",
    icon: Palette,
    features: [
      "Personalized wedding invitations",
      "Custom name plates and signage",
      "Themed props and decorations",
      "Party favors and gift packaging",
      "Table setting accessories",
      "Photo booth props"
    ]
  },
  {
    id: "hampers",
    title: "Luxury Hampers",
    description: "Curate perfect gift hampers for any occasion with our luxury collection.",
    image: "/images/hamper.jpg",
    icon: Gift,
    features: [
      "Wedding welcome hampers",
      "Corporate gift packages",
      "Festival special hampers",
      "Custom gift arrangements",
      "Premium packaging options",
      "Bulk order management"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] w-full">
        <Image
          src="/images/services-hero.jpg"
          alt="Our Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container flex h-full items-center px-4">
            <div>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Our Services
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white">
                Discover our comprehensive range of event planning and decoration services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full bg-white py-16">
        <div className="container px-4">
          <div className="grid gap-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid gap-8 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-gold-50 p-3">
                        <Icon className="h-6 w-6 text-gold-500" />
                      </div>
                      <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-lg text-gray-600">{service.description}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <ChevronRight className="h-5 w-5 text-gold-500" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button asChild className="gap-2 bg-gold-500 hover:bg-gold-600">
                        <Link href={`/contact?service=${service.id}`}>
                          Enquire Now
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container px-4 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to Plan Your Event?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Let us help you create an unforgettable experience. Get in touch with us today.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="gap-2 bg-gold-500 hover:bg-gold-600">
              <Link href="/contact">
                Contact Us
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 