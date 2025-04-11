import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Transparent Pricing</h1>
        <p className="mx-auto max-w-3xl text-xl text-gray-600">
          Choose the plan that's right for your organization's compliance needs
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            name: "Starter",
            price: "$499",
            description: "Perfect for small teams and startups",
            features: [
              "Document Management",
              "Training Records",
              "Basic Audit Tools",
              "5 User Accounts",
              "Email Support",
              "1GB Storage",
            ],
            cta: "Get Started",
            popular: false,
          },
          {
            name: "Professional",
            price: "$999",
            description: "Ideal for growing medical device companies",
            features: [
              "Everything in Starter",
              "Risk Management",
              "CAPA Management",
              "Regulatory Intelligence",
              "20 User Accounts",
              "Priority Support",
              "10GB Storage",
              "API Access",
            ],
            cta: "Get Started",
            popular: true,
          },
          {
            name: "Enterprise",
            price: "Custom",
            description: "For large organizations with complex needs",
            features: [
              "Everything in Professional",
              "Custom Workflows",
              "Advanced Analytics",
              "Validation Package",
              "Unlimited Users",
              "Dedicated Account Manager",
              "Unlimited Storage",
              "Custom Integrations",
              "On-premise Option",
            ],
            cta: "Contact Sales",
            popular: false,
          },
        ].map((plan, i) => (
          <div
            key={i}
            className={`relative rounded-2xl border ${
              plan.popular ? "border-[#3882f6]" : "border-gray-200"
            } bg-white p-8 shadow-sm`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#3882f6] px-4 py-1 text-sm font-semibold text-white">
                Most Popular
              </div>
            )}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.price !== "Custom" && <span className="ml-1 text-gray-600">/month</span>}
              </div>
              <p className="mt-2 text-gray-600">{plan.description}</p>
            </div>
            <ul className="mb-8 space-y-4">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start">
                  <Check className="mr-3 h-5 w-5 shrink-0 text-[#3882f6]" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`w-full rounded-full py-6 text-lg font-semibold ${
                plan.popular
                  ? "bg-[#3882f6] text-white hover:bg-blue-600"
                  : "bg-white text-[#3882f6] hover:bg-gray-50 border border-[#3882f6]"
              }`}
              size="lg"
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-2xl bg-gray-50 p-12">
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              question: "Do you offer a free trial?",
              answer:
                "Yes, we offer a 14-day free trial on our Starter and Professional plans. No credit card required.",
            },
            {
              question: "Can I change plans later?",
              answer:
                "You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
            },
            {
              question: "Is there a setup fee?",
              answer: "No, there are no hidden fees. The price you see is what you pay.",
            },
            {
              question: "Do you offer discounts for annual billing?",
              answer: "Yes, we offer a 15% discount when you choose annual billing.",
            },
            {
              question: "What kind of support do you provide?",
              answer:
                "All plans include email support. Professional plans include priority support, while Enterprise plans come with a dedicated account manager.",
            },
            {
              question: "Is my data secure?",
              answer:
                "Yes, we take security seriously. We use industry-standard encryption and comply with HIPAA and GDPR requirements.",
            },
          ].map((faq, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-2xl bg-[#3882f6] p-12 text-center text-white">
        <h2 className="mb-6 text-3xl font-bold">Still have questions?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
          Our team is ready to help you find the perfect plan for your needs
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            className="rounded-full bg-white px-8 py-6 text-lg font-semibold text-[#3882f6] shadow-lg hover:bg-gray-100"
            size="lg"
          >
            Contact Sales
          </Button>
          <Button
            className="rounded-full border border-white bg-transparent px-8 py-6 text-lg font-semibold text-white shadow-lg hover:bg-white/10"
            size="lg"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </div>
  )
}
