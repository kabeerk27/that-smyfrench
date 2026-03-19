'use client';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Master French with Expert Coaching
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Achieve your TEFF, ICT & CLB 7+ goals. Join 2,000+ successful students who transformed their French skills with us.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="/courses" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Explore Courses
            </a>
            <a href="/contact" className="btn-secondary bg-secondary text-primary hover:bg-amber-400">
              Get Started Today
            </a>
          </div>
          <div className="mt-10 pt-10 border-t border-blue-300 grid grid-cols-3 gap-4">
            <div>
              <p className="text-3xl font-bold">2,000+</p>
              <p className="text-blue-100">Students</p>
            </div>
            <div>
              <p className="text-3xl font-bold">95%</p>
              <p className="text-blue-100">Pass Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold">5⭐</p>
              <p className="text-blue-100">Rating</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">🇫🇷</div>
            <h2 className="text-3xl font-bold mb-4">Learn French the Right Way</h2>
            <p className="text-blue-100">With proven methods and experienced instructors, success is guaranteed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
