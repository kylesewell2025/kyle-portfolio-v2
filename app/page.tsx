import Image from "next/image";
import CompanySpotlight from "./CompanySpotlight";
import CoreExpertise from "./CoreExpertise";

const metrics = [
  { value: "7+", label: "years in analytics and BI" },
  { value: "5", label: "industries with reporting ownership" },
  { value: "30K+", label: "transactions and records validated" },
  { value: "12", label: "platforms across data and systems" },
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
              <a className="transition hover:text-[#2563EB]" href="#experience">
                Experience
              </a>
              <a className="transition hover:text-[#2563EB]" href="#expertise">
                Expertise
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

      <section id="experience" className="border-y border-[#E2E8F0] bg-[#F8FAFC] px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0EA5E9]">
                Experience
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Company spotlight
              </h2>
            </div>
            <p className="max-w-xl text-[#64748B]">
              A closer look at each role as a case study, covering the work,
              technologies, challenges, and results. Flip through company by
              company.
            </p>
          </div>

          <CompanySpotlight />
        </div>
      </section>

      <section id="expertise" className="border-y border-[#E2E8F0] bg-[#1E293B] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0EA5E9]">
            Core Expertise
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            The skills behind the reporting, models, and systems.
          </h2>
          <CoreExpertise />
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
