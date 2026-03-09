import { PageLayout } from "@/components/layout/PageLayout";
import { AboutHero } from "@/components/about/AboutHero";
import { About } from "@/components/sections/About";
import { ExecutiveTeam } from "@/components/sections/ExecutiveTeam";
import { ExperienceStatistics } from "@/components/sections/ExperienceStatistics";

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutHero />
      <About />
      <ExecutiveTeam />
      <ExperienceStatistics />
    </PageLayout>
  );
}
