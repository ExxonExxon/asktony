# GEMINI.md - Ask Tony Project Context

## Project Overview
**Ask Tony** is a professional static website for a Melbourne-based tiling service ("Ask Tony | Expert Wall & Floor Tiler"). The project is built using the **Astro** web framework for a fast, component-based static site experience.

### Key Technologies
- **Framework:** Astro (v5)
- **Styling:** Tailwind CSS (v3), Sass/SCSS
- **Architecture:** Component-based (Astro components)
- **Deployment:** Static Site Generation (SSG)

## Directory Structure
- `src/`: Core application source.
  - `components/`: Modular UI sections (Hero, About, Portfolio, etc.).
  - `layouts/`: Base HTML templates (e.g., `Layout.astro`).
  - `pages/`: Site routes (e.g., `index.astro`).
  - `styles/`: Global styles and design tokens (`global.scss`).
- `public/`: Static assets such as images, fonts, and favicon.
- `astro.config.mjs`: Astro configuration.
- `tailwind.config.mjs`: Tailwind CSS configuration.

## Building and Running

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended).
- npm or yarn.

### Commands
- **Install Dependencies:**
  ```bash
  npm install
  ```
- **Run Local Development Server:**
  ```bash
  npm run dev
  ```
  The site will be available at `http://localhost:4321`.
- **Build for Production:**
  ```bash
  npm run build
  ```
  The static site will be generated in the `dist/` directory.

## Development Conventions

### Styling (Tailwind + SCSS)
- Global styles and design tokens are defined in `src/styles/global.scss`.
- Custom design tokens (e.g., `.radius-lg`, `.shadow-soft`, `.heading-xl`) are available as utility classes.
- Tailwind utility classes are used directly within Astro components.

### Layouts and Components
- **Base Layout:** `src/layouts/Layout.astro` handles SEO, meta tags, and global style imports.
- **Components:** Sections of the site are broken into modular `.astro` files in `src/components/` for easier maintenance and AI-assisted development.

### Images and Static Assets
- All images are stored in `public/images/`.
- Images are referenced in templates using absolute paths (e.g., `/images/tony.jpg`).
- Astro's built-in image optimization can be leveraged for better performance.

## Future Tasks / TODOs
- [ ] Implement Astro's `<Image />` component for advanced optimization.
- [ ] Add dynamic content loading from Markdown or a CMS if needed.
