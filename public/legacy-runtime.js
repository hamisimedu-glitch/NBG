/* Classic-script runtime retained to preserve the existing page behavior. */
document.querySelectorAll("img[data-k]").forEach(function(i){i.src=window.__IMG[i.getAttribute("data-k")]})

/* ==========================================================================
   NBG SITE CONFIGURATION — edit this file only to wire up real business data.
   Nothing here is invented: every empty value is deliberately left blank and
   the site degrades honestly (hidden / explained) until it is filled in.
   ========================================================================== */
window.NBG_CONFIG = {
  siteUrl: "https://www.example.com",          // TODO(NBG): production domain (used for canonical, sitemap, OG)
  company: "Next Bridge Group Limited",
  project: "Ocean Mist Tower",
  tagline: "Connecting You To Your New Home",   // from the NBG logo lockup

  contact: {
    whatsappNumber: "",   // TODO(NBG): international format, digits only, e.g. "2547XXXXXXXX"
    phone: "",            // TODO(NBG): display phone, e.g. "+254 7XX XXX XXX"
    email: "",            // TODO(NBG): enquiries mailbox
    addressLine: "Bandari Road, Nyali, Mombasa, Kenya", // from brochure
    mapsQuery: "Ocean Mist Tower Bandari Road Nyali Mombasa" // search link only — no coordinates are asserted
  },

  /* Enquiry submissions. Any JSON-accepting endpoint works (Formspree, Getform,
     Basin, your own serverless function...). If left empty the forms will NOT
     pretend to send: they show an honest "not yet connected" state and offer
     the email / WhatsApp fallback instead. Keep private API keys server-side. */
  forms: {
    endpoint: "",         // TODO(NBG): e.g. "https://formspree.io/f/xxxxxxx"
    method: "POST"
  },

  social: {               // TODO(NBG): leave "" to hide an icon
    instagram: "", facebook: "", linkedin: "", youtube: "", tiktok: ""
  }
};


/* ==========================================================================
   PROJECT CONTENT — single source of truth for the interactive sections.
   Source: "Ocean Mist Tower" 44-page brochure supplied by NBG.
   Anything NBG still needs to confirm is flagged in `pending` below.
   ========================================================================== */
(function () {
  var I = "assets/img/";

  window.NBG_CONTENT = {

    /* ---- Residences --------------------------------------------------- */
    categories: [
      { id: "1bed", img: __IMG["interior/bedroom-bed.webp"], label: "1 Bedroom", short: "One-bedroom residences", range: "60 – 75 sqm",
        blurb: "Compact, light-filled apartments with an open lounge and dining area, a master bedroom and a private balcony." },
      { id: "2bed", img: __IMG["interior/dining-alt.webp"], label: "2 Bedroom", short: "Two-bedroom residences", range: "125 – 160 sqm",
        blurb: "Generous family layouts with a master suite, a second bedroom, open lounge and dining, and balconies." },
      { id: "3bed", img: __IMG["exterior/ocean-mist-front.webp"], video: "/videos/ocean-mist-exterior.mp4", label: "3 Bedroom + DSQ", short: "Three-bedroom residences with DSQ", range: "160 – 190 sqm",
        blurb: "The largest homes in the tower, arranged on the 10th floor and including a domestic staff quarter (DSQ)." }
    ],

    units: [
      { id: "1bed-d", cat: "1bed", code: "1D", name: "1 Bedroom D", sqm: 60, beds: "1 bedroom", baths: "1 bath",
        rooms: "Kitchen, dining / lounge, master bedroom, balcony",
        plan: __IMG["plans/plan-1bed-d-60sqm.webp"], planAlt: "Floor plan of 1 Bedroom D, 60 square metres, showing lounge and dining, kitchen, bedroom, bath and balcony",
        iso: __IMG["units3d/1bed-d-60sqm.webp"], isoAlt: "Three-dimensional cut-away layout of 1 Bedroom D",
        legend: ["Entry lobby","Dining","Kitchen","Utility / yard","WC / SH","Lounge","Bedroom 01","Balcony"],
        hero: __IMG["interior/living-lounge.webp"] },
      { id: "1bed-c", cat: "1bed", code: "1C", name: "1 Bedroom C", sqm: 65, beds: "1 bedroom", baths: "1 bath",
        rooms: "Kitchen, dining / lounge, master bedroom, curved balcony",
        plan: __IMG["plans/plan-1bed-c-65sqm.webp"], planAlt: "Floor plan of 1 Bedroom C, 65 square metres, showing bedroom, lounge and dining, kitchen, bath, lobby and curved balcony",
        iso: __IMG["units3d/1bed-c-65sqm.webp"], isoAlt: "Three-dimensional cut-away layout of 1 Bedroom C",
        legend: ["Entry lobby","Dining","Kitchen","Utility / yard","WC / SH","Lounge","Bedroom 01","Balcony"],
        hero: __IMG["interior/living-open-plan.webp"],
        pending: "The brochure's 3D page for this layout is captioned 75 sqm while its plan page states 65 sqm. 65 sqm is used here; NBG to confirm." },
      { id: "1bed-b", cat: "1bed", code: "1B", name: "1 Bedroom B", sqm: 75, beds: "1 bedroom", baths: "1 bath",
        rooms: "Kitchen, dining / lounge, master bedroom, balcony",
        plan: __IMG["plans/plan-1bed-b-75sqm.webp"], planAlt: "Floor plan of 1 Bedroom B, 75 square metres, showing bedroom, lounge and dining, kitchen, bath, lobby and balcony",
        iso: __IMG["units3d/1bed-b-75sqm.webp"], isoAlt: "Three-dimensional cut-away layout of 1 Bedroom B",
        legend: ["Entry lobby","Dining","Kitchen","Utility / yard","WC / SH","Lounge","Bedroom 01","Balcony"],
        hero: __IMG["interior/living-media-wall.webp"] },

      { id: "2bed-d", cat: "2bed", code: "2D", name: "2 Bedroom D", sqm: 125, beds: "2 bedrooms", baths: "2 baths",
        rooms: "Kitchen, dining / lounge, master bedroom, second bedroom, balcony",
        plan: __IMG["plans/plan-2bed-d-125sqm.webp"], planAlt: "Floor plan of 2 Bedroom D, 125 square metres",
        iso: __IMG["units3d/2bed-d-125sqm.webp"], isoAlt: "Three-dimensional cut-away layout of 2 Bedroom D",
        legend: ["Entry lobby","Dining","Kitchen","Utility / yard","WC / SH","Lounge","Bedroom 01","Master bedroom","Balcony"],
        hero: __IMG["interior/dining-table.webp"] },
      { id: "2bed-c", cat: "2bed", code: "2C", name: "2 Bedroom C", sqm: 130, beds: "2 bedrooms", baths: "2 baths",
        rooms: "Kitchen, dining / lounge, master bedroom, second bedroom, balconies",
        plan: __IMG["plans/plan-2bed-c-130sqm.webp"], planAlt: "Floor plan of 2 Bedroom C, 130 square metres",
        iso: __IMG["units3d/2bed-c-130sqm.webp"], isoAlt: "Three-dimensional cut-away layout of 2 Bedroom C",
        legend: ["Entry lobby","Dining","Kitchen","Utility / yard","WC / SH","Lounge","Bedroom 01","Master bedroom","Balcony"],
        hero: __IMG["interior/living-suite.webp"] },
      { id: "2bed-a", cat: "2bed", code: "2A", name: "2 Bedroom A", sqm: 140, beds: "2 bedrooms", baths: "2 baths",
        rooms: "Kitchen, dining / lounge, master bedroom, second bedroom, balcony",
        plan: __IMG["plans/plan-2bed-a-140sqm.webp"], planAlt: "Floor plan of 2 Bedroom A, 140 square metres",
        iso: __IMG["units3d/2bed-a-140sqm.webp"], isoAlt: "Three-dimensional cut-away layout of 2 Bedroom A",
        legend: ["Entry lobby","Dining","Kitchen","Utility / yard","WC / SH","Lounge","Bedroom 01","Master bedroom","Balcony"],
        hero: __IMG["interior/living-lounge.webp"] },
      { id: "2bed-b", cat: "2bed", code: "2B", name: "2 Bedroom B", sqm: 160, beds: "2 bedrooms", baths: "2 baths",
        rooms: "Kitchen, dining / lounge, master bedroom with en-suite, second bedroom, balconies, dhobi",
        plan: __IMG["plans/plan-2bed-b-160sqm.webp"], planAlt: "Floor plan of 2 Bedroom B, 160 square metres, with master bedroom, bedroom 02, lounge and dining, kitchen and balconies",
        iso: __IMG["units3d/2bed-b-160sqm.webp"], isoAlt: "Three-dimensional cut-away layout of 2 Bedroom B",
        legend: ["Entry lobby","Dining","Kitchen","Utility / yard","WC / SH","Lounge","Bedroom 01","Master bedroom","Balcony","DSQ"],
        hero: __IMG["interior/living-open-plan.webp"] },

      { id: "3bed-160", cat: "3bed", code: "3-160", name: "3 Bedroom + DSQ", sqm: 160, beds: "3 bedrooms + DSQ", baths: "—",
        rooms: "Shown on the 10th-floor typical layout",
        plan: __IMG["plans/typical-floor-10.webp"], planAlt: "Typical 10th-floor layout showing the 3 bedroom plus DSQ apartments at 160 and 190 square metres",
        iso: null, legend: [], hero: __IMG["exterior/ocean-mist-rooftop.webp"], layoutOnly: true,
        pending: "A dedicated unit plan for this configuration was not included in the brochure. NBG to supply; the 10th-floor layout is shown." },
      { id: "3bed-190", cat: "3bed", code: "3-190", name: "3 Bedroom + DSQ", sqm: 190, beds: "3 bedrooms + DSQ", baths: "—",
        rooms: "Shown on the 10th-floor typical layout",
        plan: __IMG["plans/typical-floor-10.webp"], planAlt: "Typical 10th-floor layout showing the 3 bedroom plus DSQ apartments at 160 and 190 square metres",
        iso: null, legend: [], hero: __IMG["exterior/ocean-mist-aerial-terrace.webp"], layoutOnly: true,
        pending: "A dedicated unit plan for this configuration was not included in the brochure. NBG to supply; the 10th-floor layout is shown." }
    ],
    /* ---- Tower levels (from brochure layouts) ------------------------- */
    levels: [
      { id: "roof", label: "Roof terrace", range: "roof", plan: __IMG["plans/roof-terrace-layout.webp"], title: "Roof terrace", text: "The brochure’s roof-terrace layout shows landscaped outdoor areas and dining space, with the rooftop restaurant listed among the tower’s amenities.", tags: ["Rooftop restaurant", "Terrace"] },
      { id: "10", label: "10th floor", range: "10", plan: __IMG["plans/typical-floor-10.webp"], title: "10th floor", text: "The 10th-floor layout is where the brochure places the 3-bedroom + DSQ homes (160 and 190 sqm), alongside further apartments.", tags: ["3 Bed + DSQ 160 / 190 sqm"] },
      { id: "9", label: "9th floor", range: "1-9", plan: __IMG["plans/typical-floor-1-9.webp"], title: "Typical floor · 1st – 9th", text: "Floors 1 to 9 share one typical layout of one- and two-bedroom apartments, arranged around a central core with lifts.", tags: ["1 Bed 60–75 sqm", "2 Bed 125–160 sqm"] },
      { id: "8", label: "8th floor", range: "1-9" }, { id: "7", label: "7th floor", range: "1-9" }, { id: "6", label: "6th floor", range: "1-9" },
      { id: "5", label: "5th floor", range: "1-9" }, { id: "4", label: "4th floor", range: "1-9" }, { id: "3", label: "3rd floor", range: "1-9" },
      { id: "2", label: "2nd floor", range: "1-9" }, { id: "1", label: "1st floor", range: "1-9" },
      { id: "0", label: "Ground floor", range: "0", plan: __IMG["plans/ground-floor-layout.webp"], title: "Ground floor", text: "The ground-floor layout shows the arrival level with the parking arrangement. Reception and waiting area are listed among the project amenities.", tags: ["Parking", "Arrival"] }
    ],

    /* ---- Step Inside rooms (brochure interior visualisations) --------- */
    rooms: [
      { id: "living", label: "Living room", title: "Quiet luxury, beckoning you to unwind.",
        text: "Every inch of the living space has been considered to deliver an atmosphere of calm and elegance — light tones, soft layers and warm timber.",
        images: [
          { src: __IMG["interior/living-lounge.webp"], alt: "Living room with white sofa, navy accent chairs and a feature artwork" },
          { src: __IMG["interior/living-media-wall.webp"], alt: "Living room with a timber media wall, navy armchair and floor-to-ceiling curtains" },
          { src: __IMG["interior/living-open-plan.webp"], alt: "Open-plan living and dining space with ring pendant lighting" },
          { src: __IMG["interior/living-suite.webp"], alt: "Alternative living room scheme with a sage and timber feature wall" } ] },
      { id: "dining", label: "Dining", title: "Not just a space, but a captivating place to reside in.",
        text: "A dining area that sits naturally within the open plan — a timber table, warm pendant light and a calm backdrop.",
        images: [
          { src: __IMG["interior/dining-table.webp"], alt: "Dining area with timber table and cream chairs beneath a ring pendant" },
          { src: __IMG["interior/dining-alt.webp"], alt: "Dining table with artwork and a large indoor plant" } ] },
      { id: "kitchen", label: "Kitchen", title: "An authentic work of art, in elegant detail.",
        text: "Clean white cabinetry, warm timber and a breakfast bar with navy stools, designed around everyday entertaining.",
        images: [
          { src: __IMG["interior/kitchen-breakfast-bar.webp"], alt: "Kitchen with timber and white cabinetry and a breakfast bar with navy stools" },
          { src: __IMG["interior/kitchen-pendants.webp"], alt: "Kitchen breakfast bar beneath three pendant lights" },
          { src: __IMG["interior/kitchen-oven-wall.webp"], alt: "Kitchen wall with built-in oven and marble splashback" } ] },
      { id: "bedroom", label: "Bedroom", title: "A juxtaposition of colour and organic material.",
        text: "Sophisticated tones and warm timber, softened by the quietude of light paintwork.",
        images: [
          { src: __IMG["interior/bedroom-suite.webp"], alt: "Bedroom with upholstered bed, sculptural chairs and a round feature mirror" },
          { src: __IMG["interior/bedroom-bed.webp"], alt: "Bedroom with white bed linen, navy bench and ocean artwork" } ] },
      { id: "bathroom", label: "Bathroom", title: "Sober ambiences, enjoyed in absolute tranquillity.",
        text: "Stone-look tiling, a floating timber vanity and a glazed shower with natural light.",
        images: [
          { src: __IMG["interior/bathroom.webp"], alt: "Bathroom with stone-look tiles, floating vanity and glass shower" } ] },
      { id: "rooftop", label: "Rooftop", title: "A terrace above the Nyali skyline.",
        text: "The roof terrace brings the rooftop restaurant and landscaped outdoor space into the tower — the brochure's roof terrace layout shows dining and planted areas.",
        images: [
          { src: __IMG["exterior/ocean-mist-rooftop.webp"], alt: "Rooftop terrace of Ocean Mist Tower with landscaping and the building signage" },
          { src: __IMG["exterior/ocean-mist-aerial-terrace.webp"], alt: "Aerial view of the Ocean Mist Tower roof terrace and surrounding roads" } ] }
    ],

    /* ---- Architectural gallery --------------------------------------- */
    gallery: [
      { src: __IMG["exterior/ocean-mist-hero.webp"],   w: 2400, h: 1800, size: "tall",   cap: "Ocean Mist Tower — the signature view", alt: "Exterior render of Ocean Mist Tower, a cream and white residential tower beneath a blue sky" },
      { src: __IMG["exterior/ocean-mist-street.webp"], w: 2000, h: 1431, size: "wide",   cap: "From the street, Bandari Road, Nyali", alt: "Street-level render of Ocean Mist Tower with palms and boundary wall" },
      { src: __IMG["exterior/ocean-mist-facade.webp"], w: 1400, h: 2127, size: "portrait", cap: "Façade — balconies and screens", alt: "Close vertical view of the Ocean Mist Tower façade with balconies" },
      { src: __IMG["exterior/ocean-mist-rooftop.webp"], w: 1162, h: 872, size: "std",   cap: "Roof terrace and crown", alt: "Roof terrace and crown of Ocean Mist Tower" },
      { src: __IMG["exterior/ocean-mist-aerial-site.webp"], w: 1800, h: 1350, size: "wide", cap: "Site overview — roof and surroundings", alt: "Aerial view of Ocean Mist Tower roof with solar panels and surrounding roads" },
      { src: __IMG["exterior/ocean-mist-front.webp"],  w: 1600, h: 1227, size: "std",    cap: "Tower and neighbourhood", alt: "Ocean Mist Tower seen beside neighbouring buildings and palms" },
      { src: __IMG["interior/living-suite.webp"],      w: 2200, h: 1333, size: "wide",   cap: "Interior — living room", alt: "Interior visualisation of a living room" },
      { src: __IMG["plans/typical-floor-1-9.webp"],    w: 2400, h: 1716, size: "plan",   cap: "Typical floor plan, floors 1–9", alt: "Colour-coded typical apartment layout for floors 1 to 9" }
    ],

    /* ---- Amenities (brochure + NBG brief) ----------------------------- */
    amenities: [
      { id: "rooftop",   title: "Rooftop restaurant", text: "A dining destination above the tower, with outdoor terrace space shown on the roof layout.", icon: "roof",   img: __IMG["exterior/ocean-mist-rooftop.webp"] },
      { id: "lifts",     title: "High-speed lifts",   text: "Quick, quiet vertical access to every residence.", icon: "lift" },
      { id: "power",     title: "Backup power",       text: "A backup power generator for continuity at home.", icon: "bolt" },
      { id: "water",     title: "Borehole",           text: "On-site borehole water supply.", icon: "drop" },
      { id: "parking",   title: "Parking",            text: "Dedicated parking, laid out on the ground-floor plan.", icon: "car", img: __IMG["plans/ground-floor-layout.webp"] },
      { id: "reception", title: "Reception & waiting area", text: "A welcoming arrival point for residents and guests.", icon: "desk" },
      { id: "security",  title: "CCTV & 24-hour security",  text: "Round-the-clock security and camera coverage.", icon: "shield" },
      { id: "lounge",    title: "Spacious lounge",    text: "A brochure feature: generous lounge space within the development.", icon: "sofa" }
    ],

    /* ---- Location (brochure distances, approximate) ------------------ */
    location: [
      { cat: "Education",     items: [ { n: "Deenway International School", t: "2 min", m: "walk" } ] },
      { cat: "Places of worship", items: [ { n: "Masjid Rahman", t: "2 min", m: "walk" } ] },
      { cat: "Shopping",      items: [ { n: "Carrefour & Promade Mall", t: "5 min", m: "drive" }, { n: "Nyali Centre", t: "10 min", m: "drive" } ] },
      { cat: "Healthcare",    items: [ { n: "Premier Hospital", t: "5 min", m: "drive" } ] },
      { cat: "Recreation",    items: [ { n: "Nyali Golf & Country Club", t: "4 min", m: "drive" }, { n: "Mamba Village & Wild Waters", t: "3 min", m: "drive" } ] },
      { cat: "Beaches",       items: [ { n: "Nyali Beach", t: "4 min", m: "drive" } ] },
      { cat: "Everyday services", items: [ { n: "Nyali Police Station", t: "5 min", m: "drive" }, { n: "Shell / Total Energies", t: "5 min", m: "drive" } ] }
    ]
  };
})();


