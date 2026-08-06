import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="mb-10 font-mono text-lg font-semibold text-[--text]">
        <span className="text-[--mauve]">05.</span> Contact
      </h2>

      <div className="max-w-md">
        <p className="mb-6 leading-relaxed text-[--subtext]">
          I&apos;m always open to new opportunities, collaborations, or just
          chatting about interesting engineering problems. Feel free to reach out.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-[--mauve] px-4 py-2 font-mono text-sm text-[--crust] transition-opacity hover:opacity-90"
          >
            <Mail size={16} />
            Say Hello
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
        </div>
      </div>
    </section>
  );
}
