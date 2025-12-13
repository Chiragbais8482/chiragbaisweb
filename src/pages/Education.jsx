// src/pages/Education.jsx (or Experience.jsx)
import { educationExperience } from "../data/educationExperience";

const Education = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Education & Certification
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Timeline of my academic background, certifications, and work
          experience.
        </p>

        <div className="space-y-6">
          {educationExperience.map((item) => (
            <section
              key={`${item.type}-${item.title}-${item.period}`}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    {item.type === "education"
                      ? "Education"
                      : item.type === "work"
                      ? "Work Experience"
                      : "Certification"}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {item.title}
                  </h2>
                  {item.subtitle && (
                    <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item.subtitle}
                    </p>
                  )}
                  {(item.meta || item.location) && (
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                      {item.meta}
                      {item.meta && item.location && " · "}
                      {item.location}
                    </p>
                  )}
                </div>
                {item.period && (
                  <p className="shrink-0 text-xs text-gray-500 dark:text-gray-400">
                    {item.period}
                  </p>
                )}
              </div>

              {item.description && (
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Education;
