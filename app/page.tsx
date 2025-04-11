import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Bot,
  CheckCircle,
  FileText,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pb-24 pt-16 mt-[25px]">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-border bg-background/80 px-3 py-1 text-sm backdrop-blur-sm">
                <span className="mr-2 rounded-full bg-[#3882f6] px-2 py-0.5 text-xs font-semibold text-white">
                  NEW
                </span>
                <span className="text-muted-foreground">
                  AI-powered compliance management
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Compliance management{" "}
                <span className="text-[#3882f6]">simplified</span> for medical
                devices
              </h1>

              <p className="mb-8 text-xl text-muted-foreground">
                Streamline your regulatory compliance with our AI-enhanced
                platform designed specifically for medical device companies.
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  className="w-full rounded-full bg-[#3882f6] px-8 py-6 text-lg font-semibold text-white hover:bg-blue-600 transition-all duration-300 sm:w-auto"
                  size="lg"
                >
                  Book your demo
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-[#3882f6] px-8 py-6 text-lg font-semibold text-[#3882f6] hover:bg-[#3882f6]/10 sm:w-auto"
                  size="lg"
                >
                  Learn more <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="bg-muted/20 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              AI-Powered Compliance Management
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Our platform leverages artificial intelligence to streamline your
              compliance processes, reduce manual work, and provide actionable
              insights.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Bot,
                title: "Intelligent Document Analysis",
                description:
                  "Our AI automatically analyzes your documents, identifies gaps in compliance, and suggests improvements.",
              },
              {
                icon: Zap,
                title: "Automated Risk Assessment",
                description:
                  "Generate comprehensive risk assessments in minutes instead of days with our AI-powered risk analysis tools.",
              },
              {
                icon: FileText,
                title: "Smart Document Generation",
                description:
                  "Create compliant documentation faster with AI-assisted templates and content suggestions.",
              },
              {
                icon: ShieldCheck,
                title: "Proactive Compliance Monitoring",
                description:
                  "AI continuously monitors your compliance status and alerts you to potential issues before they become problems.",
              },
              {
                icon: CheckCircle,
                title: "Regulatory Intelligence",
                description:
                  "Stay updated on changing regulations with AI that tracks and interprets regulatory changes relevant to your products.",
              },
              {
                icon: Bot,
                title: "Compliance Assistant",
                description:
                  "Get instant answers to your compliance questions from our AI assistant trained on regulatory standards.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#3882f6]/20 hover:translate-y-[-5px]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#3882f6]/10">
                  <feature.icon className="h-6 w-6 text-[#3882f6]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productivity Stats */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                Boost your productivity with AI-powered compliance
              </h2>
              <p className="mb-8 text-xl text-muted-foreground">
                ComplianceMedQRA's AI-driven platform helps medical device
                companies achieve compliance faster and with fewer resources.
              </p>

              <div className="space-y-6">
                {[
                  {
                    stat: "70%",
                    description: "Reduction in document preparation time",
                  },
                  {
                    stat: "85%",
                    description: "Faster regulatory submissions",
                  },
                  {
                    stat: "60%",
                    description: "Decrease in compliance-related costs",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#3882f6]/10">
                      <CheckCircle className="h-5 w-5 text-[#3882f6]" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        {item.stat}
                      </div>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                className="block mt-8 rounded-full bg-[#3882f6] px-6 py-2 font-medium text-white hover:bg-blue-600 mx-auto sm:mx-0"
                size="lg"
              >
                See how it works 
              </Button>
            </div>

            <div className="relative rounded-xl border border-border bg-card p-6 shadow-lg">
              <div className="absolute -top-3 left-6 rounded-full bg-[#3882f6] px-4 py-1 text-sm font-medium text-white">
                AI-Powered Workflow
              </div>
              <div className="mt-4 space-y-6">
                {[
                  {
                    title: "Traditional Process",
                    steps: [
                      "Manual document creation (3-5 days)",
                      "Manual gap analysis (2-3 days)",
                      "Manual risk assessment (4-7 days)",
                      "Manual regulatory tracking (Ongoing)",
                    ],
                    totalTime: "9-15+ days",
                    highlight: false,
                  },
                  {
                    title: "With ComplianceMedQRA",
                    steps: [
                      "AI-assisted document creation (4-8 hours)",
                      "Automated gap analysis (2-4 hours)",
                      "AI-powered risk assessment (1 day)",
                      "Automated regulatory tracking (Real-time)",
                    ],
                    totalTime: "1.5-2 days",
                    highlight: true,
                  },
                ].map((process, i) => (
                  <div
                    key={i}
                    className={cn(
                      "rounded-lg border p-4",
                      process.highlight
                        ? "border-[#3882f6] bg-[#3882f6]/5"
                        : "border-border bg-background"
                    )}
                  >
                    <h3
                      className={cn(
                        "mb-3 text-lg font-semibold",
                        process.highlight ? "text-[#3882f6]" : "text-foreground"
                      )}
                    >
                      {process.title}
                    </h3>
                    <ul className="mb-3 space-y-2">
                      {process.steps.map((step, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <div
                            className={cn(
                              "mt-0.5 h-4 w-4 flex-shrink-0 rounded-full",
                              process.highlight ? "bg-[#3882f6]/20" : "bg-muted"
                            )}
                          />
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between border-t border-border pt-2 text-sm">
                      <span className="font-medium text-muted-foreground">
                        Total Time:
                      </span>
                      <span
                        className={cn(
                          "font-bold",
                          process.highlight
                            ? "text-[#3882f6]"
                            : "text-foreground"
                        )}
                      >
                        {process.totalTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-[#3882f6] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to transform your compliance process?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-100">
            Join hundreds of medical device companies that trust
            ComplianceMedQRA's AI-powered platform
          </p>
          <div className="mt-10">
            <Button
              className="rounded-full bg-white px-8 py-6 text-lg font-semibold text-[#3882f6] shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              Book your demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
