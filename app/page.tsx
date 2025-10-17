import { Hero } from "@/components/home/hero"
import { ServicesPreview } from "@/components/home/services-preview"
import { StatsSection } from "@/components/home/stats-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <StatsSection />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
