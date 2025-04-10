import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, FileText, Calendar, User, Search } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import { Input } from "@/components/ui/input"
import Footer from "@/components/footer"

export default function BlogsPage() {
  const blogs = [
    {
      title: "The Power of Late Entrants: Lessons for Logistics and Beyond",
      excerpt: "Exploring how technology is reshaping the e-commerce fulfillment landscape in India's diverse market.",
      image: "/placeholder.svg?height=400&width=600",
      date: "May 15, 2023",
      author: "Samarth Jain",
      category: "E-Commerce",
      slug: "the-power-of-late-entrants-lessons-for-logistics-and-beyond",
      readTime: "5 min read",
    },
    {
      title: "Quick Commerce: Challenges and Opportunities",
      excerpt: "How brands can leverage the 10-minute delivery revolution while maintaining operational efficiency.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 22, 2023",
      author: "Rahul Sharma",
      category: "Quick Commerce",
      slug: "quick-commerce-challenges-opportunities",
      readTime: "7 min read",
    },
    {
      title: "Data-Driven Inventory Management Strategies",
      excerpt: "Leveraging analytics to optimize stock levels and improve cash flow across distribution networks.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 10, 2023",
      author: "Priya Patel",
      category: "Inventory",
      slug: "data-driven-inventory-management",
      readTime: "6 min read",
    },
    {
      title: "The Rise of Omnichannel Distribution",
      excerpt: "How integrated distribution strategies are becoming essential for brand success in the digital age.",
      image: "/placeholder.svg?height=400&width=600",
      date: "February 28, 2023",
      author: "Samarth Jain",
      category: "Strategy",
      slug: "rise-omnichannel-distribution",
      readTime: "8 min read",
    },
    {
      title: "Sustainable Logistics: The Future of Distribution",
      excerpt:
        "Exploring eco-friendly practices in distribution that reduce carbon footprint while maintaining efficiency.",
      image: "/placeholder.svg?height=400&width=600",
      date: "January 15, 2023",
      author: "Rahul Sharma",
      category: "Sustainability",
      slug: "sustainable-logistics-future-distribution",
      readTime: "5 min read",
    },
    {
      title: "Navigating Supply Chain Disruptions in 2023",
      excerpt: "Strategies for maintaining distribution continuity in the face of global supply chain challenges.",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 10, 2022",
      author: "Priya Patel",
      category: "Supply Chain",
      slug: "navigating-supply-chain-disruptions-2023",
      readTime: "7 min read",
    },
  ]

  const categories = ["All", "E-Commerce", "Quick Commerce", "Inventory", "Strategy", "Sustainability", "Supply Chain"]

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-30" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-400 mb-4">
              <FileText className="mr-1 h-3.5 w-3.5" />
              Industry Insights
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
              BSM Blog
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              Industry insights, trends, and expert perspectives on distribution and fulfillment
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Stay updated with the latest industry insights, distribution trends, and BSM news.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mx-auto">
            <Input placeholder="Your email address" className="border-blue-100 dark:border-blue-900" style={{width: "400px"}} />
            <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700">
              Subscribe
            </Button>
            </div>
          </div>

          <SectionDivider />

          {/* <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10 border-blue-100 dark:border-blue-900" />
            </div>
            <div className="flex overflow-x-auto pb-2 gap-2 md:justify-end">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={
                    index === 0
                      ? "bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
                      : "border-blue-100 dark:border-blue-900"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div> */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-20">
            {blogs.map((blog, index) => (
              <Card
                key={index}
                className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-blue-100 dark:border-blue-900"
              >
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-red-500/10 to-transparent z-10"></div>
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
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

                  <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      <span>{blog.author}</span>
                    </div>
                    <span>{blog.readTime}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/blogs/${blog.slug}`} className="w-full">
                    <Button variant="ghost" className="group text-blue-600 dark:text-blue-400 w-full">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="border-blue-100 dark:border-blue-900">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-red-600/10">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Stay updated with the latest industry insights, distribution trends, and BSM news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Your email address" className="border-blue-100 dark:border-blue-900" />
            <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

