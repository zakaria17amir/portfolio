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
  role: "Data Science & AI",
  title: "Computer Science @ ELTE Budapest",
  graduating: "January 2027",
  location: "Budapest, Hungary",
  availability:
    "Open to Data Science, AI and Data Engineering internships and 2027 graduate roles",
  // Plain-English summary for the HR screener. No acronyms.
  summary:
    "I turn messy data into things people can actually rely on — clean pipelines, validated numbers, and dashboards teams use to make decisions.",
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
    role: "Data Analytics & Automation Intern",
    org: "The Estée Lauder Companies Inc.",
    type: "Internship",
    start: "Jun 2025",
    end: "Present",
    location: "Budapest, Hungary",
    bullets: [
      "Designed ETL pipelines and automated 5+ reporting workflows in Python (pandas) and MS Power Automate, cutting processing time from roughly 3–4 hours to under 15 minutes.",
      "Built Power BI dashboards on structured data models and DAX, replacing manual Excel reporting with reliable, KPI-driven outputs for cross-functional teams.",
      "Implemented data validation and QA pipelines that resolved field mismatches, duplicates and schema inconsistencies across 500+ records before they reached downstream reports.",
      "Built automated anomaly detection and notification workflows that flag data quality issues before they reach dashboards.",
      "Collaborated with global teams across the Americas, Europe and Asia on data pipeline design and reporting alignment.",
    ],
  },
  {
    role: "Teaching Assistant — Discrete Mathematics",
    org: "Eötvös Loránd University",
    type: "Teaching",
    start: "Feb 2026",
    end: "Present",
    location: "Budapest, Hungary",
    bullets: [
      "Deliver weekly tutorials reinforcing discrete mathematics concepts for undergraduate CS students.",
      "Design and grade assessments.",
    ],
  },
  {
    role: "Teaching Assistant — Linux & Shell Scripting",
    org: "Eötvös Loránd University",
    type: "Teaching",
    start: "Sep 2024",
    end: "Jan 2025",
    location: "Budapest, Hungary",
    bullets: [
      "Led hands-on Bash and PowerShell labs for 50+ students.",
      "Developed exam questions and assessments.",
    ],
  },
];

export const projects = [
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
  {
    slug: "tracky",
    title: "Tracky — Habit Tracking Dashboard",
    tagline: "A full-stack app: Laravel 12 REST API and a React 19 TypeScript SPA",
    impact:
      "Designed the schema, built a versioned REST API in Laravel 12, and consumed it from a typed React 19 single-page app built with Vite.",
    tags: ["Laravel 12", "PHP", "React 19", "TypeScript", "Vite", "REST API"],
    repo: "https://github.com/zakaria17amir/Tracky",
    page: "projects/tracky.html",
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
      "Model evaluation",
      "LLM fundamentals",
      "Generative AI concepts",
    ],
  },
  {
    group: "Data Engineering",
    items: [
      "ETL pipelines",
      "PySpark / Apache Spark",
      "Databricks",
      "Power BI (DAX, Power Query)",
      "MS Power Automate",
    ],
  },
  {
    group: "Programming",
    items: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "C#", "Bash / Shell"],
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
      "Git",
      "Jupyter",
      "VS Code",
      "IntelliJ",
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
