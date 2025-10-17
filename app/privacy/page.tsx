import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Lock, Eye, Mail, Phone } from "lucide-react";

export default function PrivacyPolicy() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
            {/* Header */}
            <section className="border-b bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
                            <Shield className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="font-display text-4xl font-bold tracking-tight text-balance lg:text-5xl">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            How we protect and manage your personal information
                            at NeXtworks Limited.
                        </p>
                        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                <span>Last updated: {currentYear}</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                            <div className="flex items-center gap-2">
                                <Lock className="h-4 w-4" />
                                <span>Your privacy matters to us</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-4 gap-12">
                        {/* Table of Contents */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-4">
                                <h3 className="font-display font-semibold text-lg mb-4">
                                    Contents
                                </h3>
                                <nav className="space-y-2">
                                    {[
                                        {
                                            id: "introduction",
                                            title: "Introduction",
                                        },
                                        {
                                            id: "information-collection",
                                            title: "Information We Collect",
                                        },
                                        {
                                            id: "how-we-use",
                                            title: "How We Use Information",
                                        },
                                        {
                                            id: "data-sharing",
                                            title: "Data Sharing",
                                        },
                                        {
                                            id: "data-security",
                                            title: "Data Security",
                                        },
                                        {
                                            id: "your-rights",
                                            title: "Your Rights",
                                        },
                                        { id: "cookies", title: "Cookies" },
                                        {
                                            id: "changes",
                                            title: "Policy Changes",
                                        },
                                        { id: "contact", title: "Contact Us" },
                                    ].map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Policy Content */}
                        <div className="lg:col-span-3 space-y-12">
                            {/* Introduction */}
                            <section id="introduction" className="scroll-mt-24">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    1. Introduction
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        At NeXtworks Limited ("we," "our," or
                                        "us"), we are committed to protecting
                                        your privacy and ensuring the security
                                        of your personal information. This
                                        Privacy Policy explains how we collect,
                                        use, disclose, and safeguard your
                                        information when you visit our website
                                        or use our services.
                                    </p>
                                    <p>
                                        We comply with applicable data
                                        protection laws and regulations,
                                        including the Nigeria Data Protection
                                        Regulation (NDPR) and other relevant
                                        legislation.
                                    </p>
                                </div>
                            </section>

                            {/* Information Collection */}
                            <section
                                id="information-collection"
                                className="scroll-mt-24"
                            >
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    2. Information We Collect
                                </h2>
                                <div className="space-y-6">
                                    <div className="bg-muted/30 rounded-2xl p-6">
                                        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                                            <Eye className="h-5 w-5 text-primary" />
                                            Personal Information
                                        </h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">
                                                    •
                                                </span>
                                                <span>
                                                    Contact information (name,
                                                    email address, phone number)
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">
                                                    •
                                                </span>
                                                <span>
                                                    Company information (company
                                                    name, job title)
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">
                                                    •
                                                </span>
                                                <span>
                                                    Communication preferences
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">
                                                    •
                                                </span>
                                                <span>
                                                    Project requirements and
                                                    service inquiries
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-muted/30 rounded-2xl p-6">
                                        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                                            <FileText className="h-5 w-5 text-primary" />
                                            Technical Information
                                        </h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">
                                                    •
                                                </span>
                                                <span>
                                                    IP address and browser type
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">
                                                    •
                                                </span>
                                                <span>
                                                    Pages visited and time spent
                                                    on our website
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">
                                                    •
                                                </span>
                                                <span>
                                                    Device information and
                                                    operating system
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* How We Use Information */}
                            <section id="how-we-use" className="scroll-mt-24">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    3. How We Use Your Information
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        We use the information we collect for
                                        the following purposes:
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            "To provide and maintain our IT services and solutions",
                                            "To communicate with you about your projects and inquiries",
                                            "To improve our website and services based on user feedback",
                                            "To send technical updates and service announcements",
                                            "To comply with legal obligations and protect our rights",
                                            "To provide customer support and technical assistance",
                                            "To analyze website usage and optimize user experience",
                                        ].map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium mt-0.5 flex-shrink-0">
                                                    {index + 1}
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Data Sharing */}
                            <section id="data-sharing" className="scroll-mt-24">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    4. Data Sharing and Disclosure
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        We do not sell, trade, or rent your
                                        personal information to third parties.
                                        We may share your information only in
                                        the following circumstances:
                                    </p>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {[
                                            {
                                                title: "Service Providers",
                                                content:
                                                    "With trusted partners who assist in delivering our services (under strict confidentiality agreements)",
                                            },
                                            {
                                                title: "Legal Requirements",
                                                content:
                                                    "When required by law, regulation, or legal process",
                                            },
                                            {
                                                title: "Business Transfers",
                                                content:
                                                    "In connection with a merger, acquisition, or sale of assets",
                                            },
                                            {
                                                title: "Protection of Rights",
                                                content:
                                                    "To protect the rights, property, or safety of NeXtworks, our users, or others",
                                            },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="bg-muted/30 rounded-xl p-4"
                                            >
                                                <h4 className="font-semibold text-foreground mb-2">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {item.content}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Data Security */}
                            <section
                                id="data-security"
                                className="scroll-mt-24"
                            >
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    5. Data Security
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        We implement appropriate technical and
                                        organizational security measures to
                                        protect your personal information
                                        against unauthorized access, alteration,
                                        disclosure, or destruction. Our security
                                        measures include:
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {[
                                            "Encryption protocols",
                                            "Secure network infrastructure",
                                            "Access controls",
                                            "Regular security audits",
                                            "Employee training",
                                            "Physical security measures",
                                        ].map((measure, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                                            >
                                                {measure}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Your Rights */}
                            <section id="your-rights" className="scroll-mt-24">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    6. Your Rights
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        You have the following rights regarding
                                        your personal information:
                                    </p>
                                    <div className="grid gap-4">
                                        {[
                                            {
                                                right: "Access",
                                                description:
                                                    "Request a copy of your personal data",
                                            },
                                            {
                                                right: "Correction",
                                                description:
                                                    "Request correction of inaccurate data",
                                            },
                                            {
                                                right: "Deletion",
                                                description:
                                                    "Request deletion of your personal data",
                                            },
                                            {
                                                right: "Objection",
                                                description:
                                                    "Object to processing of your data",
                                            },
                                            {
                                                right: "Portability",
                                                description:
                                                    "Request transfer of your data to another organization",
                                            },
                                            {
                                                right: "Withdrawal",
                                                description:
                                                    "Withdraw consent at any time",
                                            },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-4 p-4 rounded-xl bg-muted/30"
                                            >
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium flex-shrink-0">
                                                    {index + 1}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-foreground">
                                                        {item.right}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground mt-1">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Cookies */}
                            <section id="cookies" className="scroll-mt-24">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    7. Cookies and Tracking
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        We use cookies and similar tracking
                                        technologies to enhance your experience
                                        on our website. Cookies are small text
                                        files stored on your device that help us
                                        analyze website traffic and improve our
                                        services.
                                    </p>
                                    <p>
                                        You can control cookie preferences
                                        through your browser settings. However,
                                        disabling cookies may affect your
                                        experience on our website.
                                    </p>
                                </div>
                            </section>

                            {/* Policy Changes */}
                            <section id="changes" className="scroll-mt-24">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    8. Changes to This Policy
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        We may update this Privacy Policy from
                                        time to time to reflect changes in our
                                        practices or legal requirements. We will
                                        notify you of any material changes by
                                        posting the updated policy on our
                                        website with a new effective date.
                                    </p>
                                    <p>
                                        We encourage you to review this policy
                                        periodically to stay informed about how
                                        we are protecting your information.
                                    </p>
                                </div>
                            </section>

                            {/* Contact */}
                            <section id="contact" className="scroll-mt-24">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    9. Contact Us
                                </h2>
                                <div className="space-y-6">
                                    <div className="bg-muted/30 rounded-2xl p-6">
                                        <p className="text-muted-foreground mb-4">
                                            If you have any questions, concerns,
                                            or requests regarding this Privacy
                                            Policy or our data practices, please
                                            contact us:
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <Mail className="h-5 w-5 text-primary" />
                                                <a
                                                    href="mailto:info@nextworks.com.ng"
                                                    className="text-foreground hover:text-primary transition-colors"
                                                >
                                                    info@nextworks.com.ng
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Phone className="h-5 w-5 text-primary" />
                                                <a
                                                    href="tel:+2348080240366"
                                                    className="text-foreground hover:text-primary transition-colors"
                                                >
                                                    +234 (0) 808 024 0366
                                                </a>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <FileText className="h-5 w-5 text-primary mt-0.5" />
                                                <span className="text-foreground">
                                                    NeXtworks Limited
                                                    <br />
                                                    8 Kehinde Akamo, Off Michael
                                                    Adekoya Road
                                                    <br />
                                                    Ilupeju, Lagos, Nigeria
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <p className="text-sm text-muted-foreground">
                                            Effective Date: {currentYear}
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="border-t bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <h3 className="font-display text-2xl font-bold text-foreground">
                            Questions About Your Data?
                        </h3>
                        <p className="text-muted-foreground">
                            We're here to help you understand how we protect and
                            manage your information.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg">
                                <Link href="/contact">Contact Our Team</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/">Back to Homepage</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
