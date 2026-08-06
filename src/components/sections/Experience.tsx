import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="mb-10 font-mono text-lg font-semibold text-text">
        Experience
      </h2>

      <div className="space-y-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="group grid gap-4 sm:grid-cols-[180px_1fr]">
            <div className="flex flex-col">
              <span className="font-mono text-xs text-overlay">
                {exp.dateRange}
              </span>
              <span className="font-mono text-xs text-overlay">
                {exp.location}
              </span>
            </div>

            <div>
              <h3 className="font-semibold text-text">{exp.role}</h3>
              <p className="mb-3 text-sm text-mauve">{exp.organization}</p>

              <ul className="space-y-2">
                {exp.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="relative pl-4 text-sm leading-relaxed text-subtext before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-overlay"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
