# Verification — 13 October 2026

- Production static build: passed on Next.js 16.4.0 with TypeScript strict checks.
- ESLint: passed without warnings after cleanup.
- Unit tests: 4 passed (Tamil and valid input; empty/invalid/past/impossible dates; India date boundary; Unicode-safe WhatsApp message construction).
- Runtime dependency audit: zero known vulnerabilities reported.
- Full audit: 5 high-severity reports in the development-only ESLint dependency chain, all caused by a `braces` stack-exhaustion advisory. The suggested downgrade to an incompatible old Next.js lint configuration was not applied. No affected package is shipped in the static website. Recheck upstream before upgrading lint tooling or processing untrusted glob patterns.
- In-app browser: rendered production export; no runtime console errors observed. All internal anchor targets exist. No broken image requests. Equal desktop leadership card heights verified.
- Gallery: Weddings filter returned 2 cards; lightbox opened; ArrowRight selected next card; Escape closed.
- Comparison: range and keyboard update the before/after split and accessible percentage value.
- FAQ: expands and reports `aria-expanded=true`.
- Empty enquiry: five Tamil validation errors displayed. Message encoding and destination checked by unit tests; no live WhatsApp message sent.
- Mobile menu: opens, focus-trapped dialog visible, Escape closes.
- Responsive: checked 320, 390, 768, 1024 and 1440px widths through in-app browser; no horizontal page overflow after fixing the tablet Instagram grid. See preview screenshots delivered with project.
- Automated Playwright suite is included but was not executed successfully: local Chrome launch aborted under desktop sandbox restrictions. This is a verification limitation, not a passing test.
- No claim of Lighthouse scores, measured Core Web Vitals, or a complete WCAG audit.
- Maps short-link destination could not be independently verified; no map coordinates or precise embed were invented.
