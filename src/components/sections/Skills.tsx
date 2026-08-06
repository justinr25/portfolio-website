import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="mb-10 font-mono text-lg font-semibold text-[--text]">
        <span className="text-[--mauve]">04.</span> Skills
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 font-mono text-sm font-semibold text-[--lavender]">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[--surface] px-3 py-1 font-mono text-xs text-[--subtext] transition-colors hover:border-[--mauve] hover:text-[--text]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
