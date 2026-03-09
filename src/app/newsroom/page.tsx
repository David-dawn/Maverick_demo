import { PageLayout } from "@/components/layout/PageLayout";
import { Newsroom } from "@/components/sections/Newsroom";
import { Contact } from "@/components/sections/Contact";
import { getNewsroomNews } from "@/lib/getNewsroomNews";

export default async function NewsroomPage() {
  const news = await getNewsroomNews();
  return (
    <PageLayout>
      <Newsroom news={news.length > 0 ? news : undefined} />
      <Contact />
    </PageLayout>
  );
}
