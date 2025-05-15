"use client"

import Link from "next/link"
import Image from "next/image"
import { LucideIcon, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  image: string
  href: string
}

export function ServiceCard({ title, description, icon: Icon, image, href }: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-gold-50 p-2">
            <Icon className="h-5 w-5 text-gold-500" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center text-sm font-medium text-gold-600 hover:text-gold-700"
        >
          Learn More
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