/* core.js — shared helpers (namespace: window.NBG) */
(function () {
  var NBG = window.NBG = {};
  NBG.cfg = window.NBG_CONFIG;
  NBG.data = window.NBG_CONTENT;
  NBG.$ = function (s, r) { return (r || document).querySelector(s); };
  NBG.$$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  NBG.reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  NBG.esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  /* images that ship an -800 responsive variant */
  NBG.hasSmall = /a^/; var _unused = /(ocean-mist-(front|hero|facade|aerial-site|street)|brochure-location-map|kitchen-breakfast-bar|living-(open-plan|media-wall|suite|lounge)|dining-table|bathroom)\.webp$/;
  NBG.img = function (src, alt, o) {
    o = o || {};
    var s = '<img src="' + src + '"';
    if (NBG.hasSmall.test(src) && !/-800\.webp$/.test(src) && o.w > 800) {
      s += ' srcset="' + src.replace(".webp", "-800.webp") + ' 800w, ' + src + " " + o.w + 'w"';
      if (o.sizes) s += ' sizes="' + o.sizes + '"';
    }
    if (o.w) s += ' width="' + o.w + '"';
    if (o.h) s += ' height="' + o.h + '"';
    s += ' alt="' + NBG.esc(alt || "") + '"';
    if (o.lazy !== false) s += ' loading="lazy" decoding="async"';
    if (o.cls) s += ' class="' + o.cls + '"';
    return s + ">";
  };

  /* contact helpers — only active when NBG fills config.js */
  NBG.waNumber = function () { return String((NBG.cfg.contact.whatsappNumber || "")).replace(/\D/g, ""); };
  NBG.waLink = function (msg) {
    var n = NBG.waNumber();
    if (!n) return "";
    return "https://wa.me/" + n + "?text=" + encodeURIComponent(msg || "Hello Next Bridge Group, I am interested in Ocean Mist Tower and would like to learn more about the available residences.");
  };
  NBG.mailLink = function (subject, body) {
    var e = NBG.cfg.contact.email;
    if (!e) return "";
    return "mailto:" + e + "?subject=" + encodeURIComponent(subject || "Ocean Mist Tower enquiry") + "&body=" + encodeURIComponent(body || "");
  };

  /* scroll lock + focus trap for modal surfaces */
  var locks = 0;
  NBG.lockScroll = function (on) {
    locks += on ? 1 : -1; if (locks < 0) locks = 0;
    document.documentElement.style.overflow = locks ? "hidden" : "";
  };
  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]):not(.hp),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  NBG.trapFocus = function (container) {
    var prev = document.activeElement;
    function key(e) {
      if (e.key !== "Tab") return;
      var f = NBG.$$(FOCUSABLE, container).filter(function (n) { return n.offsetParent !== null || n === document.activeElement; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    container.addEventListener("keydown", key);
    return function release() { container.removeEventListener("keydown", key); if (prev && prev.focus) try { prev.focus({ preventScroll: true }); } catch (e) {} };
  };

  /* show / hide a modal surface with transition */
  NBG.openModal = function (el, focusSel) {
    el.hidden = false; void el.offsetWidth; el.classList.add("open");
    NBG.lockScroll(true);
    el._release = NBG.trapFocus(el);
    var f = focusSel ? NBG.$(focusSel, el) : null;
    if (f) f.focus({ preventScroll: true });
  };
  NBG.closeModal = function (el) {
    if (el.hidden) return;
    el.classList.remove("open");
    NBG.lockScroll(false);
    if (el._release) { el._release(); el._release = null; }
    setTimeout(function () { if (!el.classList.contains("open")) el.hidden = true; }, 480);
  };

  NBG.unitById = function (id) { return NBG.data.units.filter(function (u) { return u.id === id; })[0]; };
  NBG.fmtSqm = function (n) { return n + " sqm"; };
})();


/* fx.js — readiness gate, scroll progress, cursor, tilt, magnetic buttons */
(function () {
  var NBG = window.NBG, $ = NBG.$, $$ = NBG.$$;
  var q = []; NBG.ready = false;
  NBG.whenReady = function (f) { NBG.ready ? f() : q.push(f); };
  NBG.setReady = function () { NBG.ready = true; q.splice(0).forEach(function (f) { try { f(); } catch (e) {} }); };

  function progress() {
    var bar = $("#scroll-progress"), t = false;
    function u() { t = false; var h = document.documentElement.scrollHeight - innerHeight; bar.style.transform = "scaleX(" + (h > 0 ? Math.min(scrollY / h, 1) : 0) + ")"; }
    addEventListener("scroll", function () { if (!t) { t = true; requestAnimationFrame(u); } }, { passive: true }); u();
  }
  function cursor() {
    if (NBG.reduced || !matchMedia("(pointer:fine)").matches) return;
    var c = $("#cursor"), s = $("span", c), x = 0, y = 0, tx = 0, ty = 0, on = false;
    document.documentElement.classList.add("has-cursor");
    addEventListener("mousemove", function (e) { tx = e.clientX; ty = e.clientY; if (!on) { x = tx; y = ty; on = true; } c.classList.remove("hide"); });
    document.addEventListener("mouseleave", function () { c.classList.add("hide"); });
    (function loop() { x += (tx - x) * .2; y += (ty - y) * .2; c.style.transform = "translate3d(" + x + "px," + y + "px,0)"; requestAnimationFrame(loop); })();
    var LABEL = [[".tile,.tour-stage .open,.open-unit,.bld-plan", "View"], [".pz,.map-frame", "Drag"], [".film-stage", ""]];
    document.addEventListener("mouseover", function (e) {
      var t = e.target, lab = null;
      LABEL.forEach(function (l) { if (lab === null && t.closest(l[0])) lab = l[1]; });
      var hov = !!t.closest("a,button,.chip,.size-chip,input,select,label");
      c.classList.toggle("label", !!lab); s.textContent = lab || "";
      c.classList.toggle("hover", hov && !lab);
    });
  }
  function tilt() {
    if (NBG.reduced || !matchMedia("(pointer:fine)").matches) return;
    $$(".cat-card").forEach(function (el) {
      el.addEventListener("mousemove", function (e) { var r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5; el.style.setProperty("--ry", (px * 7).toFixed(2) + "deg"); el.style.setProperty("--rx", (-py * 7).toFixed(2) + "deg"); });
      el.addEventListener("mouseleave", function () { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); });
    });
  }
  function magnetic() {
    if (NBG.reduced || !matchMedia("(pointer:fine)").matches) return;
    document.addEventListener("mousemove", function (e) {
      var b = e.target.closest && e.target.closest(".btn,.icon-btn,.wa-float,.sl-fab"); if (!b || b.disabled) return;
      var r = b.getBoundingClientRect(); b.style.translate = ((e.clientX - r.left - r.width / 2) * .16).toFixed(1) + "px " + ((e.clientY - r.top - r.height / 2) * .26).toFixed(1) + "px";
    });
    document.addEventListener("mouseout", function (e) { var b = e.target.closest && e.target.closest(".btn,.icon-btn,.wa-float,.sl-fab"); if (b) b.style.translate = ""; });
  }
  NBG.fx = { init: function () { progress(); cursor(); tilt(); magnetic(); } };
})();


