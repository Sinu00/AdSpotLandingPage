"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Loader2 } from "lucide-react"

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
        <Loader2 className="h-8 w-8 animate-spin text-gold-500" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={`/images/instagram-${item}.jpg`}
              alt="Instagram post"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.slice(0, 4).map((post) => (
        <Link
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-lg"
        >
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={post.media_type === 'VIDEO' ? post.thumbnail_url! : post.media_url}
              alt="Instagram post"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
          </div>
        </Link>
      ))}
    </div>
  )
} 