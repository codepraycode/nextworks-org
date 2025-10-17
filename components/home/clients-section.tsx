import { Card, CardContent } from "@/components/ui/card";
import {
    Building2,
    Plane,
    GraduationCap,
    Heart,
    Car,
    Palette,
} from "lucide-react";

const clientCategories = [
    {
        icon: Plane,
        title: "Aviation & Travel",
        clients: ["British Airways", "Lufthansa", "Air France"],
        description: "Leading airlines trust our technology solutions",
    },
    {
        icon: Building2,
        title: "Corporate Enterprises",
        clients: ["Reckitt Benckiser", "Motorola", "Precision Logistics"],
        description: "Multinational corporations rely on our IT infrastructure",
    },
    {
        icon: GraduationCap,
        title: "Education & Healthcare",
        clients: [
            "University of Port Harcourt",
            "LASUTH",
            "Healthcare International",
        ],
        description: "Institutions powered by our technology solutions",
    },
    {
        icon: Heart,
        title: "Healthcare",
        clients: ["Healthcare International", "LASUTH"],
        description: "Critical healthcare technology infrastructure",
    },
    {
        icon: Car,
        title: "Logistics & Services",
        clients: ["Precision Logistics", "Fluid Management Services"],
        description: "Streamlined operations through technology",
    },
    {
        icon: Palette,
        title: "Professional Services",
        clients: ["GHR Architects", "KOA Consulting", "STTA Nigeria"],
        description: "Enhanced productivity with our solutions",
    },
];

export function ClientsSection() {
    return (
        <section className="py-20 lg:py-32 bg-muted/50">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="text-center space-y-6 mb-16">
                    <div className="inline-flex items-center rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur-sm">
                        <span className="text-muted-foreground">
                            Trusted by Industry Leaders
                        </span>
                    </div>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-5xl">
                        Serving{" "}
                        <span className="text-gradient bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Leading Organizations
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                        For over a decade, we've partnered with renowned
                        organizations across various sectors, delivering
                        reliable technology solutions that drive business
                        success.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {clientCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <Card
                                key={category.title}
                                className="group hover:shadow-lg transition-all duration-300 border-0 bg-background"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            <h3 className="font-display font-semibold text-lg">
                                                {category.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {category.description}
                                            </p>
                                            <div className="space-y-2">
                                                {category.clients.map(
                                                    (client) => (
                                                        <div
                                                            key={client}
                                                            className="flex items-center gap-2"
                                                        >
                                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                            <span className="text-sm font-medium">
                                                                {client}
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Trust Statement */}
                <div className="mt-16 text-center">
                    <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-0">
                        <CardContent className="p-8">
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                "From aviation giants to healthcare
                                institutions, our solutions power some of
                                Nigeria's most critical operations. Join the
                                growing list of organizations that trust
                                NeXtworks for their technology needs."
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