/* loader.js — cinematic preloader: water-fill orb, real hero-image gate, split-panel reveal */
(function () {
  var NBG = window.NBG, $ = NBG.$;
  NBG.loader = {
    init: function () {
      var el = $("#loader"); if (!el) { NBG.setReady(); return; }
      if (NBG.reduced) { el.remove(); NBG.setReady(); return; }
      NBG.lockScroll(true);
      var fill = $("#loader-fill"), pct = $("#loader-pct"), status = $("#loader-status"), progress = $("#loader-progress"), hero = $(".hero-img"), t0 = performance.now(), MIN = 2300, heroOk = false, shown = 0, finished = false;
      function heroDone() { heroOk = true; }
      if (hero && hero.complete && hero.naturalWidth) heroDone(); else if (hero) { hero.addEventListener("load", heroDone, { once: true }); hero.addEventListener("error", heroDone, { once: true }); } else heroOk = true;
      function updateProgress(value) {
        pct.textContent = value;
        progress.setAttribute("aria-valuenow", value);
        fill.style.transform = "scaleX(" + Math.max(0, Math.min(1, shown / 100)) + ")";
        status.textContent = value < 28 ? "Laying the foundation" : value < 62 ? "Connecting the details" : value < 94 ? "Bringing the experience together" : "Ready to discover";
      }
      function finish() {
        if (finished) return; finished = true; shown = 100; updateProgress(100);
        setTimeout(function () {
          el.classList.add("done"); NBG.setReady(); NBG.lockScroll(false);
          setTimeout(function () { el.remove(); }, 1400);
        }, 350);
      }
      (function tick(now) {
        var el_ = now - t0, target = Math.min(el_ / MIN, 1) * (heroOk ? 100 : 88);
        shown += (target - shown) * .12; var v = Math.min(Math.round(shown), 99);
        updateProgress(v);
        if (finished) return;
        if (heroOk && el_ >= MIN && shown > 97) { finish(); return; }
        if (el_ > 9000) { finish(); return; }
        requestAnimationFrame(tick);
      })(t0);
    }
  };
})();


/* motion.js — reveal system, split text, parallax, counters, header (transform/opacity only) */
(function () {
  var NBG = window.NBG, $ = NBG.$, $$ = NBG.$$;

  function splitText(el) {
    var n = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (c) {
        if (c.nodeType === 3) {
          var parts = c.textContent.split(/(\s+)/), frag = document.createDocumentFragment();
          parts.forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(" ")); return; }
            var w = document.createElement("span"); w.className = "w";
            var i = document.createElement("i"); i.style.setProperty("--i", n++); i.textContent = p;
            w.appendChild(i); frag.appendChild(w);
          });
          node.replaceChild(frag, c);
        } else if (c.nodeType === 1 && c.tagName !== "BR") walk(c);
      });
    })(el);
  }

  NBG.motion = {
    init: function () {
      var reduced = NBG.reduced;

      /* split headings */
      $$("[data-split]").forEach(function (el) {
        if (!el.getAttribute("aria-label")) el.setAttribute("aria-label", el.textContent.replace(/\s+/g, " ").trim());
        splitText(el);
        $$(".w", el).forEach(function (w) { w.setAttribute("aria-hidden", "true"); });
      });

      /* header state */
      var header = $("[data-nav]"), wa = $("#wa-float"), hero = $("#hero");
      function onScroll() {
        var y = window.scrollY;
        header.classList.toggle("is-solid", y > 40);
        if (wa) wa.classList.toggle("show", y > (hero ? hero.offsetHeight * 0.55 : 400));
      }
      window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

      /* reveal observer */
      var targets = $$(".reveal,.mask-reveal,[data-split]");
      if (!("IntersectionObserver" in window) || reduced) { targets.forEach(function (t) { t.classList.add("is-in"); }); }
      else {
        var io = new IntersectionObserver(function (es) {
          es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
        }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
        targets.forEach(function (t) {
          if (hero && hero.contains(t)) return;
          io.observe(t);
        });
      }
      /* choreographed hero entrance */
      var heroTitle = $(".hero-title");
      if (heroTitle) { heroTitle.style.setProperty("--base", "250ms"); NBG.whenReady(function () { setTimeout(function () { heroTitle.classList.add("is-in"); $$(".hero .reveal").forEach(function (r) { r.classList.add("is-in"); }); }, 120); }); }

      /* counters */
      var counters = $$("[data-count]");
      function run(el) {
        var end = +el.getAttribute("data-count"), t0 = null, dur = 1700;
        function step(t) { if (!t0) t0 = t; var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 4); el.textContent = Math.round(end * e); if (p < 1) requestAnimationFrame(step); }
        requestAnimationFrame(step);
      }
      if ("IntersectionObserver" in window && !reduced) {
        counters.forEach(function (c) { c.textContent = "0"; });
        var cio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { run(e.target); cio.unobserve(e.target); } }); }, { threshold: 0.6 });
        counters.forEach(function (c) { cio.observe(c); });
      }

      /* parallax */
      var px = $$("[data-parallax]");
      if (px.length && !reduced) {
        var vis = new Set();
        var pio = new IntersectionObserver(function (es) { es.forEach(function (e) { e.isIntersecting ? vis.add(e.target) : vis.delete(e.target); }); }, { rootMargin: "20% 0px" });
        px.forEach(function (p) { pio.observe(p); });
        var tick = false;
        function frame() {
          tick = false; var vh = window.innerHeight;
          vis.forEach(function (el) {
            var r = el.getBoundingClientRect(), k = parseFloat(el.getAttribute("data-parallax")) || 0;
            var dy = (r.top + r.height / 2 - vh / 2) * k;
            el.style.transform = "translate3d(0," + (-dy).toFixed(1) + "px,0)";
          });
        }
        window.addEventListener("scroll", function () { if (!tick) { tick = true; requestAnimationFrame(frame); } }, { passive: true });
        window.addEventListener("resize", frame);
        frame();
      }
    }
  };
})();


/* viewer.js — accessible pan / zoom for floor plans, 3D layouts and the location map */
(function () {
  var NBG = window.NBG;

  function PanZoom(box, img, o) {
    o = o || {};
    var self = this, s = 1, x = 0, y = 0, fitS = 1, iw = 0, ih = 0, pts = {}, pinch = null, drag = null, maxZ = o.max || 6;
    this.box = box; this.img = img;

    function size() { return { w: box.clientWidth, h: box.clientHeight }; }
    function apply() { img.style.transform = "translate3d(" + x + "px," + y + "px,0) scale(" + s + ")"; }
    function clamp() {
      var b = size(), w = iw * s, h = ih * s;
      x = w <= b.w ? (b.w - w) / 2 : Math.min(0, Math.max(b.w - w, x));
      y = h <= b.h ? (b.h - h) / 2 : Math.min(0, Math.max(b.h - h, y));
    }
    function fit() {
      if (!iw) return; var b = size();
      fitS = (o.fit === "cover" ? Math.max : Math.min)(b.w / iw, b.h / ih) * (o.fit === "cover" ? 1 : 0.96);
      s = fitS; x = (b.w - iw * s) / 2; y = (b.h - ih * s) / 2; apply();
    }
    function zoomAt(f, cx, cy) {
      var ns = Math.min(Math.max(s * f, fitS), fitS * maxZ), k = ns / s;
      x = cx - (cx - x) * k; y = cy - (cy - y) * k; s = ns; clamp(); apply();
    }
    function center() { var b = size(); return { x: b.w / 2, y: b.h / 2 }; }
    this.zoomIn = function () { var c = center(); zoomAt(1.5, c.x, c.y); };
    this.zoomOut = function () { var c = center(); zoomAt(1 / 1.5, c.x, c.y); };
    this.reset = fit;
    this.refit = function () { if (s <= fitS * 1.001) fit(); else { clamp(); apply(); } };

    function ready() { iw = img.naturalWidth; ih = img.naturalHeight; img.style.width = iw + "px"; img.style.height = ih + "px"; fit(); }
    if (img.complete && img.naturalWidth) ready(); else img.addEventListener("load", ready, { once: true });
    if ("ResizeObserver" in window) new ResizeObserver(function () { self.refit(); }).observe(box);

    box.addEventListener("wheel", function (e) {
      if (o.wheel === "ctrl" && !(e.ctrlKey || e.metaKey)) return;
      e.preventDefault(); var r = box.getBoundingClientRect();
      zoomAt(e.deltaY < 0 ? 1.18 : 1 / 1.18, e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });

    box.addEventListener("pointerdown", function (e) {
      if (o.mouseOnly && e.pointerType !== "mouse") return;
      if (e.target.closest && e.target.closest("button")) return;
      pts[e.pointerId] = { x: e.clientX, y: e.clientY };
      try { box.setPointerCapture(e.pointerId); } catch (er) {}
      var ids = Object.keys(pts);
      if (ids.length === 1) { drag = { x: e.clientX, y: e.clientY, ox: x, oy: y }; box.classList.add("grabbing"); }
      if (ids.length === 2) { var a = pts[ids[0]], b = pts[ids[1]]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) }; drag = null; }
    });
    box.addEventListener("pointermove", function (e) {
      if (!pts[e.pointerId]) return; pts[e.pointerId] = { x: e.clientX, y: e.clientY };
      var ids = Object.keys(pts);
      if (ids.length === 2 && pinch) {
        var a = pts[ids[0]], b = pts[ids[1]], d = Math.hypot(a.x - b.x, a.y - b.y), r = box.getBoundingClientRect();
        zoomAt(d / pinch.d, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top); pinch.d = d;
      } else if (drag) { x = drag.ox + (e.clientX - drag.x); y = drag.oy + (e.clientY - drag.y); clamp(); apply(); }
    });
    function up(e) { delete pts[e.pointerId]; pinch = null; if (!Object.keys(pts).length) { drag = null; box.classList.remove("grabbing"); } }
    box.addEventListener("pointerup", up); box.addEventListener("pointercancel", up);
    box.addEventListener("dblclick", function (e) {
      var r = box.getBoundingClientRect();
      if (s > fitS * 1.2) fit(); else zoomAt(2.6, e.clientX - r.left, e.clientY - r.top);
    });
    box.addEventListener("keydown", function (e) {
      var k = e.key, step = 60;
      if (k === "+" || k === "=") { self.zoomIn(); e.preventDefault(); }
      else if (k === "-" || k === "_") { self.zoomOut(); e.preventDefault(); }
      else if (k === "0") { fit(); e.preventDefault(); }
      else if (k.indexOf("Arrow") === 0) { if (k === "ArrowLeft") x += step; if (k === "ArrowRight") x -= step; if (k === "ArrowUp") y += step; if (k === "ArrowDown") y -= step; clamp(); apply(); e.preventDefault(); }
    });
  }
  NBG.PanZoom = PanZoom;
})();


