'use client';

import React, { ReactNode } from 'react';

interface AnimationWrapperProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'bounceIn' | 'zoomIn' | 'float' | 'scalePulse' | 'wave' | 'slideDown' | 'slideUp' | 'pulseShadow' | 'glowBadge';
  duration?: 'slow' | 'normal' | 'fast';
  delay?: number;
  className?: string;
}

/**
 * AnimationWrapper - Easily apply animations to any element
 * Usage: <AnimationWrapper animation="fadeInUp"><YourComponent /></AnimationWrapper>
 */
export const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  animation = 'fadeInUp',
  duration = 'normal',
  delay = 0,
  className = ''
}) => {
  const durationClass = {
    slow: 'animation-duration-700',
    normal: 'animation-duration-600',
    fast: 'animation-duration-300'
  }[duration];

  const delayClass = delay > 0 ? `animation-delay-${delay * 100}` : '';
  const animationClass = `animate-${animation.replace(/([A-Z])/g, '-$1').toLowerCase()}`;

  return (
    <div className={`${animationClass} ${delayClass} ${durationClass} ${className}`}>
      {children}
    </div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'zoomIn';
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

/**
 * StaggerContainer - Automatically stagger animations for children
 * Usage: <StaggerContainer><Item /><Item /><Item /></StaggerContainer>
 */
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  staggerDelay = 0.1,
  className = ''
}) => {
  const childArray = React.Children.toArray(children);

  return (
    <div className={className}>
      {childArray.map((child, idx) => (
        <AnimationWrapper
          key={idx}
          animation={animation}
          delay={delay + idx * staggerDelay}
        >
          {child}
        </AnimationWrapper>
      ))}
    </div>
  );
};

interface FloatingElementProps {
  children: ReactNode;
  intensity?: 'light' | 'medium' | 'heavy';
  duration?: number;
  className?: string;
}

/**
 * FloatingElement - Creates a floating/hovering animation effect
 */
export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  intensity = 'medium',
  className = ''
}) => {
  return (
    <div className={`animate-float ${className}`}>
      {children}
    </div>
  );
};

interface PulseElementProps {
  children: ReactNode;
  intensity?: 'subtle' | 'normal' | 'heavy';
  className?: string;
}

/**
 * PulseElement - Creates a pulsing glow effect
 */
export const PulseElement: React.FC<PulseElementProps> = ({
  children,
  intensity = 'normal',
  className = ''
}) => {
  const intensityClass = {
    subtle: 'animate-pulse-shadow opacity-75',
    normal: 'animate-pulse-shadow',
    heavy: 'animate-pulse-shadow animate-scale-pulse'
  }[intensity];

  return (
    <div className={`${intensityClass} ${className}`}>
      {children}
    </div>
  );
};

interface ScaleOnHoverProps {
  children: ReactNode;
  scale?: number;
  className?: string;
}

/**
 * ScaleOnHover - Scales element on hover with smooth animation
 */
export const ScaleOnHover: React.FC<ScaleOnHoverProps> = ({
  children,
  scale = 1.05,
  className = ''
}) => {
  return (
    <div 
      className={`transition-transform duration-300 ease-out hover:scale-[${scale}] ${className}`}
    >
      {children}
    </div>
  );
};

interface GradientTextProps {
  children: ReactNode;
  animate?: boolean;
  className?: string;
}

/**
 * GradientText - Animated gradient text effect
 */
export const GradientText: React.FC<GradientTextProps> = ({
  children,
  animate = true,
  className = ''
}) => {
  return (
    <span 
      className={`bg-gradient-to-r from-primary via-secondary to-blue-600 bg-clip-text text-transparent ${animate ? 'animate-gradient-shift' : ''} ${className}`}
      style={animate ? { backgroundSize: '200% 100%' } : {}}
    >
      {children}
    </span>
  );
};

interface ShimmerProps {
  children: ReactNode;
  className?: string;
}

/**
 * ShimmerEffect - Loading/shimmer effect animation
 */
export const ShimmerEffect: React.FC<ShimmerProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`animate-shimmer ${className}`}>
      {children}
    </div>
  );
};

/**
 * Animation Presets - Predefined animation combinations
 */
export const AnimationPresets = {
  // Card animations
  cardEntrance: 'fadeInUp',
  cardHover: 'scale-100 hover:scale-105 transition-transform duration-300',
  
  // Icon animations  
  iconFloat: 'animate-float',
  iconPulse: 'animate-scale-pulse',
  iconRotate: 'animate-rotate',
  
  // Text animations
  titleEntrance: 'fadeInUp',
  subtitleEntrance: 'slideInUp',
  
  // Button animations
  buttonHover: 'hover:scale-105 hover:shadow-lg transition-all duration-300',
  buttonPress: 'active:scale-95 transition-transform duration-150',
  
  // Badge animations
  badgeAnimation: 'animate-glow-badge'
};

/**
 * useAnimation Hook - Get animation class and delay
 */
export const useAnimation = (
  animationName: string,
  delay: number = 0,
  duration: 'fast' | 'normal' | 'slow' = 'normal'
) => {
  const durationMap = {
    fast: '300ms',
    normal: '600ms',
    slow: '1000ms'
  };

  return {
    className: `animate-${animationName}`,
    style: {
      animationDelay: `${delay}ms`,
      animationDuration: durationMap[duration]
    }
  };
};

// Export all for convenience
export default {
  AnimationWrapper,
  StaggerContainer,
  FloatingElement,
  PulseElement,
  ScaleOnHover,
  GradientText,
  ShimmerEffect,
  AnimationPresets,
  useAnimation
};
