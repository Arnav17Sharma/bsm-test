import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
export default function BlogDetailPage() {
  const blog = {
    title: "Beyond the Box",
    excerpt: "Exploring how technology is reshaping the e-commerce fulfillment landscape in India's diverse market.",
    image: "../Blogs_Covers/Blogs_Covers/Beyong the Box.png",
    date: "April 30, 2025",
    author: "Samarth Khandelwal",
    category: "Supply Chain Enablement",
    readTime: "7 min read",
    content: [
      {
        type: "heading",
        content: "Beyond the Box: How eCommerce Logistics Players Are Becoming Full-Stack Growth Enablers",
      },
      {
        type: "paragraph",
        content: "In the early days of eCommerce, logistics meant one thing: deliver the box, and do it fast.",
      },
      {
        type: "paragraph",
        content: "Speed was king. Whoever got your product from warehouse to doorstep the fastest, won.",
      },
      {
        type: "paragraph",
        content: "But today, logistics isn’t just about moving boxes—it’s about moving businesses forward.",
      },
      {
        type: "paragraph",
        content: "As D2C brands scale and online marketplaces become more competitive, a new breed of logistics players has emerged. They don't just deliver shipments—they deliver growth. These are full-stack enablers, quietly powering some of the biggest success stories in the eCommerce ecosystem.",
      },
      {
        type: "heading",
        content: "The Shift: From Delivery Partner to Business Backbone",
      },
      {
        type: "paragraph",
        content: "For years, logistics was treated as a post-checkout function. But now, brands are turning to their logistics partners for pre-sale, sale, and post-sale support—seamlessly integrated into the supply chain.",
      },
      {
        type: "paragraph",
        content: "The best logistics providers today are not just offering transport—they're offering a platform: An operating system that helps brands manage SKUs, accelerate conversion, and create differentiated customer experiences.",
      },
      {
        type: "heading",
        content: "The Rise of Value-Added Services (VAS)",
      },
      {
        type: "paragraph",
        content: "Here's how eCommerce logistics is transforming into a value chain of its own:",
      },
      {
        type: "heading",
        content:"1. Cataloging & Photography",
      },
      {
        type: "paragraph",
        content:"The first battle in online selling is getting discovered—and that begins with great product listings. Logistics partners like Shiprocket and Pickrr now offer in-warehouse cataloging and photography setups, ensuring that every SKU is marketplace-ready.",
      },
      {
        type: "paragraph",
        content:"•	Clean images, compliant descriptions, keyword-optimized copy—all while SKUs are being received or stored.",
      },
      {
        type: "paragraph",
        content:"•	Cuts down time-to-list by days, sometimes weeks.",
      },
      {
        type: "heading",
        content:"2. Kitting, Bundling & Custom Assembly",
      },
      {
        type: "paragraph",
        content:"Whether it's influencer drop kits, festive combos, or gift boxes—brands often need customized fulfillment. Leading 3PLs now support: ",
      },
      {
        type: "paragraph",
        content:"•	Pre-shipping kitting and assembly. ",
      },
      {
        type: "paragraph",
        content:"•	Subscription box builds. ",
      },
      {
        type: "paragraph",
        content:"•	Personalized packaging at the last mile",
      },
      {
        type: "paragraph",
        content: "This capability is especially critical for D2C brands running marketing-led promos, where brand experience is non-negotiable.",
      },
      {
        type: "heading",
        content: "3. Inventory Intelligence & SKU Optimization",
      },
      {
        type: "paragraph",
        content: "Players like Increff go deeper into inventory data—offering brands insights on:",
      },
      {
        type: "paragraph",
        content: "•	What SKUs move faster in which locations. ",
      },
      {
        type: "paragraph",
        content: "•	Which ones should be marked for liquidation. ",
      },
      {
        type: "paragraph",
        content: "•	What can be clubbed for better AOVs or conversion. ",
      },
      {
        type: "paragraph",
        content: "This SKU intelligence enables smarter warehousing, zoning, and even demand forecasting. ",
      },
      {
        type: "heading",
        content: "4. Marketplace & Payment Reconciliation",
      },
      {
        type: "paragraph",
        content: "With brands selling across Flipkart, Amazon, Myntra, D2C websites and WhatsApp—tracking receivables, returns, commissions becomes a nightmare.",
      },
      {
        type: "paragraph",
        content: "•	Integrated dashboards with marketplace APIs. ",
      },
      {
        type: "paragraph",
        content: "•	Real-time reconciliation and dispute management. ",
      },
      {
        type: "paragraph",
        content: "•	Automated GST and invoice generation. ",
      },
      {
        type: "paragraph",
        content: "What used to be a founder’s side hustle has now been productized by logistics partners. ",
      },
      {
        type: "heading",
        content: "5. Return Management & Refurbishment",
      },
      {
        type: "paragraph",
        content: "Reverse logistics is expensive—and a bad experience here can tank customer LTV. New-age partners now offer:",
      },
      {
        type: "paragraph",
        content: "•	Return QC at warehouse entry. ",
      },
      {
        type: "paragraph",
        content: "•	Grading and repackaging for refurbished resale. ",
      },
      {
        type: "paragraph",
        content: "•	Reason tagging to reduce NDRs and identify patterns. ",
      },
      {
        type: "paragraph",
        content: "This ensures more returns are salvaged rather than scrapped—driving margin recovery.",
      },
      {
        type: "heading",
        content: "Why This Model Works",
      },
      {
        type: "paragraph",
        content: "The logic is simple: eCommerce brands today want to focus on growth, not grunt work. They want to outsource the operational mess—without losing control of the customer experience. By embedding deeper into the brand’s lifecycle, logistics players are:",
      },
      {
        type: "paragraph",
        content: "•	Reducing CACs (through faster cataloging). ",
      },
      {
        type: "paragraph",
        content: "•	Improving retention (through better delivery experience). ",
      },
      {
        type: "paragraph",
        content: "•	Boosting margins (via smarter returns and inventory use). ",
      },
      {
        type: "paragraph",
        content: "The more value a logistics player can add, the stickier they become in the brand’s stack.",
      },
      {
        type: "paragraph",
        content: "In a world where delivery timelines are increasingly commoditized, it’s everything else around logistics that builds loyalty.",
      },
      {
        type: "paragraph",
        content: "•	Pre-sale: Are your products listed well and discovered fast?",
      },
      {
        type: "paragraph",
        content: "•	During-sale: Can you offer unboxing delight, personalization, or speed of delivery?",
      },
      {
        type: "paragraph",
        content: "•	Post-sale: Do your returns work as smoothly as your checkout?",
      },
      {
        type: "paragraph",
        content: "The answer to each lies not with your product team—but often, with your logistics partner.",
      },
      {
        type: "paragraph",
        content: "In today’s eCommerce game, logistics isn’t the backend—it’s the brand experience. And the best logistics providers aren’t just carriers anymore. They’re incubators in disguise.   — Samarth",
      },
    ],    
    relatedPosts: [
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
      {
        title: "Dark Stores vs General Stores",
        slug: "dark-stores-vs-general-stores",
        image: "../Blogs_Covers/Blogs_Covers/Dark Stores vs General Stores.jpg",
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
