"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Brands from "@/components/brands"
import Process from "@/components/process"
import CaseStudies from "@/components/case-studies"
import BlogsSection from "@/components/blogs-section"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import IntroAnimation from "@/components/intro-animation"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Check if user has already seen the intro animation
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro")
    if (hasSeenIntro === "true") {
      setShowIntro(false)
    }
  }, [])

  const handleIntroComplete = () => {
    setShowIntro(false)
    sessionStorage.setItem("hasSeenIntro", "true")
  }

  const handleIntroSkip = () => {
    setShowIntro(false)
    sessionStorage.setItem("hasSeenIntro", "true")
  }

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroAnimation key="intro-animation" onComplete={handleIntroComplete} onSkip={handleIntroSkip} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 overflow-hidden">
                <GridBackground className="opacity-30" fadeDirection="top" />
              </div>
              <Hero />
            </div>
            <SectionDivider />
            <Brands />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Services />
            <SectionDivider />
            <Process />
            <SectionDivider />
            <CaseStudies />
            <SectionDivider />
            <BlogsSection />
            <SectionDivider />
            <div className="relative">
              <div className="absolute inset-0 overflow-hidden">
                <GridBackground className="opacity-30" fadeDirection="bottom" />
              </div>
              <Cta />
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}