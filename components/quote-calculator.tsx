"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function QuoteCalculator() {
  const [eventType, setEventType] = useState("wedding")
  const [guests, setGuests] = useState(100)
  const [venue, setVenue] = useState("indoor")
  const [services, setServices] = useState<string[]>(["decoration"])
  const [quote, setQuote] = useState<number | null>(null)

  const calculateQuote = () => {
    let basePrice = 0

    // Base price by event type
    switch (eventType) {
      case "wedding":
        basePrice = 50000
        break
      case "corporate":
        basePrice = 35000
        break
      case "birthday":
        basePrice = 25000
        break
      default:
        basePrice = 20000
    }

    // Adjust for number of guests
    const guestFactor = Math.ceil(guests / 50) * 0.1
    basePrice += basePrice * guestFactor

    // Venue adjustment
    if (venue === "outdoor") {
      basePrice += 10000
    }

    // Additional services
    if (services.includes("catering")) basePrice += 25000
    if (services.includes("photography")) basePrice += 15000
    if (services.includes("entertainment")) basePrice += 20000

    setQuote(Math.round(basePrice))
  }

  const toggleService = (service: string) => {
    if (services.includes(service)) {
      setServices(services.filter((s) => s !== service))
    } else {
      setServices([...services, service])
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Event Type</Label>
            <Select value={eventType} onValueChange={setEventType}>
              <SelectTrigger>
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wedding">Wedding</SelectItem>
                <SelectItem value="corporate">Corporate Event</SelectItem>
                <SelectItem value="birthday">Birthday Celebration</SelectItem>
                <SelectItem value="other">Other Event</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Number of Guests: {guests}</Label>
            <Slider value={[guests]} min={50} max={500} step={50} onValueChange={(value) => setGuests(value[0])} />
          </div>

          <div className="space-y-2">
            <Label>Venue Type</Label>
            <RadioGroup value={venue} onValueChange={setVenue} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="indoor" id="indoor" />
                <Label htmlFor="indoor">Indoor</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="outdoor" id="outdoor" />
                <Label htmlFor="outdoor">Outdoor</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Additional Services</Label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="decoration"
                  checked={services.includes("decoration")}
                  onChange={() => toggleService("decoration")}
                  className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
                />
                <Label htmlFor="decoration">Decoration</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="catering"
                  checked={services.includes("catering")}
                  onChange={() => toggleService("catering")}
                  className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
                />
                <Label htmlFor="catering">Catering</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="photography"
                  checked={services.includes("photography")}
                  onChange={() => toggleService("photography")}
                  className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
                />
                <Label htmlFor="photography">Photography</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="entertainment"
                  checked={services.includes("entertainment")}
                  onChange={() => toggleService("entertainment")}
                  className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
                />
                <Label htmlFor="entertainment">Entertainment</Label>
              </div>
            </div>
          </div>

          <Button onClick={calculateQuote} className="w-full bg-gold-500 hover:bg-gold-600">
            Calculate Quote
          </Button>

          {quote !== null && (
            <div className="mt-6 rounded-lg bg-gold-50 p-4 text-center">
              <p className="text-sm text-gray-600">Estimated Quote</p>
              <p className="text-3xl font-bold text-gold-600">₹{quote.toLocaleString()}</p>
              <p className="mt-2 text-sm text-gray-500">
                This is an approximate quote. Contact us for a detailed proposal.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
