"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Mail,
    MapPin,
    Phone,
    Clock,
    Send,
    Building2,
    Users,
    CheckCircle2,
    ArrowRight,
    MessageCircle,
} from "lucide-react";

const contactInfo = [
    {
        icon: Phone,
        title: "Phone Numbers",
        details: [
            "+234 (0) 808 024 0366",
            "+234 (0) 802 313 0238",
            "+234 (0) 806 280 9455",
        ],
        description: "Call us directly for immediate assistance",
        action: "tel:+2348080240366",
        actionText: "Call Primary Line",
    },
    {
        icon: Mail,
        title: "Email Address",
        details: ["info@nextworks.com.ng"],
        description: "Send us detailed project requirements",
        action: "mailto:info@nextworks.com.ng",
        actionText: "Send Email",
    },
    {
        icon: MapPin,
        title: "Office Address",
        details: [
            "8 Kehinde Akamo",
            "Off Michael Adekoya Road",
            "Ilupeju, Lagos, Nigeria",
        ],
        description: "Visit our headquarters for consultations",
        action: "https://maps.google.com",
        actionText: "Get Directions",
    },
    {
        icon: Clock,
        title: "Business Hours",
        details: [
            "Monday - Friday: 8:00 AM - 6:00 PM",
            "Saturday: 9:00 AM - 2:00 PM",
            "Emergency Support: 24/7 Available",
        ],
        description: "We're here when you need us",
        action: "",
        actionText: "",
    },
];

