"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Loader2, Instagram } from "lucide-react"

interface InstagramPost {
  id: string
  media_url: string
  permalink: string
  media_type: string
  thumbnail_url?: string
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fallback images from your portfolio (8 images)
  const fallbackImages = [
    "/images/portfolio/wedding-1.jpg",
    "/images/portfolio/corporate-1.jpg", 
    "/images/portfolio/birthday-1.jpg",
    "/images/portfolio/floral-1.jpg",
    "/images/portfolio/wedding-2.jpg",
    "/images/portfolio/corporate-2.jpg",
    "/images/portfolio/birthday-2.jpg",
    "/images/portfolio/floral-2.jpg"
  ]

  useEffect(() => {
    async function fetchInstagramPosts() {
      try {
        const response = await fetch('/api/instagram')
        const data = await response.json()
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch Instagram posts')
        }

        setPosts(data.posts)
      } catch (err) {
        console.error('Error fetching Instagram posts:', err)
        setError('Failed to load Instagram posts')
      } finally {
        setLoading(false)
      }
    }

    fetchInstagramPosts()
  }, [])

  if (loading) {
    return (
      <div className="flex h-48 items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-gold-500" />
          <p className="mt-2 text-sm text-gray-600">Loading ADSPOT EVENT posts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <Instagram className="h-12 w-12 text-gold-500" />
        </div>
        <p className="mb-6 text-gray-600">Check out our latest work while we load Instagram posts!</p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {fallbackImages.map((image, index) => (
            <Link
              key={index}
              href="https://www.instagram.com/adspot_event"
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image}
                  alt={`ADSPOT EVENT - Event Planning & Decoration in Kasaragod`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                <div className="absolute bottom-4 left-4">
                  <Instagram className="h-6 w-6 text-white drop-shadow-lg" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {posts.slice(0, 8).map((post) => (
          <Link
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={post.media_type === 'VIDEO' ? post.thumbnail_url! : post.media_url}
                alt="ADSPOT EVENT Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              <div className="absolute bottom-4 left-4">
                <Instagram className="h-6 w-6 text-white drop-shadow-lg" />
              </div>
              {post.media_type === 'VIDEO' && (
                <div className="absolute top-4 right-4">
                  <div className="rounded-full bg-black/50 p-2">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
      
      {posts.length > 0 && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Showing latest {posts.slice(0, 8).length} posts from{" "}
            <Link 
              href="https://www.instagram.com/adspot_event"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-600 hover:text-gold-700"
            >
              @adspot_event
            </Link>
          </p>
        </div>
      )}
    </div>
  )
} 