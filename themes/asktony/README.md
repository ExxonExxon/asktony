# Ask Tony - Custom Hugo Theme

This is the custom theme for the **Ask Tony** tiling service website. It is designed to be lightweight, performant, and highly visual.

## Features
- **Tailwind CSS Integration:** Uses Tailwind CSS (v3) for utility-first styling.
- **Hugo Pipes Asset Pipeline:** Automatically processes SCSS and runs PostCSS for Tailwind.
- **Custom Design Tokens:** Standardized spacing, shadows, and typography defined in SCSS.
- **Responsive Components:** Mobile-first design for all layouts and partials.
- **Asset Optimization:** Integrated with Hugo's image processing (where applicable).

## Structure
- `assets/css/`: Stylesheets and configuration.
- `layouts/`:
  - `_default/`: Base templates.
  - `partials/`: Reusable components (navbar, footer, etc.).
- `static/`: Theme-specific images, fonts, and scripts.

## Customization
Most styling changes should be made in `assets/css/styles.scss` or `assets/css/tailwind.config.js`. Template changes are located in the `layouts/` directory.
