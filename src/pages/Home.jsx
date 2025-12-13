// src/pages/Home.jsx
import { Link } from "react-router-dom";

import { marqueeSkills } from "../data/skills";
import { projects } from "../data/projects";

const Home = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      {/* Hero / Intro */}
      <section className="mx-auto flex max-w-5xl flex-col items-start gap-10 md:flex-row md:items-center">
        {/* Left: intro */}
        <div className="flex-1">
          <p className="text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Data Analyst · Data Scientist
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            Hi, I&apos;m Chirag bais.
          </h1>
          <p className="mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400 sm:text-base">
            I transform raw data into clear, actionable insights using SQL,
            Python, Power BI, and machine learning. I enjoy building end‑to‑end
            analytics solutions that solve real business problems.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              View projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              Contact me
            </Link>
          </div>
        </div>

        {/* Right: quick about card */}
        <div className="w-full max-w-md flex-1">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              About me
            </h2>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Data professional with experience across analytics, dashboarding,
              and predictive modeling. Comfortable working end‑to‑end from data
              extraction to stakeholder presentations.
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-gray-500 dark:text-gray-400">Core tools</dt>
                <dd className="font-medium text-gray-900 dark:text-gray-100">
                  SQL, Python, Power BI, Excel
                </dd>
              </div>
              <div>
                <dt className="text-gray-500 dark:text-gray-400">
                  Focus areas
                </dt>
                <dd className="font-medium text-gray-900 dark:text-gray-100">
                  Dashboards, ML, automation
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Skills preview */}
      <section
        id="skills-preview"
        className="mx-auto mt-16 max-w-5xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
      >
        {/* Marquee */}
        <div className="relative mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-white/80 dark:border-gray-800 dark:bg-gray-900/80">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-gray-950 dark:via-gray-950/80" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-gray-950 dark:via-gray-950/80" />

          <div className="flex w-[200%] animate-marquee">
            {[...Array(2)].map((_, idx) => (
              <div
                key={idx}
                className="flex w-1/2 items-center justify-around gap-6 py-4 px-4 sm:gap-10 sm:py-5"
              >
                {marqueeSkills.map(({ label, icon: Icon }) => (
                  <div
                    key={label + idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200"
                  >
                    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <Link
            to="/skills"
            className="hidden shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 md:inline-flex"
          >
            View all skills
          </Link>
        </div>

        {/* mobile button */}
        <Link
          to="/skills"
          className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 md:hidden"
        >
          View all skills
        </Link>
      </section>

      {/* Projects preview */}
      <section id="projects-preview" className="mx-auto mt-16 max-w-5xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Featured projects
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              A selection of analytics and ML projects. See the full list on the
              projects page.
            </p>
          </div>
          <Link
            to="/projects"
            className="hidden shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 md:inline-flex"
          >
            View all projects
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          

          {projects.map((project) => {
            return (
              <>
                <Link
                  to="/projects"
                  className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                >
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <p className="mt-3 text-xs font-medium text-blue-600 dark:text-blue-400">
                    View details →
                  </p>
                </Link>
              </>
            );
          })}


          
        </div>

        {/* mobile button */}
        <Link
          to="/projects"
          className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 md:hidden"
        >
          View all projects
        </Link>
      </section>

      {/* Final call-to-action */}
      <section className="mx-auto mt-16 max-w-5xl text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Interested in working together?
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Whether you need dashboards, ad‑hoc analysis, or end‑to‑end ML
          solutions, let&apos;s talk about how data can help your team.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          Contact me
        </Link>
      </section>
    </main>
  );
};

export default Home;
