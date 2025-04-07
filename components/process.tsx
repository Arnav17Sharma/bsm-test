"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ClipboardList, BarChart, Warehouse, PackageCheck, TrendingUp, Lightbulb } from "lucide-react"

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-blue-500" />,
      title: "Onboarding & Strategy Planning",
      description: "Understanding brand goals, target markets, and distribution requirements.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      title: "Demand Forecasting & Inventory Planning",
      description: "Optimized stock allocation to prevent shortages and excess stock.",
    },
    {
      icon: <Warehouse className="h-10 w-10 text-blue-500" />,
      title: "Multi-Warehouse Distribution",
      description: "Efficient inventory movement across key logistics hubs.",
    },
    {
      icon: <PackageCheck className="h-10 w-10 text-blue-500" />,
      title: "Order Processing & Dispatch",
      description: "High-speed execution with accurate tracking and reporting.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-500" />,
      title: "Sales Optimization & Continuous Improvement",
      description: "Data-driven decisions to maximize revenue and efficiency.",
    },
  ]

  return (
    <section id="process" className="py-20 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-40" />
      <div className="absolute bottom-0 left-0 w-full h-40" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400 mb-4">
            <Lightbulb className="mr-1 h-3.5 w-3.5" />
            Our Approach
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
            Our streamlined process ensures efficient distribution and maximum results for your brand
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-400 hidden md:block"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-12 md:mb-24 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-medium px-2 py-1 rounded-md mb-2">
                  Step {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 ring-4 ring-background">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-lg border border-blue-100 dark:border-blue-900">
                  {step.icon}
                </div>
                <div className="absolute inset-0 rounded-full blur-md bg-blue-500/20"></div>
              </div>

              <div className="flex-1 text-center md:text-right">
                {index % 2 === 1 && (
                  <>
                    <div className="inline-block bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium px-2 py-1 rounded-md mb-2 md:hidden">
                      Step {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 md:hidden">{step.title}</h3>
                    <p className="text-muted-foreground md:hidden">{step.description}</p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

