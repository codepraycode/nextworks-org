import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Enterprise Network Deployment",
    client: "Financial Services Company",
    category: "Network Infrastructure",
    description:
      "Complete network infrastructure overhaul for a leading financial institution, including fiber optic cabling, switches, and security systems.",
    image: "/modern-office-network-infrastructure.jpg",
    tags: ["Networking", "Security", "Enterprise"],
  },
  {
    id: 2,
    title: "Smart Building Automation",
    client: "Commercial Real Estate",
    category: "Automation",
    description:
      "Integrated building automation system controlling HVAC, lighting, and access control for a 20-story commercial building.",
    image: "/smart-building-automation-system.jpg",
    tags: ["Automation", "IoT", "Smart Building"],
  },
  {
    id: 3,
    title: "IP Surveillance System",
    client: "Retail Chain",
    category: "Security",
    description:
      "Deployed comprehensive IP surveillance system across 15 retail locations with centralized monitoring and analytics.",
    image: "/security-camera-surveillance-system.jpg",
    tags: ["Surveillance", "Security", "Retail"],
  },
  {
    id: 4,
    title: "Data Center Migration",
    client: "Technology Startup",
    category: "IT Services",
    description:
      "Seamless migration of critical infrastructure to a new data center with zero downtime and enhanced redundancy.",
    image: "/data-center-server-room.png",
    tags: ["Data Center", "Migration", "Cloud"],
  },
  {
    id: 5,
    title: "Wireless Network Expansion",
    client: "Educational Institution",
    category: "Network Infrastructure",
    description: "Campus-wide wireless network deployment supporting 5,000+ concurrent users with seamless roaming.",
    image: "/university-campus-wifi-network.jpg",
    tags: ["Wireless", "Education", "Networking"],
  },
  {
    id: 6,
    title: "Cybersecurity Implementation",
    client: "Healthcare Provider",
    category: "IT Services",
    description:
      "Comprehensive cybersecurity solution including firewall, intrusion detection, and security training programs.",
    image: "/cybersecurity-network-protection.png",
    tags: ["Security", "Healthcare", "Compliance"],
  },
]

export default function PortfolioPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-balance lg:text-5xl">Our Portfolio</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Explore our successful projects and see how we've helped businesses transform their technology
              infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-balance">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.client}</p>
                  <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 leading-relaxed">
              Let's discuss how we can help transform your technology infrastructure.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Contact Us
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
