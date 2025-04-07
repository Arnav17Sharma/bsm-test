"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

// Define state data
const stateData = {
  Delhi: {
    name: "Delhi",
    warehouses: 3,
    partners: 15,
    coverage: "100%",
    isHQ: true,
  },
  Maharashtra: {
    name: "Maharashtra",
    warehouses: 5,
    partners: 42,
    coverage: "95%",
  },
  Karnataka: {
    name: "Karnataka",
    warehouses: 3,
    partners: 28,
    coverage: "90%",
  },
  "Tamil Nadu": {
    name: "Tamil Nadu",
    warehouses: 4,
    partners: 35,
    coverage: "92%",
  },
  Gujarat: {
    name: "Gujarat",
    warehouses: 3,
    partners: 25,
    coverage: "88%",
  },
  "Uttar Pradesh": {
    name: "Uttar Pradesh",
    warehouses: 4,
    partners: 30,
    coverage: "85%",
  },
  "West Bengal": {
    name: "West Bengal",
    warehouses: 2,
    partners: 18,
    coverage: "80%",
  },
  Telangana: {
    name: "Telangana",
    warehouses: 2,
    partners: 20,
    coverage: "85%",
  },
  Punjab: {
    name: "Punjab",
    warehouses: 1,
    partners: 12,
    coverage: "75%",
  },
  Rajasthan: {
    name: "Rajasthan",
    warehouses: 2,
    partners: 15,
    coverage: "70%",
  },
  "Andhra Pradesh": {
    name: "Andhra Pradesh",
    warehouses: 2,
    partners: 16,
    coverage: "78%",
  },
  Kerala: {
    name: "Kerala",
    warehouses: 1,
    partners: 10,
    coverage: "72%",
  },
  "Madhya Pradesh": {
    name: "Madhya Pradesh",
    warehouses: 2,
    partners: 14,
    coverage: "68%",
  },
  Haryana: {
    name: "Haryana",
    warehouses: 2,
    partners: 12,
    coverage: "82%",
  },
  Bihar: {
    name: "Bihar",
    warehouses: 1,
    partners: 8,
    coverage: "60%",
  },
  Chhattisgarh: {
    name: "Chhattisgarh",
    warehouses: 1,
    partners: 7,
    coverage: "65%",
  },
  Jharkhand: {
    name: "Jharkhand",
    warehouses: 1,
    partners: 6,
    coverage: "55%",
  },
  Assam: {
    name: "Assam",
    warehouses: 1,
    partners: 5,
    coverage: "50%",
  },
  Odisha: {
    name: "Odisha",
    warehouses: 1,
    partners: 8,
    coverage: "62%",
  },
  Uttarakhand: {
    name: "Uttarakhand",
    warehouses: 1,
    partners: 4,
    coverage: "58%",
  },
  "Himachal Pradesh": {
    name: "Himachal Pradesh",
    warehouses: 0,
    partners: 3,
    coverage: "45%",
  },
  Goa: {
    name: "Goa",
    warehouses: 0,
    partners: 2,
    coverage: "70%",
  },
}

