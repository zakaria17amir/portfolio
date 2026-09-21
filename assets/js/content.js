/**
 * Single source of truth for site content.
 *
 * index.html and the project pages ship this content as STATIC markup so the
 * site works with JavaScript disabled and renders in link previews. When you
 * edit content here, mirror the change in the corresponding HTML. This file is
 * the record of intent; the HTML is what ships.
 */

export const profile = {
  name: "Amir Abdullah Zakaria",
  role: "Data, AI & Software Engineering",
  title: "Computer Science @ ELTE Budapest",
  graduating: "January 2027",
  location: "Budapest, Hungary",
  availability:
    "Open to software engineering, data and AI engineering roles from January 2027",
  // Plain-English summary for the HR screener. No acronyms.
  summary:
    "I build data and AI systems people actually run on — the BI models behind a global company's reporting, the automation that replaced its manual version, and agent tooling I measure rather than just describe.",
  links: {
    github: "https://github.com/zakaria17amir",
    linkedin: "https://www.linkedin.com/in/amir-abdullah-zakaria",
    cv: "assets/Amir-Abdullah-Zakaria-CV.pdf",
  },
  // Assembled at runtime by main.js; never written out as a plain string.
  emailParts: { user: "mailtoamir17", domain: "gmail.com" },
};

export const experience = [
  {
    role: "Data Analyst Intern",
    org: "The Estée Lauder Companies Inc.",
    type: "Internship",
    start: "Jun 2025",
    end: "Present",
    location: "Budapest, Hungary",
    bullets: [
      "Built a vendor-closing and savings-tracking solution from scratch, turning scattered Excel files into a production Power BI star-schema model with vendor, payment-term and fiscal-calendar dimensions.",
      "Designed Power Query transformations with multi-level fallback matching, and DAX measures that stay stable under slicer filtering, powering a Vendor Group → Tower → Vendor drill-down.",
      "Automated 16+ reporting and governance processes with Power Automate, Office Scripts and Python, saving over 100 hours a month.",
      "Cleansed and restructured 100,000+ records in Python, resolving mismatches, duplicates and missing values that had been corrupting reporting.",
      "Administered Upland PSA for a global user base, triaging 600+ IT tickets and managing Azure AD access groups.",
      "Partnered with stakeholders across global offices to align data outputs and reporting cadence across time zones.",
    ],
  },
  {
    role: "Research Assistant — Numerical Analysis Modeling Lab",
    org: "Eötvös Loránd University",
    type: "Research",
    start: "Jun 2026",
    end: "Present",
    location: "Budapest, Hungary",
    bullets: [
      "Reproduced ECG baseline wander removal experiments from an EMBC 2025 paper on sparse dictionary learning neural networks, using the PhysioNet Challenge 2020 dataset.",
      "Benchmarked CNN, Quadratic Programming, FISTA and FISTA-Net under the paper's own evaluation protocol and metrics.",
      "Reviewed the literature on baseline wander removal across filtering, wavelet, optimisation-based and deep learning approaches.",
      "Evaluated test-set reconstructions to assess which methods best preserve clinically relevant ECG morphology.",
    ],
  },
  {
    // Two ELTE courses, taught across overlapping terms; kept as one entry to
    // match the CV rather than splitting the same job into three rows.
    role: "Teaching Assistant — Discrete Mathematics & Computer Systems",
    org: "Eötvös Loránd University",
    type: "Teaching",
    start: "Sep 2025",
    end: "Present",
    location: "Budapest, Hungary",
    bullets: [
      "Tutor undergraduates in logic, set theory, combinatorics, graph theory and proof techniques.",
      "Lead hands-on Linux, Bash and PowerShell labs covering shell environments, file systems, processes and automation.",
      "Prepare practice exercises, lab materials and assessments.",
    ],
  },
];

