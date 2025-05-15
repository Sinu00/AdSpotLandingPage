"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        const shouldBeScrolled = window.scrollY > 50
        if (shouldBeScrolled !== scrolled) {
          setScrolled(shouldBeScrolled)
        }
      }, 50)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent",
      )}
    >
      <nav className="container flex items-center justify-between px-4 py-4">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span
              className={cn(
                "font-serif text-2xl font-bold transition-colors",
                scrolled ? "text-gold-600" : "text-white",
              )}
            >
              AdSpot<span className="text-gold-500">Event</span>
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn(
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
              scrolled ? "text-gray-700" : "text-white",
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors",
                pathname === item.href
                  ? "text-gold-500"
                  : scrolled
                    ? "text-gray-900 hover:text-gold-600"
                    : "text-white hover:text-gold-300",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild size="sm" className="gap-2 bg-gold-500 hover:bg-gold-600">
            <Link href="tel:+917736353636">
              <Phone className="h-4 w-4" />
              <span>Call Us</span>
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("fixed inset-0 z-50 bg-white lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 z-50">
          <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
            <div className="px-4 sm:px-6">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="font-serif text-2xl font-bold text-gold-600">
                    AdSpot<span className="text-gold-500">Event</span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="rounded-md text-gray-400 hover:text-gray-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-6 py-3 text-base font-semibold leading-7",
                        pathname === item.href ? "bg-gold-50 text-gold-600" : "text-gray-900 hover:bg-gray-50",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild size="lg" className="w-full gap-2 bg-gold-500 hover:bg-gold-600">
                    <Link href="tel:+917736353636" onClick={() => setMobileMenuOpen(false)}>
                      <Phone className="h-4 w-4" />
                      <span>Call Us: +91 7736353636</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
