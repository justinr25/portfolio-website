import { Mail, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="about"
      className="flex min-h-[85vh] flex-col justify-center py-20"
    >
      <p className="mb-3 font-mono text-sm text-[--mauve]">Hi, my name is</p>

      <h1 className="mb-2 text-4xl font-bold tracking-tight text-[--text] sm:text-5xl">
        {profile.name}
      </h1>

      <h2 className="mb-6 text-2xl font-semibold text-[--subtext] sm:text-3xl">
        {profile.title}
      </h2>

      <p className="mb-4 max-w-xl text-[--subtext] leading-relaxed">
        {profile.bio}
      </p>

      <p className="mb-8 font-mono text-sm text-[--overlay]">
        {profile.university} · {profile.degree}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={profile.socials.find((s) => s.icon === "github")?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-[--surface] px-4 py-2 font-mono text-sm text-[--text] transition-colors hover:border-[--mauve] hover:text-[--mauve]"
        >
          <GitHubIcon size={16} />
          GitHub
        </a>

        <a
          href={profile.socials.find((s) => s.icon === "linkedin")?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-[--surface] px-4 py-2 font-mono text-sm text-[--text] transition-colors hover:border-[--mauve] hover:text-[--mauve]"
        >
          <LinkedInIcon size={16} />
          LinkedIn
        </a>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md border border-[--surface] px-4 py-2 font-mono text-sm text-[--text] transition-colors hover:border-[--mauve] hover:text-[--mauve]"
        >
          <Mail size={16} />
          Email
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-[--mauve] px-4 py-2 font-mono text-sm text-[--crust] transition-opacity hover:opacity-90"
        >
          <FileText size={16} />
          Resume
        </a>
      </div>
    </section>
  );
}
