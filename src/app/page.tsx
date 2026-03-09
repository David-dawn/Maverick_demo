import { PageLayout } from "@/components/layout/PageLayout";
import { VideoHero } from "@/components/sections/VideoHero";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { CoreExpertise } from "@/components/sections/CoreExpertise";
import { ProjectLifecycle } from "@/components/sections/ProjectLifecycle";
import { FeaturedHydropowerProjects } from "@/components/sections/FeaturedHydropowerProjects";
import { LatestNewsPreview } from "@/components/sections/LatestNewsPreview";
import { getNewsroomNews } from "@/lib/getNewsroomNews";

export default async function Home() {
  const news = await getNewsroomNews();
  return (
    <PageLayout>
      <VideoHero />
      <CompanyOverview />
      <CoreExpertise />
      <ProjectLifecycle />
      <FeaturedHydropowerProjects />
      <LatestNewsPreview news={news.length > 0 ? news : undefined} />
    </PageLayout>
  );
}
