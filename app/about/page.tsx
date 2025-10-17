import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users, ArrowRight } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our clients' success is our success. We prioritize understanding and meeting their needs.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and innovative approaches to solve complex challenges.",
  },
  {
    icon: Eye,
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and the highest ethical standards.",
  },
]

const milestones = [
  {
    year: "2008",
    event: "Company Founded",
    description: "Started with a vision to transform businesses through technology",
  },
  { year: "2012", event: "500+ Clients", description: "Reached milestone of serving over 500 satisfied clients" },
  { year: "2018", event: "Regional Expansion", description: "Expanded operations across West Africa" },
  { year: "2024", event: "Industry Leader", description: "Recognized as a leading technology solutions provider" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="font-display text-4xl font-bold tracking-tight text-balance lg:text-6xl">About NeXtworks</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Empowering businesses across Nigeria with innovative technology solutions since 2008
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8">
                <img
                  src="/modern-office-technology-company.jpg"
                  alt="NeXtworks Office"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2008, NeXtworks began with a simple mission: to help businesses harness the power of
                  technology to achieve their goals. What started as a small team of passionate technologists has grown
                  into one of Nigeria's leading technology solutions providers.
                </p>
                <p>
                  Over the years, we've had the privilege of working with hundreds of organizations across various
                  industries, from small businesses to large enterprises. Our commitment to excellence, innovation, and
                  customer satisfaction has been the cornerstone of our success.
                </p>
                <p>
                  Today, we continue to push boundaries, embracing new technologies and methodologies to deliver
                  solutions that not only meet but exceed our clients' expectations. Our team of experienced
                  professionals brings together expertise in network infrastructure, IT services, security, automation,
                  and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and
                  create lasting value. We are committed to delivering excellence through expertise, integrity, and
                  customer-focused service.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted technology partner for businesses across Africa, recognized for our innovation,
                  reliability, and transformative impact. We envision a future where technology seamlessly enables every
                  organization to reach its full potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="text-center">
                  <CardContent className="pt-6 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Key milestones in our growth story</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative">
                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <div className="font-display text-3xl font-bold text-primary">{milestone.year}</div>
                    <h3 className="font-semibold text-lg">{milestone.event}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
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
                Meet Our Team
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Get to know the talented professionals behind our success
              </p>
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/team">
                  View Our Team
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
