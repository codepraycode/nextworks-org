import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Building2, Users, Calendar, Target } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Enterprise Network Infrastructure",
        client: "British Airways",
        category: "Network Infrastructure",
        description:
            "Deployed comprehensive network infrastructure including optic fibre backbone and advanced IP voice systems for British Airways' Lagos operations, ensuring reliable connectivity for critical aviation operations.",
        image: "/images/portfolio/british-airways-network.jpg",
        tags: [
            "Optic Fibre",
            "IP Voice Systems",
            "Network Security",
            "Aviation",
        ],
        duration: "3 months",
        teamSize: "8 specialists",
        technologies: ["Cisco", "Cyberoam", "Fibre Optics"],
        outcomes: [
            "99.9% uptime",
            "Enhanced security",
            "Scalable infrastructure",
        ],
    },
    {
        id: 2,
        title: "Document Management System",
        client: "Reckitt Benckiser",
        category: "Information Services",
        description:
            "Implemented Microsoft SharePoint and LogicalDOC document management systems to streamline collaboration and document workflow across Reckitt Benckiser's Nigerian operations.",
        image: "/images/portfolio/reckitt-document-management.jpg",
        tags: [
            "SharePoint",
            "LogicalDOC",
            "Workflow Automation",
            "Collaboration",
        ],
        duration: "2 months",
        teamSize: "5 specialists",
        technologies: ["Microsoft SharePoint", "LogicalDOC", "Mdaemon"],
        outcomes: [
            "80% faster document retrieval",
            "Improved collaboration",
            "Secure archiving",
        ],
    },
    {
        id: 3,
        title: "IP Surveillance & Access Control",
        client: "Lufthansa Airlines",
        category: "IP Surveillance",
        description:
            "Installed enterprise-grade IP CCTV surveillance and Anviz biometric access control systems to enhance security at Lufthansa's Lagos office and operational areas.",
        image: "/images/portfolio/lufthansa-security.jpg",
        tags: [
            "IP CCTV",
            "Biometric Access",
            "Mobile Monitoring",
            "Aviation Security",
        ],
        duration: "6 weeks",
        teamSize: "4 specialists",
        technologies: ["Anviz Biometric", "IP Cameras", "Mobile Integration"],
        outcomes: ["Enhanced security", "Remote monitoring", "Access control"],
    },
    {
        id: 4,
        title: "University Network Infrastructure",
        client: "University of Port Harcourt",
        category: "Network Infrastructure",
        description:
            "Designed and implemented campus-wide network infrastructure including wireless solutions and network security systems to support academic and administrative operations.",
        image: "/images/portfolio/uniport-network.jpg",
        tags: ["Campus Network", "Wireless Solutions", "Education", "Security"],
        duration: "4 months",
        teamSize: "10 specialists",
        technologies: [
            "Wireless Access Points",
            "Network Security",
            "Structured Cabling",
        ],
        outcomes: [
            "Campus-wide coverage",
            "Secure network",
            "Scalable solution",
        ],
    },
    {
        id: 5,
        title: "Corporate IT Infrastructure",
        client: "Motorola Nigeria",
        category: "Network Infrastructure",
        description:
            "Complete IT infrastructure overhaul including network security, backup solutions, and disaster recovery systems for Motorola's Nigerian headquarters.",
        image: "/images/portfolio/motorola-infrastructure.jpg",
        tags: [
            "Network Security",
            "Disaster Recovery",
            "Enterprise",
            "Backup Solutions",
        ],
        duration: "3 months",
        teamSize: "6 specialists",
        technologies: ["Kaspersky", "GateProtect", "NAS Storage"],
        outcomes: ["Enhanced security", "Reliable backup", "Disaster recovery"],
    },
    {
        id: 6,
        title: "Healthcare IT Solutions",
        client: "LASUTH & Healthcare International",
        category: "IT Services",
        description:
            "Deployed comprehensive IT solutions including network infrastructure and security systems for healthcare institutions, ensuring compliance and reliability for critical healthcare operations.",
        image: "/images/portfolio/healthcare-it.jpg",
        tags: [
            "Healthcare",
            "Compliance",
            "Network Security",
            "Critical Systems",
        ],
        duration: "5 months",
        teamSize: "7 specialists",
        technologies: [
            "Secure Networks",
            "Compliance Systems",
            "Backup Solutions",
        ],
        outcomes: [
            "HIPAA compliance",
            "Reliable systems",
            "Enhanced patient care",
        ],
    },
];

const clientStats = [
    {
        value: "30+",
        label: "Enterprise Clients",
    },
    {
        value: "100+",
        label: "Projects Completed",
    },
    {
        value: "15+",
        label: "Years Experience",
    },
    {
        value: "98%",
        label: "Client Satisfaction",
    },
];

