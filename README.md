# Ocean Mist Tower website

React and Vite project for the Ocean Mist Tower website. The React app mounts
the existing page so its current interactions and presentation are preserved
while the page is organized into project files.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

The “Light of day” section follows Africa/Nairobi time and estimates the sun’s
path for Nyali. The slider and presets remain available for manual previews;
choose “Live time” to resync.

## Page files

- `src/App.jsx` mounts the page and loads its runtime.
- `src/legacy-markup.html` contains the existing page markup.
- `src/legacy.css` contains its styles.
- `public/legacy-runtime.js` contains its existing interaction code.
- `public/images/` contains the page images.

## NBG configuration

The site configuration is at the top of `public/legacy-runtime.js`.

- `contact` and `forms.endpoint` are intentionally blank until NBG supplies its
  real contact details and enquiry destination. The site does not claim an
  enquiry was sent when that endpoint is missing.
- `analytics.endpoint` is optional and must be a same-origin event collector.
  Analytics remain off unless an endpoint is configured and a visitor opts in.
  Events contain event names, page paths, optional residence IDs and timestamps;
  enquiry field values are never sent to analytics. Visitors can change their
  choice later using the footer’s Analytics settings control.
- Current pricing, availability, completion timing and company credentials are
  not fabricated. The site directs visitors to confirm these details with NBG.
