# Fierce Content

The Fierce Content microsite runs on Next.js and is hosted on GitHub Pages at [fierce-content.com](https://fierce-content.com).

## Development

Use Node.js 22.

```sh
npm ci
npm run dev
```

## GitHub Pages

`npm run build` exports the site to `out/`. To preview that export locally, run `python3 -m http.server 8000 --directory out`.

`npm run deploy` builds the site and pushes the export to the existing `gh-pages` branch on `origin`. GitHub Pages serves the branch root. The export includes `CNAME` for the custom domain and `.nojekyll` so GitHub Pages serves Next.js assets under `_next/`.

## Analytics

Production builds load Google Tag Manager container `GTM-N9J6R4CG` on every page. In that container, publish a Google tag with Measurement ID `G-8X1X69KYKK` and the **Initialization – All Pages** trigger. Enable **File downloads** in the GA4 web stream’s Enhanced Measurement settings to record clicks on the calendar PDF as `file_download` events.
