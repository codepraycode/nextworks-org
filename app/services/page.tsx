import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Network, Shield, Camera, Cog, GraduationCap, Users, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Design, implement, and optimize enterprise-grade network solutions including LAN/WAN, wireless networks, and data centers.",
    features: ["Network Design & Planning", "Infrastructure Setup", "Performance Optimization", "Network Security"],
    href: "/services/network-infrastructure",
  },
  {
    icon: Shield,
    title: "IT Services",
    description:
      "Comprehensive IT support and managed services to ensure your technology infrastructure runs smoothly 24/7.",
    features: ["Help Desk Support", "System Maintenance", "Cloud Services", "Disaster Recovery"],
    href: "/services/it-services",
  },
  {
    icon: Camera,
    title: "IP Surveillance",
    description:
      "Advanced security camera systems with intelligent analytics, remote monitoring, and seamless integration.",
    features: ["CCTV Installation", "Remote Monitoring", "Video Analytics", "Access Control"],
    href: "/services/ip-surveillance",
  },
  {
    icon: Cog,
    title: "Automation",
    description:
      "Smart building automation and IoT solutions for enhanced operational efficiency and intelligent control.",
    features: ["Building Automation", "IoT Integration", "Smart Controls", "Energy Management"],
    href: "/services/automation",
  },
  {
    icon: Users,
    title: "Consultancy",
    description: "Expert technology consulting to guide your digital transformation and optimize your IT strategy.",
    features: ["IT Strategy", "Digital Transformation", "Technology Assessment", "Project Management"],
    href: "/services/consultancy",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description:
      "Professional training programs designed to upskill your team on the latest technologies and best practices.",
    features: ["Technical Training", "Certification Prep", "Custom Workshops", "Ongoing Support"],
    href: "/services/training",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="font-display text-4xl font-bold tracking-tight text-balance lg:text-6xl">Our Services</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Comprehensive technology solutions designed to empower your business and drive digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="group hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="link" className="p-0 h-auto group/link">
                      <Link href={service.href}>
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand that every business is unique. Let's discuss how we can tailor our services to meet your
              specific needs.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
