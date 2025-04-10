import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
export default function BlogDetailPage() {
  const blog = {
    title: "The Future of E-Commerce Distribution in India",
    excerpt: "Exploring how technology is reshaping the e-commerce fulfillment landscape in India's diverse market.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "May 15, 2023",
    author: "Samarth Jain",
    category: "E-Commerce",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        content:
          "The e-commerce landscape in India is undergoing a profound transformation, driven by technological advancements, changing consumer behaviors, and the unique challenges of the Indian market. As one of the fastest-growing e-commerce markets globally, India presents both immense opportunities and distinct challenges for brands and distributors.",
      },
      {
        type: "heading",
        content: "The Current State of E-Commerce Distribution",
      },
      {
        type: "paragraph",
        content:
          "India's e-commerce market is expected to reach $200 billion by 2026, growing at a CAGR of 30%. This explosive growth has been fueled by increasing internet penetration, rising smartphone usage, and a growing middle class with disposable income. However, the distribution infrastructure has struggled to keep pace with this rapid expansion.",
      },
      {
        type: "paragraph",
        content:
          "Traditional distribution models, characterized by multiple intermediaries and manual processes, are proving inadequate for the demands of modern e-commerce. Challenges such as last-mile delivery in remote areas, inventory management across multiple marketplaces, and the need for rapid fulfillment have highlighted the limitations of conventional approaches.",
      },
      {
        type: "heading",
        content: "Technology-Driven Transformation",
      },
      {
        type: "paragraph",
        content:
          "The future of e-commerce distribution in India lies in technology-driven solutions that address these unique challenges. Several key technologies are reshaping the landscape:",
      },
      {
        type: "list",
        items: [
          "AI and Machine Learning for demand forecasting and inventory optimization",
          "IoT for real-time tracking and warehouse management",
          "Blockchain for supply chain transparency and authentication",
          "Robotics and automation for warehouse operations",
          "Data analytics for performance optimization and decision-making",
        ],
      },
      {
        type: "paragraph",
        content:
          "These technologies are enabling distributors to predict demand patterns with greater accuracy, optimize inventory placement, and streamline fulfillment processes. The result is a more efficient, responsive, and cost-effective distribution ecosystem.",
      },
      {
        type: "heading",
        content: "The Rise of Omnichannel Distribution",
      },
      {
        type: "paragraph",
        content:
          "Another significant trend is the convergence of online and offline channels. Brands are increasingly adopting omnichannel strategies that integrate e-commerce marketplaces, D2C platforms, quick commerce, and traditional retail. This approach requires sophisticated inventory management systems that provide real-time visibility across all channels.",
      },
      {
        type: "paragraph",
        content:
          "Successful omnichannel distribution enables brands to meet customers wherever they shop, while optimizing inventory and fulfillment costs. It also provides valuable data on consumer preferences and behaviors, which can inform product development and marketing strategies.",
      },
      {
        type: "heading",
        content: "Hyperlocal Fulfillment and Dark Stores",
      },
      {
        type: "paragraph",
        content:
          "The demand for faster delivery is driving the adoption of hyperlocal fulfillment models. Dark stores—small warehouses strategically located in urban areas—are enabling brands to fulfill orders within hours or even minutes. This model is particularly relevant for categories such as groceries, personal care, and electronics, where immediate availability is a competitive advantage.",
      },
      {
        type: "paragraph",
        content:
          "The proliferation of quick commerce platforms like Blinkit, Zepto, and Swiggy Instamart is accelerating this trend. Brands that can efficiently integrate with these platforms and optimize their inventory allocation will capture a growing segment of urban consumers who prioritize convenience and speed.",
      },
      {
        type: "heading",
        content: "Sustainability and Green Logistics",
      },
      {
        type: "paragraph",
        content:
          "As environmental consciousness grows among Indian consumers, sustainable distribution practices are becoming a competitive differentiator. Brands are investing in electric delivery vehicles, eco-friendly packaging, and optimization algorithms that reduce carbon emissions.",
      },
      {
        type: "paragraph",
        content:
          "This shift towards green logistics is not only environmentally responsible but also economically beneficial. Optimized routes and consolidated shipments reduce fuel consumption and operational costs, while sustainable practices enhance brand reputation and customer loyalty.",
      },
      {
        type: "heading",
        content: "The Path Forward",
      },
      {
        type: "paragraph",
        content:
          "The future of e-commerce distribution in India will be characterized by technology integration, channel convergence, and customer-centricity. Brands that invest in these areas will be well-positioned to capitalize on the continued growth of the Indian e-commerce market.",
      },
      {
        type: "paragraph",
        content:
          "At BSM, we are at the forefront of this transformation, leveraging advanced technologies and data-driven approaches to optimize distribution for leading brands. Our integrated solutions span e-commerce marketplaces, quick commerce platforms, and traditional retail, enabling brands to reach customers efficiently across all channels.",
      },
      {
        type: "paragraph",
        content:
          "As the e-commerce landscape continues to evolve, adaptability and innovation will be key to success. Brands that embrace technology, prioritize customer experience, and optimize their distribution networks will thrive in the dynamic Indian market.",
      },
    ],
    relatedPosts: [
      {
        title: "Quick Commerce: Challenges and Opportunities",
        slug: "quick-commerce-challenges-opportunities",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Data-Driven Inventory Management Strategies",
        slug: "data-driven-inventory-management",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "The Rise of Omnichannel Distribution",
        slug: "rise-omnichannel-distribution",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  return (
    <main className="min-h-screen pt-16">
      <article className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-30" fadeDirection="top" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-10">
          <div className="container px-4 md:px-6">
            <Link href="/blogs" className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blogs
            </Link>

            <div className="flex flex-col items-center text-center mb-8">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-400 mb-4">
                <Tag className="mr-1 h-3.5 w-3.5" />
                {blog.category}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl">{blog.title}</h1>
              <div className="flex items-center gap-4 mt-6 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{blog.author}</span>
                </div>
                <span>{blog.readTime}</span>
              </div>
            </div>

            <div className="aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-xl mb-10">
              <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 relative z-10">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto prose prose-blue dark:prose-invert">
              {blog.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return <p key={index}>{block.content}</p>
                } else if (block.type === "heading") {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {block.content}
                    </h2>
                  )
                }
                return null
              })}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Related Posts Section */}
        <section className="py-20 relative z-10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {blog.relatedPosts.map((post, index) => (
                <Link key={index} href={`/blogs/${post.slug}`}>
                  <div className="group bg-card rounded-xl overflow-hidden border border-blue-100 dark:border-blue-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center justify-end mt-2">
                        <span className="text-sm text-blue-600 dark:text-blue-400 inline-flex items-center">
                          Read Article
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/10 to-red-600/10 relative z-10">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Distribution?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our tech-enabled distribution solutions can help your brand thrive in the evolving
              e-commerce landscape.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  )
}
