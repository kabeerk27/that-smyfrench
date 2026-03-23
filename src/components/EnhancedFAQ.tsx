'use client';

import { useState } from 'react';
import { RocketIcon, BookIcon, ClockIcon, WinnersIcon } from './AnimatedIconsLibrary';

export default function EnhancedFAQ() {
  const [active, setActive] = useState<number>(0);

  const faqs = [
    {
      category: "Getting Started",
      icon: RocketIcon,
      questions: [
        {
          q: "What if I have no prior French experience?",
          a: "Perfect! We have courses for all levels, from complete beginners. Our instructors are skilled at meeting each student at their level with customized learning paths."
        },
        {
          q: "How do I know my current French level?",
          a: "We offer a free online placement test that assesses your reading, writing, listening, and speaking abilities. Takes about 15-20 minutes."
        }
      ]
    },
    {
      category: "Courses",
      icon: BookIcon,
      questions: [
        {
          q: "What courses are available?",
          a: "We offer TEF/TCF Preparation, DELF/DALF Mastery, Conversational French, and Business French. Each is designed for different proficiency levels and goals."
        },
        {
          q: "Can I switch courses after starting?",
          a: "Yes, absolutely! We understand learning needs change. You can switch to a different course or level anytime within the first 2 weeks."
        }
      ]
    },
    {
      category: "Schedule & Flexibility",
      icon: ClockIcon,
      questions: [
        {
          q: "What if I can't attend a live class?",
          a: "All classes are recorded and available in your student portal. You can watch at your own pace, though we recommend not falling behind."
        },
        {
          q: "Can I pause my course?",
          a: "Yes! Life happens. You can pause your course for up to 30 days without losing access to materials or your spot in class."
        }
      ]
    },
    {
      category: "Exams & Certification",
      icon: WinnersIcon,
      questions: [
        {
          q: "Is your certification recognized?",
          a: "We prepare you for official exams recognized internationally (TEF, TCF, DELF, DALF). Your exam results are from official testing bodies."
        },
        {
          q: "Do you guarantee I'll pass?",
          a: "Our 95% pass rate shows our teaching effectiveness. While we can't guarantee results (depends on your effort), we have a strong track record of success."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Get answers to common questions</p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {faqs.map((category, catIdx) => (
            <div key={catIdx} className="card">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-secondary">
                <category.icon size="lg" animated={true} />
                <h3 className="text-xl font-bold text-primary">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((item, qIdx) => (
                  <div key={qIdx} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <button
                      onClick={() => setActive(catIdx * 10 + qIdx)}
                      className="w-full text-left py-2 font-semibold text-primary hover:text-secondary transition flex justify-between items-center"
                    >
                      <span>{item.q}</span>
                      <span className="text-xl">
                        {active === catIdx * 10 + qIdx ? '−' : '+'}
                      </span>
                    </button>
                    
                    {active === catIdx * 10 + qIdx && (
                      <div className="text-gray-600 text-sm mt-2 pl-2 border-l-2 border-secondary">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {faqs.map((category, catIdx) => (
            <div key={catIdx} className="card">
              <div className="flex items-center gap-2 mb-4">
                <category.icon size="lg" animated={true} />
                <h3 className="font-bold text-primary">{category.category}</h3>
              </div>
              
              <div className="space-y-3">
                {category.questions.map((item, qIdx) => (
                  <div key={qIdx} className="border border-gray-200 rounded p-3">
                    <button
                      onClick={() => setActive(catIdx * 10 + qIdx)}
                      className="w-full text-left font-semibold text-sm text-primary hover:text-secondary transition flex justify-between items-center"
                    >
                      {item.q}
                      <span>{active === catIdx * 10 + qIdx ? '−' : '+'}</span>
                    </button>
                    
                    {active === catIdx * 10 + qIdx && (
                      <div className="text-gray-600 text-xs mt-2 pt-2 border-t border-gray-200">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 bg-gradient-to-r from-primary to-blue-800 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
          <p className="mb-6">Our team is here to help! Reach out anytime.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Contact Us
            </a>
            <a href="mailto:thatismyfrench@gmail.com" className="btn-secondary bg-secondary text-primary hover:bg-amber-400">
              Email Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
