# Justin Rosales — Portfolio Website

A minimal developer portfolio built with **Next.js 16 (App Router + TypeScript)**, styled with the **Catppuccin Mocha** color palette, configured for **Static Export** (`output: 'export'`), and deployed with **Vercel**. Features a single-page home layout with featured projects, work experience, and education, alongside a dedicated `/projects` archive page.

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
- **Deployment:** Deployed with Vercel (Static Export)

## Repository Structure

```text
portfolio-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Catppuccin Mocha theme tokens & base styles
│   │   ├── layout.tsx           # Root layout, OpenGraph metadata, and hydration config
│   │   ├── page.tsx             # Main page (Hero, Experience, Featured Projects, Education)
│   │   └── projects/
│   │       └── page.tsx         # All-projects 3-column archive page
│   ├── components/
│   │   ├── icons/
│   │   │   └── BrandIcons.tsx   # GitHub & LinkedIn inline SVG icons
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky navigation bar with active section indicator
│   │   │   └── Footer.tsx       # Footer with copyright & social links
│   │   ├── projects/
│   │   │   └── ProjectCard.tsx  # Reusable project card with link actions & tech tags
│   │   └── sections/
│   │       ├── Hero.tsx         # Bio, title, university, social & resume links
│   │       ├── Experience.tsx   # Work & research timeline with XYZ bullet points
│   │       ├── Projects.tsx     # Featured projects grid with link to archive
│   │       └── Education.tsx    # Vertically stacked education cards with coursework tags
│   ├── data/
│   │   ├── portfolio.ts         # Single source of truth for all content
│   │   └── portfolio.test.ts    # Data model integrity tests
│   ├── hooks/
│   │   └── useActiveSection.ts  # IntersectionObserver for section scroll tracking
│   ├── types/
│   │   └── portfolio.ts         # TypeScript data interfaces (Profile, Project, Education, etc.)
│   └── test/
│       └── setup.ts             # Vitest test setup
└── public/
    └── resume.pdf               # Downloadable resume PDF
```

## Updating Portfolio Content

All content is centralized in **[`src/data/portfolio.ts`](src/data/portfolio.ts)**:
- **`profile`**: Name, bio, title, university, email, social links.
- **`experiences`**: Roles, companies/laboratories, date ranges, bullet points.
- **`projects`**: Project titles, descriptions, tech stack arrays, `featured` boolean flag, and GitHub/Live/Devpost URLs.
- **`education`**: School names, degrees, date ranges, locations, and relevant coursework lists.
- **Resume**: Replace `public/resume.pdf` to update the downloadable PDF link.

## Available Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Runs development server on `http://localhost:3000` |
| `npm run build` | Builds static export to the `out/` directory |
| `npm run test` | Runs Vitest unit & integration test suite |
| `npm run lint` | Runs ESLint checks |
| `npm run check` | Runs full CI pipeline (`npm run lint && npm test && npm run build`) |
