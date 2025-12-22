import { PageHeader } from "@/components/shared/page-header";
import { TagGenerator } from "@/components/ai/tag-generator";

export default function GenerateTagsPage() {
  return (
    <div>
      <PageHeader
        title="AI Portfolio Tag Generator"
        subtitle="Upload an image or video to automatically generate tags and a description."
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-2xl">
          <TagGenerator />
        </div>
      </section>
    </div>
  );
}
