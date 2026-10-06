# Portfolio

Personal portfolio site — software, data, ML and AI engineering.

**Live:** https://zakaria17amir.github.io/portfolio

Static HTML and Tailwind CSS. No framework, no runtime dependencies, no build
step on the server: GitHub Pages serves the files exactly as they sit in this
repository. JavaScript is progressive enhancement only — with it disabled, every
piece of content, navigation and linking still works.

## Structure

```
index.html              the main page — all content as static markup
projects/               one writeup page per featured project
assets/css/input.css    Tailwind source and design tokens (edit this)
assets/css/style.css    BUILT output, committed (never edit by hand)
assets/img/projects/    project screenshots (see "Screenshots" below)
assets/js/content.js    all site content as plain data
assets/js/main.js       theme toggle, mobile nav, email assembly
404.html                served by Pages for any unmatched URL
robots.txt sitemap.xml  crawling and indexing
```

## Editing content

`assets/js/content.js` is the record of intent — profile, experience, projects,
skills, education, certifications. `index.html` and the project pages carry the
markup that actually ships.

**Edit both.** The main page deliberately does not render itself from
`content.js` at runtime: a page whose content only exists after JavaScript runs
is invisible to link previews and to some recruiter tooling, which for a
job-hunting site is a cost worth a little duplication.

## Rebuilding the CSS

Once:

```bash
npm install
```

After any change to the HTML classes or to `input.css`:

```bash
npm run build
```

While editing, leave this running instead:

```bash
npm run watch
```

`assets/css/style.css` is generated and committed — it is the deployed artifact.
If you change classes and forget to rebuild, the site ships without those
styles.

## The portrait

`assets/img/amir-abdullah-zakaria.jpg` — a square crop, 800x800, shown as a
circle in the hero at 96px (112px from `sm` up).

To replace it, crop square with the eyes at about 40% from the top rather than
centring the face: a circle clips the corners, and a face centred in the square
sits too low once it is clipped. Keep the same filename and `npm run build` is
not needed — no classes change.

## Screenshots

`assets/img/projects/` holds one or more captures per project, exported as
progressive JPEG at 1600px wide or less.

