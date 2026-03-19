'use client';

export default function FeaturedCourses() {
  const courses = [
    {
      title: "TEF/TCF Intensive",
      description: "Complete preparation for TEFF exam with focus on all four components.",
      duration: "8 Months",
      icon: "📚",
      color: "blue"
    },
    {
      title: "DELF/DALF Mastery",
      description: "Specialized coaching for DELF/DALF certification with focus on intermediate level proficiency.",
      duration: "8 Weeks",
      icon: "🎯",
      color: "purple"
    },
    {
      title: "Conversational French",
      description: "Fluency in speaking, listening, and everyday communication.",
      duration: "6 Weeks",
      icon: "💬",
      color: "orange"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Our Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="card">
              <div className="text-5xl mb-4">{course.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-sm text-secondary font-semibold mb-4">Duration: {course.duration}</p>
              <a href="/courses" className="text-primary font-semibold hover:text-secondary transition">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
