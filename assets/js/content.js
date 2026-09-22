/**
 * Single source of truth for site content.
 *
 * index.html and the project pages ship this content as STATIC markup so the
 * site works with JavaScript disabled and renders in link previews. When you
 * edit content here, mirror the change in the corresponding HTML. This file is
 * the record of intent; the HTML is what ships.
 *
 * `shot` on a project points at a REAL capture of that project running.
 * Nothing on this site is a mockup; if there is no real screenshot, there is
 * no `shot` key.
 */

export const profile = {
  name: "Amir Abdullah Zakaria",
  role: "Software, Data & AI Engineering",
  title: "Computer Science @ ELTE Budapest",
  graduating: "January 2027",
  location: "Budapest, Hungary",
  availability:
    "Open to software, data, ML and AI engineering roles from January 2027",
  // Plain-English summary for the HR screener. No acronyms.
  summary:
    "I build systems people actually run on — the BI model behind a global company's reporting, the automation that replaced its manual version, a REST API and SPA I own end to end, and AI agent tooling I benchmark rather than just describe.",
  // Deliberately not data-only: the same person does the software and the ML.
  vision: [
    "I want to build systems organisations decide on — not dashboards people admire once and then work around. That means owning a problem the whole way: framing it with the people who carry its cost, designing the model, writing the code, and then coming back with a number that says whether it actually worked.",
    "The engineers I want to be like can hold both halves at once — the executive conversation about what is worth building, and the operational detail that makes it survive production. Most people are good at one. I am deliberately practising both, which is why every project here has a stated decision as well as a stack.",
    "I am not trying to be only a data person. Data engineering, machine learning, AI systems, backend and full-stack software — I have shipped in all of them and I care much less about the label on the role than about whether the thing is real, measured and running. Next I want to go deeper on ML and AI systems in production: evaluation, cost, latency and the unglamorous work of making a model trustworthy enough to act on.",
  ],
  links: {
    github: "https://github.com/zakaria17amir",
    linkedin: "https://www.linkedin.com/in/amir-abdullah-zakaria",
    cv: "assets/Amir-Abdullah-Zakaria-CV.pdf",
  },
  // Assembled at runtime by main.js; never written out as a plain string.
  emailParts: { user: "mailtoamir17", domain: "gmail.com" },
};

/**
 * How I work. The executive/operational split is the point: the two are
 * different jobs, and doing the second one first is how the wrong thing gets
 * built carefully.
 */
export const approach = {
  intro:
    "Most of what goes wrong on a data or software project goes wrong before any code is written — the wrong thing gets built, carefully. So I keep two sides of the job separate, and I do them in that order.",
  sides: [
    {
      side: "Executive",
      heading: "Deciding what is worth building",
      note: "The half that happens in meetings, in the stakeholder's vocabulary.",
      items: [
        "Frame the problem with the team that owns it — procurement, demand management, finance — in their words, not in table names.",
        "Define \"done\" as a number before the first line of code: hours returned per month, closing accuracy, cost per resolved bug.",
        "Choose scope and sequence — and say plainly what I am not building, so nobody discovers it at handover.",
        "Report in their language, hours and money and risk, and keep a written record of the trade-offs I took and what I rejected.",
      ],
    },
    {
      side: "Operational",
      heading: "Making it real and keeping it running",
      note: "The half that happens in an editor, and has to hold up on a Monday morning.",
      items: [
        "Model the data — grain, dimensions, a star schema and measures that stay correct under slicer filtering.",
        "Build the pipeline — Power Query, Python, PySpark — with validation at every stage instead of one check at the end.",
        "Automate the repeat so the process does not depend on somebody remembering to run it.",
        "Test, then measure in production: PHPUnit and Cypress suites, pytest, a benchmark harness — evidence rather than assurances.",
      ],
    },
  ],
  sequence: [
    {
      step: "Plan",
      body: "Write the brief before the code: the grain of the data, the success metric, the risks I can already name, and what I am deliberately leaving out. If I cannot write it down, I do not understand it yet.",
    },
    {
      step: "Align with stakeholders",
      body: "Take the plan to the people across the global offices who will live with it and get the disagreement out on the plan, when changing it costs an afternoon rather than a quarter. Agree the cadence and who signs off.",
    },
    {
      step: "Execute",
      body: "Build in slices that can each ship on their own, validated as they go, so there is something usable early and no single big-bang handover at the end.",
    },
    {
      step: "Measure",
      body: "Go back afterwards with the number agreed in step one — 100+ hours a month, 32% less cost per bug — and publish it whichever way it comes out.",
    },
  ],
};

/**
 * The figures in the hero scan strip. Each one is also stated in prose further
 * down the page; a recruiter reads numbers before sentences.
 */
