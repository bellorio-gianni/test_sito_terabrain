export default function DailyNewsPage() {
  return (
    <div className="bo-page" id="top">
      <main>
        <section className="bo-hero datastripes-hero">
          <div className="bo-container">
            <div className="bo-pill">Solutions · News intelligence</div>
            <h1>
              Daily <span>News</span>
            </h1>
            <p className="bo-lead">
              Una finestra integrata verso TeraBrain News Daily, con lo stesso layout e contenuto della pagina sorgente.
            </p>
            <div className="bo-actions">
              <a href="#embed">Apri embed</a>
              <a
                href="https://www.bellorio.org/wp-content/uploads/tb_news/News_Daily/tb_news_daily.html"
                target="_blank"
                rel="noreferrer"
              >
                Apri Daily News in nuova scheda
              </a>
            </div>

            <div className="bo-agent-card datastripes-frame-card" id="embed">
              <div className="datastripes-frame-head">
                <div>
                  <p className="bo-kicker">Embedded website</p>
                  <h2>Daily News</h2>
                </div>
                <a
                  href="https://www.bellorio.org/wp-content/uploads/tb_news/News_Daily/tb_news_daily.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apri esterno
                </a>
              </div>
              <iframe
                className="datastripes-frame"
                src="https://www.bellorio.org/wp-content/uploads/tb_news/News_Daily/tb_news_daily.html"
                title="Daily News"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
              <p className="datastripes-frame-note">
                Se il sito esterno impedisce l'incorporamento per policy di sicurezza, usa il pulsante per aprirlo in
                una nuova scheda.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
