"use client"

import { cn } from "@/lib/utils"

interface GridBackgroundProps {
  className?: string
  gridSize?: number
  lineColor?: string
  dotColor?: string
  dotSize?: number
  fadeDirection?: "top" | "bottom" | "both" | "none"
}

export default function GridBackground({
  className,
  gridSize = 50,
  // lineColor = "rgba(59, 130, 246, 0.4)",
  lineColor = "rgba(237, 28, 36, 0.2)",
  dotColor = "rgba(59, 130, 246, 0.25)",
  dotSize = .5,
  fadeDirection = "none",
}: GridBackgroundProps) {
  const getFadeStyle = () => {
    switch (fadeDirection) {
      case "top":
        return {
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
          backgroundClip: "content-box",
        }
      case "bottom":
        return {
          background: "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
          backgroundClip: "content-box",
        }
      case "both":
        return {
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100%)",
          backgroundClip: "content-box",
        }
      default:
        return {}
    }
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${lineColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: "center center",
          ...getFadeStyle(),
        }}
      />
      
    </div>
  )
}

