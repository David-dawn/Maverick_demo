import { PageLayout } from "@/components/layout/PageLayout";
import { VideoHero } from "@/components/sections/VideoHero";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { CoreExpertise } from "@/components/sections/CoreExpertise";
import { ProjectLifecycle } from "@/components/sections/ProjectLifecycle";
import { LatestNewsPreview } from "@/components/sections/LatestNewsPreview";

export default function Home() {
  return (
    <PageLayout>
      <VideoHero />
      <CompanyOverview />
      <CoreExpertise />
      <ProjectLifecycle />
      {/* <FeaturedHydropowerProjects /> */}
      <LatestNewsPreview />
    </PageLayout>
  );
}
