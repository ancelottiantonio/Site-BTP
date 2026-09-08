// src/app/page.tsx
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { DirectorMessage } from "@/components/sections/DirectorMessage";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <Services />
        <About />
        <DirectorMessage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}