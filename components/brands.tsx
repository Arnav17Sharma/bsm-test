"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import InfiniteCarousel from "@/components/infinite-carousel"
import CountUp from "./countup"
import { AtSign, Pocket } from "lucide-react"

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
    { name: "Sebamed", logo: "/brands/Untitled design.png" },
    { name: "Cetaphil", logo: "/brands/cetaphil1.png" },
    { name: "Bioderma", logo: "/brands/bioderma-logo-png_seeklogo-196221.png" },
    { name: "Mothercare", logo: "/brands/mothercare-logo-png_seeklogo-288761.png" },
    { name: "Mustela", logo: "/brands/mustela-logo-png_seeklogo-321456.png" },
    { name: "Indus Valley", logo: "/brands/indus_valley.png" },
    { name: "Mother Sparsh", logo: "/brands/mother_sparsh_new.png" },
    { name: "Trisa", logo: "/brands/trisa-logo-png_seeklogo-2136511.png" },
    { name: "Pigeon", logo: "/brands/pigeon6167.logowik.com1.png" },
    { name: "Nuby", logo: "/brands/nuby.png" },
    { name: "Chicco", logo: "/brands/Chicco-Logo1.png" },
    { name: "Philips Avents", logo: "/brands/philips-avent-logo-png_seeklogo-1084511.png" },
    { name: "Lavazza", logo: "/brands/lavazza-logo.svg" },
    { name: "Schwabe", logo: "/brands/schwabe.png" },
    { name: "Baby Forest", logo: "/brands/babyforest-logo_256x192_99e9aafe-50e2-4814-bab1-1d0d70467836.png" },
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

  const metrics = [
    { label: "Brands Served", value: 120, suffix: "+" },
    { label: "Active Accounts", value: 350, suffix: "+" },
    { label: "Monthly Orders", value: 25000, suffix: "+" },
    { label: "Years of Experience", value: 30, suffix: "+" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/80 to-white dark:from-slate-900/80 dark:to-slate-950 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
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
          
          {/* Metrics Counter Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-16 w-full max-w-4xl mx-auto"
          >
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-blue-100 dark:border-blue-900 p-6 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CountUp
                  end={metric.value}
                  suffix={metric.suffix}
                  className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 block mb-2"
                />
                <span className="text-sm text-muted-foreground">{metric.label}</span>
              </div>
            ))}
          </motion.div>

          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900">
              <Pocket className="h-4 w-4 text-red-500" />
              <span className="text-sm text-red-500">Brands</span>
            </div>
        </div>

          {/* Static Brand Tiles */}
          <motion.div variants={itemVariants} className="w-full mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-blue-100 dark:border-blue-900 p-4 flex flex-col items-center justify-center h-32 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="object-contain mb-2" style={{width: "160px", height: "auto"}}/>
                  {/* <p className="text-sm font-medium">{brand.name}</p> */}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900">
              <AtSign className="h-4 w-4 text-red-500" />
              <span className="text-sm text-red-500">Accounts</span>
            </div>
        </div>
        {/* Static Brand Tiles */}
        <motion.div variants={itemVariants} className="w-full mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {accounts.map((brand, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-blue-100 dark:border-blue-900 p-4 flex flex-col items-center justify-center h-32 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="object-contain mb-2" style={{width: "140px", height: "auto"}}/>
                  {/* <p className="text-sm font-medium">{brand.name}</p> */}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full overflow-hidden">
            {/* <InfiniteCarousel items={brands} speed={30} direction="left" className="py-4" />
            <InfiniteCarousel items={[...brands].reverse()} speed={25} direction="right" className="py-4" /> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
