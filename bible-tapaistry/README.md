# Bible TapAIstry

A dynamic, semantic, and accessible scripture overview experience built with Next.js, TypeScript, and GSAP.

## Overview

Bible TapAIstry is an interactive scripture exploration tool that combines:

- **Daily Duppy-style visuals** - Big, declarative words with impact animations, split backgrounds, and semantic imagery
- **Lando Norris website aesthetics** - Smooth scroll, panelled sections, neon accents on dark UI
- **Scripture Threshold gating** - Users must read Genesis 1 before proceeding
- **Accessibility-first design** - Dyslexia-friendly mode, respects prefers-reduced-motion

## Features

### Scripture Threshold
Before users can proceed from the intro/framework into the Eden overview, they must:
- Read through the full text of Genesis 1 (31 verses)
- Scroll through the entire chapter (progress indicator tracks reading)
- Button enables only after completing the reading

### Accessibility
- **Dyslexia-friendly mode**: Toggle for increased letter-spacing, line-height, and accessible fonts
- **Reduced motion support**: Respects `prefers-reduced-motion` media query
- **High contrast**: Dark theme with neon accents for readability
- **Keyboard navigation**: Full keyboard accessibility

### Visual Design
- Dark base UI with cyan, emerald, and amber neon accents
- Semantic imagery (disco ball appears only when discussing "image of God")
- Split background effects inspired by Daily Duppy
- Impact words with glow effects

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd bible-tapaistry

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
bible-tapaistry/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles & animations
│   │   ├── layout.tsx        # Root layout with AccessibilityProvider
│   │   └── page.tsx          # Main page with phase navigation
│   ├── components/
│   │   ├── effects/
│   │   │   ├── DiscoBall.tsx      # Animated disco ball (semantic)
│   │   │   ├── ImpactWord.tsx     # Big impact word animations
│   │   │   ├── SemanticImage.tsx  # Contextual SVG images
│   │   │   └── SplitBackground.tsx # Split color backgrounds
│   │   ├── sections/
│   │   │   ├── EdenSection.tsx    # Part 1: Eden overview
│   │   │   ├── FrameworkSection.tsx # Part 0: Framework
│   │   │   └── ScriptureThreshold.tsx # Genesis 1 reading gate
│   │   └── ui/
│   │       ├── AccessibilityToggle.tsx # Dyslexia mode toggle
│   │       ├── ContinueButton.tsx      # Gated continue button
│   │       └── ProgressIndicator.tsx   # Reading progress
│   ├── contexts/
│   │   └── AccessibilityContext.tsx # Accessibility state management
│   ├── data/
│   │   └── genesis1.ts       # Genesis 1 verses & content
│   └── hooks/
│       ├── useReducedMotion.ts  # Reduced motion detection
│       └── useScrollProgress.ts # Scroll progress tracking
```

## Content Structure

### Part 0 - Framework
- "Be doers of the word, not hearers only."
- "Receive with meekness the implanted word."
- "Scripture is a mirror."
- "Overviews give a framework — like a painting or a jigsaw."
- "They make Jesus more glorious and rich."

### Scripture Threshold
- Full text of Genesis 1 (31 verses)
- Word-level hover effects
- Progress tracking

### Part 1 - Eden
- "The Bible begins with God."
- "Made in God's image (Gen 1:26–28)."
- "Rule, reflect, fill."
- "Day 7 is the climax: rest with God."
- "Eden: pleasure, abundance, presence."
- "Work and keep: serve and guard."
- "One command, one tree."
- "Humanity as a disco ball reflecting God's light."
- "Eden is rich — but not the world we see now."

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP + ScrollTrigger
- **Deployment**: Vercel-ready

## Deploy on Vercel

The easiest way to deploy is via Vercel:

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com/new)
3. Deploy automatically

## Future Enhancements

- Beat-sync capability for audio integration (code structured to support)
- Additional Bible chapters and books
- User progress persistence
- Mobile-optimized gestures

## License

MIT
