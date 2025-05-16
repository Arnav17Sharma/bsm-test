"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Quote, Users } from "lucide-react"
import { FileText } from "lucide-react"

interface TestimonialsProps {
  className?: string
}

interface Testimonial {
  quote: string
  name: string
  handle: string
  avatar: string
  company?: string
  position?: string
}

export default function Testimonials({ className }: TestimonialsProps) {
  const testimonials: Testimonial[] = [
    {
      quote: "We've been working with BSM for more than 9  years and consistently find them to be a reliable and trustworthy source for our   distribution network. Their inventory is always well-stocked, and they're always quick to respond to our inquiries, even when we need something urgently. With BSM we have achieved new heights and We appreciate their professionalism and dedication to our business!",
      name: "Pushkar Negi",
      handle: "@guyhawkins",
      avatar: "/placeholder.svg?height=100&width=100",
      company: "NKAM",
      position: "",
    },
    {
      quote: "BSM strikes a unique balance between flexibility and operational excellency. Their team operates with the dedication and alignment of an in-house function rather than an external partner. What sets them apart even further is their proactive approach to problem-solving and their deep understanding of the Amazon ecosystem, which enables them to anticipate challenges and implement effective solutions ahead of time.",
      name: "Rishabh Rathod",
      handle: "@karlalynn98",
      avatar: "/placeholder.svg?height=100&width=100",
      company: "Amazon",
      position: "Category Manager",
    },
    {
      quote: "BSM team ensures that they listen and analyze before they deliver. The capability to understand the client needs is far superior than peers. We like BSM because they are no distributors who shout from roof tops on what needs to be done. They are capable of coming down to trenches and working with us",
      name: "Jane Cooper",
      handle: "@janecooper",
      avatar: "/placeholder.svg?height=100&width=100",
      company: "Apollo Pharmacies",
      position: "Senior Category Manager",
    },
    {
      quote: "BSM is less like a distribution partner and more like a business partner. Their team integrates well with internal resources and internal buy-ins are given significant importance in BSM operations",
      name: "Robert Chen",
      handle: "@robertchen",
      avatar: "/placeholder.svg?height=100&width=100",
      company: "Shwabe",
      position: "Shwabe India Team",
    },
  ]

  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [])

  return (
    <section className={cn("py-10 bg-muted/30 relative overflow-hidden", className)} style={{backgroundColor: "#1B1465"}}>
      <div className="container px-4 md:px-6 mb-10">
      <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-md lg:text-xl text-red-600 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400 mb-4">
            <Users className="mr-1 h-3.5 w-3.5" />
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">Transformative Client Experiences</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
          Hear what our clients have to say about their experience working with BSM
          </p>
        </div>
      </div>

      <div
        className="overflow-hidden px-4 md:px-6 py-4"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <motion.div
          ref={carouselRef}
          className="flex cursor-grab"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          animate={{
            x: [0, -width],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-[350px] sm:max-w-[350px] md:max-w-[800px] px-4 py-2 flex-shrink-0">
              <div className="bg-background rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-800 h-full flex flex-col">
                <div className="text-gray-300 dark:text-gray-600 mb-4">
                  <Quote size={32} />
                </div>
                <p className="text-foreground flex-grow mb-6">{testimonial.quote}</p>
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-200 dark:border-gray-700">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10">
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === 0 ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-700"}`}
            />
          ))}
        </div>
      </div> */}
    </section>
  )
}
