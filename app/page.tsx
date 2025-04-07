import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Brands from "@/components/brands"
import Process from "@/components/process"
import CaseStudies from "@/components/case-studies"
import BlogsSection from "@/components/blogs-section"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import SectionDivider from "@/components/section-divider"
import GridBackground from "@/components/grid-background"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-30" fadeDirection="top" />
        </div>
        <Hero />
      </div>
      <SectionDivider />
      <Services />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Brands />
      <SectionDivider />
      <Process />
      <SectionDivider />
      <CaseStudies />
      <SectionDivider />
      <BlogsSection />
      <SectionDivider />
      <div className="relative">
        <Cta />
      </div>
      <Footer />
    </main>
  )
}

