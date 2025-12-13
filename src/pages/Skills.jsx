import { skillSections } from "../data/skills";
import { marqueeSkills } from "../data/skills";
const Skills = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Skills
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
          Core analytics stack around SQL, Python, Power BI, and Excel, extended
          with AI/ML, automation, and modern software practices.
        </p>

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

        {/* Skill cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillSections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {section.title}
              </h2>
              <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                {section.skills.map((skill) => (
                  <li key={skill} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
