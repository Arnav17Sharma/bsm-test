import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, CheckCircle, LineChart, TrendingUp, DollarSign } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import Footer from "@/components/footer"

export default function PricingInventoryPage() {
  const features = [
    {
      title: "Competitive Price Monitoring",
      description: "Real-time tracking of competitor pricing across all sales channels.",
      icon: <BarChart3 className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Margin Optimization",
      description: "Strategic pricing recommendations to maximize profitability while maintaining competitiveness.",
      icon: <DollarSign className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Inventory Turnover Analysis",
      description: "Data-driven insights to optimize stock levels and improve cash flow.",
      icon: <LineChart className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Promotional Planning",
      description: "Strategic discount and promotion scheduling to drive sales while protecting margins.",
      icon: <TrendingUp className="h-5 w-5 text-blue-500" />,
    },
  ]

  const benefits = [
    "Increased profit margins through optimized pricing",
    "Reduced excess inventory and associated carrying costs",
    "Improved cash flow through faster inventory turnover",
    "Data-backed promotional strategies that drive sales",
    "Enhanced competitive positioning in the marketplace",
  ]

  const tools = [
    "AI-Powered Price Optimization",
    "Demand Forecasting Engine",
    "Inventory Health Dashboard",
    "Competitive Analysis Tools",
    "Margin Impact Simulator",
    "Promotion ROI Calculator",
    "Channel Performance Tracker",
    "Seasonal Trend Analyzer",
  ]

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-30" fadeDirection="top" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-400 mb-4">
              <BarChart3 className="mr-1 h-3.5 w-3.5" />
              Strategic Optimization
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
              Strategic Pricing & Inventory Management
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              Optimized stock levels and revenue-maximizing pricing strategies
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                BSM's Strategic Pricing & Inventory Management service leverages advanced analytics to optimize your
                product pricing and inventory levels across all sales channels. Our data-driven approach ensures maximum
                profitability while maintaining optimal stock levels.
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
                  src="/37113966_8487303 1.svg"
                  alt="E-Commerce Fulfillment"
                  className="object-cover w-full h-full p-5"
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
              <h2 className="text-3xl font-bold">Our Tools & Technologies</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-950/30 dark:to-red-950/20 p-4 rounded-lg text-center border border-blue-100 dark:border-blue-900"
                  >
                    <p className="font-medium">{tool}</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Pricing and Inventory?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how our strategic pricing and inventory management solutions can help maximize your
            profitability.
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

