import Link from "next/link"
import { Package2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import GridBackground from "@/components/grid-background"

export default function Footer() {
  return (
    <footer className="relative bg-muted/40 border-t">
      <div className="absolute inset-0 overflow-hidden">
        <GridBackground className="opacity-10" />
      </div>
      <div className="container relative z-10 px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Package2 className="h-6 w-6 text-blue-500" />
              <span className="font-bold text-xl">BSM</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Next-generation, tech-enabled distribution and fulfillment company, optimizing omnichannel commerce for
              brands.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                  E-Commerce Distribution
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                  Retail Distribution
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                  Quick Commerce
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                  Inventory Management
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  HQ in Delhi-NCR, operating across India's major logistics hubs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <Link
                  href="mailto:Samarth@bsmarketingcompany.com"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  Samarth@bsmarketingcompany.com
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <Link
                  href="tel:+919711577145"
                  className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  +91 9711577145 (Samarth)
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} BSM (B S Marketing Company). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

