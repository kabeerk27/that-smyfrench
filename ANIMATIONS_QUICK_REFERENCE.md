# Quick Reference Card - Animations & Icons

## 🚀 Quick Start (Copy-Paste Ready)

### Replace an Emoji with Icon
```tsx
// Step 1: Import
import { TrophyIcon } from '@/components/AnimatedIconsLibrary';

// Step 2: Use
<TrophyIcon size="lg" animated={true} />

// Available sizes: sm, md, lg, xl, 2xl
// Set animated={false} to disable animation
```

### Add Animation to Section
```tsx
// Step 1: Import
import { AnimationWrapper } from '@/components/AnimationUtilities';

// Step 2: Wrap content
<AnimationWrapper animation="fadeInUp" duration="normal" delay={0}>
  <div>Your content here</div>
</AnimationWrapper>
```

### Add Background Effect
```tsx
// Step 1: Import
import { PulsatingOrbs } from '@/components/FloatingParticles';

// Step 2: Add to section
<section className="relative overflow-hidden">
  <PulsatingOrbs />
  {/* Your content */}
</section>
```

### Animate Multiple Cards
```tsx
// Step 1: Import
import { StaggerContainer } from '@/components/AnimationUtilities';

// Step 2: Wrap with stagger
<StaggerContainer animation="fadeInUp" staggerDelay={0.1}>
  {items.map(item => <Card key={item.id} />)}
</StaggerContainer>
```

## 📋 All Available Icons

| Icon | Name | Component |
|------|------|-----------|
| 🏅 | Trophy | `<TrophyIcon />` |
| 📊 | Chart | `<ChartIcon />` |
| ⭐ | Star | `<StarIcon />` |
| 🎓 | Graduation | `<GraduationIcon />` |
| 🌍 | Globe | `<GlobeIcon />` |
| 🎯 | Target | `<TargetIcon />` |
| 📚 | Book | `<BookIcon />` |
| 🚀 | Rocket | `<RocketIcon />` |
| 👨‍🏫 | Instructor | `<InstructorIcon />` |
| 💬 | Chat | `<ChatIcon />` |
| 📱 | Mobile | `<MobileIcon />` |
| 🏆 | Award | `<AwardIcon />` |
| ✨ | Sparkle | `<SparkleIcon />` |
| 🇫🇷 | France | `<FranceIcon />` |
| ✅ | Check | `<CheckIcon />` |
| 💡 | Lightbulb | `<LightbulbIcon />` |
| ⏰ | Clock | `<ClockIcon />` |
| 🎖️ | Winners | `<WinnersIcon />` |

## ✨ All Animations (CSS Classes)

### Entrance Animations (One-time)
```
animate-fadeInUp      ← Use for most elements
animate-slideInLeft   ← For left-aligned content
animate-slideInRight  ← For right-aligned content
animate-zoomIn        ← For cards/important items
animate-bounceIn      ← For playful elements
animate-slideDown     ← For top-down entrance
animate-slideUp       ← For bottom-up entrance
```

### Continuous Animations (Loop)
```
animate-float         ← Gentle floating (icons)
animate-scale-pulse   ← Pulsing size (notifications)
animate-wave          ← Wave motion (repeating)
animate-rotate        ← Full 360° spin (loader)
animate-bounce-animation ← Bouncing (buttons)
animate-glow-badge    ← Glowing badge (highlight)
animate-pulse-shadow  ← Shadow pulse (emphasis)
animate-shimmer       ← Loading effect
animate-gradient-shift ← Animated gradient
```

### Animation Delays (Stack these)
```
animation-delay-100   ← 0.1s delay
animation-delay-200   ← 0.2s delay
animation-delay-300   ← 0.3s delay
animation-delay-400   ← 0.4s delay
animation-delay-500   ← 0.5s delay
animation-delay-600   ← 0.6s delay
animation-delay-700   ← 0.7s delay
animation-delay-800   ← 0.8s delay
```

## 🎨 Icon Sizes

```tsx
// sm   = 6x6 = 24px
// md   = 10x10 = 40px
// lg   = 16x16 = 64px      (DEFAULT)
// xl   = 20x20 = 80px
// 2xl  = 24x24 = 96px

<TrophyIcon size="md" />    // Use for inline icons
<TrophyIcon size="lg" />    // Use for section headers
<TrophyIcon size="xl" />    // Use for large displays
```

## 🎯 Icon Color

```tsx
// Default uses currentColor (inherits text color)

{/* Primary color (blue) */}
<TrophyIcon className="text-primary" />

{/* Secondary color (yellow) */}
<TrophyIcon className="text-secondary" />

{/* Custom Tailwind color */}
<TrophyIcon className="text-green-500" />
<TrophyIcon className="text-red-600" />
<TrophyIcon className="text-purple-800" />
```

## 🔧 Animation Components

