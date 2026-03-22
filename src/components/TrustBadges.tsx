'use client';

export default function TrustBadges() {
  const badges = [
    {
      icon: "🏅",
      title: "Certified Instructors",
      desc: "All teachers certified and experienced",
      stat: "5+ Years"
    },
    {
      icon: "📊",
      title: "95% Success Rate",
      desc: "Industry-leading pass rate",
      stat: "2,000+ Students"
    },
    {
      icon: "⭐",
      title: "5-Star Rated",
      desc: "Highest customer satisfaction",
      stat: "4.9/5.0"
    },
    {
      icon: "🎓",
      title: "Exam Prep Expert",
      desc: "Specialized exam preparation",
      stat: "All Major Exams"
    },
    {
      icon: "🌍",
      title: "Global Recognition",
      desc: "Internationally recognized results",
      stat: "50+ Countries"
    },
    {
      icon: "🎯",
      title: "Quality Guaranteed",
      desc: "Satisfaction or your money back",
      stat: "100% Guaranteed"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why You Can Trust Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, idx) => (
            <div 
              key={idx} 
              className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300 text-center"
            >
              <div className="text-4xl mb-3">{badge.icon}</div>
              <h3 className="font-bold text-lg mb-2">{badge.title}</h3>
              <p className="text-blue-100 text-sm mb-3">{badge.desc}</p>
              <div className="text-secondary text-xl font-bold">{badge.stat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
