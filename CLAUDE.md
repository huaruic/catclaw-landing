# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

CatClaw Landing — the marketing/landing page for **CatClaw**, a local-AI desktop app (the Electron app lives in the parent `paris/` directory). This is a standalone Vite + React + TypeScript project, not part of the Electron build.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Type-check (tsc -b) then Vite production build
npm run lint      # ESLint across all .ts/.tsx files
npm run preview   # Preview production build locally
```

No test runner is configured.

## Architecture

- **Vite + React 19 + TypeScript** — single-page landing site
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (no `tailwind.config` file — config is in `src/index.css` using `@theme`)
- **framer-motion** for scroll/entrance animations
- **lucide-react** for icons

### Custom Design Tokens

Defined in `src/index.css` under `@theme`:
- Colors: `cat-orange`, `cat-cream`, `cat-brown`, `cat-accent`, `cat-shadow`
- Shadows: `shadow-cozy`, `shadow-cozy-hover`
- Font: Quicksand (via `@fontsource/quicksand`)

### Key Files

- `src/App.tsx` — Page layout: Navbar → Hero → Features section → Footer
- `src/components/Hero.tsx` — Main hero with CTA buttons, cat decorations
- `src/components/Navbar.tsx` — Fixed floating navbar
- `src/components/ui/PuffyButton.tsx` — Shared button component with variants
- `src/components/ui/CatIcons.tsx` — SVG cat-themed icons (PawLogo, PeekingCat, etc.)

### TypeScript Config

Two tsconfigs referenced by the root `tsconfig.json`:
- `tsconfig.app.json` — browser code in `src/`
- `tsconfig.node.json` — Vite config / node-side tooling

Type-check with: `tsc -b` (runs both).
