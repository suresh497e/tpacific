import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { withSentenceSplitting } from "@/lib/with-sentence-splitting"
import SentenceFormatter from "@/components/sentence-formatter"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Transpacific Immigration Services",
  description: "Your trusted partner for global education and visa consultancy",
    generator: 'v0.dev'
}

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xxxxxxx.css" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SentenceFormatter />
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default withSentenceSplitting(RootLayout)
