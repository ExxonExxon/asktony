# Ask Tony | Expert Wall & Floor Tiler

Professional static website for **Ask Tony**, a Melbourne-based tiling service. Built with Hugo, Tailwind CSS, and optimized for performance and conversion.

## 🚀 Quick Start

### Prerequisites
- **Hugo (Extended version)**: Minimum version 0.116.0. Required for SCSS and PostCSS processing.
- **Node.js & npm**: For managing Tailwind CSS and PostCSS dependencies.

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the local development server:
```bash
hugo server
```
The site will be available at `http://localhost:1313`.

### Production Build
Generate the static site in the `public/` directory:
```bash
hugo
```

## 🛠 Tech Stack
- **Static Site Generator:** [Hugo](https://gohugo.io/)
- **Styling:** [Tailwind CSS (v3)](https://tailwindcss.com/), PostCSS, and SCSS
- **Asset Pipeline:** Hugo Pipes
- **Integrations:** Tradiee (video-based quotes)

## 📁 Project Structure
- `themes/asktony/`: Core theme logic and assets.
  - `assets/css/`: SCSS source, Tailwind, and PostCSS configurations.
  - `layouts/`: HTML templates (partials, shortcodes, and base templates).
  - `static/`: Static assets (images, fonts).
- `content/`: Markdown files for site content.
- `hugo.toml`: Primary configuration file.

## 🎨 Development Conventions

### Styling
- **Source:** `themes/asktony/assets/css/styles.scss`
- **Design Tokens:** Custom tokens like `.radius-lg`, `.shadow-soft`, and `.heading-xl` are defined in the `@layer components` section.
- **Tailwind:** Utility classes are used directly in layouts. Configuration is at `themes/asktony/assets/css/tailwind.config.js`.

### Layouts
- **Base:** `themes/asktony/layouts/_default/baseof.html`
- **Homepage:** `themes/asktony/layouts/index.html`
- **Partials:** Found in `themes/asktony/layouts/partials/` (navbar, footer, head, etc.).

### Assets
- Images are located in `themes/asktony/static/images/`.
- Reference images in templates using absolute paths (e.g., `/images/tony.jpg`).

## 📝 TODOs
- [ ] Expand `content/` with service-specific pages or blog posts.
- [ ] Verify local font references in `static/fonts/`.
- [ ] Optimize images for production.