/* lightbox.js — full-screen gallery: keyboard, touch swipe, click/double-tap zoom, drag-pan */
(function () {
  var NBG = window.NBG, $ = NBG.$;
  var box, stage, img, cap, count, items = [], idx = 0, zoom = 1, tx = 0, ty = 0, drag = null, swipe = null, lastTap = 0;

  function apply() { img.style.transform = "translate3d(" + tx + "px," + ty + "px,0) scale(" + zoom + ")"; stage.classList.toggle("zoomed", zoom > 1); }
  function reset() { zoom = 1; tx = ty = 0; apply(); }
  function show(i, animate) {
    idx = (i + items.length) % items.length; var it = items[idx];
    function set() { img.src = it.src; img.alt = it.alt || it.cap || ""; cap.textContent = it.cap || ""; count.textContent = ("0" + (idx + 1)).slice(-2) + " / " + ("0" + items.length).slice(-2); reset(); img.classList.remove("swap"); }
    if (animate) { img.classList.add("swap"); setTimeout(set, 220); } else set();
    [1, -1].forEach(function (d) { var n = items[(idx + d + items.length) % items.length]; if (n) { var p = new Image(); p.src = n.src; } });
  }
  function zoomAt(f, cx, cy) {
    var r = stage.getBoundingClientRect(), ox = cx - (r.left + r.width / 2), oy = cy - (r.top + r.height / 2);
    var ns = Math.min(Math.max(zoom * f, 1), 5), k = ns / zoom;
    tx = ox - (ox - tx) * k; ty = oy - (oy - ty) * k; zoom = ns; if (zoom === 1) { tx = ty = 0; } apply();
  }
  function close() { NBG.closeModal(box); document.removeEventListener("keydown", keys); }
  function keys(e) {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") show(idx + 1, true);
    else if (e.key === "ArrowLeft") show(idx - 1, true);
    else if (e.key === "+" || e.key === "=") { var r = stage.getBoundingClientRect(); zoomAt(1.4, r.left + r.width / 2, r.top + r.height / 2); }
    else if (e.key === "-") { var r2 = stage.getBoundingClientRect(); zoomAt(1 / 1.4, r2.left + r2.width / 2, r2.top + r2.height / 2); }
  }

  NBG.lightbox = {
    init: function () {
      box = $("#lightbox"); stage = $("#lb-stage"); img = $("#lb-img"); cap = $("#lb-cap"); count = $("#lb-count");
      box.addEventListener("click", function (e) {
        var a = e.target.closest("[data-lb]"); if (!a) return;
        var act = a.getAttribute("data-lb"); if (act === "close") close(); else if (act === "next") show(idx + 1, true); else if (act === "prev") show(idx - 1, true);
      });
      stage.addEventListener("wheel", function (e) { e.preventDefault(); zoomAt(e.deltaY < 0 ? 1.2 : 1 / 1.2, e.clientX, e.clientY); }, { passive: false });
      stage.addEventListener("pointerdown", function (e) {
        stage.setPointerCapture(e.pointerId);
        if (zoom > 1) { drag = { x: e.clientX, y: e.clientY, tx: tx, ty: ty }; stage.classList.add("dragging"); }
        else swipe = { x: e.clientX, y: e.clientY, t: Date.now() };
        var now = Date.now(); if (now - lastTap < 300) { zoom > 1 ? reset() : zoomAt(2.4, e.clientX, e.clientY); lastTap = 0; swipe = null; } else lastTap = now;
      });
      stage.addEventListener("pointermove", function (e) { if (drag) { tx = drag.tx + e.clientX - drag.x; ty = drag.ty + e.clientY - drag.y; apply(); } });
      stage.addEventListener("pointerup", function (e) {
        stage.classList.remove("dragging");
        if (drag) { var moved = Math.abs(e.clientX - drag.x) + Math.abs(e.clientY - drag.y); drag = null; return; }
        if (swipe) { var dx = e.clientX - swipe.x, dy = e.clientY - swipe.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) show(idx + (dx < 0 ? 1 : -1), true);
          else if (Math.abs(dx) < 6 && Math.abs(dy) < 6 && e.pointerType === "mouse") zoomAt(zoom > 1 ? 1 / zoom : 2.2, e.clientX, e.clientY);
          swipe = null; }
      });
      stage.addEventListener("pointercancel", function () { drag = swipe = null; stage.classList.remove("dragging"); });
    },
    open: function (list, i) {
      items = list; document.addEventListener("keydown", keys);
      NBG.openModal(box, ".lb-close"); show(i || 0, false);
      var multi = items.length > 1; $(".lb-prev", box).hidden = !multi; $(".lb-next", box).hidden = !multi;
    }
  };
})();


/* residences.js — category selector, size chips, stage, and full-screen unit viewer */
(function () {
  var NBG = window.NBG, $ = NBG.$, $$ = NBG.$$, esc = NBG.esc;
  var D, state = { cat: "1bed", unit: "1bed-d", stageView: "iso" }, dlg, pz = null, dState = { id: null, view: "plan" }, pushed = false;

  function unitsOf(cat) { return D.units.filter(function (u) { return u.cat === cat; }); }
  function catOf(id) { return D.categories.filter(function (c) { return c.id === id; })[0]; }

  function renderCats() {
    var wrap = $("#cat-cards");
    wrap.innerHTML = D.categories.map(function (c, i) {
      var media = c.video
        ? '<video class="cc-film" data-broadcast-video muted loop playsinline preload="none" width="1280" height="720" poster="' + esc(c.img) + '" aria-hidden="true"><source src="' + esc(c.video) + '" type="video/mp4"></video><span class="cc-video-status" data-clip-status role="status" aria-live="polite"></span>'
        : NBG.img(c.img, "", { w: 1200, h: 900 });
      return '<button class="cat-card" role="tab" type="button" data-cat="' + c.id + '"' + (c.video ? ' data-broadcast-clip' : '') + ' aria-selected="' + (c.id === state.cat) + '">' +
        '<span class="cc-img">' + media + '</span>' +
        (c.video ? '<span class="cc-film-tag">Film excerpt</span>' : '') +
        '<span class="cc-body"><span class="cc-num">0' + (i + 1) + '</span><h3>' + esc(c.label) + '</h3><span class="cc-range">' + esc(c.range) + '</span><p>' + esc(c.blurb) + '</p><span class="cc-cta">Explore layouts <span aria-hidden="true">→</span></span></span></button>';
    }).join("");
    $$(".cat-card", wrap).forEach(function (b) { b.addEventListener("click", function () { selectCat(b.getAttribute("data-cat"), true); }); });
  }
  function selectCat(cat, scroll) {
    state.cat = cat; state.unit = unitsOf(cat)[0].id; state.stageView = unitById(state.unit).iso ? "iso" : "plan";
    $$(".cat-card").forEach(function (b) { b.setAttribute("aria-selected", b.getAttribute("data-cat") === cat); });
    renderSizes(); renderStage();
    if (scroll) $("#explorer").scrollIntoView({ behavior: NBG.reduced ? "auto" : "smooth", block: "start" });
  }
  function unitById(id) { return NBG.unitById(id); }

  function renderSizes() {
    var row = $("#size-row");
    row.innerHTML = unitsOf(state.cat).map(function (u) {
      return '<button class="size-chip" role="tab" type="button" data-unit="' + u.id + '" aria-selected="' + (u.id === state.unit) + '"><b>' + u.sqm + '<small>sqm</small></b><span>' + (u.layoutOnly ? "3 bed + DSQ" : "Type " + u.code) + '</span></button>';
    }).join("");
    $$(".size-chip", row).forEach(function (b) { b.addEventListener("click", function () { state.unit = b.getAttribute("data-unit"); var u = unitById(state.unit); state.stageView = u.iso ? "iso" : "plan"; $$(".size-chip", row).forEach(function (x) { x.setAttribute("aria-selected", x === b); }); renderStage(); }); });
    row.addEventListener("keydown", arrowTabs);
  }
  function arrowTabs(e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var tabs = $$('[role="tab"]', e.currentTarget), i = tabs.indexOf(document.activeElement); if (i < 0) return;
    var n = tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length]; n.focus(); n.click(); e.preventDefault();
  }

  function specHTML(u) {
    var rows = [["Residence", u.name], ["Area", NBG.fmtSqm(u.sqm)], ["Bedrooms", u.beds], ["Bathrooms", u.baths], ["Includes", u.rooms]];
    if (u.layoutOnly) rows = [["Residence", u.name], ["Area", NBG.fmtSqm(u.sqm)], ["Bedrooms", u.beds], ["Floor", "10th floor layout"]];
    return '<dl class="spec">' + rows.map(function (r) { return '<div><dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join("") + '</dl>';
  }

  function renderStage() {
    var u = unitById(state.unit), media = $("#stage-media"), info = $("#stage-info");
    var showIso = state.stageView === "iso" && !!u.iso, src = showIso ? u.iso : u.plan, alt = showIso ? u.isoAlt : u.planAlt;
    media.className = "stage-media" + (showIso ? "" : " plan");
    media.innerHTML = '<div class="stage-media-head"><span class="stage-view-label"><span class="stage-view-dot" aria-hidden="true"></span>' + (showIso ? "3D layout" : "Floor plan") + '</span>' +
      (u.iso ? '<div class="stage-toggle" role="group" aria-label="Visualisation"><button type="button" data-v="iso" aria-pressed="' + showIso + '">Layout</button><button type="button" data-v="plan" aria-pressed="' + !showIso + '">Plan</button></div>' : "") + '</div>' +
      '<button type="button" class="open-unit" aria-label="Open ' + esc(u.name) + ' visual in full screen"><span class="open-unit-label">Expand view <span aria-hidden="true">↗</span></span></button>' +
      '<img src="' + src + '" alt="' + esc(alt) + '" decoding="async">';
    $$(".stage-toggle button", media).forEach(function (b) { b.addEventListener("click", function () { state.stageView = b.getAttribute("data-v"); renderStage(); }); });
    $(".open-unit", media).addEventListener("click", function () { openUnit(u.id, showIso ? "iso" : "plan"); });
    info.innerHTML = '<p class="eyebrow">' + esc(catOf(u.cat).label) + '</p>' +
      '<h3>' + esc(u.name) + '</h3>' +
      '<div class="stage-area"><p class="sqm">' + u.sqm + '<small>sqm</small></p><span>Indicative area</span></div>' + specHTML(u) +
      (u.pending ? '<p class="pending-note"><strong>To be confirmed:</strong> ' + esc(u.pending) + '</p>' : "") +
      '<div class="stage-actions"><button class="btn btn-gold" type="button" data-act="plan">View floor plan</button><button class="btn btn-ghost" type="button" data-act="enq">Request a viewing</button>' + NBG.shortlist.heart(u.id) + '</div>';
    info.querySelector('[data-act="plan"]').addEventListener("click", function () { openUnit(u.id, "plan"); });
    info.querySelector('[data-act="enq"]').addEventListener("click", function () { NBG.enquire("viewing", u.id); });
  }

  /* ---- full-screen unit viewer ---- */
  function renderDialog() {
    var u = unitById(dState.id), v = dState.view, viewer = $("#ud-viewer"), side = $("#ud-side");
    if (v === "iso" && !u.iso) v = dState.view = "plan";
    $("#ud-eyebrow").textContent = catOf(u.cat).label + " · " + NBG.fmtSqm(u.sqm);
    $("#ud-title").textContent = u.name + (u.layoutOnly ? " — " + u.sqm + " sqm" : "");
    $$(".ud-tabs button", dlg).forEach(function (b) { var on = b.getAttribute("data-view") === v; b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1; b.hidden = b.getAttribute("data-view") === "iso" && !u.iso; });
    pz = null; viewer.innerHTML = "";
    if (v === "rooms") {
      var imgs = []; D.rooms.forEach(function (r) { if (r.id !== "rooftop") r.images.forEach(function (im) { imgs.push({ src: im.src, alt: im.alt, cap: r.label + " — interior visualisation" }); }); });
      viewer.innerHTML = '<div class="ud-rooms">' + imgs.map(function (im, i) { return '<button type="button" data-i="' + i + '" aria-label="Open ' + esc(im.cap) + '">' + NBG.img(im.src, im.alt, { w: 800 }) + '</button>'; }).join("") + '</div>';
      $$(".ud-rooms button", viewer).forEach(function (b) { b.addEventListener("click", function () { NBG.lightbox.open(imgs, +b.getAttribute("data-i")); }); });
    } else {
      var src = v === "iso" ? u.iso : u.plan, alt = v === "iso" ? u.isoAlt : u.planAlt;
      viewer.innerHTML = '<div class="pz' + (v === "iso" ? " dark-bg" : "") + '" tabindex="0" role="img" aria-label="' + esc(alt) + '. Zoom with the buttons, mouse wheel or pinch; drag to pan."><img src="' + src + '" alt="" draggable="false"></div>' +
        '<div class="pz-controls"><button class="icon-btn" type="button" data-z="in" aria-label="Zoom in">+</button><button class="icon-btn" type="button" data-z="out" aria-label="Zoom out">−</button><button class="icon-btn" type="button" data-z="reset" aria-label="Reset view">⟲</button></div>' +
        '<p class="pz-hint">Scroll / pinch to zoom · drag to pan</p>';
      var box = $(".pz", viewer); pz = new NBG.PanZoom(box, $("img", box), { max: 7 });
      $$(".pz-controls button", viewer).forEach(function (b) { b.addEventListener("click", function () { var z = b.getAttribute("data-z"); z === "in" ? pz.zoomIn() : z === "out" ? pz.zoomOut() : pz.reset(); }); });
      setTimeout(function () { var h = $(".pz-hint", viewer); if (h) h.style.opacity = 0; }, 4500);
    }
    var legend = u.legend && u.legend.length ? '<h3>Room arrangement</h3><ol>' + u.legend.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join("") + '</ol>' : "";
    side.innerHTML = '<h3>' + esc(u.name) + '</h3>' + specHTML(u) + (u.pending ? '<p class="pending-note"><strong>To be confirmed:</strong> ' + esc(u.pending) + '</p>' : "") + legend +
      '<h3>Switch configuration</h3><div class="size-row" style="margin-bottom:8px">' + D.units.map(function (x) { return '<button class="size-chip" type="button" data-u="' + x.id + '" aria-selected="' + (x.id === u.id) + '" style="min-width:0;padding:8px 12px"><b style="font-size:20px">' + x.sqm + '<small>sqm</small></b><span>' + (x.layoutOnly ? "3 bed" : x.code) + '</span></button>'; }).join("") + '</div>' +
      '<div class="stage-actions"><button class="btn btn-gold" type="button" data-act="enq">Request a viewing</button>' + NBG.shortlist.heart(u.id) + '<button class="btn btn-ghost btn-sm" type="button" data-act="share">Share</button><a class="btn btn-ghost btn-sm" data-act="dl" href="' + u.plan + '" download="ocean-mist-' + u.id + '-floor-plan.webp">Download plan</a></div>';
    var sh = $('[data-act="share"]', side); sh.addEventListener("click", function () { var url = location.origin + location.pathname + "#residence-" + u.id, data = { title: u.name + " — Ocean Mist Tower", url: url }; if (navigator.share) navigator.share(data).catch(function () {}); else if (navigator.clipboard) navigator.clipboard.writeText(url).then(function () { sh.textContent = "Link copied"; setTimeout(function () { sh.textContent = "Share"; }, 1800); }, function () {}); });
    $$("[data-u]", side).forEach(function (b) { b.addEventListener("click", function () { dState.id = b.getAttribute("data-u"); renderDialog(); }); });
    $('[data-act="enq"]', side).addEventListener("click", function () { closeUnit(); NBG.enquire("viewing", u.id); });
  }

  function openUnit(id, view, fromHash) {
    dState.id = id; dState.view = view || "plan";
    renderDialog();
    if (dlg.hidden) { NBG.openModal(dlg, "[data-close]"); document.addEventListener("keydown", esc2); }
    if (!fromHash) { history.pushState({ unit: id }, "", "#residence-" + id); pushed = true; }
  }
  function esc2(e) { if (e.key === "Escape" && !$("#lightbox").classList.contains("open")) closeUnit(); }
  function closeUnit(fromPop) {
    document.removeEventListener("keydown", esc2); NBG.closeModal(dlg);
    if (!fromPop && pushed) { pushed = false; history.back(); }
    else if (!fromPop && /^#residence-/.test(location.hash)) history.replaceState(null, "", location.pathname + location.search + "#residences");
  }

  NBG.residences = {
    init: function () {
      D = NBG.data; dlg = $("#unit-dialog");
      renderCats(); renderSizes(); renderStage();
      $("[data-close]", dlg).addEventListener("click", function () { closeUnit(); });
      $(".ud-tabs", dlg).addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) { dState.view = b.getAttribute("data-view"); renderDialog(); } });
      $(".ud-tabs", dlg).addEventListener("keydown", arrowTabs);
      window.addEventListener("popstate", function () {
        var m = /^#residence-(.+)$/.exec(location.hash);
        if (m && NBG.unitById(m[1])) openUnit(m[1], "plan", true); else if (!dlg.hidden) { pushed = false; closeUnit(true); }
      });
      var m = /^#residence-(.+)$/.exec(location.hash);
      if (m && NBG.unitById(m[1])) { var u = NBG.unitById(m[1]); state.cat = u.cat; state.unit = u.id; renderCats(); renderSizes(); renderStage(); openUnit(u.id, "plan", true); }
    },
    open: openUnit
  };
})();


