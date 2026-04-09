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
- **react-i18next** for i18n (English + Chinese), translations in `src/i18n/en.json` and `src/i18n/zh.json`

### Dark Mode

Uses a `useTheme` hook (`src/hooks/useTheme.ts`) that toggles a `.dark` class on `<html>`. Light/dark color tokens are CSS custom properties (`--raw-cat-*`) defined in `src/index.css` under `:root` and `.dark`. Tailwind picks them up via `@theme` indirection (`--color-cat-*` → `--raw-cat-*`). The custom variant `@custom-variant dark (&:where(.dark, .dark *))` enables `dark:` utility classes.

### Custom Design Tokens

Defined in `src/index.css` under `@theme`:
- Colors: `cat-orange`, `cat-accent`, `cat-bg`, `cat-fg`, `cat-surface`, `cat-surface-alt`, `cat-muted`, `cat-border`, `cat-shadow-color`
- Shadows: `shadow-cozy`, `shadow-cozy-hover`
- Animations: `tail-sway`, `paw-stretch`, `ear-wiggle`
- Font: Quicksand (via `@fontsource/quicksand`)

### Page Structure

`src/App.tsx` composes the full page: Navbar → Hero → Features → Privacy → Open Source → Footer. Each section uses framer-motion `whileInView` for scroll-triggered entrance animations.

### i18n

All user-facing strings go through `t()` from `react-i18next`. Language is auto-detected from `navigator.language` (falling back to English) and persisted in `localStorage('lang')`. Add new keys to both `src/i18n/en.json` and `src/i18n/zh.json`.

### Deployment

Deployed on Netlify. Pushes to `master` trigger automatic builds. Config in `netlify.toml` — build command `npm run build`, publish directory `dist`, SPA fallback redirect.

### TypeScript Config

Two tsconfigs referenced by the root `tsconfig.json`:
- `tsconfig.app.json` — browser code in `src/`
- `tsconfig.node.json` — Vite config / node-side tooling

Type-check with: `tsc -b` (runs both).

## Code Style

TypeScript with single quotes, no semicolons, 2-space indent (inherited from parent project conventions).
