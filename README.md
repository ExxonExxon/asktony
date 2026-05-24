# Ask Tony | Expert Wall & Floor Tiler

Professional static website for **Ask Tony**, a Melbourne-based tiling service. Built with **Astro (v5)**, Tailwind CSS, and optimized for performance.

## 🚀 Quick Start

### Prerequisites
- **Node.js**: LTS version recommended.
- **npm** or **yarn**: For managing dependencies.

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the local development server:
```bash
npm run dev
```
The site will be available at `http://localhost:4321`.

### Production Build
Generate the static site in the `dist/` directory:
```bash
npm run build
```

## 🛠 Tech Stack
- **Framework:** [Astro (v5)](https://astro.build/)
- **Styling:** [Tailwind CSS (v3)](https://tailwindcss.com/), Sass/SCSS
- **Deployment:** Static Site Generation (SSG)

## 📁 Project Structure
- `src/`: Core application source.
  - `components/`: Modular UI sections (Hero, About, Portfolio, etc.).
  - `layouts/`: Base HTML templates (e.g., `Layout.astro`).
  - `pages/`: Site routes (e.g., `index.astro`).
  - `styles/`: Global styles and design tokens (`global.scss`).
- `public/`: Static assets such as images, fonts, and favicon.
- `astro.config.mjs`: Astro configuration.
- `tailwind.config.mjs`: Tailwind CSS configuration.

## 🎨 Development Conventions

### Styling
- Global styles and design tokens are defined in `src/styles/global.scss`.
- Custom design tokens (e.g., `.radius-lg`, `.shadow-soft`, `.heading-xl`) are available as utility classes.
- Tailwind utility classes are used directly within Astro components.

### Layouts and Components
- **Base Layout:** `src/layouts/Layout.astro` handles SEO, meta tags, and global style imports.
- **Components:** Sections of the site are broken into modular `.astro` files in `src/components/` for easier maintenance.

### Assets
- All images are stored in `public/images/`.
- Images are referenced in templates using absolute paths (e.g., `/images/logo.png`).

## 📝 TODOs
- [ ] Implement Astro's `<Image />` component for advanced optimization.
- [ ] Add dynamic content loading from Markdown or a CMS if needed.
