# Centrum Zdrowia Psychicznego i Mowy Harmonia

Professional website for Mental Health and Speech Center "Harmonia" in Inowrocław, Poland.

## Tech Stack

- **Astro 5.16.0** - Modern static site framework
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **Keystatic CMS** - Git-based content management
- **Leaflet.js 1.9.4** - Interactive maps (OpenStreetMap)
- **TypeScript** - Static typing

## Features

✅ **CMS (Keystatic)**
- Edit content via web UI at `/keystatic`
- Manage news, services, pricing, contact info
- Git-based - all changes committed to repo

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

## CMS (Keystatic)

### Accessing the CMS

1. Go to https://www.harmonia-centrum.pl/keystatic/
2. Sign in with GitHub (requires write access to repo)
3. Edit content through the UI

### Content Structure

- **Aktualności** - News/blog posts
- **Usługi** - Services offered
- **Cennik** - Pricing for each service category
- **Dane kontaktowe** - Contact information
- **Wypożyczalnia sprzętu** - Equipment rental info

### Giving CMS Access to Others

Add them as collaborators with Write permission:
https://github.com/mebarlew/CentrumZdrowiaHarmonia/settings/access

## Project Structure

```
/
├── public/
│   ├── images/           # Images (logo, specialist photos)
│   ├── robots.txt        # Search engine directives
│   └── sitemap.xml       # Site map for SEO
├── src/
│   ├── components/       # Astro components
│   ├── content/          # CMS content (JSON/Markdoc)
│   │   ├── news/         # News posts
│   │   ├── services/     # Service descriptions
│   │   ├── pricing/      # Pricing data
│   │   ├── contact.json  # Contact info
│   │   └── equipment.json # Equipment rental
│   ├── data/             # Static configuration
│   ├── layouts/          # Layouts
│   └── pages/            # Pages
│       ├── index.astro
│       ├── aktualnosci.astro
│       └── polityka-prywatnosci.astro
├── keystatic.config.ts   # CMS configuration
├── astro.config.mjs      # Astro configuration
├── tailwind.config.js    # Tailwind configuration
└── package.json
```

## Scripts

```bash
yarn dev          # Start development server (port 4321)
yarn build        # Build for production (output: dist/)
yarn preview      # Preview production build
yarn astro        # Astro CLI
```

## Deployment (Vercel)

### Important: Always deploy with Vercel building

```bash
# Correct - Vercel builds with access to env vars
vercel deploy --prod

# Wrong - env vars won't be embedded
vercel deploy --prod --prebuilt
```

### Environment Variables (Vercel)

Required for Keystatic CMS to work:

```
KEYSTATIC_GITHUB_CLIENT_ID=<from GitHub App>
KEYSTATIC_GITHUB_CLIENT_SECRET=<from GitHub App>
KEYSTATIC_SECRET=<64 char random string>
PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=harmonia-cms
```

### GitHub App Setup

The CMS uses a GitHub App (not OAuth App) for authentication:
- App name: `harmonia-cms`
- Callback URL: `https://www.harmonia-centrum.pl/api/keystatic/github/oauth/callback`
- Permissions: Contents (read/write), Metadata (read), Pull requests (read)

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
- ul. Morelowa 3, 88-100 Inowrocław
- https://www.harmonia-centrum.pl
- [Facebook](https://www.facebook.com/share/15jdfMYEbJ/?mibextid=wwXIfr)
