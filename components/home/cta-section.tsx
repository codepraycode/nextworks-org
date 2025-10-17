import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";
import SectionContainer from "@/layout/SectionContainer";

export function CTASection() {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
            <SectionContainer>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-12 lg:p-20 shadow-2xl shadow-primary/25">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]" />

                    <div className="relative z-10 mx-auto max-w-4xl text-center space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/90 backdrop-blur-sm">
                                <Calendar className="h-4 w-4 mr-2" />
                                Start Your Technology Transformation
                            </div>

                            <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground text-balance lg:text-5xl">
                                Ready to Elevate Your{" "}
                                <span className="text-accent-foreground/90">
                                    Technology Infrastructure
                                </span>
                                ?
                            </h2>

                            <p className="text-xl text-primary-foreground/90 leading-relaxed text-pretty max-w-3xl mx-auto">
                                Join industry leaders like British Airways,
                                Lufthansa, and Reckitt Benckiser who trust
                                NeXtworks for their critical technology
                                solutions. Let's discuss how we can transform
                                your operations with enterprise-grade IT
                                infrastructure.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Button
                                asChild
                                size="lg"
                                variant="secondary"
                                className="group bg-background text-foreground hover:bg-background/90 h-12 px-8"
                            >
                                <Link href="/contact">
                                    <Phone className="h-4 w-4 mr-2" />
                                    Schedule Consultation
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15 h-12 px-8"
                            >
                                <Link href="/portfolio">
                                    View Client Success Stories
                                </Link>
                            </Button>
                        </div>

                        {/* Quick contact info */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 text-sm text-primary-foreground/80">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <a
                                    href={`mailto:info@nextworks.com.ng`}
                                    className="hover:text-primary-foreground transition-colors"
                                >
                                    info@nextworks.com.ng
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <a
                                    href={`tel:+2348080240366`}
                                    className="hover:text-primary-foreground transition-colors"
                                >
                                    +234 (0) 808 024 0366
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced decorative elements */}
                    <div className="absolute top-1/4 -right-16 h-32 w-32 rounded-full bg-accent-foreground/10 blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 -left-16 h-40 w-40 rounded-full bg-accent-foreground/10 blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/4 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
                </div>
            </SectionContainer>
        </section>
    );
}
