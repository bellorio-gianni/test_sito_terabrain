import { blogArticles } from "./articles";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function assetHref(src: string) {
  return src.startsWith("/") ? `${basePath}${src}` : src;
}

export default function BlogPage() {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <p className="bo-pill">Resources · Blog</p>
        <h1>Blog TeraBrain</h1>
        <p>
          Articoli, analisi e approfondimenti su AI Agents, automazione operativa, voice bot e piattaforme agentiche.
        </p>
      </section>

      <section className="blog-list" aria-label="Lista articoli blog">
        {blogArticles.map((article) => (
          <article className="blog-card" key={article.slug}>
            <a href={`${basePath}/blog/${article.slug}/`} aria-label={`Apri articolo: ${article.title}`}>
              <img src={assetHref(article.image)} alt={article.imageAlt} />
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <span className="blog-read-more">Leggi articolo</span>
              </div>
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
