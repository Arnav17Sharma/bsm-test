import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, CheckCircle, Clock, Package, Truck } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import Footer from "@/components/footer"

export default function QuickCommercePage() {
  const features = [
    {
      title: "Dark Store Inventory Management",
      description: "Strategic inventory placement across dark stores for <10-minute delivery fulfillment.",
      icon: <Package className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Real-Time Stock Visibility",
      description: "Live inventory tracking across all quick commerce platforms and dark stores.",
      icon: <Zap className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Rapid Replenishment Cycles",
      description: "Ultra-fast restocking to ensure continuous product availability.",
      icon: <Clock className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Demand Forecasting",
      description: "AI-powered prediction of quick commerce demand patterns by location and time.",
      icon: <Truck className="h-5 w-5 text-blue-500" />,
    },
  ]

  const benefits = [
    "Capture the growing quick commerce market segment",
    "Ensure consistent product availability for impulse purchases",
    "Minimize stockouts during peak demand periods",
    "Optimize inventory allocation based on hyperlocal demand",
    "Increase brand visibility on rapid delivery platforms",
  ]

  const platforms = [
    "Blinkit",
    "Zepto",
    "Swiggy Instamart",
    "BigBasket Now",
    "Dunzo",
    "JioMart Express",
    "Flipkart Quick",
    "Amazon Fresh",
  ]

  const accounts = [
    { name: "Amazon", logo: "/accounts/amazon.svg" },
    { name: "Zepto", logo: "/accounts/Logo_of_Zepto.png" },
    { name: "Blinkit", logo: "/accounts/blinkit.png" },
    { name: "Swiggy Instamart", logo: "/accounts/instamart.png" },
    { name: "Big Basket", logo: "/accounts/BigBasket_Logo.svg.png" },
    { name: "Flipkart", logo: "/Flipkart-logo.jpg" },
  ]

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-30"/>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-400 mb-4">
              <Zap className="mr-1 h-3.5 w-3.5" />
              Quick Commerce Solutions
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
              Quick Commerce Execution
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              Rapid inventory allocation for &lt;10-minute delivery platforms
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                BSM's Quick Commerce Execution service enables brands to capitalize on the explosive growth of
                ultra-fast delivery platforms. Our specialized approach ensures your products are strategically
                positioned for immediate availability across dark stores and quick commerce networks.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Key Features</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-card p-4 rounded-lg border border-blue-100 dark:border-blue-900">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <h3 className="font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
            <div className="overflow-hidden rounded-xl">
                <div className="absolute inset-0 z-10"></div>
                <img
                  src="/40467513_8841404 1.svg"
                  alt="E-Commerce Fulfillment"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-20" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Benefits</h2>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                    </div>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Supported Platforms</h2>
              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-950/30 dark:to-red-950/20 p-4 rounded-lg text-center border border-blue-100 dark:border-blue-900"
                  >
                    <p className="font-medium">{platform}</p>
                  </div>
                ))}
              </div> */}
              <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6">
                {accounts.map((brand, index) => (
                  <div
                    key={index}
                    className="h-20 w-50 p-4 bg-white dark:bg-slate-800 flex flex-col items-center justify-center rounded-xl bg-white dark:bg-slate-900 shadow-lg transition-all border border-blue-100 dark:border-blue-900 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="object-contain mb-2" style={{width: "140px", height: "120px"}}/>
                    {/* <p className="text-sm font-medium">{brand.name}</p> */}
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-red-600/10">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Quick Commerce Presence?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how our quick commerce solutions can help your brand capitalize on the ultra-fast delivery
            revolution.
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
      <Footer />
    </main>
  )
}

