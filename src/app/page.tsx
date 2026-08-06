import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pt-20">
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