export const projects = [
  {
    slug: "preflight",
    title: "preflight",
    tagline: "A tech-lead pass that runs before a coding agent does",
    award: "2nd place · LaunchLoop hackathon",
    impact:
      "Scans a repository for zero tokens, has a cheap model write a short brief, lets the cheap model attempt the fix first, and escalates with a distilled post-mortem when it fails. Benchmarked on five seeded bugs: a $0.01 brief let Haiku match Sonnet at 32% less cost, and the same brief handed to a GPT agent held at 74% less.",
    tags: ["Python", "LLM orchestration", "Claude Code CLI", "Devin CLI", "pytest", "GitHub Actions"],
    repo: "https://github.com/zakaria17amir/preflight-agent",
    demo: "https://preflight-agent.vercel.app",
    page: "projects/preflight.html",
    featured: true,
  },
  {
    slug: "tracky",
    title: "Tracky — Personal Analytics Dashboard",
    tagline: "A Laravel 13 REST API and a React 19 TypeScript SPA",
    impact:
      "You define the metrics and the app adapts around them: one type column drives the logging input, the chart types the widget builder offers and the summary maths. Every record is owner-scoped at three independent server-side layers, covered by 50 PHPUnit feature tests and Cypress specs.",
    tags: ["Laravel 13", "PHP", "React 19", "TypeScript", "TanStack Query", "Cypress"],
    repo: "https://github.com/zakaria17amir/Tracky",
    page: "projects/tracky.html",
    featured: true,
  },
  {
    slug: "qgate-agent",
    title: "qgate-agent",
    tagline: "Human-in-the-loop containment for end-of-line manufacturing tests",
    status: "In development",
    impact:
      "When a vehicle fails its end-of-line test, someone has to decide in minutes how many to quarantine. qgate correlates the failure against build genealogy and station drift, proposes a containment window, and requires a human to approve it before anything is written — every tool read-only except the one that asks. Scored on fifty golden scenarios, including the ones where the right answer is to propose nothing.",
    tags: ["Python", "LangGraph", "Kafka", "PostgreSQL", "Docker", "C++"],
    repo: "https://github.com/zakaria17amir/Qgate-Agent",
    // No writeup page while the repo is a skeleton; the card links straight to code.
    page: null,
    featured: true,
  },
  {
    slug: "fintrack",
    title: "FinTrack — Self-hosted Finance Tracker",
    tagline: "A Laravel 13 app over a single SQLite file you own",
    impact:
      "Accounts, transactions, category budgets and reports, without handing a third party read access to a bank. The interesting constraint is shared household accounts: ownership and view-or-edit permission live on the pivot, and are enforced server-side on every route.",
    tags: ["Laravel 13", "PHP", "Blade", "Tailwind CSS", "SQLite", "PHPUnit"],
    repo: "https://github.com/zakaria17amir/Fintrack",
    page: "projects/fintrack.html",
    featured: true,
  },
  {
    slug: "developer-insights",
    title: "Developer Insights Analysis",
    tagline:
      "What a global developer survey says about pay, satisfaction and language adoption",
    impact:
      "Cleaned and validated a large public survey dataset, then used outlier detection and correlation analysis to surface trends in job satisfaction, salary distribution and language adoption.",
    tags: ["Python", "pandas", "Seaborn", "Matplotlib", "scikit-learn", "Statistics"],
    repo: "https://github.com/zakaria17amir/Developer-Insights-Analysis",
    page: "projects/developer-insights.html",
    featured: true,
  },
  {
    slug: "sales-menu-pyspark",
    title: "Sales & Menu Analysis with PySpark",
    tagline: "Scalable ETL and data quality checks on Databricks",
    impact:
      "Built distributed ETL pipelines in Databricks with data quality checks at each stage, aggregating customer spend and revenue trends into an analytical dashboard.",
    tags: ["PySpark", "Apache Spark", "Databricks", "SQL", "ETL"],
    repo:
      "https://github.com/zakaria17amir/Sales-Menu-Data-Analysis-Using-PySpark-Apache-Spark",
    page: "projects/sales-menu-pyspark.html",
    featured: true,
  },
  {
    slug: "powerbi-analysis",
    title: "Power BI Data Analysis & Visualization",
    tagline: "An end-to-end BI solution on a star schema model",
    impact:
      "Modelled the data as a star schema, wrote custom DAX measures including YTD and QTD rollups, and automated publishing to the Power BI Service with validation built into the refresh.",
    tags: ["Power BI", "DAX", "Star Schema", "Power Query", "Python", "ETL"],
    repo: "https://github.com/zakaria17amir/Power-BI-Data-Analysis-Visualization",
    page: "projects/powerbi-analysis.html",
    featured: true,
  },
];

export const skills = [
  {
    group: "Data Science",
    items: [
      "Python (pandas, NumPy, Matplotlib, Seaborn)",
      "SQL",
      "Statistical analysis",
      "Data quality / QA",
    ],
  },
  {
    group: "AI / ML",
    items: [
      "Machine learning fundamentals",
      "Feature engineering",
      "scikit-learn",
      "Model evaluation & benchmarking",
      "CNNs / signal processing",
      "LLM agent orchestration (LangGraph)",
    ],
  },
  {
    group: "Data Engineering",
    items: [
      "ETL pipelines",
      "PySpark / Apache Spark",
      "Databricks",
      "Power BI (DAX, Power Query)",
      "MS Power Automate / Office Scripts",
    ],
  },
  {
    group: "Programming",
    items: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "C#", "Bash / Shell"],
  },
  {
    group: "Web & APIs",
    items: ["Laravel 13", "React 19", "REST API design", "Tailwind CSS", "Vite"],
  },
  {
    group: "Databases",
    items: ["MySQL", "PostgreSQL", "Oracle", "SQLite", "MS Access"],
  },
  {
    group: "Cloud & Tools",
    items: [
      "AWS (fundamentals)",
      "Azure (fundamentals)",
      "Azure AD administration",
      "Git / GitHub Actions",
      "Docker",
      "pytest / PHPUnit",
      "Jupyter",
    ],
  },
];

export const education = {
  degree: "BSc Computer Science",
  school: "Eötvös Loránd University (ELTE)",
  location: "Budapest, Hungary",
  start: "Sep 2023",
  end: "Expected Jan 2027",
  gpa: "CGPA 4.58 / 5.0",
  honours: "Stipendium Hungaricum Scholar",
  coursework: [
    "Algorithms & Data Structures",
    "Database Systems",
    "Machine Learning",
    "Discrete Mathematics",
    "Operating Systems",
  ],
};

/**
 * Empty for now. The certifications section in index.html is commented out;
 * uncomment it and add entries here in the same shape when you have some.
 * Shape: { name, issuer, year, url }
 */
export const certifications = [];
