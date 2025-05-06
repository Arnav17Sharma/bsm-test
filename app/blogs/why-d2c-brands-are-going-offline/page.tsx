import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
export default function BlogDetailPage() {
  const blog = {
    title: "Why D2C Brands Are Going Offline",
    excerpt: "Exploring how technology is reshaping the e-commerce fulfillment landscape in India's diverse market.",
    image: "../Blogs_Covers/Blogs_Covers/D2C Brands Going offline.png",
    date: "April 25, 2025",
    author: "Samarth Khandelwal",
    category: "D2C Strategy",
    readTime: "7 min read",
    content: [
      {
        type: "heading",
        content: "Why D2C Brands Are Going Offline (And the Logistics It Demands)",
      },
      {
        type: "paragraph",
        content: "Over the last decade, D2C (Direct-to-Consumer) brands redefined how Indians discover and buy products. Skincare, electronics, wellness supplements, fashion—everything was just a click away. With lean operations, digital-first playbooks, and a sharp eye on CACs, these brands challenged the old FMCG titans head-on. But now, we’re seeing a fascinating reversal. The very brands that were once proudly 'online-only' are now making serious offline moves. From boAt’s exclusive stores, Mamaearth’s shelves in general trade, to Slurrp Farm, SUGAR, and The Man Company popping up across modern trade (MT), general trade (GT), and even chemists. Why? Because the road to scale in India runs through retail.",
      },
      {
        type: "heading",
        content: "Why Are D2C Brands Going Offline?",
      },
      {
        type: "list",
        items: [
          {
            type: "heading",
            content: "Digital Acquisition Has Hit a Wall",
          },
          {
            type: "paragraph",
            content: "Customer Acquisition Cost (CAC) has exploded. As more brands fight for attention on Meta, Google, and influencers' feeds, the economics are crumbling. For many D2C startups, digital spends are now unsustainable—often exceeding gross margins.",
          },
          {
            type: "paragraph",
            content: "In contrast, offline offers free discovery at scale. A shelf in a high-traffic Kirana or supermarket can lead to thousands of organic impressions. No CPM, no click-through debates—just ambient brand presence.",
          },
          {
            type: "heading",
            content: "Trust Is Still Built Offline",
          },
          {
            type: "paragraph",
            content: "Indian consumers—especially outside Tier 1 cities—still value physical presence. Being “available in stores” lends authenticity. It signals that a brand is real, credible, and here to stay. The trust of walking into a store and seeing your favorite Instagram-brand next to a Dabur or P&G product is still unmatched.",
          },
          {
            type: "heading",
            content: "Retail Drives Volumes and Repeat",
          },
          {
            type: "paragraph",
            content: "Retail offers habitual shelf recall. Customers form shopping habits, and brands that win early loyalty in physical stores often enjoy stronger repeat rates. Also, offline shopping in India is still over 85% of total retail. It’s where the real numbers lie.",
          },
          {
            type: "heading",
            content: "Tier 2 and Beyond Are Offline-First",
          },
          {
            type: "paragraph",
            content:'For D2C brands to grow, Tier 2, 3 and rural India are key. These consumers are mobile-first but purchase offline. While discovery may begin online (ads, reels, influencers), the conversion still happens in a neighborhood store.',
          },
        ],
      },
      {
        type: "heading",
        content: "So, What Changes Logistically? Everything.",
      },
      {
        type: "paragraph",
        content: "Moving offline isn’t just a channel expansion—it requires a complete re-architecture of your logistics, operations, and supply chain thinking.",
      },
      {
        type: "list",
        items: [
          {
            type: "heading",
            content: "Distribution Strategy 2.0",
          },
          {
            type: "paragraph",
            content: "•	D2C relied on centralized warehouses and direct shipping via 3PLs.",
          },
          {
            type: "paragraph",
            content: "•	Offline requires regional distribution centers, C&F agents, super-stockists, and layers of distributor-retailer touchpoints.",
          },
          {
            type: "paragraph",
            content: "•	You now manage beat plans, route-to-market models, and order fulfillment cycles that are completely different from eCommerce.-",
          },
          {
            type: "heading",
            content: "Sales & Fulfillment Teams",
          },
          {
            type: "paragraph",
            content: "You’ll need feet on the street—field sales officers, promoters, merchandisers—to push sell-ins and manage shelf space. Planograms, visibility drives, and in-store sampling become critical levers.",
          },
          {
            type: "heading",
            content: "SKU Rationalization & Packaging Redesign",
          },
          {
            type: "paragraph",
            content: "You can’t stock all your SKUs offline. GT and MT need lean assortments, optimized for velocity and margins. Packaging needs to evolve—from bulky ecom-friendly packs to retail-friendly shelf units, combo packs, or even single-use SKUs.",
          },
          {
            type: "heading",
            content: "Cash Flow Dynamics Change",
          },
          {
            type: "paragraph",
            content:"Offline retail involves working capital cycles. You manufacture, send to distributors, then retailers, and only then does money return. Compare that to D2C, where you get paid before shipping. This delay changes how you manage capital, inventory turns, and production planning.",
          },
        ],
      },
      {
        type: "heading",
        content:"Winning Offline the Smart Way: Data + Distribution",
      },
      {
        type: "paragraph",
        content:"The best D2C brands are now blending their digital DNA with retail expansion:",
      },
      {
        type: "paragraph",
        content:"•	Using D2C sales data to forecast offline demand at a micro-market level.",
      },
      {
        type: "paragraph",
        content:"•	Tracking sell-through at distributor or Kirana level via tech-enabled ERP or distributor management systems.",
      },
      {
        type: "paragraph",
        content:"•	Running WhatsApp-based reordering flows or QR-based loyalty programs post-offline purchase.",
      },
      {
        type: "paragraph",
        content:"In short: using offline for scale, but running it with the efficiency of eCommerce.",
      },
      {
        type: "heading",
        content:"The Takeaway",
      },
      {
        type: "paragraph",
        content:"Going offline isn’t regressive—it’s the next chapter. D2C brands that scale profitably will be the ones who treat retail not just as a channel, but as an integrated ecosystem—deeply linked to supply chain, consumer behavior, and brand building. Offline is hard. It’s operationally heavy. But done right, it builds unmatched distribution moats and pushes you from brand to business.",
      },
      {
        type: "paragraph",
        content:"In India, winning retail is a logistics game disguised as a marketing story. If you’re building a D2C brand—think fulfillment-first. Because shelf space might just be the new homepage. — Samarth",
      },
    ],    
    relatedPosts: [
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
      {
        title: "The Power of Late Entrants: Lessons for Logistics and Beyond",
        slug: "the-power-of-late-entrants-lessons-for-logistics-and-beyond",
        image: "../Blogs_Covers/Blogs_Covers/power.jpg",
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
