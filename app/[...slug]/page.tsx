import menuItems from "@/content/menu.json";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

type MenuLink = {
  label: string;
  url: string;
};

type MenuItem = MenuLink & {
  links?: MenuLink[];
  columns?: Array<{
    title: string;
    links: MenuLink[];
  }>;
};

function collectMenuUrls() {
  const urls = new Set<string>();

  (menuItems as MenuItem[]).forEach((item) => {
    if (item.url) {
      urls.add(item.url);
    }

    item.links?.forEach((link) => urls.add(link.url));
    item.columns?.forEach((column) => column.links.forEach((link) => urls.add(link.url)));
  });

  return Array.from(urls);
}

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

export function generateStaticParams() {
  return collectMenuUrls()
    .filter((url) => url !== "/")
    .filter((url) => url !== "/platform")
    .filter((url) => url !== "/solutions/datastripes")
    .filter((url) => !url.startsWith("/use-cases/"))
    .filter((url) => !url.includes("#"))
    .filter((url) => !url.endsWith(".html"))
    .map((url) => ({
      slug: url.split("/").filter(Boolean)
    }));
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
