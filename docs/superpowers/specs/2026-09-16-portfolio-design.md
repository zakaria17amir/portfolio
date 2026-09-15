# Portfolio Site — Design Spec

**Date:** 2026-09-16
**Owner:** Amir Abdullah Zakaria (`zakaria17amir`)
**Status:** Approved for implementation

## 1. Purpose

A personal portfolio site used to apply for **Data Science / AI / Data Engineering
internships and 2027 graduate software roles**. It must survive two very different
readers:

- **The HR screener** — non-technical, ~20 seconds, checking "is this person real,
  relevant, and available?"
- **The technical lead** — skeptical, ~5 minutes, checking "did they actually build
  this, and do they understand what they built?"

The site therefore layers information rather than choosing an audience.

## 2. Success criteria

1. Name, field, graduation date, availability, and all contact/resume links are
   visible without scrolling and without jargon.
2. Every project card links to real, verifiable code in a public repo.
3. Every featured project has its own URL that works with JavaScript disabled, so it
   can be pasted into an application.
4. Lighthouse >= 95 on Performance, Accessibility, Best Practices, SEO.
5. Total transferred page weight under 150 KB (excluding the CV PDF).
6. Adding a new project later requires editing one data file plus adding one page —
   never editing `index.html`.
7. The GitHub contributor list shows exactly one human contributor and no bot.

## 3. Hosting

- **Repo:** `zakaria17amir/portfolio` (public, project site)
- **URL:** `https://zakaria17amir.github.io/portfolio`
- **Deploy:** GitHub Pages, branch `main`, folder `/` (root). Push = deploy.
- Structured so a custom domain can be pointed at it later by adding a `CNAME` file;
  all internal links are relative so the base path can change without edits.

## 4. Architecture

Static HTML with no runtime framework and no runtime dependencies. Tailwind CSS is
compiled ahead of time by the Tailwind CLI and the **built stylesheet is committed**,
so the deployed site is pure static files. JavaScript is progressive enhancement only:
with JS disabled, all content, navigation, and links still work.

```
portfolio/
├── index.html                      # main page, all sections, static markup
├── projects/
│   ├── developer-insights.html
│   ├── sales-menu-pyspark.html
│   ├── powerbi-analysis.html
│   └── tracky.html
├── assets/
│   ├── css/
│   │   ├── input.css               # Tailwind source + @theme tokens (edit this)
│   │   └── style.css               # BUILT + committed (do not edit by hand)
│   ├── js/
│   │   ├── content.js              # ALL site content as plain data
│   │   └── main.js                 # theme toggle, mobile nav, email assembly, scroll reveal
│   ├── img/                        # og-image, favicon, project thumbnails
│   └── Amir-Abdullah-Zakaria-CV.pdf
├── docs/superpowers/specs/         # this spec
├── 404.html
├── robots.txt
├── sitemap.xml
├── package.json                    # ONLY holds the tailwind build script
└── README.md
```

### Build

```
npm run build     # npx @tailwindcss/cli -i assets/css/input.css -o assets/css/style.css --minify
npm run watch     # same, with --watch, for local editing
```

`node_modules/` is gitignored. `assets/css/style.css` is committed — it is the
deployed artifact.

## 5. Content model

`assets/js/content.js` is the single source of truth for content that repeats
(projects, experience, skills, certifications). It exports plain data:

```js
export const profile = { name, title, tagline, availability, location, email, links };
export const experience = [{ role, org, type, start, end, bullets[] }];
export const projects   = [{ slug, title, tagline, tags[], impact, repo, featured }];
export const skills     = [{ group, items[] }];
export const education  = { degree, school, start, end, gpa, honors, coursework[] };
export const certs      = [{ name, issuer, year, url }];
```

**Important constraint:** `index.html` contains the real content as static markup —
it is not rendered from `content.js` at runtime, because a JS-rendered page is
invisible to link previews and some recruiter tooling. `content.js` is the
maintenance source of record and drives the smaller dynamic pieces. Where the two
could drift, `index.html` wins at runtime and `content.js` documents intent.

## 6. Page structure — `index.html`

