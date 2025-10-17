import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Zap, Users } from "lucide-react";
import SectionContainer from "@/layout/SectionContainer";

export function Hero() {
    const features = [
        {
            icon: Shield,
            text: "Over a decade of IT excellence",
        },
        {
            icon: Zap,
            text: "Enterprise-grade solutions",
        },
        {
            icon: Users,
            text: "50+ years combined team experience",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-muted/30 py-20 lg:py-32">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
            </div>

            <SectionContainer>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            {/* Trust badge */}
                            <div className="inline-flex items-center rounded-full border bg-background/80 px-3 py-1 text-sm backdrop-blur-sm">
                                <span className="text-muted-foreground">
                                    Trusted by industry leaders since 2008
                                </span>
                            </div>

                            <h1 className="font-display text-4xl font-bold tracking-tight text-balance lg:text-6xl xl:text-7xl">
                                Empowering African Businesses Through{" "}
                                <span className="text-gradient bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                    Innovative Technology
                                </span>
                            </h1>

                            <p className="text-xl text-muted-foreground leading-relaxed text-pretty lg:text-2xl lg:leading-relaxed">
                                Leading provider of comprehensive ICT and Power
                                Infrastructure solutions, delivering
                                enterprise-grade network systems, security, and
                                automation for organizations across Nigeria and
                                beyond.
                            </p>
                        </div>

                        {/* Features list */}
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                        <feature.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="text-lg font-medium text-foreground">
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Button
                                asChild
                                size="lg"
                                className="group h-12 px-8 text-base font-semibold"
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
                                className="h-12 px-8 text-base font-semibold"
                            >
                                <Link href="/services">
                                    Explore Our Solutions
                                </Link>
                            </Button>
                        </div>

                        {/* Client preview */}
                        <div className="pt-6">
                            <p className="text-sm text-muted-foreground mb-3">
                                Trusted by leading organizations
                            </p>
                            <div className="flex flex-wrap items-center gap-6 opacity-60">
                                <span className="text-sm font-medium">
                                    British Airways
                                </span>
                                <span className="text-sm font-medium">
                                    Lufthansa
                                </span>
                                <span className="text-sm font-medium">
                                    Reckitt Benckiser
                                </span>
                                <span className="text-sm font-medium text-primary">
                                    +15 more
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual Section */}
                    <div className="relative">
                        <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-accent/15 p-8 shadow-2xl shadow-primary/5">
                            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-background">
                                <img
                                    src="/modern-technology-network-infrastructure-data-cent.jpg"
                                    alt="NeXtworks Technology Infrastructure - Network systems and data center solutions"
                                    className="h-full w-full object-cover transition-transform hover:scale-105 duration-700"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                            </div>

                            {/* Floating card 1 */}
                            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-background p-4 shadow-2xl border">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <Shield className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            Secure Networks
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Enterprise-grade
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating card 2 */}
                            <div className="absolute -top-6 -right-6 rounded-2xl bg-background p-4 shadow-2xl border">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                                        <Zap className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            24/7 Support
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Always available
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Animated background elements */}
                        <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl animate-pulse" />
                        <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-accent/15 blur-3xl animate-pulse delay-1000" />
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
}
