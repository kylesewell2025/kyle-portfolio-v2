"use client";

import { useState, type ReactNode } from "react";

type Card = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  skills: string[];
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const cards: Card[] = [
  {
    id: "business-analysis",
    title: "Business Analysis & Solution Design",
    description:
      "Turning stakeholder needs into clear requirements, documentation, and workable solutions.",
    icon: (
      <svg {...iconProps}>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4" />
        <path d="M12 16h4" />
        <path d="M8 11h.01" />
        <path d="M8 16h.01" />
      </svg>
    ),
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
    id: "data-analytics",
    title: "Enterprise Data & Analytics",
    description:
      "Building the reporting, dashboards, and data stories that drive executive decisions.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 3v18h18" />
        <rect x="7" y="12" width="3" height="5" />
        <rect x="12" y="8" width="3" height="9" />
        <rect x="17" y="5" width="3" height="12" />
      </svg>
    ),
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
    id: "payments",
    title: "Payments & Financial Technology",
    description:
      "Analyzing payment workflows, settlement, and merchant data across financial platforms.",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="15" x2="10" y2="15" />
      </svg>
    ),
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
    id: "cloud",
    title: "Cloud Data Platforms",
    description:
      "Designing cloud pipelines and integrations on a modern, event-driven data stack.",
    icon: (
      <svg {...iconProps}>
        <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.78A6 6 0 1 0 6 16.5" />
        <path d="M8 17l2 2 4-4" />
      </svg>
    ),
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
    id: "data-architecture",
    title: "Data Architecture",
    description:
      "Modeling and governing data so it stays accurate, structured, and query-ready.",
    icon: (
      <svg {...iconProps}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
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
    id: "agile",
    title: "Agile Delivery",
    description:
      "Running Scrum ceremonies and backlogs to ship work in predictable increments.",
    icon: (
      <svg {...iconProps}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
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
    id: "automation",
    title: "Process Automation",
    description:
      "Streamlining and automating operational workflows for reliable, repeatable output.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
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
    id: "leadership",
    title: "Leadership & Communication",
    description:
      "Aligning cross-functional teams and translating technical work for executives.",
    icon: (
      <svg {...iconProps}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
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

export default function CoreExpertise() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const isOpen = open === card.id;
        return (
          <div
            key={card.id}
            className={`self-start rounded-[1.75rem] border bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] ${
              isOpen ? "border-[#0EA5E9]/70 bg-white/[0.07]" : "border-white/10 hover:border-[#0EA5E9]/50"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : card.id)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-4 text-left"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                  isOpen ? "bg-[#0EA5E9] text-white" : "bg-white/10 text-[#7DD3FC]"
                }`}
              >
                <span className="h-6 w-6">{card.icon}</span>
              </span>
              <span className="flex-1">
                <span className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-black leading-6 text-white">{card.title}</h3>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`mt-1 h-4 w-4 shrink-0 text-[#7DD3FC] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
                <p className="mt-2 text-sm leading-6 text-white/55">{card.description}</p>
              </span>
            </button>

            <div
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {card.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-sm font-semibold text-[#F8FAFC] transition hover:border-[#0EA5E9] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
