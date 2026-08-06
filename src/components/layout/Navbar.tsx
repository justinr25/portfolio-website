"use client";

import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Navbar() {
  const activeSection = useActiveSection();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-surface/60 bg-crust/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#about"
          className="font-mono text-sm font-semibold text-text transition-colors hover:text-mauve"
        >
          jr.
        </a>

        <ul className="flex items-center gap-6">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-mono text-xs transition-colors ${
                    isActive
                      ? "text-mauve"
                      : "text-subtext hover:text-text"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
