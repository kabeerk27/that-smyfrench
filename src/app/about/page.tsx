'use client';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About That's My French</h1>
          <p className="text-xl text-blue-100">Empowering Students to Master French & Achieve Their Goals</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                At That's My French, we believe that learning French should be engaging, effective, and inspiring. Our mission is to help every student achieve their language learning goals through exceptional teaching and comprehensive support.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Whether you're preparing for TEFF, ICT, CLB exams, or simply want to become fluent in French, we provide the expert guidance and proven methods to help you succeed.
              </p>
              <p className="text-lg text-gray-700">
                With over 2,000 successful students and a 95% pass rate, we're committed to your success every step of the way.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-blue-800 text-white p-8 rounded-lg text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-4">Excellence in Education</h3>
              <ul className="text-left space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> 2,000+ Students Trained
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> 95% Success Rate
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Certified Instructors
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> 5-Star Ratings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💡", title: "Innovation", desc: "Staying ahead with latest teaching methods" },
              { icon: "❤️", title: "Passion", desc: "Genuinely invested in student success" },
              { icon: "🎯", title: "Excellence", desc: "Striving for the highest standards" },
              { icon: "🤝", title: "Community", desc: "Building supportive learning environment" },
            ].map((value, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-5xl mb-3">{value.icon}</div>
                <h3 className="font-bold text-lg text-primary mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Saif Arish Khan",
                role: "Founder & Lead Instructor",
                bio: "5+ years of French teaching experience. B.A. in French, M.Ed. in Education.",
                background: "Senior educator with proven track record"
              },
              {
                name: "Michel Dubois",
                role: "Senior Instructor - TEFF Specialist",
                bio: "Native French speaker. 12+ years in language instruction. Specialized in exam prep.",
                background: "Expert in TEFF and professional French"
              },
              {
                name: "Emma Toulouse",
                role: "Conversational Fluency Coach",
                bio: "Certified language coach. Focus on pronunciation and real-world communication.",
                background: "Specializing in conversational excellence"
              },
            ].map((member, idx) => (
              <div key={idx} className="card hover:shadow-2xl">
                <div className="text-6xl text-center mb-4">👨‍🏫</div>
                <h3 className="text-xl font-bold text-primary text-center mb-2">{member.name}</h3>
                <p className="text-sm text-secondary font-semibold text-center mb-3">{member.role}</p>
                <p className="text-gray-700 mb-3">{member.bio}</p>
                <p className="text-sm text-gray-600 italic">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">Why Students Choose Us</h2>
          <div className="space-y-6">
            {[
              {
                title: "Proven Results",
                desc: "95% pass rate with documented student success across all exam types (TEFF, ICT, CLB)"
              },
              {
                title: "Expert Instructors",
                desc: "Native speakers and certified professionals with 10+ years of teaching experience"
              },
              {
                title: "Comprehensive Curriculum",
                desc: "Carefully designed courses covering all essential skills for exam success"
              },
              {
                title: "Personalized Approach",
                desc: "Small batches ensure individual attention and customized learning plans"
              },
              {
                title: "Flexible Learning",
                desc: "Multiple batch timings, online and offline options to fit your schedule"
              },
              {
                title: "Lifetime Support",
                desc: "Access to resources and community support even after course completion"
              },
            ].map((reason, idx) => (
              <div key={idx} className="card flex items-start gap-4">
                <div className="text-3xl text-secondary">✓</div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">{reason.title}</h3>
                  <p className="text-gray-700">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions? We'd Love to Help!</h2>
          <p className="text-xl text-blue-100 mb-8">Get in touch with our team for personalized guidance</p>
          <a href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  );
}
