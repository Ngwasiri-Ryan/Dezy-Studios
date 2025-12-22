import { PageHeader } from "@/components/shared/page-header";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { portfolio } from "@/lib/data";

export default function PortfolioPage() {
  return (
    <div>
      <PageHeader
        title="My Portfolio"
        subtitle="A curated collection of my work across different creative fields."
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <PortfolioGrid projects={portfolio} />
        </div>
      </section>
    </div>
  );
}
