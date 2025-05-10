import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BSM - Tech-Enabled Distribution & Fulfillment",
  description:
    "Next-generation, tech-enabled distribution and fulfillment company, optimizing omnichannel commerce for brands.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="/mapdata.js"></script>
        <script src="/countrymap.js"></script>
        <link rel="stylesheet" href="/svgs.css" />
        <link rel="icon" href="/window_icon.png" type="image/x-icon" />
      </head>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'