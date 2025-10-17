export function PartnersSection() {
    const partners = [
        { name: "Microsoft", category: "Software" },
        { name: "Kaspersky", category: "Security" },
        { name: "Cyberoam", category: "Network Security" },
        { name: "Anviz", category: "Access Control" },
        { name: "LogicalDOC", category: "Document Management" },
        { name: "Mdaemon", category: "Email Systems" },
        { name: "Cisco", category: "Networking" },
        { name: "GateProtect", category: "Security" },
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="text-center space-y-6 mb-12">
                    <div className="inline-flex items-center rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur-sm">
                        <span className="text-muted-foreground">
                            Technology Partnerships
                        </span>
                    </div>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-4xl">
                        Trusted{" "}
                        <span className="text-gradient bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Technology Partners
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        We partner with industry-leading technology providers to
                        deliver best-in-class solutions for your business.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                    {partners.map((partner, index) => (
                        <div key={partner.name} className="text-center group">
                            <div className="aspect-square rounded-2xl bg-background border flex items-center justify-center p-6 group-hover:shadow-lg transition-all duration-300">
                                <div className="text-center">
                                    <div className="font-display font-semibold text-lg text-foreground mb-2">
                                        {partner.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground font-medium">
                                        {partner.category}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
