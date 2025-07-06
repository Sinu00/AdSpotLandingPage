import { NextResponse } from 'next/server'

const INSTAGRAM_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID

export async function GET() {
  if (!INSTAGRAM_TOKEN) {
    return NextResponse.json(
      { message: 'Instagram access token not configured' },
      { status: 500 }
    )
  }

  try {
    // If no user ID provided, get it first
    if (!INSTAGRAM_USER_ID) {
      const userResponse = await fetch(
        `https://graph.instagram.com/me?fields=user_id,username&access_token=${INSTAGRAM_TOKEN}`
      )
      const userData = await userResponse.json()
      
      if (!userResponse.ok) {
        throw new Error(userData.error?.message || 'Failed to get user info')
      }
      
      console.log('Instagram User Info:', userData)
      
      // Get media using the user_id from the response (fetch 8 posts)
      const mediaResponse = await fetch(
        `https://graph.instagram.com/${userData.user_id}/media?fields=id,media_type,media_url,permalink,thumbnail_url,timestamp&limit=8&access_token=${INSTAGRAM_TOKEN}`
      )
      const mediaData = await mediaResponse.json()
      
      if (!mediaResponse.ok) {
        throw new Error(mediaData.error?.message || 'Failed to fetch media')
      }
      
      return NextResponse.json({ posts: mediaData.data })
    }
    
    // Use provided user ID (fetch 8 posts)
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,permalink,thumbnail_url,timestamp&limit=8&access_token=${INSTAGRAM_TOKEN}`
    )
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to fetch from Instagram API')
    }

    return NextResponse.json({ posts: data.data })
  } catch (error) {
    console.error('Instagram API Error:', error)
    return NextResponse.json(
      { message: 'Failed to fetch Instagram posts', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 