'use client';

// Professional SVG Icons Library with Animations
// Replace all emojis with these components

interface IconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  animated?: boolean;
  className?: string;
}

const sizeMap = {
  sm: 'w-6 h-6',
  md: 'w-10 h-10',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20',
  '2xl': 'w-24 h-24'
};

// Trophy/Medal Icon - for "Certified Instructors"
export const TrophyIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-float' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9H3V13C3 14.657 4.343 16 6 16V20H18V16C19.657 16 21 14.657 21 13V9H18H6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 4H15C15 4 15 2 12 2C9 2 9 4 9 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 20L8 22H16L16 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Chart/Statistics Icon - for "Success Rate"
export const ChartIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-scale-pulse' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 20H21V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Star Icon - for "5-Star Rated"
export const StarIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-float' : ''} ${className}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>
);

// Graduation Cap Icon - for "Exam Prep Expert"
export const GraduationIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-float animation-delay-200' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 9L12 3L22 9V10H2V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 10V16C4 18.209 7.373 20 12 20C16.627 20 20 18.209 20 16V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 14C13.657 14 15 13.104 15 12C15 10.896 13.657 10 12 10C10.343 10 9 10.896 9 12C9 13.104 10.343 14 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Globe Icon - for "Global Recognition"
export const GlobeIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-rotate' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2C8 6 6 8.5 6 12C6 15.5 8 18 12 22C16 18 18 15.5 18 12C18 8.5 16 6 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// Target/Bullseye Icon - for "Quality Guaranteed"
export const TargetIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-float animation-delay-400' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

// Book Icon - for "Courses"
export const BookIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-float' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19L4.5 5.5C4.5 4.948 4.948 4.5 5.5 4.5H18.5C19.052 4.5 19.5 4.948 19.5 5.5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 7V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 19H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Rocket Icon - for "Get Started"
export const RocketIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-slide-up' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 15C4 14 2 10 2 6L12 2L22 6C22 10 20 14 16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 15C8.5 19 10 22 12 22C14 22 15.5 19 16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="9" r="2" fill="currentColor"/>
  </svg>
);

// People/Instructor Icon - for "Expert Instructors"
export const InstructorIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-float' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C13.657 12 15 10.657 15 9C15 7.343 13.657 6 12 6C10.343 6 9 7.343 9 9C9 10.657 10.343 12 12 12Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M18 20C18 17.239 15.314 15 12 15C8.686 15 6 17.239 6 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Chat/Communication Icon - for "Interactive Learning"
export const ChatIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-wave' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 10C3 6 5 4 10 4H14C19 4 21 6 21 11V13C21 18 19 20 14 20H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 16L9.01 16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 16L13.01 16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 16L17.01 16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Mobile/Smartphone Icon - for "Flexible Schedule"
export const MobileIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-float animation-delay-300' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 20H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 6H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Award/Badge Icon - for "Lifetime Support"
export const AwardIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-glow-badge' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 9H23L17 14L19 21L12 16L5 21L7 14L1 9H9L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3"/>
  </svg>
);

// Sparkle/Trusted Icon - for "Trusted by students"
export const SparkleIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-scale-pulse' : ''} ${className}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 8.5 8 2 12C8.5 16 12 22 12 22C12 22 15.5 16 22 12C15.5 8 12 2 12 2Z"/>
  </svg>
);

// France Flag Icon - for brand
export const FranceIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-float' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 3V21" stroke="#002395" strokeWidth="6.67"/>
    <path d="M12.33 3V21" stroke="white" strokeWidth="6.67"/>
    <path d="M17.67 3V21" stroke="#EF4135" strokeWidth="6.67"/>
  </svg>
);

// Check/Verification Icon
export const CheckIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-zoom-in' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Lightbulb Icon - for insights/learning
export const LightbulbIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-bounce-animation' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12C9 10.343 10.343 9 12 9C13.657 9 15 10.343 15 12C15 13 14.5 13.9 13.8 14.5C13.4 14.9 13 15.5 13 16.5V18H11V16.5C11 15.5 10.6 14.9 10.2 14.5C9.5 13.9 9 13 9 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 20H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 18H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Clock/Time Icon - for schedule
export const ClockIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-rotate' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Trophy/Winners Icon - for exam success
export const WinnersIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-scale-pulse' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2"/>
  </svg>
);

