# Scripture Overview: Behind Barz × F1 Dashboard

## A Design Concept Document

---

## 1. High-Level Concept

### The Vision: "The Word Drops Heavy"

Imagine stepping into a digital space where ancient scripture meets the raw energy of a UK rap booth and the precision of a Formula 1 cockpit. This is **Scripture Overview** — a web experience that treats the Bible like it deserves: with weight, rhythm, and modern visual power.

**The Core Tension:**
- **Gritty authenticity** (Behind Barz) — the Word hits hard, unpolished, real
- **Futuristic precision** (F1 Dashboard) — navigation is surgical, clean, fast

**Metaphor:**
> The scripture is the artist in the booth. The UI is the engineering team behind the glass. Together, they deliver something unforgettable.

### Experience Summary

Users enter a dark, immersive environment. Scripture doesn't just appear — it *arrives*. Words drop on-beat. Verses pulse with subtle waveforms. Scrolling through a biblical book feels like scrubbing through a race telemetry timeline. Key passages are highlighted like a driver's fastest lap sectors.

The experience is reverent but bold. Meditative but modern.

---

## 2. Layout / Wireframe

### 2.1 Primary Sections

```
┌─────────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░  HEADER / NAV BAR  ░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│  [Logo]     [Books ▾]    [Timeline]    [Booth Mode]    [Settings]  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                     ╔═══════════════════════╗                       │
│                     ║                       ║                       │
│                     ║    HERO / BOOTH       ║                       │
│                     ║    ZONE               ║                       │
│                     ║                       ║                       │
│                     ║  "In the beginning"   ║                       │
│                     ║                       ║                       │
│                     ╚═══════════════════════╝                       │
│                                                                     │
│     ┌──────────────────────────────────────────────────────┐        │
│     │  ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │        │
│     │  PROGRESS / WAVEFORM BAR                              │        │
│     │  Genesis 1:1 ─────────●───────────────── Genesis 50   │        │
│     └──────────────────────────────────────────────────────┘        │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐        │
│  │                 │ │                 │ │                 │        │
│  │  CHAPTER CARD   │ │  CHAPTER CARD   │ │  CHAPTER CARD   │        │
│  │                 │ │                 │ │                 │        │
│  │  Ch. 1          │ │  Ch. 2          │ │  Ch. 3          │        │
│  │  "Creation"     │ │  "Eden"         │ │  "The Fall"     │        │
│  │                 │ │                 │ │                 │        │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘        │
│                                                                     │
│  ════════════════════════════════════════════════════════════════   │
│                    SCROLL TIMELINE SECTION                          │
│  ════════════════════════════════════════════════════════════════   │
│                                                                     │
│   ●━━━━━━━━━○━━━━━━━━━○━━━━━━━━━○━━━━━━━━━○━━━━━━━━━●               │
│   1:1      3:15      6:8       12:1      22:1      50:26            │
│   Creation Promise   Noah      Abraham   Sacrifice Joseph           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.2 Booth Mode (Full-Screen Scripture Experience)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                          [×] EXIT BOOTH                             │
│                                                                     │
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│                                                                     │
│                                                                     │
│                    「 FOR GOD 」                                    │
│                                                                     │
│                                         ← word appears with impact  │
│                                                                     │
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│                                                                     │
│      ▁▂▃▄▅▆▇█▇▆▅▄▃▂▁▂▃▄▅▆▇█▇▆▅▄▃▂▁▂▃▄▅▆▇█▇▆▅▄▃▂▁                   │
│      └──────────────── AUDIO WAVEFORM ────────────────┘             │
│                                                                     │
│      [◀◀]    [▶ PLAY]    [▶▶]         BPM: 85                      │
│                                                                     │
│      John 3:16  ━━━━━━━━●━━━━━━━━━━━━━━━━━━━━  0:12 / 0:45         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.3 Chapter Deep-Dive Panel

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  GENESIS 3                                                    │  │
│  │  ══════════                                                   │  │
│  │                                                               │  │
│  │  Theme: THE FALL                                              │  │
│  │                                                               │  │
│  │  ┌─────────────────────────────────────────────────────────┐  │  │
│  │  │                                                         │  │  │
│  │  │  ░░ KEY VERSE ░░                                        │  │  │
│  │  │                                                         │  │  │
│  │  │  "And I will put enmity between you and the woman,      │  │  │
│  │  │   and between your offspring and hers; he will crush    │  │  │
│  │  │   your head, and you will strike his heel."             │  │  │
│  │  │                                                         │  │  │
│  │  │                               — Genesis 3:15            │  │  │
│  │  │                                                         │  │  │
│  │  │   [▶ DROP IN BOOTH]    [COPY]    [SHARE]               │  │  │
│  │  │                                                         │  │  │
│  │  └─────────────────────────────────────────────────────────┘  │  │
│  │                                                               │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐                    │  │
│  │  │ CONTEXT  │  │ CROSS-   │  │ ORIGINAL │                    │  │
│  │  │          │  │ REFS     │  │ HEBREW   │                    │  │
│  │  └──────────┘  └──────────┘  └──────────┘                    │  │
│  │                                                               │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 3. Colour Palette

### Primary Palette: "Neon Prophecy"

| Role | Colour | Hex | Usage |
|------|--------|-----|-------|
| **Background Deep** | Obsidian Black | `#0A0A0F` | Main background, booth mode |
| **Background Mid** | Charcoal Smoke | `#141419` | Cards, panels |
| **Background Grit** | Concrete Grey | `#1C1C24` | Subtle texture overlays |
| **Primary Accent** | Prophetic Green | `#00FF87` | Primary CTA, active states, key highlights |
| **Secondary Accent** | Divine Gold | `#FFD700` | Scripture emphasis, premium moments |
| **Tertiary Accent** | Spirit Purple | `#B14EFF` | Audio elements, waveforms |
| **Warning/Impact** | Blood Red | `#FF3B3B` | Beat drops, impact moments |
| **Text Primary** | Pure White | `#FFFFFF` | Headlines, scripture |
| **Text Secondary** | Smoke White | `#A0A0B0` | Body text, metadata |
| **Text Tertiary** | Dim Grey | `#5A5A6A` | Timestamps, subtle info |

