import { Card, CardContent } from "@/components/ui/card";
import {
    Linkedin,
    Mail,
    Award,
    Calendar,
    MapPin,
    BookOpen,
} from "lucide-react";
import Link from "next/link";

const team = [
    {
        name: "Tosin Afolayan",
        role: "Managing Director",
        image: "/images/team/tosin-afolayan.jpg",
        bio: "Leads the ICT Infrastructure Team with over a decade of experience in managing successful projects. Currently completing an MSc in Project Management with the University of Liverpool, UK.",
        experience: "15+ years in IT infrastructure and project management",
        education:
            "MSc Project Management (in progress) - University of Liverpool",
        certifications: [
            "Project Management Professional",
            "Cisco Certified Network Professional",
        ],
        expertise: [
            "ICT Infrastructure",
            "Business Strategy",
            "Project Management",
            "Team Leadership",
        ],
        linkedin: "https://linkedin.com/in/tosin-afolayan",
        email: "tosin@nextworks.com.ng",
    },
    {
        name: "Lanre Shadeko",
        role: "Head, Information Services & Support",
        image: "/images/team/lanre-shadeko.jpg",
        bio: "Skilled IT professional with strong flair and experience in IT and Engineering IT Systems. Microsoft Certified Professional with over 15 years' experience in Information Technology.",
        experience:
            "15+ years in IT systems and engineering information management",
        education: "BSc Industrial Chemistry - University of Lagos",
        certifications: [
            "Microsoft Certified Professional (MCP)",
            "Microsoft Technology Specialist (MCTS)",
        ],
        expertise: [
            "Engineering IT Systems",
            "SharePoint",
            "Document Management",
            "System Integration",
        ],
        linkedin: "https://linkedin.com/in/lanre-shadeko",
        email: "lanre@nextworks.com.ng",
    },
    {
        name: "Tunji Oshodi",
        role: "Data/Voice Network Consultant & Administrator",
        image: "/images/team/tunji-oshodi.jpg",
        bio: "IT Consultant with more than fifteen years of industrial experience, possessing the ability to design and implement converged network solutions for critical requirements.",
        experience:
            "15+ years in network infrastructure and telecommunications",
        education: "BSc Computer Science - Lagos State University",
        certifications: [
            "Cisco Certified Network Associate",
            "Cisco Voice Over IP Specialist",
        ],
        expertise: [
            "Network Infrastructure",
            "VoIP Systems",
            "IP Surveillance",
            "VPN Configuration",
        ],
        linkedin: "https://linkedin.com/in/tunji-oshodi",
        email: "tunji@nextworks.com.ng",
    },
];

const keyAchievements = [
    {
        value: "50+",
        label: "Years Combined Experience",
    },
    {
        value: "1000+",
        label: "Projects Completed",
    },
    {
        value: "30+",
        label: "Enterprise Clients",
    },
    {
        value: "15+",
        label: "Technology Certifications",
    },
];

