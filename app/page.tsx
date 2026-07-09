import Image from "next/image";

const skills = [
  "SQL",
  "Snowflake",
  "Amazon Redshift",
  "AWS",
  "Tableau",
  "Power BI",
  "Salesforce",
  "NetSuite",
  "HubSpot",
  "dbt",
  "Fivetran",
  "Jira",
  "Confluence",
  "Data Modeling",
  "Executive Reporting",
  "UAT",
];

const metrics = [
  { value: "7+", label: "years in analytics and BI" },
  { value: "5", label: "industries with reporting ownership" },
  { value: "30K+", label: "transactions and records validated" },
  { value: "12", label: "platforms across data and systems" },
];

const analytics = [
  { label: "Reporting Reliability", value: "94%", width: "94%" },
  { label: "Pipeline Visibility", value: "87%", width: "87%" },
  { label: "Stakeholder Readiness", value: "91%", width: "91%" },
];

const experience = [
  {
    company: "Shift4 Payments",
    logo: "/logos/shift4.png",
    role: "Technical Business Analyst III",
    dates: "Dec 2023 - Mar 2026",
    text: "Supported enterprise-scale payment transaction reporting, settlement analytics, data quality validation, and Lighthouse Business Manager platform enhancements.",
    accent: "Fintech",
  },
  {
    company: "Wasabi Technologies",
    logo: "/logos/wasabi.jpg",
    role: "Senior Data Analyst",
    dates: "Sep 2021 - Sep 2023",
    text: "Built executive dashboards, revenue analytics, sales pipeline reporting, and cloud storage profitability insights using SQL, Snowflake, dbt, Fivetran, and Tableau.",
    accent: "Cloud Storage",
  },
  {
    company: "ConnectWise",
    logo: "/logos/connectwise.png",
    role: "Data Analyst",
    dates: "Nov 2020 - Sep 2021",
    text: "Developed customer success dashboards, customer health scoring, churn risk analysis, and adoption reporting for SaaS customer success teams.",
    accent: "SaaS",
  },
  {
    company: "Covius Solutions",
    logo: "/logos/covius.jpg",
    role: "Data Analyst",
    dates: "Mar 2018 - Jun 2020",
    text: "Delivered compliance, operational, and audit reporting while supporting data integrity, SQL analysis, and production data issue resolution.",
    accent: "Compliance",
  },
  {
    company: "TD SYNNEX",
    logo: "/logos/tdsynnex.png",
    role: "Strategic Account Representative",
    dates: "May 2015 - Jun 2018",
    text: "Managed SMB and strategic accounts, supported vendor programs, analyzed account performance, and used sales data to drive customer growth and retention.",
    accent: "Sales Ops",
  },
];

