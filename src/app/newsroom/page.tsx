import { PageLayout } from "@/components/layout/PageLayout";
import { Newsroom } from "@/components/sections/Newsroom";
import { Contact } from "@/components/sections/Contact";

export default function NewsroomPage() {
  return (
    <PageLayout>
      <Newsroom />
      <Contact />
    </PageLayout>
  );
}