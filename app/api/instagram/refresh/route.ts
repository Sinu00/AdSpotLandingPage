import { NextResponse } from 'next/server'

const INSTAGRAM_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN

export async function GET() {
  if (!INSTAGRAM_TOKEN) {
    return NextResponse.json(
      { message: 'Instagram access token not configured' },
      { status: 500 }
    )
  }

  try {
    // Refresh the long-lived token
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${INSTAGRAM_TOKEN}`
    )
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to refresh Instagram token')
    }

    return NextResponse.json({ 
      message: 'Token refreshed successfully',
      access_token: data.access_token,
      expires_in: data.expires_in,
      token_type: data.token_type
    })
  } catch (error) {
    console.error('Instagram Token Refresh Error:', error)
    return NextResponse.json(
      { message: 'Failed to refresh Instagram token', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 