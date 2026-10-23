# Creative 3D Web Starter & Template

> **This is a production-ready template for high-performance 3D websites and creative web experiences.** Built on modern **React 19**, **Three.js**, **@react-three/fiber v9**, **@react-three/drei v10**, **Tailwind CSS v4**, **Framer Motion**, **GSAP**, **Zustand v5**, and a complete suite of **AI engineering agents**.

---

## 1. Step 1: Verify Everything Works (`npm run dev`)

Before writing any code or deleting anything, verify that your WebGL context, shaders, React 19 dependencies, and styles run smoothly.

```bash
# Install dependencies (if not already done)
npm install

# Start local dev server
npm run dev
```

### What You Should See:
When you open `http://localhost:5173`, you should immediately see:
1. **Floating 3D Torus Knot**: An animated, twisting metallic purple mesh floating with ambient dust sparkles.
2. **Interactive Orbit Controls**: Click and drag anywhere on the canvas to rotate the 3D scene in real-time.
3. **Glassmorphic HUD (OverlayUI)**:
   - **Header**: Top navigation bar with badge and audio toggle.
   - **Hero Text**: Smoothly animated headline (*"Next-gen creative web experience"*).
   - **Bottom Control Dock**:
     - **Wireframe Button**: Toggles between solid metallic mesh and wireframe mode.
     - **Speed Buttons (`0.5x`, `1x`, `2x`)**: Dynamically accelerates or slows down the 3D rotation.
     - **Color Swatches**: Instantly changes the 3D material color via reactive Zustand state.
     - **Sound Effects**: Audio synthesized beeps (when unmuted) via Web Audio API.

> [!TIP]
> If you see and interact with all of the above, **your entire 3D stack, Tailwind v4 engine, React 19 Fiber pipeline, and state bindings are 100% verified and operating with zero conflicts.**

---

## 2. What to Delete / Replace to Start Your Own Project

Every file contains explicit `👉 TEMPLATE DEMO CODE` comments so you know exactly where to make edits. Here is the straightforward checklist to make this project your own:

### Step-by-Step Cleanup Checklist:

| File | What to Do | Details |
| :--- | :--- | :--- |
| [`src/components/Scene3D.tsx`](./src/components/Scene3D.tsx) | **Replace Demo Mesh** | Keep `<Canvas>`, `<ambientLight>`, and camera settings. Delete `InteractiveOrb` and insert your own 3D models (e.g. `useGLTF('/model.glb')`), shaders, or custom geometries. |
| [`src/components/OverlayUI.tsx`](./src/components/OverlayUI.tsx) | **Replace or Delete** | This is the demo control dock. Delete or replace this entire component with your actual website's navigation, hero section, or layout. |
| [`src/store/useAppStore.ts`](./src/store/useAppStore.ts) | **Reset State** | Delete the demo keys (`wireframe`, `rotationSpeed`, `primaryColor`) and define state variables tailored to your application. |
| [`src/App.tsx`](./src/App.tsx) | **Assemble Your App** | Retain the split architecture (3D canvas in background + HTML on top) or replace with your routes / pages. |
| [`src/utils/audio.ts`](./src/utils/audio.ts) | *Optional* | Keep if you want low-latency synthesizer sound effects; delete if audio is not required. |
| [`src/shaders/`](./src/shaders/) | *Ready for use* | Blank directory ready for `.glsl`, `.vert`, and `.frag` shader files (preconfigured via `vite-plugin-glsl`). |

---

## 3. Built-in AI Agent Ecosystem (`.agents/`)

This template includes a built-in suite of **specialized AI Agent Skills and engineering instructions** located in `.agents/`. Any modern AI coding assistant (Antigravity, Gemini, Claude, Cursor) automatically reads these playbooks to design, animate, and optimize your 3D website.

### Included Agent Skills:

