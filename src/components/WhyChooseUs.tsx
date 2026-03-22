'use client';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Certified professionals with 5+ years of teaching experience"
    },
    {
      icon: "📊",
      title: "Proven Results",
      description: "95% pass rate and 2,000+ successful students"
    },
    {
      icon: "🎓",
      title: "Comprehensive Curriculum",
      description: "Covering all exam components with latest materials"
    },
    {
      icon: "💬",
      title: "Interactive Learning",
      description: "Small batches with maximum focus on individual progress"
    },
    {
      icon: "📱",
      title: "Flexible Schedule",
      description: "Online and offline batches with multiple timings"
    },
    {
      icon: "🏅",
      title: "Lifetime Support",
      description: "Access to resources and community even after course completion"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Why Choose That's My French?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center card">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
