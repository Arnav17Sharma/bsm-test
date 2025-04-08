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
    <div id="map" style={{ width: "100%", height: "500px" }} suppressHydrationWarning>

    </div>
  )
}

