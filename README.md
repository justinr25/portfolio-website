# Justin Rosales — Portfolio Website

A minimal, single-page developer portfolio built with **Next.js 16 (App Router + TypeScript)**, styled with the **Catppuccin Mocha** color palette, and configured for **Static Export** (`output: 'export'`).

## Quick Start

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:3000)
npm run dev

# Run full engineering check (lint + unit tests + static export build)
npm run check
```

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19 & TypeScript
- **Styling:** Tailwind CSS v4 & custom Catppuccin Mocha design system (`src/app/globals.css`)
- **Icons:** Lucide Icons & Custom SVG Brand Icons (`src/components/icons/BrandIcons.tsx`)
- **Testing:** Vitest + React Testing Library + jsdom
- **Deployment:** Static Export (Pure HTML/CSS/JS output)

## Repository Structure

```text
portfolio-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Catppuccin Mocha theme tokens & base styles
│   │   ├── layout.tsx            # Root layout & OpenGraph metadata
│   │   └── page.tsx              # Main page compositing all sections
│   ├── components/
│   │   ├── icons/
│   │   │   └── BrandIcons.tsx    # GitHub & LinkedIn inline SVG icons
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky navigation bar with active section indicator
│   │   │   └── Footer.tsx        # Footer with copyright & social links
│   │   └── sections/
│   │       ├── Hero.tsx          # Bio, title, university, social & resume links
│   │       ├── Experience.tsx    # Work & research timeline with XYZ bullet points
│   │       └── Projects.tsx      # Minimalist project grid with tech pills & external links
│   ├── data/
│   │   ├── portfolio.ts         # Single source of truth for all content (bio, jobs, projects)
│   │   └── portfolio.test.ts    # Data model integrity tests
│   ├── hooks/
│   │   └── useActiveSection.ts  # IntersectionObserver for section scroll tracking
│   ├── types/
│   │   └── portfolio.ts         # TypeScript data interfaces
│   └── test/
│       └── setup.ts             # Vitest test setup
└── public/
    └── resume.pdf               # Downloadable resume PDF
```

## Updating Portfolio Content

All content is centralized in **[`src/data/portfolio.ts`](src/data/portfolio.ts)**:
- **`profile`**: Name, bio, title, university, email, social links.
- **`experiences`**: Roles, companies/laboratories, date ranges, bullet points.
- **`projects`**: Project titles, descriptions, tech stack arrays, GitHub/Live/Devpost links.
- **Resume**: Replace `public/resume.pdf` to update the downloadable PDF link.

## Available Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Runs development server on `http://localhost:3000` |
| `npm run build` | Builds static export to the `out/` directory |
| `npm run test` | Runs Vitest unit & integration test suite |
| `npm run lint` | Runs ESLint checks |
| `npm run check` | Runs full CI pipeline (`npm run lint && npm test && npm run build`) |
