# GEMINI.md - Ask Tony Project Context

## Project Overview
**Ask Tony** is a professional static website for a Melbourne-based tiling service ("Ask Tony | Expert Wall & Floor Tiler"). The project is built using the **Hugo** static site generator and features a highly customized theme named `asktony`.

### Key Technologies
- **Static Site Generator:** Hugo (min version 0.116.0)
- **Styling:** Tailwind CSS (v3), PostCSS, SCSS
- **Asset Pipeline:** Hugo Pipes (used for processing SCSS and running PostCSS)
- **Deployment/Integration:** Includes integration with "Tradsiee" for video-based quotes.

## Directory Structure
- `themes/asktony/`: Contains the core theme logic.
  - `assets/css/`: SCSS source files, Tailwind and PostCSS configurations.
  - `layouts/`: HTML templates (partials, shortcodes, and base templates).
  - `static/`: Static assets such as images (project gallery, logos) and fonts.
- `content/`: Markdown files for site content (currently primarily driven by the theme's `index.html`).
- `hugo.toml`: Root configuration file.

## Building and Running

### Prerequisites
- [Hugo](https://gohugo.io/installation/) (Extended version recommended for SCSS/PostCSS support).
- [Node.js](https://nodejs.org/) and npm (for Tailwind/PostCSS dependencies).

### Commands
- **Install Dependencies:**
  ```bash
  npm install
  ```
- **Run Local Development Server:**
  ```bash
  hugo server
  ```
  The site will be available at `http://localhost:1313`.
- **Build for Production:**
  ```bash
  hugo
  ```
  The static site will be generated in the `public/` directory.

## Development Conventions

### Styling (Tailwind + SCSS)
- Main styles are defined in `themes/asktony/assets/css/styles.scss`.
- Custom design tokens (e.g., `.radius-lg`, `.shadow-soft`, `.heading-xl`) are defined in the `@layer components` section of the SCSS file.
- The project uses standard Tailwind utility classes directly in the HTML layouts.
- Tailwind configuration is located at `themes/asktony/assets/css/tailwind.config.js`.

### Layouts and Partials
- **Base Template:** `themes/asktony/layouts/_default/baseof.html`.
- **Homepage:** Defined in `themes/asktony/layouts/index.html`.
- **Partials:** Located in `themes/asktony/layouts/partials/`, including `navbar.html`, `footer.html`, and `head.html`.
- **CSS Injection:** Handled in `themes/asktony/layouts/partials/head.html` using Hugo Pipes.

### Images and Static Assets
- All images are stored in `themes/asktony/static/images/`.
- Images are referenced in templates using absolute-style paths (e.g., `/images/tony.jpg`).

## Future Tasks / TODOs
- [ ] Add more content to `content/` if blog posts or additional pages are needed.
- [ ] Ensure all local fonts in `static/fonts/` are correctly referenced if used (currently `styles.scss` uses Google Fonts).
