"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {COMPANY_INFO} from "@/lib/constants";

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Services dropdown items
    const services = [
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
    ];

    const navigation = [
        { name: "Home", href: "/" },
        {
            name: "Services",
            href: "/services",
            dropdown: services,
        },
        { name: "About", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Team", href: "/team" },
        { name: "Contact", href: "/contact" },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    const phone = COMPANY_INFO.phone.at(0);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full border-b transition-all duration-300 backdrop-blur supports-[backdrop-filter]:bg-background/60",
                isScrolled
                    ? "bg-background/95 border-border/40 shadow-sm"
                    : "bg-background/80 border-border/20"
            )}
        >
            <div className="container flex h-16 items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center space-x-2 group"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <div className="flex flex-col transition-transform group-hover:scale-105">
                        <span className="font-display text-xl font-bold text-primary tracking-tight">
                            NeXtworks
                        </span>
                        <span className="text-xs text-muted-foreground tracking-wider">
                            LIMITED
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-1">
                    {navigation.map((item) => (
                        <div key={item.name} className="relative group">
                            {item.dropdown ? (
                                // Dropdown item
                                <div className="relative">
                                    <button
                                        className={cn(
                                            "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg",
                                            isActive(item.href)
                                                ? "text-primary bg-primary/10"
                                                : "text-foreground/80 hover:text-primary hover:bg-muted"
                                        )}
                                    >
                                        {item.name}
                                        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-background/95 backdrop-blur-lg border border-border/50 rounded-xl shadow-2xl shadow-black/10 p-2">
                                            {item.dropdown.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    className={cn(
                                                        "flex items-center px-3 py-2.5 text-sm rounded-lg transition-all duration-200",
                                                        isActive(service.href)
                                                            ? "bg-primary/10 text-primary font-medium"
                                                            : "text-foreground/80 hover:bg-muted hover:text-foreground"
                                                    )}
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Regular navigation item
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg",
                                        isActive(item.href)
                                            ? "text-primary bg-primary/10 font-semibold"
                                            : "text-foreground/80 hover:text-primary hover:bg-muted"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href={`tel:${phone}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Phone className="h-4 w-4" />
                        <span className="hidden xl:inline">{phone}</span>
                    </a>
                    <Link
                        href="/contact"
                        className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:scale-105"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={cn(
                    "lg:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b border-border/50 transition-all duration-300 overflow-hidden",
                    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="container mx-auto px-4 sm:px-6 py-6 space-y-1">
                    {navigation.map((item) => (
                        <div key={item.name}>
                            {item.dropdown ? (
                                <div className="space-y-1">
                                    <div className="px-3 py-2 text-sm font-semibold text-foreground/80 border-l-2 border-primary">
                                        {item.name}
                                    </div>
                                    <div className="ml-4 space-y-1 border-l border-border/30 pl-3">
                                        {item.dropdown.map((service) => (
                                            <Link
                                                key={service.name}
                                                href={service.href}
                                                className={cn(
                                                    "block px-3 py-2.5 text-sm rounded-lg transition-all duration-200",
                                                    isActive(service.href)
                                                        ? "bg-primary/10 text-primary font-medium"
                                                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                                                )}
                                                onClick={() =>
                                                    setIsMenuOpen(false)
                                                }
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "block px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 border-l-2",
                                        isActive(item.href)
                                            ? "bg-primary/10 text-primary border-primary font-semibold"
                                            : "text-foreground/70 hover:bg-muted hover:text-foreground border-transparent"
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}

                    {/* Mobile CTA */}
                    <div className="pt-4 mt-4 border-t border-border/30 space-y-3">
                        <a
                            href="tel:+2348080240366"
                            className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                        >
                            <Phone className="h-4 w-4" />
                            +234 808 024 0366
                        </a>
                        <Link
                            href="/contact"
                            className="block w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-semibold text-center hover:bg-primary/90 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
