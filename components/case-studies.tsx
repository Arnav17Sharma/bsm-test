"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, TrendingUp } from "lucide-react"
import MouseGlowEffect from "@/components/mouse-glow-effect"
import Link from "next/link"

export default function CaseStudies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const caseStudies = [
    {
      title: "Sebamed India",
      description: "2,000% e-commerce sales growth (₹10L to ₹2 Cr/month) through optimized demand planning.",
      image: "/placeholder.svg?height=400&width=600",
      stats: {
        growth: "2,000%",
        timeframe: "12 months",
        channels: "4 marketplaces",
      },
    },
    {
      title: "Cetaphil India",
      description: "Strategic inventory optimization increased revenue from ₹10L to ₹90L/month.",
      image: "/placeholder.svg?height=400&width=600",
      stats: {
        growth: "900%",
        timeframe: "8 months",
        channels: "6 marketplaces",
      },
    },
  ]

  return (
    <section id="case-studies" className="py-20 relative">
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-blue-400/10 rounded-full filter blur-[100px]" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400 mb-4">
            <BarChart2 className="mr-1 h-3.5 w-3.5" />
            Client Results
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Success Stories</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
            See how we've helped leading brands achieve remarkable growth through optimized distribution
          </p>
        </div>

        <MouseGlowEffect color="rgba(59, 130, 246, 0.5)" size={500} opacity={0.2} blur={120}>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-6 md:grid-cols-2"
          >
            {caseStudies.map((study, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-blue-100 dark:border-blue-900">
                  <div className="aspect-video overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent z-10"></div>
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-md z-20 flex items-center">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      {study.stats.growth} Growth
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{study.description}</p>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-md">
                        <p className="text-xs text-muted-foreground">Timeframe</p>
                        <p className="font-medium text-sm">{study.stats.timeframe}</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-md">
                        <p className="text-xs text-muted-foreground">Channels</p>
                        <p className="font-medium text-sm">{study.stats.channels}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="group text-blue-600 dark:text-blue-400">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 flex justify-center">
          <Link href="/blogs">
            <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700">
              View All Case-Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        </MouseGlowEffect>
      </div>
    </section>
  )
}