/* tour.js — "Step inside Ocean Mist": room selector with cinematic cross-fades */
(function () {
  var NBG = window.NBG, $ = NBG.$, $$ = NBG.$$, esc = NBG.esc;
  var rooms, ri = 0, ii = 0, timer = null, visible = false;

  function build() {
    $("#tour-tabs").innerHTML = rooms.map(function (r, i) { return '<button role="tab" type="button" data-r="' + i + '" aria-selected="' + (i === ri) + '" tabindex="' + (i === ri ? 0 : -1) + '">' + esc(r.label) + '</button>'; }).join("");
    $$("#tour-tabs button").forEach(function (b) { b.addEventListener("click", function () { go(+b.getAttribute("data-r")); }); });
    $("#tour-tabs").addEventListener("keydown", function (e) { if (e.key === "ArrowRight") go(ri + 1, true); else if (e.key === "ArrowLeft") go(ri - 1, true); });
  }
  function paint(animate) {
    var r = rooms[ri], stage = $("#tour-stage");
    stage.innerHTML = r.images.map(function (im, i) { return '<div class="slide' + (i === ii ? " on" : "") + '">' + NBG.img(im.src, im.alt, { w: 2000, sizes: "(max-width:900px) 100vw, 60vw", lazy: i > 0 || !animate }) + '</div>'; }).join("") +
      '<button class="open" type="button" aria-label="Open ' + esc(r.label) + ' images full screen"></button>' +
      (r.images.length > 1 ? '<div class="dots" role="group" aria-label="Images in this room">' + r.images.map(function (_, i) { return '<button type="button" data-i="' + i + '" class="' + (i === ii ? "on" : "") + '" aria-label="Image ' + (i + 1) + '"></button>'; }).join("") + '</div>' : "");
    $(".open", stage).addEventListener("click", fullscreen);
    $$(".dots button", stage).forEach(function (b) { b.addEventListener("click", function (e) { e.stopPropagation(); slide(+b.getAttribute("data-i")); restart(); }); });
    $("#tour-copy").innerHTML = '<h3>' + esc(r.title) + '</h3><p>' + esc(r.text) + '</p>';
    $("#tour-count").textContent = ("0" + (ri + 1)).slice(-2) + " / " + ("0" + rooms.length).slice(-2);
    $$("#tour-tabs button").forEach(function (b, i) { b.setAttribute("aria-selected", i === ri); b.tabIndex = i === ri ? 0 : -1; });
  }
  function slide(i) { ii = i; $$("#tour-stage .slide").forEach(function (s, k) { s.classList.toggle("on", k === i); }); $$("#tour-stage .dots button").forEach(function (d, k) { d.classList.toggle("on", k === i); }); }
  function go(i, focus) { ri = (i + rooms.length) % rooms.length; ii = 0; paint(true); if (focus) $$("#tour-tabs button")[ri].focus(); restart(); }
  function fullscreen() { var r = rooms[ri]; NBG.lightbox.open(r.images.map(function (im) { return { src: im.src, alt: im.alt, cap: r.label + " — " + r.title }; }), ii); }
  var touring = false, tt = null;
  function tourStep() { go(ri + 1); progress(); }
  function progress() { var st = $("#tour-stage"), p = document.createElement("div"); p.className = "tour-progress run"; st.appendChild(p); }
  function setTour(on) {
    touring = on; clearTimeout(tt); var b = $("#tour-play"); b.setAttribute("aria-pressed", on); $("#tour-play-l").textContent = on ? "Pause tour" : "Play tour";
    b.querySelector(".play-ico").style.cssText = on ? "border:0;width:10px;height:12px;border-left:3px solid currentColor;border-right:3px solid currentColor" : "";
    if (on) { progress(); (function loop() { tt = setTimeout(function () { if (touring) { tourStep(); loop(); } }, 6000); })(); } else { var p = $(".tour-progress"); if (p) p.remove(); }
  }
  function restart() { clearInterval(timer); if (NBG.reduced || !visible || rooms[ri].images.length < 2) return; timer = setInterval(function () { slide((ii + 1) % rooms[ri].images.length); }, 5500); }

  NBG.tour = {
    init: function () {
      rooms = NBG.data.rooms; build(); paint(false);
      $("#tour-prev").addEventListener("click", function () { go(ri - 1); });
      $("#tour-next").addEventListener("click", function () { go(ri + 1); });
      $("#tour-full").addEventListener("click", fullscreen);
      $("#tour-play").addEventListener("click", function () { setTour(!touring); });
      ["#tour-prev", "#tour-next", "#tour-tabs"].forEach(function (s) { $(s).addEventListener("click", function () { if (touring) setTour(false); }); });
      var shell = $("#tour-shell");
      shell.addEventListener("mouseenter", function () { clearInterval(timer); }); shell.addEventListener("mouseleave", restart);
      if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; restart(); }, { threshold: 0.3 }).observe(shell);
    }
  };
})();


