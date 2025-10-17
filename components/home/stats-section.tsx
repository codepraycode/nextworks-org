import { Users, Building2, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Satisfied Clients",
  },
  {
    icon: Building2,
    value: "1000+",
    label: "Projects Completed",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <div className="font-display text-4xl font-bold">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/80">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
