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
    { name: "Sebamed", logo: "/brands/sebamed.png" },
    { name: "Cetaphil", logo: "/brands/cetaphil.jpg" },
    { name: "Bioderma", logo: "/brands/bioderma-logo-png_seeklogo-19622.png" },
    { name: "Mothercare", logo: "/brands/mothercare-logo-png_seeklogo-288761.png" },
    { name: "Mustela", logo: "/brands/mustela-logo-png_seeklogo-321456.png" },
    { name: "Indus Valley", logo: "/brands/logo1_69d92ab8-7d35-4ff9-9322-d439be2dca55.webp" },
    { name: "Mother Sparsh", logo: "/brands/new_logo_e3f4d18e-a9c0-43d9-b91a-5a1c154b1b93_1.webp" },
    { name: "Trisa", logo: "/brands/trisa-logo-png_seeklogo-213651.png" },
    { name: "Pigeon", logo: "/brands/pigeon6167.logowik.com.webp" },
    { name: "Nuby", logo: "/brands/610794ebb92262134eef8e0bf0b54ea3.webp" },
    { name: "Chicco", logo: "/brands/Chicco-Logo.jpg" },
    { name: "Philips Avents", logo: "/brands/philips-avent-logo-png_seeklogo-108451.png" },
    { name: "Lavazza", logo: "/brands/lavazza-logo.svg" },
    { name: "Schwabe", logo: "/brands/images.jpeg" },
    { name: "Baby Forest", logo: "/brands/babyforest-logo_256x192_99e9aafe-50e2-4814-bab1-1d0d70467836.webp" },
  ]

  const accounts = [
    { name: "Firstcry", logo: "/accounts/firstcry-logo-png_seeklogo-386678.png" },
    { name: "Amazon", logo: "/accounts/amazon.svg" },
    { name: "Zepto", logo: "/accounts/Logo_of_Zepto.png" },
    { name: "Apollo Pharmacy", logo: "/accounts/apollo.png" },
    { name: "Foxy", logo: "/accounts/foxy_logo.png" },
    { name: "Big Basket", logo: "/accounts/BigBasket_Logo.svg.png" },
    { name: "Purplle", logo: "/accounts/purplle5775.logowik.com.webp" },
    { name: "Tata1MG", logo: "/accounts/2a618394e93bbdf6c4515463df2651af.jpg" },
    { name: "Pharmeasy", logo: "/accounts/pharmeasy-logo-png_seeklogo-471933.png" },
    { name: "Truemeds", logo: "/accounts/48848.png" },
    { name: "Netmeds", logo: "/accounts/images.png" },
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Leading Brands & Accounts</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              We drive high-performance distribution for industry leaders, ensuring optimized sales and logistics
              execution.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full overflow-hidden">
            <InfiniteCarousel items={brands} speed={25} direction="left" className="py-4" />

            {/* <InfiniteCarousel items={[...brands].reverse()} speed={25} direction="right" className="py-4" /> */}
            <InfiniteCarousel items={accounts} speed={25} direction="right" className="py-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

