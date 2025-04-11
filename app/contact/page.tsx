"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Contact Us</h1>
        <p className="mx-auto max-w-3xl text-xl text-gray-600">
          Have questions about our platform? Our team is here to help.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mb-8 text-lg text-gray-600">
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          {formSubmitted ? (
            <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
              <h3 className="mb-2 text-xl font-semibold text-green-800">Thank you for reaching out!</h3>
              <p className="text-green-700">
                We've received your message and will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" required />
              </div>
              <div className="space-y-2">
                <Label>I'm interested in:</Label>
                <RadioGroup defaultValue="demo">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="demo" value="demo" />
                    <Label htmlFor="demo" className="cursor-pointer">
                      Scheduling a demo
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="pricing" value="pricing" />
                    <Label htmlFor="pricing" className="cursor-pointer">
                      Pricing information
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="support" value="support" />
                    <Label htmlFor="support" className="cursor-pointer">
                      Technical support
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="other" value="other" />
                    <Label htmlFor="other" className="cursor-pointer">
                      Other
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} required />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-[#3882f6] py-6 text-lg font-semibold text-white hover:bg-blue-600"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          )}
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Contact Information</h2>
          <div className="mb-8 space-y-6">
            <div className="flex items-start">
              <MapPin className="mr-4 h-6 w-6 text-[#3882f6]" />
              <div>
                <h3 className="font-semibold text-gray-900">Our Office</h3>
                <p className="text-gray-600">123 Compliance Way, Suite 400</p>
                <p className="text-gray-600">Boston, MA 02110</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="mr-4 h-6 w-6 text-[#3882f6]" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+1 (888) 555-1234</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="mr-4 h-6 w-6 text-[#3882f6]" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">info@compliancemedqra.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gray-100 p-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">Monday - Friday:</span>
                <span className="font-medium text-gray-900">9:00 AM - 6:00 PM EST</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Saturday:</span>
                <span className="font-medium text-gray-900">Closed</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Sunday:</span>
                <span className="font-medium text-gray-900">Closed</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 h-80 w-full rounded-xl bg-gray-200"></div>
        </div>
      </div>
    </div>
  )
}
