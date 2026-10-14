# MoiSoft website

Responsive Next.js App Router + TypeScript website based on the supplied development specification and Stitch HTML. White, emerald and champagne-gold design, Tamil and English content, locally bundled Plus Jakarta Sans and Noto Sans Tamil.

## Run

Requires Node.js 22+ and npm. Python 3 is used only by the optional static preview command.

```sh
npm ci
npm run dev -- --port 4317
```

Visit http://127.0.0.1:4317. Development uses Webpack for compatibility with restricted macOS file watchers.

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

The build exports `out/`, ready for any static host. `npm start` serves that production export on port 4317. There is no server database or form storage. On Vercel use the Next.js preset and the project's static-export configuration.

## Browser tests

`npm run test:browser` uses a running site on port 4317 and installed Google Chrome. The automated browser runner could not launch in this restricted desktop session; equivalent core interactions were checked with the supported in-app browser. Tests are included for a normal development environment. See QA.md for actual results and limits.

## Editable content and media

`src/data/content.ts` is the main content and contact configuration. Only publish photographs with permission and remove guest names, payment information and private records from media.

| Asset | Replacement |
|---|---|
| Logo | `public/logo.jpeg` |
| Hero | Put image in `public/images/hero/`; set `media.hero` to `/images/hero/filename.webp` |
| Story | Set `media.story` to an approved image in `public/images/` |
| CEO P. Devi | `public/images/leadership/devi.jpeg` |
| CEO M. Mahalakshmi | `public/images/leadership/mahalakshmi.jpeg` |
| CEO G. Selvakumar | `public/images/leadership/selvakumar.jpeg` |
| Function photos | Set `image`, descriptive `alt`, category and verified location on the six `gallery` objects |
| App screenshots | Set the three entries in `media.app`; supplied design labels are placeholders, not feature verification |
| Instagram | Set `image` AND exact corresponding `postUrl` on each `instagram` item |
| Video | Set `media.video`, optional `videoPoster` and Tamil WebVTT `captions`; native controls load media on interaction |
| Reviews | Add only approved reviews to `reviews`; the section stays hidden when empty |

Missing CEO files are detected at build time and render designed placeholders without broken requests. Rebuild after adding photos. Other images have graceful error fallbacks. Prefer pre-optimized WebP/AVIF; static export uses `next/image` with unoptimized delivery (no server image endpoint), fixed aspect ratios and responsive sizing. All present photo areas, devices and sample records are explicitly illustrative. No synthetic portraits, unverified event photos or fictional testimonials are included.

To add reels, use approved video files and their exact post URLs; no reels are shown until real media is supplied. Instagram is never scraped or embedded automatically.

## Enquiries

React Hook Form and Zod validate name, 10-digit Indian mobile, function type, a real non-past date in Asia/Kolkata, and location. The form opens an encoded WhatsApp message addressed to +91 99441 38970; the visitor still sends it in WhatsApp. This is an enquiry, not a confirmed booking. Direct WhatsApp and phone links bypass the optional form. No personal information is stored or sent to an unrelated service.

## Maps and business facts

The business address, contact people and service categories were cross-checked against https://moisoft.in/ on 13 October 2026. The Android listing https://play.google.com/store/apps/details?id=com.moisoft1.moisoft1 displayed 10K+ downloads. The 1,000+ functions figure is identified as business-supplied in the detailed specification. CEO titles come from that specification. Coverage is subject to business confirmation.

The supplied Maps URL https://share.google/xvHv8orzKZMD3uji4 is preserved. Its precise business pin/embed could not be verified; the site therefore shows the verified postal address and a Maps link instead of an invented pin or a generic Nagamalai embed. Instagram links to the supplied official profile: https://www.instagram.com/moi_soft_/.

## SEO and environment

Copy `.env.example` to `.env.local` when needed.

- `NEXT_PUBLIC_SITE_URL`: canonical origin, defaults to `https://moisoft.in`. Set it to the final domain before a production build.
- `NEXT_PUBLIC_GA_ID`: optional real `G-…` ID. Blank by default. Analytics load only after visitor opt-in; consent lasts for that page visit, with a visible turn-off control. No form values are included in events. The business should approve the applicable privacy/consent policy before activation.

Includes title, description, canonical, Open Graph PNG, Twitter metadata, robots.txt, sitemap.xml and LocalBusiness JSON-LD without invented coordinates or ratings. No analytics ID is fabricated. Fonts are bundled with their OFL licenses in `src/fonts/`.

## Architecture and accessibility

Static content is rendered by the server page. Client components are limited to navigation, animation, gallery, comparison, FAQ, form, media fallback and optional analytics. Tailwind v4, a shadcn-style Button with Radix Slot, Radix Dialog/Accordion, Motion, lazy GSAP/ScrollTrigger and Lucide are used. CSS tokens and layout live in `src/app/globals.css`.

The site includes skip navigation, visible keyboard focus, semantic sections, accessible form errors, focus-trapped dialogs, keyboard lightbox controls, mobile safe-area padding and reduced-motion support. Motion reveals retain readable server HTML. GSAP is restricted to the comparison section with cleanup and no scroll pinning.

The `.openai/hosting.json` belongs to this private preview Site. Remove its project ID before registering a separate Site; preserve it when updating this one.
