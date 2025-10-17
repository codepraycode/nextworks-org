import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Target,
    Eye,
    Award,
    Users,
    ArrowRight,
    Shield,
    Zap,
    MapPin,
    Calendar,
    Building2,
} from "lucide-react";

const values = [
    {
        icon: Shield,
        title: "Integrity First",
        description:
            "We believe that honest relationships and trust are essential for long-term business success. We conduct ourselves with openness and candor in all aspects of our work.",
    },
    {
        icon: Zap,
        title: "Operational Excellence",
        description:
            "We demonstrate a 'can do' approach and maintain a corporate culture that values originality, invention, and creativity in delivering exceptional solutions.",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description:
            "Individual commitment to a group effort - each person is a valued member, encouraged to contribute and recognized for their efforts in our collective success.",
    },
    {
        icon: Award,
        title: "Total Responsibility",
        description:
            "We share responsibility for our company and its results, communicating openly and performing duties with integrity and accountability.",
    },
];

const milestones = [
    {
        year: "2008",
        event: "Company Foundation",
        description:
            "NeXtworks Limited established with focus on ICT infrastructure and power solutions",
        clients: ["First enterprise clients secured"],
    },
    {
        year: "2012",
        event: "Major Aviation Partnerships",
        description:
            "Began serving major international airlines including British Airways and Lufthansa",
        clients: ["British Airways", "Lufthansa", "Air France"],
    },
    {
        year: "2015",
        event: "Infrastructure Expansion",
        description:
            "Expanded service portfolio to include comprehensive IP surveillance and automation solutions",
        clients: ["Reckitt Benckiser", "Motorola", "Healthcare International"],
    },
    {
        year: "2020",
        event: "Digital Transformation Focus",
        description:
            "Enhanced information services with SharePoint, LogicalDOC, and advanced collaboration tools",
        clients: ["University of Port Harcourt", "LASUTH", "Galaxy Backbone"],
    },
    {
        year: "2024",
        event: "Industry Leadership",
        description:
            "Recognized as leading indigenous ICT solutions provider with 30+ enterprise clients",
        clients: [
            "30+ major organizations",
            "15+ years excellence",
            "50+ years team experience",
        ],
    },
];

