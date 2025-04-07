import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Award, Clock, Users, Sparkles, Building, Briefcase } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"

export default function AboutPage() {
  const keyPoints = [
    {
      icon: <Clock className="h-5 w-5 text-blue-500" />,
      text: "30+ years of industry experience",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-blue-500" />,
      text: "Evolution from traditional to tech-driven distribution",
    },
    {
      icon: <Award className="h-5 w-5 text-blue-500" />,
      text: "Data-backed inventory and sales decisions",
    },
    {
      icon: <Users className="h-5 w-5 text-blue-500" />,
      text: "Seamless, responsive supply chain",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-blue-500" />,
      text: "Fully optimized distribution network",
    },
  ]

  const industries = [
    "Personal Care & Beauty",
    "Pharmaceuticals & Healthcare",
    "Packaged Foods & Beverages",
    "Consumer Electronics & Lifestyle Products",
  ]

  const team = [
    {
      name: "Samarth Jain",
      position: "Founder & CEO",
      bio: "30+ years of experience in distribution and logistics across India.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Rahul Sharma",
      position: "Chief Operations Officer",
      bio: "Expert in supply chain optimization and warehouse management.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Priya Patel",
      position: "Head of Technology",
      bio: "Leading BSM's digital transformation and data analytics initiatives.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const timeline = [
    {
      year: "1992",
      title: "Company Founded",
      description: "BSM was established as a traditional distribution company in Delhi.",
      icon: <Building className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2001",
      title: "Expansion to Modern Trade",
      description: "Expanded operations to include modern retail chains and supermarkets.",
      icon: <Store className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2008",
      title: "Regional Expansion",
      description: "Established regional offices in Mumbai and Bangalore.",
      icon: <MapPin className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2015",
      title: "E-Commerce Integration",
      description: "Launched specialized e-commerce fulfillment services.",
      icon: <ShoppingCart className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2018",
      title: "Technology Transformation",
      description: "Implemented AI-driven inventory management and forecasting systems.",
      icon: <Cpu className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2020",
      title: "Quick Commerce Solutions",
      description: "Pioneered specialized fulfillment for 10-minute delivery platforms.",
      icon: <Zap className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2023",
      title: "Nationwide Network Completion",
      description: "Achieved comprehensive coverage across all major Indian markets.",
      icon: <Globe className="h-5 w-5 text-blue-500" />,
    },
  ]

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-30" fadeDirection="top" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
              About BSM
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              Bridging the gap between brands and efficient market distribution
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                BSM was founded to bridge the gap between brands and efficient market distribution. With deep expertise
                in logistics and commerce execution, we have built a system where every inventory movement and sales
                decision is backed by data-driven intelligence. Our operations blend traditional efficiency with modern
                technology to create a seamless, responsive supply chain.
              </p>
              <div className="space-y-3 pt-2">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-md">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm border border-blue-100 dark:border-blue-900">
                      {point.icon}
                    </div>
                    <span>{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-red-500/10 to-transparent z-10"></div>
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="BSM Operations"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-20" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold">Our Journey</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              Three decades of evolution and growth in distribution excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500 to-red-600 transform -translate-x-1/2 hidden md:block"></div>

            {/* Timeline events */}
            <div className="space-y-12 relative">
              {timeline.map((event, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 text-center ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-red-600 text-white text-xs font-medium px-2 py-1 rounded-md mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/10 to-red-500/10 ring-4 ring-background">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-lg border border-blue-100 dark:border-blue-900">
                      {event.icon}
                    </div>
                    <div className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-blue-500/20 to-red-500/20"></div>
                  </div>

                  <div className="flex-1 text-center md:hidden">
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-red-600 text-white text-xs font-medium px-2 py-1 rounded-md mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-20" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Mission & Vision</h2>
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-950/30 dark:to-red-950/20 rounded-xl border border-blue-100 dark:border-blue-900">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Building className="h-5 w-5 text-blue-500" />
                    Mission
                  </h3>
                  <p>To build India's most advanced, tech-enabled brand distribution and logistics platform.</p>
                </div>
                <div className="p-6 bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-950/30 dark:to-red-950/20 rounded-xl border border-blue-100 dark:border-blue-900">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-blue-500" />
                    Vision
                  </h3>
                  <p>
                    To create a fully optimized, data-powered distribution network that maximizes sales, minimizes
                    inefficiencies, and accelerates brand growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Industries We Serve</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-950/30 dark:to-red-950/20 rounded-xl border border-blue-100 dark:border-blue-900"
                  >
                    <h3 className="font-semibold">{industry}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-20" fadeDirection="bottom" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold">Our Leadership Team</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              Meet the experts behind BSM's innovative distribution solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-md border border-blue-100 dark:border-blue-900"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 mb-2">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-red-600/10">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Distribution?</h2>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

import { Store, MapPin, ShoppingCart, Zap, Cpu, Globe } from "lucide-react"

