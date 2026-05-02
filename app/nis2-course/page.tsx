const modules = [
  {
    badge: "Modulo 1",
    meta: "60-75 min · Executive overview",
    theme: "theme-orange",
    title: "NIS2 vista dal board",
    summary:
      "Il primo modulo chiarisce perché la NIS2 sale al livello del vertice aziendale. Spiega la differenza tra compliance documentale e governance effettiva, mette a fuoco ruoli e responsabilità di CEO, CdA, CISO, IT, legale, procurement e internal audit, e introduce la logica di vigilanza, ispezione e sanzioni in chiave manageriale.",
    bullets: [
      "Spiega perché il vertice non può trattare la NIS2 come un tema solo tecnico.",
      "Distingue responsabilità di governo da responsabilità operative.",
      "Introduce il tema soggetti essenziali e soggetti importanti con lettura board-ready."
    ],
    objective:
      "Far comprendere al board il proprio ruolo nella supervisione, nell'indirizzo e nella dimostrabilità dell'assetto di sicurezza e compliance.",
    focus: "Governance, responsabilità del vertice, vigilanza, sanzioni e distinzione tra soggetti essenziali e importanti.",
    action: "Apri il Modulo 1"
  },
  {
    badge: "Modulo 2",
    meta: "75-90 min · Perimetro NIS2",
    theme: "theme-cyan",
    title: "L'azienda è dentro o fuori dal perimetro?",
    summary:
      "Questo è il modulo chiave per il board. Il messaggio centrale è che non conta solo la dimensione: contano settore, tipologia di soggetto, collegamenti societari ed eventuali casi di inclusione indipendente dalla dimensione. Il modulo traduce la lettura normativa in una matrice semplice a cinque step utilizzabile dal vertice.",
    bullets: [
      "Aiuta a classificare l'azienda tra fuori perimetro, soggetto importante o soggetto essenziale.",
      "Spiega il peso di allegati, soglie dimensionali e casi speciali.",
      "Offre una matrice pratica per capire quali adempimenti si attivano e chi nel board deve presidiarli."
    ],
    objective: "Dare al board uno schema semplice ma rigoroso per valutare la probabile collocazione dell'azienda nel perimetro NIS2.",
    focus: "Settore, dimensione, gruppi societari, inclusioni speciali, allegati I e II, essenziali vs importanti.",
    action: "Apri il Modulo 2"
  },
  {
    badge: "Modulo 3",
    meta: "90 min · Evidenze di governo",
    theme: "theme-violet",
    title: "Cosa deve controllare il CdA",
    summary:
      "Il terzo modulo traduce le misure richieste dalla NIS2 in linguaggio da board. Non parla di firewall o tool, ma di modello di rischio approvato, ownership chiara, processo di incident reporting, visibilità sui fornitori critici, continuità operativa testata e capacità di dimostrare le decisioni assunte dal vertice.",
    bullets: [
      "Trasforma l'articolo 24 in domande concrete per il management.",
      "Aiuta il CdA a capire quali evidenze chiedere e come leggerle.",
      "Conduce a una board checklist finale da usare come strumento di controllo."
    ],
    objective: "Consentire al CdA di verificare se l'azienda ha davvero presidi adeguati e proporzionati, e non solo dichiarazioni formali.",
    focus: "Risk model, owner NIS2, incident reporting, supply chain, business continuity, evidenze e verbalizzazioni.",
    action: "Apri il Modulo 3"
  },
  {
    badge: "Modulo 4",
    meta: "60 min · Adempimenti operativi",
    theme: "theme-green",
    title: "Notifiche, tempi, reporting e prova di adempienza",
    summary:
      "Questo modulo spiega il meccanismo operativo senza entrare nel tecnicismo. Il focus è su registrazione e aggiornamento sulla piattaforma ACN, obblighi degli organi di amministrazione e direttivi, misure di gestione del rischio, notifiche di incidente, reporting verso il vertice e costruzione del fascicolo delle evidenze.",
    bullets: [
      "Chiarisce calendario e scadenze di registrazione e aggiornamento.",
      "Mostra come strutturare un reporting credibile verso CEO e CdA.",
      "Spiega come costruire la prova di adempienza da esibire in caso di controllo o incidente."
    ],
    objective: "Far comprendere al vertice quali sono i flussi minimi da presidiare, con quali tempi e con quali evidenze documentali.",
    focus: "ACN, portale, notifiche, tempi, reporting, referente CSIRT, fascicolo di adempienza.",
    action: "Apri il Modulo 4"
  },
  {
    badge: "Modulo 5",
    meta: "60-90 min · Workshop finale",
    theme: "theme-rose",
    title: "Workshop finale per il board",
    summary:
      "L'ultimo modulo applica il corso a tre profili aziendali concreti: azienda media manifatturiera, grande azienda multisede e fornitore ICT o digitale. Per ciascun caso il board lavora su classificazione probabile, livello di esposizione, decisioni da assumere e reporting trimestrale minimo da richiedere al CISO.",
    bullets: [
      "Mostra come cambia la lettura NIS2 tra micro/piccole, medie e grandi imprese.",
      "Aiuta a tradurre la teoria in decisioni concrete di governance.",
      "Conclude il percorso con un taglio pratico, orientato al confronto in aula e al board work."
    ],
    objective:
      "Verificare se il board è in grado di leggere casi reali, classificare il rischio e impostare un presidio coerente con la dimensione e il settore aziendale.",
    focus: "Casi pratici, classificazione, esposizione, decisioni del CdA, reporting trimestrale al CISO.",
    action: "Apri il Modulo 5"
  }
];

