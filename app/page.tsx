const skills = [
  "SQL", "Snowflake", "Amazon Redshift", "AWS", "Tableau", "Power BI",
  "Salesforce", "NetSuite", "HubSpot", "dbt", "Fivetran", "Jira",
  "Confluence", "Data Modeling", "Executive Reporting", "UAT",
];

const experience = [
  {
    company: "Shift4 Payments",
    logo: "/logos/shift4.png",
    role: "Technical Business Analyst III",
    dates: "Dec 2023 – Mar 2026",
    text: "Supported enterprise-scale payment transaction reporting, settlement analytics, data quality validation, and Lighthouse Business Manager platform enhancements.",
  },
  {
    company: "Wasabi Technologies",
    logo: "/logos/wasabi.jpg",
    role: "Senior Data Analyst",
    dates: "Sep 2021 – Sep 2023",
    text: "Built executive dashboards, revenue analytics, sales pipeline reporting, and cloud storage profitability insights using SQL, Snowflake, dbt, Fivetran, and Tableau.",
  },
  {
    company: "ConnectWise",
    logo: "/logos/connectwise.png",
    role: "Data Analyst",
    dates: "Nov 2020 – Sep 2021",
    text: "Developed customer success dashboards, customer health scoring, churn risk analysis, and adoption reporting for SaaS customer success teams.",
  },
  {
    company: "Covius Solutions",
    logo: "/logos/covius.jpg",
    role: "Data Analyst",
    dates: "Mar 2018 – Jun 2020",
    text: "Delivered compliance, operational, and audit reporting while supporting data integrity, SQL analysis, and production data issue resolution.",
  },
  {
    company: "TD SYNNEX",
    logo: "/logos/tdsynnex.png",
    role: "Strategic Account Representative",
    dates: "May 2015 – Jun 2018",
    text: "Managed SMB and strategic accounts, supported vendor programs, analyzed account performance, and used sales data to drive customer growth and retention.",
  },
];

const projects = [
  {
    title: "Enterprise Payment Reporting Platform",
    description:
      "Supported data requirements, validation, and delivery coordination for transaction reporting and settlement data used across enterprise payment operations.",
  },
  {
    title: "Customer Health Scoring Model",
    description:
      "Built analytics to identify customer risk, adoption patterns, and retention opportunities across SaaS customer success workflows.",
  },
  {
    title: "Cloud Storage Profitability Analytics",
    description:
      "Analyzed storage utilization, data center cost drivers, and profitability trends to support executive decision-making.",
  },
  {
    title: "Executive KPI Dashboards",
    description:
      "Created dashboards and reporting frameworks for sales, revenue, product, operations, and leadership teams.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16">
        <div className="grid w-full gap-12 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="/headshot.jpg"
              alt="Kyle Sewell"
              className="w-72 rounded-3xl border border-slate-800 shadow-2xl shadow-cyan-950/40"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Business Intelligence • Data Analytics • Systems Delivery
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Kyle Sewell
            </h1>

            <h2 className="mt-5 text-2xl font-medium text-slate-300 sm:text-3xl">
              Senior Business Analyst focused on data, analytics, and scalable
              business systems.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              I help organizations turn complex data, systems, and business
              requirements into clear insights, reliable reporting, and scalable
              platform improvements across fintech, SaaS, cloud technology, and
              enterprise operations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:kylesewell32@gmail.com"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Contact Me
              </a>

              <a
                href="/Kyle_Sewell_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                Download Resume
              </a>

              <a
                href="#experience"
                className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                View Experience
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            I am a Business Intelligence and Analytics professional with 7+
            years of experience supporting data-driven decision-making,
            reporting platforms, business systems, and cross-functional delivery.
            My background includes enterprise payments, cloud storage, SaaS,
            customer success, compliance reporting, executive dashboards, data
            pipeline validation, and operational analytics.
          </p>
        </div>
      </section>

      <section id="experience" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Experience</h2>

          <div className="mt-10 grid gap-6">
            {experience.map((job) => (
              <div
                key={job.company}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-cyan-400/60"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div className="flex items-start gap-4">
                    <div className="flex h-30 w-30 shrink-0 items-center justify-center rounded-xl bg-white p-2">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">{job.role}</h3>
                      <p className="text-cyan-400">{job.company}</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 sm:text-right">
                    {job.dates}
                  </p>
                </div>

                <p className="mt-4 leading-7 text-slate-400">{job.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Featured Work</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-cyan-400/60"
              >
                <h3 className="text-xl font-semibold text-cyan-300">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Skills</h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-slate-900 p-8 sm:p-12">
          <h2 className="text-3xl font-bold">Let’s Connect</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            Open to senior business analyst, data analyst, business intelligence,
            analytics engineering, and systems analyst opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:kylesewell@outlook.com"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Email Kyle
            </a>

            <a
              href="/Kyle_Sewell_Resume.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}