const companyFacts = [
    {
        icon: Building2,
        value: "30+",
        label: "Enterprise Clients",
        description: "Serving leading organizations across multiple industries",
    },
    {
        icon: Users,
        value: "50+",
        label: "Years Combined Experience",
        description: "Our team brings decades of specialized expertise",
    },
    {
        icon: Award,
        value: "15+",
        label: "Years in Operation",
        description: "Established track record of reliability and excellence",
    },
    {
        icon: MapPin,
        value: "1000+",
        label: "Projects Completed",
        description: "Successful implementations across Nigeria",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
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
                                Established 2008 • RC488002
                            </span>
                        </div>

                        <h1 className="font-display text-4xl font-bold tracking-tight text-balance lg:text-6xl">
                            Leading{" "}
                            <span className="text-gradient bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                ICT Solutions
                            </span>{" "}
                            in Africa
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            For over 15 years, NeXtworks Limited has been at the
                            forefront of delivering enterprise-grade technology
                            infrastructure and power solutions to organizations
                            across Nigeria and beyond.
                        </p>

                        {/* Company Facts */}
                        <div className="flex flex-wrap justify-center gap-8 pt-8">
                            {companyFacts.map((fact, index) => {
                                const Icon = fact.icon;
                                return (
                                    <div key={index} className="text-center">
                                        <div className="flex justify-center mb-2">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                        </div>
                                        <div className="font-display text-2xl font-bold text-primary">
                                            {fact.value}
                                        </div>
                                        <div className="text-sm font-medium text-foreground">
                                            {fact.label}
                                        </div>
                                        <div className="text-xs text-muted-foreground max-w-32 mx-auto mt-1">
                                            {fact.description}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">
                                    Our{" "}
                                    <span className="text-primary">
                                        Journey
                                    </span>{" "}
                                    of Excellence
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        Established in 2008, NeXtworks Limited
                                        began with a clear vision: to provide
                                        high-quality Information Technology
                                        services and Power solutions aimed at
                                        improving operational efficiency and
                                        profitability for organizations across
                                        Africa.
                                    </p>
                                    <p>
                                        From our headquarters in Ilupeju, Lagos,
                                        we've grown to become a trusted partner
                                        for major organizations including
                                        British Airways, Lufthansa, Reckitt
                                        Benckiser, and leading educational
                                        institutions. Our success is built on a
                                        foundation of technical expertise,
                                        innovative solutions, and unwavering
                                        commitment to client success.
                                    </p>
                                    <p>
                                        Today, we continue to evolve, embracing
                                        emerging technologies while maintaining
                                        the core values that have guided us for
                                        over a decade. Our team of seasoned
                                        professionals brings together more than
                                        50 years of combined experience in ICT
                                        infrastructure, network solutions, and
                                        enterprise technology systems.
                                    </p>
                                </div>
                            </div>

                            {/* Key Clients Preview */}
                            <div className="bg-muted/30 rounded-2xl p-6">
                                <h3 className="font-semibold text-foreground mb-4">
                                    Trusted By Industry Leaders
                                </h3>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    {[
                                        "British Airways",
                                        "Lufthansa",
                                        "Air France",
                                        "Reckitt Benckiser",
                                        "Motorola",
                                        "University of Port Harcourt",
                                        "LASUTH",
                                        "Galaxy Backbone",
                                    ].map((client, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                            <span className="text-muted-foreground">
                                                {client}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 shadow-2xl shadow-primary/5">
                                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-background">
                                    <img
                                        src="/images/about/company-headquarters.jpg"
                                        alt="NeXtworks Limited Headquarters - 8 Kehinde Akamo, Ilupeju Lagos"
                                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                                </div>

                                {/* Location Badge */}
                                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-background p-6 shadow-2xl border">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="h-6 w-6 text-primary" />
                                        <div>
                                            <p className="font-semibold text-foreground">
                                                Our Headquarters
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                Ilupeju, Lagos
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-muted/50">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <Card className="border-0 bg-gradient-to-br from-background to-muted/30 group hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-8 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <Target className="h-7 w-7" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold">
                                        Our Mission
                                    </h3>
                                </div>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        To provide both ICT Infrastructure and
                                        Supporting Power Systems that are
                                        durable, future-proof, and of high
                                        quality at a price that is affordable to
                                        our clients.
                                    </p>
                                    <p>
                                        We help organizations minimize risks and
                                        mitigate high costs by recommending and
                                        implementing solutions that seamlessly
                                        integrate into their existing systems
                                        without the need for expensive
                                        customizations.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-gradient-to-br from-background to-muted/30 group hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-8 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <Eye className="h-7 w-7" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold">
                                        Our Vision
                                    </h3>
                                </div>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        We desire to be a leading provider of
                                        ICT and Power Infrastructure and service
                                        in Africa, recognized by key industry
                                        actors as the leading expert and most
                                        trusted partner for the design,
                                        installation, and support of
                                        cutting-edge ICT infrastructure.
                                    </p>
                                    <p>
                                        With the highest ethical standards and
                                        pure dedication to excellence in all
                                        operational aspects, we are committed to
                                        exceeding all expectations in the
                                        delivery of quality information
                                        technology services to our clients.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="text-center space-y-6 mb-16">
                        <div className="inline-flex items-center rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur-sm">
                            <span className="text-muted-foreground">
                                Our Foundation
                            </span>
                        </div>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">
                            Core <span className="text-primary">Values</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide every decision, project,
                            and relationship at NeXtworks
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <Card
                                    key={value.title}
                                    className="border-0 bg-background group hover:shadow-lg transition-all duration-300"
                                >
                                    <CardContent className="p-8">
                                        <div className="flex items-start gap-6">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300">
                                                <Icon className="h-8 w-8" />
                                            </div>
                                            <div className="flex-1 space-y-4">
                                                <h3 className="font-display font-semibold text-2xl">
                                                    {value.title}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {value.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-muted/50">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="text-center space-y-6 mb-16">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">
                            Our{" "}
                            <span className="text-primary">Growth Journey</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Key milestones in our journey to becoming a leading
                            ICT solutions provider
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:-translate-x-1/2"></div>

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={milestone.year}
                                    className={`relative flex gap-8 ${
                                        index % 2 === 0
                                            ? "lg:flex-row"
                                            : "lg:flex-row-reverse"
                                    }`}
                                >
                                    {/* Year Marker */}
                                    <div className="flex-shrink-0 lg:w-1/2">
                                        <div
                                            className={`flex items-center gap-6 ${
                                                index % 2 === 0
                                                    ? "lg:justify-end lg:pr-12"
                                                    : "lg:justify-start lg:pl-12"
                                            }`}
                                        >
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg font-bold z-10">
                                                {milestone.year}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 lg:w-1/2">
                                        <Card
                                            className={`border-0 bg-background hover:shadow-lg transition-all duration-300 ${
                                                index % 2 === 0
                                                    ? "lg:ml-12"
                                                    : "lg:mr-12"
                                            }`}
                                        >
                                            <CardContent className="p-6">
                                                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                                                    {milestone.event}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed mb-4">
                                                    {milestone.description}
                                                </p>

                                                {/* Key Clients */}
                                                {milestone.clients && (
                                                    <div className="pt-4 border-t border-border/50">
                                                        <p className="text-sm font-medium text-foreground mb-2">
                                                            Key Clients:
                                                        </p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {milestone.clients.map(
                                                                (
                                                                    client,
                                                                    clientIndex
                                                                ) => (
                                                                    <span
                                                                        key={
                                                                            clientIndex
                                                                        }
                                                                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                                                    >
                                                                        {client}
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-12 lg:p-16 shadow-2xl shadow-primary/25">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]" />

                        <div className="relative z-10 mx-auto max-w-4xl text-center space-y-8">
                            <div className="space-y-4">
                                <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground text-balance lg:text-4xl">
                                    Join Our Success Story
                                </h2>
                                <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
                                    Discover why leading organizations trust
                                    NeXtworks for their critical technology
                                    infrastructure needs. Let's discuss how we
                                    can help transform your operations.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    variant="secondary"
                                    className="group bg-background text-foreground hover:bg-background/90"
                                >
                                    <Link href="/contact">
                                        Start Your Project
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15"
                                >
                                    <Link href="/team">Meet Our Experts</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