const services = [
    "Network Infrastructure Solutions",
    "Information Services & Collaboration",
    "IP Surveillance & Security Systems",
    "Automation Solutions",
    "IT Consultancy Services",
    "Training & Development Programs",
    "Hardware Supply & Maintenance",
    "Project Management",
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after success
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                budget: "",
                timeline: "",
                message: "",
            });
        }, 5000);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center px-4">
                <div className="max-w-md mx-auto text-center space-y-8">
                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 border border-green-200">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="font-display text-3xl font-bold text-foreground">
                            Message Sent Successfully!
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Thank you for contacting NeXtworks. Our team will
                            review your inquiry and get back to you within 24
                            hours.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <Button asChild size="lg">
                            <a href="/">Return to Homepage</a>
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            You'll be redirected back to the form in a few
                            seconds...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
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
                                Let's Start Your Project
                            </span>
                        </div>

                        <h1 className="font-display text-4xl font-bold tracking-tight text-balance lg:text-6xl">
                            Ready to{" "}
                            <span className="text-gradient bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                Transform
                            </span>{" "}
                            Your Technology?
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            Get in touch with our expert team to discuss your
                            technology needs. We'll provide tailored solutions
                            that drive your business forward with innovation and
                            reliability.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap justify-center gap-8 pt-8">
                            {[
                                {
                                    value: "24h",
                                    label: "Average Response Time",
                                },
                                { value: "30+", label: "Enterprise Clients" },
                                { value: "15+", label: "Years Experience" },
                                { value: "100%", label: "Client Satisfaction" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="font-display text-2xl font-bold text-primary">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Enhanced Contact Form */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <MessageCircle className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h2 className="font-display text-3xl font-bold text-balance">
                                            Start Your Project
                                        </h2>
                                        <p className="mt-2 text-lg text-muted-foreground">
                                            Provide some details about your
                                            requirements and we'll prepare a
                                            customized solution.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Personal Information */}
                                <div className="space-y-6">
                                    <h3 className="font-semibold text-foreground text-lg flex items-center gap-2">
                                        <Users className="h-5 w-5 text-primary" />
                                        Contact Information
                                    </h3>
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-foreground"
                                            >
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                                                placeholder="T sol"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-foreground"
                                            >
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                                                placeholder="t.sol@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-medium text-foreground"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                                                placeholder="+234 808 024 0366"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="company"
                                                className="block text-sm font-medium text-foreground"
                                            >
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                                                placeholder="Your Company Limited"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="space-y-6">
                                    <h3 className="font-semibold text-foreground text-lg flex items-center gap-2">
                                        <Building2 className="h-5 w-5 text-primary" />
                                        Project Details
                                    </h3>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="service"
                                            className="block text-sm font-medium text-foreground"
                                        >
                                            Service Needed *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border border-input bg-background px-4 py-3 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                                        >
                                            <option value="">
                                                Select a service
                                            </option>
                                            {services.map((service, index) => (
                                                <option
                                                    key={index}
                                                    value={service
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}
                                                >
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="budget"
                                                className="block text-sm font-medium text-foreground"
                                            >
                                                Estimated Budget
                                            </label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border border-input bg-background px-4 py-3 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                                            >
                                                <option value="">
                                                    Select budget range
                                                </option>
                                                <option value="under-1m">
                                                    Under ₦1,000,000
                                                </option>
                                                <option value="1m-5m">
                                                    ₦1M - ₦5M
                                                </option>
                                                <option value="5m-20m">
                                                    ₦5M - ₦20M
                                                </option>
                                                <option value="20m-plus">
                                                    ₦20M+
                                                </option>
                                                <option value="to-be-discussed">
                                                    To be discussed
                                                </option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="timeline"
                                                className="block text-sm font-medium text-foreground"
                                            >
                                                Project Timeline
                                            </label>
                                            <select
                                                id="timeline"
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border border-input bg-background px-4 py-3 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                                            >
                                                <option value="">
                                                    Select timeline
                                                </option>
                                                <option value="immediate">
                                                    Immediate (1-2 weeks)
                                                </option>
                                                <option value="1-month">
                                                    Within 1 month
                                                </option>
                                                <option value="1-3-months">
                                                    1-3 months
                                                </option>
                                                <option value="3-6-months">
                                                    3-6 months
                                                </option>
                                                <option value="flexible">
                                                    Flexible timeline
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-foreground"
                                        >
                                            Project Requirements *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors resize-none"
                                            placeholder="Describe your project requirements, challenges, and objectives in detail..."
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="w-full group font-semibold text-base py-3"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2"></div>
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            Submit Project Inquiry
                                            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>

                        {/* Enhanced Contact Information */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="font-display text-3xl font-bold text-balance">
                                    Get in Touch
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    Multiple ways to reach our expert team.
                                    We're here to help you succeed.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((item) => (
                                    <Card
                                        key={item.title}
                                        className="group hover:shadow-lg transition-all duration-300 border-0 bg-background"
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex gap-4">
                                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                    <item.icon className="h-6 w-6" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-foreground text-lg">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground mt-1">
                                                        {item.description}
                                                    </p>
                                                    <div className="mt-3 space-y-1">
                                                        {item.details.map(
                                                            (detail, index) => (
                                                                <p
                                                                    key={index}
                                                                    className="text-sm font-medium text-foreground"
                                                                >
                                                                    {detail}
                                                                </p>
                                                            )
                                                        )}
                                                    </div>
                                                    {item.action && (
                                                        <div className="mt-4">
                                                            <Button
                                                                asChild
                                                                variant="outline"
                                                                size="sm"
                                                                className="group/btn"
                                                            >
                                                                <a
                                                                    href={
                                                                        item.action
                                                                    }
                                                                >
                                                                    {
                                                                        item.actionText
                                                                    }
                                                                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                                                                </a>
                                                            </Button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Enhanced Map Section */}
                            <Card className="overflow-hidden border-0 bg-gradient-to-br from-muted/50 to-background">
                                <CardContent className="p-0">
                                    <div className="aspect-video bg-muted relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                                        <img
                                            src="/map-location-pin.png"
                                            alt="NeXtworks Office Location - 8 Kehinde Akamo, Off Michael Adekoya Road, Ilupeju Lagos"
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="bg-background/95 backdrop-blur rounded-lg p-4 border">
                                                <div className="flex items-center gap-3">
                                                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold text-foreground">
                                                            NeXtworks
                                                            Headquarters
                                                        </p>
                                                        <p className="text-sm text-muted-foreground">
                                                            8 Kehinde Akamo,
                                                            Ilupeju, Lagos
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick Response Guarantee */}
                            <Card className="border-0 bg-gradient-to-r from-primary/5 to-accent/5">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                            <Clock className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">
                                                Quick Response Guarantee
                                            </h3>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                We guarantee to respond to all
                                                inquiries within 24 hours during
                                                business days.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