### Gradient Definitions

```css
/* Hero gradient - subtle depth */
--gradient-hero: linear-gradient(
  180deg,
  #0A0A0F 0%,
  #141419 50%,
  #0A0A0F 100%
);

/* Neon glow for accents */
--glow-green: 0 0 20px rgba(0, 255, 135, 0.4),
              0 0 40px rgba(0, 255, 135, 0.2);

--glow-gold: 0 0 20px rgba(255, 215, 0, 0.4),
             0 0 40px rgba(255, 215, 0, 0.2);

/* Beat impact flash */
--flash-impact: radial-gradient(
  circle at center,
  rgba(255, 59, 59, 0.3) 0%,
  transparent 70%
);
```

### Texture Overlays

- **Film grain**: Subtle noise at 2-3% opacity for gritty authenticity
- **Scan lines**: Horizontal lines at 1% opacity for CRT/booth feel
- **Vignette**: Dark corners to focus attention center

---

## 4. Typography

### Type Scale

| Element | Font | Weight | Size | Tracking |
|---------|------|--------|------|----------|
| **Display / Scripture Drop** | Monument Extended | Black (900) | 72-120px | -0.02em |
| **H1 / Book Title** | Inter | Bold (700) | 48px | -0.01em |
| **H2 / Chapter Title** | Inter | SemiBold (600) | 32px | 0 |
| **H3 / Section** | Inter | Medium (500) | 24px | 0.01em |
| **Body / Verse Text** | Inter | Regular (400) | 18px | 0.02em |
| **Caption / Metadata** | JetBrains Mono | Regular (400) | 14px | 0.05em |
| **UI / Navigation** | Inter | Medium (500) | 14px | 0.08em |

### Font Pairing Rationale

- **Monument Extended**: A brutalist, ultra-wide display font. When scripture drops in the booth, it needs to HIT. This font commands attention and fills the screen with authority.

- **Inter**: Clean, geometric, highly legible. The F1 dashboard precision — everything is readable at a glance, even in peripheral vision.

- **JetBrains Mono**: For timestamps, verse numbers, technical metadata. Gives a telemetry/data readout feel.

### Typography Animation States

```css
/* Scripture word drop */
.word-drop {
  opacity: 0;
  transform: translateY(-20px) scale(1.1);
  filter: blur(4px);
}

.word-drop.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Impact emphasis */
.word-impact {
  text-shadow: var(--glow-gold);
  animation: pulse-glow 0.3s ease-out;
}
```

---

## 5. Interaction Design

