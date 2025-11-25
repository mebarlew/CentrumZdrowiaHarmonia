# Centrum Zdrowia Psychicznego i Mowy Harmonia

Professional website for Mental Health and Speech Center "Harmonia" in Inowrocław, Poland.

## Tech Stack

- **Astro 5.16.0** - Modern static site framework
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **Leaflet.js 1.9.4** - Interactive maps (OpenStreetMap)
- **TypeScript** - Static typing

## Features

✅ **SEO Optimization**
- Meta tags for Google, Facebook, Twitter
- Schema.org structured data (MedicalBusiness)
- Sitemap.xml and robots.txt
- Geo-location for local SEO
- Canonical URLs

✅ **Accessibility (WCAG 2.1 AA)**
- Skip-to-content link
- Proper ARIA labels
- Semantic HTML
- Keyboard navigation support
- High color contrast

✅ **GDPR Compliance**
- Cookie consent banner
- Privacy policy page
- LocalStorage for consent management

✅ **Performance**
- HTML/CSS/JS minification
- Image optimization (lazy loading)
- Preconnect for external resources
- No source maps in production

✅ **Functionality**
- Responsive design (mobile-first)
- Interactive map (no API key required)
- Specialists section
- Services pricing
- Contact information

## Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Project Structure

```
/
├── public/
│   ├── images/           # Images (logo, specialist photos)
│   ├── robots.txt        # Search engine directives
│   └── sitemap.xml       # Site map for SEO
├── src/
│   ├── components/       # Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── SpecialistsSection.astro
│   │   ├── ServicesSection.astro
│   │   ├── PricingSection.astro
│   │   ├── ContactSection.astro
│   │   ├── CookieConsent.astro
│   │   └── Icon.astro
│   ├── data/            # Configuration data
│   │   └── contact.ts
│   ├── layouts/         # Layouts
│   │   └── Layout.astro
│   └── pages/           # Pages
│       ├── index.astro
│       └── polityka-prywatnosci.astro
├── astro.config.mjs     # Astro configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json
```

## Scripts

```bash
yarn dev          # Start development server (port 4321)
yarn build        # Build for production (output: dist/)
yarn preview      # Preview production build
yarn astro        # Astro CLI
```

## Production Configuration

Production build includes:
- ❌ No source maps
- ✅ Code minification (esbuild)
- ✅ Remove console.log and debugger statements
- ✅ HTML compression
- ✅ CSS/JS optimization

## Deployment

1. Build the project:
   ```bash
   yarn build
   ```

2. Upload the contents of `dist/` folder to your hosting

3. Ensure your server supports:
   - gzip/brotli compression
   - HTTPS
   - Cache headers for static assets

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari iOS 12+
- Chrome Android (latest version)

## License

Copyright © 2025 Centrum Zdrowia Psychicznego i Mowy Harmonia. All rights reserved.

## Kontakt

**Centrum Zdrowia Psychicznego i Mowy Harmonia**
- 📍 ul. Morelowa 3, 88-100 Inowrocław
- 📞 505 636 848 | 510 056 057
- 🌐 https://centrumharmonia.pl
- 📘 [Facebook](https://www.facebook.com/share/15jdfMYEbJ/?mibextid=wwXIfr)
