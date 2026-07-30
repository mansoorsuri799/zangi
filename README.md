# Zangi App (zangiapp.org)

Next.js site for [zangiapp.org](https://zangiapp.org) — Zangi Private Messenger download guides, privacy articles, and APK information.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Notes

- Site constants live in `src/lib/site.ts` (URL, APK download link, version, ratings).
- Public SEO files: `public/robots.txt`, `public/sitemap-index.xml`, `public/index.xml`, `public/image-sitemap.xml`.
