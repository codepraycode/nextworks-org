import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Network, Shield, Camera, Cog, GraduationCap, Users } from "lucide-react"

const services = [
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Enterprise-grade network design, implementation, and optimization for seamless connectivity.",
    href: "/services/network-infrastructure",
  },
  {
    icon: Shield,
    title: "IT Services",
    description: "Comprehensive IT support, maintenance, and managed services to keep your business running.",
    href: "/services/it-services",
  },
  {
    icon: Camera,
    title: "IP Surveillance",
    description: "Advanced security camera systems with remote monitoring and intelligent analytics.",
    href: "/services/ip-surveillance",
  },
  {
    icon: Cog,
    title: "Automation",
    description: "Smart building automation and IoT solutions for enhanced efficiency and control.",
    href: "/services/automation",
  },
  {
    icon: Users,
    title: "Consultancy",
    description: "Expert technology consulting to guide your digital transformation journey.",
    href: "/services/consultancy",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Professional training programs to upskill your team on the latest technologies.",
    href: "/services/training",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-5xl">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive technology solutions tailored to meet your business needs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={service.href}>Learn more →</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
