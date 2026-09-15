# Portfolio

Personal portfolio site — Data Science, AI and Data Engineering.

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

## Adding a project

1. Append an object to `projects[]` in `assets/js/content.js`.
2. Copy an existing page in `projects/` and rewrite its content. Keep the seven
   sections, including **What I would do differently** — that section is the
   most valuable thing on the page to a technical reader.
3. Add a card to the projects grid in `index.html`.
4. Add a `<url>` entry to `sitemap.xml`.
5. `npm run build`, commit, push.

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
- No phone number in the site source; it stays on the CV PDF.
- The public email is assembled in JavaScript rather than sitting in the HTML as
  a scrapeable string. It is duplicated in `content.js` and `main.js` — change
  both.
- Colour, spacing and type tokens live in `@theme` in `input.css`. Change them
  there, not in utility classes scattered through the markup.
