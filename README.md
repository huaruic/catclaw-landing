# CatClaw Landing

The official landing page for [CatClaw](https://github.com/huaruic/catclaw) — a cozy desktop home for local AI agents.

## Features

- **i18n** — Chinese / English toggle with react-i18next
- **Dark Mode** — System-following + manual toggle, matching CatClaw's warm dark theme
- **Cat-themed UI** — Paw cursor, cursor trail, micro-animations (tail sway, ear wiggle, paw stretch)
- **Easter Egg** — Type "meow" anywhere on the page

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- react-i18next

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build    # Type-check + production build
npm run preview  # Preview production build
npm run lint     # ESLint
```

## Deployment

Deployed on [Netlify](https://www.netlify.com/). Pushes to `master` trigger automatic builds.

Build settings:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

## License

MIT
