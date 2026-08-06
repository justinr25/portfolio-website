import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

// Mock lucide-react icons
vi.mock("lucide-react", () => ({
  Mail: (props: Record<string, unknown>) => <svg data-testid="mail-icon" {...props} />,
  FileText: (props: Record<string, unknown>) => <svg data-testid="filetext-icon" {...props} />,
}));

// Mock custom brand icons
vi.mock("@/components/icons/BrandIcons", () => ({
  GitHubIcon: (props: Record<string, unknown>) => <svg data-testid="github-icon" {...props} />,
  LinkedInIcon: (props: Record<string, unknown>) => <svg data-testid="linkedin-icon" {...props} />,
}));

describe("Hero section", () => {
  it("renders the profile name", () => {
    render(<Hero />);
    expect(screen.getByText("Justin Rosales")).toBeInTheDocument();
  });

  it("renders the title", () => {
    render(<Hero />);
    expect(screen.getByText("CS Student & Developer")).toBeInTheDocument();
  });

  it("renders social link buttons", () => {
    render(<Hero />);
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders the resume download button", () => {
    render(<Hero />);
    expect(screen.getByText("Resume")).toBeInTheDocument();
  });

  it("resume link points to /resume.pdf", () => {
    render(<Hero />);
    const resumeLink = screen.getByText("Resume").closest("a");
    expect(resumeLink).toHaveAttribute("href", "/resume.pdf");
  });
});
