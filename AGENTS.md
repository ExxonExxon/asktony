# AskTony — AGENTS.md

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Preview built site |

No test/lint/typecheck scripts exist.

## Stack

- **Astro 6** + `@astrojs/tailwind` (static site generation, no SSR)
- **Tailwind CSS 3.4** via `tailwind.config.mjs` (ESM config)
- **SCSS** via `src/styles/global.scss`
- **Fonts**: Inter (Google Fonts import) + Ubuntu (local files in `public/fonts/`)

## Color palette

All brand colors are in `tailwind.config.mjs` under `theme.extend.colors`. The custom prefix is `brand-*`. Key values:

- `brand-base` (#08080c) — page background
- `brand-dark` / `brand-surface` / `brand-elevated` — layered surfaces
- `brand-accent` (#6366f1, indigo) — primary accent
- `brand-muted` (#ebebef) — body paragraph text
- `brand-dim` (#a1a1aa) — secondary/less prominent text

**Gotcha**: `@apply text-brand-muted` in SCSS works. The `theme('colors.brand-*')` function in SCSS can silently fail at dev time if color names have certain characters — prefer `@apply` over `theme()` calls.

## Component conventions

- **Section labels**: `text-xs font-bold text-brand-accent uppercase tracking-[0.15em]`
- **Body text**: `text-readable` class (defined in `global.scss` as `text-brand-muted` with `text-base lg:text-lg`)
- **Headings**: `heading-xl` / `heading-lg` / `heading-md` classes
- **Buttons**: `btn-primary` (filled indigo pill) or `btn-secondary` (outline)
- **Cards**: `glass-card` class or `bg-brand-dark rounded-2xl border border-white/[0.06]`
- **Animations**: `reveal-up` class for fade-in on scroll
- **Images**: in `public/images/portfolio/`, served at `/images/portfolio/...`

## Navbar

- **Side pill**: vertical icon bar in `Navbar.astro`. Sections defined as an array of `{ label, href, icon }` objects in the frontmatter — add new entries there. The "Contact" icon at the bottom is separate.
- **Mobile menu**: uses spread `[...sections, ...]`, automatically picks up additions.
- **Active icon**: JS toggles `active-icon` class on scroll. CSS sets indigo background + color.

## Architecture

- Two pages: `/` (index) and `/contact` — both in `src/pages/`
- All components in `src/components/`, imported into pages
- `src/layouts/Layout.astro` wraps pages — imports `global.scss`, sets meta tags
- `tailwind.config.mjs` changes require dev server restart (no HMR for config)
- `static/` directory at repo root is Hugo-era artifact — use `public/` for static assets
