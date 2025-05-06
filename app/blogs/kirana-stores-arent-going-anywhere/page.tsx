import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
export default function BlogDetailPage() {
  const blog = {
    title: "Kirana Stores Aren’t Going Anywhere—And Here’s Why",
    excerpt: "Exploring how technology is reshaping the e-commerce fulfillment landscape in India's diverse market.",
    image: "../Blogs_Covers/Blogs_Covers/Kirana Stores aren't going anywhere.png",
    date: "April 1, 2025",
    author: "Samarth Khandelwal",
    category: "Quick Commerce",
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        content: "In the flashy world of 10-minute deliveries and Gen-Z ordering groceries with emojis, it’s easy to assume India’s kirana stores are on borrowed time. After all, why wait at your local shop when Zepto or Blinkit can bring you a pack of chips before your kettle boils?",
      },
      {
        type: "paragraph",
        content: "But here’s the twist: kiranas are not dying. In fact, they’re thriving quietly in the background, powering 90% of India’s grocery retail and serving a market that quick commerce still can’t crack.",
      },
      {
        type: "heading",
        content: "The Market Everyone Forgets: Bharat > Bandra",
      },
      {
        type: "paragraph",
        content: "Quick commerce is exploding—growing at 70–80% YoY, fueled by urban convenience and VC cash. But its primary user? Let’s call her Aditi—from Bandra, late 20s, working professional, ordering hummus and almond milk after a long day.",
      },
      {
        type: "paragraph",
        content: "But India is full of Rahuls, Rams, and Ritas—who live in Tier-2 towns, run households on a tight budget, and shop almost daily in Rs. 5, Rs. 10, and Rs. 20 packs. These folks aren’t ordering Rs. 90 Dairy Milk bars off an app. They’re buying Rs. 5 packs of masala, Rs. 10 Britannia biscuits, and loose onions from the kirana next door.",
      },
      {
        type: "heading",
        content: "Kiranas: Masters of Sachet Strategy",
      },
      {
        type: "paragraph",
        content: "India’s consumer behavior has always been driven by small ticket, high frequency purchasing. The sachet revolution from the '80s still runs strong—whether it’s shampoo, chips, detergent, or cold drinks. Even FMCG majors are doubling down on LUPs (Low Unit Packs). Over 55% of Britannia’s sales come from small packs. Parle launched ‘Mini Frooti’ at Rs. 5. HUL makes billions off Rs. 1 and Rs. 5 SKUs. Guess who stocks them all? Your local kirana. Quick commerce, meanwhile, favors larger SKUs to boost Average Order Value (AOV). Rs. 5 Dairy Milk or Rs. 10 namkeen? Rarely found. A kirana has 10+ price points for every brand. Apps? Often just one.",
      },
      {
        type: "heading",
        content: "Price Matters. A Lot.",
      },
      {
        type: "paragraph",
        content: "Let’s talk onions. Literally.",
      },
      {
        type: "list",
        items: [
          {
            type: "heading",
            content: "Quick commerce: ₹61/kg",
          },
          {
            type: "heading",
            content: "Supermarkets: ₹56/kg",
          },
          {
            type: "heading",
            content: "Kiranas: ₹50/kg",
          },
        ]
      },
      {
        type: "paragraph",
        content: "Staples like pulses, oils, and veggies are still significantly cheaper at kiranas. And in a country where 90% of people earn under ₹24,000/month, ₹10 saved on onions matters more than a ₹10 delivery fee saved.",
      },
      {
        type: "heading",
        content: "Home Delivery? Already There.",
      },
      {
        type: "paragraph",
        content: "Think kiranas don’t deliver? Think again.",
      },
      {
        type: "paragraph",
        content: "From WhatsApp orders to missed calls, kiranas have quietly mastered low-tech delivery. No app needed. No sign-up. No cart value minimums. They know your name, your brand preference, and your house number.",
      },
      {
        type: "paragraph",
        content: "40% of a kirana’s orders are already home deliveries—done via walking boys or scooter fleets. And they’re profitable. Why? Zero CAC. Zero ops team. No 24x7 customer service chat.",
      },
      {
        type: "heading",
        content: "Quick Commerce Isn’t Killing Kiranas. It’s Replacing Supermarkets.",
      },
      {
        type: "paragraph",
        content: "The irony? Most customers switching to quick commerce aren’t coming from kiranas—they’re coming from supermarkets. A convenience-seeking, urban user base that never liked the long queues or weekend parking.",
      },
      {
        type: "paragraph",
        content: "Kirana loyalists are still where they’ve always been—buying small, buying often, and trusting the guy behind the counter.",
      },
      {
        type: "heading",
        content: "The Road Ahead",
      },
      {
        type: "paragraph",
        content: "The battle isn’t kirana vs. quick commerce. It’s about who serves India’s next billion consumers better. Kiranas already have the trust, product-market fit, and micro-fulfillment muscle. Imagine what happens when they start plugging into tech—inventory management, digital payments, or even live pricing sync with FMCG distributors.",
      },
      {
        type: "paragraph",
        content: "That’s where the real disruption lies.",
      },
      {
        type: "heading",
        content: "TL;DR:",
      },
      {
        type: "paragraph",
        content: "Quick commerce is fast. Kiranas are everywhere. The future isn’t about one replacing the other. It’s about learning to coexist—and perhaps collaborate. Because for all the buzz and burn, India still shops in sachets.",
      },
    ],    
    relatedPosts: [
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
      {
        title: "The Rise of Assisted Commerce in India",
        slug: "the-rise-of-assisted-commerce-in-india",
        image: "../Blogs_Covers/Blogs_Covers/future_ecomm.jpg",
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