export default function Nis2CoursePage() {
  return (
    <div className="course-page">
      <header className="course-topbar">
        <div className="course-topbar-inner">
          <div className="course-brand">
            <div className="course-brand-dot" />
            <strong>NIS2 COURSE</strong>
            <span>Home del percorso formativo e accesso ai moduli HTML</span>
          </div>
          <a className="course-voice-cta" href="tel:0459812721">
            Chiama 0459812721 · Federico Virtual Tutor
          </a>
        </div>
      </header>

      <section className="course-hero">
        <div className="course-hero-grid">
          <div className="course-hero-main">
            <div className="course-kicker">Percorso executive per CEO, CdA, CISO e management</div>
            <h1>NIS2 per il board</h1>
            <p className="course-lead">
              Un corso pensato per aiutare il vertice aziendale a leggere la NIS2 non come materia tecnica da delegare interamente all'IT,
              ma come tema di governo, responsabilità, controllo di adempienza e dimostrabilità delle decisioni. Il percorso accompagna il
              board dal quadro normativo fino alla verifica concreta dei presidi, delle notifiche, del reporting e dei casi pratici di
              classificazione.
            </p>
          </div>
          <div className="course-hero-side">
            <div className="course-side-box">
              <h3>Obiettivo del corso</h3>
              <p>
                Fornire a CEO, CdA e CISO una chiave di lettura chiara e manageriale della NIS2, con particolare attenzione a responsabilità
                del vertice, perimetro di applicazione, controlli richiesti, evidenze di governo e reporting periodico.
              </p>
            </div>
            <div className="course-stats">
              <div className="course-stat">
                <strong>5</strong>
                <span>Moduli principali</span>
              </div>
              <div className="course-stat">
                <strong>140+</strong>
                <span>Slide HTML</span>
              </div>
              <div className="course-stat">
                <strong>6h+</strong>
                <span>Taglio executive</span>
              </div>
            </div>
            <div className="course-side-box">
              <h3>Impostazione didattica</h3>
              <p>
                Ogni modulo è costruito in chiave board-ready: poco tecnicismo, molta chiarezza su ruoli, evidenze, decisioni, rischio,
                obblighi e verifiche che il vertice deve pretendere dall'organizzazione.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="course-info">
        <div className="course-goal-box">
          <h2>Obiettivo generale del percorso</h2>
          <p>
            Il corso aiuta il vertice a trasformare la NIS2 in un modello di controllo concreto. Si parte dal significato della direttiva per
            organi di amministrazione e direttivi, si passa poi alla verifica del perimetro aziendale, si entra nel merito delle misure che il
            CdA deve controllare, si affrontano notifiche e prova di adempienza e si conclude con un workshop finale fondato su casi realistici.
            Il risultato atteso non è una conoscenza tecnica della cybersecurity, ma una capacità di governo, indirizzo e supervisione sostanziale.
          </p>
        </div>
        <div className="course-notice-box">
          <h2>Target del corso</h2>
          <p>
            Il percorso è pensato per CEO, componenti del Consiglio di Amministrazione, direzione generale, CISO, internal audit, legal,
            compliance e figure di coordinamento che devono supportare il board nella lettura della NIS2.
          </p>
          <p>
            Il linguaggio è volutamente executive: l'attenzione non è sui firewall o sui tool, ma sulle evidenze di governo, sulle matrici
            decisionali, sulle responsabilità e sulla capacità di dimostrare che il vertice ha esercitato un controllo adeguato.
          </p>
        </div>
      </section>

      <section className="course-info course-info-compact">
        <div className="course-path-box">
          <h2>Struttura del percorso</h2>
          <p>
            Il programma si sviluppa in cinque moduli. Il Modulo 1 introduce la NIS2 vista dal board, chiarendo perché il tema riguarda
            direttamente il vertice e come cambiano responsabilità, vigilanza e sanzioni. Il Modulo 2 spiega come capire se l'azienda rientra
            o meno nel perimetro, usando una matrice semplice basata su settore, dimensione e casi di inclusione speciale. Il Modulo 3 traduce
            le misure richieste in domande di governo che il CdA deve porre al management. Il Modulo 4 affronta notifiche, tempi, reporting e
            costruzione della prova di adempienza. Il Modulo 5 chiude il percorso con un workshop finale basato su tre profili aziendali tipici
            e sui principali output decisionali richiesti al board.
          </p>
        </div>
      </section>

      <section className="course-lessons">
        <div className="course-lessons-head">
          <h2>Panoramica dei moduli</h2>
          <p>Ogni scheda riassume contenuto, focus e obiettivo del modulo. I pulsanti aprono la popup di login per accedere al dettaglio delle lezioni.</p>
        </div>

        <div className="course-lesson-grid">
          {modules.map((module) => (
            <article className={`course-lesson-card ${module.theme}`} key={module.title}>
              <div className="course-lesson-top">
                <span className="course-badge">{module.badge}</span>
                <span className="course-meta">{module.meta}</span>
              </div>
              <h3>{module.title}</h3>
              <div className="course-lesson-summary">{module.summary}</div>
              <ul className="course-lesson-bullets">
                {module.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="course-mini-panels">
                <div className="course-mini">
                  <h4>Obiettivo</h4>
                  <p>{module.objective}</p>
                </div>
                <div className="course-mini">
                  <h4>Focus</h4>
                  <p>{module.focus}</p>
                </div>
              </div>
              <div className="course-actions">
                <button className="course-lesson-link" data-open-login type="button">
                  {module.action}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="course-footer">Home page del corso NIS2 · panoramica completa dei moduli, obiettivi formativi e accesso riservato ai file HTML.</div>
    </div>
  );
}
