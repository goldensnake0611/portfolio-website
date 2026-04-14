# Mark Anthony Magleo — Portfolio

A modern, romantic-yet-professional developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. The design focuses on soft color transitions, elegant typography, and subtle motion to keep the experience luxurious but minimal.

## Features

- Smooth-scrolling navbar with responsive mobile menu
- Hero section with romantic/professional copy
- About section with categorized skill highlights
- Experience timeline layout
- Projects grid with hover interactions
- Resume section with download link
- Contact section with a “letter”-styled form
- Subtle scroll-triggered animations with Framer Motion
- Runtime error boundary (avoids silent “white screen” failures)

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- lucide-react (icons)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

If you need the server accessible from another device/network:

```bash
npm run dev -- --host 0.0.0.0
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Common Issues (White Screen / Blank Page)

If the page is blank, it usually means either:

1) You opened the wrong port (Vite will automatically pick a new port if the default is busy)
- Always open the exact URL printed by Vite in the terminal (example: `Local: http://localhost:5176/`)

2) The app hit a runtime error before rendering
- This project includes an error boundary that shows an on-page error card instead of a silent blank screen
- Open DevTools → Console to see the full error message and stack trace

3) A browser extension is blocking scripts/styles (common with ad blockers)
- Try an Incognito window with extensions disabled

## Customize Content (Resume → Website)

All primary portfolio content is centralized here:

- Data: [src/data.ts](file:///root/snake/portfolio/src/data.ts)

Update these sections without touching UI components:

- `hero`: name, title, tagline, short bio
- `skills`: categorized skill lists
- `experience`: roles and simplified summaries
- `projects`: titles, descriptions, tags
- `contact`: email and location

## Resume PDF

The Resume section links to `/resume.pdf`.

To enable download:

1) Put your resume file at:
   - `public/resume.pdf`
2) Rebuild/redeploy

## Styling System

Theme tokens live in:

- Tailwind config: [tailwind.config.js](file:///root/snake/portfolio/tailwind.config.js)

Key tokens:

- Colors: `blush-*`, `cream`, `dark`, `dark-accent`, `dark-muted`
- Typography:
  - Headings: `font-serif` (Playfair Display)
  - Body: `font-sans` (Inter)
- Shadow: `shadow-soft`, `shadow-soft-lg`
- Background: `bg-gradient-romantic`

Global base styles:

- [src/index.css](file:///root/snake/portfolio/src/index.css)

## Project Structure

```text
src/
  components/
    About.tsx
    Contact.tsx
    ErrorBoundary.tsx
    Experience.tsx
    Hero.tsx
    Navbar.tsx
    Projects.tsx
    Resume.tsx
  data.ts
  App.tsx
  main.tsx
  index.css
```

## Deploy

This is a standard Vite static build.

- Output directory: `dist/`
- Recommended platforms: Vercel, Netlify, Cloudflare Pages, GitHub Pages (with Vite base config if needed)

Steps (generic):

1) Build command: `npm run build`
2) Output directory: `dist`

## Quality Checks

Run lint:

```bash
npm run lint
```
