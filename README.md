# Lucas Zaranza — Game Developer Portfolio

Portfolio rebuilt with the Next.js App Router, React, and Tailwind CSS. The interface starts in a neon racing theme inspired by 16-bit futuristic racers; the theme selector also includes a JRPG palette. Copy and project metadata remain available in Portuguese and English, with Portuguese as the default.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Other useful commands are `pnpm build`, `pnpm start`, and `pnpm lint`.

## Project structure

- `app/portfolio.jsx` — interactive page, language toggle, project filters, details dialog, and theme selector.
- `app/globals.css` — Tailwind import, retro design tokens, responsive styles, and both theme palettes.
- `src/data/data.json` — bilingual bio and all 24 project records.
- `public/portfolio/` — local profile, cartridge artwork, and pixel font used by the portfolio.

To adjust the visual palette or add a third skin, edit the theme custom properties in `app/globals.css` and add an option to the theme selector in `app/portfolio.jsx`. The existing `data-theme="jrpg"` palette demonstrates the theme switch.
