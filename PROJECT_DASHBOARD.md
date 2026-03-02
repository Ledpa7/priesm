# 🧙‍♂️ Merlin AI Lab Project Dashboard

This dashboard tracks the current status, design decisions, and technical specifications of the Merlin (formerly Pr!esm) high-end landing page.

## 🚀 Project Overview
- **Project Name:** Merlin AI Lab (Project "Pr!esm" during development)
- **Objective:** Create a premium, high-converting landing page for the Merlin Multi-LLM ecosystem.
- **Current Version:** v2.7.1-alpha (Rebranding Phase)
- **SEO Subdomain:** `priesm.ledpa7.com`
- **Last Updated:** 2026-02-23 (Optimization Phase)

## 💎 Visual & Design Identity
- **Core Aesthetic:** Glassmorphism, Dark Mode (#010101), High-frequency prismatic light.
- **Motion System:** **Prismatic Reveal Suite**
  - **SpectralReveal:** color-splitting ghosting effect for Hero titles, simulating light refraction.
  - **BlurReveal:** High-end "Focusing" effect using Gaussian blur transitions and custom cubic-bezier curves for headers and cards.
  - **Staggered Flow:** 0.05s - 0.1s delay synchronization for sequential content loading.
- **Background Engine:** **Infinite Circulating Rainbow (v2 Optimization)**
  - **Spectral Palette:** Full 7-color Prismatic Spectrum (Red, Orange, Yellow, Green, Blue, Indigo, Purple).
  - **Motion Engine:** Infinite 360° rotation (55s cycle) using `conic-gradient` & JS Engine.
  - **Breathing Overlay:** 5s cycle "Breathing" (Opacity 0.5 ↔ 1.0) + Refraction Lines (5s cycle).
  - **Stability:** Fixed "Radial" center rotation with `contain: strict` and GPU acceleration.
  - **Prismatic Burst:** Interactive 14-shard explosion on click with physics simulation.
- **Typography:** Inter (Standard) with `rainbow-text` gradients. Optimized leading (`1.15`).

## 🛠 Feature Checklist
- [x] **Global SEO/GEO:** Implementation of `hreflang` tags (EN, KO, ZH) and expanded JSON-LD (Search Ratings, Author).
- [x] **Branding Standardization:** "Multi-AI" terminology unified across all UI elements and translations.
- [x] **Accessibility (a11y):** `aria-hidden` and `sr-only` tags implemented for screen reader and bot optimization.
- [x] **UI Consistency:** Standardized height for all main feature cards using `h-full` grid logic.
- [x] **Logo Refinement:** Balanced 40px icon scale with precise vertical text alignment for "Merlin AI Lab".
- [x] **Multi-language Support:** English, Korean, Chinese (Simplified).
- [x] **Hero Section:** Responsive Korean wording: "질문은 한번, 여러 AI를 동시 비교".
- [x] **Background Engine:** Infinite Rainbow Circulation with random target logic.
- [x] **Optimization:** React.memo components & GPU-accelerated backdrop filters.
- [x] **Git/GitHub:** Latest state pushed to `Ledpa7/priesm` repository.

## 🧪 Technical Stack
- **Framework:** React + Vite + TypeScript
- **Styling:** Tailwind CSS + Vanilla CSS (for complex animations)
- **Icons:** Lucide-React
- **Animations:** Framer Motion (Transitions) + JS Engine (Dynamic Background)
- **Deployment Port:** Consistent on `5173`.

## 📍 Current State & Next Steps
- **Branch/Folder:** `6-priesm-homepage`
- **Active Task:** Completed Global SEO & Prismatic Motion Overhaul.
- **Milestones:** 
  - [x] Implement Infinite Rainbow Circulation.
  - [x] Standardize Multi-AI Branding (Global focus).
  - [x] Deploy Advanced Prismatic Motion (Spectral & Blur Reveal).
  - [x] Achieve Pixel-perfect Logo & Grid Alignment.
  - [x] State Pushed to Remote GitHub (`39ab722` -> `e53e7ea`).
  - [x] Optimize Hero Typography and Korean Content.
  - [x] Cleaned up SEO metadata and Browser Tab titles.
  - [ ] (Future) Real-time usage statistics integration.
  - [ ] (Future) Rebranding alignment (Merlin Vision 2026).

---
*Created by Antigravity AI for Jidu Labs*
