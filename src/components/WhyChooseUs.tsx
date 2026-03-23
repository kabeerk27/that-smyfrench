'use client';

import { InstructorIcon, ChartIcon, GraduationIcon, ChatIcon, MobileIcon, AwardIcon } from './AnimatedIconsLibrary';
import { StaggerContainer } from './AnimationUtilities';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: InstructorIcon,
      title: "Expert Instructors",
      description: "Certified professionals with 5+ years of teaching experience"
    },
    {
      icon: ChartIcon,
      title: "Proven Results",
      description: "95% pass rate and 2,000+ successful students"
    },
    {
      icon: GraduationIcon,
      title: "Comprehensive Curriculum",
      description: "Covering all exam components with latest materials"
    },
    {
      icon: ChatIcon,
      title: "Interactive Learning",
      description: "Small batches with maximum focus on individual progress"
    },
    {
      icon: MobileIcon,
      title: "Flexible Schedule",
      description: "Online and offline batches with multiple timings"
    },
    {
      icon: AwardIcon,
      title: "Lifetime Support",
      description: "Access to resources and community even after course completion"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Why Choose That's My French?</h2>
        <StaggerContainer animation="fadeInUp" staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center card hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <reason.icon size="lg" animated={true} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
