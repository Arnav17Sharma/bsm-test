"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowRight, BarChart3, Package, Truck, Zap, Database, LineChart } from "lucide-react"

interface InfiniteCarouselProps {
  items: {
    name: string
    logo: string
  }[]
  className?: string
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

export default function InfiniteCarousel2({
  items,
  className,
  speed = 20,
  direction = "left",
  pauseOnHover = true,
}: InfiniteCarouselProps) {
  const [duplicatedItems, setDuplicatedItems] = useState<typeof items>([])
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Duplicate items to create seamless loop
    setDuplicatedItems([...items, ...items, ...items])
  }, [items])

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth / 3)
    }
  }, [duplicatedItems])

  const getAnimationProps = () => {
    const baseX = direction === "left" ? [0, -width] : [-width, 0]

    return {
      x: baseX,
      transition: {
        x: {
          duration: speed,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
          ease: "linear",
          ...(pauseOnHover && hovering ? { paused: true } : {}),
        },
      },
    }
  }

  return (
    <div
      className={cn("overflow-hidden relative", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.div ref={carouselRef} className="flex" animate={getAnimationProps()}>
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex-shrink-0 px-8 py-4"
            style={{ minWidth: `${100 / (duplicatedItems.length / 3)}%` }}
          >

            <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
            className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-xl bg-white dark:bg-slate-900 p-4 shadow-lg transition-all border border-blue-100 dark:border-blue-900"
            >
                <BarChart3 className="h-10 w-10 text-blue-500" />
                <h3 className="mt-2 text-center font-medium">AI-Driven Forecasting</h3>
            </motion.div>
          </div>
         ))}
      </motion.div>
    </div>
  )
}

