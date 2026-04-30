type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

const labels: Record<string, string> = {
  platform: "Platform",
  "use-cases": "Use Cases",
  solutions: "Solutions",
  resources: "Resources",
  blog: "Blog",
  "case-studies": "Case Studies",
  guides: "Guides",
  contatti: "Contatti"
};

function titleFromSlug(slug: string[]) {
  return slug
    .map((part) => labels[part] ?? part.replaceAll("-", " "))
    .join(" / ");
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const title = titleFromSlug(slug);

  return (
    <section className="content-page">
      <p className="eyebrow dark">TeraBrain</p>
      <h1>{title}</h1>
      <p>Questa pagina e pronta per ricevere contenuti, sezioni e call to action specifiche.</p>
    </section>
  );
}
