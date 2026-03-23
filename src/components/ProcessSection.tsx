'use client';

import { useState } from 'react';
import { CheckIcon, TargetIcon, BookIcon, ChartIcon, AwardIcon, ClockIcon } from './AnimatedIconsLibrary';

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Assess Your Level",
      description: "Take our free placement test to understand your current French proficiency and learning path.",
      icon: CheckIcon,
      duration: "15 mins"
    },
    {
      number: "02", 
      title: "Get Personalized Plan",
      description: "Our experts create a custom learning plan tailored to your goals and pace.",
      icon: TargetIcon,
      duration: "1 day"
    },
    {
      number: "03",
      title: "Start Learning",
      description: "Join interactive classes with expert instructors and supportive peers.",
      icon: BookIcon,
      duration: "Immediate"
    },
    {
      number: "04",
      title: "Track Progress",
      description: "Monitor your improvement with regular assessments and personalized feedback.",
      icon: ChartIcon,
      duration: "Ongoing"
    },
    {
      number: "05",
      title: "Achieve Goals",
      description: "Pass your exams with confidence and join thousands of successful students.",
      icon: AwardIcon,
      duration: "Varies"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Your Path to French Mastery</h2>
          <p className="text-xl text-gray-600">Simple, proven steps to achieve your goals</p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="grid grid-cols-5 gap-4 mb-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="card text-center hover:shadow-xl transition duration-300 h-full">
                  <div className="flex justify-center mb-3">
                    <step.icon size="xl" animated={true} />
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-2">{step.number}</div>
                  <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded flex items-center justify-center gap-1">
                    <ClockIcon size="sm" animated={false} /> {step.duration}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-2 transform translate-x-1/2">
                    <div className="text-3xl text-secondary">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <step.icon size="lg" animated={true} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary mb-1">Step {step.number}: {step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                  <span className="text-xs text-secondary mt-2 inline-flex items-center gap-1">
                    <ClockIcon size="sm" animated={false} /> {step.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
