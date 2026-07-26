# 🧙‍♂️ Merlin AI Lab Project Dashboard

This dashboard tracks the current status, design decisions, and technical specifications of the Merlin (formerly Pr!esm) high-end landing page.

## 🚀 Project Overview
- **Project Name:** Merlin AI Lab (Project "Priesm")
- **Objective:** Create a premium, high-converting landing page for the Priesm Multi-LLM ecosystem and Jidu Labs services.
- **Current Version:** v3.0.0 (Service Spectrum Cards & Brand Identity Integration)
- **SEO Subdomain:** `priesm.ledpa7.com`
- **Last Updated:** 2026-07-27 (Spectrum 5 Service Cards, Brand Key Colors & Live Links Sync)

## 💎 Visual & Design Identity
- [x] **Milky Breathing Atmosphere:** Slow (15s), meditative white pulse behind content for premium depth.
- [x] **Prismatic Click Particles:** High-performance, GPU-accelerated particle system.
- [x] **Refractive Cursor:** Custom pointer following with dynamic rotation and scale.
- [x] **Glassmorphism UI:** Translucent frosted glass cards and navigation bars.
- [x] **Spectrum Service Cards:** 5 1:1 square cards displaying Jidu Labs core AI/Software services.
- [x] **Translucent Key Color Hovers:** 25~30% translucent brand glass backgrounds with matching neon glow.
- [x] **Crisp Text Key Color Highlights:** Card titles and action links highlight in vivid brand HEX colors on hover.
- [x] **Official Brand Logos:** Integrated official logo assets for all 5 services (Keysor tuned to 80% scale).

## 🧪 Technical Stack
- **Framework:** React + Vite
- **Styling:** Tailwind CSS + Vanilla CSS Custom Glassmorphism
- **Animation:** Framer Motion (Optimized for 60fps)
- **Icons & Logos:** Lucide React + Official Brand SVGs/PNGs (`public/images/logos/`)
- **SEO & I18n:** Dynamic Meta tags, JSON-LD Schema, Trilingual support (KO / EN / ZH)

## 📍 Recent Accomplishments (2026-07-27)
- [x] **Spectrum Section Overhaul (5 Core Services)**:
  - Transformed fixed 3-pillar layout into 5 dynamic 1:1 square service cards (`aspect-square`).
  - Added official titles and descriptions across 3 languages (KO/EN/ZH) for:
    1. **Doodle Log**: AI 그림 일기 서비스
    2. **전자렌지30초**: 아이디어 바이럴 컨텐츠 실험 브랜드
    3. **Keysor**: 키보드 마우스 컨트롤 PC 유틸리티
    4. **유선생**: 유튜브 기반 AI 커리큘럼 생성 서비스
    5. **Vibe Gallery**: 바이브 코더 전용 프로젝트 갤러리 커뮤니티
- [x] **Official Logo Assets & Scaling**:
  - Extracted official logo files into `public/images/logos/`:
    - `doodlelog_logo.png`, `mw30_logo.svg`, `keysor_logo.svg`, `ut_logo.svg`, `vibeGallery.svg`
  - Disabled hover zoom on logos to maintain visual stability.
  - Adjusted Keysor logo size to exactly 80% (`scale: 0.8`) via inline transform.
- [x] **Brand Key Colors & Glassmorphism Hover**:
  - Matched exact codebase brand HEX colors:
    - **Doodle Log**: Rose Pink (`#FF8BA7` / `#FF407D`)
    - **전자렌지30초**: Microwave Orange (`#EE5B34`)
    - **Keysor**: Neon Cyber Green (`#2FFFAD` / `#00B86E`)
    - **유선생**: EdTech Blue (`#3B82F6` / `#2563EB`)
    - **Vibe Gallery**: Neon Violet (`#1A0B2E` / `#9333EA`)
  - Configured 25~30% translucent glass hover backgrounds (`backdrop-blur-xl`) with neon glow shadows and vivid text color highlights.
- [x] **Live External Link Routing**:
  - Connected each card to its live domain (`https://doodlelog.ledpa7.com/`, `https://www.instagram.com/microwave.30/`, `https://keysor.ledpa7.com/`, `https://ut.ledpa7.com/`, `https://vibegallery.ledpa7.com/main`).
- [x] **Performance Audit**:
  - Conducted full bottleneck check (GPU blur, particle state frequency, resize listeners).
  - Rated overall severity at **1.5 / 5.0 (Very Clean & Fast)** with zero build warnings.
- [x] **Git Repository Sync**:
  - Cleaned build artifacts and pushed all code updates to `origin/main` (`d13b3de`).

---
*Created by Antigravity AI for Jidu Labs*