### 5.1 Scroll-Based Interactions

#### Timeline Scrubbing
As users scroll through a book overview, a horizontal timeline scrubs in sync:

```
User scrolls ↓
    ↓
Timeline marker moves →
    ↓
Chapter cards parallax at different speeds
    ↓
Key verse highlights pulse as they enter viewport
```

**Implementation:**
- Use Intersection Observer for viewport detection
- GSAP ScrollTrigger for smooth timeline sync
- Parallax layers: Background (0.2x), Cards (0.8x), Text (1x)

#### Chapter Card Reveals

Cards slide in from alternating sides with staggered timing:

```
Scroll Position:    [=====>                    ]

Card 1:  ████████████  (fully visible)
Card 2:  ░░░████████   (sliding in from left)
Card 3:  ░░░░░░░░░░░   (waiting in wings)
```

### 5.2 Hover Interactions

#### Navigation Items
```
Default:    TEXT
Hover:      TEXT
            ════  (underline slides in from left)
            ↑
            Neon green glow builds
```

#### Chapter Cards
```
Default:    ┌─────────────┐
            │  Ch. 3      │
            │  The Fall   │
            └─────────────┘

Hover:      ┌─────────────┐ ← border shifts to accent color
            │  Ch. 3      │ ← subtle lift (translateY -4px)
            │  The Fall   │ ← background lightens
            └─────────────┘
                 ↓
            Shadow deepens, glow appears
```

### 5.3 Beat-Sync Interactions (Booth Mode)

#### The Drop Sequence

When audio plays and scripture is delivered beat-by-beat:

```
Beat 1 (Kick):
┌─────────────────────────────────────┐
│                                     │
│           「 FOR 」                 │  ← Word appears
│             ▼                       │  ← Flash pulse
│      ▁▃█▃▁                         │  ← Waveform spike
└─────────────────────────────────────┘

Beat 2 (Snare):
┌─────────────────────────────────────┐
│                                     │
│        「 FOR GOD 」                │  ← Next word added
│              ▼                      │  ← Flash pulse
│         ▁▃█▃▁                      │
└─────────────────────────────────────┘

Beat 3 (Kick):
┌─────────────────────────────────────┐
│                                     │
│     「 FOR GOD SO 」                │
│            ▼                        │
│       ▁▃█▃▁                        │
└─────────────────────────────────────┘

Beat 4 (Impact - key word):
┌─────────────────────────────────────┐
│          ███ FLASH ███              │
│     「 FOR GOD SO LOVED 」          │  ← "LOVED" glows gold
│               ████                  │  ← Major pulse
│      ▁▂▃▅▇█████▇▅▃▂▁               │  ← Waveform peak
└─────────────────────────────────────┘
```

#### Beat Detection Triggers

| Trigger | Visual Response |
|---------|-----------------|
| Kick drum | Background pulse, next word drops |
| Snare hit | Screen flash (subtle), text emphasis |
| Hi-hat | Waveform ripple, no text change |
| Key phrase | Gold glow, screen shake, hold beat |
| Verse end | Fade transition, breathing room |

### 5.4 Camera-Style Motion

Subtle viewport movements that mimic documentary camera work:

```javascript
// Slow push-in on scripture
gsap.to('.booth-text', {
  scale: 1.02,
  duration: 8,
  ease: 'none'
});

// Micro-shake on impact
gsap.to('.booth-container', {
  x: 'random(-2, 2)',
  y: 'random(-1, 1)',
  duration: 0.1,
  repeat: 3,
  yoyo: true
});

// Ken Burns drift on background
gsap.to('.background-texture', {
  x: '-=20',
  y: '-=10',
  duration: 20,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});
```

### 5.5 Audio-Reactive Elements

#### Waveform Visualizer

Real-time audio visualization using Web Audio API:

```
Silent:     ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁

Low:        ▁▂▁▂▁▂▁▃▂▁▂▁▂▁▃▂▁▂▁▂▁▂▁▃▂▁▂▁▂▁▂▁

Medium:     ▁▃▂▄▃▂▅▃▂▄▃▂▅▄▃▆▄▃▅▃▂▄▃▂▅▃▂▄▃▂▅▃

Peak:       ▂▅▄▇▅▄█▆▄▇▅▄█▇▅█▆▅▇▅▄█▅▄▇▅▄█▆▄▇▅
```

#### Ambient Pulse Elements

