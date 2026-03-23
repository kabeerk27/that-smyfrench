'use client';

import { MobileIcon, InstructorIcon, ChartIcon } from './AnimatedIconsLibrary';
import { FloatingBubbles } from './FloatingParticles';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary via-yellow-300 to-secondary relative overflow-hidden">
      <FloatingBubbles />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ready to Master French?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join 2,000+ successful students and start your French journey today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/contact" 
              className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition transform hover:scale-105"
            >
              Start Free Trial →
            </a>
            <a 
              href="/courses" 
              className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              View Courses
            </a>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: MobileIcon, title: "Flexible Schedule", desc: "Learn at your own pace" },
            { icon: InstructorIcon, title: "Expert Teachers", desc: "Native speakers & certified" },
            { icon: ChartIcon, title: "95% Success", desc: "Industry-leading results" }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white bg-opacity-80 p-6 rounded-lg text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <benefit.icon size="lg" animated={true} />
              </div>
              <h3 className="font-bold text-primary mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="bg-white bg-opacity-90 p-8 rounded-lg text-center">
          <p className="text-sm font-semibold text-primary mb-2">100% SATISFACTION GUARANTEED</p>
          <p className="text-gray-700">
            Not satisfied with our courses? Get a full refund within 14 days, no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
