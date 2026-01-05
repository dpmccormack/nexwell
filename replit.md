# NexWell Health Partners Landing Page

## Overview
A modern, conversion-focused landing page for NexWell Health Partners, a Management Services Organization (MSO) that provides operational, financial, and technology services to specialty medical practices.

## Tech Stack
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure
```
src/
├── app/
│   ├── globals.css    # Global styles and Tailwind theme
│   ├── layout.tsx     # Root layout with metadata
│   └── page.tsx       # Main page component
└── components/
    ├── Navbar.tsx         # Fixed navigation
    ├── Hero.tsx           # Hero section with CTA
    ├── ProblemStatement.tsx  # Stats section
    ├── Services.tsx       # 6 service cards
    ├── WhyNexWell.tsx     # Value proposition
    ├── HowItWorks.tsx     # 4-step process
    ├── SpecialtyFocus.tsx # Medical specialties
    ├── Results.tsx        # Stats + testimonials
    ├── FAQ.tsx            # Accordion FAQ
    ├── FinalCTA.tsx       # Contact form
    └── Footer.tsx         # Site footer
```

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Start**: `npm run start`

## Brand Colors
- Primary Teal: #1F7A8C
- Deep Teal: #134B54
- Accent Gold: #C9A227
- Light Gold: #E8D5A3
- Light Gray: #F5F7F9

## Recent Changes
- January 5, 2026: Initial project setup and all 10 sections implemented