Background elements that breathe with the audio:

- Border glow intensity tied to bass frequencies
- Particle density increases with volume
- Text shadow intensity pulses with mid frequencies

---

## 6. Component Library

### 6.1 Navigation Bar

```jsx
<NavBar>
  <Logo variant="minimal" />           // Simplified icon logo
  <NavDropdown label="Books">          // Mega menu with all 66 books
    <BookGrid testament="old" />
    <BookGrid testament="new" />
  </NavDropdown>
  <NavLink to="/timeline">Timeline</NavLink>
  <NavButton variant="booth" icon="mic">
    Booth Mode
  </NavButton>
  <SettingsToggle />
</NavBar>
```

### 6.2 Scripture Card

```jsx
<ScriptureCard
  reference="John 3:16"
  text="For God so loved the world..."
  theme="salvation"
  onBoothDrop={() => enterBooth(verse)}
  onShare={() => shareVerse(verse)}
  variant="featured"  // or "compact", "minimal"
/>
```

### 6.3 Timeline Track

```jsx
<TimelineTrack
  book="Genesis"
  markers={[
    { position: 0.02, label: "Creation", ref: "1:1" },
    { position: 0.06, label: "The Fall", ref: "3:1" },
    { position: 0.12, label: "Noah", ref: "6:8" },
    // ...
  ]}
  currentPosition={scrollProgress}
  onMarkerClick={(marker) => scrollToChapter(marker.ref)}
/>
```

### 6.4 Booth Display

```jsx
<BoothDisplay
  verse={currentVerse}
  audioSrc="/audio/john-3-16-beat.mp3"
  bpm={85}
  wordTimings={[
    { word: "For", beat: 1 },
    { word: "God", beat: 2 },
    { word: "so", beat: 3 },
    { word: "loved", beat: 4, emphasis: true },
    // ...
  ]}
  onComplete={() => showNextVerse()}
  showWaveform={true}
  cameraMotion="push-in"
/>
```

### 6.5 Audio Visualizer

```jsx
<AudioVisualizer
  audioContext={audioCtx}
  analyserNode={analyser}
  variant="waveform"      // or "bars", "circular"
  color="var(--accent-purple)"
  height={60}
  responsive={true}
/>
```

---

## 7. Technical Stack

### 7.1 Recommended Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | Next.js 14+ (App Router) | Server components for fast initial load, client islands for interactivity |
| **Styling** | Tailwind CSS + CSS Variables | Utility-first with custom properties for theming |
| **Animation** | GSAP + ScrollTrigger | Industry standard for complex scroll animations |
| **Audio** | Tone.js + Web Audio API | Precise beat scheduling and audio analysis |
| **State** | Zustand | Lightweight, perfect for audio/UI sync state |
| **3D (optional)** | Three.js / React Three Fiber | For particle effects, depth backgrounds |
| **Database** | Supabase or PlanetScale | Verse data, user preferences |
| **Deployment** | Vercel | Optimized for Next.js, edge functions |

