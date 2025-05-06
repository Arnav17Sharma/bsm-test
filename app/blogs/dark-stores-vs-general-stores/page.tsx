import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
export default function BlogDetailPage() {
  const blog = {
    title: "Dark Stores vs General Stores",
    excerpt: "Exploring how technology is reshaping the e-commerce fulfillment landscape in India's diverse market.",
    image: "../Blogs_Covers/Blogs_Covers/Dark Stores vs General Stores.jpg",
    date: "April 15, 2025",
    author: "Samarth Khandelwal",
    category: "Inventory Optimization",
    readTime: "7 min read",
    content: [
      {
        type: "heading",
        content: "Dark Stores vs General Stores: Who Will Win the Grocery Battle?",
      },
      {
        type: "paragraph",
        content: "In India’s $600 billion grocery market, two fundamentally different models are squaring off. On one side are general stores—India’s ubiquitous Kiranas. On the other, the dark store model—tech-powered, inventory-first mini-warehouses designed for 10-minute deliveries. The battleground? Your daily essentials.",
      },
      {
        type: "paragraph",
        content: "At first glance, the match-up feels unfair. Kiranas, despite their legacy and ubiquity, operate on informal processes and manual inventory. Dark stores run on structured tech, centralized control, and algorithmic decision-making.",
      },
      {
        type: "paragraph",
        content: "But don’t write off general stores just yet. This battle is more nuanced than speed vs scale—it’s about cost structures, trust, accessibility, and staying power.",
      },
      {
        type: "heading",
        content: "What Are Dark Stores? And Why Are They Booming?",
      },
      {
        type: "paragraph",
        content: "Dark stores are closed-door fulfillment hubs built in dense urban areas to serve hyperlocal online demand. Platforms like Zepto, Blinkit, and Instamart use them to promise deliveries in 10–20 minutes.",
      },
      {
        type: "paragraph",
        content: "Advantages: ",
      },
      {
        type: "list",
        items: [
          {
            type: "heading",
            content: "Stock predictability: ",
          },
          {
            type: "paragraph",
            content: "Inventory is tightly controlled. ",
          },
          {
            type: "heading",
            content: "Efficient picking & dispatch: ",
          },
          {
            type: "paragraph",
            content: "Warehousing logic in a small space. ",
          },
          {
            type: "heading",
            content: "Real-time visibility: ",
          },
          {
            type: "paragraph",
            content: "Data dictates what’s in stock. ",
          },
          {
            type: "heading",
            content: "•	Fewer missed orders: ",
          },
          {
            type: "paragraph",
            content:'No more "yeh item abhi nahi hai". ',
          },
        ],
      },
      {
        type: "paragraph",
        content: "These dark stores offer convenience at a scale that matches rising urban expectations. Their focus on speed, consistency, and digital ordering makes them extremely attractive—especially to younger, urban, dual-income households.",
      },
      {
        type: "heading",
        content: "But General Stores Still Rule India",
      },
      {
        type: "paragraph",
        content: "Over 90% of India’s grocery retail still flows through Kiranas. Why?",
      },
      {
        type: "list",
        items: [
          {
            type: "heading",
            content: "Trust and relationships ",
          },
          {
            type: "paragraph",
            content: "Decades of neighborhood familiarity. ",
          },
          {
            type: "heading",
            content: "Informal credit ",
          },
          {
            type: "paragraph",
            content: '"Kal paisa de dena bhaiya" still works in most towns',
          },
          {
            type: "heading",
            content: "Physical proximity",
          },
          {
            type: "paragraph",
            content: "Within 200 meters of your home. ",
          },
          {
            type: "heading",
            content: "Personalization",
          },
          {
            type: "paragraph",
            content:"They'll split a pack, suggest alternatives, or throw in freebies.",
          },
          {
            type: "paragraph",
            content:"Most Kiranas also operate at zero marginal cost: family-run operations, no rent, and local sourcing. Their cost structures are impossible for any dark store to match.",
          },
        ],
      },
      {
        type: "heading",
        content:"Dark Stores’ Hidden Costs",
      },
      {
        type: "paragraph",
        content:"The dark store model, while sexy on the surface, is logistics-heavy and capital-intensive: Real estate in urban zones is expensive. Delivery fleets are costly to manage, especially with low average order values. Promotions and discounts are needed to drive volumes High return rates or failed deliveries increase overhead. Many of these platforms are burning capital to acquire frequency before profitability—a risk-laden model, especially in a price-sensitive market like India.",
      },
      {
        type: "heading",
        content:"The Hybrid Future Is Already Emerging",
      },
      {
        type: "paragraph",
        content:"Several players are now betting on a blended model: Amazon’s IHS program leverages Kiranas for last-mile delivery. Jumbotail equips Kiranas with supply chain tech and private-label storefronts. Swiggy Instamart has begun experimenting with offline franchise retail Zepto Café (a storefront) hints that even Q-commerce players are rethinking the full dark model. The big realization: It’s better to enable Kiranas than to replace them. Their customer loyalty, hyperlocal presence, and operational cost advantages make them formidable allies.",
      },
      {
        type: "heading",
        content:"So, Who Wins?",
      },
      {
        type: "paragraph",
        content:"There is no single winner. The grocery market in India is too large, too diverse, and too emotionally embedded for one format to dominate. Instead: Dark stores will scale in urban India, for time-sensitive, impulse purchases. General stores will remain dominant in Tier 2/3 and even in cities for planned, trust-based buying. Tech + logistics will bridge the gap, turning offline assets into fulfillment nodes. ",
      },
      {
        type: "paragraph",
        content:"If you're thinking about the future of grocery in India, don't pick a side—build the bridge. Because in this market, distribution isn’t just about distance. It’s about trust, cost, and culture. — Samarth",
      },
    ],    
    relatedPosts: [
        {
            title: "Why D2C Brands Are Going Offline",
            slug: "why-d2c-brands-are-going-offline",
            image: "../Blogs_Covers/Blogs_Covers/D2C Brands Going offline.png",
          },
      {
        title: "The Rise of Assisted Commerce in India",
        slug: "the-rise-of-assisted-commerce-in-india",
        image: "../Blogs_Covers/Blogs_Covers/future_ecomm.jpg",
      },
      {
        title: "Beyond the Box",
        slug: "beyond-the-box",
        image: "../Blogs_Covers/Blogs_Covers/Beyong the Box.png",
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