export default function IndiaMap() {
  const [activeState, setActiveState] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const mapRef = useRef<HTMLDivElement>(null)

  const handleStateHover = (state: string, e: React.MouseEvent) => {
    if (stateData[state as keyof typeof stateData]) {
      setActiveState(state)

      // Calculate position relative to the map container
      if (mapRef.current) {
        const rect = mapRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setTooltipPosition({ x, y })
      }
    }
  }

  const handleStateLeave = () => {
    setActiveState(null)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto" ref={mapRef}>
      <div className="aspect-[4/3] md:aspect-[16/9] relative">
        {/* SVG Map of India */}
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))" }}
        >
          {/* This is a simplified representation - in a real implementation, you would use a detailed SVG map */}
          <g>
            {/* Map background */}
            <path
              d="M200,150 L300,100 L400,50 L500,75 L600,100 L650,150 L700,250 L720,350 L700,450 L650,550 L600,650 L500,700 L400,720 L300,680 L200,600 L150,500 L120,400 L150,300 L200,150 Z"
              fill="#a4c2db"
              stroke="#ffffff"
              strokeWidth="2"
              className="transition-colors duration-300"
            />

            {/* Delhi (HQ) - highlighted in red */}
            <path
              d="M380,320 L400,320 L400,340 L380,340 Z"
              fill="#ed1c24"
              stroke="#ffffff"
              strokeWidth="2"
              onMouseEnter={(e) => handleStateHover("Delhi", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-red-500"
            />

            {/* Maharashtra */}
            <path
              d="M300,450 L350,450 L350,500 L300,500 Z"
              fill={activeState === "Maharashtra" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Maharashtra", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Karnataka */}
            <path
              d="M300,500 L350,500 L350,550 L300,550 Z"
              fill={activeState === "Karnataka" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Karnataka", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Tamil Nadu */}
            <path
              d="M350,550 L400,550 L400,600 L350,600 Z"
              fill={activeState === "Tamil Nadu" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Tamil Nadu", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Gujarat */}
            <path
              d="M200,400 L250,400 L250,450 L200,450 Z"
              fill={activeState === "Gujarat" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Gujarat", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Uttar Pradesh */}
            <path
              d="M400,300 L500,300 L500,350 L400,350 Z"
              fill={activeState === "Uttar Pradesh" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Uttar Pradesh", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* West Bengal */}
            <path
              d="M550,350 L600,350 L600,400 L550,400 Z"
              fill={activeState === "West Bengal" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("West Bengal", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Telangana */}
            <path
              d="M400,450 L450,450 L450,500 L400,500 Z"
              fill={activeState === "Telangana" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Telangana", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Punjab */}
            <path
              d="M300,250 L350,250 L350,300 L300,300 Z"
              fill={activeState === "Punjab" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Punjab", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Rajasthan */}
            <path
              d="M250,300 L350,300 L350,350 L250,350 Z"
              fill={activeState === "Rajasthan" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Rajasthan", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Andhra Pradesh */}
            <path
              d="M400,500 L450,500 L450,550 L400,550 Z"
              fill={activeState === "Andhra Pradesh" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Andhra Pradesh", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Kerala */}
            <path
              d="M350,600 L400,600 L400,650 L350,650 Z"
              fill={activeState === "Kerala" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Kerala", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Madhya Pradesh */}
            <path
              d="M350,350 L450,350 L450,400 L350,400 Z"
              fill={activeState === "Madhya Pradesh" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Madhya Pradesh", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Haryana */}
            <path
              d="M350,300 L400,300 L400,320 L350,320 Z"
              fill={activeState === "Haryana" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Haryana", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Bihar */}
            <path
              d="M500,350 L550,350 L550,400 L500,400 Z"
              fill={activeState === "Bihar" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Bihar", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Chhattisgarh */}
            <path
              d="M450,400 L500,400 L500,450 L450,450 Z"
              fill={activeState === "Chhattisgarh" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Chhattisgarh", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Jharkhand */}
            <path
              d="M500,400 L550,400 L550,450 L500,450 Z"
              fill={activeState === "Jharkhand" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Jharkhand", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Assam */}
            <path
              d="M600,300 L650,300 L650,350 L600,350 Z"
              fill={activeState === "Assam" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Assam", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Odisha */}
            <path
              d="M500,450 L550,450 L550,500 L500,500 Z"
              fill={activeState === "Odisha" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Odisha", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Uttarakhand */}
            <path
              d="M400,250 L450,250 L450,300 L400,300 Z"
              fill={activeState === "Uttarakhand" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Uttarakhand", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Himachal Pradesh */}
            <path
              d="M350,200 L400,200 L400,250 L350,250 Z"
              fill={activeState === "Himachal Pradesh" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Himachal Pradesh", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Goa */}
            <path
              d="M275,500 L300,500 L300,525 L275,525 Z"
              fill={activeState === "Goa" ? "#3b82f6" : "#a4c2db"}
              stroke="#ffffff"
              strokeWidth="1"
              onMouseEnter={(e) => handleStateHover("Goa", e)}
              onMouseLeave={handleStateLeave}
              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
            />

            {/* Delhi HQ Marker */}
            <g transform="translate(390, 330)">
              <motion.circle
                cx="0"
                cy="0"
                r="8"
                fill="#ed1c24"
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 1.5,
                }}
              />
              <circle cx="0" cy="0" r="4" fill="#ed1c24" />
            </g>
          </g>
        </svg>

        {/* Tooltip */}
        {activeState && stateData[activeState as keyof typeof stateData] && (
          <div
            className="absolute bg-white dark:bg-slate-900 p-3 rounded-lg shadow-lg border border-blue-100 dark:border-blue-900 z-50 min-w-[200px] pointer-events-none"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y - 10}px`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="font-bold text-lg mb-1 flex items-center gap-2">
              {stateData[activeState as keyof typeof stateData].name}
              {stateData[activeState as keyof typeof stateData].isHQ && (
                <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">HQ</span>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Warehouses:</span>
                <span className="font-medium">{stateData[activeState as keyof typeof stateData].warehouses}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Distribution Partners:</span>
                <span className="font-medium">{stateData[activeState as keyof typeof stateData].partners}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Market Coverage:</span>
                <span className="font-medium">{stateData[activeState as keyof typeof stateData].coverage}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold mb-2">BSM Nationwide Distribution Network</h3>
        <p className="text-muted-foreground">Hover over states to see distribution details</p>
      </div>
    </div>
  )
}

