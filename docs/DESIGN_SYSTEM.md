# Design System & Visual Language

AquaGenius uses a curated design system built on **Glassmorphism** and a **Dynamic Theme** engine. This guide explains how to maintain the premium aesthetic.

## 1. The Glassmorphism Aesthetic
Our "Premium" feel is achieved through three key CSS properties used consistently across the app:
- `backdrop-filter: blur(20px)`: Creates the frosted glass effect.
- `background: var(--glass)`: Uses semi-transparent colors that adjust to the theme.
- `border: 1px solid var(--glass-border)`: Adds clinical, sharp edges to "glass" panels.

### Best Practice:
When creating new cards or sections, use the `.glass` utility class defined in `globals.css`:
```css
.card {
    @apply glass; /* In Tailwind */
    /* OR */
    composes: glass from global; /* In CSS Modules */
}
```

## 2. Dynamic Theming
We use CSS Variables for zero-latency theme switching. Themes are controlled by applying a class (`.light-theme` or `.dark-theme`) to the `<body>` element.

### Core Variables (`globals.css`)
| Variable | Dark Theme (Default) | Light Theme |
| :--- | :--- | :--- |
| `--bg-deep` | Deep Navy (#050a1e) | Soft Blue-White (#ebf3ff) |
| `--bg-surface` | Slate-900 (#0a1428) | Pure White (#ffffff) |
| `--text-main` | Off-White (#f8faff) | Navy Blue (#0a1b3d) |
| `--primary` | Cyan (#00d4ff) | (Preserved for Brand) |

## 3. Component Patterns

### The Founder Card (Glossy UI)
The Founder card in the "About" section is the flagship of our design system. It uses:
- **Absolute Overlap**: The info panel floats on top of the image to save space.
- **Dynamic Glass Panels**: 
  - **Dark Mode**: Dark tinted glass (`rgba(0,10,30,0.4)`) to make white text pop.
  - **Light Mode**: White tinted glass (`rgba(255,255,255,0.65)`) for a clean, bright look.

## 4. Typography
- **Primary Font**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts).
- **Style**: Modern, geometric, and highly readable.
- **Hierarchy**: Uses `clamp()` for fluid headings that scale perfectly on mobile.

## 5. Visual Assets
All product images and lifestyles are located in `public/assets`. 
- Preferred format: `.png` or `.webp` for alpha transparency.
- Product Lineup: `poster_lineup.png`
- Lifestyle: `cp_lifestyle.png`
