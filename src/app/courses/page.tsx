'use client';

export default function CoursesPage() {
  const detailedCourses = [
    {
      id: 1,
      title: "TEF / TCF Intensive Preparation",
      description: "Complete 8 months preparation course for TEF/TCF (Test d'Évaluation de Français) exam with focus on all four components: reading, writing, listening, and speaking.",
      duration: "8 Months",
      schedule: "5 classes per week (1 hour each)",
      features: [
        "Expert-led interactive sessions",
        "Comprehensive study materials",
        "Practice tests and mock exams",
        "One-on-one guidance",
        "Grammar and vocabulary mastery",
        "Exam tips and strategies",
        "Lifetime resource access"
      ],
      prerequisite: "Basic French knowledge (A2-B1 level)",
      batchSize: "Small batches (3-4 students)"
    },
    {
      id: 2,
      title: "DELF / DALF(Intermediate Comprehensive Test) Mastery",
      description: "Specialized 8-week program designed to help learners achieve DELF/DALF certification with focus on intermediate level proficiency.",
      duration: "8 Weeks",
      schedule: "3 classes per week (2 hours each)",
      features: [
        "Intermediate level focused curriculum",
        "Speaking fluency development",
        "Comprehensive listening training",
        "Writing skill enhancement",
        "Cultural context integration",
        "Mock tests and evaluations",
        "Personalized feedback"
      ],
      prerequisite: "A2-B1 French level",
      batchSize: "Small batches (3-4 students)"
    }
];
    return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="section-title">Our Comprehensive Courses</h1>
        
        <div className="space-y-8">
          {detailedCourses.map((course) => (
            <div key={course.id} className="card">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-primary mb-2">{course.title}</h2>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-xs text-gray-600">Duration</p>
                      <p className="font-semibold text-primary">{course.duration}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-xs text-gray-600">Schedule</p>
                      <p className="font-semibold text-sm">{course.schedule}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-xs text-gray-600">Batch Size</p>
                      <p className="font-semibold text-sm">{course.batchSize}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold text-primary mb-3">Course Highlights:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {course.features.map((feature, idx) => (
                        <p key={idx} className="flex items-center gap-2 text-gray-700">
                          <span className="text-secondary">✓</span> {feature}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div>
                      <p className="text-sm text-gray-600">Prerequisite</p>
                      <p className="font-semibold text-primary">{course.prerequisite}</p>
                    </div>
                    <a href="/contact" className="btn-primary">Enroll Now</a>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary to-blue-800 text-white p-6 rounded-lg text-center min-w-fit">
                  <div className="mt-6 pt-6 border-t border-blue-300">
                    <p className="text-sm text-blue-100">⭐ 95% Pass Rate</p>
                    <p className="text-sm text-blue-100">🎓 Certified Results</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-secondary to-amber-300 text-primary rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="mb-6 text-lg font-semibold">All courses include comprehensive materials, lifetime access, and personalized support</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-primary text-white">Schedule a Free Demo Class</a>
            <a href="/contact" className="btn-secondary">Get Course Details</a>
          </div>
        </div>
      </div>
    </main>
  );
}
