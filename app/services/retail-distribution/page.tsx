import { Button } from "@/components/ui/button"
import { ArrowRight, Store, CheckCircle, BarChart2, Package, Truck } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import Footer from "@/components/footer"
import CountUp from "@/components/countup";

export default function RetailDistributionPage() {
  const features = [
    {
      title: "Retail Chain Onboarding",
      description: "Strategic partnerships with major supermarkets, pharmacies, and specialty retailers.",
      icon: <Store className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Stock Replenishment Planning",
      description: "Data-driven inventory management to ensure optimal stock levels at all times.",
      icon: <BarChart2 className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Point-of-Sale Optimization",
      description: "Strategic product placement and merchandising for maximum visibility and sales.",
      icon: <Package className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Trade Marketing Support",
      description: "Comprehensive in-store promotions and brand visibility enhancement.",
      icon: <Truck className="h-5 w-5 text-blue-500" />,
    },
  ]

  const benefits = [
    "Expanded retail presence across multiple channels",
    "Reduced stockouts and improved product availability",
    "Enhanced brand visibility through strategic merchandising",
    "Streamlined logistics and cost-efficient distribution",
    "Real-time sales tracking and performance analytics",
  ]

  const accounts = [
    { name: "WHSmith", logo: "/retailers/WHSmith-Logo.wine.png" },
    { name: "Foodhall", logo: "/retailers/Logo-Foodhall.png" },
    { name: "Apollo Hospitals", logo: "/retailers/apollo.png" },
    { name: "LOTS Wholesale Solutions", logo: "/retailers/LogoLandscapeNoborder.png" },
    { name: "JioMart", logo: "/retailers/JioMart-.jpg" },
    { name: "Modern Bazaar", logo: "/retailers/handibazaar-client-31 (1).png" },
    { name: "BIG BAZAAR", logo: "/retailers/Big_Bazaar_Logo.svg.png" },
    { name: "Le Marche", logo: "/retailers/handibazaar-client-31.png" },
    { name: "Reliance SMART", logo: "/retailers/Reliance-Smart-Bazaar-Airia-Mall-Gurugram-Delhi.png" },
    { name: "VISHAL Mega Mart", logo: "/retailers/VMM-1.png" },
    { name: "Spencer’s", logo: "/retailers/SPENCERS.NS_BIG-9b99c75c.png" },
    { name: "Easyday", logo: "/retailers/Easyday_logo.png" },
    { name: "More (Hamesha Extra)", logo: "/retailers/53.png" },
    { name: "Fortis", logo: "/retailers/fortis-hospitals-logo-png_seeklogo-214982.png" },
    { name: "All Class A/ B / C Outlets", logo: "/retailers/Group 32.png" },
  ]  
  const metrics = [
    { label: "Number of Outlets Serviced", value: 1500, suffix: "+" },
    { label: "Universe coverate", value: 95, suffix: "%" },
    { label: "Number of MT Chains covered", value: 18, suffix: "+" },
    { label: "On Time Delivery Rate", value: 99.8, suffix: "%" },
    { label: "Beat Compliance", value: 100, suffix: "%" },

  ]

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-30" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-400 mb-4">
              <Store className="mr-1 h-3.5 w-3.5" />
              Retail Solutions
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
              Retail & Modern Trade Distribution
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              High-efficiency stock movement for supermarkets, pharmacies, and institutional sales
            </p>
          </div>

          <div
              className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5 w-full max-w-auto mx-auto"
            >
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-blue-100 dark:border-blue-900 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-center h-40"
                >
                  <CountUp
                    end={metric.value}
                    suffix={metric.suffix}
                    className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 block mb-2"
                  />
                  <span className="text-md text-muted-foreground mt-3 font-bold mx-2 whitespace-normal">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                BSM's Retail & Modern Trade Distribution service provides comprehensive solutions for brands looking to
                maximize their physical retail presence. Our strategic approach ensures optimal product placement,
                efficient stock replenishment, and enhanced brand visibility across retail channels.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Key Features</h2>
                <div className="grid gap-4 grid-cols-2">
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
                  src="/7709397_3721088.svg?"
                  alt="E-Commerce Fulfillment"
                  className="object-cover lg:h-[40rem]"
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
              <h2 className="text-3xl font-bold">Partner Retailers</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
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
          <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Retail Presence?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how our retail distribution solutions can help your brand reach more customers.
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

