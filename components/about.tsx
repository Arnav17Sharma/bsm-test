"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Award, Clock, Users, Sparkles } from "lucide-react"

export default function About() {
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

  const keyPoints = [
    {
      icon: <Clock className="h-5 w-5 text-red-500" />,
      text: "30+ years of industry experience",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-red-500" />,
      text: "Evolution from traditional to tech-driven distribution",
    },
    {
      icon: <Award className="h-5 w-5 text-red-500" />,
      text: "Data-backed inventory and sales decisions",
    },
    {
      icon: <Users className="h-5 w-5 text-red-500" />,
      text: "Seamless, responsive supply chain",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-red-500" />,
      text: "Fully optimized distribution network",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="absolute top-40 right-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-400/10 rounded-full filter blur-[100px]" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400 mb-2">
              <Users className="mr-1 h-3.5 w-3.5" />
              About BSM
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Bridging Brands with Efficient Market Distribution
            </h2>
            <p className="text-muted-foreground md:text-xl">
              BSM was founded to bridge the gap between brands and efficient market distribution. With deep expertise in
              logistics and commerce execution, we have built a system where every inventory movement and sales decision
              is backed by data-driven intelligence.
            </p>
            <div className="space-y-3 pt-2">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-md">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm border border-red-100 dark:border-red-900">
                    {point.icon}
                  </div>
                  <span>{point.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-red-600 group bg-blue-500 hover:bg-blue-600">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="relative lg:pl-10">
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/5 z-10"></div>
              <div className="aspect-square md:aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=800&width=600"
                  alt="BSM Operations"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-4 rounded-lg z-20 border border-blue-100 dark:border-blue-900">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    To build India's most advanced, tech-enabled brand distribution and logistics platform.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