/* sections.js — amenities, architectural gallery, location explorer, nav behaviour, contact details */
(function () {
  var NBG = window.NBG, $ = NBG.$, $$ = NBG.$$, esc = NBG.esc;
  var ICONS = {
    roof: '<path d="M4 20h24M7 20V12l9-7 9 7v8M12 20v-5h8v5M10 9h12" />',
    lift: '<rect x="7" y="4" width="18" height="24" rx="1"/><path d="M16 4v24M11 13l2-3 2 3M19 19l2 3 2-3" />',
    bolt: '<path d="M18 3L7 18h8l-2 11 12-16h-8z" />',
    drop: '<path d="M16 3C11 10 8 14 8 19a8 8 0 0 0 16 0c0-5-3-9-8-16z" /><path d="M12 20a4 4 0 0 0 4 4" />',
    car: '<path d="M5 20l2-7a2 2 0 0 1 2-1h14a2 2 0 0 1 2 1l2 7v5h-3v-2H8v2H5z" /><circle cx="10" cy="19" r="1.2"/><circle cx="22" cy="19" r="1.2"/>',
    desk: '<path d="M4 24h24M7 24V13h18v11M13 13V9h6v4M10 18h12" />',
    shield: '<path d="M16 3l10 4v8c0 6-4 11-10 14C10 26 6 21 6 15V7z" /><path d="M11 15l4 4 6-7" />',
    sofa: '<path d="M6 15v-3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3M4 17a2 2 0 0 1 4 0v4h16v-4a2 2 0 0 1 4 0v7H4zM8 24v3M24 24v3" />'
  };

  function nav() {
    var header = $("[data-nav]"), links = $$(".primary-nav a[data-spy]"), bar = $(".spy-bar"), ul = $(".primary-nav > ul");
    var group = { hero: "hero", about: "about", "ocean-mist": "ocean-mist", tour: "ocean-mist", film: "ocean-mist", daylight: "ocean-mist", gallery: "ocean-mist", lifestyle: "ocean-mist", residences: "residences", building: "residences", planner: "residences", amenities: "amenities", location: "location", enquire: "enquire" };
    function setActive(id) {
      var top = group[id]; var active = null;
      links.forEach(function (a) { var on = a.getAttribute("data-spy") === top && !a.closest(".sub"); a.classList.toggle("is-active", on); if (on) active = a; });
      if (active && ul) { var r = active.getBoundingClientRect(), pr = ul.getBoundingClientRect(); bar.style.width = r.width + "px"; bar.style.transform = "translateX(" + (r.left - pr.left) + "px)"; bar.style.opacity = 1; }
      else if (bar) bar.style.opacity = 0;
    }
    var ids = Object.keys(group), secs = ids.map(function (i) { return document.getElementById(i); }).filter(Boolean), current = "hero";
    function spy() {
      var y = window.scrollY + window.innerHeight * 0.35, cur = "hero";
      var best = -1; secs.forEach(function (s) { if (s.offsetTop <= y && s.offsetTop > best) { best = s.offsetTop; cur = s.id; } });
      if (cur !== current) { current = cur; setActive(cur); }
    }
    window.addEventListener("scroll", spy, { passive: true }); window.addEventListener("resize", function () { setActive(current); }); spy(); setActive(current);
    $$(".has-sub > a").forEach(function (a) {
      var li = a.parentNode; function s(v) { a.setAttribute("aria-expanded", v); }
      li.addEventListener("mouseenter", function () { s(true); }); li.addEventListener("mouseleave", function () { s(false); });
      li.addEventListener("focusin", function () { s(true); }); li.addEventListener("focusout", function () { s(false); });
    });

    /* mobile menu */
    var tg = $(".menu-toggle"), tgLabel = $(".menu-toggle-label", tg), m = $("#mobile-menu"), release = null;
    function open() { m.hidden = false; void m.offsetWidth; m.classList.add("open"); tg.setAttribute("aria-expanded", "true"); tg.setAttribute("aria-label", "Close menu"); tgLabel.textContent = "Close"; NBG.lockScroll(true); release = NBG.trapFocus(m); header.style.zIndex = 140; }
    function close() { if (m.hidden) return; m.classList.remove("open"); tg.setAttribute("aria-expanded", "false"); tg.setAttribute("aria-label", "Open menu"); tgLabel.textContent = "Menu"; NBG.lockScroll(false); if (release) release(); setTimeout(function () { if (!m.classList.contains("open")) { m.hidden = true; header.style.zIndex = ""; } }, 820); }
    tg.addEventListener("click", function () { m.classList.contains("open") ? close() : open(); });
    $$("a", m).forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    window.addEventListener("resize", function () { if (window.innerWidth > 1100) close(); });
  }

  function amenities() {
    $("#amen-grid").innerHTML = NBG.data.amenities.map(function (a, i) {
      return '<article class="amen reveal" style="--d:' + (i % 4) * 90 + 'ms">' + (a.img ? '<div class="a-bg">' + NBG.img(a.img, "", { w: 1000 }) + '</div>' : '') +
        '<span class="a-no">0' + (i + 1) + '</span><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[a.icon] + '</svg><h3>' + esc(a.title) + '</h3><p>' + esc(a.text) + '</p></article>';
    }).join("");
  }

  function gallery() {
    var G = NBG.data.gallery, m = $("#mosaic");
    m.innerHTML = G.map(function (g, i) {
      return '<button type="button" class="tile t' + i + (g.size === "plan" ? " plan" : "") + ' mask-reveal" data-i="' + i + '" aria-label="Open image: ' + esc(g.cap) + '">' + NBG.img(g.src, g.alt, { w: g.w, h: g.h, sizes: "(max-width:900px) 100vw, 50vw" }) + '<span class="tcap">' + esc(g.cap) + '</span></button>';
    }).join("");
    $$(".tile", m).forEach(function (t) { t.addEventListener("click", function () { NBG.lightbox.open(G.map(function (g) { return { src: g.src, alt: g.alt, cap: g.cap }; }), +t.getAttribute("data-i")); }); });
  }

  function location() {
    var L = NBG.data.location, filter = $("#loc-filter"), list = $("#loc-list"), cur = "All";
    var cats = ["All"].concat(L.map(function (c) { return c.cat; }));
    filter.innerHTML = cats.map(function (c) { return '<button class="chip" type="button" data-c="' + esc(c) + '" aria-pressed="' + (c === cur) + '">' + esc(c) + '</button>'; }).join("");
    function paint() {
      var rows = []; L.forEach(function (c) { if (cur === "All" || cur === c.cat) c.items.forEach(function (it) { rows.push({ cat: c.cat, it: it }); }); });
      list.innerHTML = rows.map(function (r, i) { return '<li style="animation-delay:' + i * 45 + 'ms"><div><small>' + esc(r.cat) + '</small><strong>' + esc(r.it.n) + '</strong></div><span class="tm"><span class="mode-ico" aria-hidden="true">' + (r.it.m === "walk" ? "🚶" : "🚗") + '</span>' + esc(r.it.t) + '<small>' + esc(r.it.m) + '</small></span><span class="bar" style="--w:' + Math.min(100, parseInt(r.it.t, 10) * 10) + '%;animation-delay:' + i * 45 + 'ms"></span></li>'; }).join("");
    }
    filter.addEventListener("click", function (e) { var b = e.target.closest(".chip"); if (!b) return; cur = b.getAttribute("data-c"); $$(".chip", filter).forEach(function (c) { c.setAttribute("aria-pressed", c === b); }); paint(); });
    paint();

    var frame = $("#map-frame"), img = $("img", frame); frame.style.touchAction = "pan-y";
    img.removeAttribute("draggable"); var pz = new NBG.PanZoom(frame, img, { fit: "contain", max: 5, wheel: "ctrl", mouseOnly: true });
    $$("[data-map]").forEach(function (b) { b.addEventListener("click", function () { var a = b.getAttribute("data-map"); a === "in" ? pz.zoomIn() : a === "out" ? pz.zoomOut() : pz.reset(); }); });
    $("#maps-link").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(NBG.cfg.contact.mapsQuery);
  }

  function contact() {
    var c = NBG.cfg.contact, wa = NBG.waLink();
    function link(id, href, text) { var a = $("#" + id), li = $("#" + id + "-li"); if (!a || !li) return; if (href) { a.href = href; if (text) a.textContent = text; li.hidden = false; } }
    $("#c-address").textContent = c.addressLine; $("#f-address").textContent = c.addressLine;
    link("c-phone", c.phone && "tel:" + c.phone.replace(/[^\d+]/g, ""), c.phone); link("f-phone", c.phone && "tel:" + c.phone.replace(/[^\d+]/g, ""), c.phone);
    link("c-email", c.email && "mailto:" + c.email, c.email); link("f-email", c.email && "mailto:" + c.email, c.email);
    link("c-wa", wa); link("f-wa", wa);
    if (c.phone || c.email || wa) $("#f-contact-pending").hidden = true;
    var w = $("#wa-float"); if (wa) { w.href = wa; w.target = "_blank"; w.rel = "noopener"; } /* else: opens the enquiry form */
    var soc = NBG.cfg.social, names = { instagram: "IG", facebook: "FB", linkedin: "IN", youtube: "YT", tiktok: "TT" };
    $("#socials").innerHTML = Object.keys(soc).filter(function (k) { return soc[k]; }).map(function (k) { return '<li><a href="' + esc(soc[k]) + '" target="_blank" rel="noopener" aria-label="' + k + '">' + names[k] + '</a></li>'; }).join("");
    $("#year").textContent = new Date().getFullYear();
  }

  NBG.sections = { init: function () { nav(); amenities(); gallery(); location(); contact(); } };
})();


/* shortlist.js — favourite residences, side-by-side compare, enquire about shortlist */
(function () {
  var NBG = window.NBG, $ = NBG.$, $$ = NBG.$$, esc = NBG.esc, KEY = "nbg-shortlist", ids = [], subs = [];
  function load() { try { ids = JSON.parse(localStorage.getItem(KEY) || "[]").filter(function (i) { return NBG.unitById(i); }); } catch (e) { ids = []; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(ids)); } catch (e) {} }
  var HEART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.6-9.3-9A5.4 5.4 0 0 1 12 6.3 5.4 5.4 0 0 1 21.3 12C19 16.4 12 21 12 21z"/></svg>';
  function label(u) { return u.layoutOnly ? "3 Bedroom + DSQ" : u.name; }

  NBG.shortlist = {
    heart: function (id) { return '<button class="heart" type="button" data-heart="' + id + '" aria-pressed="' + NBG.shortlist.has(id) + '" aria-label="Shortlist ' + esc(label(NBG.unitById(id))) + ' ' + NBG.unitById(id).sqm + ' sqm">' + HEART + '</button>'; },
    has: function (id) { return ids.indexOf(id) > -1; },
    toggle: function (id) { var i = ids.indexOf(id); if (i > -1) ids.splice(i, 1); else ids.push(id); save(); if (NBG.shortlist.render) NBG.shortlist.render(); },
    onChange: function (f) { subs.push(f); },
    init: function () {
      load(); var fab = $("#sl-fab"), dr = $("#sl-drawer"), list = $("#sl-list"), cmp = $("#cmp-sheet");
      function render() {
        $("#sl-count").textContent = ids.length; fab.hidden = !ids.length && dr.hidden;
        list.innerHTML = ids.length ? ids.map(function (id) { var u = NBG.unitById(id); return '<li class="sl-item"><img src="' + u.plan + '" alt=""><div><b>' + esc(label(u)) + '</b><small>' + u.sqm + ' sqm · ' + esc(u.beds) + '</small></div><button class="icon-btn" type="button" data-rm="' + id + '" aria-label="Remove ' + esc(label(u)) + '">✕</button></li>'; }).join("") : '<li class="empty">Tap the heart on any residence to build your shortlist.</li>';
        $("#sl-compare").disabled = ids.length < 2; $("#sl-compare").style.opacity = ids.length < 2 ? .5 : 1;
        $$("[data-heart]").forEach(function (b) { b.setAttribute("aria-pressed", ids.indexOf(b.getAttribute("data-heart")) > -1); });
        subs.forEach(function (f) { f(ids); });
      }
      NBG.shortlist.render = render;
      function openD() { NBG.openModal(dr, ".icon-btn"); }
      function closeD() { NBG.closeModal(dr); setTimeout(render, 500); }
      fab.addEventListener("click", openD);
      dr.addEventListener("click", function (e) {
        var rm = e.target.closest("[data-rm]"); if (rm) { NBG.shortlist.toggle(rm.getAttribute("data-rm")); return; }
        var a = e.target.closest("[data-sl]"); if (!a) return; var act = a.getAttribute("data-sl");
        if (act === "close") closeD();
        else if (act === "compare" && ids.length > 1) openCompare();
        else if (act === "enquire") { closeD(); var msg = "I am interested in these Ocean Mist residences: " + ids.map(function (i) { var u = NBG.unitById(i); return label(u) + " (" + u.sqm + " sqm)"; }).join("; ") + "."; NBG.enquire("general", ids[0], msg); }
      });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && dr.classList.contains("open") && !cmp.classList.contains("open")) closeD(); });
      document.addEventListener("click", function (e) { var h = e.target.closest("[data-heart]"); if (h) { NBG.shortlist.toggle(h.getAttribute("data-heart")); } });
      function openCompare() {
        var us = ids.map(NBG.unitById), rows = [["", us.map(function (u) { return '<img src="' + u.plan + '" alt="Floor plan of ' + esc(u.name) + '">'; })], ["Residence", us.map(function (u) { return '<span class="big">' + esc(label(u)) + '</span>'; })], ["Area", us.map(function (u) { return '<span class="big">' + u.sqm + '</span> sqm'; })], ["Bedrooms", us.map(function (u) { return esc(u.beds); })], ["Bathrooms", us.map(function (u) { return esc(u.baths); })], ["Includes", us.map(function (u) { return esc(u.rooms); })]];
        $("#cmp-body").innerHTML = '<div class="cmp-grid" style="--n:' + us.length + '">' + rows.map(function (r) { return '<div class="h">' + r[0] + '</div>' + r[1].map(function (c) { return '<div>' + c + '</div>'; }).join(""); }).join("") + '</div>';
        NBG.openModal(cmp, "[data-cmp]");
      }
      cmp.addEventListener("click", function (e) { if (e.target.closest("[data-cmp]")) NBG.closeModal(cmp); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && cmp.classList.contains("open")) NBG.closeModal(cmp); });
      render();
    }
  };
})();


