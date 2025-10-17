import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cog, CheckCircle2, ArrowRight } from "lucide-react"

const features = [
  "Building Automation Systems",
  "IoT Device Integration",
  "Smart Lighting Control",
  "HVAC Automation",
  "Energy Management Systems",
  "Automated Access Control",
  "Environmental Monitoring",
  "Centralized Control Platforms",
]

const benefits = [
  {
    title: "Energy Savings",
    description: "Reduce energy costs with intelligent automation",
  },
  {
    title: "Improved Efficiency",
    description: "Streamline operations with automated processes",
  },
  {
    title: "Remote Control",
    description: "Manage systems from anywhere via mobile app",
  },
  {
    title: "Enhanced Comfort",
    description: "Optimize environment for occupant comfort",
  },
]

export default function AutomationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Cog className="h-7 w-7" />
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance lg:text-5xl">Automation</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Transform your building into a smart, efficient space with our comprehensive automation and IoT
                solutions for enhanced control and energy savings.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Request Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/portfolio">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <img
                  src="/smart-building-automation-control-system.jpg"
                  alt="Building Automation"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive automation solutions for modern buildings and facilities
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">Key Benefits</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-12 lg:p-16">
            <div className="relative z-10 mx-auto max-w-2xl text-center space-y-6">
              <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground text-balance lg:text-4xl">
                Ready to Automate Your Building?
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Discover how our automation solutions can improve efficiency and reduce operational costs.
              </p>
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
