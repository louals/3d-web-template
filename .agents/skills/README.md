# Workspace Skills Guide

This directory (`.agents/skills/`) contains specialized skills that guide the AI agent during development. Skills act as executable domain playbooks, providing deep domain knowledge, strict design guidelines, and structured review processes.

---

## 🧭 Quick Reference Catalog

### 🎨 Design & Animation Skills (Design Engineering)

| Skill | Primary Focus | Best Trigger Prompts | Supporting Files |
| :--- | :--- | :--- | :--- |
| [**`animate`**](./animate/SKILL.md) | Crafts animations from scratch using Emil Kowalski's philosophy (timing, custom curves, restraint). | *"Animate this modal entrance"*, *"Add a smooth transition to this button"*, *"Make this feel alive"* | [`RECIPES.md`](./animate/RECIPES.md) |
| [**`animation-performance`**](./animation-performance/SKILL.md) | Keeps animations at 60fps; avoids layout thrashing, audits paint costs and frame budgets. | *"Why is this animation stuttering?"*, *"Optimize this transition"*, *"Check if this drops frames"* | — |
| [**`apple-design`**](./apple-design/SKILL.md) | Apple WWDC fluid interface principles: gesture tracking, momentum, springs, interruptibility. | *"Make this swipe gesture feel like iOS"*, *"Build a fluid sheet"*, *"Add Apple-style spring physics"* | — |
| [**`break-ui`**](./break-ui/SKILL.md) | Stress-tests UI against realistic worst-case data (extreme text lengths, missing data, big numbers). | *"Try to break this component"*, *"Stress-test this card"*, *"Test with worst-case data"* | [`CATALOG.md`](./break-ui/CATALOG.md) |
| [**`emil-design-eng`**](./emil-design-eng/SKILL.md) | High-craft design engineering, typography, visual hierarchy, micro-interactions, layout polish. | *"Critique the UI craft here"*, *"Polish this component to production standard"*, *"Improve the visual feel"* | — |
| [**`find-animation-opportunities`**](./find-animation-opportunities/SKILL.md) | Identifies UI moments that genuinely benefit from motion (and explicitly filters out bad ideas). | *"Where could we add motion here?"*, *"Find animation opportunities in this screen"* | — |
| [**`mobile-native`**](./mobile-native/SKILL.md) | Eliminates mobile web "tells" (tap delay, highlight flashes, viewport `100vh` bug, safe-area notches). | *"Make this feel native on mobile"*, *"Fix the mobile touch delay"*, *"Handle mobile notch and safe areas"* | — |
| [**`review-animations`**](./review-animations/SKILL.md) | Brutal craft review of motion code; defaults to flagging errors (unjustified motion, sluggish easings). | *"Review my animation code"*, *"Run review-animations on this diff"* | [`STANDARDS.md`](./review-animations/STANDARDS.md) |

### 🛠️ Workspace & Engineering Skills

| Skill | Primary Focus | Best Trigger Prompts |
| :--- | :--- | :--- |
| [**`web-design-reviewer`**](./web-design-reviewer/SKILL.md) | Visual inspection of running apps to find responsive, accessibility, and layout issues. | *"Review the website design"*, *"Check the UI for layout bugs"*, *"Find accessibility issues"* |
| [**`refactor-plan`**](./refactor-plan/SKILL.md) | Step-by-step risk mitigation and planning for multi-file code refactors before code edits. | *"Create a refactor plan for..."*, *"Plan this component migration"* |
| [**`create-project-issue`**](./create-project-issue/SKILL.md) | Drafts structured GitHub issues conforming to project conventions. | *"Draft an issue for..."*, *"Create a bug report issue"* |

---

## 🚀 How to Use These Skills

### 1. Automatic Activation (Natural Language)
The agent automatically reads each skill's `description` at startup. When your prompt matches what the skill does, the agent will dynamically activate that skill without you needing to memorize commands.

**Examples:**
- *"Can you animate this dropdown menu opening?"* ➔ Triggers **`animate`**.
- *"This carousel feels laggy on Safari."* ➔ Triggers **`animation-performance`**.
- *"Throw the worst data you can at this user profile card."* ➔ Triggers **`break-ui`**.
- *"Make our bottom sheet behave like an iOS native sheet."* ➔ Triggers **`apple-design`**.

### 2. Explicit Mention (Guaranteed Activation)
You can directly instruct the agent to use a specific skill by name:
- *"Use the `emil-design-eng` skill to polish this landing page hero."*
- *"Run `break-ui` on `src/components/UserProfile.tsx`."*
- *"Use `review-animations` to check our Framer Motion transitions."*

> [!NOTE]
> **`review-animations` configuration:**
> This skill includes `disable-model-invocation: true` in its frontmatter by default. This ensures the agent only activates strict motion audits when you explicitly ask for an animation review, rather than firing unprompted on casual questions.

---

## 🔄 Recommended End-to-End Workflows

### Scenario A: Building a New Interactive Component
```
[1] find-animation-opportunities  ──>  [2] animate  ──>  [3] animation-performance
     Identify high-value motion          Implement clean         Verify compositor budget
     & reject excessive motion           custom curves           (60fps, no layout shift)
```

1. **Discover**: *"Look at this checkout screen. Where does motion actually make sense?"* (`find-animation-opportunities`)
2. **Implement**: *"Now build the order completion checkmark animation."* (`animate`)
3. **Optimize**: *"Make sure it won't drop frames on low-powered mobile devices."* (`animation-performance`)

---

### Scenario B: Stress-Testing & Hardening UI
```
[1] break-ui  ────────────────────>  [2] mobile-native  ──────>  [3] emil-design-eng
     Feed extreme strings,               Fix touch targets,          Elevate visual hierarchy,
     zero counts, overflow data          viewports, & safe areas     borders, and micro-details
```

1. **Break it**: *"Stress-test this comment list with unbreakable strings and missing avatars."* (`break-ui`)
2. **Mobile check**: *"Ensure tapping a comment has no 300ms tap delay or unwanted highlight."* (`mobile-native`)
3. **Polish**: *"Review the spacing and typography using Emil Kowalski's guidelines."* (`emil-design-eng`)

---

### Scenario C: Auditing & Reviewing Code
1. Call **`review-animations`** to critique existing CSS/Framer transitions against strict standards (`STANDARDS.md`).
2. Run **`web-design-reviewer`** for live visual inspections in the browser.

---

## 📁 Companion Reference Files

Several skills include companion markdown files containing exact constants, formulas, and edge cases:
- [`animate/RECIPES.md`](./animate/RECIPES.md): Code recipes for drawers, toasts, popovers, tabs, and layout transitions.
- [`review-animations/STANDARDS.md`](./review-animations/STANDARDS.md): Easing curve catalog (`cubic-bezier` values), duration guidelines (<300ms), and spring stiffness/damping charts.
- [`break-ui/CATALOG.md`](./break-ui/CATALOG.md): Edge-case test vectors including long names, Unicode, RTL strings, and extreme numeric boundaries.
