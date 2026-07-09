import Image from "next/image";

const contact = [
  { label: "Greater Boston, MA" },
  { label: "978-870-2388", href: "tel:9788702388" },
  { label: "kyleesewell@outlook.com", href: "mailto:kyleesewell@outlook.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kylesewell/" },
];

const skillGroups = [
  {
    title: "Business Analysis",
    skills: [
      "Requirements Gathering",
      "Business Process Analysis",
      "Solution Design",
      "Technical Specifications",
      "Functional Specifications",
      "Process Modeling",
      "User Stories",
      "SDLC",
      "Agile",
      "Scrum",
      "QA/UAT",
      "Release Management",
      "Stakeholder Management",
    ],
  },
  {
    title: "Payments",
    skills: [
      "Payment Processing",
      "Transaction Lifecycle",
      "Settlement",
      "Payment Processor Integrations",
      "Transaction Data Standards",
      "Payment Reporting",
      "Reconciliation",
      "Operational Reporting",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "SQL",
      "Data Modeling",
      "ETL",
      "Data Pipelines",
      "Business Intelligence",
      "Dashboard Development",
      "KPI Development",
      "Executive Reporting",
      "Root Cause Analysis",
      "Data Quality",
    ],
  },
  {
    title: "Cloud",
    skills: [
      "AWS",
      "Amazon Redshift",
      "Amazon Kinesis",
      "AWS Glue",
      "Snowflake",
      "dbt",
      "Fivetran",
      "REST APIs",
      "Cloud Data Warehousing",
    ],
  },
  {
    title: "Business Systems",
    skills: [
      "Power BI",
      "Tableau",
      "Salesforce",
      "HubSpot",
      "NetSuite",
      "Gainsight",
      "SAP ERP",
      "Jira",
      "Confluence",
    ],
  },
];

const achievements = [
  "Modernized enterprise payment reporting by leading the transition from batch processing to real-time AWS streaming architecture supporting Lighthouse Business Manager.",
  "Owned enterprise transaction data standards, technical specifications, and reporting requirements supporting payment processor integrations and international platform expansion.",
  "Delivered executive analytics, KPI frameworks, and business intelligence solutions used by Finance, Revenue Operations, Product, Sales, Marketing, and Customer Success leadership.",
  "Built scalable cloud-based analytics platforms integrating Salesforce, NetSuite, HubSpot, and operational systems into trusted enterprise reporting environments.",
];

