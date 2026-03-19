import { PageLayout } from "@/components/layout/PageLayout";
import { MajorProjectsGrid } from "@/components/sections/MajorProjectsGrid";
import { ProfessionalExperience } from "@/components/sections/ProfessionalExperience";
import { CaseStudyCarousel } from "@/components/sections/CaseStudyCarousel";

export default function ProjectsPage() {
  return (
    <PageLayout>
      <MajorProjectsGrid />
      <ProfessionalExperience />
      <CaseStudyCarousel />
    </PageLayout>
  );
}