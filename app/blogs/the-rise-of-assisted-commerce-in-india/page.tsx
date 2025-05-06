import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
export default function BlogDetailPage() {
  const blog = {
    title: "The Rise of Assisted Commerce in India",
    excerpt: "Exploring how technology is reshaping the e-commerce fulfillment landscape in India's diverse market.",
    image: "../Blogs_Covers/Blogs_Covers/future_ecomm.jpg",
    date: "April 07, 2025",
    author: "Samarth Khandelwal",
    category: "Sustainable Logistics",
    readTime: "7 min read",
    content: [
      {
        type: "heading",
        content: "The Rise of Assisted Commerce in India — And Why It’s More Than Just a Rural Trend",
      },
      {
        type: "paragraph",
        content: "For all the noise about India's eCommerce boom, a quiet truth often gets overlooked — most Indians still don’t shop online.",
      },
      {
        type: "paragraph",
        content: "It’s not for lack of internet. India boasts 800M+ smartphone users, and UPI has penetrated the deepest corners. But when it comes to actual eCommerce transactions — adding to cart, making payments, handling returns — a large swath of users either hesitate or drop off entirely.",
      },
      {
        type: "paragraph",
        content: "That’s where Assisted Commerce enters the scene.",
      },
      {
        type: "heading",
        content: "What Is Assisted Commerce?",
      },
      {
        type: "paragraph",
        content: "At its core, assisted commerce is about bridging the digital divide — using a human layer to help consumers complete online purchases. Think:",
      },
      {
        type: "paragraph",
        content: "•	A local store owner placing an order on your behalf. ",
      },
      {
        type: "paragraph",
        content: "•	A call center executive walking you through a WhatsApp catalogue. ",
      },
      {
        type: "paragraph",
        content: "•	A sales agent at your doorstep helping with onboarding, product discovery, or returns. ",
      },
      {
        type: "paragraph",
        content: "It’s like having a personal shopper — but for Bharat.",
      },
      {
        type: "heading",
        content: "Why Is This Model Exploding Now?",
      },
      {
        type: "list",
        items: [
          {
            type: "heading",
            content: "1. Digital access ≠ digital comfort",
          },
          {
            type: "paragraph",
            content: "Most Indians now have smartphones. But comfort with digital commerce is still patchy. Language barriers, lack of trust, poor navigation skills, and low digital literacy mean users need a nudge to transact. Assisted commerce lowers this barrier.",
          },
          {
            type: "heading",
            content: "2. Trust is still local",
          },
          {
            type: "paragraph",
            content: "Consumers are more likely to trust their neighbourhood Kirana or a familiar agent over an unknown app. By embedding trust through familiar interfaces — or actual people — assisted commerce gets the job done.",
          },
          {
            type: "heading",
            content: "3. High-touch categories demand help",
          },
          {
            type: "paragraph",
            content: "Try buying insurance, electronics, or a saree online without speaking to someone. It’s hard. Assisted commerce thrives in high-ticket, high-consideration, or emotionally-driven categories — where discovery, comparison, and post-sale support are critical.",
          },
        ],
      },
      {
        type: "heading",
        content: "Key Players Powering This Movement",
      },
      {
        type: "paragraph",
        content: "•	BharatAgri, DeHaat, and Gramophone are using on-ground agri-advisors to help farmers discover and order inputs online.",
      },
      {
        type: "paragraph",
        content: "•	Dukaan, Khatabook, and DotPe are empowering shopkeepers to act as local eCommerce points.",
      },
      {
        type: "paragraph",
        content: "•	Meesho started with resellers acting as intermediaries — pushing products to friends & family, taking orders on WhatsApp, and fulfilling via Meesho’s backend.",
      },
      {
        type: "paragraph",
        content: "•	E-Samuday, StoreKing, and 1Bridge are enabling rural digital kiosks and last-mile agents to drive eCommerce adoption in Tier 3–6.",
      },
      {
        type: "paragraph",
        content: "Even Flipkart and Amazon are experimenting with assisted formats — from assisted delivery to doorstep ordering via field reps.",
      },
      {
        type: "heading",
        content: "The Logistics Behind Assisted Commerce",
      },
      {
        type: "paragraph",
        content: "This model is logistics-heavy and complex. It demands last-mile enablement, flexible delivery models, and often, a rethinking of fulfillment itself.",
      },
      {
        type: "heading",
        content: "a. Decentralized Ordering, Centralized Fulfillment",
      },
      {
        type: "paragraph",
        content: "Orders may originate from rural kiosks, WhatsApp chats, or agents. But the backend still needs Amazon-grade fulfillment — with accurate inventory, fast delivery, and real-time tracking.",
      },
      {
        type: "heading",
        content: "b. Flexible Payment Systems",
      },
      {
        type: "paragraph",
        content: "Most assisted commerce orders involve cash, delayed UPI, or even ledger-based settlements. The logistics partner must manage reconciliation between the consumer, the agent, and the platform — often across time lags.",
      },
      {
        type: "heading",
        content: "c. Reverse Logistics for Returns",
      },
      {
        type: "paragraph",
        content: "Returns in assisted commerce often need doorstep pickups in remote areas. That requires a reliable reverse logistics loop and a well-trained agent network.",
      },
      {
        type: "heading",
        content: "d. SKUs Tailored for Distribution",
      },
      {
        type: "paragraph",
        content: "In rural areas, you can’t ship bulky or complex SKUs easily. Brands need to rethink pack sizes, bundles, and even product formulations for assisted commerce.",
      },
      {
        type: "heading",
        content: "Why This Is More Than a Rural Story",
      },
      {
        type: "paragraph",
        content: "The interesting twist? Assisted commerce isn’t just for “Bharat” anymore. Even in Tier 1 cities, categories like furniture, financial services, healthcare, and B2B buying are seeing assisted models flourish. For example:",
      },
      {
        type: "paragraph",
        content: "•	AI chat agents are helping users complete travel bookings.",
      },
      {
        type: "paragraph",
        content: "•	WhatsApp catalogs are simplifying home decor sales. ",
      },
      {
        type: "paragraph",
        content: "•	Live video consultations are helping drive skincare product discovery. ",
      },
      {
        type: "paragraph",
        content: "In essence, assistance is a spectrum — from rural field reps to urban AI agents.",
      },
      {
        type: "heading",
        content:"The Big Play: Building Trust at Scale",
      },
      {
        type: "paragraph",
        content:"The brands that win in assisted commerce will be those that can blend high-touch trust with high-scale logistics. That means:",
      },
      {
        type: "paragraph",
        content:"•	Training thousands of agents. ",
      },
      {
        type: "paragraph",
        content:"•	Building rural-compatible delivery networks. ",
      },
      {
        type: "paragraph",
        content:"•	Offering 24x7 multilingual support. ",
      },
      {
        type: "paragraph",
        content:"•	Managing payments and returns with seamless tech + ops integration. ",
      },
      {
        type: "paragraph",
        content:"               ",
      },
      {
        type: "paragraph",
        content:"Assisted commerce is not a stopgap. It’s a parallel channel — one that could power the next 500M shoppers. For startups building for Bharat, it’s no longer about whether users will come online. It’s about whether you’re willing to meet them halfway. — Samarth",
      },
    ],    
    relatedPosts: [
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
      {
        title: "Kirana Stores Aren't Going Anywhere (Yet)",
        slug: "kirana-stores-arent-going-anywhere",
        image: "../Blogs_Covers/Blogs_Covers/Kirana Stores aren't going anywhere.png",
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
