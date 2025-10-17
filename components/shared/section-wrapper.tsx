import type React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "default" | "muted" | "primary"
}

export function SectionWrapper({ children, className, id, background = "default" }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 lg:py-24",
        background === "muted" && "bg-muted/30",
        background === "primary" && "bg-primary text-primary-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">{children}</div>
    </section>
  )
}
