'use client';

import React, { useEffect, useRef } from 'react';

interface FloatingParticlesProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
  particleOpacity?: number;
  speed?: 'slow' | 'normal' | 'fast';
  size?: 'small' | 'medium' | 'large';
}

/**
 * FloatingParticles - Professional animated particle background
 * Creates a smooth, floating particle effect for backgrounds
 */
export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  className = '',
  particleCount = 50,
  particleColor = 'rgb(251, 191, 36)', // Yellow/secondary color
  particleOpacity = 0.1,
  speed = 'normal',
  size = 'small'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Particle configuration
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      opacity: number;
    }> = [];

    // Size configuration
    const sizeMap = {
      small: { min: 2, max: 5 },
      medium: { min: 5, max: 10 },
      large: { min: 10, max: 15 }
    };

    // Speed configuration (lower = slower)
    const speedMap = {
      slow: 0.3,
      normal: 0.8,
      fast: 1.5
    };

    const selectedSize = sizeMap[size];
    const selectedSpeed = speedMap[speed];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * (selectedSize.max - selectedSize.min) + selectedSize.min,
        vx: (Math.random() - 0.5) * selectedSpeed,
        vy: (Math.random() - 0.5) * selectedSpeed,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.vx = -particle.vx;
          particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));
        }
        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
          particle.vy = -particle.vy;
          particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y));
        }

        // Draw particle with gradient
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius);
        gradient.addColorStop(0, particleColor.replace('rgb', 'rgba').replace(')', `, ${particle.opacity})`));
        gradient.addColorStop(1, particleColor.replace('rgb', 'rgba').replace(')', ', 0)'));

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, particleColor, particleOpacity, speed, size]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ background: 'transparent' }}
    />
  );
};

/**
 * AnimatedGradientBackground - Smooth animated gradient background
 */
export const AnimatedGradientBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 opacity-30 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-secondary animate-gradient-shift" 
        style={{ backgroundSize: '200% 200%' }}>
      </div>
    </div>
  );
};

/**
 * FloatingBubbles - Floating bubble animation effect
 */
export const FloatingBubbles: React.FC<{ className?: string; count?: number }> = ({ 
  className = '', 
  count = 6 
}) => {
  const bubbles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-r from-secondary to-yellow-300 opacity-20 animate-float"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-50px',
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`
          }}
        />
      ))}
    </div>
  );
};

/**
 * PulsatingOrbs - Pulsating orb background effect
 */
export const PulsatingOrbs: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Top right orb */}
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"/>
      
      {/* Bottom left orb */}
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-400"/>
      
      {/* Center orb */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-shadow"/>
    </div>
  );
};

/**
 * ShimmerBackground - Shimerring effect background
 */
export const ShimmerBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0 animate-shimmer"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
          backgroundSize: '200% 100%'
        }}
      />
    </div>
  );
};

export default {
  FloatingParticles,
  AnimatedGradientBackground,
  FloatingBubbles,
  PulsatingOrbs,
  ShimmerBackground
};
