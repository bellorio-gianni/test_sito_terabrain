export default function DataStripesPage() {
  return (
    <div className="bo-page" id="top">
      <main>
        <section className="bo-hero datastripes-hero">
          <div className="bo-container">
            <div className="bo-pill">Solutions · Data intelligence</div>
            <h1>
              DataStripes <span>Insight dai tuoi dati</span>
            </h1>
            <p className="bo-lead">
              Una finestra integrata verso DataStripes per esplorare insight, dati e strumenti di analisi dentro il
              percorso TeraBrain.
            </p>
            <div className="bo-actions">
              <a href="#embed">Apri embed</a>
              <a href="https://datastripes.com" target="_blank" rel="noreferrer">
                Apri DataStripes in nuova scheda
              </a>
            </div>

            <div className="bo-agent-card datastripes-frame-card" id="embed">
              <div className="datastripes-frame-head">
                <div>
                  <p className="bo-kicker">Embedded website</p>
                  <h2>DataStripes Insight dai tuoi dati</h2>
                </div>
                <a href="https://datastripes.com" target="_blank" rel="noreferrer">
                  Apri esterno
                </a>
              </div>
              <iframe
                className="datastripes-frame"
                src="https://datastripes.com"
                title="DataStripes Insight dai tuoi dati"
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
