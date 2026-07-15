"use client";

import Image from "next/image";
import { useState } from "react";

type Company = {
  company: string;
  logo: string;
  role: string;
  dates: string;
  accent: string;
  overview: string;
  technologies: string[];
  impact: string;
  challenges: string;
  results: string;
};

const companies: Company[] = [
  {
    company: "Shift4 Payments",
    logo: "/logos/shift4.png",
    role: "Technical Business Analyst III",
    dates: "Dec 2023 - Mar 2026",
    accent: "Fintech",
    overview:
      "Owned reporting and analysis for enterprise-scale payment transaction and settlement data, partnering with product and engineering on Lighthouse Business Manager platform enhancements.",
    technologies: ["SQL", "Snowflake", "Tableau", "Salesforce", "Jira", "Confluence"],
    impact:
      "Gave payment operations trustworthy settlement and transaction reporting used across enterprise teams for reconciliation and executive visibility.",
    challenges:
      "Reconciling high-volume payment and settlement data across systems while keeping reporting accurate and audit-ready under enterprise-scale throughput.",
    results:
      "Delivered validated settlement analytics and drove platform improvements that reduced ambiguity in transaction reporting and sped up issue resolution.",
  },
  {
    company: "Wasabi Technologies",
    logo: "/logos/wasabi.jpg",
    role: "Senior Data Analyst",
    dates: "Sep 2021 - Sep 2023",
    accent: "Cloud Storage",
    overview:
      "Built the executive reporting layer for a fast-growing cloud storage company, covering revenue analytics, sales pipeline reporting, and storage profitability.",
    technologies: ["SQL", "Snowflake", "dbt", "Fivetran", "Tableau"],
    impact:
      "Equipped leadership with a single source of truth for revenue, pipeline health, and cost drivers that shaped go-to-market and pricing decisions.",
    challenges:
      "Turning fragmented storage utilization and cost data into a clean, modeled pipeline that leadership could trust for profitability decisions.",
    results:
      "Stood up dbt and Fivetran pipelines feeding executive dashboards, surfacing profitability trends and pipeline visibility that were previously hidden.",
  },
  {
    company: "ConnectWise",
    logo: "/logos/connectwise.png",
    role: "Data Analyst",
    dates: "Nov 2020 - Sep 2021",
    accent: "SaaS",
    overview:
      "Supported customer success teams with analytics for customer health, churn risk, and product adoption across a SaaS customer base.",
    technologies: ["SQL", "Power BI", "Salesforce"],
    impact:
      "Helped customer success teams intervene earlier by making at-risk accounts and adoption gaps visible before renewals were on the line.",
    challenges:
      "Translating scattered usage and account signals into a health score that customer success managers could act on with confidence.",
    results:
      "Delivered customer health scoring and adoption reporting that focused retention efforts on the accounts most likely to churn.",
  },
  {
    company: "Covius Solutions",
    logo: "/logos/covius.jpg",
    role: "Data Analyst",
    dates: "Mar 2018 - Jun 2020",
    accent: "Compliance",
    overview:
      "Delivered compliance, operational, and audit reporting while safeguarding data integrity and resolving production data issues.",
    technologies: ["SQL", "Tableau", "Data Modeling", "UAT"],
    impact:
      "Kept regulated reporting accurate and defensible, giving compliance and operations teams the confidence to stand behind audited numbers.",
    challenges:
      "Maintaining data integrity across compliance-critical reporting where errors carried real audit and regulatory consequences.",
    results:
      "Resolved production data issues and hardened reporting workflows, improving the reliability of compliance and audit deliverables.",
  },
  {
    company: "TD SYNNEX",
    logo: "/logos/tdsynnex.png",
    role: "Strategic Account Representative",
    dates: "May 2015 - Jun 2018",
    accent: "Sales Ops",
    overview:
      "Managed SMB and strategic accounts, supported vendor programs, and used sales data to drive customer growth and retention.",
    technologies: ["Salesforce", "Excel", "Executive Reporting"],
    impact:
      "Grew and retained accounts by pairing relationship management with data-backed insight into account performance and vendor programs.",
    challenges:
      "Balancing a large book of SMB and strategic accounts while spotting the performance signals that pointed to growth and churn.",
    results:
      "Used account analytics to prioritize outreach and vendor programs, laying the analytical foundation for the move into full-time data work.",
  },
];

const detailSections = [
  { key: "impact", label: "Business Impact" },
  { key: "challenges", label: "Challenges" },
  { key: "results", label: "Results" },
] as const;

export default function CompanySpotlight() {
  const [active, setActive] = useState(0);
  const total = companies.length;
  const job = companies[active];

  const go = (next: number) => setActive((next + total) % total);

  return (
    <div>
      <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white shadow-2xl shadow-slate-200/70">
        <div key={active} className="animate-spotlight-in grid lg:grid-cols-[0.85fr_1.15fr]">
          {/* Hero panel */}
          <div className="relative flex flex-col justify-between gap-10 overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#1E293B] to-[#0F172A] p-8 text-white sm:p-10">
            <div className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.28),transparent_45%),radial-gradient(circle_at_0%_100%,rgba(37,99,235,0.24),transparent_45%)]" />

            <div className="relative flex items-center justify-between">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#7DD3FC]">
                {job.accent}
              </span>
              <span className="font-mono text-sm text-white/50">
                0{active + 1} / 0{total}
              </span>
            </div>

            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white p-4 shadow-lg">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={96}
                  height={96}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="mt-7 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl">
                {job.company}
              </h3>
              <p className="mt-4 text-lg font-semibold text-[#7DD3FC]">{job.role}</p>
              <p className="mt-1 text-sm font-medium text-white/60">{job.dates}</p>
            </div>

            <div className="relative flex items-center gap-2">
              {companies.map((c, i) => (
                <button
                  key={c.company}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`View ${c.company}`}
                  aria-current={i === active}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-8 bg-[#0EA5E9]" : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Case-study content */}
          <div className="flex flex-col justify-between gap-8 p-8 sm:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0EA5E9]">
                Overview
              </p>
              <p className="mt-3 text-lg leading-8 text-[#334155]">{job.overview}</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0EA5E9]">
                Technologies
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3.5 py-1.5 text-sm font-semibold text-[#2563EB]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {detailSections.map((section) => (
                <div
                  key={section.key}
                  className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#64748B]">
                    {section.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#475569]">{job[section.key]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go(active - 1)}
          className="group inline-flex items-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-bold text-[#1E293B] transition hover:-translate-y-0.5 hover:border-[#0EA5E9] hover:text-[#0EA5E9]"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Previous
        </button>

        <p className="hidden text-sm font-semibold text-[#64748B] sm:block">
          <span className="text-[#2563EB]">{companies[(active + 1) % total].company}</span> next
        </p>

        <button
          type="button"
          onClick={() => go(active + 1)}
          className="group inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
        >
          Next company
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
