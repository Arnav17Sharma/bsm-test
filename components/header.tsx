"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Package2, Menu, X, ChevronDown, ShoppingCart, Store, Zap, Package, BarChart3, Gift } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#",
      dropdown: true,
      items: [
        {
          name: "E-Commerce Distribution & Fulfillment",
          href: "/services/ecommerce-distribution",
          icon: <ShoppingCart className="h-5 w-5 text-blue-500" />,
          description: "Optimized logistics for Amazon, Flipkart, Blinkit, Zepto, and D2C platforms.",
        },
        {
          name: "Retail & Modern Trade Distribution",
          href: "/services/retail-distribution",
          icon: <Store className="h-5 w-5 text-blue-500" />,
          description: "High-efficiency stock movement for supermarkets, pharmacies, and institutional sales.",
        },
        {
          name: "Quick Commerce Execution",
          href: "/services/quick-commerce",
          icon: <Zap className="h-5 w-5 text-blue-500" />,
          description: "Rapid inventory allocation for <10-minute delivery platforms.",
        },
        {
          name: "Super Stockist & C&F Services",
          href: "/services/stockist-services",
          icon: <Package className="h-5 w-5 text-blue-500" />,
          description: "High-speed, cost-efficient product distribution across regions.",
        },
        {
          name: "Strategic Pricing & Inventory Management",
          href: "/services/pricing-inventory",
          icon: <BarChart3 className="h-5 w-5 text-blue-500" />,
          description: "Optimized stock levels and revenue-maximizing pricing strategies.",
        },
        {
          name: "Customized Kitting & Bundling Solutions",
          href: "/services/kitting-bundling",
          icon: <Gift className="h-5 w-5 text-blue-500" />,
          description: "Product packaging strategies to boost average order value (AOV).",
        },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blogs", href: "/blogs" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Package2 className="h-6 w-6 text-blue-500" />
          <span className="font-bold text-xl">BSM</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6" ref={dropdownRef}>
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdown ? (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-500",
                    activeDropdown === item.name ? "text-blue-500" : "",
                  )}
                >
                  {item.name}
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", activeDropdown === item.name ? "rotate-180" : "")}
                  />
                </button>
              ) : (
                <Link href={item.href} className="text-sm font-medium transition-colors hover:text-blue-500">
                  {item.name}
                </Link>
              )}

              {item.dropdown && activeDropdown === item.name && (
                <div
                  className="absolute top-full left-0 mt-2 w-[320px] rounded-lg border bg-card shadow-lg overflow-hidden"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-1 gap-0.5 p-1">
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-start gap-3 rounded-md p-3 hover:bg-muted transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="mt-0.5">{subItem.icon}</div>
                        <div>
                          <div className="font-medium">{subItem.name}</div>
                          <div className="text-xs text-muted-foreground">{subItem.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700">
              Contact Us
            </Button>
          </Link>
          <ModeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-sm font-medium py-2 transition-colors hover:text-blue-500"
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            activeDropdown === item.name ? "rotate-180" : "",
                          )}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-blue-100 dark:border-blue-900">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-blue-500"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.icon}
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm font-medium py-2 transition-colors hover:text-blue-500 block"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/contact" className="w-full">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

