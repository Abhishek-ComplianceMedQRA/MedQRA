import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Logo from "@/public/favicon-transparent.png"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  
  title: "ComplianceMedQRA - #1 Compliance Management Software for Medical Device Companies",
  description:
    "Streamline your regulatory compliance process with ComplianceMedQRA's comprehensive platform for medical device companies.",
  keywords: "compliance management, compliancemedqra, medqra, MedQra, MedQRA, AI medqra, medical device software, regulatory compliance, quality risk assessment, QRA software, medical device companies, compliance solutions, risk management, quality assurance, regulatory affairs, medical device compliance software, QRA software for medical devices, medical device regulatory compliance, FDA compliance software, ISO 13485 compliance, medical device risk assessment, quality risk management software, medical device QMS software, medical device compliance solutions, regulatory compliance platform, medical device quality management, compliance management system, medical device documentation software, risk assessment tools, medical device validation software, compliance tracking software, medical device audit software, quality management system, medical device regulatory software, compliance automation tools, medical device industry software, regulatory affairs management, quality assurance software, medical device compliance tracking, risk management platform, medical device documentation management, compliance workflow software, medical device quality control, regulatory compliance automation, medical device compliance monitoring",
  authors: [{ name: "ComplianceMedQRA" }],
  creator: "ComplianceMedQRA",
  publisher: "ComplianceMedQRA",
  icons: {
    icon: '/favicon-transparent.png',
    apple: '/favicon-transparent.png',
  },
  openGraph: {
    title: "ComplianceMedQRA - Compliance Management Software for Medical Device Companies",
    description:
      "Streamline your regulatory compliance process with ComplianceMedQRA's comprehensive platform for medical device companies.",
    url: "https://www.compliancemedqra.net",
    siteName: "ComplianceMedQRA"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={false} 
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}