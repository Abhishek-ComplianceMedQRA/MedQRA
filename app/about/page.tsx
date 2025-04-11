import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">About ComplianceMedQRA</h1>
        <p className="mx-auto max-w-3xl text-xl text-gray-600">
          We're on a mission to simplify regulatory compliance for medical device companies.
        </p>
      </div>

      <div className="mb-20 grid gap-16 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Story</h2>
          <p className="mb-4 text-lg text-gray-600">
            Founded in 2018, ComplianceMedQRA was born out of the frustration experienced by our founders while
            navigating the complex regulatory landscape in the medical device industry.
          </p>
          <p className="mb-4 text-lg text-gray-600">
            After years of struggling with fragmented tools and manual processes, we set out to create a comprehensive
            solution that would streamline compliance management and help companies bring their life-saving products to
            market faster.
          </p>
          <p className="text-lg text-gray-600">
            Today, we're proud to serve over 500 companies worldwide, from startups to established enterprises, all
            focused on delivering safe and effective medical devices to patients.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-80 w-full rounded-xl bg-gray-200"></div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Patient Safety First",
              description:
                "We believe that regulatory compliance is ultimately about ensuring patient safety. This guides everything we do.",
            },
            {
              title: "Simplify Complexity",
              description:
                "We transform complex regulatory requirements into intuitive workflows that make compliance accessible.",
            },
            {
              title: "Continuous Innovation",
              description:
                "We constantly evolve our platform to address emerging regulations and incorporate customer feedback.",
            },
          ].map((value, i) => (
            <div key={i} className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <div className="h-6 w-6 rounded-full bg-[#3882f6]"></div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Leadership Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Dr. Sarah Chen",
              role: "CEO & Co-Founder",
              bio: "Former FDA regulatory consultant with 15+ years of experience in the medical device industry.",
            },
            {
              name: "Michael Rodriguez",
              role: "CTO & Co-Founder",
              bio: "Software engineer with a background in healthcare IT and secure systems development.",
            },
            {
              name: "Jennifer Park",
              role: "Chief Compliance Officer",
              bio: "Certified quality management professional with expertise in global regulatory frameworks.",
            },
          ].map((person, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 rounded-full bg-gray-200"></div>
              <h3 className="mb-1 text-xl font-semibold text-gray-900">{person.name}</h3>
              <p className="mb-3 text-[#3882f6]">{person.role}</p>
              <p className="text-gray-600">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-[#3882f6] p-12 text-center text-white">
        <h2 className="mb-6 text-3xl font-bold">Ready to simplify your compliance journey?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
          Join hundreds of medical device companies that trust ComplianceMedQRA
        </p>
        <Button
          className="rounded-full bg-white px-8 py-6 text-lg font-semibold text-[#3882f6] shadow-lg hover:bg-gray-100"
          size="lg"
        >
          Book your demo
        </Button>
      </div>
    </div>
  )
}
