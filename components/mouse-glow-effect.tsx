"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface MouseGlowEffectProps {
  children: React.ReactNode
  color?: string
  size?: number
  opacity?: number
  blur?: number
}

export default function MouseGlowEffect({
  children,
  // color = "rgba(59, 130, 246, 0.5)",
  color = "rgba(237, 28, 37, 0.5)",
  size = 400,
  opacity = 0.15,
  blur = 100,
}: MouseGlowEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {isHovering && (
        <motion.div
          className="pointer-events-none absolute z-10"
          animate={{
            x: mousePosition.x - size / 2,
            y: mousePosition.y - size / 2,
            opacity: opacity,
            scale: isHovering ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            background: color,
            filter: `blur(${blur}px)`,
          }}
        />
      )}
      {children}
    </div>
  )
}

