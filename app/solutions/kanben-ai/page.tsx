export default function KanbenAiPage() {
  return (
    <div className="bo-page" id="top">
      <main>
        <section className="bo-hero datastripes-hero">
          <div className="bo-container">
            <div className="bo-pill">Solutions · AI visual content</div>
            <h1>
              Kanben AI <span>Shooting Studio</span>
            </h1>
            <p className="bo-lead">
              Una finestra integrata verso Kanben AI per esplorare uno shooting studio AI dentro il percorso TeraBrain.
            </p>
            <div className="bo-actions">
              <a href="#embed">Apri embed</a>
              <a href="https://www.kanben.ai" target="_blank" rel="noreferrer">
                Apri Kanben AI in nuova scheda
              </a>
            </div>

            <div className="bo-agent-card datastripes-frame-card" id="embed">
              <div className="datastripes-frame-head">
                <div>
                  <p className="bo-kicker">Embedded website</p>
                  <h2>Kanben AI Shooting Studio</h2>
                </div>
                <a href="https://www.kanben.ai" target="_blank" rel="noreferrer">
                  Apri esterno
                </a>
              </div>
              <iframe
                className="datastripes-frame"
                src="https://www.kanben.ai"
                title="Kanben AI Shooting Studio"
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
