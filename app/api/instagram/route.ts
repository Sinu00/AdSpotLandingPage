import { NextResponse } from 'next/server'

const INSTAGRAM_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID

export async function GET() {
  if (!INSTAGRAM_TOKEN || !INSTAGRAM_USER_ID) {
    return NextResponse.json(
      { message: 'Instagram credentials not configured' },
      { status: 500 }
    )
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,permalink,thumbnail_url&access_token=${INSTAGRAM_TOKEN}`
    )
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to fetch from Instagram API')
    }

    return NextResponse.json({ posts: data.data })
  } catch (error) {
    console.error('Instagram API Error:', error)
    return NextResponse.json(
      { message: 'Failed to fetch Instagram posts' },
      { status: 500 }
    )
  }
} 