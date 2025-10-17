import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, CheckCircle2, ArrowRight } from "lucide-react"

const features = [
  "Technical Skills Training",
  "Certification Preparation",
  "Custom Workshops",
  "Hands-on Labs",
  "Online & In-Person Options",
  "Industry Best Practices",
  "Ongoing Support",
  "Progress Tracking",
]

const benefits = [
  {
    title: "Skilled Workforce",
    description: "Upskill your team with latest technologies",
  },
  {
    title: "Flexible Learning",
    description: "Choose from online or in-person training",
  },
  {
    title: "Expert Instructors",
    description: "Learn from experienced professionals",
  },
  {
    title: "Practical Skills",
    description: "Hands-on training with real-world scenarios",
  },
]

export default function TrainingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance lg:text-5xl">Training</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Professional training programs designed to upskill your team on the latest technologies and industry
                best practices for maximum productivity.
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
                  src="/professional-training-session-technology-worksh.jpg"
                  alt="Professional Training"
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
              Comprehensive training programs tailored to your team's needs
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
                Ready to Upskill Your Team?
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Invest in your team's growth with our professional training programs tailored to your needs.
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
