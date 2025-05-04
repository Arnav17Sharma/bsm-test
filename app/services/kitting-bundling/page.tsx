import { Button } from "@/components/ui/button"
import { ArrowRight, Gift, CheckCircle, Package, ShoppingBag, DollarSign } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import Footer from "@/components/footer"
export default function KittingBundlingPage() {
  const features = [
    {
      title: "Bundle Design and Creation",
      description: "Strategic product combinations to maximize average order value and customer satisfaction.",
      icon: <Gift className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Seasonal Kit Planning",
      description: "Specialized product bundles for holidays, festivals, and seasonal promotions.",
      icon: <ShoppingBag className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Custom Packaging Solutions",
      description: "Branded packaging design and execution for enhanced unboxing experience.",
      icon: <Package className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Value Proposition Development",
      description: "Creating compelling bundle offers that highlight value and drive conversions.",
      icon: <DollarSign className="h-5 w-5 text-blue-500" />,
    },
  ]

  const benefits = [
    "Increased average order value (AOV) through strategic bundling",
    "Enhanced product discovery for complementary items",
    "Improved inventory turnover for slow-moving products",
    "Seasonal revenue boosts through themed kits",
    "Differentiated brand experience through custom packaging",
  ]

  const solutions = [
    "Gift Sets",
    "Starter Kits",
    "Value Packs",
    "Trial Bundles",
    "Seasonal Collections",
    "Limited Edition Boxes",
    "Subscription Boxes",
    "Cross-Category Bundles",
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
              <Gift className="mr-1 h-3.5 w-3.5" />
              Bundling Solutions
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
              Customized Kitting & Bundling Solutions
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              Product packaging strategies to boost average order value (AOV)
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                BSM's Customized Kitting & Bundling Solutions help brands create strategic product combinations that
                drive higher average order values and enhance customer satisfaction. Our end-to-end approach covers
                everything from bundle strategy to packaging design and fulfillment.
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
                  src="/19472297_6106297 1.svg"
                  alt="E-Commerce Fulfillment"
                  className="object-cover w-full h-full p-10"
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
              <h2 className="text-3xl font-bold">Bundling Solutions</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-950/30 dark:to-red-950/20 p-4 rounded-lg text-center border border-blue-100 dark:border-blue-900"
                  >
                    <p className="font-medium">{solution}</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Average Order Value?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how our kitting and bundling solutions can help increase your sales and enhance customer
            experience.
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

