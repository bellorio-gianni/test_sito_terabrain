export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section className="home-hero">
      <div className="hero-content">
        <p className="eyebrow">AI process platform</p>
        <h1>TeraBrain</h1>
        <p>
          Progetta, governa e scala agenti AI per sales, operations e knowledge workflows.
        </p>
        <div className="hero-actions">
          <a href={`${basePath}/platform`}>Esplora la piattaforma</a>
          <a href={`${basePath}/use-cases/customer-service`}>Use case customer service</a>
        </div>
      </div>
    </section>
  );
}