### AnimationWrapper
```tsx
<AnimationWrapper 
  animation="fadeInUp"           // Type of animation
  duration="normal"               // slow, normal, fast
  delay={0}                       // Delay in seconds
  className="optional-css"
>
  Your content
</AnimationWrapper>
```

### StaggerContainer
```tsx
<StaggerContainer 
  animation="fadeInUp"            // Animation type
  delay={0}                       // Initial delay
  staggerDelay={0.1}             // Delay between items
  className="grid grid-cols-3"   // CSS for container
>
  {items.map(item => <Item />)}
</StaggerContainer>
```

### FloatingElement
```tsx
<FloatingElement intensity="medium">
  <YourIcon />
</FloatingElement>
```

### GradientText
```tsx
<GradientText animate={true}>
  Your text with animated gradient
</GradientText>
```

## 🎬 Background Effects

### PulsatingOrbs
```tsx
<section className="relative overflow-hidden">
  <PulsatingOrbs />
  {/* Content */}
</section>
```

### FloatingBubbles
```tsx
<section className="relative overflow-hidden">
  <FloatingBubbles count={6} />
  {/* Content */}
</section>
```

### FloatingParticles
```tsx
import { FloatingParticles } from '@/components/FloatingParticles';

<section>
  <FloatingParticles 
    particleCount={50}
    speed="normal"
    size="small"
  />
  {/* Content */}
</section>
```

## 📝 Common Patterns

### Animated Card Grid
```tsx
<StaggerContainer animation="fadeInUp" staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {items.map(item => (
    <div key={item.id} className="bg-white p-6 rounded-lg">
      <TrophyIcon size="lg" />
      <h3>{item.title}</h3>
    </div>
  ))}
</StaggerContainer>
```

### Floating Icon
```tsx
<div className="animate-float">
  <TrophyIcon size="xl" />
</div>
```

### Gradient Heading
```tsx
<h1 className="text-4xl font-bold">
  <GradientText>Impressive Title</GradientText>
</h1>
```

### Icon with Hover Effect
```tsx
<div className="hover:scale-110 transition-transform duration-300">
  <TrophyIcon size="lg" />
</div>
```

### Section with Background
```tsx
<section className="relative py-20 overflow-hidden">
  <PulsatingOrbs />
  <FloatingBubbles count={5} />
  <div className="relative z-10">
    {/* Your content */}
  </div>
</section>
```

### Staggered Text Reveal
```tsx
<AnimationWrapper animation="fadeInUp" delay={0.1}>
  <h2>Title</h2>
</AnimationWrapper>
<AnimationWrapper animation="fadeInUp" delay={0.2}>
  <p>Description</p>
</AnimationWrapper>
<AnimationWrapper animation="fadeInUp" delay={0.3}>
  <button>CTA</button>
</AnimationWrapper>
```

## 🎓 Pro Tips

1. **Always use `overflow: hidden`** on parent when using background effects
2. **Combine animations** - float + delay for staggered floating
3. **Use z-index** - content needs `relative z-10` over backgrounds
4. **Disable on slow devices** - set `animated={false}` for accessibility
5. **Test on mobile** - particle effects can impact performance
6. **Use prefers-reduced-motion** - respect user animations preference
7. **Timing** - keep animations between 0.3s - 1s for best UX
8. **Delays** - 0.1s to 0.2s stagger feels natural

## 📁 Files to Know

| File | Purpose |
|------|---------|
| `AnimatedIconsLibrary.tsx` | SVG icon components |
| `AnimationUtilities.tsx` | Animation wrappers |
| `FloatingParticles.tsx` | Background effects |
| `ANIMATION_INTEGRATION_GUIDE.tsx` | Detailed examples |
| `AnimationsShowcase.tsx` | Visual demo |
| `globals.css` | Animation keyframes |

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Icon not showing | Check import: `import { TrophyIcon } from '@/components/AnimatedIconsLibrary'` |
| Animation not playing | Ensure parent doesn't have `overflow: hidden` (for entrance animations) |
| Icon color wrong | Add color class: `<Icon className="text-primary" />` |
| Animation stutters | Reduce particle count, disable unused animations |
| Mobile performance slow | Use `animated={false}` on mobile, reduce background effects |

## 🚀 Implementation Order

1. **First**: Update hero section (highest impact)
2. **Second**: Update trust badges and Why Choose Us
3. **Third**: Featured courses and FAQ
4. **Fourth**: Footer and headers
5. **Finally**: Polish and optimize

## 📖 Learn More

- **Full Guide**: `ANIMATIONS_README.md`
- **Integration Steps**: `IMPLEMENTATION_CHECKLIST.md`
- **Code Examples**: `ANIMATION_INTEGRATION_GUIDE.tsx`
- **Live Demo**: `AnimationsShowcase.tsx`

---

**Remember:** You can copy-paste any example directly into your components!
