# Specification

## Summary
**Goal:** Build a responsive, SEO-friendly official marketing website for Guru Kirpa Mill Industries (nuts & bolts manufacturer) with core company pages and an inquiry form backed by Motoko storage.

**Planned changes:**
- Create a public-facing site with consistent header/navigation and footer; ensure responsive, accessible layout and English-only content.
- Implement pages/sections: Home (hero, highlights, CTA to Contact), About, Products (catalog-style categories with basic spec placeholders), Manufacturing/Infrastructure, Quality/Standards, Contact.
- Add a Contact inquiry form with basic client-side validation and success/error feedback.
- Implement a single Motoko actor to persist inquiries in stable storage, exposing methods to create an inquiry (with timestamp) and list inquiries.
- Apply a cohesive industrial theme (steel/graphite neutrals + a single non-blue/non-purple accent), using Tailwind consistently.
- Add and render generated static brand/homepage imagery from `frontend/public/assets/generated` (logo in header; hero image + at least one additional visual on Home).

**User-visible outcome:** Visitors can browse the company’s marketing pages and submit an inquiry via the contact form, receiving confirmation that the message was saved.
