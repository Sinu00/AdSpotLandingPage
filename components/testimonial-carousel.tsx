"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Muhammed Sinan",
    role: "Corporate Client",
    content:
      "We hired AdSpot Event for our annual corporate event, and they delivered exceptional service. The decor was sophisticated, and the team was professional throughout the planning process.",
    avatar: "/images/testimonial/sinu.jpg",
    rating: 5,
  },
  {
    name: "Mariyam Shahana",
    role: "Wedding Clients",
    content:
      "AdSpot Event transformed our wedding into a magical experience. The floral mandap was beyond our expectations, and every detail was perfect. Highly recommend their services!",
    avatar: "/images/testimonial/shana.jpg",
    rating: 5,
  },
  {
    name: "Shiza",
    role: "Birthday Celebration",
    content:
      "The themed birthday party they arranged for my sister was incredible! The decorations were creative and colorful, exactly what we wanted. Will definitely use their services again.",
    avatar: "/images/testimonial/shiza.jpg",
    rating: 5,
  },
  {
    name: "Marzook",
    role: "Wedding Clients",
    content:
      "Working with AdSpot Event was a dream. They understood our vision perfectly and created a stunning wedding setup that our guests are still talking about months later.",
    avatar: "/images/testimonial/majju.png",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  return (
    <div className="relative">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full border-none shadow-md">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="flex-1 text-gray-600">"{testimonial.content}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full ${current === index ? "bg-gold-500" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}