export const headlineMetrics = [
  { value: "100+", label: "hours a month returned by automation" },
  { value: "16+", label: "reporting & governance processes automated" },
  { value: "100k+", label: "records cleansed and restructured in Python" },
  { value: "600+", label: "IT tickets triaged for a global user base" },
  { value: "2nd", label: "place, LaunchLoop hackathon (preflight)" },
  { value: "4.58/5.0", label: "CGPA, Stipendium Hungaricum Scholar" },
];

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
    shot: { src: "assets/img/projects/preflight-dashboard.jpg", caption: "preflight's own results dashboard, rendered from the benchmark data committed in the repository." },
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
    shot: { src: "assets/img/projects/tracky-dashboard.jpg", caption: "A user-built dashboard in Tracky. Every widget here was configured in the UI, not coded." },
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
    shot: { src: "assets/img/projects/sales-dashboard.jpg", caption: "The dashboard the Spark aggregations feed, in Databricks." },
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
    shot: { src: "assets/img/projects/powerbi-datamodel.jpg", caption: "The model behind the report — a star schema, not a pile of joined sheets." },
    page: "projects/powerbi-analysis.html",
    featured: true,
  },
];

export const skills = [
  {
    group: "Languages",
    items: [
      "Python",
      "TypeScript / JavaScript",
      "SQL",
      "Java",
      "PHP",
      "C#",
      "C++",
      "Bash / PowerShell",
      "DAX",
    ],
  },
  {
    group: "Python — data & numerics",
    items: [
      "pandas",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Jupyter",
      "openpyxl",
    ],
  },
  {
    group: "Machine learning",
    items: [
      "scikit-learn",
      "PyTorch",
      "XGBoost / LightGBM",
      "statsmodels",
      "Feature engineering",
      "Model evaluation & benchmarking",
      "CNNs",
      "Cross-validation & leakage control",
    ],
  },
  {
    group: "Signal processing & optimisation",
    note: "ELTE Modeling Lab",
    items: [
      "scipy.signal",
      "PyWavelets",
      "WFDB / PhysioNet",
      "Quadratic Programming",
      "FISTA / FISTA-Net",
      "Sparse dictionary learning",
      "ruptures (change-point)",
    ],
  },
  {
    group: "LLM & AI systems",
    items: [
      "LangGraph",
      "LangChain",
      "Anthropic & OpenAI SDKs",
      "Langfuse",
      "Claude Code CLI",
      "Devin CLI",
      "Prompt & context design",
      "Cost / token benchmarking",
      "Agent evaluation harnesses",
    ],
  },
  {
    group: "Data engineering",
    items: [
      "PySpark",
      "Apache Spark",
      "Databricks",
      "ETL / ELT pipeline design",
      "Star-schema modelling",
      "Prefect",
      "Apache Kafka",
      "Avro / fastavro",
      "Data quality & validation",
    ],
  },
  {
    group: "BI & automation",
    items: [
      "Power BI",
      "DAX",
      "Power Query (M)",
      "Power BI Service",
      "Power Automate",
      "Office Scripts",
      "Excel (advanced)",
      "Upland PSA administration",
    ],
  },
  {
    group: "Backend & APIs",
    items: [
      "Laravel 13",
      "FastAPI",
      "Pydantic",
      "REST API design",
      "Eloquent ORM",
      "aiosql / psycopg",
      "JWT / Sanctum auth",
      "Authorisation policies",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "Blade",
      "Accessible, semantic HTML",
    ],
  },
  {
    group: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "SQLite",
      "MS Access",
      "Query tuning & indexing",
    ],
  },
  {
    group: "Cloud, infra & observability",
    items: [
      "Docker & Compose",
      "Azure (fundamentals)",
      "Azure AD administration",
      "AWS (fundamentals)",
      "GitHub Actions",
      "OpenTelemetry",
      "Prometheus",
      "structlog",
    ],
  },
  {
    group: "Testing & quality",
    items: [
      "pytest",
      "PHPUnit",
      "Cypress",
      "Ruff",
      "pre-commit",
      "Type hints / mypy-style typing",
      "Benchmark harnesses",
    ],
  },
  {
    group: "Ways of working",
    items: [
      "Stakeholder alignment",
      "Requirements & scoping",
      "Technical writing / documentation",
      "Trade-off records",
      "Teaching & explanation",
      "Git / trunk-based workflow",
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
    "Numerical Analysis",
    "Discrete Mathematics",
    "Operating Systems",
    "Computer Networks",
  ],
};

/**
 * Empty for now. The certifications section in index.html is commented out;
 * uncomment it and add entries here in the same shape when you have some.
 * Shape: { name, issuer, year, url }
 */
export const certifications = [];
