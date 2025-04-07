import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Store, Zap, Package, BarChart3, Gift, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: "E-Commerce Distribution & Fulfillment",
      description: "Optimized logistics for Amazon, Flipkart, Blinkit, Zepto, and D2C platforms.",
      features: [
        "Marketplace account management",
        "Inventory forecasting and planning",
        "Order processing and fulfillment",
        "Returns management",
        "Performance analytics",
      ],
    },
    {
      icon: <Store className="h-10 w-10 text-primary" />,
      title: "Retail & Modern Trade Distribution",
      description: "High-efficiency stock movement for supermarkets, pharmacies, and institutional sales.",
      features: [
        "Retail chain onboarding",
        "Stock replenishment planning",
        "Point-of-sale optimization",
        "Trade marketing support",
        "Sales performance tracking",
      ],
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Quick Commerce Execution",
      description: "Rapid inventory allocation for <10-minute delivery platforms.",
      features: [
        "Dark store inventory management",
        "Real-time stock visibility",
        "Rapid replenishment cycles",
        "Performance optimization",
        "Demand forecasting",
      ],
    },
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: "Super Stockist & C&F Services",
      description: "High-speed, cost-efficient product distribution across regions.",
      features: [
        "Regional distribution management",
        "Retailer network development",
        "Secondary sales tracking",
        "Logistics optimization",
        "Inventory control",
      ],
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Strategic Pricing & Inventory Management",
      description: "Optimized stock levels and revenue-maximizing pricing strategies.",
      features: [
        "Competitive price monitoring",
        "Margin optimization",
        "Inventory turnover analysis",
        "Demand-based pricing",
        "Promotional planning",
      ],
    },
    {
      icon: <Gift className="h-10 w-10 text-primary" />,
      title: "Customized Kitting & Bundling Solutions",
      description: "Product packaging strategies to boost average order value (AOV).",
      features: [
        "Bundle design and creation",
        "Seasonal kit planning",
        "Gift set assembly",
        "Custom packaging solutions",
        "Value proposition development",
      ],
    },
  ]

  const industries = [
    "Personal Care & Beauty",
    "Pharmaceuticals & Healthcare",
    "Packaged Foods & Beverages",
    "Consumer Electronics & Lifestyle Products",
  ]

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              Comprehensive distribution and fulfillment solutions powered by technology and data
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="pb-2">
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Industries We Serve</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              Specialized distribution solutions for diverse product categories
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-muted/30 p-6 rounded-xl text-center hover:bg-primary/10 transition-colors duration-300"
              >
                <h3 className="font-semibold text-lg">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Distribution?</h2>
          <Link href="/contact">
            <Button size="lg">Contact Us Today</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

