import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { QuoteCalculator } from "@/components/quote-calculator"

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
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
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
              icon="/images/wedding-icon.png"
              image="/images/wedding.jpg"
              href="/services/wedding"
            />
            <ServiceCard
              title="Corporate Events"
              description="Elevate your corporate events with professional planning and sophisticated decor."
              icon="/images/corporate-icon.png"
              image="/images/corporate.jpg"
              href="/services/corporate"
            />
            <ServiceCard
              title="Birthday Celebrations"
              description="Create memorable birthday celebrations with our creative themes and decorations."
              icon="/images/birthday-icon.png"
              image="/images/birthday.jpg"
              href="/services/birthday"
            />
            <ServiceCard
              title="Floral Arrangements"
              description="Beautiful custom floral designs to enhance any event or special occasion."
              icon="/images/floral-icon.png"
              image="/images/floral.jpg"
              href="/services/floral"
            />
            <ServiceCard
              title="Custom Craft Items"
              description="Unique handcrafted items and personalized decor elements for your events."
              icon="/images/craft-icon.png"
              image="/images/craft.jpg"
              href="/services/craft"
            />
            <ServiceCard
              title="Luxury Hampers"
              description="Exquisite gift hampers for corporate events, weddings, and special occasions."
              icon="/images/hamper-icon.png"
              image="/images/hamper.jpg"
              href="/services/hampers"
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
                href={`/portfolio/${item.category.toLowerCase()}`}
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
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
              <p className="mt-4 text-lg text-gray-600">
                Ready to start planning your event? Get in touch with our team.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-100">
                    <Phone className="h-5 w-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="mt-1 text-gray-600">+91 7736353636</p>
                    <p className="text-gray-600">+91 8907488000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-100">
                    <Mail className="h-5 w-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="mt-1 text-gray-600">info@adspotevent.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-100">
                    <MapPin className="h-5 w-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="mt-1 text-gray-600">Kasaragod, Kerala, India</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
              <Image src="/images/contact.jpg" alt="Contact us" fill className="object-cover" />
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
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <Link
                key={item}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-lg"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={`/images/instagram-${item}.jpg`}
                    alt="Instagram post"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                View Instagram
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="w-full bg-white py-16">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Event Inspiration
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Discover the latest trends and ideas for your events.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "2024 Wedding Trends",
                excerpt: "Discover the hottest wedding decoration trends for 2024.",
                image: "/images/blog-wedding.jpg",
                date: "May 2, 2024",
              },
              {
                title: "Corporate Event Planning Guide",
                excerpt: "Essential tips for planning successful corporate events.",
                image: "/images/blog-corporate.jpg",
                date: "April 18, 2024",
              },
              {
                title: "Creative Birthday Themes",
                excerpt: "Unique birthday celebration ideas for all ages.",
                image: "/images/blog-birthday.jpg",
                date: "April 5, 2024",
              },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-gray-600">{post.excerpt}</p>
                  <Button asChild variant="link" className="mt-4 px-0">
                    <Link href="/blog">
                      Read More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/blog">
                View All Articles
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
