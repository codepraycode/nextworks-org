import { CheckCircle2, Zap, Shield, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies and industry best practices to deliver innovative solutions.",
  },
  {
    icon: Shield,
    title: "Proven Reliability",
    description: "Our track record speaks for itself with 15+ years of successful project delivery.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock technical support to ensure your systems are always running smoothly.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes to guarantee exceptional results.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-5xl">
                Why Choose NeXtworks?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                We combine technical expertise with a customer-first approach to deliver solutions that drive real
                business value.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8">
              <img
                src="/professional-team-working-on-technology-infrastruc.jpg"
                alt="Professional team working"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
