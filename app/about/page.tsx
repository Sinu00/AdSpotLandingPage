"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Award, Users, Heart, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every detail, ensuring each event exceeds expectations."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with our clients to bring their unique vision to life."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Dedicated to creating magical moments and unforgettable experiences."
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Constantly evolving and bringing fresh ideas to every event."
  }
]

const team = [
  {
    name: "Shazu",
    role: "Creative Director",
    image: "/images/team/sarah.jpg",
    bio: "With over 5 years of experience in event planning and design, Shazu leads our creative vision."
  },
  {
    name: "Mahmood",
    role: "Senior Event Planner",
    image: "/images/team/raj.jpg",
    bio: "Specializing in wedding and corporate events, Mahmood brings precision and creativity to every project."
  },
  {
    name: "Unknown",
    role: "Decor Specialist",
    image: "/images/team/priya.jpg",
    bio: "An expert in floral design and themed decorations with an eye for detail."
  },
  {
    name: "Unknown",
    role: "Project Manager",
    image: "/images/team/alex.jpg",
    bio: "Ensuring smooth execution of events with meticulous planning and coordination."
  }
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] w-full">
        <Image
          src="/images/about-hero.jpg"
          alt="About Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container flex h-full items-center px-4">
            <div>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                About Us
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white">
                Creating magical moments and unforgettable experiences since 2015
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full bg-white py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-6 space-y-6 text-lg text-gray-600">
              <p>
                Founded in 2015, AdSpot Event has grown from a small local event planning service to one of
                Kasaragod&apos;s most trusted names in event management and decoration.
              </p>
              <p>
                Our journey began with a simple vision: to create extraordinary experiences that leave
                lasting impressions. Today, we continue to bring that vision to life through our
                dedication to excellence and attention to detail.
              </p>
              <p>
                With a team of passionate professionals and years of experience, we&apos;ve had the privilege
                of being part of countless special moments, from intimate celebrations to grand corporate
                events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative w-full bg-gray-50 py-16">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              The principles that guide us in creating exceptional experiences
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md"
                >
                  <div className="mb-4 rounded-full bg-gold-50 p-3">
                    <Icon className="h-6 w-6 text-gold-500" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative w-full bg-white py-16">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              The creative minds behind your perfect events
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="mb-2 text-gold-500">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container px-4 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let&apos;s Create Something Special Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Ready to start planning your perfect event? Get in touch with our team today.
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