### 7.2 Key Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "gsap": "^3.12.0",
    "tone": "^14.7.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.88.0",
    "zustand": "^4.4.0",
    "framer-motion": "^10.16.0",
    "tailwindcss": "^3.4.0",
    "lucide-react": "^0.290.0"
  }
}
```

### 7.3 Performance Considerations

| Concern | Solution |
|---------|----------|
| Large audio files | Stream audio, lazy load non-critical tracks |
| Animation performance | Use `will-change`, GPU-accelerated transforms only |
| Initial load | Server components for static content, defer animations |
| Mobile performance | Reduced particle counts, simpler waveforms |
| Accessibility | Respect `prefers-reduced-motion`, provide text alternatives |

### 7.4 Audio-Visual Sync Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        AUDIO ENGINE                             │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐           │
│  │  Tone.js    │──▶│  Transport  │──▶│   Events    │           │
│  │  Player     │   │  (BPM sync) │   │  (beat/bar) │           │
│  └─────────────┘   └─────────────┘   └──────┬──────┘           │
│                                             │                   │
│  ┌─────────────┐                           │                   │
│  │  Analyser   │───────────────────────────┼─────────▶ FFT     │
│  │  Node       │                           │           Data    │
│  └─────────────┘                           │                   │
└────────────────────────────────────────────┼───────────────────┘
                                             │
                                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      ZUSTAND STORE                              │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  {                                                       │   │
│  │    currentBeat: 4,                                       │   │
│  │    currentWord: "loved",                                 │   │
│  │    isPlaying: true,                                      │   │
│  │    fftData: Float32Array,                                │   │
│  │    impactTrigger: false                                  │   │
│  │  }                                                       │   │
│  └─────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────┬───────────────────┘
                                             │
                                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                     REACT COMPONENTS                            │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  WordDrop    │  │  Waveform    │  │  Background  │          │
│  │  Animation   │  │  Visualizer  │  │  Pulse       │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 8. Accessibility & Inclusivity

### 8.1 Motion Sensitivity

```css
@media (prefers-reduced-motion: reduce) {
  .word-drop {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .camera-motion,
  .parallax-element,
  .pulse-animation {
    animation: none;
    transform: none;
  }
}
```

### 8.2 Screen Reader Support

- All scripture text is accessible in DOM (not canvas-rendered)
- Verse references use proper semantic markup
- Audio controls have clear labels
- Skip links for booth mode

### 8.3 Keyboard Navigation

| Key | Action |
|-----|--------|
| `Space` | Play/pause audio |
| `←` / `→` | Previous/next verse |
| `Escape` | Exit booth mode |
| `Tab` | Navigate interactive elements |
| `Enter` | Activate focused element |

---

## 9. Responsive Behavior

### Breakpoints

```css
--bp-mobile: 480px;
--bp-tablet: 768px;
--bp-desktop: 1024px;
--bp-wide: 1440px;
```

### Mobile Adaptations

| Element | Desktop | Mobile |
|---------|---------|--------|
| Booth text size | 72-120px | 36-48px |
| Timeline | Horizontal | Vertical |
| Chapter cards | 3-column grid | Single column |
| Waveform | Full width | Simplified bars |
| Particles | High density | Minimal/disabled |
| Camera motion | Full | Subtle only |

---

## 10. Sample User Flows

### Flow 1: Discovering a Key Verse

```
1. User lands on Genesis overview
           ↓
2. Scrolls through chapter cards
   (parallax, timeline syncs)
           ↓
3. Sees "KEY VERSE" badge on Gen 3:15
           ↓
4. Hovers card (lift, glow)
           ↓
5. Clicks "Drop in Booth"
           ↓
6. Full-screen transition (zoom + fade)
           ↓
7. Booth mode loads
   - Dark environment
   - Verse ready
           ↓
8. Presses Play
           ↓
9. Words drop on-beat
   - "And" (kick)
   - "I" (snare)
   - "will put" (kick)
   - "ENMITY" (impact - glow, shake)
           ↓
10. Verse completes, lingers
            ↓
11. User shares or exits
```

### Flow 2: Timeline Exploration

```
1. User clicks "Timeline" nav
           ↓
2. Book selector appears
   (futuristic dropdown)
           ↓
3. Selects "Romans"
           ↓
4. Horizontal timeline loads
   with key theological markers
           ↓
5. Scrolls/drags timeline
           ↓
6. Markers pulse as approached
           ↓
7. Clicks "Romans 8:28" marker
           ↓
8. Panel slides up with:
   - Full verse text
   - Context
   - Cross-references
   - "Drop in Booth" button
```

---

## 11. Future Enhancements

### Phase 2 Ideas

- **Custom Beat Selection**: Let users choose different audio tracks for verses
- **Multiplayer Booth**: Live sync between multiple users for group study
- **AI-Generated Beats**: Dynamically create instrumentals that match verse tone
- **Memory Mode**: Gamified scripture memorization with beat-sync prompts
- **AR Mode**: Project scripture onto real-world surfaces via phone camera

### Phase 3 Ideas

- **Voice Recording**: Users can record themselves reading/rapping verses
- **Community Drops**: Share custom verse presentations with beat choices
- **Study Paths**: Curated journeys through scripture with thematic beats
- **Original Language Mode**: Hebrew/Greek with transliteration drops

---

## 12. Closing Note

This design concept treats scripture with the reverence it deserves while presenting it through a lens that resonates with modern visual culture. The Behind Barz aesthetic brings weight, impact, and authenticity. The F1 dashboard precision brings clarity, navigation, and polish.

Together, they create something new: a space where the ancient Word hits with the force of a beat drop and the precision of race telemetry.

**The Word was always meant to hit different.**

---

*Design concept by Claude • Scripture Overview Project • 2026*
