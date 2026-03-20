import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import ReviewsPreview from "@/components/ReviewsPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import LearningOutcomes from "@/components/LearningOutcomes";
import TrustBadges from "@/components/TrustBadges";
import InstructorProfiles from "@/components/InstructorProfiles";
import EnhancedFAQ from "@/components/EnhancedFAQ";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCourses />
      <ProcessSection />
      <LearningOutcomes />
      <WhyChooseUs />
      <TrustBadges />
      <InstructorProfiles />
      <ReviewsPreview />
      <EnhancedFAQ />
      <CTASection />
    </main>
  );
}
