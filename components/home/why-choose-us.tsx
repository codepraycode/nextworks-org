import SectionContainer from "@/layout/SectionContainer";
import {
    CheckCircle2,
    Users,
    Shield,
    Target,
    Clock,
    Heart,
} from "lucide-react";

const features = [
    {
        icon: Clock,
        title: "Over a Decade of Excellence",
        description:
            "Established in 2008, we bring 15+ years of proven experience delivering successful technology solutions across multiple industries.",
    },
    {
        icon: Users,
        title: "50+ Years Combined Team Expertise",
        description:
            "Our seasoned professionals bring decades of hands-on experience in ICT infrastructure, engineering IT systems, and project management.",
    },
    {
        icon: Shield,
        title: "Enterprise-Grade Security",
        description:
            "From Kaspersky security solutions to biometric access control, we prioritize the protection of your critical business assets and data.",
    },
    {
        icon: Target,
        title: "Future-Proof Solutions",
        description:
            "We design durable, scalable infrastructure that grows with your business, ensuring your technology investments remain relevant for years to come.",
    },
    {
        icon: Heart,
        title: "Client-Centric Approach",
        description:
            "We build honest, long-term relationships based on trust and transparency, aligning our solutions with your specific business objectives.",
    },
    {
        icon: CheckCircle2,
        title: "End-to-End Service Delivery",
        description:
            "From initial consultation and design to implementation, training, and ongoing support - we handle your entire technology lifecycle.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
            <SectionContainer>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur-sm">
                                <span className="text-muted-foreground">
                                    Our Competitive Edge
                                </span>
                            </div>
                            <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-5xl">
                                Why{" "}
                                <span className="text-gradient bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                    Choose NeXtworks
                                </span>
                                ?
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                                Beyond technology, we deliver peace of mind
                                through proven expertise, unwavering
                                reliability, and a commitment to your long-term
                                success.
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={feature.title}
                                        className="group relative"
                                    >
                                        <div className="flex gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-background hover:shadow-lg">
                                            <div className="flex-shrink-0">
                                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300">
                                                    <Icon className="h-6 w-6" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="font-semibold text-lg leading-tight">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-8 shadow-2xl shadow-primary/5">
                            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-background">
                                <img
                                    src="/professional-team-working-on-technology-infrastruc.jpg"
                                    alt="NeXtworks professional team collaborating on technology solutions"
                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                            </div>

                            {/* Floating experience badge */}
                            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-background p-6 shadow-2xl border">
                                <div className="text-center">
                                    <div className="font-display text-3xl font-bold text-primary">
                                        15+
                                    </div>
                                    <div className="text-sm font-medium text-muted-foreground">
                                        Years Experience
                                    </div>
                                </div>
                            </div>

                            {/* Floating clients badge */}
                            <div className="absolute -top-6 -right-6 rounded-2xl bg-background p-6 shadow-2xl border">
                                <div className="text-center">
                                    <div className="font-display text-3xl font-bold text-accent">
                                        30+
                                    </div>
                                    <div className="text-sm font-medium text-muted-foreground">
                                        Major Clients
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background decorative elements */}
                        <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl -z-10" />
                        <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl -z-10" />
                    </div>
                </div>

                {/* Bottom trust statement */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center gap-4 rounded-2xl bg-muted/50 px-8 py-6 backdrop-blur-sm">
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            "We don't just implement technology - we build
                            partnerships. Our success is measured by your
                            satisfaction and the lasting value we deliver to
                            your organization."
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-primary">
                            <span>Tosin Afolayan</span>
                            <span className="text-muted-foreground">•</span>
                            <span>Managing Director</span>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
}