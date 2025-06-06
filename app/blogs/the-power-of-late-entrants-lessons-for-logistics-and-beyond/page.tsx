import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
export default function BlogDetailPage() {
  const blog = {
    title: "The Power of Late Entrants: Lessons for Logistics and Beyond",
    excerpt: "Exploring how technology is reshaping the e-commerce fulfillment landscape in India's diverse market.",
    image: "../Blogs_Covers/Blogs_Covers/power.jpg",
    date: "May 1, 2025",
    author: "Samarth Khandelwal",
    category: "E-Commerce",
    readTime: "7 min read",
    content: [
      {
        type: "heading",
        content: "Why 'Goliath' Markets Aren’t Immune to Disruption",
      },
      {
        type: "paragraph",
        content: "In the logistics and supply chain sectors, it's often assumed that established giants have an unassailable advantage due to their entrenched customer bases, extensive infrastructure, and economies of scale. However, recent developments demonstrate that late entrants can successfully challenge incumbents by leveraging innovative strategies and technologies.",
      },
      {
        type: "heading",
        content: "Case Studies of Successful Late Entrants",
      },
      {
        type: "list",
        items: [
          {
            type: "heading",
            content: "Rapido's Expansion into Cab Services",
          },
          {
            type: "paragraph",
            content: " Initially known for its bike-taxi services, Rapido has ventured into the four-wheeler cab market, directly competing with industry leaders like Uber and Ola. By adopting a zero-commission model for drivers, Rapido aims to attract a substantial driver base, thereby enhancing service availability and customer satisfaction. (Business & Finance News The Times of India)",
          },
          {
            type: "heading",
            content: "BluSmart's All-Electric Fleet",
          },
          {
            type: "paragraph",
            content: "BluSmart is distinguishing itself by operating an entirely electric vehicle (EV) fleet, addressing environmental concerns and capitalizing on the growing demand for sustainable transportation options. This focus on EVs has allowed BluSmart to carve out a niche in the ride-hailing market, appealing to eco-conscious consumers. (Gadgets 360)",
          },
          {
            type: "heading",
            content: "Physics Wallah's EdTech Disruption",
          },
          {
            type: "paragraph",
            content: "Starting as a YouTube channel, Physics Wallah has evolved into a comprehensive educational technology platform, offering affordable and accessible learning resources. By focusing on cost-effective solutions and leveraging digital platforms, it has successfully competed with established players in the edtech industry. (Wikipedia)",
          }          
        ],
      },
      {
        type: "heading",
        content: "Strategies Employed by Late Entrants",
      },
      {
        type: "list",
        items: [
          {
            type: "heading",
            content: "Targeting Overlooked Niches",
          },
          {
            type: "paragraph",
            content: "Late entrants often identify and focus on market segments that incumbents have neglected. For instance, Rapido's initial emphasis on bike taxis addressed a gap in affordable and convenient short-distance travel.",
          },          
          {
            type: "heading",
            content: "Offering Superior Value Propositions",
          },
          {
            type: "paragraph",
            content: "To attract customers from established competitors, new entrants provide significantly enhanced value—be it through pricing, service quality, or innovative features. BluSmart's commitment to an all-electric fleet offers an environmentally friendly alternative that resonates with a growing segment of consumers. (Gadgets 360 NDTV Profit)",
          },
          {
            type: "heading",
            content: "Capitalizing on High-Frequency Use Cases",
          },
          {
            type: "paragraph",
            content: "Engaging in services that customers use regularly, such as daily commutes or educational platforms, allows new entrants to build strong relationships and brand loyalty, facilitating further expansion.",
          },
          {
            type: "heading",
            content: "Emphasizing Operational Efficiency",
          },
          {
            type: "paragraph",
            content: "Without the luxury of abundant funding, late entrants often prioritize lean operations and cost-effective strategies. Physics Wallah's use of existing digital platforms to disseminate educational content exemplifies this approach.",
          },
        ],
      },
      {
        type: "heading",
        content: "Leveraging Established Infrastructure",
      },
      {
        type: "paragraph",
        content:
          "Late entrants often benefit from pre-existing market education and infrastructure. This foundation allows them to focus on innovation rather than building markets from scratch, accelerating their path to relevance and impact.",
      },
      {
        type: "heading",
        content: "Emerging Opportunities with Generative AI",
      },
      {
        type: "paragraph",
        content:
          "Generative AI is unlocking new disruption avenues across sectors, including logistics. AI-driven tools enable route optimization, freight matching, and predictive analytics, giving new entrants a competitive edge in operations and customer service.",
      },
      {
        type: "heading",
        content: "Conclusion: Redefining Market Dynamics",
      },
      {
        type: "paragraph",
        content:
          "The dominance of incumbent players does not preclude the success of late entrants. Through strategic focus, innovation, and operational efficiency, newcomers can compete effectively and reshape industry landscapes.",
      },
    ],    
    relatedPosts: [
      {
        title: "Kirana Stores Aren't Going Anywhere (Yet)",
        slug: "kirana-stores-arent-going-anywhere",
        image: "../Blogs_Covers/Blogs_Covers/Kirana Stores aren't going anywhere.png",
      },
      {
        title: "Dark Stores vs General Stores",
        slug: "dark-stores-vs-general-stores",
        image: "../Blogs_Covers/Blogs_Covers/Dark Stores vs General Stores.jpg",
      },
      {
        title: "Why D2C Brands Are Going Offline",
        slug: "why-d2c-brands-are-going-offline",
        image: "../Blogs_Covers/Blogs_Covers/D2C Brands Going offline.png",
      },
    ],
  }

  return (
    <main className="min-h-screen pt-16">
      <article className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-30" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-20">
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
              <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-full object-contain" />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-10 relative z-10">
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
                } else if (block.type === "list" && Array.isArray(block.items)) {
                    return (
                      <div key={index} className="mt-4">
                        {block.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="mb-2">
                            {item.type === "paragraph" && <p>{item.content}</p>}
                            {item.type === "heading" && (
                              <h2 className="text-2xl font-bold mt-8 mb-4">{item.content}</h2>
                            )}
                          </div>
                        ))}
                      </div>
                    );
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
                        className="w-full object-contain object-top transition-transform duration-500 group-hover:scale-105"
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
