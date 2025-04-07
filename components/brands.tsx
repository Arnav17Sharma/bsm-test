"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import InfiniteCarousel from "@/components/infinite-carousel"

export default function Brands() {
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

  const brands = [
    { name: "Sebamed", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Cetaphil", logo: "/placeholder.svg?height=100&width=200" },
    { name: "USV India", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Mother Sparsh", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Brand Five", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Brand Six", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Brand Seven", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Brand Eight", logo: "/placeholder.svg?height=100&width=200" },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Leading Brands</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              We drive high-performance distribution for industry leaders, ensuring optimized sales and logistics
              execution.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full overflow-hidden">
            <InfiniteCarousel items={brands} speed={30} direction="left" className="py-4" />

            <InfiniteCarousel items={[...brands].reverse()} speed={25} direction="right" className="py-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

