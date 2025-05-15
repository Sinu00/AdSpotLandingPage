"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "wedding",
    title: "Wedding Events",
    description: "Elegant and memorable wedding celebrations crafted with attention to every detail.",
    image: "/images/portfolio-wedding.jpg",
    projects: [
      {
        title: "Traditional Wedding Elegance",
        description: "A beautiful blend of traditional elements with modern luxury",
        image: "/images/portfolio/wedding-1.jpg"
      },
      {
        title: "Contemporary Wedding Setup",
        description: "Modern minimalist approach with sophisticated details",
        image: "/images/portfolio/wedding-2.jpg"
      },
      {
        title: "Destination Wedding Decor",
        description: "Luxurious outdoor wedding setup with natural elements",
        image: "/images/portfolio/wedding-3.jpg"
      }
    ]
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Professional and sophisticated setups for business events and conferences.",
    image: "/images/portfolio-corporate.jpg",
    projects: [
      {
        title: "Annual Conference Setup",
        description: "Large-scale corporate event with professional staging",
        image: "/images/portfolio/corporate-1.jpg"
      },
      {
        title: "Product Launch Event",
        description: "Innovative product showcase environment",
        image: "/images/portfolio/corporate-2.jpg"
      },
      {
        title: "Corporate Dinner Arrangement",
        description: "Elegant evening setup for corporate gathering",
        image: "/images/portfolio/corporate-3.jpg"
      }
    ]
  },
  {
    id: "birthday",
    title: "Birthday Celebrations",
    description: "Creative and joyful birthday setups for all ages.",
    image: "/images/portfolio-birthday.jpg",
    projects: [
      {
        title: "Luxury Birthday Party",
        description: "Elegant celebration with premium decorations",
        image: "/images/portfolio/birthday-1.jpg"
      },
      {
        title: "Themed Birthday Setup",
        description: "Creative theme-based celebration design",
        image: "/images/portfolio/birthday-2.jpg"
      },
      {
        title: "Kids Birthday Wonder",
        description: "Magical setup for children's celebration",
        image: "/images/portfolio/birthday-3.jpg"
      }
    ]
  },
  {
    id: "floral",
    title: "Floral Designs",
    description: "Exquisite floral arrangements and installations for any occasion.",
    image: "/images/portfolio-floral.jpg",
    projects: [
      {
        title: "Wedding Floral Installation",
        description: "Grand floral design for wedding ceremony",
        image: "/images/portfolio/floral-1.jpg"
      },
      {
        title: "Corporate Event Flowers",
        description: "Sophisticated floral arrangements for business events",
        image: "/images/portfolio/floral-2.jpg"
      },
      {
        title: "Themed Floral Design",
        description: "Creative floral composition for special events",
        image: "/images/portfolio/floral-3.jpg"
      }
    ]
  },
  {
    id: "outdoor",
    title: "Outdoor Events",
    description: "Beautiful outdoor event setups that blend with nature.",
    image: "/images/portfolio-outdoor.jpg",
    projects: [
      {
        title: "Garden Wedding Setup",
        description: "Romantic outdoor wedding arrangement",
        image: "/images/portfolio/outdoor-1.jpg"
      },
      {
        title: "Corporate Outdoor Event",
        description: "Professional open-air business event",
        image: "/images/portfolio/outdoor-2.jpg"
      },
      {
        title: "Outdoor Birthday Celebration",
        description: "Fun and elegant outdoor party setup",
        image: "/images/portfolio/outdoor-3.jpg"
      }
    ]
  },
  {
    id: "themed",
    title: "Themed Events",
    description: "Unique themed decorations that tell a story.",
    image: "/images/portfolio-themed.jpg",
    projects: [
      {
        title: "Vintage Theme Setup",
        description: "Classic vintage-inspired event design",
        image: "/images/portfolio/themed-1.jpg"
      },
      {
        title: "Modern Minimalist Theme",
        description: "Contemporary minimal event styling",
        image: "/images/portfolio/themed-2.jpg"
      },
      {
        title: "Cultural Theme Design",
        description: "Traditional elements with modern touch",
        image: "/images/portfolio/themed-3.jpg"
      }
    ]
  }
]

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] w-full">
        <Image
          src="/images/portfolio-hero.jpg"
          alt="Our Portfolio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container flex h-full items-center px-4">
            <div>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Our Portfolio
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white">
                Explore our collection of beautifully crafted events and celebrations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="w-full bg-white py-16">
        <div className="container px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
              key={category.id}
              className="group overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 w-full p-4">
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      <p className="mt-2 text-sm text-white/80">{category.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container px-4">
          {categories.map((category) => (
            <div key={category.id} id={category.id} className="mb-16 last:mb-0">
              <h2 className="mb-8 font-serif text-3xl font-bold tracking-tight text-gray-900">
                {category.title}
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {category.projects.map((project, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                        <div className="absolute bottom-0 w-full p-4">
                          <h3 className="text-lg font-bold text-white">{project.title}</h3>
                          <p className="mt-1 text-sm text-white/80">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-16">
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