import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import ReviewsPreview from "@/components/ReviewsPreview";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <ReviewsPreview />
    </main>
  );
}
