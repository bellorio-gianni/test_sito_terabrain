const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const overviewCards = [
  {
    number: "01 · Piattaforma",
    title: "Agentic AI Platform",
    body:
      "Architettura serverless su AWS, multi-LLM, orchestrazione tramite EventBridge, Lambda, API Gateway e Master Agent per coordinare più agenti in parallelo."
  },
  {
    number: "02 · AI Agents",
    title: "Colleghi digitali",
    body:
      "Agenti verticali per Sales, Finance, Operations, HR e Logistica: eseguono attività ripetitive, interagiscono con utenti e sistemi e migliorano nel tempo."
  },
  {
    number: "03 · Voice BOT",
    title: "Centralinista AI",
    body:
      "Un BOT vocale collegato via SIP al tuo PBX: risponde alle chiamate, instrada, chiama i clienti, aggiorna CRM/ERP e genera una sintesi automatica della conversazione."
  },
  {
    number: "04 · Integrazioni",
    title: "Nel cuore dei tuoi sistemi",
    body:
      "SuiteCRM, Vtiger, Daylite, Odoo, SAP Business One, NetSuite, SQL Server, MySQL, Oracle DB, Office 365, Google Workspace, SharePoint, Google Drive e sistemi legacy via API."
  }
];

const agentTags = ["Sales Assistant", "Invoice Compliance", "Customer Care", "Digital Reception", "Logistics Optimizer"];

const readyAgents = [
  ["Sales Assistant", "gestisce lead, opportunità, offerte e follow-up."],
  ["Invoice Compliance Agent", "controlla fatture vs ordini e DDT."],
  ["Customer Care Agent", "risponde a clienti via chat/email."],
  ["Logistics Optimizer", "traccia spedizioni e aggiorna i sistemi."],
  ["Digital Reception", "accoglie, smista, prende appuntamenti."]
];

const integrations = [
  ["CRM", "SuiteCRM, Vtiger, Daylite, NetSuite e altri."],
  ["ERP", "Odoo, SAP Business One, Dynamics 365 Business Central."],
  ["Productivity", "Office 365, Google Workspace."],
  ["Repository", "SharePoint, Google Drive, archivi custom."],
  ["Database", "SQL Server, MySQL, PostgreSQL, Oracle DB."]
];

function BackTop() {
  return (
    <a className="bo-back" href="#top">
      ↩ Torna alla top / menu
    </a>
  );
}

