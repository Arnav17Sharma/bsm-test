import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart2, TrendingUp } from "lucide-react"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"
import Footer from "@/components/footer"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Sebamed India",
      description: "2,000% e-commerce sales growth (₹10L to ₹2 Cr/month) through optimized demand planning.",
      image: "/placeholder.svg?height=400&width=600",
      stats: {
        growth: "2,000%",
        timeframe: "12 months",
        channels: "4 marketplaces",
      },
      challenge: "Sebamed faced inventory stockouts and high logistics costs across multiple e-commerce platforms.",
      solution: "BSM implemented AI-driven demand forecasting and centralized inventory management.",
      results: "Increased sales by 2,000%, reduced logistics costs by 35%, and eliminated stockouts.",
      slug: "sebamed-india",
    },
    {
      title: "Cetaphil India",
      description: "Strategic inventory optimization increased revenue from ₹10L to ₹90L/month.",
      image: "/placeholder.svg?height=400&width=600",
      stats: {
        growth: "900%",
        timeframe: "8 months",
        channels: "6 marketplaces",
      },
      challenge: "Cetaphil struggled with inconsistent marketplace presence and high return rates.",
      solution: "BSM deployed strategic inventory allocation and optimized product listings.",
      results: "900% revenue growth, 65% reduction in returns, and expanded to 6 marketplaces.",
      slug: "cetaphil-india",
    },
    {
      title: "USV Limited",
      description: "Expanded quick commerce presence resulting in 300% sales growth in 6 months.",
      image: "/placeholder.svg?height=400&width=600",
      stats: {
        growth: "300%",
        timeframe: "6 months",
        channels: "5 quick commerce platforms",
      },
      challenge: "USV needed to rapidly scale their presence on emerging quick commerce platforms.",
      solution: "BSM created a specialized quick commerce fulfillment strategy with dark store integration.",
      results: "300% sales growth, 99.8% on-time delivery rate, and expanded to 5 platforms.",
      slug: "usv-limited",
    },
    {
      title: "Mother Sparsh",
      description: "Optimized modern trade distribution increasing retail presence by 400%.",
      image: "/placeholder.svg?height=400&width=600",
      stats: {
        growth: "400%",
        timeframe: "10 months",
        channels: "8 retail chains",
      },
      challenge: "Mother Sparsh faced challenges scaling their retail presence beyond metro cities.",
      solution: "BSM implemented a hub-and-spoke distribution model with real-time inventory tracking.",
      results: "400% increase in retail presence, expanded to 8 major retail chains, and 28% cost reduction.",
      slug: "mother-sparsh",
    },
  ]

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-30" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400 mb-4">
              <BarChart2 className="mr-1 h-3.5 w-3.5" />
              Client Results
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
              Success Stories
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              See how we've helped leading brands achieve remarkable growth through optimized distribution
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-blue-100 dark:border-blue-900"
              >
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-red-500/10 to-transparent z-10"></div>
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-red-600 text-white text-xs font-medium px-2 py-1 rounded-md z-20 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    {study.stats.growth} Growth
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{study.description}</p>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-md text-center">
                      <p className="text-xs text-muted-foreground">Growth</p>
                      <p className="font-medium text-sm">{study.stats.growth}</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-md text-center">
                      <p className="text-xs text-muted-foreground">Timeframe</p>
                      <p className="font-medium text-sm">{study.stats.timeframe}</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-md text-center">
                      <p className="text-xs text-muted-foreground">Channels</p>
                      <p className="font-medium text-sm">{study.stats.channels}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium">Challenge:</span>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Solution:</span>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Results:</span>
                      <p className="text-sm text-muted-foreground">{study.results}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/case-studies/${study.slug}`}>
                    <Button variant="ghost" className="group text-blue-600 dark:text-blue-400">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-red-600/10">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Become Our Next Success Story?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how our tech-enabled distribution solutions can accelerate your brand's growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-blue-200 dark:border-blue-800">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

