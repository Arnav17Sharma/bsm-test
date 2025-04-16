"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Package, Truck, Zap, Database, LineChart } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"
import GridBackground from "@/components/grid-background"
import InfiniteCarousel2 from "@/components/infi2"

export default function Hero() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const boxes = [
    { name: "Sebamed", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Cetaphil", logo: "/placeholder.svg?height=100&width=200" },
    { name: "USV India", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Mother Sparsh", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Brand Five", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Brand Six", logo: "/placeholder.svg?height=100&width=200" },
  ]

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-32 md:py-32" style={{backgroundImage: "/bghero.jpg?width=auto;height=auto", }}>
      {/* <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-32 md:py-32" style={{ backgroundImage: `url('/bghero.jpg?width=auto&height=auto')` }}></section> */}
        
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-h-full min-w-full object-cover"
          style={{ filter: "brightness(0.7)" }}
        >
          <source
            src="https://videos.pexels.com/video-files/7687999/7687999-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white-900/50 via-white-900/40 to-background z-10"></div>
      </div> */}

      <GridBackground className="opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />

      <div className="absolute top-40 left-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-[100px] animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/20 rounded-full filter blur-[100px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container relative z-20 px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:gap-16 text-center"
        >
          <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400 mb-4"
              >
                <Zap className="mr-1 h-3.5 w-3.5" />
                Next-Gen Distribution
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
              >
                Tech-Enabled Fulfillment
              </motion.h1>
              <motion.p variants={itemVariants} className="text-muted-foreground md:text-xl">
                Optimizing omnichannel commerce with data-driven inventory management, demand forecasting, and precision
                logistics.
              </motion.p>
            </div>
            <motion.div variants={itemVariants} className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-red-600 group bg-blue-500 hover:bg-blue-600">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 dark:border-blue-800">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <section className="">
            <div className="container px-4 md:px-6">
                <motion.div className="w-full overflow-hidden">
                  <InfiniteCarousel2 items={boxes} speed={0} direction="left" className="py-4" />
                </motion.div>
            </div>
          </section>


          {/* <motion.div variants={itemVariants} className="flex items-center justify-center">
            <div className="w-[500px]">
              <div className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl"></div>
              <div className="inset-0 flex items-center justify-center">
                <div className="">
                <motion.div className="w-full overflow-hidden">
                  <InfiniteCarousel2 items={[]} speed={30} direction="left" className="py-4" />
                </motion.div> */}
                  {/* <motion.div
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                    className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-xl bg-white dark:bg-slate-900 p-4 shadow-lg transition-all border border-blue-100 dark:border-blue-900"
                  >
                    <BarChart3 className="h-10 w-10 text-blue-500" />
                    <h3 className="mt-2 text-center font-medium">AI-Driven Forecasting</h3>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                    className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-xl bg-white dark:bg-slate-900 p-4 shadow-lg transition-all border border-blue-100 dark:border-blue-900"
                  >
                    <Truck className="h-10 w-10 text-blue-500" />
                    <h3 className="mt-2 text-center font-medium">Dynamic Order Routing</h3>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                    className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-xl bg-white dark:bg-slate-900 p-4 shadow-lg transition-all border border-blue-100 dark:border-blue-900"
                  >
                    <Package className="h-10 w-10 text-blue-500" />
                    <h3 className="mt-2 text-center font-medium">Real-Time Inventory</h3>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                    className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-xl bg-white dark:bg-slate-900 p-4 shadow-lg transition-all border border-blue-100 dark:border-blue-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <h3 className="mt-2 text-center font-medium">Pricing Optimization</h3>
                  </motion.div> */}
                {/* </div>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}