export default function Home() {
  return (
    <div className="bo-page" id="top">
      <main>
        <section className="bo-hero">
          <div className="bo-container">
            <div className="bo-pill">Agentic AI · Digital Operational Twins</div>
            <h1>
              L’AI che lavora <span>con te</span>, dentro i tuoi processi.
            </h1>
            <p className="bo-lead">
              TeraBrain è la piattaforma di Agentic AI che crea e orchestra agenti autonomi collegati ai tuoi sistemi
              (CRM, ERP, Voce, Email, Database), trasformando i processi aziendali in Digital Operational Twins.
            </p>
            <div className="bo-actions">
              <a href="#platform">Scopri la piattaforma</a>
              <a href="#agents">Vedi gli AI Agents</a>
            </div>
            <div className="bo-metrics" aria-label="Caratteristiche principali">
              <p>
                <strong>Multi-LLM</strong> (OpenAI, Claude, Gemini...)
              </p>
              <p>
                <strong>24/7</strong> Voice & Chat Agents
              </p>
              <p>
                <strong>Cloud o Self-Hosted</strong> nel tuo AWS
              </p>
            </div>

            <div className="bo-agent-card">
              <h2>Una “squadra” di Agent AI intorno alla tua azienda</h2>
              <div className="bo-tags">
                {agentTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p>
                Ogni agente TeraBrain è un collega digitale specializzato: parla in linguaggio naturale, accede ai dati,
                esegue procedure e tiene traccia di tutto ciò che fa.
              </p>
              <div className="bo-graph" aria-label="Operational Twin Graph">
                <div className="bo-graph-title">
                  <span>Operational Twin Graph</span>
                  <strong>Persone, AI Agents e sistemi nello stesso flusso</strong>
                </div>
                <div className="bo-node bo-people">
                  <strong>Persone</strong>
                  <small>team, clienti</small>
                </div>
                <div className="bo-node bo-agent">
                  <strong>AI Agents</strong>
                  <small>orchestrazione</small>
                </div>
                <div className="bo-system-stack">
                  <div>Policy & Audit</div>
                  <div>
                    <strong>CRM</strong>
                    <small>lead, ticket</small>
                  </div>
                  <div>
                    <strong>ERP</strong>
                    <small>ordini, fatture</small>
                  </div>
                  <div>
                    <strong>Voce</strong>
                    <small>call, IVR</small>
                  </div>
                </div>
                <div className="bo-small-node email">Email</div>
                <div className="bo-small-node sql">SQL</div>
                <div className="bo-small-node docs">Documenti</div>
                <span className="bo-line one" />
                <span className="bo-line two" />
                <span className="bo-line three" />
                <span className="bo-line four" />
                <span className="bo-dot d1" />
                <span className="bo-dot d2" />
                <span className="bo-dot d3" />
                <span className="bo-memory">Azione + dati + memoria</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bo-section">
          <div className="bo-container">
            <p className="bo-kicker">Panoramica</p>
            <h2>Quattro blocchi, un’unica piattaforma</h2>
            <p className="bo-muted">Qui trovi una sintesi dei 4 elementi chiave di TeraBrain.</p>
            <div className="bo-overview-grid">
              {overviewCards.map((card) => (
                <article key={card.number}>
                  <span>{card.number}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bo-section" id="platform">
          <div className="bo-container">
            <p className="bo-kicker">Piattaforma</p>
            <h2>TeraBrain Agentic AI Platform</h2>
            <p className="bo-muted">
              Una piattaforma pensata per portare l’AI dentro i processi operativi, non solo nelle demo. Basata su
              servizi gestiti AWS, con sicurezza, logging e osservabilità enterprise.
            </p>
            <img className="bo-wide-image" src={`${base}/bellorio-assets/bellorio-1.png`} alt="Schema piattaforma TeraBrain" />
            <div className="bo-two-col">
              <div>
                <h3>Architettura a layer</h3>
                <ul>
                  <li>
                    <strong>Cognitive layer</strong> – supporto a più LLM e modelli specializzati.
                  </li>
                  <li>
                    <strong>Process layer</strong> – orchestrazione dei flussi, regole, scheduling.
                  </li>
                  <li>
                    <strong>Integration layer</strong> – connettori verso CRM, ERP, VoIP, API.
                  </li>
                  <li>
                    <strong>Data layer</strong> – database SQL/NoSQL, storage documentale.
                  </li>
                  <li>
                    <strong>Master Agent & Observability</strong> – controllo, audit, KPI.
                  </li>
                </ul>
              </div>
              <div>
                <h3>Vantaggi per IT & Business</h3>
                <ul>
                  <li>Deploy flessibile: Cloud TeraBrain o Self-Hosted nel tuo AWS.</li>
                  <li>Costi legati all’uso reale grazie al modello serverless.</li>
                  <li>Gestione centralizzata di policy, permessi e audit trail.</li>
                  <li>Riduzione del time-to-market per nuovi progetti AI.</li>
                </ul>
              </div>
            </div>
            <BackTop />
          </div>
        </section>

        <section className="bo-section" id="agents">
          <div className="bo-container">
            <p className="bo-kicker">AI Agents</p>
            <h2>Assumi un agente AI, non solo un modello</h2>
            <p className="bo-muted">
              Ogni agente TeraBrain è costruito come un ruolo aziendale: ha un perimetro chiaro, strumenti assegnati
              (CRM, ERP, database, email), metriche di performance e un responsabile umano.
            </p>
            <img className="bo-wide-image" src={`${base}/bellorio-assets/bellorio-2.png`} alt="AI Agents TeraBrain" />
            <div className="bo-two-col">
              <div>
                <h3>Esempi di agenti pronti</h3>
                <ul>
                  {readyAgents.map(([name, body]) => (
                    <li key={name}>
                      <strong>{name}</strong> – {body}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Come si presenta a un cliente</h3>
                <p>
                  L’agente parla in prima persona, spiega cosa può fare, fa domande per chiarire il contesto e poi
                  esegue le azioni necessarie sui sistemi collegati. Tutto è tracciato e può essere rivisto dal team.
                </p>
                <p>
                  L’obiettivo non è “simulare un umano”, ma rendere il lavoro umano più concentrato sulle decisioni,
                  lasciando all’agente la routine operativa.
                </p>
              </div>
            </div>
            <BackTop />
          </div>
        </section>

        <section className="bo-section" id="voice">
          <div className="bo-container">
            <p className="bo-kicker">Voice BOT</p>
            <h2>Il tuo nuovo centralinista AI</h2>
            <p className="bo-muted">
              Un BOT vocale che parla come ChatGPT, ma è collegato ai tuoi dati e ai tuoi processi: integra il centralino
              via SIP e lavora H24.
            </p>
            <img className="bo-wide-image" src={`${base}/bellorio-assets/bellorio-3.png`} alt="TeraBrain Voice BOT" />
            <div className="bo-two-col">
              <div>
                <h3>Cosa sa fare il Voice BOT</h3>
                <ul>
                  <li>Risponde alle chiamate in linguaggio naturale.</li>
                  <li>Riconosce intenzioni e instrada verso il reparto giusto.</li>
                  <li>Può effettuare chiamate in outbound per conferme o promemoria.</li>
                  <li>Consulta CRM/ERP per dare risposte aggiornate.</li>
                  <li>Registra la sintesi della conversazione nel sistema.</li>
                </ul>
              </div>
              <div>
                <h3>Esempio di flusso</h3>
                <p>
                  Cliente chiama → risponde il BOT → identifica il motivo della chiamata → verifica dati su CRM/ERP →
                  risolve il problema oppure passa la chiamata all’operatore, fornendo un riassunto.
                </p>
                <p>Il tutto mantendo log, KPI e un archivio consultabile delle interazioni.</p>
              </div>
            </div>
            <BackTop />
          </div>
        </section>

        <section className="bo-section" id="integrations">
          <div className="bo-container">
            <p className="bo-kicker">Integrazioni</p>
            <h2>L’AI lavora dove sono già i tuoi dati</h2>
            <p className="bo-muted">
              TeraBrain non chiede di cambiare i sistemi esistenti: li collega in modo sicuro tramite connettori e API,
              così gli agenti AI possono operare direttamente sui dati che usi ogni giorno.
            </p>
            <img className="bo-wide-image" src={`${base}/bellorio-assets/bellorio-4.png`} alt="Integrazioni TeraBrain" />
            <div className="bo-two-col">
              <div>
                <h3>Applicazioni supportate</h3>
                <ul>
                  {integrations.map(([name, body]) => (
                    <li key={name}>
                      <strong>{name}</strong> – {body}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Come avviene il collegamento</h3>
                <p>
                  Tramite un connettore sicuro e configurabile che dialoga con TeraBrain via API o WebSocket cifrati. In
                  questo modo non è necessario esporre direttamente i sistemi interni verso Internet.
                </p>
                <p>
                  Ogni operazione eseguita da un agente è tracciata: sappiamo quale agente ha fatto cosa, quando e con
                  quali dati.
                </p>
              </div>
            </div>
            <BackTop />
          </div>
        </section>

        <section className="bo-section bo-next">
          <div className="bo-container">
            <p className="bo-kicker">Next step</p>
            <h2>Vuoi applicare TeraBrain a un tuo processo?</h2>
            <p className="bo-muted">
              Questo file HTML è pensato per essere inoltrato a colleghi e clienti come panoramica strutturata. Il passo
              successivo è scegliere insieme un processo concreto e costruire un MVP di agente AI in poche settimane.
            </p>
            <div className="bo-contact">
              <h3>Contatti</h3>
              <p>
                Email: <strong>info@linegon.com</strong> · Website: <strong>https://terabrain.ai</strong> · Azienda:{" "}
                <strong>Linegon Srl – Verona (Italia)</strong>
              </p>
              <ul>
                <li>Call esplorativa di 30 minuti.</li>
                <li>Demo live di uno o più agenti.</li>
                <li>Workshop con il tuo team per mappare i processi.</li>
              </ul>
            </div>
            <BackTop />
          </div>
        </section>
      </main>

      <footer className="bo-footer">
        <div>© 2025 TeraBrain · Linegon Srl · P.IVA 05114530230</div>
        <div>AI that works with you — every day, everywhere.</div>
      </footer>
    </div>
  );
}
