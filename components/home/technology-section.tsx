import { Card, CardContent } from "@/components/ui/card";
import {
    Network,
    FileText,
    Camera,
    Server,
    MessageSquare,
    Shield,
} from "lucide-react";

const technologies = [
    {
        icon: Network,
        category: "Network Infrastructure",
        solutions: [
            "Optic Fibre Backbone",
            "Wireless Solutions",
            "IP Voice & Data",
            "Disaster Recovery",
        ],
        partners: ["Cisco", "Cyberoam", "Kaspersky"],
    },
    {
        icon: FileText,
        category: "Information Systems",
        solutions: [
            "Document Management",
            "Collaboration Platforms",
            "Workflow Automation",
            "Email Systems",
        ],
        partners: ["Microsoft SharePoint", "LogicalDOC", "Mdaemon"],
    },
    {
        icon: Camera,
        category: "Security & Surveillance",
        solutions: [
            "IP CCTV Systems",
            "Access Control",
            "Time Management",
            "Biometric Systems",
        ],
        partners: ["Anviz", "IP Camera Technologies"],
    },
    {
        icon: Server,
        category: "Infrastructure",
        solutions: [
            "Server Management",
            "Storage Solutions",
            "Cloud Integration",
            "Backup Systems",
        ],
        partners: ["Enterprise Hardware", "Cloud Platforms"],
    },
];

export function TechnologySection() {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="text-center space-y-6 mb-16">
                    <div className="inline-flex items-center rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur-sm">
                        <span className="text-muted-foreground">
                            Technology Expertise
                        </span>
                    </div>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-5xl">
                        <span className="text-gradient bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Proven Solutions
                        </span>{" "}
                        & Partnerships
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                        Leveraging industry-leading technologies and strategic
                        partnerships to deliver robust, scalable, and
                        future-proof solutions for your business.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {technologies.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <Card
                                key={tech.category}
                                className="group hover:shadow-lg transition-all duration-300 border-0 bg-background"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-display font-semibold text-xl pt-2">
                                            {tech.category}
                                        </h3>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                                                SOLUTIONS
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {tech.solutions.map(
                                                    (solution) => (
                                                        <span
                                                            key={solution}
                                                            className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium"
                                                        >
                                                            {solution}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                                                TECHNOLOGY PARTNERS
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {tech.partners.map(
                                                    (partner) => (
                                                        <span
                                                            key={partner}
                                                            className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                                        >
                                                            {partner}
                                                        </span>
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
            </div>
        </section>
    );
}
