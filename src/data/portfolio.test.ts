import { describe, it, expect } from "vitest";
import { profile, experiences, projects, skillGroups } from "./portfolio";

describe("portfolio data integrity", () => {
  describe("profile", () => {
    it("has required identity fields", () => {
      expect(profile.name).toBeTruthy();
      expect(profile.title).toBeTruthy();
      expect(profile.university).toBeTruthy();
      expect(profile.bio).toBeDefined();
      expect(profile.email).toContain("@");
    });

    it("has at least one social link", () => {
      expect(profile.socials.length).toBeGreaterThan(0);
      profile.socials.forEach((social) => {
        expect(social.label).toBeTruthy();
        expect(social.url).toMatch(/^https?:\/\//);
      });
    });
  });

  describe("experiences", () => {
    it("has at least one experience entry", () => {
      expect(experiences.length).toBeGreaterThan(0);
    });

    it("each experience has required fields", () => {
      experiences.forEach((exp) => {
        expect(exp.id).toBeTruthy();
        expect(exp.role).toBeTruthy();
        expect(exp.organization).toBeTruthy();
        expect(exp.dateRange).toBeTruthy();
        expect(exp.bullets).toBeDefined();
      });
    });

    it("each experience has unique IDs", () => {
      const ids = experiences.map((e) => e.id);
      expect(new Set(ids).size).toBe(ids.length);
    });
  });

  describe("projects", () => {
    it("has at least one project", () => {
      expect(projects.length).toBeGreaterThan(0);
    });

    it("each project has required fields", () => {
      projects.forEach((project) => {
        expect(project.id).toBeTruthy();
        expect(project.name).toBeTruthy();
        expect(project.description).toBeTruthy();
        expect(project.techStack.length).toBeGreaterThan(0);
      });
    });

    it("each project has unique IDs", () => {
      const ids = projects.map((p) => p.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it("project links are valid URLs when present", () => {
      projects.forEach((project) => {
        if (project.links.github) {
          expect(project.links.github).toMatch(/^https?:\/\//);
        }
        if (project.links.live) {
          expect(project.links.live).toMatch(/^https?:\/\//);
        }
        if (project.links.devpost) {
          expect(project.links.devpost).toMatch(/^https?:\/\//);
        }
      });
    });
  });

  describe("skillGroups", () => {
    it("has exactly 4 skill categories", () => {
      expect(skillGroups.length).toBe(4);
    });

    it("each group has a category name and at least one skill", () => {
      skillGroups.forEach((group) => {
        expect(group.category).toBeTruthy();
        expect(group.skills.length).toBeGreaterThan(0);
      });
    });
  });
});
