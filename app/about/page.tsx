"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Award, Clock, Users, Sparkles, Building, Briefcase } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import { motion } from "framer-motion"
import Footer from '@/components/footer'
import { useState, useRef, useEffect } from "react"

export default function AboutPage() {
  // Internal MagnetLines component
  const MagnetLines = ({
    rows = 9,
    columns = 9,
    containerSize = "80vmin",
    lineColor = "#efefef",
    lineWidth = "1vmin",
    lineHeight = "6vmin",
    baseAngle = -10,
    className = "",
    style = {},
  }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const container = containerRef.current
      if (!container) return

      const items = container.querySelectorAll("span")

      const onPointerMove = (pointer: { x: number; y: number }) => {
        items.forEach((item) => {
          const rect = item.getBoundingClientRect()
          const centerX = rect.x + rect.width / 2
          const centerY = rect.y + rect.height / 2

          const b = pointer.x - centerX
          const a = pointer.y - centerY
          const c = Math.sqrt(a * a + b * b) || 1
          const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1)

          item.style.setProperty("--rotate", `${r}deg`)
        })
      }

      const handlePointerMove = (e: PointerEvent) => {
        onPointerMove({ x: e.clientX, y: e.clientY })
      }

      window.addEventListener("pointermove", handlePointerMove)

      if (items.length) {
        const middleIndex = Math.floor(items.length / 2)
        const rect = items[middleIndex].getBoundingClientRect()
        onPointerMove({ x: rect.x, y: rect.y })
      }

      return () => {
        window.removeEventListener("pointermove", handlePointerMove)
      }
    }, [])

    const total = rows * columns
    const spans = Array.from({ length: total }, (_, i) => (
      <span
        key={i}
        className="block origin-center"
        style={
          {
            backgroundColor: lineColor,
            width: lineWidth,
            height: lineHeight,
            "--rotate": `${baseAngle}deg`,
            transform: "rotate(var(--rotate))",
            willChange: "transform",
          } as React.CSSProperties
        }
      />
    ))

    return (
      <div
        ref={containerRef}
        className={`grid place-items-center ${className}`}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          width: containerSize,
          height: containerSize,
          ...style,
        }}
      >
        {spans}
      </div>
    )
  }
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
      name: "Mukesh Khandelwal",
      position: "Founder & Managing Partner",
      bio: "With over three decades of hands-on experience in distribution and supply chain management, Mukesh Kumar is the driving force behind BSM. A seasoned entrepreneur with a dual degree in commerce, he founded BSM with a vision to streamline logistics for modern retail. Under his leadership, BSM has grown into a trusted name in the industry, known for its reliability, scale, and operational excellence.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Samarth Khandelwal",
      position: "Director, E-Commerce",
      bio: "Samarth leads the e-commerce vertical at BSM, bringing a unique blend of investment acumen and operational insight. He began his career in private equity, working on high-impact deals before channeling his passion into building scalable supply chain systems. An MBA from MDI Gurgaon, Samarth plays a pivotal role in driving BSM’s digital transformation and pan-India growth across online retail channels.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarthak Khandelwal",
      position: "Director, Distribution Management",
      bio: "Sarthak brings deep experience in FMCG sales, having worked with leading companies like Godrej. An MBA from IMT Ghaziabad, he is instrumental in building and scaling BSM’s distribution network. His strong commercial acumen and ground-level understanding of retail operations drive execution strength across the organization.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const timeline = [
    {
      year: "1993",
      title: "The Foundation",
      description: "BSM was born in South Delhi, starting as a traditional distribution partner for legacy brands like Perfetti and Godrej. Built on trust, discipline, and strong market understanding, our roots run deep in retail logistics.",
      icon: <Building className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2000s",
      title: "Building the Base",
      description: "We steadily expanded our portfolio to 15+ brands, servicing leading FMCG brands and building a reputation for operational consistency and local market dominance.",
      icon: <Store className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2002",
      title: "Pioneer Partnerships",
      description: "We became one of the first distribution partners in India for global brands like Pigeon and 3M, playing a key role in launching and establishing them in the Indian market. These early bets defined our DNA — bold, brand-focused, and execution-obsessed.",
      icon: <MapPin className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2010",
      title: "Diversifying into Global Foods",
      description: "We ventured into premium food distribution, bringing international names like Real Thai, Nongshim, Hellmann’s, Lavazza Coffee, and Raavi Sauces to Indian retail shelves. This marked our foray into lifestyle-led categories and global retail partnerships.",
      icon: <ShoppingCart className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2002–2015",
      title: "India’s Baby Care Launchpad",
      description: "Over more than a decade, BSM emerged as the go-to distribution partner for every major baby care brand entering India. From Mustela, Buds Buddy, and Nuby to Philips Avent, Farlin, Mamaearth, and Baby Forest, we played a foundational role in launching and scaling these brands in India’s traditional trade. Our unmatched reach, retail intelligence, and execution made BSM synonymous with baby care.",
      icon: <ShoppingCart className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2015",
      title: "Transitioning for Tomorrow",
      description: "As India’s retail landscape evolved, so did we. BSM began modernizing its systems, adopting early tech-led tools and expanding into organized retail and general trade logistics.",
      icon: <ShoppingCart className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2017",
      title: "The eCommerce Pivot",
      description: "Recognizing the shift in consumer behavior, BSM transitioned into eCommerce fulfillment — servicing fast-growing brands across marketplaces and D2C channels. We embraced automation, real-time tracking, and agile warehousing.",
      icon: <Cpu className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2023",
      title: "Quick Commerce Ready",
      description: "With platforms like Blinkit and Zepto changing the game, BSM adapted to faster TATs and micro-fulfillment, becoming a trusted partner for Q-commerce operations across North India.",
      icon: <Zap className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2025",
      title: "National Expansion Begins",
      description: "BSM launches its Mumbai facility — marking our official entry into West India. With robust infrastructure and a tech-first approach, we’re building a truly pan-India eCommerce distribution network.",
      icon: <Globe className="h-5 w-5 text-blue-500" />,
    },
  ]

  

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-30" />
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
  {/* Background Lines */}
  <div className="absolute inset-0 opacity-30">
    <MagnetLines
      containerSize="100%"
      lineColor="#6366f1"
      lineWidth="0.5vmin"
      lineHeight="4vmin"
      rows={12}
      columns={12}
      baseAngle={-45}
    />
  </div>

  {/* Grid Background */}
  <div className="absolute inset-0 overflow-hidden">
    <GridBackground className="opacity-20" />
  </div>

  {/* Main Container */}
  <div className="container px-4 md:px-6 relative z-10">
    {/* Heading */}
    <div className="flex flex-col items-center justify-center text-center mb-12">
      <h2 className="text-3xl font-bold">Our Journey</h2>
      <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
        Three decades of evolution and growth in distribution excellence
      </p>
    </div>

    {/* Timeline Line */}
    <div className="relative">
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500 to-red-600 transform -translate-x-1/2 hidden md:block"
        initial={{ height: "0%" }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Timeline Events */}
      <motion.div
        className="space-y-16 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {timeline.map((event, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
          >
            {/* Text Content */}
            <motion.div
              className={`flex-1 text-center ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="inline-block bg-gradient-to-r from-blue-600 to-red-600 text-white text-xs font-medium px-2 py-1 rounded-md mb-2"
                whileHover={{ scale: 1.05 }}
              >
                {event.year}
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {event.title}
              </h3>

              <div className={`md:w-[40%] w-full mx-auto md:mx-0 px-4 md:px-0  ${index % 2 === 0 ? "md:float-right md:pl-20 text-right" : "md:float-left md:pr-20 text-left"}`}>
                <p className="text-sm sm:text-base text-muted-foreground transition-colors duration-300">
                  {event.description}
                </p>
              </div>
            </motion.div>

            {/* Icon Bubble */}
            <motion.div
              className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/10 to-red-500/10 ring-4 ring-background"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-lg border border-blue-100 dark:border-blue-900"
                whileHover={{ backgroundColor: "#f0f9ff" }}
              >
                {event.icon}
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-blue-500/20 to-red-500/20"
                whileHover={{ opacity: 0.8 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
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
          <GridBackground className="opacity-20" />
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
      <Footer />
    </main>
  )
}

import { Store, MapPin, ShoppingCart, Zap, Cpu, Globe } from "lucide-react"
