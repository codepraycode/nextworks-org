import { Hero } from "@/components/home/hero"
import { ServicesPreview } from "@/components/home/services-preview"
import {ClientsSection} from "@/components/home/clients-section";
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { CTASection } from "@/components/home/cta-section"
import { ValuesSection } from "@/components/home/values-section";
import { TechnologySection } from "@/components/home/technology-section";
import { ProcessSection } from "@/components/home/process-section";
import { PartnersSection } from "@/components/home/partners-section";

export default function HomePage() {
  return (
      <>
          <Hero />
          <ServicesPreview />
          <ClientsSection />
          <ValuesSection />
          <TechnologySection />
          <WhyChooseUs />
          <ProcessSection />
          <PartnersSection />
          <CTASection />
      </>
  );
}
