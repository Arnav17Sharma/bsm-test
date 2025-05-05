"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function BlogsSection() {
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

  const blogs = [
    {
      title: "The Power of Late Entrants: Lessons for Logistics and Beyond",
      excerpt: "Exploring how technology is reshaping the e-commerce fulfillment landscape in India's diverse market.",
      image: "Blogs_Covers/Blogs_Covers/power.jpg",
      date: "May 15, 2023",
      author: "Samarth Jain",
      category: "E-Commerce",
      slug: "the-power-of-late-entrants-lessons-for-logistics-and-beyond",
      readTime: "5 min read",
    },
    {
      title: "Kirana Stores Aren't Going Anywhere (Yet)",
      excerpt: "How brands can leverage the 10-minute delivery revolution while maintaining operational efficiency.",
      image: "Blogs_Covers/Blogs_Covers/Kirana Stores aren't going anywhere.png",
      date: "April 22, 2023",
      author: "Rahul Sharma",
      category: "Quick Commerce",
      slug: "quick-commerce-challenges-opportunities",
      readTime: "7 min read",
    },
    {
      title: "Dark Stores vs General Stores",
      excerpt: "Leveraging analytics to optimize stock levels and improve cash flow across distribution networks.",
      image: "Blogs_Covers/Blogs_Covers/Dark Stores vs General Stores.jpg",
      date: "March 10, 2023",
      author: "Priya Patel",
      category: "Inventory",
      slug: "data-driven-inventory-management",
      readTime: "6 min read",
    },
  ]
  const blogs2 = [
    {
      title: "The Future of E-Commerce Distribution in India",
      excerpt: "Exploring how technology is reshaping the e-commerce fulfillment landscape in India's diverse market.",
      image: "/Navigating Supply Chain Disruptions in 2023.png?height=400&width=600",
      date: "May 15, 2023",
      author: "Samarth Jain",
      category: "E-Commerce",
      slug: "future-ecommerce-distribution-india",
    },
    {
      title: "Quick Commerce: Challenges and Opportunities",
      excerpt: "How brands can leverage the 10-minute delivery revolution while maintaining operational efficiency.",
      image: "/Quick Commerce Challenges and Opportunities.png?height=400&width=600",
      date: "April 22, 2023",
      author: "Rahul Sharma",
      category: "Quick Commerce",
      slug: "quick-commerce-challenges-opportunities",
    },
    {
      title: "Data-Driven Inventory Management Strategies",
      excerpt: "Leveraging analytics to optimize stock levels and improve cash flow across distribution networks.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 10, 2023",
      author: "Priya Patel",
      category: "Inventory",
      slug: "data-driven-inventory-management",
    }
  ]

  return (
    <section
      id="blogs"
      className="py-20 bg-gradient-to-b from-white to-blue-50/50 dark:from-slate-950 dark:to-blue-950/20 relative"
    >
      <div className="absolute top-0 left-0 w-full h-40" />
      <div className="absolute bottom-0 right-0 w-72 h-72" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400 mb-4">
            <FileText className="mr-1 h-3.5 w-3.5" />
            Latest Insights
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">From Our Blog</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
            Industry insights, trends, and expert perspectives on distribution and fulfillment
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-3"
        >
          {blogs.map((blog, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-blue-100 dark:border-blue-900">
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-blue-500/20 to-transparent z-10"></div>
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="object-cover object-top w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-red-600 text-white text-xs font-medium px-2 py-1 rounded-md z-20">
                    {blog.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>

                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      <span>{blog.author}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/blogs/${blog.slug}`}>
                    <Button variant="ghost" className="group text-blue-600 dark:text-blue-400">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link href="/blogs">
            <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

