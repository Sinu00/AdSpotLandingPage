import { NextRequest, NextResponse } from 'next/server'

const VERIFY_TOKEN = process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN || 'your_verify_token_here'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('Webhook verified')
      return new NextResponse(challenge)
    } else {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
    }
  }

  return NextResponse.json({ message: 'Bad request' }, { status: 400 })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Instagram webhook received:', body)
    
    // Handle Instagram webhook events here
    // For example, when new posts are created, you can refresh your cache
    
    return NextResponse.json({ message: 'Webhook received' }, { status: 200 })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ message: 'Error processing webhook' }, { status: 500 })
  }
} 