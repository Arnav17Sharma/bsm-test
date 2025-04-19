"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
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

  const videos = [
    "/1.mp4",
    "/4477613-hd_1920_1080_30fps.mp4",
    "/5738747-hd_1920_1080_30fps.mp4",
  ]

  const [currentVideo, setCurrentVideo] = useState(0)
  const [prevVideo, setPrevVideo] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevVideo(currentVideo)
      setCurrentVideo((prev) => (prev + 1) % videos.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [currentVideo])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-32 md:py-32">
      {/* Smooth video crossfade layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideo ? "opacity-100" : "opacity-0"
            }`}
            style={{ filter: "brightness(0.7)" }}
          />
        ))}
        </div>

      <GridBackground className="opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />

      <div className="absolute top-40 left-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-[100px] animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/30 rounded-full filter blur-[100px] animate-pulse"
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
  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gradient-to-r from-blue-600 to-red-600 group text-white" 
  style={{
    textShadow: "0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)",
  }}
>
  Tech-Enabled Distribution
</motion.h1>
              <motion.p variants={itemVariants} className="text-white md:text-xl">
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

          <section>
            <div className="container px-4 md:px-6">
              <motion.div className="w-full overflow-hidden">
                <InfiniteCarousel2 items={boxes} speed={0} direction="left" className="py-4" />
              </motion.div>
            </div>
          </section>
        </motion.div>
      </div>
    </section>
  )
}
