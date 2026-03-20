'use client';

export default function LearningOutcomes() {
  const outcomes = [
    {
      category: "Speaking",
      icon: "🗣️",
      skills: [
        "Fluent conversational French",
        "Native-like pronunciation",
        "Confidence in presentations",
        "Professional communication"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Listening",
      icon: "👂",
      skills: [
        "Understand native speakers",
        "Follow movies & podcasts",
        "Grasp complex discussions",
        "Real-world comprehension"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Reading",
      icon: "📖",
      skills: [
        "Read French literature",
        "Understand news articles",
        "Comprehend technical texts",
        "Master written French"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      category: "Writing",
      icon: "✍️",
      skills: [
        "Write fluently & correctly",
        "Create professional emails",
        "Master formal writing",
        "Express ideas clearly"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What You'll Master</h2>
          <p className="text-xl text-gray-600">Achieve excellence in all aspects of French</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${outcome.color} text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105`}>
              <div className="text-5xl mb-4">{outcome.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{outcome.category}</h3>
              <ul className="space-y-3">
                {outcome.skills.map((skill, sidx) => (
                  <li key={sidx} className="flex items-start gap-2 text-sm">
                    <span className="text-lg">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
