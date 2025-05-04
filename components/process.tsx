"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { ClipboardList, BarChart, Warehouse, PackageCheck, TrendingUp, Lightbulb } from "lucide-react"
import Image from "next/image";

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [particles, setParticles] = useState<{ x: number; y: number; id: number }[]>([])

  // Mouse follower spring physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      mouseX.set(clientX)
      mouseY.set(clientY)
      setMousePosition({ x: clientX, y: clientY })
    }

    const handleClick = (e: MouseEvent) => {
      // Create particles on click
      const { clientX, clientY } = e
      setClicked(true)
      setTimeout(() => setClicked(false), 300)

      // Add particles
      const newParticles = Array.from({ length: 8 }).map((_, i) => ({
        x: clientX,
        y: clientY,
        id: Date.now() + i,
      }))

      setParticles((prev) => [...prev, ...newParticles])

      // Remove particles after animation
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)))
      }, 1000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
    }
  }, [mouseX, mouseY])

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
      illustration: (
        <svg
          width="200"
          height="160"
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <rect x="40" y="20" width="120" height="120" rx="8" fill="#EBF5FF" />
          <rect x="60" y="40" width="80" height="10" rx="2" fill="#BFDBFE" />
          <rect x="60" y="60" width="80" height="10" rx="2" fill="#BFDBFE" />
          <rect x="60" y="80" width="40" height="10" rx="2" fill="#BFDBFE" />
          <circle cx="140" cy="50" r="20" fill="#3B82F6" fillOpacity="0.2" />
          <path d="M140 40V60M130 50H150" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M70 110C70 104.477 74.4772 100 80 100H120C125.523 100 130 104.477 130 110V110C130 115.523 125.523 120 120 120H80C74.4772 120 70 115.523 70 110V110Z"
            fill="#3B82F6"
            fillOpacity="0.2"
          />
          <path
            d="M85 110L95 115L115 105"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      src: "/12079905_4912630 1.svg"
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      title: "Demand Forecasting & Inventory Planning",
      description: "Optimized stock allocation to prevent shortages and excess stock.",
      illustration: (
        <svg
          width="200"
          height="160"
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <rect x="30" y="30" width="140" height="100" rx="8" fill="#EBF5FF" />
          <rect x="50" y="110" width="20" height="40" rx="2" transform="rotate(-90 50 110)" fill="#93C5FD" />
          <rect x="50" y="90" width="20" height="60" rx="2" transform="rotate(-90 50 90)" fill="#60A5FA" />
          <rect x="50" y="70" width="20" height="30" rx="2" transform="rotate(-90 50 70)" fill="#3B82F6" />
          <rect x="50" y="50" width="20" height="50" rx="2" transform="rotate(-90 50 50)" fill="#2563EB" />
          <path
            d="M50 110L70 90L90 100L110 70L130 50"
            stroke="#ED1C24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="70" cy="90" r="4" fill="#ED1C24" />
          <circle cx="90" cy="100" r="4" fill="#ED1C24" />
          <circle cx="110" cy="70" r="4" fill="#ED1C24" />
          <circle cx="130" cy="50" r="4" fill="#ED1C24" />
        </svg>
      ),
      src: "/133782181_10191041.svg?width=200height=160"
    },
    {
      icon: <Warehouse className="h-10 w-10 text-blue-500" />,
      title: "Multi-Warehouse Distribution",
      description: "Efficient inventory movement across key logistics hubs.",
      illustration: (
        <svg
          width="200"
          height="160"
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path d="M40 110H70V60L55 40L40 60V110Z" fill="#BFDBFE" />
          <rect x="50" y="80" width="10" height="15" fill="#3B82F6" fillOpacity="0.3" />
          <path d="M85 110H115V60L100 40L85 60V110Z" fill="#93C5FD" />
          <rect x="95" y="80" width="10" height="15" fill="#3B82F6" fillOpacity="0.3" />
          <path d="M130 110H160V60L145 40L130 60V110Z" fill="#60A5FA" />
          <rect x="140" y="80" width="10" height="15" fill="#3B82F6" fillOpacity="0.3" />
          <path d="M30 110H170V120H30V110Z" fill="#3B82F6" fillOpacity="0.2" />
          <path d="M70 75L85 75" stroke="#3B82F6" strokeWidth="2" strokeDasharray="2 2" />
          <path d="M115 75L130 75" stroke="#3B82F6" strokeWidth="2" strokeDasharray="2 2" />
          <circle cx="77.5" cy="75" r="2.5" fill="#3B82F6" />
          <circle cx="122.5" cy="75" r="2.5" fill="#3B82F6" />
        </svg>
      ),
      src: "/Clip path group.svg?width=200height=160"
    },
    {
      icon: <PackageCheck className="h-10 w-10 text-blue-500" />,
      title: "Order Processing & Dispatch",
      description: "High-speed execution with accurate tracking and reporting.",
      illustration: (
        <svg
          width="200"
          height="160"
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <rect x="40" y="50" width="60" height="60" rx="4" fill="#BFDBFE" />
          <path d="M70 80L60 90L55 85" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="110" y="40" width="50" height="30" rx="4" fill="#93C5FD" />
          <rect x="120" y="50" width="30" height="10" rx="2" fill="#3B82F6" fillOpacity="0.3" />
          <rect x="110" y="80" width="50" height="30" rx="4" fill="#60A5FA" />
          <rect x="120" y="90" width="30" height="10" rx="2" fill="#3B82F6" fillOpacity="0.3" />
          <path d="M100 55H110" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          <path d="M100 95H110" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          <path d="M160 65V85" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          <path d="M150 75H170" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          <path d="M40 120H160" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
        </svg>
      ),
      src: "/40467513_8841404 1.svg?width=200height=160"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-500" />,
      title: "Sales Optimization & Continuous Improvement",
      description: "Data-driven decisions to maximize revenue and efficiency.",
      illustration: (
        <svg
          width="200"
          height="160"
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <rect x="30" y="40" width="140" height="80" rx="8" fill="#EBF5FF" />
          <path
            d="M50 100C50 100 60 70 80 70C100 70 100 90 120 90C140 90 150 60 150 60"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M50 80C50 80 60 60 80 60C100 60 110 80 120 80C130 80 150 50 150 50"
            stroke="#ED1C24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 4"
          />
          <circle cx="80" cy="70" r="5" fill="#3B82F6" />
          <circle cx="120" cy="90" r="5" fill="#3B82F6" />
          <circle cx="80" cy="60" r="3" fill="#ED1C24" />
          <circle cx="120" cy="80" r="3" fill="#ED1C24" />
          <path d="M40 110L160 110" stroke="#3B82F6" strokeOpacity="0.3" strokeWidth="1" />
          <path d="M40 40L40 110" stroke="#3B82F6" strokeOpacity="0.3" strokeWidth="1" />
        </svg>
      ),
      src: "/33756670_8104936.svg?width=200height=160"
    },
  ]

  return (
    <section id="process" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-muted/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-muted/30 to-transparent" />

      {/* Mouse follower effect */}
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-blue-500/10 pointer-events-none z-50 mix-blend-plus-lighter"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicked ? 1.5 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Click particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-red-500 pointer-events-none z-50"
          style={{
            x: particle.x,
            y: particle.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 1.5],
            opacity: [1, 0],
            x: [particle.x, particle.x + (Math.random() - 0.5) * 100],
            y: [particle.y, particle.y + (Math.random() - 0.5) * 100],
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-400 mb-4">
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
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`flex-1 text-center ${ index % 2 === 1 ? "md:text-left" : "md:text-right"}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="inline-block bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium px-2 py-1 rounded-md mb-2">
                  Step {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>

              <motion.div
                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 ring-4 ring-background"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-lg border border-blue-100 dark:border-blue-900"
                  whileHover={{ backgroundColor: "#f0f9ff" }}
                >
                  {step.icon}
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-full blur-md bg-blue-500/20"
                  whileHover={{ opacity: 0.8 }}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                ></motion.div>
              </motion.div>

              <motion.div
className={`flex-1 flex items-center justify-center ${
  index % 2 === 1 ? "md:justify-end" : "md:justify-start"
}`}                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Image src={step.src} alt="" width={350} height={350}/>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="white" />
            </svg>
            <span className="font-medium">See our process in action</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
