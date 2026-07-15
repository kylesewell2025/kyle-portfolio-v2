"use client";

import { useState } from "react";

const expertise = [
  {
    icon: "💼",
    title: "Business Analysis & Solution Design",
    description:
      "Translating business needs into clear requirements, documentation, and workable solutions.",
    skills: [
      "Requirements Elicitation",
      "Business Process Analysis",
      "Technical Documentation",
      "Functional Specifications",
      "Stakeholder Collaboration",
      "Root Cause Analysis",
      "Solution Design",
      "SDLC Support",
    ],
  },
  {
    icon: "📊",
    title: "Enterprise Data & Analytics",
    description:
      "Turning enterprise data into dashboards, KPIs, and executive-ready reporting.",
    skills: [
      "SQL",
      "Business Intelligence",
      "KPI Development",
      "Dashboard Development",
      "Data Visualization",
      "Executive Reporting",
      "Data Storytelling",
      "Executive Communication",
    ],
  },
  {
    icon: "💳",
    title: "Payments & Financial Technology",
    description:
      "Architecting and analyzing payment workflows, settlements, and merchant reporting.",
    skills: [
      "Payment Architecture",
      "Transaction Workflows",
      "Payment Analytics",
      "Settlement Reporting",
      "Merchant Reporting",
      "Payment Integrations",
      "Financial Platforms",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud Data Platforms",
    description:
      "Building cloud data pipelines and integrations on a modern, event-driven stack.",
    skills: [
      "AWS",
      "Data Pipelines",
      "Modern Data Stack",
      "Enterprise Integrations",
      "ETL",
      "Cloud Data Solutions",
      "Event-Driven Architecture",
    ],
  },
  {
    icon: "🏗",
    title: "Data Architecture",
    description:
      "Designing data models and databases with quality and governance built in.",
    skills: [
      "Data Modeling",
      "Database Design",
      "Relational Databases",
      "Dimensional Modeling",
      "Data Quality",
      "Data Governance",
    ],
  },
  {
    icon: "🚀",
    title: "Agile Delivery",
    description:
      "Driving Scrum ceremonies, planning, and backlog delivery from sprint to release.",
    skills: [
      "Scrum Master",
      "Sprint Planning",
      "Backlog Management",
      "Capacity Planning",
      "User Stories",
      "Release Planning",
      "Jira",
    ],
  },
  {
    icon: "⚙️",
    title: "Process Automation",
    description:
      "Automating and optimizing workflows for operational excellence and continuous improvement.",
    skills: [
      "Workflow Automation",
      "Process Optimization",
      "Operational Excellence",
      "Continuous Improvement",
      "Monitoring",
      "Production Support",
    ],
  },
  {
    icon: "🤝",
    title: "Leadership & Communication",
    description:
      "Leading cross-functional teams and communicating strategy to executives and stakeholders.",
    skills: [
      "Executive Communication",
      "Stakeholder Management",
      "Cross-Functional Leadership",
      "Technical Presentations",
      "Strategic Planning",
      "Change Management",
    ],
  },
];

export default function Expertise() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-12 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {expertise.map((area, index) => {
        const isOpen = openIndex === index;
        const panelId = `expertise-panel-${index}`;

        return (
          <article
            key={area.title}
            className={`group flex flex-col rounded-[1.75rem] border bg-white p-6 transition duration-300 ${
              isOpen
                ? "border-[#93C5FD] shadow-xl shadow-slate-200"
                : "border-[#E2E8F0] hover:-translate-y-1 hover:border-[#7DD3FC] hover:shadow-lg hover:shadow-slate-200"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full flex-col text-left"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF] text-2xl transition duration-300 group-hover:bg-[#E0F2FE]">
                  {area.icon}
                </span>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-[#E2E8F0] text-[#2563EB] transition duration-300 ${
                    isOpen ? "rotate-45 bg-[#EFF6FF]" : "group-hover:border-[#7DD3FC]"
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M7 1.5v11M1.5 7h11" />
                  </svg>
                </span>
              </div>

              <h3 className="mt-6 text-lg font-black leading-tight tracking-tight text-[#111827]">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                {area.description}
              </p>
            </button>

            <div
              id={panelId}
              className={`grid transition-all duration-500 ease-out ${
                isOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-[#E2E8F0] pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]">
                    Related skills
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-xs font-semibold text-[#1E293B] transition hover:border-[#7DD3FC] hover:text-[#2563EB]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
