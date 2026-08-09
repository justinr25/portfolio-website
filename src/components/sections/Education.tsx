import { education } from "@/data/portfolio";

export function Education() {
    return (
        <section id="education" className="py-20">
            <h2 className="mb-10 font-mono text-lg font-semibold text-text">
                Education
            </h2>

            <div className="space-y-6">
                {education.map((edu) => (
                    <div
                        key={edu.id}
                        className="flex flex-col gap-2 rounded-lg border border-surface bg-base p-6 transition-colors hover:border-overlay"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="font-semibold text-text">
                                {edu.school}
                            </h3>
                            <span className="font-mono text-xs text-overlay">
                                {edu.dateRange}
                            </span>
                        </div>

                        {edu.degree && (
                            <p className="text-sm text-mauve">{edu.degree}</p>
                        )}

                        {edu.coursework && edu.coursework.length > 0 && (
                            <div className="mt-2">
                                <p className="mb-2 text-xs font-medium text-subtext uppercase tracking-wider">
                                    Coursework
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {edu.coursework.map((course) => (
                                        <span
                                            key={course}
                                            className="rounded-full bg-surface px-3 py-1 text-xs text-subtext transition-colors hover:text-text"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
