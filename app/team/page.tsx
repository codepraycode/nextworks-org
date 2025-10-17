import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Adebayo Ogunlesi",
    role: "Chief Executive Officer",
    image: "/professional-african-ceo-portrait.jpg",
    bio: "15+ years of experience in technology leadership and business strategy",
    linkedin: "#",
    email: "adebayo@nextworks.com",
  },
  {
    name: "Chioma Nwosu",
    role: "Chief Technology Officer",
    image: "/professional-african-woman-tech-leader.jpg",
    bio: "Expert in network infrastructure and enterprise solutions architecture",
    linkedin: "#",
    email: "chioma@nextworks.com",
  },
  {
    name: "Ibrahim Mohammed",
    role: "Head of IT Services",
    image: "/professional-african-it-manager.jpg",
    bio: "Specialist in managed services and IT operations management",
    linkedin: "#",
    email: "ibrahim@nextworks.com",
  },
  {
    name: "Funmi Adeyemi",
    role: "Head of Security Solutions",
    image: "/professional-african-woman-security-expert.jpg",
    bio: "Cybersecurity expert with focus on surveillance and access control",
    linkedin: "#",
    email: "funmi@nextworks.com",
  },
  {
    name: "Chukwudi Okafor",
    role: "Head of Automation",
    image: "/professional-african-automation-engineer.jpg",
    bio: "IoT and building automation specialist with 10+ years experience",
    linkedin: "#",
    email: "chukwudi@nextworks.com",
  },
  {
    name: "Amina Bello",
    role: "Head of Training",
    image: "/professional-african-woman-trainer.jpg",
    bio: "Passionate educator specializing in technical training and development",
    linkedin: "#",
    email: "amina@nextworks.com",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="font-display text-4xl font-bold tracking-tight text-balance lg:text-6xl">Our Team</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Meet the talented professionals driving innovation and excellence at NeXtworks
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="group hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  <div className="flex gap-3 pt-2">
                    <Link
                      href={member.linkedin}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href={`mailto:${member.email}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">Join Our Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're always looking for talented individuals who share our passion for technology and excellence. If
              you're interested in joining our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="mailto:careers@nextworks.com"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