| Agent Skill | Purpose | Example Prompts |
| :--- | :--- | :--- |
| **`animate`** | High-craft UI and component motion based on Emil Kowalski principles (restraint, custom easing curves, interruption handling). | *"Animate this menu entrance"*, *"Add fluid transitions to the cards"* |
| **`animation-performance`** | Keeps animations at a solid 60fps; checks layout thrashing, paint costs, compositor layers, and frame budgets. | *"Why is this animation stuttering?"*, *"Optimize 3D canvas overlay performance"* |
| **`apple-design`** | Implements fluid gestures, momentum, springs, and depth inspired by Apple WWDC design principles. | *"Make this drawer gesture feel like iOS"*, *"Add Apple-style spring physics"* |
| **`emil-design-eng`** | Design engineering standards: optical alignment, micro-interactions, typography, and visual hierarchy. | *"Polish this UI to top-tier design engineering standards"* |
| **`mobile-native`** | Strips out mobile web tells (tap lag, highlight flashes, `100vh` scroll jumping, notch safe-areas). | *"Fix the mobile touch delay"*, *"Make this feel like a native mobile app"* |
| **`break-ui`** | Stress-tests components against extreme worst-case data (overflowing text, missing props, edge cases). | *"Stress-test this card component with worst-case data"* |
| **`find-animation-opportunities`** | Identifies strategic moments that benefit from animation without adding clutter. | *"Where can we add subtle motion to improve UX?"* |
| **`review-animations`** | Rigorous motion audit against strict easing and duration standards. | *"Review the animations in this component"* |
| **`web-design-reviewer`** | Live visual and accessibility inspection of running applications. | *"Review the design layout and check for visual glitches"* |
| **`refactor-plan`** | Multi-file architectural refactoring planning with zero regression risk. | *"Plan a refactor to split this 3D scene into modular chunks"* |

### Included Instructions:
- **`.agents/instructions/a11y.instructions.md`**: Complete WCAG 2.1 AA accessibility guidelines for canvas overlays and interactive controls.

---

## Tech Stack & Key Upgrades

- **React 19 Native**: Preconfigured with Three.js (`^0.186.1`), `@react-three/fiber` (`^9.8.2`), and `@react-three/drei` (`^10.7.9`) with zero version conflicts or peer dependency hacks.
- **Tailwind CSS v4**: Ultra-fast CSS-first configuration via `@tailwindcss/vite` (no bulky `postcss.config.js` or `tailwind.config.js`).
- **GLSL Shaders**: Out-of-the-box import support for `.glsl`, `.vert`, and `.frag` files.
- **Global State**: Zustand v5 for reactive sync between 3D Canvas and 2D DOM elements.
- **Motion & Physics**: Framer Motion (v12) and GSAP (v3.15).
- **Sound**: Web Audio synthesizer utility + Howler.

---

## Directory Structure

```text
creative-3d/
├── .agents/                    # 🤖 Built-in Agent skills & domain guidelines
│   ├── skills/                 # Motion, performance, Apple-design & UI skills
│   └── instructions/           # A11y & design guidelines
├── src/
│   ├── components/
│   │   ├── Scene3D.tsx         # 3D Canvas & WebGL objects (replace demo mesh)
│   │   └── OverlayUI.tsx       # 2D HTML/Tailwind HUD (replace with your UI)
│   ├── store/
│   │   └── useAppStore.ts      #  Zustand global state (bridge 3D & 2D)
│   ├── shaders/                #  Custom GLSL shaders directory
│   ├── utils/
│   │   └── audio.ts            #  Web Audio synthesizer helper
│   ├── App.tsx                 # Root layout mounting 3D + UI
│   ├── index.css               #  Tailwind v4 & Glassmorphism styles
│   └── main.tsx                # Entry point
├── package.json
└── README.md
```

---

## Commands

```bash
# Start development server
npm run dev

# Typecheck and build production bundle
npm run build

# Preview production build locally
npm run preview
```
