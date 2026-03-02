# 🧙‍♂️ Merlin AI Lab Project Dashboard

This dashboard tracks the current status, design decisions, and technical specifications of the Merlin (formerly Pr!esm) high-end landing page.

## 🚀 Project Overview
- **Project Name:** Merlin AI Lab (Project "Pr!esm" during development)
- **Objective:** Create a premium, high-converting landing page for the Merlin Multi-LLM ecosystem.
- **Current Version:** v2.7.1-alpha (Rebranding Phase)
- **SEO Subdomain:** `priesm.ledpa7.com`
- **Last Updated:** 2026-03-02 (Video Demo Refinement & Performance Tuning)

## 💎 Visual & Design Identity
- **Core Aesthetic:** Glassmorphism, Dark Mode (#010101), High-frequency prismatic light.
- **Motion System:** **Prismatic Reveal Suite**
  - **SpectralReveal:** color-splitting ghosting effect for Hero titles, simulating light refraction.
  - **BlurReveal:** High-end "Focusing" effect using Gaussian blur transitions and custom cubic-bezier curves for headers and cards.
  - **Staggered Flow:** 0.05s - 0.1s delay synchronization for sequential content loading.
- **Background Engine:** **Blurry Blobs Engine (v3 High-Performance)**
  - **Motion Engine:** Multiple independent colored spheres (Blobs) with random X/Y/Scale trajectories.
  - **Performance:** Reduced GPU load by replacing giant rotation with individual blob tracking.
  - **Breathing Overlay:** 8s cycle "Breathing" (Opacity 0.6 ↔ 1.0) + Backdrop Blur transitions.
  - **White Highlighting:** Added bright white blobs for luminous, diamond-like refraction.
  - **Prismatic Burst:** Interactive 14-shard explosion (capped at 50 shards for stability).
- **Custom Cursor:** **Refractive Glass Shard**
  - **Visual:** Triangle polygon with backdrop-filter refraction.
  - **Interaction:** Real-time rotation and scaling based on mouse velocity and hover state.
- **Typography:** Inter (Standard) with `rainbow-text` gradients. Optimized leading (`1.15`).
- **Video Presentation:** **Frosted Glass Frame**
  - **Effect:** Deep backdrop blur (backdrop-blur-2xl) with 4px white/20 border.
  - **Optimization:** transform-gpu and memoized component structure.

## 🛠 Feature Checklist
- [x] **Global SEO/GEO:** Implementation of `hreflang` tags (EN, KO, ZH) and expanded JSON-LD (Search Ratings, Author).
- [x] **Branding Standardization:** "Multi-AI" terminology unified across all UI elements and translations.
- [x] **Accessibility (a11y):** `aria-hidden` and `sr-only` tags implemented for screen reader and bot optimization.
- [x] **UI Consistency:** Standardized height for all main feature cards using `h-full` grid logic.
- [x] **UI Simplification:** Simplified Navbar to only include Language Switcher and "Meet Merlin" CTA.
- [x] **Messaging Overhaul:** Simplified "Flagship Features" description for clarity in EN, KO, ZH.
- [x] **Background Refinement:** Removed noise/grain texture and "refraction lines" for a cleaner look.
- [x] **Optimization:** Implemented `contain: paint` and minimized heavy DOM operations in mouse handlers.
- [x] **Git/GitHub:** Latest state pushed to `Ledpa7/priesm` repository (`aff8ee4`).

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
  - [x] Switch to Blurry Blobs Background Engine (High Performance).
  - [x] Restore and Refine Refractive Custom Cursor.
  - [x] Simplify Navigation UI (Navbar cleanup).
  - [x] Standardize Philosophy Section as Full-width Horizontal Divider.
  - [x] Update Global Translations with Simplified "Comparison" messaging.
  - [x] Integrate Merlin Demo Video with Frosted Glass Frame and Hardware Acceleration.
  - [x] State Pushed to Remote GitHub.
  - [ ] (Future) Real-time usage statistics integration.
  - [ ] (Future) Rebranding alignment (Merlin Vision 2026).

---
*Created by Antigravity AI for Jidu Labs*
