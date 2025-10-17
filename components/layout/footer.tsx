import React from "react";
import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Shield,
    Zap,
    Users,
    Target,
} from "lucide-react";
import { COMPANY_INFO as companyInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Services",
            links: [
                {
                    name: "Network Infrastructure",
                    href: "/services/network-infrastructure",
                },
                {
                    name: "Information Services",
                    href: "/services/information-services",
                },
                { name: "IP Surveillance", href: "/services/ip-surveillance" },
                { name: "Automation Solutions", href: "/services/automation" },
                { name: "IT Consultancy", href: "/services/consultancy" },
                { name: "Training Programs", href: "/services/training" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/team" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Contact", href: "/contact" },
                { name: "Careers", href: "/careers" },
                { name: "Blog", href: "/blog" },
            ],
        },
        {
            title: "Technology Partners",
            links: [
                { name: "Microsoft", href: "/partners/microsoft" },
                { name: "Kaspersky", href: "/partners/kaspersky" },
                { name: "LogicalDOC", href: "/partners/logicaldoc" },
                { name: "Anviz", href: "/partners/anviz" },
                { name: "Cyberoam", href: "/partners/cyberoam" },
                { name: "Mdaemon", href: "/partners/mdaemon" },
            ],
        },
    ];

    const coreValues = [
        {
            icon: Shield,
            name: "Integrity",
            description: "Honest relationships built on trust",
        },
        {
            icon: Zap,
            name: "Innovation",
            description: "Cutting-edge technology solutions",
        },
        {
            icon: Users,
            name: "Teamwork",
            description: "Collaborative approach to success",
        },
        {
            icon: Target,
            name: "Excellence",
            description: "Commitment to quality delivery",
        },
    ];

    return (
        <footer className="bg-gradient-to-b from-background to-muted/30 border-t">
            {/* Main Footer Content */}
            <div className="container py-16 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section - Company Info & CTA */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Company Description */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col">
                                    <h3 className="font-display text-2xl font-bold text-primary">
                                        NeXtworks
                                    </h3>
                                    <p className="text-sm text-muted-foreground font-medium">
                                        LIMITED
                                    </p>
                                </div>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                Leading provider of comprehensive ICT and Power
                                Infrastructure services across Africa,
                                delivering innovative technology solutions that
                                drive business growth and operational excellence
                                for over a decade.
                            </p>
                        </div>

                        {/* Core Values Mini Display */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {coreValues.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <div
                                        key={value.name}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-foreground">
                                                {value.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="text-center lg:text-right">
                            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                                Ready to Transform Your Technology?
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-md lg:ml-auto">
                                Let's discuss how our enterprise solutions can
                                elevate your business operations and drive
                                growth.
                            </p>
                            <Button asChild size="lg" className="group">
                                <Link href="/contact" className="font-semibold">
                                    Start Your Project
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Middle Section - Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-6">
                        <h4 className="font-display text-lg font-semibold text-foreground">
                            Get In Touch
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-foreground">
                                        Visit Our Office
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                        {companyInfo.address}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                {companyInfo.phone
                                    .slice(0, 2)
                                    .map((phone, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3"
                                        >
                                            <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                            <a
                                                href={`tel:${phone}`}
                                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                            >
                                                {phone}
                                            </a>
                                        </div>
                                    ))}
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                <a
                                    href={`mailto:${companyInfo.email}`}
                                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    {companyInfo.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h4 className="font-display text-lg font-semibold text-foreground">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors"></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border/50 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <div className="text-center lg:text-left">
                            <p className="text-sm text-muted-foreground">
                                © {currentYear}{" "}
                                <span className="font-semibold text-foreground">
                                    NeXtworks Limited
                                </span>
                                . RC488002. All rights reserved.
                            </p>
                        </div>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6">
                            <Link
                                href="/privacy"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="/sitemap"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                            >
                                Sitemap
                            </Link>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-border/30">
                        <div className="text-xs text-muted-foreground text-center">
                            Trusted by 30+ Enterprise Clients Across Africa
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>✓ 15+ Years Experience</span>
                            <span>✓ Enterprise-Grade Solutions</span>
                            <span>✓ 24/7 Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
