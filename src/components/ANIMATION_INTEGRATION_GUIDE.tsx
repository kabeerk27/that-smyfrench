'use client';

/**
 * ANIMATION & ICONS INTEGRATION GUIDE
 * ====================================
 * 
 * This file provides examples and documentation for using the new animations
 * and SVG icons throughout the website.
 * 
 * New Components Available:
 * 1. AnimatedIconsLibrary.tsx - Professional SVG icons
 * 2. AnimationUtilities.tsx - Reusable animation components
 * 3. FloatingParticles.tsx - Background particle effects
 * 4. globals.css - Enhanced with 15+ new animations
 */

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
  getIcon
} from './AnimatedIconsLibrary';

import {
  AnimationWrapper,
  StaggerContainer,
  FloatingElement,
  PulseElement,
  GradientText,
  AnimationPresets
} from './AnimationUtilities';

import {
  FloatingParticles,
  FloatingBubbles,
  PulsatingOrbs,
  AnimatedGradientBackground
} from './FloatingParticles';

/**
 * USAGE EXAMPLES
 * ==============
 */

// Example 1: Using SVG Icons (Instead of Emojis)
// ================================================
// Before:
// <div className="text-4xl mb-3">🏅</div>
//
// After:
// <TrophyIcon size="lg" animated={true} />

export const IconReplacementExample = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Trust Badge Icons */}
      <div className="text-center">
        <TrophyIcon size="lg" animated />
        <p className="mt-2">Certified Instructors</p>
      </div>
      
      <div className="text-center">
        <ChartIcon size="lg" animated />
        <p className="mt-2">95% Success Rate</p>
      </div>
      
      <div className="text-center">
        <StarIcon size="lg" animated />
        <p className="mt-2">5-Star Rated</p>
      </div>
      
      {/* Add more icons as needed */}
    </div>
  );
};

// Example 2: Using AnimationWrapper for sections
// ================================================
export const AnimationWrapperExample = () => {
  return (
    <AnimationWrapper animation="fadeInUp" duration="normal" delay={0}>
      <div className="p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold">Animated Section</h2>
        <p>This section fades in from bottom on page load</p>
      </div>
    </AnimationWrapper>
  );
};

// Example 3: Using StaggerContainer for multiple items
// ======================================================
export const StaggerExample = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  
  return (
    <StaggerContainer 
      animation="fadeInUp" 
      staggerDelay={0.15}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {items.map((item, idx) => (
        <div key={idx} className="p-4 bg-white rounded-lg shadow">
          {item}
        </div>
      ))}
    </StaggerContainer>
  );
};

// Example 4: Floating Elements
// =============================
export const FloatingElementExample = () => {
  return (
    <div className="relative h-40 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden">
      <FloatingElement>
        <div className="absolute inset-0 flex items-center justify-center">
          <BookIcon size="2xl" animated />
        </div>
      </FloatingElement>
    </div>
  );
};

// Example 5: Using Background Effects
// =====================================
export const BackgroundEffectsExample = () => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-primary to-blue-900 rounded-lg overflow-hidden">
      {/* Floating bubbles background */}
      <FloatingBubbles count={5} />
      
      {/* Pulsating orbs */}
      <PulsatingOrbs />
      
      {/* Content on top */}
      <div className="relative z-10 p-8 text-white">
        <h2 className="text-4xl font-bold mb-4">
          <GradientText animate>Impressive Animated Backgrounds</GradientText>
        </h2>
        <p>Multiple effects combined for professional appearance</p>
      </div>
    </div>
  );
};

// Example 6: Icon Color Variants
// ================================
export const IconColorVariants = () => {
  return (
    <div className="grid grid-cols-6 gap-4 p-6">
      {/* Default (primary color) */}
      <div className="flex justify-center">
        <TrophyIcon size="lg" />
      </div>
      
      {/* Custom color */}
      <div className="flex justify-center text-secondary">
        <TrophyIcon size="lg" />
      </div>
      
      {/* Success color */}
      <div className="flex justify-center text-green-500">
        <CheckIcon size="lg" />
      </div>
      
      {/* Warning color */}
      <div className="flex justify-center text-yellow-500">
        <StarIcon size="lg" />
      </div>
      
      {/* Info color */}
      <div className="flex justify-center text-blue-400">
        <BookIcon size="lg" />
      </div>
      
      {/* Custom color */}
      <div className="flex justify-center text-purple-500">
        <GraduationIcon size="lg" />
      </div>
    </div>
  );
};

