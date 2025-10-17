import { Card, CardContent } from "@/components/ui/card";
import { Search, Palette, Cog, CheckCircle } from "lucide-react";

const processSteps = [
    {
        icon: Search,
        step: "01",
        title: "Discovery & Analysis",
        description:
            "We begin by thoroughly understanding your business needs, challenges, and technology requirements.",
        duration: "1-2 weeks",
    },
    {
        icon: Palette,
        step: "02",
        title: "Solution Design",
        description:
            "Our experts design customized technology solutions aligned with your business objectives and budget.",
        duration: "2-3 weeks",
    },
    {
        icon: Cog,
        step: "03",
        title: "Implementation",
        description:
            "Seamless deployment with minimal disruption to your operations, following industry best practices.",
        duration: "Project dependent",
    },
    {
        icon: CheckCircle,
        step: "04",
        title: "Support & Optimization",
        description:
            "Ongoing maintenance, support, and optimization to ensure peak performance and ROI.",
        duration: "Long-term partnership",
    },
];

export function ProcessSection() {
    return (
        <section className="py-20 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="text-center space-y-6 mb-16">
                    <div className="inline-flex items-center rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur-sm">
                        <span className="text-muted-foreground">
                            Our Proven Process
                        </span>
                    </div>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-5xl">
                        How We{" "}
                        <span className="text-gradient bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Deliver Success
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                        A structured approach that ensures your technology
                        projects are delivered on time, within budget, and
                        exceed your expectations.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <Card
                                key={step.step}
                                className="relative border-0 bg-background text-center group hover:shadow-lg transition-all duration-300"
                            >
                                <CardContent className="p-6">
                                    {/* Step number */}
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                                            {step.step}
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="flex justify-center mb-4 mt-4">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300">
                                            <Icon className="h-8 w-8" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="font-display font-semibold text-xl mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {step.description}
                                    </p>

                                    {/* Duration */}
                                    <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                                        {step.duration}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