export default function TeamPage() {
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
                                Meet the Experts
                            </span>
                        </div>

                        <h1 className="font-display text-4xl font-bold tracking-tight text-balance lg:text-6xl">
                            Our{" "}
                            <span className="text-gradient bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                Leadership Team
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            Get to know the seasoned professionals behind
                            NeXtworks' success. With over 50 years of combined
                            experience, our team brings unparalleled expertise
                            in delivering enterprise-grade technology solutions.
                        </p>

                        {/* Key Achievements */}
                        <div className="flex flex-wrap justify-center gap-8 pt-8">
                            {keyAchievements.map((achievement, index) => (
                                <div key={index} className="text-center">
                                    <div className="font-display text-2xl font-bold text-primary">
                                        {achievement.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground max-w-24 mx-auto">
                                        {achievement.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {team.map((member) => (
                            <Card
                                key={member.name}
                                className="group hover:shadow-xl transition-all duration-300 border-0 bg-background overflow-hidden"
                            >
                                {/* Profile Image */}
                                <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-muted to-muted/50 relative">
                                    <img
                                        src={
                                            member.image ||
                                            "/images/team/placeholder-professional.jpg"
                                        }
                                        alt={`${member.name} - ${member.role} at NeXtworks`}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>

                                    {/* Role badge */}
                                    <div className="absolute top-4 left-4">
                                        <div className="rounded-full bg-background/90 backdrop-blur-sm px-3 py-1">
                                            <p className="text-xs font-medium text-primary">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <CardContent className="p-6 space-y-4">
                                    {/* Name and Role */}
                                    <div className="space-y-2">
                                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-primary font-semibold">
                                            {member.role}
                                        </p>
                                    </div>

                                    {/* Bio */}
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {member.bio}
                                    </p>

                                    {/* Expertise Tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {member.expertise
                                            .slice(0, 3)
                                            .map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        {member.expertise.length > 3 && (
                                            <span className="inline-flex items-center rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                                                +{member.expertise.length - 3}{" "}
                                                more
                                            </span>
                                        )}
                                    </div>

                                    {/* Experience & Education */}
                                    <div className="space-y-3 pt-2">
                                        <div className="flex items-start gap-2">
                                            <Calendar className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-xs text-muted-foreground">
                                                {member.experience}
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <BookOpen className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-xs text-muted-foreground">
                                                {member.education}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Certifications */}
                                    {member.certifications && (
                                        <div className="pt-2">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Award className="h-4 w-4 text-primary" />
                                                <span className="text-xs font-medium text-foreground">
                                                    Certifications
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap gap-1">
                                                {member.certifications
                                                    .slice(0, 2)
                                                    .map((cert, index) => (
                                                        <span
                                                            key={index}
                                                            className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                                                        >
                                                            {cert}
                                                        </span>
                                                    ))}
                                                {member.certifications.length >
                                                    2 && (
                                                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                                                        +
                                                        {member.certifications
                                                            .length - 2}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Contact Links */}
                                    <div className="flex gap-3 pt-4 border-t border-border/50">
                                        <Link
                                            href={member.linkedin}
                                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Linkedin className="h-4 w-4" />
                                            <span className="sr-only">
                                                Connect with {member.name} on
                                                LinkedIn
                                            </span>
                                        </Link>
                                        <Link
                                            href={`mailto:${member.email}`}
                                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                                        >
                                            <Mail className="h-4 w-4" />
                                            <span className="sr-only">
                                                Email {member.name}
                                            </span>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Values Section */}
            <section className="py-20 bg-muted/50">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">
                                    Our{" "}
                                    <span className="text-primary">
                                        Leadership Philosophy
                                    </span>
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    At NeXtworks, we believe that strong
                                    leadership is built on expertise, integrity,
                                    and a commitment to client success. Our
                                    leadership team combines technical
                                    excellence with strategic vision to deliver
                                    exceptional value.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        title: "Expert-Led Solutions",
                                        description:
                                            "Every project is overseen by experienced professionals with deep technical knowledge",
                                    },
                                    {
                                        title: "Client-First Approach",
                                        description:
                                            "We prioritize understanding and meeting our clients' unique business objectives",
                                    },
                                    {
                                        title: "Continuous Innovation",
                                        description:
                                            "Our team stays ahead of technology trends to deliver future-proof solutions",
                                    },
                                    {
                                        title: "Quality Assurance",
                                        description:
                                            "Rigorous standards and best practices ensure exceptional service delivery",
                                    },
                                ].map((value, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium mt-0.5 flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">
                                                {value.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 p-8">
                                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-background">
                                    <img
                                        src="/images/team/team-collaboration.jpg"
                                        alt="NeXtworks leadership team collaborating on technology solutions"
                                        className="h-full w-full object-cover"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
                                </div>
                            </div>

                            {/* Floating stats */}
                            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-background p-6 shadow-2xl border">
                                <div className="text-center">
                                    <div className="font-display text-2xl font-bold text-primary">
                                        15+
                                    </div>
                                    <div className="text-sm font-medium text-muted-foreground">
                                        Years Average Experience
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Join Team CTA */}
            <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">
                            Join Our Growing Team
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            We're constantly looking for talented professionals
                            who share our passion for technology and commitment
                            to excellence. Be part of a team that's shaping the
                            future of IT in Africa.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="mailto:careers@nextworks.com.ng"
                            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors hover:shadow-lg"
                        >
                            Explore Career Opportunities
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                            Send General Inquiry
                        </Link>
                    </div>

                    <div className="pt-8 border-t border-border/50">
                        <p className="text-sm text-muted-foreground">
                            Currently seeking: Network Engineers, Security
                            Specialists, Project Managers, and IT Consultants
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