| Section | Contents | Serves |
|---|---|---|
| Header | Name mark, section nav, theme toggle | both |
| Hero | Name, "Computer Science @ ELTE Budapest · graduating Jan 2027", one plain-English line, availability badge, buttons: Download CV / Email / LinkedIn / GitHub | HR |
| About | 3–4 sentences, plain language, no acronym walls | HR |
| Experience | Estée Lauder — Data Analytics & Automation Intern (Jun 2025–present); ELTE TA — Discrete Mathematics (Feb 2026–present); ELTE TA — Linux & Shell Scripting (Sep 2024–Jan 2025). Outcome-led bullets. | both |
| Projects | 4 featured cards: title, tagline, impact line, tech tags, "Read writeup" + "View code" | both |
| Skills | Grouped: Data Science · AI/ML · Data Engineering · Programming · Databases · Cloud & Tools | tech lead |
| Education | B.Sc Computer Science, ELTE, Sep 2023 – Jan 2027 · CGPA 4.58/5.0 · Stipendium Hungaricum Scholar · key coursework | HR |
| Certifications | Placeholder-ready list, hidden if empty | HR |
| Contact | Email (JS-assembled), LinkedIn, GitHub, location, CV download | both |
| Footer | Copyright, "built from scratch, no template" note, source link | tech lead |

## 7. Featured projects

| Slug | Title | Repo |
|---|---|---|
| `developer-insights` | Developer Insights Analysis | `Developer-Insights-Analysis` |
| `sales-menu-pyspark` | Sales & Menu Analysis (PySpark) | `Sales-Menu-Data-Analysis-Using-PySpark-Apache-Spark` |
| `powerbi-analysis` | Power BI Data Analysis & Visualization | `Power-BI-Data-Analysis-Visualization` |
| `tracky` | Tracky — Habit Tracking Dashboard | `Tracky` |

Each detail page follows one shared template:

**Overview → Problem → Data → Approach → Results → What I would do differently → Tech stack → Links**

"What I would do differently" is deliberate: it is the section that signals engineering
maturity to a technical lead, and almost no entry-level portfolio has one.

## 8. Visual design

- **Type:** system font stack (`ui-sans-serif, system-ui, …`) for instant render and
  zero layout shift; `ui-monospace` for tech tags and code.
- **Color:** neutral gray scale plus a single deep accent, defined as CSS custom
  properties in Tailwind v4 `@theme`. Light and dark both defined explicitly.
- **Theme:** follows `prefers-color-scheme`; manual toggle persists to
  `localStorage` inside `try/catch`. An inline head script applies the stored theme
  before first paint to prevent a flash.
- **Hierarchy through type, not decoration** — size and weight carry the structure;
  no card shadows stacked on gradients on borders.
- **Motion:** short fade/translate reveal via `IntersectionObserver`, fully disabled
  under `prefers-reduced-motion`. Content is visible by default and revealed by JS,
  never hidden by default.
- **Responsive:** single column under 768px, minimum 16px side gutters at every
  width, no horizontal scroll.
- **Accessibility:** semantic landmarks, one `h1`, logical heading order, visible
  focus rings, skip-to-content link, WCAG AA contrast in both themes, `aria-label`
  on icon-only controls.

## 9. Privacy decisions

- **No phone number anywhere on the site.** It stays on the CV PDF only.
- **Public email is `mailtoamir17@gmail.com`**, not the university address, which
  expires after graduation.
- Email is assembled in JS from parts at runtime to defeat naive scrapers, with a
  `noscript` fallback that spells it out in a human-readable, non-parseable form.
- No analytics, no third-party scripts, no cookies, no external fonts. Nothing to
  disclose, nothing to consent to, nothing that leaks visitors to a third party.

## 10. SEO / sharing

- Descriptive `<title>` and meta description per page.
- Open Graph + Twitter card tags so a link pasted into LinkedIn or a recruiter's
  Slack renders a proper preview card.
- `JSON-LD` `Person` schema on `index.html`.
- `robots.txt` and a hand-maintained `sitemap.xml`.
- Canonical URLs on every page.

## 11. Testing

Manual verification checklist, run before push:

1. Render `index.html` and all 4 project pages; no console errors.
2. Toggle theme; reload; theme persists; no flash on load.
3. Disable JavaScript: all content, nav, and links still function; email fallback visible.
4. Resize to 375px, 768px, 1440px: no horizontal scroll, gutters hold.
5. Keyboard-only pass: skip link works, focus visible throughout, no traps.
6. Every external link resolves (no 404 on any repo link).
7. Lighthouse on the deployed URL: all four categories >= 95.
8. `git log` shows only the human author and no bot trailer.

## 12. Commit authorship

Every commit is authored and committed as `zakaria17amir <acnwre@gmail.com>`, with
**no `Co-Authored-By` trailer and no bot co-author**. Repo-local `user.name` and
`user.email` are set explicitly so global config cannot override them. Verified
before the first push.

## 13. Out of scope

- Contact form / backend of any kind
- Blog engine, CMS, Markdown pipeline
- Analytics or tracking
- Custom domain purchase (structure supports it; not configured now)
- Multi-language versions
