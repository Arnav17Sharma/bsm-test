"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, User, MessageSquare, Building } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import GridBackground from "@/components/grid-background"
import SectionDivider from "@/components/section-divider"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        })
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        })
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridBackground className="opacity-30" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
              Contact Us
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
              Ready to scale your brand with high-performance distribution? Let's talk.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-red-100 dark:from-blue-900/30 dark:to-red-900/30 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-muted-foreground">
                    HQ in Delhi-NCR, operating across India's major logistics hubs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-red-100 dark:from-blue-900/30 dark:to-red-900/30 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">Samarth@bsmarketingcompany.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-red-100 dark:from-blue-900/30 dark:to-red-900/30 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground">+91 9711577145 (Samarth)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-red-100 dark:from-blue-900/30 dark:to-red-900/30 flex items-center justify-center">
                  <Building className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday: 9:30 AM - 6:30 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl mt-8 border border-blue-100 dark:border-blue-900 shadow-sm">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.796760631012!2d77.13443997554269!3d28.63585277566295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d1300ed4bed%3A0xa30e0bf694a5fda1!2sB.S%20Marketing%20Co.%20(BSM%20India)!5e0!3m2!1sen!2sin!4v1746561453718!5m2!1sen!2sin" style={{width: "-webkit-fill-available",height: "-webkit-fill-available"}}></iframe>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border border-blue-100 dark:border-blue-900">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                  </div>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-blue-100 dark:border-blue-900"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="border-blue-100 dark:border-blue-900"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                  </div>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="border-blue-100 dark:border-blue-900"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                  </div>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={4}
                    required
                    className="border-blue-100 dark:border-blue-900"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
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
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold">Our Locations</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl">
              BSM operates across India with strategically located warehouses and distribution centers
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 text-center">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-blue-100 dark:border-blue-900">
              <h3 className="font-semibold text-lg mb-2">Delhi-NCR (Headquarters)</h3>
              <p className="text-muted-foreground mb-4">
                A-81, Industrial Area Phase I, Naraina Industrial Area Phase 1, Naraina
                <br />
                New Delhi, Delhi, 110028
              </p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-blue-500" />
                <span>+91 9711577145</span>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-blue-100 dark:border-blue-900">
              <h3 className="font-semibold text-lg mb-2">Mumbai Office</h3>
              <p className="text-muted-foreground mb-4">
                Bhiwandi
              </p>
              {/* <div className="flex items-center justify-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-blue-500" />
                <span>+91 9876543210</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
