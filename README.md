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