const projects = [
  {
    title: "Enterprise Payment Reporting Platform",
    stat: "Settlement analytics",
    description:
      "Supported data requirements, validation, and delivery coordination for transaction reporting and settlement data used across enterprise payment operations.",
  },
  {
    title: "Customer Health Scoring Model",
    stat: "Retention signals",
    description:
      "Built analytics to identify customer risk, adoption patterns, and retention opportunities across SaaS customer success workflows.",
  },
  {
    title: "Cloud Storage Profitability Analytics",
    stat: "Cost visibility",
    description:
      "Analyzed storage utilization, data center cost drivers, and profitability trends to support executive decision-making.",
  },
  {
    title: "Executive KPI Dashboards",
    stat: "Leadership reporting",
    description:
      "Created dashboards and reporting frameworks for sales, revenue, product, operations, and leadership teams.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09110f] text-stone-100">
      <section className="relative min-h-screen px-6 py-8 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(57,186,144,0.28),transparent_28%),radial-gradient(circle_at_78%_24%,rgba(232,179,92,0.20),transparent_30%),linear-gradient(135deg,#09110f_0%,#10231d_48%,#1a1712_100%)]" />
        <div className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between">
          <nav className="flex items-center justify-between border-b border-white/10 py-5">
            <a href="#top" className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">
              Kyle Sewell
            </a>
            <div className="hidden items-center gap-6 text-sm text-stone-300 md:flex">
              <a className="transition hover:text-emerald-200" href="#experience">
                Experience
              </a>
              <a className="transition hover:text-emerald-200" href="#work">
                Work
              </a>
              <a className="transition hover:text-emerald-200" href="#contact">
                Contact
              </a>
            </div>
          </nav>

          <div id="top" className="grid gap-12 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-100">
                Business Intelligence / Data Analytics / Systems Delivery
              </p>

              <h1 className="max-w-3xl text-6xl font-black leading-[0.88] tracking-tight text-stone-50 sm:text-8xl">
                Analytics that make business systems readable.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300">
                Senior Business Analyst turning complex data, systems, and
                requirements into clean reporting, reliable operating insight,
                and platform improvements across fintech, SaaS, cloud
                technology, and enterprise operations.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="mailto:kylesewell@outlook.com"
                  className="rounded-full bg-emerald-300 px-6 py-3 font-bold text-[#09110f] transition hover:-translate-y-0.5 hover:bg-emerald-200"
                >
                  Contact Kyle
                </a>
                <a
                  href="/Kyle_Sewell_Resume.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-stone-500 px-6 py-3 font-bold text-stone-100 transition hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-200"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[0.82fr_1fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70 shadow-2xl shadow-emerald-950/50">
                <Image
                  src="/headshot.jpg"
                  alt="Kyle Sewell"
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#09110f] via-[#09110f]/64 to-transparent p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
                    Senior Business Analyst
                  </p>
                  <p className="mt-2 text-2xl font-black">Kyle Sewell</p>
                </div>
              </div>

              <div className="grid content-between gap-5">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-400">
                      Analytics Pulse
                    </p>
                    <span className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(110,231,183,0.8)]" />
                  </div>
                  <div className="mt-7 space-y-5">
                    {analytics.map((item) => (
                      <div key={item.label}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-stone-300">{item.label}</span>
                          <span className="font-bold text-emerald-200">{item.value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-emerald-300 to-amber-200"
                            style={{ width: item.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-3xl border border-white/10 bg-[#13251f]/86 p-5"
                    >
                      <p className="text-3xl font-black text-amber-200">{metric.value}</p>
                      <p className="mt-2 text-sm leading-5 text-stone-300">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
              About
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Built for the messy middle between business needs and trusted data.
            </h2>
          </div>
          <p className="text-xl leading-9 text-stone-300">
            I am a Business Intelligence and Analytics professional with 7+
            years of experience supporting data-driven decision-making,
            reporting platforms, business systems, and cross-functional delivery.
            My background includes enterprise payments, cloud storage, SaaS,
            customer success, compliance reporting, executive dashboards, data
            pipeline validation, and operational analytics.
          </p>
        </div>
      </section>

      <section id="experience" className="border-y border-white/10 bg-[#0d1815] px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Experience
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Career signal map
              </h2>
            </div>
            <p className="max-w-xl text-stone-400">
              A progression from account operations into analytics ownership,
              reporting delivery, data quality, and executive decision support.
            </p>
          </div>

          <div className="mt-12 grid gap-5">
            {experience.map((job, index) => (
              <article
                key={job.company}
                className="group grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] md:grid-cols-[130px_1fr_auto]"
              >
                <div className="flex items-center gap-4 md:block">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white p-3">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={90}
                      height={90}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-5xl font-black text-white/10 md:mt-5">
                    0{index + 1}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                    {job.accent}
                  </p>
                  <h3 className="mt-2 text-2xl font-black">{job.role}</h3>
                  <p className="text-emerald-200">{job.company}</p>
                  <p className="mt-4 max-w-3xl leading-7 text-stone-300">{job.text}</p>
                </div>

                <p className="text-sm font-semibold text-stone-400 md:text-right">
                  {job.dates}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
            Featured Work
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Reports, models, and dashboards with operational weight.
            </h2>
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-emerald-300 via-amber-200 to-stone-100" />
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="min-h-72 rounded-[2rem] border border-white/10 bg-[#121f1b] p-7 transition hover:-translate-y-1 hover:border-amber-200/50"
              >
                <p className="inline-flex rounded-full bg-amber-200/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
                  {project.stat}
                </p>
                <h3 className="mt-8 text-2xl font-black">{project.title}</h3>
                <p className="mt-5 leading-7 text-stone-300">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#10201b] px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
            Stack
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Tools across data, platforms, and delivery.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm font-semibold text-stone-200 transition hover:border-emerald-300/50 hover:text-emerald-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-300 to-amber-200 p-8 text-[#09110f] sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Let&apos;s make the data easier to act on.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#1d2925]">
              Open to senior business analyst, data analyst, business
              intelligence, analytics engineering, and systems analyst
              opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="mailto:kylesewell@outlook.com"
              className="rounded-full bg-[#09110f] px-6 py-3 font-black text-stone-50 transition hover:-translate-y-0.5"
            >
              Email Kyle
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#09110f]/35 px-6 py-3 font-black text-[#09110f] transition hover:-translate-y-0.5 hover:bg-[#09110f]/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
