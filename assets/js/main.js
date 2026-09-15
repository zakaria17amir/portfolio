/**
 * Progressive enhancement only. Every feature here is optional: with this file
 * blocked or failing, the site still reads, navigates and links correctly.
 *
 * Every function is null-safe on purpose — the project pages share this file
 * but have no #site-nav, so initNav() must simply do nothing there.
 */

/** Theme toggle. The initial class is set by the inline script in <head>. */
function initTheme() {
  const toggle = document.querySelector("#theme-toggle");
  if (!toggle) return;

  const sync = () => {
    const isDark = document.documentElement.classList.contains("dark");
    toggle.setAttribute("aria-pressed", String(isDark));
  };

  sync();

  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {
      /* storage blocked: the toggle still works for this page view */
    }
    sync();
  });
}

/** Mobile navigation. */
function initNav() {
  const toggle = document.querySelector("#nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Close after following an in-page link, and on Escape.
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
}

/**
 * Assemble the email address at runtime so it is not sitting in the HTML as a
 * scrapeable plain string. Anchors carry a visible fallback until this runs.
 *
 * Duplicated from `profile.emailParts` in content.js on purpose: importing
 * content.js here would cost an extra module fetch for two short strings.
 * If you change the address, change it in BOTH files.
 */
function initEmail() {
  const user = "mailtoamir17";
  const domain = "gmail.com";
  const address = `${user}@${domain}`;

  document.querySelectorAll("[data-email]").forEach((el) => {
    el.setAttribute("href", `mailto:${address}`);
    if (el.dataset.email === "text") el.textContent = address;
  });
}

/** Highlight the nav link for the section currently on screen. */
function initActiveNav() {
  const links = document.querySelectorAll('#site-nav a[href^="#"]');
  if (!links.length || !("IntersectionObserver" in window)) return;

  const byId = new Map();
  links.forEach((link) => byId.set(link.getAttribute("href").slice(1), link));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = byId.get(entry.target.id);
        if (!link) return;
        link.classList.toggle("text-accent", entry.isIntersecting);
        link.classList.toggle("dark:text-accent-dark", entry.isIntersecting);
        link.classList.toggle("text-muted", !entry.isIntersecting);
        link.classList.toggle("dark:text-muted-dark", !entry.isIntersecting);
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  byId.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

initTheme();
initNav();
initEmail();
initActiveNav();
