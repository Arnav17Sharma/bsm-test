"use client"
import Image from "next/image"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShoppingCart, Store, Zap, Package, BarChart3, Gift, TrendingUp, Truck, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import MouseGlowEffect from "@/components/mouse-glow-effect"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import CountUp from "./countup"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const metrics = [
    { label: "Warehouses", value: 3, suffix: "" },
    { label: "Cities Covered", value: 50, suffix: "+" },
    { label: "Average TAT", value: 48, suffix: "hr" },
  ]

  const services = [
    {
      icon: <Image src="/E-Commerce Distribution & Fulfillment 1.svg" alt="Service 1" width={300} height={300} />,
      title: "E-Commerce Distribution & Fulfillment",
      description: "Optimized logistics for Amazon, Flipkart, Blinkit, Zepto, and D2C platforms.",
      // bgClass: "bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20",
      bgClass: "bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20",
      href: "/services/ecommerce-distribution",
    },
    {
      icon: <Image src="/7709397_3721088.svg" alt="Service 1" width={300} height={300} />,
      title: "Retail & Modern Trade Distribution",
      description: "High-efficiency stock movement for supermarkets, pharmacies, and institutional sales.",
      bgClass: "bg-white dark:bg-slate-900",
      href: "/services/retail-distribution",
    },
    {
      icon: <Image src="/40467513_8841404 1.svg" alt="Service 1" width={300} height={300} />,
      title: "Quick Commerce Execution",
      description: "Rapid inventory allocation for <10-minute delivery platforms.",
      bgClass: "bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20",
      href: "/services/quick-commerce",
    },
    {
      icon: <Image src="/82648727_9950252.svg" alt="Service 1" width={300} height={300} />,
      title: "Super Stockist & C&F Services",
      description: "High-speed, cost-efficient product distribution across regions.",
      bgClass: "bg-white dark:bg-slate-900",
      href: "/services/stockist-services",
    },
    {
      icon: <Image src="/service5.png" alt="Service 1" width={300} height={300} />,
      title: "Strategic Pricing & Inventory Management",
      description: "Optimized stock levels and revenue-maximizing pricing strategies.",
      bgClass: "bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20",
      href: "/services/pricing-inventory",
    },
    {
      icon: <Image src="/19472297_6106297 1.svg" alt="Service 1" width={300} height={300} />,
      title: "Customized Kitting & Bundling Solutions",
      description: "Product packaging strategies to boost average order value (AOV).",
      bgClass: "bg-white dark:bg-slate-900",
      href: "/services/kitting-bundling",
    },
  ]

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

  return (
    <section id="services" className="px-20 py-20 relative"  style={{boxShadow: "0px -15px 10px rgba(0, 0, 0, 0.4)"}}>
      <div className="absolute top-40 right-0 w-72 h-72" />
      <div className="absolute bottom-20 left-0 w-80 h-80" />
      {/* <GridBackground gridSize={80} fadeDirection="bottom"/> */}

      {/* <div className="flex justify-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900">
            <Truck className="h-4 w-4 text-red-500" />
            <span className="text-sm text-red-500">Nationwide Distribution Network</span>
          </div>
      </div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Experience Our Services</h2> */}
      <div className="flex flex-col items-center justify-center text-center z-0">
          <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xl text-red-600 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400 mb-4">
            <Truck className="mr-1 h-3.5 w-3.5" />
            Nationwide Distribution Network
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Serving Brands Across India with Lightning Fast Fulfillment</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
          Built for Nationwide Reach. Engineered for Last-Mile Precision.
          </p>
        </div>

        <div className="my-12">
        <div className="flex" >
          <div className="w-8/12 flex" style={{justifyContent: "right"}}>
            <MapWithTooltip/>
          </div>
          {/* Metrics Counter Section */}
          <motion.div
            variants={itemVariants}
            className="w-4/12 flex flex-col justify-left gap-10 ml-20"
          >
            <div className="flex h-[auto] w-[340px] flex-col items-center justify-center rounded-xl bg-white dark:bg-slate-900 p-4 shadow-lg transition-all border border-blue-100 dark:border-blue-900">
              <img src="/locations_3452143.png" alt="Office Icon" className="h-12 w-12" />
              <h3 className="mt-2 text-center font-medium">Delhi, Head Office (2 Facilities)</h3>
              <h3 className="mb-4 text-center font-medium">Mumbai (1 Facility)</h3>
            </div>
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="flex h-[auto] w-[340px] flex-col items-center justify-center rounded-xl bg-white dark:bg-slate-900 p-4 shadow-lg transition-all border border-blue-100 dark:border-blue-900"
              >
                <CountUp
                  end={metric.value}
                  suffix={metric.suffix}
                  className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 block mb-2"
                />
                <span className="text-md text-muted-foreground mt-3 font-bold mx-2 whitespace-normal">
                  {metric.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <SectionDivider />
      <div className="container px-4 md:px-6 relative z-10 mt-10">
        
        <div className="flex flex-col items-center justify-center text-center z-0">
          <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400 mb-4">
            <TrendingUp className="mr-1 h-3.5 w-3.5" />
            Discover Our Offerings
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Experience Our Services</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
            Comprehensive distribution and fulfillment solutions powered by technology and data
          </p>
        </div>

        <MouseGlowEffect color="rgba(59, 130, 246, 0.5)" size={500} opacity={.2} blur={40}>
        {/* <MouseGlowEffect color="rgba(237, 28, 36, 0.5)" size={500} opacity={0.2} blur={120}> */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link href={service.href} className="block">
                  <Card
                    className={`h-[500px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-blue-100 dark:border-blue-900`}
                  >
                    <CardHeader className="pb-2 pt-5">
                      <div className="h-[260px] mb-2 flex items-center justify-center">
                          {service.icon}
                      </div>
                      <div className="h-[20px]"></div>
                      <CardTitle className="h-[40px] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 ">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="h-[80px] ">
                      <CardDescription className="text-base">{service.description}</CardDescription>

                      <div className="mt-4 pt-4 border-t border-blue-100 dark:border-blue-900/50 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <ShieldCheck className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-xs text-muted-foreground">99.9% Fulfillment Accuracy</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </MouseGlowEffect>


      </div>
    </section>
  )
}

import MapWithTooltip from "./MapWithTooltip"
import GridBackground from "./grid-background"

