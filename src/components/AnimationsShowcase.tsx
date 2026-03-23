'use client';

import React from 'react';
import {
  TrophyIcon,
  ChartIcon,
  StarIcon,
  GraduationIcon,
  GlobeIcon,
  TargetIcon,
  BookIcon,
  RocketIcon,
  InstructorIcon,
  ChatIcon,
  MobileIcon,
  AwardIcon,
  FranceIcon,
  CheckIcon,
  LightbulbIcon,
  ClockIcon
} from './AnimatedIconsLibrary';

import {
  AnimationWrapper,
  StaggerContainer,
  FloatingElement,
  GradientText,
  AnimationPresets
} from './AnimationUtilities';

import {
  FloatingBubbles,
  PulsatingOrbs,
  AnimatedGradientBackground
} from './FloatingParticles';

/**
 * AnimationsShowcase - Displays all available animations and icons
 * Perfect for demonstrating the new creative features
 */
export default function AnimationsShowcase() {
  return (
    <div className="w-full">
      {/* Hero Section with Animations */}
      <section className="relative bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white py-32 overflow-hidden">
        <PulsatingOrbs className="opacity-50" />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <AnimationWrapper animation="fadeInUp" duration="normal">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <GradientText animate>
                  Professional Animations & Icons
                </GradientText>
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Explore the new collection of smooth animations, professional SVG icons, 
                and engaging visual effects that make your website stand out.
              </p>
            </div>
          </AnimationWrapper>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimationWrapper animation="slideInLeft" delay={0.2}>
              <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg border border-white border-opacity-20 text-center">
                <FranceIcon size="xl" animated className="mx-auto mb-4" />
                <h3 className="font-bold text-lg">French Pride</h3>
                <p className="text-blue-100 text-sm mt-2">Authentically designed for French language learning</p>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="slideInRight" delay={0.3}>
              <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg border border-white border-opacity-20 text-center">
                <RocketIcon size="xl" animated className="mx-auto mb-4" />
                <h3 className="font-bold text-lg">Fast & Smooth</h3>
                <p className="text-blue-100 text-sm mt-2">60FPS animations for the smoothest experience</p>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="slideInLeft" delay={0.4}>
              <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg border border-white border-opacity-20 text-center">
                <StarIcon size="xl" animated className="mx-auto mb-4" />
                <h3 className="font-bold text-lg">Professional Quality</h3>
                <p className="text-blue-100 text-sm mt-2">Premium design standards throughout</p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Icons Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimationWrapper animation="fadeInUp">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Professional Icon Library
            </h2>
          </AnimationWrapper>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <StaggerContainer animation="fadeInUp" staggerDelay={0.05}>
              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <TrophyIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Trophy</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <ChartIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Chart</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <StarIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Star</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <GraduationIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Graduation</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <GlobeIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Globe</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <TargetIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Target</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <BookIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Book</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <RocketIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Rocket</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <InstructorIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Instructor</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <ChatIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Chat</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <MobileIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Mobile</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <AwardIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Award</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <ClockIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Clock</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <LightbulbIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Lightbulb</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <CheckIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">Check</p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <FranceIcon size="xl" className="mx-auto" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">France</p>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Animation Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <AnimationWrapper animation="fadeInUp">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Animation Effects
            </h2>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Float', class: 'animate-float', desc: 'Gentle upward motion' },
              { name: 'Scale Pulse', class: 'animate-scale-pulse', desc: 'Pulsing size effect' },
              { name: 'Wave', class: 'animate-wave', desc: 'Smooth wave motion' },
              { name: 'Bounce', class: 'animate-bounce-animation', desc: 'Bouncing effect' },
              { name: 'Rotate', class: 'animate-rotate', desc: '360° rotation' },
              { name: 'Glow', class: 'animate-glow-badge', desc: 'Glowing light effect' }
            ].map((anim, idx) => (
              <AnimationWrapper key={idx} animation="zoomIn" delay={idx * 0.1}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-secondary to-amber-300 rounded-lg ${anim.class}`} />
                  <h3 className="text-xl font-bold text-primary text-center mb-2">{anim.name}</h3>
                  <p className="text-gray-600 text-center text-sm">{anim.desc}</p>
                  <p className="text-xs text-gray-500 text-center mt-3 font-mono bg-gray-50 p-2 rounded">
                    {anim.class}
                  </p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Effects */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-blue-800 text-white overflow-hidden">
        <FloatingBubbles count={8} />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <AnimationWrapper animation="slideDown">
            <h2 className="text-4xl font-bold text-center mb-6">
              Ready to Transform Your Learning Experience?
            </h2>
          </AnimationWrapper>
          
          <AnimationWrapper animation="slideUp" delay={0.2}>
            <p className="text-xl text-blue-100 text-center mb-8 max-w-2xl mx-auto">
              These professional animations and icons are now integrated throughout your website,
              creating a modern and engaging experience for students.
            </p>
          </AnimationWrapper>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <AnimationWrapper animation="bounceIn" delay={0.4}>
              <a href="/courses" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block">
                Explore Courses
              </a>
            </AnimationWrapper>
            
            <AnimationWrapper animation="bounceIn" delay={0.5}>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300 inline-block">
                Get in Touch
              </a>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Integration Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimationWrapper animation="fadeInUp">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              How to Use
            </h2>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimationWrapper animation="slideInLeft" delay={0.1}>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">
                  <BookIcon size="lg" className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Use SVG Icons</h3>
                <p className="text-gray-700 text-sm">
                  Replace all emojis with professional SVG icons from AnimatedIconsLibrary component.
                </p>
                <code className="text-xs bg-white p-2 mt-3 rounded block text-gray-600">
                  &lt;TrophyIcon size="lg" /&gt;
                </code>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slideInRight" delay={0.2}>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">
                  <RocketIcon size="lg" className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Add Animations</h3>
                <p className="text-gray-700 text-sm">
                  Use AnimationWrapper component to add smooth entrance animations to sections.
                </p>
                <code className="text-xs bg-white p-2 mt-3 rounded block text-gray-600">
                  animation="fadeInUp"
                </code>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slideInLeft" delay={0.3}>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">
                  <StarIcon size="lg" className="text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Add Effects</h3>
                <p className="text-gray-700 text-sm">
                  Use FloatingParticles, PulsatingOrbs for professional background effects.
                </p>
                <code className="text-xs bg-white p-2 mt-3 rounded block text-gray-600">
                  &lt;PulsatingOrbs /&gt;
                </code>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}
