"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const heroImages = [
  {
    src: "/images/hero-1.jpg",
    alt: "Elegant wedding decoration with floral mandap",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "Outdoor event setup with lights and decorations",
  },
  {
    src: "/images/hero-3.jpg",
    alt: "Corporate event with sophisticated decor",
  },
  {
    src: "/images/hero-4.jpg",
    alt: "Birthday celebration with colorful theme",
  },
]

const autoplayPlugin = Autoplay({
  delay: 5000,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
})

export function HeroCarousel() {
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
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[autoplayPlugin]}
      setApi={setApi}
      className="w-full"
    >
      <CarouselContent>
        {heroImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative h-screen w-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 w-2 rounded-full ${current === index ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  )
}
