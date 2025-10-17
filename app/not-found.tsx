import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Wifi, Server, Cloud } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* Animated background elements */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/4 h-40 w-40 rounded-full bg-primary/5 blur-2xl"></div>
                </div>

                {/* Content */}
                <div className="space-y-8">
                    {/* Error Code with Icon */}
                    <div className="relative">
                        <div className="text-9xl font-display font-bold text-foreground/10 select-none">
                            404
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center h-24 w-24 rounded-3xl bg-primary/10 border border-primary/20 mb-6">
                                    <Wifi className="h-12 w-12 text-primary" />
                                </div>
                                <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                                    Connection Lost
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-6">
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-md mx-auto">
                            The page you're looking for seems to have
                            disconnected from our network. It might have been
                            moved, deleted, or never existed in the first place.
                        </p>

                        {/* Technical details for fun */}
                        <div className="inline-flex items-center gap-4 rounded-2xl bg-muted/50 px-6 py-4 backdrop-blur-sm">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Server className="h-4 w-4" />
                                <span>Status: 404</span>
                            </div>
                            <div className="w-px h-4 bg-border"></div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Cloud className="h-4 w-4" />
                                <span>Route Not Found</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Button
                            asChild
                            size="lg"
                            className="group font-semibold"
                        >
                            <Link href="/">
                                <Home className="h-4 w-4 mr-2" />
                                Back to Homepage
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="group font-semibold"
                        >
                            <Link href="/contact">
                                Report Broken Link
                                <ArrowLeft className="h-4 w-4 ml-2 transition-transform group-hover:-translate-x-1" />
                            </Link>
                        </Button>
                    </div>

                    {/* Quick Links */}
                    <div className="pt-12 border-t border-border/50">
                        <p className="text-sm text-muted-foreground mb-4">
                            While you're here, maybe you were looking for:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { name: "Services", href: "/services" },
                                { name: "Portfolio", href: "/portfolio" },
                                { name: "About Us", href: "/about" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Network-themed decorative elements */}
                    <div className="flex justify-center gap-2 pt-12 opacity-40">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
