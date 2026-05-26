# AskTony

Portfolio website for a tiling business, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build to `dist/`                             |
| `npm run preview` | Preview the production build locally         |

## Stack

- **Astro** 6 — static site generation
- **Tailwind CSS** 3 — utility-first styling
- **SCSS** — custom component classes and animations
- **Inter** + **Ubuntu** — font pairing

## Structure

```
src/
├── components/     # Astro components (Navbar, Hero, About, etc.)
├── layouts/        # Page layout wrapper
├── pages/          # Route pages (index, contact)
└── styles/         # Global styles
public/
├── fonts/          # Ubuntu font files
├── images/         # Portfolio images and logo
└── favicon.ico
```