**Every image on this site is a real capture of the thing it claims to show.**
Nothing here is a mockup, a stock photo or a generated impression of a UI. Most
came out of the project repositories themselves (`Tracky/docs/screenshots/`, the
Power BI repo's `DashBoards/`); the preflight ones were captured from its own
dashboard, served locally from the benchmark results committed in that repo.

If a project has no real screenshot, it does not get one — it goes in the
"Also built" grid on the main page instead of the featured list. An empty frame
or an invented UI is worse than no picture.

Screenshots ship as **pairs in a half-height grid**, not as one full-width
image per project — two pictures in the vertical space one used to take. Use
`.shot` for the frame, `aspect-[16/10] object-cover object-left-top` on the
`<img>` so a row of tiles shares one baseline, and always set `width`,
`height`, `loading="lazy"` and an `alt` describing what is actually on screen.

On the main page the second tile of each pair carries `hidden sm:block`: at
phone width a half-column thumbnail is unreadable, and stacking the pair would
cost exactly the vertical space the layout exists to save.

Pick images that survive being 376px wide. A wide strip or a wall of small text
does not — it crops to nothing and reads as noise.

Tiles crop from the top left. When the bottom of a chart carries the point (the
families that *lose* sales, say), pad the file to 16:10 with its own background
colour before committing it, so `object-cover` has nothing left to cut. Sample
the dominant border colour rather than a corner pixel — a corner often lands on
a nav rail and gives you a stray grey bar.

## Highlighted keywords

`.hl` marks the phrases a scan should catch: a recruiter reads the page before
they read it properly. Use it on the claim, not the sentence, and leave most
paragraphs unmarked — a page where everything is highlighted is a page where
nothing is.

## Adding a project

The projects section is deliberately short — entries spanning data engineering,
BI, AI agents and full-stack software, picked for the ones that can be talked
through end to end. Adding one means either replacing what it competes with or
accepting a longer, weaker list.

An entry wants **two real screenshots** at 16:10, and never an invented one. A
project whose repository has only one real capture ships a single tile — it sits
in the left column of the same grid (Retail Data Platform does this, because its
Power BI pages are still a manual step in that repo). A diagram that is too wide
to read at half a column (the telecom semantic model, 3.8:1) goes full width
under the pair instead of being squeezed into a tile.

Judge every candidate at the size it will actually be shown — render it at
376×235 and look — not at full size. Things that read fine as a PNG (a pale
calendar heatmap, a dense architecture diagram) are illegible in a tile, and the
honest move is to state the feature in the copy instead.

1. Append an object to `projects[]` in `assets/js/content.js`. Add a `shot`
   key only if you have a real screenshot.
2. Copy an existing page in `projects/` and rewrite its content. Keep the seven
   sections, including **What I would do differently** — that section is the
   most valuable thing on the page to a technical reader.
3. Add an entry to the projects list in `index.html`. It needs at least one
   real screenshot; without one it does not go in.
4. Add a `<url>` entry to `sitemap.xml`.
5. `npm run build`, commit, push.

The screenshot grid on a project page sits *above* the `.measure` column, which
caps body copy at 68 characters — a full-width element inside it would be
squeezed to the width of the prose.

## Printing

There is no separate PDF to maintain. `Ctrl`/`Cmd`+`P` on the live page is the
printable version — a print stylesheet at the end of `assets/css/input.css`
turns the site into a 12-page A4 document, so the handout can never drift from
the site the way a separately exported file would. The footer carries a
**Print / save as PDF** button for people who would not think to try.

What the print stylesheet does, and why each part is load-bearing:

- **Forces the light palette.** Rather than unpick every `dark:` utility, it
  repoints the dark tokens (`--color-*-dark`) at their light twins inside
  `@media print`. The utilities still apply; they just resolve to ink on white.
  The block is unlayered, so it beats Tailwind's `@theme`.
- **Drops screen chrome** — sticky header, nav, theme toggle, skip link — and
  swaps the hero's button row for a plain block of addresses, since a button
  labelled "Email" is useless on paper.
- **Prints the URL after every external link** in `<main>`, for the same reason.
- **Keeps `print-color-adjust: exact`.** The keyword highlights are the scan
  layer; without them the printed copy loses the thing a recruiter reads first.

Two things to know before changing the page-break rules:

- **Chrome ignores `break-after: avoid`.** Skill headings came away from their
  chip lists until the rule moved onto the group itself as `break-inside:
  avoid` (via `:has(> h3)`). Firefox and Safari do honour `break-after`, so
  those rules are kept — just never relied on.
- **Do not put `break-inside: avoid` on a whole project entry.** It reads as
  the obviously right rule and costs roughly half a sheet of blank paper before
  every one of the nine. Only indivisible things are protected: a screenshot
  and its caption, a role, a skill group.

Screenshots are `loading="lazy"`, which is right for a page with nineteen of
them and a hazard for printing — an image never scrolled into view can reach
the print layout as an empty frame. Browsers are supposed to force them to load
and current ones do; `initPrint()` in `main.js` flips them to `eager` on
`beforeprint` anyway, because the failure mode is a portfolio of blank squares.
Anything that renders the page headlessly has to do the same thing — see the
generator note in that function.

## Deployment

Push to `main`. GitHub Pages serves the repository root. There is no CI step and
nothing to wait on beyond the Pages build itself.

## Custom domain

All internal links are relative, so pointing a domain here only needs a `CNAME`
file — with one exception. `404.html` uses absolute `/portfolio/` paths, for the
reason documented in a comment at the top of that file. Change those three
prefixes to `/` when the domain changes.

## Conventions

- No third-party scripts, fonts, analytics or cookies.
- Every screenshot is a real capture of the running thing — no mockups.
- No phone number in the site source; it stays on the CV PDF.
- The public email is assembled in JavaScript rather than sitting in the HTML as
  a scrapeable string. It is duplicated in `content.js` and `main.js` — change
  both.
- Colour, spacing and type tokens live in `@theme` in `input.css`. Change them
  there, not in utility classes scattered through the markup.
