export default function BraineroPage() {
  return (
    <div className="bo-page" id="top">
      <main>
        <section className="bo-hero datastripes-hero">
          <div className="bo-container">
            <div className="bo-pill">Solutions · AI agents marketplace</div>
            <h1>
              Brainero <span>AI Agents Marketplace</span>
            </h1>
            <p className="bo-lead">
              Una finestra integrata verso Brainero per esplorare marketplace, agenti AI e soluzioni operative collegate
              all'ecosistema TeraBrain.
            </p>
            <div className="bo-actions">
              <a href="#embed">Apri embed</a>
              <a href="https://www.bellorio.org/tb_brainero/" target="_blank" rel="noreferrer">
                Apri Brainero in nuova scheda
              </a>
            </div>

            <div className="bo-agent-card datastripes-frame-card" id="embed">
              <div className="datastripes-frame-head">
                <div>
                  <p className="bo-kicker">Embedded website</p>
                  <h2>Brainero - AI Agents Marketplace</h2>
                </div>
                <a href="https://www.bellorio.org/tb_brainero/" target="_blank" rel="noreferrer">
                  Apri esterno
                </a>
              </div>
              <iframe
                className="datastripes-frame"
                src="https://www.bellorio.org/tb_brainero/"
                title="Brainero - AI Agents Marketplace"
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