// Mail/Email Icon - for contact information
export const MailIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-float' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5.5C3 4.119 4.119 3 5.5 3H18.5C19.881 3 21 4.119 21 5.5V18.5C21 19.881 19.881 21 18.5 21H5.5C4.119 21 3 19.881 3 18.5V5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 5.5L12 11.5L21 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Phone Icon - for contact information
export const PhoneIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-float animation-delay-200' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22.0053 20.1999 21.9359 20.4763 21.7997 20.7218C21.6634 20.9674 21.4652 21.1751 21.2263 21.3266C20.9874 21.478 20.7158 21.5693 20.4338 21.5922C20.1518 21.615 19.8685 21.5688 19.6 21.46C15.6732 20.2611 12.0181 17.8964 9.10947 14.6417C6.34111 11.5894 4.52237 7.77928 3.54 3.6C3.43045 3.33139 3.38439 3.04816 3.40721 2.76609C3.43004 2.48402 3.52073 2.21265 3.67293 1.97373C3.82513 1.73481 4.03276 1.53666 4.27829 1.40034C4.52382 1.26402 4.80019 1.19466 5.08 1.2H8.08C8.5255 1.19629 8.95368 1.35036 9.26951 1.64003C9.58534 1.9297 9.77716 2.32627 9.82 2.75C10.3841 6.729 11.7973 10.5856 13.95 13.86C14.3237 14.3534 14.7957 14.7369 15.3382 14.9878C15.8807 15.2386 16.4787 15.3497 17.0775 15.31C17.5231 15.3137 17.9513 15.1694 18.267 14.8941C18.5821 14.6188 18.7742 14.2309 18.82 13.81L19.82 6.81C19.8405 6.60454 19.9138 6.4077 20.0343 6.23916C20.1548 6.07062 20.3186 5.93478 20.5102 5.84313C20.7017 5.75148 20.914 5.70622 21.1274 5.71084C21.3409 5.71546 21.5516 5.77077 21.74 5.87C22.1464 5.98734 22.5146 6.23712 22.8 6.57812C23.0854 6.91912 23.2701 7.33988 23.34 7.78C23.4675 8.70934 23.2675 9.66379 22.77 10.47C21.7 12.0957 20.29 13.5366 18.62 14.63C18.6035 16.2191 17.9581 17.7432 16.8276 18.8525C15.697 19.9619 14.1623 20.5803 12.573 20.58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Location/Map Pin Icon - for location information
export const LocationIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-bounce-animation' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.8954 13.1046 7 12 7C10.8954 7 10 7.8954 10 9C10 10.1046 10.8954 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Speaking/Mouth Icon - for speaking skills
export const SpeakingIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-wave' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12C8 10.343 9.343 9 11 9C12.657 9 14 10.343 14 12C14 13.657 12.657 15 11 15C9.343 15 8 13.657 8 12Z" fill="currentColor"/>
    <path d="M17 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Listening/Ear Icon - for listening skills
export const ListeningIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-float' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 8C9.791 8 8 9.791 8 12C8 14.209 9.791 16 12 16C14.209 16 16 14.209 16 12" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <path d="M3 12C3 7.029 7.029 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M21 12C21 16.971 16.971 21 12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Writing/Pen Icon - for writing skills
export const WritingIcon = ({ size = 'lg', animated = true, className = '' }: IconProps) => (
  <svg className={`${sizeMap[size]} ${animated ? 'animate-rotate' : ''} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3"/>
    <path d="M20.71 7.04C21.1 6.65 21.1 6.011 20.71 5.621L18.37 3.281C17.98 2.891 17.34 2.891 16.95 3.281L15.13 5.101C14.74 5.491 14.74 6.131 15.13 6.521L17.47 8.861C17.86 9.251 18.5 9.251 18.89 8.861L20.71 7.04Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3"/>
  </svg>
);

// Default Icon Factory
export const getIcon = (name: string, props?: Partial<IconProps>) => {
  const defaultProps: IconProps = { size: 'lg' as const, animated: true, className: '', ...props };
  
  const iconMap: Record<string, React.ReactNode> = {
    'trophy': <TrophyIcon {...defaultProps} />,
    'chart': <ChartIcon {...defaultProps} />,
    'star': <StarIcon {...defaultProps} />,
    'graduation': <GraduationIcon {...defaultProps} />,
    'globe': <GlobeIcon {...defaultProps} />,
    'target': <TargetIcon {...defaultProps} />,
    'book': <BookIcon {...defaultProps} />,
    'rocket': <RocketIcon {...defaultProps} />,
    'instructor': <InstructorIcon {...defaultProps} />,
    'chat': <ChatIcon {...defaultProps} />,
    'mobile': <MobileIcon {...defaultProps} />,
    'award': <AwardIcon {...defaultProps} />,
    'sparkle': <SparkleIcon {...defaultProps} />,
    'france': <FranceIcon {...defaultProps} />,
    'check': <CheckIcon {...defaultProps} />,
    'lightbulb': <LightbulbIcon {...defaultProps} />,
    'clock': <ClockIcon {...defaultProps} />,
    'winners': <WinnersIcon {...defaultProps} />,
    'mail': <MailIcon {...defaultProps} />,
    'phone': <PhoneIcon {...defaultProps} />,
    'location': <LocationIcon {...defaultProps} />,
    'speaking': <SpeakingIcon {...defaultProps} />,
    'listening': <ListeningIcon {...defaultProps} />,
    'writing': <WritingIcon {...defaultProps} />,
  };
  
  return iconMap[name] || null;
};
