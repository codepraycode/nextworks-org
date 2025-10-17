import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    FileText,
    Scale,
    Shield,
    AlertTriangle,
    BookOpen,
    Mail,
} from "lucide-react";

export default function TermsOfService() {
    const currentYear = new Date().getFullYear();
    const effectiveDate = "January 1, 2024";

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
            {/* Header */}
            <section className="border-b bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
                            <Scale className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="font-display text-4xl font-bold tracking-tight text-balance lg:text-5xl">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Legal terms governing your use of NeXtworks
                            Limited's services and website.
                        </p>
                        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                <span>Effective: {effectiveDate}</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                            <div className="flex items-center gap-2">
                                <Shield className="h-4 w-4" />
                                <span>Please read carefully</span>
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
                                            id: "acceptance",
                                            title: "Acceptance of Terms",
                                        },
                                        {
                                            id: "services",
                                            title: "Services Description",
                                        },
                                        {
                                            id: "eligibility",
                                            title: "Eligibility",
                                        },
                                        {
                                            id: "user-accounts",
                                            title: "User Accounts",
                                        },
                                        {
                                            id: "intellectual-property",
                                            title: "Intellectual Property",
                                        },
                                        {
                                            id: "prohibited-activities",
                                            title: "Prohibited Activities",
                                        },
                                        {
                                            id: "payment-terms",
                                            title: "Payment Terms",
                                        },
                                        {
                                            id: "service-modifications",
                                            title: "Service Modifications",
                                        },
                                        {
                                            id: "termination",
                                            title: "Termination",
                                        },
                                        {
                                            id: "disclaimer",
                                            title: "Disclaimer",
                                        },
                                        {
                                            id: "limitation-liability",
                                            title: "Limitation of Liability",
                                        },
                                        {
                                            id: "governing-law",
                                            title: "Governing Law",
                                        },
                                        {
                                            id: "changes",
                                            title: "Changes to Terms",
                                        },
                                        {
                                            id: "contact",
                                            title: "Contact Information",
                                        },
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

                        {/* Terms Content */}
                        <div className="lg:col-span-3 space-y-12">
                            {/* Important Notice */}
                            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-amber-900">
                                            Important Legal Notice
                                        </h3>
                                        <p className="text-amber-800 text-sm leading-relaxed">
                                            These Terms of Service constitute a
                                            legally binding agreement between
                                            you and NeXtworks Limited. By
                                            accessing our website or using our
                                            services, you acknowledge that you
                                            have read, understood, and agree to
                                            be bound by these terms. If you do
                                            not agree with any part of these
                                            terms, you must not use our
                                            services.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Acceptance of Terms */}
                            <section id="acceptance" className="scroll-mt-24">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    1. Acceptance of Terms
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        Welcome to NeXtworks Limited ("Company,"
                                        "we," "our," or "us"). These Terms of
                                        Service ("Terms") govern your access to
                                        and use of our website, services, and
                                        any related software or applications
                                        (collectively, the "Services").
                                    </p>
                                    <p>
                                        By accessing or using our Services, you
                                        agree to be bound by these Terms and our
                                        Privacy Policy. If you are entering into
                                        these Terms on behalf of a company or
                                        other legal entity, you represent that
                                        you have the authority to bind such
                                        entity to these Terms.
                                    </p>
                                </div>
                            </section>

                            {/* Services Description */}
                            <section id="services" className="scroll-mt-24">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    2. Services Description
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        NeXtworks Limited provides comprehensive
                                        Information and Communication Technology
                                        (ICT) services including but not limited
                                        to:
                                    </p>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {[
                                            "Network Infrastructure Solutions",
                                            "Information Services & Document Management",
                                            "IP Surveillance & Security Systems",
                                            "Automation Solutions",
                                            "IT Consultancy Services",
                                            "Professional Training Programs",
                                        ].map((service, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 bg-muted/30 rounded-xl p-4"
                                            >
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">
                                                    {index + 1}
                                                </div>
                                                <span className="font-medium text-foreground">
                                                    {service}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <p>
                                        Specific service terms, scope, and
                                        deliverables will be detailed in
                                        separate service agreements or
                                        statements of work.
                                    </p>
                                </div>
                            </section>

                            {/* Eligibility */}
                            <section id="eligibility" className="scroll-mt-24">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    3. Eligibility
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>To use our Services, you must:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">
                                                •
                                            </span>
                                            <span>
                                                Be at least 18 years of age
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">
                                                •
                                            </span>
                                            <span>
                                                Have the legal capacity to enter
                                                into binding contracts
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">
                                                •
                                            </span>
                                            <span>
                                                Provide accurate and complete
                                                registration information
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary mt-1">
                                                •
                                            </span>
                                            <span>
                                                Comply with all applicable laws
                                                and regulations
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* User Accounts */}
                            <section
                                id="user-accounts"
                                className="scroll-mt-24"
                            >
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    4. User Accounts
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        When you create an account with us, you
                                        must provide accurate and complete
                                        information. You are responsible for:
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            "Maintaining the confidentiality of your account credentials",
                                            "All activities that occur under your account",
                                            "Promptly notifying us of any unauthorized use of your account",
                                            "Ensuring that you exit from your account at the end of each session",
                                        ].map((responsibility, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium mt-0.5 flex-shrink-0">
                                                    {index + 1}
                                                </div>
                                                <span>{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p>
                                        We reserve the right to refuse service,
                                        terminate accounts, or remove content at
                                        our sole discretion.
                                    </p>
                                </div>
                            </section>

                            {/* Intellectual Property */}
                            <section
                                id="intellectual-property"
                                className="scroll-mt-24"
                            >
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    5. Intellectual Property
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        All content, features, and functionality
                                        available through our Services,
                                        including but not limited to text,
                                        graphics, logos, images, and software,
                                        are the exclusive property of NeXtworks
                                        Limited and are protected by
                                        international copyright, trademark, and
                                        other intellectual property laws.
                                    </p>
                                    <div className="bg-muted/30 rounded-2xl p-6">
                                        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                                            <BookOpen className="h-5 w-5 text-primary" />
                                            License Grant
                                        </h3>
                                        <p className="text-muted-foreground">
                                            We grant you a limited,
                                            non-exclusive, non-transferable, and
                                            revocable license to access and use
                                            our Services for your internal
                                            business purposes. This license does
                                            not include any right to:
                                        </p>
                                        <ul className="space-y-2 mt-3">
                                            {[
                                                "Resell or commercially use our Services",
                                                "Distribute, modify, or create derivative works",
                                                "Use data mining or similar data gathering tools",
                                                "Reverse engineer or attempt to extract source code",
                                            ].map((restriction, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-2 text-sm"
                                                >
                                                    <span className="text-primary mt-1">
                                                        •
                                                    </span>
                                                    <span>{restriction}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Prohibited Activities */}
                            <section
                                id="prohibited-activities"
                                className="scroll-mt-24"
                            >
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    6. Prohibited Activities
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        You agree not to engage in any of the
                                        following prohibited activities:
                                    </p>
                                    <div className="grid gap-4">
                                        {[
                                            {
                                                category: "Illegal Activities",
                                                items: [
                                                    "Violate any applicable laws or regulations",
                                                    "Infringe upon intellectual property rights",
                                                    "Engage in fraudulent activities",
                                                ],
                                            },
                                            {
                                                category:
                                                    "Service Interference",
                                                items: [
                                                    "Attempt to gain unauthorized access",
                                                    "Interfere with service functionality",
                                                    "Introduce viruses or malicious code",
                                                ],
                                            },
                                            {
                                                category: "Improper Use",
                                                items: [
                                                    "Harass or harm other users",
                                                    "Submit false information",
                                                    "Use services for unauthorized purposes",
                                                ],
                                            },
                                        ].map((section, index) => (
                                            <div
                                                key={index}
                                                className="bg-muted/30 rounded-xl p-6"
                                            >
                                                <h4 className="font-semibold text-foreground mb-3">
                                                    {section.category}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {section.items.map(
                                                        (item, itemIndex) => (
                                                            <li
                                                                key={itemIndex}
                                                                className="flex items-start gap-2 text-sm"
                                                            >
                                                                <span className="text-primary mt-1">
                                                                    •
                                                                </span>
                                                                <span>
                                                                    {item}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Payment Terms */}
                            <section
                                id="payment-terms"
                                className="scroll-mt-24"
                            >
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    7. Payment Terms
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        For services requiring payment, you
                                        agree to pay all applicable fees as
                                        described in your service agreement.
                                        Specific payment terms include:
                                    </p>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {[
                                            {
                                                term: "Payment Schedule",
                                                detail: "As specified in service agreement",
                                            },
                                            {
                                                term: "Late Payments",
                                                detail: "Subject to interest charges",
                                            },
                                            {
                                                term: "Taxes",
                                                detail: "You are responsible for applicable taxes",
                                            },
                                            {
                                                term: "Price Changes",
                                                detail: "We may change prices with 30 days notice",
                                            },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="bg-muted/30 rounded-xl p-4 text-center"
                                            >
                                                <h4 className="font-semibold text-foreground mb-2">
                                                    {item.term}
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {item.detail}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Service Modifications */}
                            <section
                                id="service-modifications"
                                className="scroll-mt-24"
                            >
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    8. Service Modifications
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        We reserve the right to modify, suspend,
                                        or discontinue any aspect of our
                                        Services at any time, with or without
                                        notice. We shall not be liable to you or
                                        any third party for any modification,
                                        suspension, or discontinuance of the
                                        Services.
                                    </p>
                                    <p>
                                        We may also impose limits on certain
                                        features and services or restrict your
                                        access to parts or all of the Services
                                        without notice or liability.
                                    </p>
                                </div>
                            </section>

                            {/* Termination */}
                            <section id="termination" className="scroll-mt-24">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    9. Termination
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        These Terms remain in effect while you
                                        use our Services. We may terminate or
                                        suspend your access to our Services
                                        immediately, without prior notice or
                                        liability, for any reason whatsoever,
                                        including without limitation if you
                                        breach these Terms.
                                    </p>
                                    <p>
                                        Upon termination, your right to use the
                                        Services will cease immediately. All
                                        provisions of these Terms which by their
                                        nature should survive termination shall
                                        survive termination, including ownership
                                        provisions, warranty disclaimers,
                                        indemnity, and limitations of liability.
                                    </p>
                                </div>
                            </section>

                            {/* Disclaimer */}
                            <section id="disclaimer" className="scroll-mt-24">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    10. Disclaimer
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        YOUR USE OF THE SERVICES IS AT YOUR SOLE
                                        RISK. THE SERVICES ARE PROVIDED ON AN
                                        "AS IS" AND "AS AVAILABLE" BASIS.
                                        NXTWORKS LIMITED EXPRESSLY DISCLAIMS ALL
                                        WARRANTIES OF ANY KIND, WHETHER EXPRESS
                                        OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                                        THE IMPLIED WARRANTIES OF
                                        MERCHANTABILITY, FITNESS FOR A
                                        PARTICULAR PURPOSE, AND
                                        NON-INFRINGEMENT.
                                    </p>
                                    <p>
                                        We make no warranty that (i) the
                                        Services will meet your requirements,
                                        (ii) the Services will be uninterrupted,
                                        timely, secure, or error-free, or (iii)
                                        the results that may be obtained from
                                        the use of the Services will be accurate
                                        or reliable.
                                    </p>
                                </div>
                            </section>

                            {/* Limitation of Liability */}
                            <section
                                id="limitation-liability"
                                className="scroll-mt-24"
                            >
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    11. Limitation of Liability
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        TO THE FULLEST EXTENT PERMITTED BY
                                        APPLICABLE LAW, IN NO EVENT SHALL
                                        NXTWORKS LIMITED, ITS DIRECTORS,
                                        EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS,
                                        OR AFFILIATES BE LIABLE FOR ANY
                                        INDIRECT, INCIDENTAL, SPECIAL,
                                        CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                                        INCLUDING WITHOUT LIMITATION, LOSS OF
                                        PROFITS, DATA, USE, GOODWILL, OR OTHER
                                        INTANGIBLE LOSSES, RESULTING FROM:
                                    </p>
                                    <ul className="space-y-2 mt-4">
                                        {[
                                            "Your access to or use of or inability to access or use the Services",
                                            "Any conduct or content of any third party on the Services",
                                            "Any content obtained from the Services",
                                            "Unauthorized access, use, or alteration of your transmissions or content",
                                        ].map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-2"
                                            >
                                                <span className="text-primary mt-1">
                                                    •
                                                </span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Governing Law */}
                            <section
                                id="governing-law"
                                className="scroll-mt-24"
                            >
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    12. Governing Law
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        These Terms shall be governed and
                                        construed in accordance with the laws of
                                        the Federal Republic of Nigeria, without
                                        regard to its conflict of law
                                        provisions.
                                    </p>
                                    <p>
                                        Any disputes arising from these Terms or
                                        your use of our Services shall be
                                        subject to the exclusive jurisdiction of
                                        the courts located in Lagos, Nigeria.
                                    </p>
                                </div>
                            </section>

                            {/* Changes to Terms */}
                            <section id="changes" className="scroll-mt-24">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    13. Changes to Terms
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        We reserve the right, at our sole
                                        discretion, to modify or replace these
                                        Terms at any time. If a revision is
                                        material, we will provide at least 30
                                        days' notice prior to any new terms
                                        taking effect.
                                    </p>
                                    <p>
                                        What constitutes a material change will
                                        be determined at our sole discretion. By
                                        continuing to access or use our Services
                                        after those revisions become effective,
                                        you agree to be bound by the revised
                                        terms.
                                    </p>
                                </div>
                            </section>

                            {/* Contact Information */}
                            <section id="contact" className="scroll-mt-24">
                                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                    14. Contact Information
                                </h2>
                                <div className="space-y-6">
                                    <div className="bg-muted/30 rounded-2xl p-6">
                                        <p className="text-muted-foreground mb-4">
                                            If you have any questions about
                                            these Terms of Service, please
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
                                                <FileText className="h-5 w-5 text-primary" />
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
                                            Effective Date: {effectiveDate}
                                            <br />
                                            Last Updated: {currentYear}
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
                            Questions About Our Terms?
                        </h3>
                        <p className="text-muted-foreground">
                            Our legal team is available to clarify any aspect of
                            these terms and conditions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg">
                                <Link href="/contact">
                                    Contact Legal Department
                                </Link>
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