const experience = [
  {
    company: "Shift4 Payments",
    role: "Senior Technical Business Analyst",
    location: "Remote",
    dates: "December 2023 - March 2026",
    bullets: [
      "Owned the backend data platform supporting Lighthouse Business Manager (LBM), delivering enterprise transaction, settlement, and operational reporting through AWS data pipelines, scalable data models, and data quality frameworks.",
      "Served as owner of the Transaction Data Specification (TDS), defining transaction standards, business rules, field mappings, and reporting requirements supporting new payment processors, international markets, and emerging payment technologies.",
      "Led planning, development, and deployment of real-time transaction and settlement reporting, transitioning LBM from scheduled batch processing to a low-latency streaming architecture using AWS Kinesis and AWS Glue.",
      "Acted as the primary liaison between business stakeholders and engineering teams, translating business needs into technical requirements, functional specifications, and implementation plans.",
      "Facilitated Agile delivery through backlog management, sprint planning, Scrum ceremonies, QA/UAT coordination, release management, and production deployments.",
      "Led production support initiatives by performing root cause analysis, resolving transaction and settlement discrepancies, improving data quality, and enhancing reporting accuracy and platform reliability.",
    ],
  },
  {
    company: "Wasabi Technologies",
    role: "Senior Data Analyst",
    location: "Boston, MA",
    dates: "September 2021 - September 2023",
    bullets: [
      "Led enterprise analytics initiatives supporting Finance, Revenue Operations, Sales, Marketing, Product, and Customer Success, providing executive insights that informed strategic business decisions.",
      "Modernized the analytics ecosystem by integrating Salesforce, HubSpot, NetSuite, and cloud infrastructure into scalable Snowflake-based data pipelines and automated transformation workflows.",
      "Developed executive dashboards and KPI frameworks measuring revenue growth, profitability, customer acquisition, storage utilization, product adoption, and operational performance.",
      "Produced investor-facing analytics, executive reporting, and due diligence analyses supporting fundraising activities and long-term strategic planning.",
      "Partnered with executive leadership to identify trends, improve reporting consistency, and establish trusted enterprise metrics.",
    ],
  },
  {
    company: "ConnectWise",
    role: "Data Analyst, Customer Success",
    location: "Tampa, FL",
    dates: "November 2020 - September 2021",
    bullets: [
      "Partnered with Customer Success, Sales, and Marketing leaders to gather business requirements and deliver analytics supporting retention, renewals, and revenue growth initiatives.",
      "Designed predictive customer health scoring models that improved customer retention by identifying churn risk and expansion opportunities.",
      "Built Power BI dashboards, customer segmentation models, KPI reporting, and cohort analyses measuring product adoption, engagement, renewal trends, and customer success performance.",
      "Managed Salesforce reporting, CRM enhancements, data integrations, and Gainsight configuration supporting customer lifecycle management.",
    ],
  },
  {
    company: "Clayton Holdings (Covius Solutions)",
    role: "Data Analyst",
    location: "Clearwater, FL",
    dates: "March 2018 - June 2020",
    bullets: [
      "Gathered business and system requirements supporting the proprietary eCLAS mortgage underwriting platform for underwriting, compliance, and property valuation workflows.",
      "Developed SQL queries, views, stored procedures, and database objects while maintaining production data integrity and application stability.",
      "Managed SQL-based ETL workflows validating mortgage loan files, resolving data quality issues, and preparing reporting-ready datasets for enterprise reporting.",
      "Delivered operational reporting, production support, root cause analysis, and data validation across business-critical mortgage systems.",
    ],
  },
  {
    company: "Tech Data Corporation (TD SYNNEX)",
    role: "Strategic Account Representative",
    location: "Clearwater, FL",
    dates: "May 2015 - January 2018",
    bullets: [
      "Managed a portfolio of 120+ technology reseller accounts, serving as a trusted advisor while driving account growth and long-term customer relationships.",
      "Managed the complete sales lifecycle from requirements gathering and RFQ development through pricing analysis, solution design, quoting, order fulfillment, and account planning within SAP ERP.",
      "Consulted customers on technology solutions, pricing strategies, rebate programs, and vendor promotions while identifying cross-selling and upselling opportunities.",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#211d18]">
      <section className="border-b border-[#211d18]/15 px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-end">
          <div className="overflow-hidden rounded-md border border-[#211d18]/20 bg-[#211d18] shadow-2xl shadow-[#211d18]/15">
            <Image
              src="/headshot.jpg"
              alt="Kyle Sewell"
              width={900}
              height={1125}
              priority
              className="aspect-[4/5] w-full object-cover opacity-95 grayscale"
            />
          </div>

          <div className="pb-2">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#8a4f2f]">
              Senior Analyst
            </p>
            <h1 className="mt-5 max-w-4xl text-6xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
              Kyle Sewell
            </h1>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#595149]">
              {contact.map((item) => (
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition hover:text-[#8a4f2f]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span key={item.label}>{item.label}</span>
                )
              ))}
            </div>
            <p className="mt-8 max-w-4xl text-xl leading-9 text-[#3b352f]">
              Senior Analyst with 9+ years of experience leading enterprise
              business analysis, payment platform modernization, and cloud
              analytics initiatives across fintech, SaaS, financial services,
              and enterprise technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:kyleesewell@outlook.com"
                className="rounded-md bg-[#211d18] px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#f6f2ea] transition hover:bg-[#8a4f2f]"
              >
                Email
              </a>
              <a
                href="tel:9788702388"
                className="rounded-md border border-[#211d18]/30 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] transition hover:border-[#8a4f2f] hover:text-[#8a4f2f]"
              >
                Call
              </a>
              <a
                href="/KSewell_Resume_2026.docx"
                className="rounded-md border border-[#211d18]/30 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] transition hover:border-[#8a4f2f] hover:text-[#8a4f2f]"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#8a4f2f]">
              Professional Summary
            </p>
          </div>
          <p className="text-2xl font-semibold leading-10 text-[#211d18]">
            Proven record translating complex business requirements into
            scalable technical solutions while partnering with executive
            stakeholders, engineering teams, and cross-functional business
            leaders to deliver data-driven products, operational efficiencies,
            and strategic business insights.
          </p>
        </div>
      </section>

      <section className="border-y border-[#211d18]/15 bg-[#ded5c7] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="text-4xl font-black tracking-tight">
              Skills Overview
            </h2>
            <p className="max-w-xl text-sm font-semibold uppercase tracking-[0.18em] text-[#675f55]">
              Business analysis, payments, analytics, cloud data, and enterprise
              systems
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-md border border-[#211d18]/15 bg-[#f6f2ea] p-5"
              >
                <h3 className="text-lg font-black">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-[#211d18]/15 px-2.5 py-1 text-xs font-semibold text-[#4d463f]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black tracking-tight">
            Selected Career Achievements
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <article
                key={achievement}
                className="rounded-md border border-[#211d18]/15 p-6"
              >
                <span className="text-sm font-black uppercase tracking-[0.28em] text-[#8a4f2f]">
                  0{index + 1}
                </span>
                <p className="mt-5 text-lg font-semibold leading-8">
                  {achievement}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#211d18]/15 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black tracking-tight">
            Professional Experience
          </h2>
          <div className="mt-10 space-y-6">
            {experience.map((job) => (
              <article
                key={`${job.company}-${job.role}`}
                className="grid gap-6 rounded-md border border-[#211d18]/15 bg-[#fffaf1] p-6 lg:grid-cols-[0.38fr_1fr]"
              >
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8a4f2f]">
                    {job.company}
                  </p>
                  <h3 className="mt-3 text-2xl font-black">{job.role}</h3>
                  <p className="mt-3 font-semibold text-[#595149]">
                    {job.location}
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-[#70685f]">
                    {job.dates}
                  </p>
                </div>
                <ul className="space-y-3 text-base leading-7 text-[#3b352f]">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="grid grid-cols-[1rem_1fr] gap-3">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[#8a4f2f]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#211d18]/15 bg-[#211d18] px-5 py-14 text-[#f6f2ea] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#c99164]">
              Education
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              University of Tampa
            </h2>
          </div>
          <div className="text-lg font-semibold leading-8 text-[#e9dfcf]">
            <p>Bachelor of Science, Management Information Systems</p>
            <p className="text-[#bfb3a4]">September 2012 - June 2016</p>
          </div>
        </div>
      </section>
    </main>
  );
}
