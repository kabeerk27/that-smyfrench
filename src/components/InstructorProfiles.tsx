'use client';

export default function InstructorProfiles() {
  const instructors = [
    {
      name: "Saif Arish Khan",
      role: "Founder & Lead Instructor",
      image: "/arish.jpg", 
      specialty: "TEF/TCF Specialist",
      bio: "5+ years of teaching experience. B.A. in French, M.Ed. in Education. Passionate about making French accessible to everyone.",
      rating: 4.9,
      students: 850,
      courses: ["TEF/TCF Intensive", "Advanced Pronunciation"],
      highlighted: true
    },
    {
      name: "Divya Mahey",
      role: "Exam Preparation Coach",
      image: "/divya.jpg",
      specialty: "TCF Expert",
      bio: "Certified language coach with focus on exam preparation. Years helping students achieve their certification goals.",
      rating: 5.0,
      students: 510,
      courses: ["DELF/DALF", "Grammar Mastery"],
      highlighted: false
    },
    {
      name: "Babita Chaudhary",
      role: "B1 B2 Trainer",
      image: "/Babita.jpeg",
      specialty: "Cultural Immersion",
      bio: "Expert in French B1 and B2 levels. Makes learning fun and engaging for all levels.",
      rating: 4.9,
      students: 430,
      courses: ["Conversational French", "Cultural French"],
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
