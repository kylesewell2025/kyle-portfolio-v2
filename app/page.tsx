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

const industries = [
  "Payment Processing & Merchant Services",
  "Financial Technology (FinTech)",
  "Financial Services",
  "Cloud Storage & Infrastructure",
  "Enterprise Software (SaaS)",
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
    <main className="min-h-screen overflow-hidden bg-white text-[#111827]">
      <section className="relative min-h-screen px-6 py-8 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.14),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(14,165,233,0.16),transparent_32%),linear-gradient(135deg,#FFFFFF_0%,#F8FAFC_54%,#EAF6FF_100%)]" />
        <div className="absolute inset-0 opacity-[0.42] [background-image:linear-gradient(rgba(30,41,59,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.16)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between">
          <nav className="flex items-center justify-between border-b border-[#E2E8F0] py-5">
            <a href="#top" className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
              Kyle Sewell
            </a>
            <div className="hidden items-center gap-6 text-sm text-[#64748B] md:flex">
              <a className="transition hover:text-[#2563EB]" href="#expertise">
                Expertise
              </a>
              <a className="transition hover:text-[#2563EB]" href="#experience">
                Experience
              </a>
              <a className="transition hover:text-[#2563EB]" href="#work">
                Work
              </a>
              <a className="transition hover:text-[#2563EB]" href="#contact">
                Contact
              </a>
            </div>
          </nav>

          <div id="top" className="grid gap-12 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
                Business Intelligence / Data Analytics / Systems Delivery
              </p>

              <h1 className="max-w-3xl text-6xl font-black leading-[0.88] tracking-tight text-[#111827] sm:text-8xl">
                Analytics that make business systems readable.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#64748B]">
                Senior Business Analyst turning complex data, systems, and
                requirements into clean reporting, reliable operating insight,
                and platform improvements across fintech, SaaS, cloud
                technology, and enterprise operations.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="mailto:kylesewell@outlook.com"
                  className="rounded-full bg-[#2563EB] px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
                >
                  Contact Kyle
                </a>
                <a
                  href="/Kyle_Sewell_Resume.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#CBD5E1] px-6 py-3 font-bold text-[#1E293B] transition hover:-translate-y-0.5 hover:border-[#0EA5E9] hover:text-[#0EA5E9]"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[0.82fr_1fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white shadow-2xl shadow-slate-200">
                <Image
                  src="/headshot.jpg"
                  alt="Kyle Sewell"
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/70 to-transparent p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0EA5E9]">
                    Senior Business Analyst
                  </p>
                  <p className="mt-2 text-2xl font-black">Kyle Sewell</p>
                </div>
              </div>

              <div className="grid content-between gap-5">
                <div className="rounded-[2rem] border border-[#E2E8F0] bg-[#F8FAFC] p-6 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#64748B]">
                      Analytics Pulse
                    </p>
                    <span className="h-3 w-3 rounded-full bg-[#10B981] shadow-[0_0_24px_rgba(16,185,129,0.48)]" />
                  </div>
                  <div className="mt-7 space-y-5">
                    {analytics.map((item) => (
                      <div key={item.label}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-[#64748B]">{item.label}</span>
                          <span className="font-bold text-[#2563EB]">{item.value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-[#E2E8F0]">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#0EA5E9]"
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
                      className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-5"
                    >
                      <p className="text-3xl font-black text-[#0EA5E9]">{metric.value}</p>
                      <p className="mt-2 text-sm leading-5 text-[#64748B]">{metric.label}</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0EA5E9]">
              About
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Built for the messy middle between business needs and trusted data.
            </h2>
          </div>
          <p className="text-xl leading-9 text-[#64748B]">
            I am a Business Intelligence and Analytics professional with 7+
            years of experience supporting data-driven decision-making,
            reporting platforms, business systems, and cross-functional delivery.
            My background includes enterprise payments, cloud storage, SaaS,
            customer success, compliance reporting, executive dashboards, data
            pipeline validation, and operational analytics.
          </p>
        </div>
      </section>

      <section
        id="expertise"
        className="relative overflow-hidden border-y border-[#BFDBFE] bg-[#EFF6FF] px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[56px] border-white/50" />
        <div className="absolute -bottom-32 left-[38%] h-72 w-72 rotate-12 border-[48px] border-[#DBEAFE]/70" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0EA5E9]">
                Industry Expertise
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-black tracking-tight sm:text-5xl">
                Domain fluency where data meets complex operations.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#475569] lg:justify-self-end">
              Experience translating business questions into trusted reporting
              across transaction-heavy, regulated, cloud-based, and recurring
              revenue environments.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {industries.map((industry, index) => (
              <article
                key={industry}
                className={`group relative min-h-44 overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-lg shadow-blue-200/30 backdrop-blur transition hover:-translate-y-1 hover:border-[#7DD3FC] hover:bg-white ${
                  index === 0 ? "lg:col-span-4" : "lg:col-span-2"
                }`}
              >
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#0EA5E9]">
                  0{index + 1}
                </span>
                <h3
                  className={`mt-10 max-w-xl font-black leading-tight text-[#1E293B] ${
                    index === 0 ? "text-3xl sm:text-4xl" : "text-2xl"
                  }`}
                >
                  {industry}
                </h3>
                <div className="absolute bottom-0 left-6 h-1 w-12 bg-[#2563EB] transition-all duration-300 group-hover:w-[calc(100%-3rem)]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-y border-[#E2E8F0] bg-[#F8FAFC] px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0EA5E9]">
                Experience
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Career signal map
              </h2>
            </div>
            <p className="max-w-xl text-[#64748B]">
              A progression from account operations into analytics ownership,
              reporting delivery, data quality, and executive decision support.
            </p>
          </div>

          <div className="mt-12 grid gap-5">
            {experience.map((job, index) => (
              <article
                key={job.company}
                className="group grid gap-5 rounded-[1.75rem] border border-[#E2E8F0] bg-white p-5 transition hover:-translate-y-1 hover:border-[#93C5FD] hover:bg-[#F8FAFC] md:grid-cols-[130px_1fr_auto]"
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
                  <p className="text-5xl font-black text-[#DBEAFE] md:mt-5">
                    0{index + 1}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]">
                    {job.accent}
                  </p>
                  <h3 className="mt-2 text-2xl font-black">{job.role}</h3>
                  <p className="text-[#2563EB]">{job.company}</p>
                  <p className="mt-4 max-w-3xl leading-7 text-[#64748B]">{job.text}</p>
                </div>

                <p className="text-sm font-semibold text-[#64748B] md:text-right">
                  {job.dates}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0EA5E9]">
            Featured Work
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Reports, models, and dashboards with operational weight.
            </h2>
            <div className="h-3 overflow-hidden rounded-full bg-[#E2E8F0]">
              <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-[#2563EB] via-[#0EA5E9] to-[#10B981]" />
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="min-h-72 rounded-[2rem] border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition hover:-translate-y-1 hover:border-[#7DD3FC]"
              >
                <p className="inline-flex rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0EA5E9]">
                  {project.stat}
                </p>
                <h3 className="mt-8 text-2xl font-black">{project.title}</h3>
                <p className="mt-5 leading-7 text-[#64748B]">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E2E8F0] bg-[#1E293B] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0EA5E9]">
            Stack
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Tools across data, platforms, and delivery.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#F8FAFC] transition hover:border-[#0EA5E9] hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-[#E2E8F0] bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Let&apos;s make the data easier to act on.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#E0F2FE]">
              Open to senior business analyst, data analyst, business
              intelligence, analytics engineering, and systems analyst
              opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="mailto:kylesewell@outlook.com"
              className="rounded-full bg-white px-6 py-3 font-black text-[#111827] transition hover:-translate-y-0.5"
            >
              Email Kyle
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-6 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
