---
name: Deep Midnight & Cyan Velocity
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#a4c9ff'
  on-secondary: '#00315d'
  secondary-container: '#0267b8'
  on-secondary-container: '#d6e5ff'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#009bd1'
  on-tertiary-container: '#002d40'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system expresses a refined, high-performance developer persona for Carlos Julio Leyva Baquero. It blends modern minimalism with technical precision, drawing cues from terminal aesthetics, high-end IDEs, and next-generation developer tooling.

The interface evokes competence, precision, and modern engineering excellence. Target audiences include technical recruiters, engineering leaders, and collaborators who value architectural clarity, code elegance, and attention to detail.

Visual language highlights:
- Deep oceanic slate and dark navy surfaces create a low-fatigue workspace.
- Vivid cyan and electric blue highlights draw immediate focus to key achievements, active statuses, and interactive elements.
- Architectural lines, subdued structural borders, and subtle luminescent gradients emulate backlit instrumentation and developer glass consoles.

## Colors

The palette relies on deep oceanic dark tones contrasted with high-energy luminescent blues.

- **Background & Canvas (`#0B1120`)**: The foundational canvas, providing an ink-depth canvas that makes text crisp and prevents visual vibration.
- **Surface Elevation 1 (`#0F172A`)**: Standard container background for cards, hero containers, and section blocks.
- **Surface Elevation 2 (`#1E293B`)**: Raised interactive states, nested containers, code snippets, and active pill badges.
- **Primary Accent (`#3B82F6`)**: The core interactive driver, utilized for primary calls-to-action, key metrics, and brand focal anchors.
- **Secondary Accent (`#60A5FA`)**: High-legibility text highlights, hover states, and glowing edge gradients.
- **Tertiary Accent (`#38BDF8`)**: Electric cyan reserved for status pills, live indicators, and tech stack category tags.
- **Text & Contrast Hierarchy**: Text uses `#F8FAFC` for high-emphasis headlines, `#94A3B8` for supportive body copy, and `#64748B` for subdued metadata and code comment stylings.

## Typography

Typography establishes an instant duality between expressive product leadership and technical execution:

- **Headlines (Plus Jakarta Sans)**: Contemporary, geometric, and authoritative. Tight negative tracking creates optical density in large headings.
- **Body & Content (Inter)**: Exceptional neutral readability for narrative project descriptions, engineering philosophies, and career milestones.
- **Labels, Metrics & Code (JetBrains Mono)**: Conveys engineering authenticity for tech tags, commit dates, line indicators, and stats.

All headlines larger than 32px scale down gracefully on mobile via dedicated tokens to avoid awkward wrap breaks.

## Layout & Spacing

The portfolio adheres to a modern fixed-width grid system centered within the viewport:

- **Desktop (1024px+)**: 12-column layout maxed at 1200px width with `gutter` of 1.5rem and canvas `margin` of 4rem.
- **Tablet (768px - 1023px)**: 8-column layout with 1.25rem gutters and 2rem outer margins.
- **Mobile (< 768px)**: 4-column layout with 1rem gutters and 1.25rem outer margins.

Spacing follows an 8px base rhythmic scale. Generous vertical spacing (`space-2xl`) isolates major showcase sections (Projects, Experience, Tooling, Contact), establishing distinct focus chapters across the narrative flow.

## Elevation & Depth

Visual hierarchy is maintained through subtle luminescence, edge lighting, and calibrated surface shifts rather than muddy black shadows:

- **Base Level (Canvas)**: Solid `#0B1120` without lighting artifacts.
- **Container Level (Cards, Sidebars)**: Solid `#0F172A` with a 1px border colored `rgba(59, 130, 246, 0.12)`.
- **Raised & Hover Level**: Translates Y by -2px, background transitions to `#1E293B`, accompanied by a localized cyan ambient glow: `0 8px 24px -4px rgba(37, 99, 235, 0.25)`. The border illuminates to `rgba(96, 165, 250, 0.4)`.
- **Glass Overlays (Navigation, Drawers)**: `rgba(15, 23, 42, 0.8)` with a 16px backdrop blur (`backdrop-filter: blur(16px)`) and a bottom hairline divider in `rgba(148, 163, 184, 0.1)`.

## Shapes

The design uses a balanced rounded geometry (Level 2):

- **Buttons & Interactive Inputs**: 0.5rem (8px) corner radius for tactile balance.
- **Cards & Showcase Panels**: 1rem (16px) corner radius to create frame-like boundaries around code snippets and mockups.
- **Tech Stack Badges & Status Chips**: Pill-shaped (9999px) for clear delineation against angular containers.

## Components

### Buttons
- **Primary**: Background `#3B82F6` grading subtly to `#2563EB`, text `#FFFFFF`, bold `Inter` weight. Focus ring is an offset 2px glow of `#60A5FA`. Hover provides a soft outer shadow: `0 0 16px rgba(59, 130, 246, 0.4)`.
- **Secondary / Outline**: Transparent background, border 1px `rgba(59, 130, 246, 0.3)`, text `#60A5FA`. On hover, background shifts to `rgba(59, 130, 246, 0.08)` and border brightens.
- **Ghost / Icon**: Monochrome `#94A3B8` icon with hover transitions to `#F8FAFC` and surface `#1E293B`.

### Tech Stack Badges & Chips
- Compact pills utilizing `JetBrains Mono` at `label-sm`.
- Container background `#1E293B`, hairline border in `rgba(56, 189, 248, 0.2)`.
- Text colored `#38BDF8` with an optional leading 6px glowing indicator dot for core competencies.

### Project & Experience Cards
- Background `#0F172A` with a 1px border `rgba(148, 163, 184, 0.1)`.
- Smooth transition (`all 0.2s ease`) to glowing state on hover with `rgba(96, 165, 250, 0.3)` border and depth glow.
- Padding set to `space-lg` (1.5rem) internally.

### Code Blocks & Architecture Windows
- Terminal-inspired header containing mock traffic-light controls (subdued dots in `#334155`) paired with dynamic file path labels using `code-md`.
- Deep background `#070C18` with selective syntax highlighting anchored by electric cyan, sky blue, and subdued slate comments.

### Input Fields (Contact Form)
- Background `#0B1120`, border 1px `rgba(148, 163, 184, 0.2)`, text `#F8FAFC`.
- Focus shifts border to `#3B82F6` with an inner halo `0 0 0 1px #3B82F6`.
- Monospaced field helper labels for an intentional developer-first finish.