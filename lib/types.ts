export interface Service {
  id: string
  title: string
  slug: string
  icon: string
  shortDescription: string
  fullDescription: string
  features: string[]
  benefits: string[]
  technologies?: string[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  linkedin?: string
  certifications?: string[]
}

export interface Client {
  id: string
  name: string
  logo?: string
  industry: string
  testimonial?: string
}

export interface Stat {
  label: string
  value: string
  suffix?: string
}
