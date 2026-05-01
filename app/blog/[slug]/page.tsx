import { notFound } from "next/navigation";
import { blogArticles, getArticleBySlug, type BlogContentBlock } from "../articles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function assetHref(src: string) {
  return src.startsWith("/") ? `${basePath}${src}` : src;
}

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug
  }));
}

function renderBlock(block: BlogContentBlock) {
  if (block.type === "heading") {
    return <h2 key={block.text}>{block.text}</h2>;
  }

  if (block.type === "quote") {
    return <blockquote key={block.text}>{block.text}</blockquote>;
  }

  if (block.type === "list") {
    return (
      <ul key={block.items.join("|")}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p key={block.text}>{block.text}</p>;
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="blog-article-page">
      <header className="blog-article-hero">
        <a className="blog-back-link" href={`${basePath}/blog/`}>
          ← Torna al Blog
        </a>
        <div className="blog-meta">
          <span>{article.category}</span>
          <span>{article.date}</span>
          <span>{article.author}</span>
        </div>
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>
        <img src={assetHref(article.image)} alt={article.imageAlt} />
      </header>

      <div className="blog-article-body">{article.content.map(renderBlock)}</div>

      <footer className="blog-article-footer">
        {article.sourceUrl ? (
          <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
            Apri articolo originale su LinkedIn
          </a>
        ) : null}
      </footer>
    </article>
  );
}
