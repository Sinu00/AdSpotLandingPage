"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 1234567890", "+91 9876543210"],
    href: "tel:+911234567890"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@adspotevent.com", "info@adspotevent.com"],
    href: "mailto:contact@adspotevent.com"
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["AdSpot Event", "Kasaragod, Kerala, India"],
    href: "https://maps.app.goo.gl/iMw3KpHgyXCh4o4X6"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
    href: null
  }
]

const services = [
  { value: "wedding", label: "Wedding Planning & Decoration" },
  { value: "corporate", label: "Corporate Events" },
  { value: "birthday", label: "Birthday Celebrations" },
  { value: "floral", label: "Floral Arrangements" },
  { value: "craft", label: "Custom Craft Items" },
  { value: "hampers", label: "Luxury Hampers" }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const selectedService = services.find(s => s.value === formData.service)
    const message = `*New Enquiry from Website*
    
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service:* ${selectedService?.label || formData.service}

*Message:*
${formData.message}`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    
    // WhatsApp number (replace with your business number)
    const whatsappNumber = "917736353636" // Format: country code + number without '+'
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] w-full">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container flex h-full items-center px-4">
            <div>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Contact Us
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white">
                Get in touch with us to start planning your perfect event
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full bg-white py-16">
        <div className="container px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg bg-gray-50 p-6 text-center"
                >
                  <div className="mb-4 rounded-full bg-gold-50 p-3">
                    <Icon className="h-6 w-6 text-gold-500" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-gray-900">{item.title}</h3>
                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="hover:text-gold-500"
                            target={item.title === "Address" ? "_blank" : undefined}
                            rel={item.title === "Address" ? "noopener noreferrer" : undefined}
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-6 font-serif text-2xl font-bold text-gray-900">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-900">
                    Service Interest
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full gap-2 bg-gold-500 hover:bg-gold-600">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="aspect-square w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.1563218052837!2d74.98989427487799!3d12.503094487389595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba48242ed52a9c5%3A0x62d3799efbcdaa65!2sAdspot%20Celebration!5e0!3m2!1sen!2sin!4v1710835894050!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 