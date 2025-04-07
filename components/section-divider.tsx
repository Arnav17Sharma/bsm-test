"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionDividerProps {
  className?: string
}

export default function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div className={cn("w-full flex flex-col items-center my-0 md:my-0 relative", className)}>
      <div className="absolute inset-0 flex items-center justify-center">
      </div>
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        whileInView={{ opacity: 1, width: "90%" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="h-px bg-gradient-to-r from-transparent via-red-500/80 to-transparent relative z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-12 h-2 bg-gradient-to-r from-red-400 via-red-500 to-red-400 rounded-full mt-[-4px] relative z-10 shadow-[0_0_10px_2px_rgba(237,28,36,0.5)]"
      />
    </div>
  )
}

