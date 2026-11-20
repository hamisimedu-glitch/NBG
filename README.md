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

## Performance assets

- The hero image and page runtime are preloaded. The loader finishes its drawing
  and fades once the runtime and hero are ready, with a short timeout fallback.
- Large WebP images have checked-in `-400`, `-800` and, where useful, `-1600`
  variants. Update `NBG_IMAGE_WIDTHS` in `public/legacy-runtime.js` and keep
  the hero `imagesrcset` in `index.html` in sync when replacing those images.
- Video posters are deferred until their section nears the viewport. Video clips
  do not autoplay when the visitor requests reduced motion or data saving.

## Live location map

- The location map starts loading only as it nears the viewport. Without a key,
  it uses an interactive Google Maps embed.
- For map layers, live nearby-place markers and location controls, set
  `VITE_GOOGLE_MAPS_API_KEY` in `.env.local` for local work and in Vercel's
  environment variables for deployment. Enable Maps JavaScript API, Places API
  (New) and Geocoding API with billing. Nearby place search uses Google's
  current `Place.searchNearby()` API.
- A browser Maps key is visible to visitors; restrict it by HTTP referrer to
  the production domain and local development hosts. Never commit the key.
- The project is centered from the configured address search, not an asserted
  surveyed coordinate. Confirm the exact building entrance before publishing.

## NBG configuration

The site configuration is at the top of `public/legacy-runtime.js`.

- The canonical, Open Graph and structured-data URLs in `index.html` target the
  production domain. Keep them aligned if the deployed domain changes.
- The supplied public phone and email are configured in `public/legacy-runtime.js`.
- WhatsApp and `forms.endpoint` remain blank until NBG supplies the number and
  enquiry destination. The site does not claim an enquiry was sent when that
  endpoint is missing; the configured email is offered as a fallback.
- `analytics.endpoint` is optional and must be a same-origin event collector.
  Analytics remain off unless an endpoint is configured and a visitor opts in.
  Events contain event names, page paths, optional residence IDs and timestamps;
  enquiry field values are never sent to analytics. Visitors can change their
  choice later using the footer’s Analytics settings control.
- Current pricing, availability, completion timing and company credentials are
  not fabricated. The site directs visitors to confirm these details with NBG.
- Before launch, NBG still needs to provide an enquiry destination and approved
  privacy/terms pages. The confirmed 75 sqm 1-bedroom C area still needs a
  corrected floor-plan asset, and 3-bedroom unit plans are not yet available.
