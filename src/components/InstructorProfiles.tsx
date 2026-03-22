'use client';

export default function InstructorProfiles() {
  const instructors = [
    {
      name: "Saif Arish Khan",
      role: "Founder & Lead Instructor",
      image: "/arish.jpg", 
      specialty: "TEF/TCF Specialist",
      bio: "C1–C2 level French language professional with a Bachelor’s degree in French and over 5 years of experience in the field. Experienced as a live French interpreter at Teleperformance, with a strong background of working across multiple institutes, consistently delivering high-quality training and results.",
      rating: 4.9,
      students: 230,
      courses: ["TEF/TCF Intensive", "Advanced Pronunciation"],
      highlighted: true
    },
    {
      name: "Divya",
      role: "Exam Preparation Coach",
      image: "/divya.jpg",
      specialty: "TCF Expert",
      bio: "Certified language coach with focus on exam preparation. Years helping students achieve their certification goals.",
      rating: 4.9,
      students: 190,
      courses: ["DELF/DALF", "Grammar Mastery"],
      highlighted: false
    },
    {
      name: "Babita",
      role: "Teaches : DELF DALF TCF ALL FOUR MODULES AND GRAMMER",
      image: "/Babita.jpeg",
      specialty: "Cultural Immersion",
      bio: "B2-certified French language professional with a Bachelor’s degree in French. She specializes in guiding A2–B1 learners toward achieving a strong B2 level through structured and result-oriented training..",
      rating: 4.8,
      students: 210,
      courses: ["DELF/DALF", "TCF TEF"],
      highlighted: false
    },
    {
      name: "Shabana",
      role: "B1 B2 Trainer",
      image: "/shabana.jpeg",
      specialty: "Structured Exam Prep",
      bio: "C1-certified French trainer with a Bachelor’s and Master’s degree in French and over 7 years of experience in the language domain. Currently working as an SPS Associate (French) at Amazon for the past 4 years. Specializes in training students for TEF and DELF with a structured, results-driven approach.",
      rating: 4.9,
      students: 140,
      courses: ["TEF/TCF"],
      highlighted: false
    },
    {
      name: "Alisha",
      role: "DALF/DELF Trainer",
      image: "/alisha.jpeg",
      specialty: "DELF/DALF Expert",
      bio: "TCF, TEF & DELF certified expert with a proven track record in exam preparation. Focused on delivering results through effective strategies and practice.",
      rating: 4.8,
      students: 110,
      courses: ["Conversational French", "Cultural French"],
      highlighted: false
    },
    {
      name: "Maaz",
      role: "A2 B1 Trainer",
      image: "/maaz.jpg",
      specialty: "A2 B1 Expert",
      bio: "French language professional with a Bachelor’s degree in French, specializing in guiding A1–A2 learners toward achieving B1 level. Focused on building strong foundations in grammar and comprehension through a structured approach.",
      rating: 4.7,
      students: 125,
      courses: ["A2-B1 Comprehensive"],
      highlighted: false
    },
    {
      name: "Humam",
      role: "TCF Trainer",
      image: "/humam.jpeg",
      specialty: "Exam Preparation",
      bio: "B1–B2 French trainer with a Bachelor’s and Master’s degree in French, backed by 6+ years experience of French domain and3+ years of teaching experience. Specializes in preparing students for DELF and TEF exams with a structured, exam-focused approach",
      rating: 4.7,
      students: 80,
      courses: ["TCF TEF"],
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600">Learn from native speakers and certified professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, idx) => (
            <div 
              key={idx} 
              className={`card overflow-hidden transition duration-300 hover:shadow-2xl ${
                instructor.highlighted ? 'ring-2 ring-secondary md:col-span-2' : ''
              }`}
            >
              {/* Avatar placeholder */}
            {/* Instructor Photo */}
            <div className="h-48 w-full mb-4 overflow-hidden rounded-t-lg">
            <img 
                src={instructor.image} 
                alt={instructor.name} 
                className="w-full h-full object-cover" 
            />
            </div>

              <h3 className="text-xl font-bold text-primary mb-1">{instructor.name}</h3>
              <p className="text-secondary font-semibold text-sm mb-2">{instructor.role}</p>
              <p className="text-xs text-gray-500 mb-3">Specialty: {instructor.specialty}</p>

              <p className="text-sm text-gray-600 mb-4">{instructor.bio}</p>

              <div className="grid grid-cols-3 gap-3 py-3 border-t border-gray-200 mb-4">
                <div className="text-center">
                  <div className="font-bold text-primary">{instructor.rating}⭐</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-primary">{instructor.students}+</div>
                  <div className="text-xs text-gray-500">Students</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-secondary">{instructor.courses.length}</div>
                  <div className="text-xs text-gray-500">Courses</div>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-xs text-gray-600 font-semibold mb-2">Teaches:</p>
                <div className="flex flex-wrap gap-2">
                  {instructor.courses.map((course, cidx) => (
                    <span key={cidx} className="text-xs bg-blue-100 text-primary px-2 py-1 rounded-full">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            {/*} <button className="w-full btn-primary text-sm py-2">
                View Profile
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