/* forms.js — validated enquiry forms with a configurable endpoint (never fakes success) */
(function () {
  var NBG = window.NBG, $ = NBG.$, $$ = NBG.$$, esc = NBG.esc;

  function populate() {
    var opts = '<option value="">Select…</option>' + NBG.data.categories.map(function (c) {
      return '<optgroup label="' + esc(c.label) + '">' + NBG.data.units.filter(function (u) { return u.cat === c.id; }).map(function (u) { return '<option value="' + u.id + '">' + esc(u.layoutOnly ? "3 Bedroom + DSQ — " + u.sqm + " sqm" : u.name + " — " + u.sqm + " sqm") + '</option>'; }).join("") + '</optgroup>';
    }).join("") + '<option value="undecided">Not sure yet</option>';
    $$("[data-unit-select]").forEach(function (s) { s.innerHTML = opts; });
    var d = $("#v-date"); if (d) d.min = new Date().toISOString().slice(0, 10);
  }

  function tabs() {
    var tabsEl = $$(".form-tabs button");
    function select(id) {
      tabsEl.forEach(function (b) { var on = b.id === "tab-" + id; b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1; });
      $("#panel-viewing").hidden = id !== "viewing"; $("#panel-general").hidden = id !== "general";
    }
    tabsEl.forEach(function (b) { b.addEventListener("click", function () { select(b.id.replace("tab-", "")); }); });
    $(".form-tabs").addEventListener("keydown", function (e) { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { var t = $$(".form-tabs button"), n = t[(t.indexOf(document.activeElement) + 1) % t.length]; n.focus(); n.click(); } });
    return select;
  }

  function validate(form) {
    var ok = true, first = null;
    $$("input,select,textarea", form).forEach(function (el) {
      if (el.classList.contains("hp")) return;
      var f = el.closest(".field"), err = f && $(".err", f), v = el.value.trim(), msg = "";
      if (el.required && !v) msg = "This field is required.";
      else if (el.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg = "Please enter a valid email address.";
      else if (el.type === "tel" && v && v.replace(/\D/g, "").length < 7) msg = "Please enter a valid phone number.";
      else if (el.type === "date" && v && el.min && v < el.min) msg = "Please choose a future date.";
      if (f) f.classList.toggle("invalid", !!msg); if (err) err.textContent = msg; el.setAttribute("aria-invalid", !!msg);
      if (msg) { ok = false; if (!first) first = el; }
    });
    if (first) first.focus(); return ok;
  }

  function summary(data) {
    var u = data.configuration && NBG.unitById(data.configuration), cfg = u ? (u.layoutOnly ? "3 Bedroom + DSQ (" + u.sqm + " sqm)" : u.name + " (" + u.sqm + " sqm)") : (data.configuration === "undecided" ? "Not sure yet" : "—");
    return ["Enquiry type: " + data.formType, "Name: " + data.name, "Email: " + (data.email || "—"), "Phone: " + (data.phone || "—"), "Configuration: " + cfg, data.viewing_date ? "Preferred viewing date: " + data.viewing_date : "", data.contact_method ? "Preferred contact: " + data.contact_method : "", data.message ? "Message: " + data.message : ""].filter(Boolean).join("\n");
  }

  function status(form, kind, html) { var s = $(".form-status", form); s.className = "form-status " + kind; s.innerHTML = html; s.hidden = false; s.scrollIntoView({ block: "nearest", behavior: NBG.reduced ? "auto" : "smooth" }); }

  function submit(form) {
    var fd = new FormData(form), data = { formType: form.getAttribute("data-form") === "viewing" ? "Private viewing request" : "General enquiry" };
    fd.forEach(function (v, k) { data[k] = String(v).trim(); });
    if (data.company_website) return;                       /* honeypot */
    data.page = location.href; data.project = NBG.cfg.project; data.submittedAt = new Date().toISOString();
    var btn = $('button[type="submit"]', form), ep = NBG.cfg.forms.endpoint, text = summary(data);

    if (!ep) {
      var mail = NBG.mailLink("Ocean Mist Tower — " + data.formType, text), wa = NBG.waLink("Hello Next Bridge Group, I am interested in Ocean Mist Tower.\n\n" + text);
      var links = (mail ? '<a href="' + mail + '">Email us instead</a>' : "") + (wa ? '<a href="' + wa + '" target="_blank" rel="noopener">WhatsApp us instead</a>' : "");
      status(form, "bad", "<strong>Your enquiry has not been sent.</strong> The online enquiry form is not connected to a mailbox yet, so nothing was submitted. Your details are still in the form." + (links ? '<div class="row">' + links + "</div>" : " Please check back shortly or contact the property team directly."));
      return;
    }
    btn.classList.add("loading"); btn.disabled = true; $(".form-status", form).hidden = true;
    var ctl = new AbortController(), to = setTimeout(function () { ctl.abort(); }, 15000);
    fetch(ep, { method: NBG.cfg.forms.method || "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data), signal: ctl.signal })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r; })
      .then(function () { form.reset(); status(form, "ok", "<strong>Thank you, " + esc(data.name.split(" ")[0]) + ".</strong> Your enquiry has been received. A member of the Next Bridge Group property team will be in touch."); })
      .catch(function () {
        var mail = NBG.mailLink("Ocean Mist Tower — " + data.formType, text), wa = NBG.waLink("Hello Next Bridge Group, I am interested in Ocean Mist Tower.\n\n" + text);
        status(form, "bad", "<strong>We couldn’t send your enquiry.</strong> Please check your connection and try again." + ((mail || wa) ? '<div class="row">' + (mail ? '<a href="' + mail + '">Email us</a>' : "") + (wa ? '<a href="' + wa + '" target="_blank" rel="noopener">WhatsApp us</a>' : "") + "</div>" : ""));
      })
      .then(function () { clearTimeout(to); btn.classList.remove("loading"); btn.disabled = false; });
  }

  NBG.forms = {
    init: function () {
      populate(); var select = tabs();
      $$(".enq-form").forEach(function (f) {
        f.addEventListener("submit", function (e) { e.preventDefault(); if (validate(f)) submit(f); else status(f, "bad", "Please correct the highlighted fields."); });
        f.addEventListener("input", function (e) { var fl = e.target.closest(".field"); if (fl && fl.classList.contains("invalid")) { fl.classList.remove("invalid"); $(".err", fl).textContent = ""; } });
      });
      /* any CTA with data-enquire pre-selects the viewing tab */
      document.addEventListener("click", function (e) { var a = e.target.closest("[data-enquire]"); if (a) select(a.getAttribute("data-enquire")); });
      NBG.enquire = function (type, unitId, msg) {
        select(type || "viewing");
        var sel = $(type === "general" ? "#g-config" : "#v-config"); if (sel && unitId) sel.value = unitId;
        if (msg) { var ta = $(type === "general" ? "#g-msg" : "#v-msg"); if (ta) ta.value = msg; }
        var t = document.getElementById("enquire"); t.scrollIntoView({ behavior: NBG.reduced ? "auto" : "smooth" });
        setTimeout(function () { var f = $(type === "general" ? "#g-name" : "#v-name"); if (f) f.focus({ preventScroll: true }); }, 700);
      };
    }
  };
})();


/* film.js — native playback for the supplied Ocean Mist film */
(function () {
  var NBG = window.NBG, $ = NBG.$;
  NBG.film = {
    init: function () {
      document.addEventListener("click", function (e) {
        var link = e.target.closest("[data-film-play]"); if (!link) return;
        e.preventDefault();
        var video = $("#film-video"), section = $("#film"), status = $("#film-status");
        if (!video || !section || !status) return;
        var playback = video.play();
        section.scrollIntoView({ behavior: NBG.reduced ? "auto" : "smooth", block: "center" });
        playback.catch(function (error) {
          status.textContent = "The film could not start. Use the player controls to try again.";
          console.error("Could not start the Ocean Mist Tower film.", error);
        });
      });
      var video = $("#film-video"), status = $("#film-status");
      if (!video || !status) return;
      video.addEventListener("play", function () { status.textContent = ""; });
      video.addEventListener("error", function () {
        status.textContent = "The film could not be loaded. Please try again later.";
        console.error("The Ocean Mist Tower film failed to load.", video.error);
      });
    }
  };
})();

/* clips.js — muted, viewport-aware playback for project film excerpts */
(function () {
  var NBG = window.NBG, $ = NBG.$, $$ = NBG.$$;

  function start(video) {
    if (NBG.reduced || document.hidden) { video.pause(); return; }
    video.autoplay = true;
    var playback = video.play();
    if (playback && typeof playback.catch === "function") playback.catch(function (error) {
      if (error && error.name === "AbortError") return;
      var clip = video.closest("[data-broadcast-clip]"), status = $("[data-clip-status]", clip);
      status.textContent = video.controls
        ? "Autoplay is unavailable. Use the player controls to start this clip."
        : "This residence film preview could not autoplay; a still image is shown instead.";
      console.error("Could not autoplay an Ocean Mist film excerpt.", error);
    });
  }

  NBG.clips = {
    init: function () {
      var videos = $$("[data-broadcast-video]");
      if (!videos.length) return;
      videos.forEach(function (video) {
        video.muted = true; video.defaultMuted = true; video.loop = true; video.playsInline = true; video.preload = "none";
        video.addEventListener("play", function () { $("[data-clip-status]", video.closest("[data-broadcast-clip]")).textContent = ""; });
        video.addEventListener("error", function () {
          var status = $("[data-clip-status]", video.closest("[data-broadcast-clip]"));
          status.textContent = "This film excerpt could not be loaded.";
          console.error("Failed to load an Ocean Mist film excerpt.", video.error);
        });
      });
      if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) start(entry.target);
            else entry.target.pause();
          });
        }, { threshold: .35 });
        videos.forEach(function (video) { observer.observe(video); });
      } else if (!NBG.reduced) videos.forEach(start);
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) { videos.forEach(function (video) { video.pause(); }); return; }
        videos.forEach(function (video) {
          var rect = video.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) start(video);
        });
      });
    }
  };
})();


