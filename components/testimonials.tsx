"use client"

import { cn } from "@/lib/utils"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "ComplianceMedQRA's AI capabilities have transformed how we manage our regulatory compliance. The platform is intuitive, comprehensive, and has saved us countless hours in preparation for audits.",
      author: "Sarah Johnson",
      role: "Quality Assurance Director, MedTech Innovations",
      rating: 5
    },
    {
      quote: "The automated risk assessment feature has been a game-changer for our team. We've reduced our compliance review time by 70% while improving accuracy.",
      author: "Michael Chen",
      role: "Regulatory Affairs Manager, BioTech Solutions",
      rating: 5
    },
    {
      quote: "As a startup in the medical device space, ComplianceMedQRA has been instrumental in helping us establish robust compliance processes from day one.",
      author: "Emily Rodriguez",
      role: "CEO, HealthTech StartUp",
      rating: 5
    },
    {
      quote: "The AI-powered document analysis has significantly reduced our manual review time. It's like having an extra team member who's an expert in regulatory compliance.",
      author: "David Kim",
      role: "Compliance Officer, MediCorp",
      rating: 5
    },
    {
      quote: "We've been using ComplianceMedQRA for over a year now, and it has become an indispensable part of our quality management system.",
      author: "Lisa Thompson",
      role: "Quality Manager, DeviceTech",
      rating: 5
    }
  ];

  return (
    <section className="bg-muted/20 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <h2 className="mb-12 text-3xl font-bold text-foreground">What our customers say</h2>
        
        <div className="relative">
          <div className="flex animate-scroll gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-[400px] rounded-2xl border border-border bg-card p-8 shadow-lg">
                <div className="mb-6 flex justify-center">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-6 w-6 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mb-6 text-xl italic text-foreground">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}

            {/* First testimonial repeated without any gap */}
            <div className="min-w-[400px] rounded-2xl border border-border bg-card p-8 shadow-lg">
              <div className="mb-6 flex justify-center">
                <div className="flex">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-6 w-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="mb-6 text-xl italic text-foreground">"{testimonials[0].quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonials[0].author}</p>
                <p className="text-muted-foreground">{testimonials[0].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 