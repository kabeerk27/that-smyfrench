'use client';

import { BookIcon, TargetIcon, ChatIcon } from './AnimatedIconsLibrary';
import { StaggerContainer } from './AnimationUtilities';

export default function FeaturedCourses() {
  const courses = [
    {
      title: "TEF/TCF Intensive",
      description: "Complete preparation for TEFF exam with focus on all four components.",
      duration: "8 Months",
      icon: BookIcon,
      color: "blue"
    },
    {
      title: "DELF/DALF Mastery",
      description: "Specialized coaching for DELF/DALF certification with focus on intermediate level proficiency.",
      duration: "8 Weeks",
      icon: TargetIcon,
      color: "purple"
    },
    {
      title: "Conversational French",
      description: "Fluency in speaking, listening, and everyday communication.",
      duration: "6 Weeks",
      icon: ChatIcon,
      color: "orange"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Our Featured Courses</h2>
        <StaggerContainer animation="fadeInUp" staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="card hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <course.icon size="lg" animated={true} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-sm text-secondary font-semibold mb-4">Duration: {course.duration}</p>
              <a href="/courses" className="text-primary font-semibold hover:text-secondary transition duration-300 inline-block">
                Learn More →
              </a>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
