# David Wright — Portfolio (Nuxt 4 + Tailwind)

Single-page portfolio for David Wright, Senior Full Stack Engineer. Built with Nuxt 4 and Tailwind CSS. Includes anchor navigation, timeline-style employment history, animated reveals, project detail pages, and light/dark/system theme toggle.

## Features

- Single-page layout with section anchors (About, Employment, Education, Projects, Contact)
- Timeline-style employment history with alternating cards
- Project cards driven by data, with dynamic detail pages
- Motion-based reveal animations (`@vueuse/motion`)
- Light/dark/system theme preference saved to local storage
- Icon buttons via `@nuxt/icon`
- Localized content with `@nuxtjs/i18n` (English and Spanish)
- Tailwind CSS styling with responsive layout
- Floating scroll-to-top button

## Localization

- Locale files live in `i18n/locales/`
- Default language is configured in `nuxt.config.ts`

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Customization

- **Hero + contact**: update content in `app/pages/index.vue`
- **Section copy + layout**: update components in `app/components/sections/`
- **Projects data**: edit `app/data/projects.ts`
- **Navbar + footer links**: update `app/components/layout/Navbar.vue` and `app/components/layout/Footer.vue`
- **Theme logic**: tweak `app/composables/useTheme.ts`
- **Scroll-to-top button**: `app/components/ui/ScrollToTopButton.vue`
- **Buttons styling**: `app/assets/css/tailwind.css`
- **Images**: place assets in `public/`:
  - `public/David_Wright.jpg` — About section portrait
  - `public/David_Wright.pdf` — Resume (download + modal)
  - `public/University_of_West_Florida.webp` — Education section background
  - `public/UWF-mark.png` — Education section logo (optional)
  - Company logos: add under `public/icons/` and set `logoUrl` in `app/data/companies.ts` if you prefer local files over favicons

## Environment Variables (Optional)

The config is ready for Supabase, but it is optional unless you wire it up in your app.

```bash
SUPABASE_URL=your-url
SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

## Useful Scripts

- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview production build
- `npm run generate` — generate static site

## Deployment

Follow the [Nuxt deployment guide](https://nuxt.com/docs/getting-started/deployment) or host on platforms like Vercel or Netlify.
