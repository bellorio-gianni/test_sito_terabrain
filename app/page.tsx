const integrations = [
  {
    title: "SuiteCRM",
    status: "Integrato",
    body:
      "Fai aggiungere e leggere informazioni sul CRM dai tuoi agenti, crea preventivi, allega file e attiva gli agenti direttamente dal flusso di lavoro standard di SuiteCRM."
  },
  {
    title: "VTigerCRM",
    status: "In arrivo",
    body: "Connetti processi, dati cliente e automazioni commerciali in un ambiente operativo pensato per team sales e service."
  },
  {
    title: "DayLite CRM",
    status: "In arrivo",
    body: "Porta gli agenti AI dentro attivita, contatti, opportunita e follow-up del tuo CRM operativo quotidiano."
  }
];

const communication = [
  {
    title: "Telegram",
    body:
      "Il tuo agente puo essere contattato tramite Telegram e puo ricevere messaggi vocali, per eseguire comandi in modo istantaneo e a mani libere."
  },
  {
    title: "Email",
    body:
      "Chiedi a un agente di inviare email a terzi, monitorare la posta in arrivo e intraprendere azioni come aggiornare record CRM o inoltrare messaggi importanti."
  }
];

const systems = [
  {
    title: "Office 365",
    body:
      "L'agente puo accedere al calendario, programmare riunioni e lavorare con file OneDrive o SharePoint per automatizzare attivita, promemoria e condivisione documentale."
  },
  {
    title: "Google",
    body:
      "Accedi a calendario e file Google Drive. Gli agenti AI assisteranno organizzazione dei documenti, pianificazione e collaborazione."
  }
];

const frameworks = ["OpenAI", "Anthropic", "Google", "Microsoft", "SuiteCRM", "Telegram", "Office 365", "Google Workspace", "Custom API"];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <>
      <section className="tb-hero">
        <div className="tb-hero-inner">
          <p className="eyebrow">TeraBrain</p>
          <h1>AI Agents per potenziare il tuo Business</h1>
          <p>
            Be more productive with our AI-powered automation platform. Automate your flows and processes with ease.
            Integrations across CRMs, Email, Calendar, File Sharing Platforms, and more.
          </p>
          <div className="tb-actions">
            <a href={`${basePath}/contatti`}>Contact</a>
            <a href="https://app.terabrain.ai">Get started</a>
          </div>
        </div>
      </section>

      <section className="tb-section">
        <div className="tb-section-heading">
          <p className="eyebrow dark">L'IA al fianco dei tuoi dipendenti</p>
          <h2>Crea agenti IA in grado di automatizzare flussi di lavoro e processi.</h2>
        </div>
        <div className="tb-feature-grid">
          <article>
            <span>01</span>
            <h3>Perfettamente integrato</h3>
            <p>TeraBrain ti consente di costruire agenti basati su bisogni e competenze specifiche.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Completamente versatile</h3>
            <p>TeraBrain e pienamente operativo e funziona in qualsiasi situazione.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Personalizzabile</h3>
            <p>I tuoi agenti saranno completamente personalizzabili e potranno essere adattati alle tue esigenze.</p>
          </article>
        </div>
      </section>

      <section className="tb-band">
        <div className="tb-section-heading">
          <p className="eyebrow dark">Usa le tue integrazioni preferite</p>
          <h2>La nostra Agents Force si integra con le tue app preferite, creando un'esperienza fluida.</h2>
        </div>

        <div className="tb-split">
          <div>
            <p className="tb-kicker">Agenti che lavorano con i tuoi sistemi</p>
            <h3>Collega il tuo CRM al tuo flusso di lavoro.</h3>
            <p>Ottieni il meglio dal CRM integrato nei tuoi processi e lascia agli agenti le azioni ripetitive.</p>
          </div>
          <div className="tb-list">
            {integrations.map((item) => (
              <article key={item.title}>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                <span>{item.status}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tb-section compact">
        <div className="tb-split">
          <div>
            <p className="tb-kicker">Agenti in grado di comunicare</p>
            <h3>Lascia che i tuoi agenti parlino con te.</h3>
            <p>Collega il tuo flusso di lavoro ai tuoi strumenti di comunicazione preferiti.</p>
          </div>
          <div className="tb-list two">
            {communication.map((item) => (
              <article key={item.title}>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tb-band compact">
        <div className="tb-split">
          <div>
            <p className="tb-kicker">Connettiti perfettamente ai tuoi sistemi</p>
            <h3>Calendar, file sharing e collaborazione entrano nel processo.</h3>
            <p>Automatizza attivita operative, promemoria, accesso ai file e collaborazione tra team.</p>
          </div>
          <div className="tb-list two">
            {systems.map((item) => (
              <article key={item.title}>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tb-section">
        <div className="tb-section-heading">
          <p className="eyebrow dark">Framework Supportati</p>
          <h2>La nostra Agents Army e costruita per soddisfare le tue esigenze.</h2>
          <p>Integra agenti, CRM, comunicazione e sistemi documentali in una piattaforma operativa unica.</p>
        </div>
        <div className="tb-logo-grid" aria-label="Framework e integrazioni supportate">
          {frameworks.map((framework) => (
            <span key={framework}>{framework}</span>
          ))}
        </div>
      </section>

      <section className="tb-cta">
        <div>
          <p className="eyebrow">Hai ancora dei dubbi?</p>
          <h2>Make your ideas come to life with no time</h2>
          <p>
            Let's start together and make your ideas come to life with our AI-powered automation platform. Automate your
            flows and processes with ease.
          </p>
        </div>
        <div className="tb-actions">
          <a href="https://outlook.office.com">Book a demo</a>
          <a href={`${basePath}/contatti`}>Mail us</a>
        </div>
      </section>

      <footer className="tb-footer">
        <div>
          <h2>TeraBrain</h2>
          <p>We are in a mission to make the world a better place by providing the best AI automation platform.</p>
        </div>
        <div>
          <h3>Resources</h3>
          <a href="https://outlook.office.com">Demo</a>
          <a href={`${basePath}/guides`}>License</a>
          <a href={`${basePath}/privacy-policy`}>Privacy Policy</a>
          <a href="https://app.terabrain.ai">App</a>
        </div>
        <div>
          <h3>TeraBrain</h3>
          <p>Linegon SRL</p>
          <p>VAT ID: 05114530230</p>
          <p>Via Adriano Garbinin 15, Verona (VR), Italy</p>
        </div>
        <p className="tb-copyright">© 2026 TeraBrain. All rights reserved.</p>
      </footer>
    </>
  );
}