/**
 * INTEGRATION CHECKLIST
 * ====================
 * 
 * To integrate these animations into your site:
 * 
 * 1. ICONS: Replace all emoji with SVG icons
 *    - TrustBadges.tsx: use Trophy, Chart, Star, Graduation, Globe, Target icons
 *    - HeroSection.tsx: use Sparkle, Book, Rocket, France icons
 *    - FeaturedCourses.tsx: use Book, Target, Chat icons
 *    - WhyChooseUs.tsx: use Instructor, Chart, Graduation, Chat, Mobile, Award icons
 *    - EnhancedFAQ.tsx: use Rocket, Book, Clock, Trophy icons
 * 
 * 2. ANIMATIONS: Enhance card animations
 *    - Wrap cards with <StaggerContainer>
 *    - Use animation="fadeInUp" for entrance
 *    - Add animation delays with staggerDelay prop
 * 
 * 3. BACKGROUNDS: Add floating effects to sections
 *    - Add <PulsatingOrbs /> to hero sections
 *    - Add <FloatingBubbles /> to call-to-action sections
 *    - Use <AnimatedGradientBackground /> for headers
 * 
 * 4. CSS CLASSES: Use new animation classes in Tailwind
 *    - animate-float: floating effect
 *    - animate-scale-pulse: pulsing scale
 *    - animate-wave: wave motion
 *    - animate-bounce-animation: bouncing effect
 *    - animate-rotate: rotating effect
 *    - And more!
 * 
 * 5. HOVER EFFECTS: Enhanced interactivity
 *    - Add hover:scale-105 to images/cards
 *    - Add hover:shadow-lg for depth
 *    - Use transition-all for smooth effects
 */

/**
 * AVAILABLE ANIMATIONS
 * ====================
 * 
 * Entrance Animations:
 * - fadeInUp: Fade in while moving up
 * - slideInLeft: Slide in from left
 * - slideInRight: Slide in from right
 * - zoomIn: Scale up while appearing
 * - slideDown: Slide in from top
 * - slideUp: Slide in from bottom
 * 
 * Continuous Animations:
 * - float: Gentle floating motion
 * - scalePulse: Pulsing scale effect
 * - wave: Wave-like motion
 * - bounceAnimation: Bouncing motion
 * - rotate: 360° rotation
 * - glowBadge: Glowing badge effect
 * - pulseShadow: Pulsing shadow
 * 
 * Icon Animations:
 * - Each icon has built-in animation
 * - Control with animated={true/false} prop
 * - Size options: sm, md, lg, xl, 2xl
 */

/**
 * ICON MAPPING
 * ============
 * 
 * Emoji → Icon Component
 * 
 * 🏅 → <TrophyIcon />           (Certified Instructors)
 * 📊 → <ChartIcon />            (Statistics, Success Rate)
 * ⭐ → <StarIcon />             (Rating, Rating Stars)
 * 🎓 → <GraduationIcon />       (Exam Prep, Education)
 * 🌍 → <GlobeIcon />            (Global Recognition, Global)
 * 🎯 → <TargetIcon />           (Quality Guaranteed, Goals)
 * 📚 → <BookIcon />             (Courses, Learning)
 * 🚀 → <RocketIcon />           (Get Started, Launch)
 * 👨‍🏫 → <InstructorIcon />     (Expert Instructors, Teachers)
 * 💬 → <ChatIcon />             (Interactive Learning, Communication)
 * 📱 → <MobileIcon />           (Flexible Schedule, Mobile)
 * 🏆 → <AwardIcon />            (Lifetime Support, Awards)
 * ✨ → <SparkleIcon />          (Trusted, premium)
 * 🇫🇷 → <FranceIcon />         (Brand, French)
 * ✅ → <CheckIcon />            (Verified, Success)
 */

/**
 * ANIMATION CLASSES
 * =================
 * 
 * Direct CSS class usage in components:
 * 
 * <div className="animate-fadeInUp">Content</div>
 * <div className="animate-float">Icon</div>
 * <div className="animate-scale-pulse">Card</div>
 * <div className="animate-bounce-animation">Button</div>
 * <div className="animate-glow-badge">Badge</div>
 * 
 * With delays:
 * <div className="animate-fadeInUp animation-delay-100">Item 1</div>
 * <div className="animate-fadeInUp animation-delay-200">Item 2</div>
 * <div className="animate-fadeInUp animation-delay-300">Item 3</div>
 */

/**
 * COMPONENT USAGE SUMMARY
 * =======================
 */

// 1. For Icons
// Import: import { TrophyIcon, StarIcon, ... } from './AnimatedIconsLibrary'
// Usage: <TrophyIcon size="lg" animated={true} />

// 2. For Animation Wrappers
// Import: import { AnimationWrapper, StaggerContainer } from './AnimationUtilities'
// Usage: 
// <AnimationWrapper animation="fadeInUp">Content</AnimationWrapper>
// <StaggerContainer staggerDelay={0.1}>Items...</StaggerContainer>

// 3. For Particle Effects
// Import: import { FloatingParticles, PulsatingOrbs } from './FloatingParticles'
// Usage:
// <PulsatingOrbs className="absolute inset-0" />
// <FloatingBubbles count={6} />

export default {
  iconComponents: {
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
    getIcon
  },
  animationComponents: {
    AnimationWrapper,
    StaggerContainer,
    FloatingElement,
    PulseElement,
    GradientText,
    AnimationPresets
  },
  effectComponents: {
    FloatingParticles,
    FloatingBubbles,
    PulsatingOrbs,
    AnimatedGradientBackground
  }
};