const industries = [
    {
        name: "Aviation & Travel",
        clients: ["British Airways", "Lufthansa", "Air France"],
        count: 8,
    },
    {
        name: "Corporate Enterprises",
        clients: ["Reckitt Benckiser", "Motorola", "Precision Logistics"],
        count: 12,
    },
    {
        name: "Education & Healthcare",
        clients: [
            "University of Port Harcourt",
            "LASUTH",
            "Healthcare International",
        ],
        count: 6,
    },
    {
        name: "Professional Services",
        clients: ["GHR Architects", "KOA Consulting", "STTA Nigeria"],
        count: 4,
    },
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
            {/* Enhanced Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-28">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
                    <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center space-y-8">
                        <div className="inline-flex items-center rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur-sm">
                            <span className="text-muted-foreground">
                                Proven Track Record
                            </span>
                        </div>

                        <h1 className="font-display text-4xl font-bold tracking-tight text-balance lg:text-6xl">
                            Our{" "}
                            <span className="text-gradient bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                Portfolio
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            Discover how we've helped leading organizations
                            across Nigeria transform their technology
                            infrastructure with innovative solutions and expert
                            implementation.
                        </p>

                        {/* Client Statistics */}
                        <div className="flex flex-wrap justify-center gap-8 pt-8">
                            {clientStats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="font-display text-2xl font-bold text-primary">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground max-w-24 mx-auto">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-16 bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="text-center space-y-6 mb-12">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">
                            Industries We Serve
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We've delivered successful technology solutions
                            across multiple sectors, understanding the unique
                            requirements of each industry.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {industries.map((industry, index) => (
                            <Card
                                key={industry.name}
                                className="border-0 bg-background text-center group hover:shadow-lg transition-all duration-300"
                            >
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center space-y-4">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Building2 className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h3 className="font-display font-semibold text-lg mb-2">
                                                {industry.name}
                                            </h3>
                                            <div className="space-y-1">
                                                {industry.clients.map(
                                                    (client, clientIndex) => (
                                                        <p
                                                            key={clientIndex}
                                                            className="text-sm text-muted-foreground"
                                                        >
                                                            {client}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                            <div className="mt-3 inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                                                {industry.count} projects
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="text-center space-y-6 mb-12">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">
                            Featured{" "}
                            <span className="text-primary">Projects</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore some of our most impactful technology
                            implementations for leading organizations.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <Card
                                key={project.id}
                                className="group overflow-hidden border-0 bg-background hover:shadow-xl transition-all duration-300"
                            >
                                {/* Project Image */}
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={
                                            project.image ||
                                            "/images/portfolio/project-placeholder.jpg"
                                        }
                                        alt={`${project.title} for ${project.client}`}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Client Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-block rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground">
                                            {project.client}
                                        </span>
                                    </div>
                                </div>

                                <CardContent className="p-6 space-y-4">
                                    {/* Project Title & Client */}
                                    <div className="space-y-2">
                                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-primary font-semibold">
                                            {project.client}
                                        </p>
                                    </div>

                                    {/* Project Description */}
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Project Details */}
                                    <div className="grid grid-cols-2 gap-4 pt-2">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4 text-primary" />
                                            <span className="text-xs text-muted-foreground">
                                                {project.duration}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="h-4 w-4 text-primary" />
                                            <span className="text-xs text-muted-foreground">
                                                {project.teamSize}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Technologies Used */}
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-semibold text-foreground">
                                            Technologies Used
                                        </h4>
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.map(
                                                (tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Key Outcomes */}
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-semibold text-foreground">
                                            Key Outcomes
                                        </h4>
                                        <div className="space-y-1">
                                            {project.outcomes.map(
                                                (outcome, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <Target className="h-3 w-3 text-green-500" />
                                                        <span className="text-xs text-muted-foreground">
                                                            {outcome}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1 pt-2">
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

            {/* Client Testimonials */}
            <section className="py-20 bg-muted/50">
                <div className="mx-auto max-w-4xl px-4 lg:px-8">
                    <div className="text-center space-y-6 mb-12">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">
                            Client{" "}
                            <span className="text-primary">Testimonials</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Hear what our clients say about working with
                            NeXtworks.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {[
                            {
                                quote: "NeXtworks delivered an exceptional network infrastructure that has significantly improved our operational efficiency. Their team's expertise and professionalism were outstanding.",
                                author: "IT Director",
                                company: "British Airways Nigeria",
                                project: "Network Infrastructure",
                            },
                            {
                                quote: "The document management system implemented by NeXtworks has transformed our workflow. Their understanding of our business needs and technical requirements was impressive.",
                                author: "Operations Manager",
                                company: "Reckitt Benckiser",
                                project: "Information Services",
                            },
                            {
                                quote: "Working with NeXtworks on our security systems was a seamless experience. They delivered on time and within budget, with excellent after-sales support.",
                                author: "Facility Manager",
                                company: "Lufthansa Airlines",
                                project: "IP Surveillance",
                            },
                            {
                                quote: "The campus network deployment was complex, but NeXtworks handled it professionally. Their solutions have significantly enhanced our digital learning environment.",
                                author: "Head of IT",
                                company: "University of Port Harcourt",
                                project: "Network Infrastructure",
                            },
                        ].map((testimonial, index) => (
                            <Card
                                key={index}
                                className="border-0 bg-background"
                            >
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="text-primary text-4xl leading-none">
                                            "
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {testimonial.quote}
                                        </p>
                                        <div className="pt-4 border-t border-border/50">
                                            <p className="font-semibold text-foreground">
                                                {testimonial.author}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial.company}
                                            </p>
                                            <p className="text-xs text-primary mt-1">
                                                {testimonial.project}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center space-y-8">
                        <div className="space-y-4">
                            <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">
                                Ready to Start Your Success Story?
                            </h2>
                            <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
                                Join the growing list of satisfied clients who
                                trust NeXtworks for their critical technology
                                infrastructure needs.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                variant="secondary"
                                className="group"
                            >
                                <Link href="/contact">
                                    Start Your Project
                                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="default"
                                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15"
                            >
                                <Link href="/services">
                                    Explore Our Services
                                </Link>
                            </Button>
                        </div>

                        <div className="pt-8 border-t border-primary-foreground/20">
                            <p className="text-sm text-primary-foreground/80">
                                Trusted by 30+ leading organizations across
                                Nigeria and beyond
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
