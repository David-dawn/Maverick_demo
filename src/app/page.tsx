import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ExecutiveTeam } from "@/components/sections/ExecutiveTeam";
import { ProfessionalExperience } from "@/components/sections/ProfessionalExperience";
import { HydropowerProjects } from "@/components/sections/HydropowerProjects";
import { Newsroom } from "@/components/sections/Newsroom";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/Header";
import { getNewsroomNews } from "@/lib/getNewsroomNews";

export default async function Home() {
  const news = await getNewsroomNews();
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-secondary focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <ExecutiveTeam />
        <ProfessionalExperience />
        <HydropowerProjects />
        <Newsroom news={news.length > 0 ? news : undefined} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
