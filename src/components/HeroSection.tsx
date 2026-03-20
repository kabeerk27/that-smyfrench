'use client';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white py-20 md:py-40 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-secondary opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 relative z-10">
        <div className="md:w-1/2 animate-fadeInUp">
          <div className="inline-block bg-secondary bg-opacity-20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-secondary border-opacity-30">
            ✨ Trusted by 2,000+ Students Worldwide
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
            Master French with Expert Coaching
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 font-light">
            Achieve your TEF/TCF & DELF/DALF goals with proven methods. 95% student success rate. Join thousands who transformed their French skills.
          </p>
          
          <div className="flex gap-4 flex-wrap mb-8">
            <a href="/courses" className="btn-primary bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              📚 Explore Courses
            </a>
            <a href="/contact" className="btn-secondary bg-secondary text-primary hover:bg-amber-400 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              🚀 Get Started Today
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-6">
            <div className="group">
              <p className="text-4xl font-bold text-secondary group-hover:text-amber-300 transition">2K+</p>
              <p className="text-blue-100 text-sm mt-1">Active Students</p>
            </div>
            <div className="group">
              <p className="text-4xl font-bold text-secondary group-hover:text-amber-300 transition">95%</p>
              <p className="text-blue-100 text-sm mt-1">Pass Rate</p>
            </div>
            <div className="group">
              <p className="text-4xl font-bold text-secondary group-hover:text-amber-300 transition">4.9⭐</p>
              <p className="text-blue-100 text-sm mt-1">Avg Rating</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 animate-slideInRight">
          <div className="relative">
            {/* Gradient Box with Glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-amber-300 rounded-2xl blur-2xl opacity-20"></div>
            
            <div className="relative bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-10 border border-white border-opacity-20 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500">
              <div className="text-7xl mb-6 text-center animate-bounce-in">🇫🇷</div>
              
              <h2 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-300">
                Transform Your French
              </h2>
              
              <p className="text-blue-100 text-center mb-6 font-light">
                Expert instructors • Proven curriculum • Flexible schedules • Lifetime access
              </p>

              {/* Benefits Grid */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-blue-100">Personalized learning paths</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-blue-100">Interactive practice sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-blue-100">Mock exams & assessments</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-blue-100">100% success guarantee</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-300 border-opacity-30">
                <p className="text-center text-secondary text-sm font-semibold">🎓 Certified & Exam-Ready Results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
