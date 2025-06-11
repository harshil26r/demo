import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { VisionMission } from "@/components/vision-mission";
import { AboutUs } from "@/components/about-us";
import { CareerOptions } from "@/components/career-options";
import { FAQs } from "@/components/faqs";
import { InquiryForm } from "@/components/inquiry-form";
import { JobOpportunities } from "@/components/job-opportunities";
import { AvailabilityAreas } from "@/components/availability-areas";
import { Footer } from "@/components/footer";

export function DemoSection() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Vision & Mission */}
      <VisionMission />

      {/* About Us */}
      <AboutUs />

      {/* Career Options */}
      <CareerOptions />

      {/* FAQs */}
      <FAQs />

      {/* Inquiry Form */}
      <InquiryForm />

      {/* Job Opportunities */}
      <JobOpportunities />

      {/* Availability Areas */}
      <AvailabilityAreas />

      {/* Footer */}
      <Footer />
    </div>
  );
}
