import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, Target } from "lucide-react";

const values = [
    {
        icon: Shield,
        title: "Integrity First",
        description:
            "Honest relationships and trust are essential for long-term business success. We conduct ourselves with openness in all aspects.",
        highlight: "Ethical Business Practices",
    },
    {
        icon: Zap,
        title: "Operational Excellence",
        description:
            "We demonstrate a 'can do' approach and maintain a culture that values originality, invention, and creativity.",
        highlight: "Innovation Driven",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description:
            "Individual commitment to a group effort. Each person is a valued member, encouraged to contribute and recognized for their efforts.",
        highlight: "United Strength",
    },
    {
        icon: Target,
        title: "Total Responsibility",
        description:
            "We share responsibility for our company and its results, communicating openly and performing duties with integrity.",
        highlight: "Accountability Matters",
    },
];

export function ValuesSection() {
    return (
        <section className="py-20 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="text-center space-y-6 mb-16">
                    <div className="inline-flex items-center rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur-sm">
                        <span className="text-muted-foreground">
                            Our Foundation
                        </span>
                    </div>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-5xl">
                        Built on{" "}
                        <span className="text-gradient bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Strong Values
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                        Our success is rooted in core principles that guide
                        every project and relationship, ensuring we deliver
                        exceptional value while maintaining the highest
                        standards.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <Card
                                key={value.title}
                                className="group hover:shadow-lg transition-all duration-300 border-0 bg-background"
                            >
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-6">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300">
                                            <Icon className="h-8 w-8" />
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <div>
                                                <h3 className="font-display font-semibold text-2xl mb-2">
                                                    {value.title}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {value.description}
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                                {value.highlight}
                                            </div>
                                        </div>
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
