# Bible TapAIstry

A dynamic, semantic, and accessible Scripture Overview experience that blends GRM Daily "Daily Duppy" visual aesthetics with clean F1 dashboard design.

## Features

### Visual Design
- **Daily Duppy Style**: Big, declarative words with impact, split yellow/black backgrounds, animated lyric-style text
- **F1 Dashboard Feel**: Smooth scroll, panelled sections, neon accents on dark, minimal UI
- **Semantic Imagery**: Contextual images (disco ball, mirror, tree) that appear to explain concepts, not decorate

### Scripture Threshold
- Users must scroll through Genesis 1 before accessing the Eden overview
- Progress indicator shows reading completion
- Subtle hover effects where words gently lift
- Reverent, not punitive

### Accessibility
- **Dyslexia-friendly mode**: Toggle to switch to OpenDyslexic font with increased spacing
- **Reduced motion**: Respects `prefers-reduced-motion` system preference
- **High contrast**: Dark base with bright neon accents
- **Short lines**: Avoids dense paragraphs

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP + ScrollTrigger (structure ready for beat-sync)
- **State**: Zustand (for accessibility preferences and threshold tracking)
- **Icons**: Lucide React

## Project Structure

```
bible-tapAIstry/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles + Tailwind
│   ├── framework/
│   │   └── page.tsx         # Part 0: Framework concepts
│   ├── threshold/
│   │   └── page.tsx         # Scripture Threshold (Genesis 1)
│   └── eden/
│       └── page.tsx         # Part 1: Eden overview
├── components/
│   ├── Navigation.tsx       # Minimal nav bar
│   ├── AccessibilityToggle.tsx  # Dyslexia mode toggle
│   ├── WordReveal.tsx       # Daily Duppy style text reveals
│   ├── ProgressIndicator.tsx    # Scroll progress bars
│   ├── SemanticImage.tsx    # Contextual imagery (disco ball, etc.)
│   ├── SplitBackground.tsx  # Yellow/black split backgrounds
│   ├── ScriptureThreshold.tsx   # Genesis 1 reading gate
│   ├── ScrollSection.tsx    # Scroll-triggered sections
│   └── index.ts             # Barrel export
├── hooks/
│   ├── useReducedMotion.ts  # System motion preference
│   ├── useDyslexiaMode.ts   # Dyslexia mode state (Zustand)
│   ├── useScrollProgress.ts # Scroll tracking
│   ├── useThresholdStore.ts # Threshold completion state
│   ├── useGSAP.ts           # GSAP animation hooks
│   └── index.ts             # Barrel export
├── lib/
│   ├── genesis1.ts          # Genesis 1 verse data
│   └── content.ts           # Framework/Eden content blocks
└── public/                  # Static assets
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd bible-tapAIstry

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## User Flow

1. **Home** → Introduction to Bible TapAIstry
2. **Framework** → Part 0: Understanding how to read Scripture
3. **Threshold** → Must read Genesis 1 before proceeding
4. **Eden** → Part 1: Creation, Image of God, Eden overview

## Design Principles

### From Daily Duppy (2017-2019)
- Big, declarative words appearing with impact
- Split backgrounds (yellow/black)
- Text that reacts to meaning, not constant motion
- Simple contextual imagery that explains, then disappears

### From Lando Norris Website
- Smooth scroll-triggered animations
- Clean, futuristic panel sections
- Neon accents on dark backgrounds
- Fast, minimal UI

### Accessibility First
- Dyslexia-friendly font option (OpenDyslexic)
- Increased line-height and letter-spacing when enabled
- Respects system `prefers-reduced-motion`
- High contrast maintained throughout

## Future Enhancements

- Audio integration with beat-sync animations
- Additional Bible book overviews
- Mobile gesture controls
- Community verse sharing

## Content

### Part 0 - Framework
- "Be doers of the word, not hearers only."
- "Receive with meekness the implanted word."
- "Scripture is a mirror."
- "Overviews give a framework — like a painting or a jigsaw."
- "They make Jesus more glorious and rich."

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

## License

MIT

---

Built with reverence. Scroll with intention.