/* daylight.js — illustrative time-of-day grade for the exterior render */
(function () {
  var NBG = window.NBG, $ = NBG.$;
  var STOPS = [
    { p: 0,   b: .42, s: .95,  sep: 0,   hue: 40, tint: [20, 50, 110, .72],   glow: [60, 120, 200, .16],  orb: ["#f4f7ff", "#b9c8e8"], stars: 1, name: "Night" },
    { p: 20,  b: .58, s: 1.04, sep: .18, hue: 8,  tint: [130, 102, 150, .42], glow: [220, 130, 150, .2],  orb: ["#ffd1c4", "#ff6e7f"], stars: .4, name: "Dawn" },
    { p: 26,  b: .9,  s: 1.05, sep: .25, hue: -8, tint: [255, 170, 140, .45], glow: [255, 140, 110, .28], orb: ["#ffd9b0", "#ff9f6b"], stars: 0, name: "Sunrise" },
    { p: 35,  b: 1.02, s: 1.1,  sep: .05, hue: 0,  tint: [210, 240, 255, .1],  glow: [200, 250, 255, .12], orb: ["#fff7d6", "#ffe27a"], stars: 0, name: "Morning" },
    { p: 50,  b: 1.08, s: 1.15, sep: 0,   hue: 0,  tint: [255, 255, 255, 0],   glow: [255, 255, 255, 0],   orb: ["#ffffff", "#ffe97a"], stars: 0, name: "Midday" },
    { p: 68,  b: .98, s: 1.2,  sep: .35, hue: -10, tint: [255, 190, 110, .42], glow: [255, 170, 80, .3],   orb: ["#ffe0a0", "#ff9a3c"], stars: 0, name: "Golden hour" },
    { p: 76,  b: .62, s: 1.05, sep: .1,  hue: 25,  tint: [110, 90, 170, .62],   glow: [255, 120, 150, .2],  orb: ["#ffd1c4", "#ff6e7f"], stars: .2, name: "Dusk" },
    { p: 84,  b: .42, s: .95,  sep: 0,   hue: 40,  tint: [20, 50, 110, .72],    glow: [60, 120, 200, .16],  orb: ["#f4f7ff", "#b9c8e8"], stars: 1, name: "Night" },
    { p: 100, b: .42, s: .95,  sep: 0,   hue: 40,  tint: [20, 50, 110, .72],    glow: [60, 120, 200, .16],  orb: ["#f4f7ff", "#b9c8e8"], stars: 1, name: "Night" }
  ];
  function mix(a, b, t) { return a + (b - a) * t; }
  function interp(p) {
    var i = 0; while (i < STOPS.length - 2 && p > STOPS[i + 1].p) i++;
    var A = STOPS[i], B = STOPS[i + 1], t = (p - A.p) / (B.p - A.p); t = Math.max(0, Math.min(1, t));
    var r = { b: mix(A.b, B.b, t), s: mix(A.s, B.s, t), sep: mix(A.sep, B.sep, t), hue: mix(A.hue, B.hue, t), stars: mix(A.stars, B.stars, t), name: (t < .5 ? A : B).name };
    r.tint = A.tint.map(function (v, k) { return mix(v, B.tint[k], t); }); r.glow = A.glow.map(function (v, k) { return mix(v, B.glow[k], t); });
    r.orb = t < .5 ? A.orb : B.orb; return r;
  }
  var DAYLIGHT_ZONE = "Africa/Nairobi", DAYLIGHT_LAT = -4.03, DAYLIGHT_LON = 39.72, DAYLIGHT_UTC_OFFSET = 180;
  var DAYLIGHT_CLOCK = new Intl.DateTimeFormat("en-GB", { timeZone: DAYLIGHT_ZONE, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23" });
  function localTime() {
    var parts = {};
    DAYLIGHT_CLOCK.formatToParts(new Date()).forEach(function (part) { if (part.type !== "literal") parts[part.type] = +part.value; });
    parts.hour %= 24;
    parts.minutes = parts.hour * 60 + parts.minute;
    parts.key = parts.year + "-" + parts.month + "-" + parts.day;
    return parts;
  }
  function solarDay(date) {
    // NOAA's solar declination and equation-of-time approximation for Nyali.
    var dayOfYear = Math.floor((Date.UTC(date.year, date.month - 1, date.day) - Date.UTC(date.year, 0, 1)) / 86400000) + 1;
    var daysInYear = (Date.UTC(date.year + 1, 0, 1) - Date.UTC(date.year, 0, 1)) / 86400000;
    var gamma = 2 * Math.PI / daysInYear * (dayOfYear - 1);
    var equation = 229.18 * (0.000075 + 0.001868 * Math.cos(gamma) - 0.032077 * Math.sin(gamma) - 0.014615 * Math.cos(2 * gamma) - 0.040849 * Math.sin(2 * gamma));
    var declination = 0.006918 - 0.399912 * Math.cos(gamma) + 0.070257 * Math.sin(gamma) - 0.006758 * Math.cos(2 * gamma) + 0.000907 * Math.sin(2 * gamma) - 0.002697 * Math.cos(3 * gamma) + 0.00148 * Math.sin(3 * gamma);
    var latitude = DAYLIGHT_LAT * Math.PI / 180;
    var cosHourAngle = (Math.cos(90.833 * Math.PI / 180) - Math.sin(latitude) * Math.sin(declination)) / (Math.cos(latitude) * Math.cos(declination)) - Math.tan(latitude) * Math.tan(declination);
    var hourAngle = Math.acos(Math.max(-1, Math.min(1, cosHourAngle))) * 180 / Math.PI;
    var noon = 720 - 4 * DAYLIGHT_LON - equation + DAYLIGHT_UTC_OFFSET;
    return { key: date.key, equation: equation, declination: declination, latitude: latitude, hourAngle: hourAngle, sunrise: noon - 4 * hourAngle, noon: noon, sunset: noon + 4 * hourAngle };
  }
  function solarPosition(minutes, solar) {
    var solarMinutes = minutes + solar.equation + 4 * DAYLIGHT_LON - DAYLIGHT_UTC_OFFSET;
    var hourAngle = (solarMinutes / 4 - 180) * Math.PI / 180;
    var sineElevation = Math.sin(solar.latitude) * Math.sin(solar.declination) + Math.cos(solar.latitude) * Math.cos(solar.declination) * Math.cos(hourAngle);
    var elevation = Math.asin(Math.max(-1, Math.min(1, sineElevation)));
    var hourAngleDegrees = hourAngle * 180 / Math.PI;
    var progress = Math.max(0, Math.min(1, (hourAngleDegrees + solar.hourAngle) / (2 * solar.hourAngle)));
    return { x: 8 + progress * 84, y: 62 - Math.max(0, Math.sin(elevation)) * 48 };
  }
  function solarLabel(minutes, solar) {
    if (minutes < solar.sunrise - 30 || minutes > solar.sunset + 75) return "Night";
    if (minutes < solar.sunrise) return "Dawn";
    if (minutes < solar.sunrise + 45) return "Sunrise";
    if (minutes < solar.noon - 45) return "Morning";
    if (minutes < solar.noon + 45) return "Midday";
    if (minutes < solar.sunset - 60) return "Afternoon";
    if (minutes < solar.sunset) return "Golden hour";
    if (minutes < solar.sunset + 75) return "Dusk";
    return "Night";
  }
  function clockLabel(minutes) {
    var hour = Math.floor(minutes / 60), minute = minutes % 60;
    return (((hour + 11) % 12) + 1) + ":" + ("0" + minute).slice(-2) + (hour >= 12 ? " pm" : " am");
  }
  NBG.daylight = {
    init: function () {
      var rng = $("#day-range"); if (!rng) return;
      var img = $("#day-img"), tint = $("#day-tint"), glow = $("#day-glow"), stars = $("#day-stars"), orb = $("#day-orb"), time = $("#day-time"), label = $("#day-label"), presets = $("#day-presets"), mode = $("#day-mode");
      var live = true, lastMinute = -1, now = localTime(), solar = solarDay(now);
      function setMode() {
        var button = $("[data-live]", presets);
        if (button) button.setAttribute("aria-pressed", live);
        mode.textContent = live ? "Live local time · Nyali, Mombasa (EAT)" : "Preview time · choose Live time to resync";
      }
      function updatePresets() {
        var options = [
          { name: "Sunrise", minute: solar.sunrise },
          { name: "Midday", minute: solar.noon },
          { name: "Golden hour", minute: solar.sunset - 45 },
          { name: "Dusk", minute: Math.ceil(solar.sunset) },
          { name: "Night", minute: 22 * 60 }
        ];
        presets.innerHTML = '<button class="chip" type="button" data-live aria-pressed="' + live + '">Live time</button>' + options.map(function (option) {
          return '<button class="chip" type="button" data-minute="' + Math.round(option.minute) + '">' + option.name + '</button>';
        }).join("");
      }
      function render() {
        var minutes = Math.max(0, Math.min(1439, Math.round(+rng.value))), p = minutes / 1439 * 100, r = interp(p), sun = solarPosition(minutes, solar);
        img.style.filter = "brightness(" + r.b + ") saturate(" + r.s + ") sepia(" + r.sep + ") hue-rotate(" + r.hue + "deg)";
        tint.style.background = "rgba(" + r.tint.map(Math.round).slice(0, 3).join(",") + "," + r.tint[3].toFixed(2) + ")";
        glow.style.background = "radial-gradient(80% 60% at " + sun.x + "% 85%,rgba(" + r.glow.map(Math.round).slice(0, 3).join(",") + "," + r.glow[3].toFixed(2) + "),transparent 70%)";
        stars.style.opacity = r.stars;
        orb.style.left = sun.x + "%"; orb.style.top = sun.y + "%";
        orb.style.background = "radial-gradient(circle at 35% 35%," + r.orb[0] + "," + r.orb[1] + ")"; orb.style.boxShadow = "0 0 60px 14px " + r.orb[1] + "88";
        time.textContent = clockLabel(minutes); label.textContent = solarLabel(minutes, solar);
        rng.setAttribute("aria-valuetext", label.textContent + ", " + time.textContent + " Mombasa time");
      }
      function syncLive() {
        now = localTime();
        if (solar.key !== now.key) { solar = solarDay(now); updatePresets(); }
        if (live && now.minutes !== lastMinute) {
          rng.value = now.minutes;
          lastMinute = now.minutes;
          render();
        }
      }
      updatePresets();
      setMode();
      rng.addEventListener("input", function () { live = false; lastMinute = -1; setMode(); render(); });
      presets.addEventListener("click", function (e) {
        var button = e.target.closest(".chip"); if (!button) return;
        if (button.hasAttribute("data-live")) { live = true; lastMinute = -1; setMode(); syncLive(); return; }
        var to = +button.getAttribute("data-minute"), from = +rng.value, t0 = performance.now(), duration = NBG.reduced ? 1 : 900;
        live = false; lastMinute = -1; setMode();
        (function step(n) { var k = Math.min((n - t0) / duration, 1), eased = 1 - Math.pow(1 - k, 3); rng.value = Math.round(from + (to - from) * eased); render(); if (k < 1) requestAnimationFrame(step); })(t0);
      });
      syncLive();
      window.setInterval(syncLive, 30000);
    }
  };
})();


/* building.js — floor-by-floor tower explorer using the brochure layouts */
(function () {
  var NBG = window.NBG, $ = NBG.$, $$ = NBG.$$, esc = NBG.esc;
  NBG.building = {
    init: function () {
      var L = NBG.data.levels, tower = $("#tower"), panel = $("#bld-panel"); if (!tower) return;
      var cur = 1;
      function info(l) { return l.plan ? l : L.filter(function (x) { return x.range === l.range && x.plan; })[0]; }
      tower.innerHTML = L.map(function (l, i) { return '<li class="' + (l.id === "roof" ? "roof" : l.id === "0" ? "ground" : "") + '"><button type="button" data-i="' + i + '" aria-pressed="false">' + esc(l.label) + '<span aria-hidden="true">' + (l.id === "roof" ? "◇" : l.id === "0" ? "G" : l.id) + '</span></button></li>'; }).join("");
      function paint() {
        var l = L[cur], d = info(l);
        $$("#tower button").forEach(function (b, i) { b.setAttribute("aria-pressed", i === cur); b.classList.toggle("in-range", i !== cur && L[i].range === l.range); });
        panel.innerHTML = '<p class="eyebrow"><span class="line"></span>' + esc(l.label) + '</p><h3>' + esc(d.title) + '</h3><p>' + esc(d.text) + '</p>' +
          '<div class="bld-plan" role="button" tabindex="0" aria-label="Open ' + esc(d.title) + ' layout full screen">' + NBG.img(d.plan, d.title + " layout from the brochure", { w: 2400, h: 1716, lazy: false }) + '</div>' +
          '<div class="bld-tags">' + d.tags.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join("") + '</div>' +
          '<div class="bld-nav"><button class="icon-btn" id="bld-up" type="button" aria-label="Level above"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="1.3"/></svg></button><button class="icon-btn" id="bld-dn" type="button" aria-label="Level below"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 7l6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.3"/></svg></button><span style="font-size:12px;color:var(--muted);letter-spacing:.1em">Use ↑ ↓ keys on the tower</span></div>';
        var plan = $(".bld-plan", panel);
        function open() { NBG.lightbox.open([{ src: d.plan, alt: d.title, cap: d.title + " — brochure layout" }], 0); }
        plan.addEventListener("click", open); plan.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
        $("#bld-up").addEventListener("click", function () { sel(cur - 1); }); $("#bld-dn").addEventListener("click", function () { sel(cur + 1); });
      }
      function sel(i) { cur = Math.max(0, Math.min(L.length - 1, i)); paint(); }
      tower.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) sel(+b.getAttribute("data-i")); });
      tower.addEventListener("keydown", function (e) { if (e.key === "ArrowUp" || e.key === "ArrowDown") { e.preventDefault(); sel(cur + (e.key === "ArrowDown" ? 1 : -1)); $$("#tower button")[cur].focus(); } });
      paint();
    }
  };
})();


/* planner.js — illustrative repayment estimator (uses only user-entered numbers) */
(function () {
  var NBG = window.NBG, $ = NBG.$;
  var fmt = new Intl.NumberFormat("en-KE", { maximumFractionDigits: 0 });
  NBG.planner = {
    init: function () {
      var price = $("#pl-price"); if (!price) return;
      var dep = $("#pl-dep"), term = $("#pl-term"), rate = $("#pl-rate"), C = 2 * Math.PI * 48;
      function num() { return +price.value.replace(/[^\d]/g, "") || 0; }
      function calc() {
        var P = num(), d = +dep.value, y = +term.value, r = +rate.value;
        $("#pl-dep-v").textContent = d + "%"; $("#pl-term-v").textContent = y + " years"; $("#pl-rate-v").textContent = r.toFixed(1) + "%";
        if (!P) { ["pl-monthly", "pl-principal", "pl-interest", "pl-deposit"].forEach(function (id) { $("#" + id).textContent = "—"; }); $("#pl-c1").setAttribute("stroke-dasharray", "0 " + C); $("#pl-c2").setAttribute("stroke-dasharray", "0 " + C); return; }
        var loan = P * (1 - d / 100), n = y * 12, i = r / 1200, m = i ? loan * i / (1 - Math.pow(1 + i, -n)) : loan / n, total = m * n, interest = total - loan;
        $("#pl-monthly").textContent = "KES " + fmt.format(m); $("#pl-principal").textContent = "KES " + fmt.format(loan); $("#pl-interest").textContent = "KES " + fmt.format(interest); $("#pl-deposit").textContent = "KES " + fmt.format(P * d / 100);
        var a = loan / total * C, b = interest / total * C;
        $("#pl-c1").setAttribute("stroke-dasharray", a + " " + (C - a)); $("#pl-c2").setAttribute("stroke-dasharray", b + " " + (C - b)); $("#pl-c2").setAttribute("stroke-dashoffset", -a);
      }
      price.addEventListener("input", function () { var v = num(); price.value = v ? fmt.format(v) : ""; calc(); });
      [dep, term, rate].forEach(function (el) { el.addEventListener("input", calc); });
      $("#pl-example").addEventListener("click", function () { price.value = fmt.format(15000000); calc(); });
      calc();
    }
  };
})();


/* main.js — boot. Each module is isolated so one failure never blocks the page. */
(function () {
  var NBG = window.NBG;
   ["loader", "fx", "lightbox", "shortlist", "residences", "tour", "sections", "forms", "film", "clips", "daylight", "building", "planner", "motion"].forEach(function (m) {
    try { NBG[m].init(); } catch (e) { if (window.console) console.error("[NBG] module failed:", m, e); }
  });
  /* the floating WhatsApp control falls back to the enquiry form until a number is configured */
})();
