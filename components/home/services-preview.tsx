import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Network,
    FileText,
    Camera,
    Cog,
    GraduationCap,
    Users,
    Server,
    MessageSquare,
    Shield,
    Wifi,
    Cloud,
} from "lucide-react";
import SectionContainer from "@/layout/SectionContainer";

const services = [
    {
        icon: Network,
        title: "Network Infrastructure",
        description:
            "Complete ICT network design, supply, installation and maintenance with optic fibre backbone and wireless solutions.",
        href: "/services/network-infrastructure",
        features: [
            "Optic Fibre Backbone",
            "Wireless Solutions",
            "IP Voice & Data",
            "Network Security",
        ],
        technologies: ["Kaspersky", "Cyberoam", "GateProtect"],
    },
    {
        icon: FileText,
        title: "Information Services",
        description:
            "Cutting-edge document management and collaboration solutions with SharePoint and LogicalDOC platforms.",
        href: "/services/information-services",
        features: [
            "SharePoint Portal",
            "LogicalDOC DMS",
            "Mdaemon Email",
            "Workflow Automation",
        ],
        technologies: ["Microsoft", "LogicalDOC", "Mdaemon"],
    },
    {
        icon: Camera,
        title: "IP Surveillance Systems",
        description:
            "Advanced CCTV surveillance and access control systems with mobile integration for remote monitoring.",
        href: "/services/ip-surveillance",
        features: [
            "IP CCTV Systems",
            "Access Control",
            "Time Management",
            "Mobile Integration",
        ],
        technologies: ["Anviz Biometric", "IP Cameras"],
    },
    {
        icon: Cog,
        title: "Automation Solutions",
        description:
            "Smart home and office automation systems for enhanced efficiency, security, and cost-effectiveness.",
        href: "/services/automation",
        features: [
            "Home Automation",
            "Office Systems",
            "LAN Integration",
            "Cost Optimization",
        ],
        technologies: ["Custom Solutions", "IoT Integration"],
    },
    {
        icon: Users,
        title: "IT Consultancy",
        description:
            "Expert project management and IT consulting services with end-to-end execution and support.",
        href: "/services/consultancy",
        features: [
            "Project Management",
            "ICT Hardware",
            "Network Audit",
            "Infrastructure Planning",
        ],
        technologies: ["Enterprise Solutions", "Best Practices"],
    },
    {
        icon: GraduationCap,
        title: "Training Programs",
        description:
            "Corporate and individual training on ICT infrastructure management and latest technologies.",
        href: "/services/training",
        features: [
            "Skill Development",
            "Productivity Training",
            "Equipment Management",
            "ROI Optimization",
        ],
        technologies: ["Custom Curriculum", "Hands-on Training"],
    },
];

export function ServicesPreview() {
    return (
        <section id="services" className="py-20 lg:py-32 bg-muted/30">
            <SectionContainer>
                <div className="text-center space-y-6 mb-16">
                    <div className="inline-flex items-center rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur-sm mb-4">
                        <span className="text-muted-foreground">
                            Comprehensive Technology Solutions
                        </span>
                    </div>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-5xl">
                        Our{" "}
                        <span className="text-gradient bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Expert Services
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                        Delivering enterprise-grade technology solutions built
                        on over a decade of experience serving leading
                        organizations across multiple industries.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Card
                                key={service.title}
                                className="group relative overflow-hidden border-0 bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* Gradient border effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -m-px" />

                                <div className="relative bg-background rounded-lg p-1">
                                    <CardHeader className="pb-4">
                                        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="text-xl font-display font-semibold">
                                            {service.title}
                                        </CardTitle>
                                        <CardDescription className="text-base leading-relaxed mt-2">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        {/* Features preview */}
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-1.5">
                                                {service.features
                                                    .slice(0, 3)
                                                    .map((feature, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                {service.features.length >
                                                    3 && (
                                                    <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                                                        +
                                                        {service.features
                                                            .length - 3}{" "}
                                                        more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        {service.technologies && (
                                            <div className="mb-4">
                                                <div className="flex flex-wrap gap-1">
                                                    {service.technologies.map(
                                                        (tech, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="inline-flex items-center rounded-md bg-primary/5 px-2 py-1 text-xs font-medium text-primary"
                                                            >
                                                                {tech}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* CTA */}
                                        <Button
                                            asChild
                                            variant="ghost"
                                            className="w-full justify-center group/btn mt-2"
                                        >
                                            <Link
                                                href={service.href}
                                                className="text-sm font-medium"
                                            >
                                                Explore Service
                                                <svg
                                                    className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="space-y-6">
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Ready to transform your technology infrastructure
                            with proven solutions?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="px-8">
                                <Link href="/contact">Get Custom Solution</Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="px-8"
                            >
                                <Link href="/services">View All Services</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
}
