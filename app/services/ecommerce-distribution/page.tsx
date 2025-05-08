import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart, CheckCircle, BarChart2, Package, Truck } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import Footer from "@/components/footer"
export default function EcommerceDistributionPage() {
  const features = [
    {
      title: "Pan-India Single Distribution Partner",
      description: "We operate warehouses across the country and offer comprehensive supply chain and distribution services, making us your all-in-one logistics partner. This means you enjoy the simplicity of dealing with a single provider while delivering top-tier service to your customers.",
      icon: <ShoppingCart className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Dedicated E-Commerce Distribution",
      description: "With our deep e-commerce expertise and extensive warehousing infrastructure, we tailor our distribution solutions to meet your order processing needs—whether they come from your own website or an online marketplace.",
      icon: <BarChart2 className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Automated Reporting",
      description: "We prioritize smart use of technology, which is why our ERP systems are equipped with automated, scheduled reporting. Additionally, you have the flexibility to generate real-time reports whenever needed.",
      icon: <Package className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Inventory Planning",
      description: "E-commerce is a fast-paced marketplace with constantly shifting demand patterns, requiring agile inventory management. Our planning approach is shaped by hands-on experience working with leading FMCG brands, ensuring accuracy and responsiveness.",
      icon: <Truck className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Key Insights for Sales Enhancement",
      description: "E-commerce provides valuable insights into consumer purchasing behavior, allowing us to identify key patterns and anomalies. These insights help us craft more effective sales strategies tailored to your target audience.",
      icon: <Truck className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Dedicated Account Manager",
      description: "While our systems are advanced and efficiently designed, we strongly believe in the importance of human interaction. That’s why we assign a dedicated account manager to provide personalized support and ensure smooth collaboration.",
      icon: <Truck className="h-5 w-5 text-blue-500" />,
    },
  ]

  const benefits = [
    "Increased marketplace visibility and sales",
    "Reduced logistics costs by up to 30%",
    "Elimination of stockouts and excess inventory",
    "Improved customer satisfaction through faster delivery",
    "Enhanced brand reputation through consistent fulfillment",
  ]

  const accounts = [
    { name: "Firstcry", logo: "/accounts/firstcry-logo-png_seeklogo-386678.png" },
    { name: "Amazon", logo: "/accounts/amazon.svg" },
    { name: "Zepto", logo: "/accounts/Logo_of_Zepto.png" },
    { name: "Apollo Pharmacy", logo: "/accounts/apollo.png" },
    { name: "Foxy", logo: "/accounts/foxy_logo.png" },
    { name: "Blinkit", logo: "/accounts/blinkit.png" },
    { name: "Swiggy Instamart", logo: "/accounts/instamart.png" },
    { name: "Big Basket", logo: "/accounts/BigBasket_Logo.svg.png" },
    { name: "Purplle", logo: "/accounts/purplle5775.logowik.com.webp" },
    { name: "Tata1MG", logo: "/accounts/2a618394e93bbdf6c4515463df2651af.jpg" },
    { name: "Pharmeasy", logo: "/accounts/pharmeasy-logo-png_seeklogo-471933.png" },
    { name: "Truemeds", logo: "/accounts/48848.png" },
    { name: "Netmeds", logo: "/accounts/images.png" },
  ]  

  const platforms = ["/amazon.svg", "/Flipkart-logo.jpg", "/myntra-logo-01.jpg", "/nykaa-logo-png_seeklogo-358073.png", "/blinkit-logo-png_seeklogo-438944.png", "/Logo_of_Zepto.png", "/BigBasket_Logo.svg.png", "/JioMart-.jpg"]

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-30" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-400 mb-4">
              <ShoppingCart className="mr-1 h-3.5 w-3.5" />
              E-Commerce Solutions
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
              E-Commerce Distribution & Fulfillment
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              Optimized logistics for Amazon, Flipkart, Blinkit, Zepto, and D2C platforms
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                BSM's E-Commerce Distribution & Fulfillment service provides end-to-end solutions for brands looking to
                maximize their online sales potential. Our technology-driven approach ensures optimal inventory
                placement, efficient order processing, and seamless marketplace integration.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Key Features</h2>
                <div className="grid gap-3 sm:grid-cols-2">
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
                  src="/E-Commerce%20Distribution%20&%20Fulfillment%201.svg"
                  alt="E-Commerce Fulfillment"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
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
                    <img src={platform} alt="" />
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
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your E-Commerce Distribution?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how our tech-enabled e-commerce solutions can accelerate your online sales growth.
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

