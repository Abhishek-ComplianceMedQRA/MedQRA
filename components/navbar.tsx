"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import Logo from "../public/favicon-transparent.png"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <img src={Logo.src} alt="ComplianceMedQRA Logo" />
              </div>
              <span className="text-[1.1rem] font-bold text-[#3882f6]">ComplianceMedQRA</span>
            </Link>
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8">
                <li>
                  <Link
                    href="/"
                    className={cn(
                      "font-medium hover:text-[#3882f6]",
                      isActive("/") ? "text-[#3882f6]" : "text-muted-foreground",
                    )}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <button className="flex items-center gap-1 font-medium text-muted-foreground hover:text-[#3882f6]">
                    Product
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </li>
                <li>
                  <button className="flex items-center gap-1 font-medium text-muted-foreground hover:text-[#3882f6]">
                    Solutions
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={cn(
                      "font-medium hover:text-[#3882f6]",
                      isActive("/about") ? "text-[#3882f6]" : "text-muted-foreground",
                    )}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className={cn(
                      "font-medium hover:text-[#3882f6]",
                      isActive("/pricing") ? "text-[#3882f6]" : "text-muted-foreground",
                    )}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={cn(
                      "font-medium hover:text-[#3882f6]",
                      isActive("/contact") ? "text-[#3882f6]" : "text-muted-foreground",
                    )}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              className="hidden rounded-full bg-[#3882f6] px-6 py-2 font-medium text-white hover:bg-blue-600 md:block"
              size="lg"
            >
              Book your demo
            </Button>
            <Link
              href="/login"
              className="hidden rounded-full px-6 py-2 font-medium text-muted-foreground hover:text-[#3882f6] md:block"
            >
              Login →
            </Link>
            <Button variant="outline" size="icon" className="lg:hidden" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 z-50 bg-background p-4 transition-transform duration-300 ease-in-out lg:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <div className="absolute h-8 w-8 rounded-full bg-[#3882f6]"></div>
                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background"></div>
              </div>
              <span className="text-xl font-bold text-foreground">ComplianceMedQRA</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className={cn(
                    "block py-2 text-lg font-medium hover:text-[#3882f6]",
                    isActive("/") ? "text-[#3882f6]" : "text-foreground",
                  )}
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <button className="flex w-full items-center justify-between py-2 text-lg font-medium text-foreground hover:text-[#3882f6]">
                  Product
                  <ChevronDown className="h-5 w-5" />
                </button>
              </li>
              <li>
                <button className="flex w-full items-center justify-between py-2 text-lg font-medium text-foreground hover:text-[#3882f6]">
                  Solutions
                  <ChevronDown className="h-5 w-5" />
                </button>
              </li>
              <li>
                <Link
                  href="/about"
                  className={cn(
                    "block py-2 text-lg font-medium hover:text-[#3882f6]",
                    isActive("/about") ? "text-[#3882f6]" : "text-foreground",
                  )}
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className={cn(
                    "block py-2 text-lg font-medium hover:text-[#3882f6]",
                    isActive("/pricing") ? "text-[#3882f6]" : "text-foreground",
                  )}
                  onClick={toggleMobileMenu}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={cn(
                    "block py-2 text-lg font-medium hover:text-[#3882f6]",
                    isActive("/contact") ? "text-[#3882f6]" : "text-foreground",
                  )}
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="mt-8 space-y-4">
              <Button
                className="w-full rounded-full bg-[#3882f6] py-2 font-medium text-white hover:bg-blue-600"
                size="lg"
              >
                Book your demo
              </Button>
              <Link
                href="/login"
                className="block w-full rounded-full border border-border py-2 text-center font-medium text-muted-foreground hover:text-[#3882f6]"
              >
                Login →
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
