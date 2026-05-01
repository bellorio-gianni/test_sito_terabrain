const homeHref = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`;

const news = [
  {
    source: "Reuters (via Investing.com)",
    date: "2026-04-28",
    title: "Amazon introduce software “agentic” per accelerare le assunzioni",
    description: [
      "Amazon ha presentato un nuovo software per ridurre il carico umano in alcune fasi del recruiting, puntando a velocizzare processi ad alto volume.",
      "Il focus è sull'automazione operativa con logiche “agentic” per gestire task ripetitivi e coordinare step del processo.",
      "Il caso è interessante perché mostra l'adozione di agenti in workflow HR, non solo in ambito IT o customer service.",
      "Implica anche nuove esigenze di audit, tracciabilità e governance nelle decisioni automatizzate."
    ],
    url: "https://www.investing.com/news/stock-market-news/amazon-targets-mass-hiring-with-agentic-software-goal-to-humanize-ai-4642354"
  },
  {
    source: "GlobeNewswire",
    date: "2026-04-28",
    title: "AvePoint potenzia la Confidence Platform con funzionalità di agentic AI e multicloud resilience",
    description: [
      "AvePoint annuncia avanzamenti alla Confidence Platform per passare da “visibilità” ad “enforcement” nella gestione rischio e policy.",
      "L'obiettivo dichiarato è accelerare adozione di AI in azienda mantenendo controllo e conformità.",
      "Il tema agentic emerge come estensione della governance: dagli insight alle azioni automatiche guidate da regole.",
      "Rilevante per chi sta progettando guardrail e controlli continui su flussi agentici."
    ],
    url: "https://www.globenewswire.com/news-release/2026/04/28/3282739/0/en/AvePoint-Doubles-Down-on-Agentic-AI-and-Multicloud-Resilience-Across-the-Confidence-Platform.html"
  },
  {
    source: "Kaseya (Press Release)",
    date: "2026-04-28",
    title: "Kaseya presenta una piattaforma di IT management “agentic” basata su Kaseya Intelligence",
    description: [
      "Kaseya annuncia una piattaforma che mira a trasformare dati operativi in azioni autonome per l'IT management.",
      "L'approccio agentico promette automazione end-to-end: rilevazione, decisione e remediation, con supervisione.",
      "Il focus è su riduzione tempi di risposta e standardizzazione dei runbook operativi.",
      "Caso utile per chi costruisce agenti per IT Ops e cybersecurity con cicli chiusi di intervento."
    ],
    url: "https://www.kaseya.com/press-release/kaseya-unveils-the-first-agentic-it-management-platform-turning-data-into-autonomous-action/"
  },
  {
    source: "GlobeNewswire",
    date: "2026-04-28",
    title: "Cequence AI Gateway introduce “Agent Personas” per privilege scoping degli agenti",
    description: [
      "Cequence annuncia la disponibilità di Agent Personas in AI Gateway, con scoping privilegi a livello infrastrutturale.",
      "Introduce anche Agent Access Keys, credenziali pensate per agenti headless in workflow automatizzati.",
      "Il tema centrale è ridurre il rischio legato ad agenti con permessi eccessivi e credenziali diffuse.",
      "Rilevante per implementare “least privilege” e rotazione credenziali in ambienti agentici."
    ],
    url: "https://www.globenewswire.com/news-release/2026/04/28/3282721/0/en/Cequence-AI-Gateway-Introduces-Agent-Personas-the-Industry-s-First-Infrastructure-Level-Privilege-Scoping-for-Autonomous-AI-Agents.html"
  },
  {
    source: "Tom's Hardware",
    date: "2026-04-28",
    title: "Canonical delinea la roadmap AI di Ubuntu con enfasi su local inference e strumenti per sistemi agentici",
    description: [
      "La roadmap presentata evidenzia un approccio “responsible” e orientato a tool open-source.",
      "Tra i punti chiave: inferenza locale, osservabilità e componenti utili per integrare AI in modo controllabile.",
      "Per chi sviluppa agenti su Linux, è un segnale di maturazione del runtime e delle integrazioni OS-level.",
      "Impatta anche su policy aziendali: dove far girare i modelli e come monitorarli."
    ],
    url: "https://www.tomshardware.com/software/operating-systems/ubuntus-ai-roadmap-revealed-universal-ai-kill-switch-and-forced-ai-integration-are-not-part-of-the-plan-cloud-tracking-local-inference-and-agentic-system-tools-take-center-stage"
  },
  {
    source: "Nintex Blog",
    date: "2026-04-29",
    title: "Nintex rilascia Nintex K2 5.9.1 con AI on-premises e identity management semplificato",
    description: [
      "Nintex annuncia l'aggiornamento on-premises della piattaforma di orchestrazione con AI integrata.",
      "L'attenzione è su ambienti regolati: AI on-prem, gestione identità più semplice e accessibilità.",
      "È un segnale importante per l'adozione agentica in contesti con vincoli di data residency.",
      "Rilevante per chi costruisce automazioni di processo con componenti agentici “in casa”."
    ],
    url: "https://www.nintex.com/blog/nintex-debuts-new-on-premises-ai-simplifed-identity-management-nintex-k2/"
  },
  {
    source: "Cloud Security Alliance (Press Release)",
    date: "2026-04-29",
    title: "Cloud Security Alliance: milestone per mettere in sicurezza l'“Agentic Control Plane” e stewardship dell'ATF",
    description: [
      "CSA comunica milestone per rafforzare la capacità di “securing the agentic control plane” nel 2026.",
      "Annuncia anche un accordo per il trasferimento di stewardship dell'Agentic Trust Framework (ATF).",
      "Il messaggio: la sicurezza agentica sta convergendo verso framework e controlli condivisi.",
      "Utile per chi definisce requisiti di governance, assurance e compliance per agenti in produzione."
    ],
    url: "https://cloudsecurityalliance.org/press-releases/2026/04/29/csai-foundation-announces-key-milestones-to-secure-the-agentic-control-plane"
  },
  {
    source: "Sage (Press Release)",
    date: "2026-04-29",
    title: "Sage amplia la developer platform con strumenti per AI agent e nuovi modelli commerciali",
    description: [
      "Sage annuncia nuovi tool per partner e sviluppatori per costruire e scalare soluzioni su prodotti Sage.",
      "Viene esplicitato il focus su AI agent toolchain e accesso unificato per accelerare time-to-value.",
      "Interessante per l'ecosistema ISV: agenti come estensione naturale delle integrazioni applicative.",
      "Evidenzia il passaggio da feature AI “puntuali” a workflow agentici end-to-end."
    ],
    url: "https://www.sage.com/en-us/news/press-releases/2026/04/sage-expands-developer-platform-with-new-ai-tools-and-commercial-models/"
  },
  {
    source: "GlobeNewswire",
    date: "2026-04-29",
    title: "Guild.ai lancia una piattaforma presentata come “control plane” per AI agents",
    description: [
      "Guild.ai annuncia la disponibilità di una piattaforma focalizzata su governance e lifecycle degli agenti.",
      "Il concetto di control plane mira a standardizzare deployment, policy, osservabilità e controllo.",
      "Trend chiaro: l'AgentOps sta diventando una categoria a sé, con stack dedicato.",
      "Rilevante per imprese con più agenti e necessità di coordinamento e compliance."
    ],
    url: "https://www.globenewswire.com/news-release/2026/04/29/3284142/0/en/Guild-ai-Introduces-the-First-Control-Plane-for-AI-Agents.html"
  },
  {
    source: "National Law Review (press release syndication)",
    date: "2026-04-29",
    title: "Datris espande la piattaforma dati “agent-native” per rendere gli agenti operatori di infrastruttura",
    description: [
      "Datris comunica un'espansione che abilita gli agenti come “first-class operators” su data infrastructure.",
      "L'obiettivo è ridurre attrito tra agenti e layer dati: provisioning, accesso e operazioni data-centriche.",
      "È un indicatore della convergenza tra data platform e orchestrazione agentica.",
      "Implica requisiti stringenti su permessi, audit e gestione errori."
    ],
    url: "https://natlawreview.com/press-releases/datris-launches-agent-operated-data-platform"
  },
  {
    source: "GlobeNewswire",
    date: "2026-04-29",
    title: "Instead presenta un AI Agent per dichiarazione fiscale end-to-end (business e individuale)",
    description: [
      "Instead annuncia un agente per automazione del tax filing con focus su workflow completi.",
      "Il caso evidenzia come gli agenti stiano entrando in verticali ad alta complessità documentale.",
      "Rilevante perché combina tool-use, raccolta dati e assistenza su processi a elevata responsabilità.",
      "Richiama l'importanza di verifiche, explainability e controllo qualità."
    ],
    url: "https://www.globenewswire.com/news-release/2026/04/29/3284163/0/en/Instead-Introduces-the-AI-Agent-for-end-to-end-business-and-individual-tax-filing.html"
  },
  {
    source: "PR Newswire",
    date: "2026-04-29",
    title: "Axtria e LangChain annunciano partnership per governare e scalare agenti AI in ambito pharma",
    description: [
      "La partnership punta a portare agenti dall'esperimento alla produzione in un settore regolato come il life sciences.",
      "Enfasi su governance, osservabilità e processi di rilascio affidabili (AgentOps/LLMOps).",
      "È un segnale della domanda enterprise: non solo build, ma run in sicurezza e con metriche.",
      "Utile benchmark per chi lavora su agenti in contesti GxP e compliance."
    ],
    url: "https://www.prnewswire.com/news-releases/from-pilot-to-production-axtria-and-langchain-partner-to-govern-and-scale-ai-agents-in-pharma-302757028.html"
  },
  {
    source: "Axios",
    date: "2026-04-30",
    title: "Citi avvia iniziative su agentic AI (focus su automazione task e workflow)",
    description: [
      "Secondo Axios, Citi sta entrando nel tema agentic AI per automatizzare attività e workflow in contesti enterprise.",
      "La notizia segnala che grandi istituzioni finanziarie stanno passando da pilot a programmi strutturati.",
      "Nel finance, governance e risk management diventano requisiti non negoziabili.",
      "Rilevante per chi progetta agenti con controlli, policy e audit trail."
    ],
    url: "https://www.axios.com/2026/04/30/exclusive-citi-moves-into-agentic-ai"
  },
  {
    source: "NSA (Press Release)",
    date: "2026-04-30",
    title: "NSA e partner pubblicano una “Cybersecurity Information Sheet” su adozione prudente di Agentic AI",
    description: [
      "NSA comunica la pubblicazione di una guida cyber su adozione prudente di servizi agentici.",
      "Il documento punta a sensibilizzare su rischio, superficie d'attacco e controlli minimi.",
      "È un segnale di maturazione: gli agenti entrano nel perimetro delle linee guida istituzionali.",
      "Utile per checklist di security-by-design e threat modeling per agenti."
    ],
    url: "https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4475134/nsa-joins-the-asds-acsc-and-others-to-release-guidance-on-agentic-artificial-in/"
  },
  {
    source: "Gen Digital Newsroom / PR Newswire",
    date: "2026-04-30",
    title: "Gen lancia “VPN for Agents” e amplia protezioni per agenti in Norton 360",
    description: [
      "Gen annuncia “VPN for Agents”, pensata per pattern di comunicazione multi-servizio tipici degli agenti.",
      "In parallelo estende protezioni per agenti all'interno dell'ecosistema Norton.",
      "Interessante perché porta concetti agentic anche nel consumer security e non solo enterprise.",
      "Rilevante per il tema “trust corridor” e protezione canali di comunicazione degli agenti."
    ],
    url: "https://newsroom.gendigital.com/2026-04-30-Gen-Accelerates-Agentic-Security-and-Privacy-for-the-AI-Era"
  },
  {
    source: "Experian (Press Release)",
    date: "2026-04-30",
    title: "Experian annuncia “Agent Trust” per legare identità umana e agente nelle transazioni",
    description: [
      "Experian presenta un servizio di “human-to-agent binding” per transazioni in commerce guidate da agenti.",
      "L'ecosistema citato include collaborazioni con attori come Visa, Cloudflare e Skyfire.",
      "Il tema è identità, accountability e autorizzazioni: chi firma/approva cosa quando agisce un agente.",
      "Fondamentale per agentic commerce e pagamenti con delega."
    ],
    url: "https://www.experianplc.com/newsroom/press-releases/2026/experian-announces-agent-trust-to-power-trusted-ai-driven-commer"
  },
  {
    source: "PR Newswire",
    date: "2026-04-30",
    title: "Keeper Security rilascia “Keeper Agent Kit” per proteggere workflow developer con agenti AI",
    description: [
      "Keeper annuncia un kit per mitigare esposizione di credenziali privilegiate nei flussi con agenti.",
      "Il rischio citato: segreti finire in prompt history o in contesti non controllati.",
      "È un punto chiave per AgentOps: secret management, policy, e protezioni zero-trust.",
      "Rilevante per team che integrano agenti in CI/CD e strumenti di sviluppo."
    ],
    url: "https://www.prnewswire.com/news-releases/keeper-security-launches-agent-kit-to-secure-ai-driven-developer-workflows-302758433.html"
  },
  {
    source: "PR Newswire",
    date: "2026-04-30",
    title: "Suade si posiziona come piattaforma di regulatory reporting “agentic AI-ready”",
    description: [
      "Suade comunica evoluzioni posizionando il prodotto come AI-native e pronto per automazioni agentiche.",
      "Il contesto è il reporting regolamentare, dove automazione e controlli sono fondamentali.",
      "Trend: agenti come “programmable operations” su processi regolati.",
      "Rilevante per use case Finance/RegTech con audit e verifiche."
    ],
    url: "https://www.prnewswire.com/news-releases/suade-sets-the-standard-for-agentic-ai-as-the-only-ai-native-regulatory-reporting-platform-302758024.html"
  },
  {
    source: "Bandwidth (Press Release / risultati trimestrali)",
    date: "2026-04-30",
    title: "Bandwidth cita adozioni di “voice AI” e casi legati ad Agentforce Contact Center",
    description: [
      "Bandwidth riporta segnali di adozione in produzione di voice AI su larga scala.",
      "Cita anche la selezione come partner infrastrutturale per Agentforce Contact Center.",
      "È indicativo dell'importanza del layer “telecom/infrastruttura” per agenti conversazionali.",
      "Rilevante per chi costruisce agenti telefonici e contact center automation."
    ],
    url: "https://www.bandwidth.com/newsroom/bandwidth-announces-first-quarter-2026-financial-results/"
  },
  {
    source: "Adobe (PDF press release)",
    date: "2026-04-28",
    title: "Adobe completa un'acquisizione e collega l'evoluzione del CX all'era agentic AI",
    description: [
      "Nel comunicato PDF, Adobe collega esplicitamente l'evoluzione di customer experience orchestration all'era agentic AI.",
      "La notizia segnala un posizionamento di lungo periodo: agenti come interfaccia/automazione per CX.",
      "Anche quando il tema è M&A, l'elemento agentico entra nella narrativa di prodotto e piattaforma.",
      "Rilevante per chi segue l'integrazione agenti in stack marketing/CX."
    ],
    url: "https://news.adobe.com/news/downloads/pdfs/2026/04/04282026-adobecompletessemrush-acquisition.pdf"
  },
  {
    source: "TechRadar Pro",
    date: "2026-04-29",
    title: "TechRadar: “the era of the agent is here” — spinta Google Cloud verso soluzioni agentic end-to-end",
    description: [
      "L'articolo descrive un messaggio chiave: dalla fase pilota alla fase agente, con stack cloud orientato all'operatività.",
      "Enfasi su dati enterprise come abilitatore per agenti utili e affidabili.",
      "Rilevante perché riflette la pressione di mercato a “industrializzare” gli agenti.",
      "Implica più strumenti di governance, osservabilità e integrazione con sistemi aziendali."
    ],
    url: "https://www.techradar.com/pro/the-era-of-the-pilot-is-over-the-era-of-the-agent-is-here-google-cloud-wants-you-to-unlock-the-power-of-your-data"
  }
];

export default function DailyNewsPage() {
  return (
    <div className="daily-news-page">
      <div className="daily-news-wrap">
        <section className="daily-news-hero">
          <div className="daily-news-top-row">
            <div className="daily-news-brand">
              <span className="daily-news-dot" />
              TeraBrain · TB News Daily
            </div>
            <a className="daily-news-home-btn" href={homeHref} aria-label="Torna alla Home">
              ← Torna alla Home
            </a>
          </div>
          <h1>TB News Daily — AI Agents &amp; Agentic Systems</h1>
          <p className="daily-news-subtitle">
            Raccolta aggiornata delle ultime news (ultimi <b>3 giorni</b>) · Data: <b>1 Maggio 2026</b>
          </p>
          <div className="daily-news-stats">
            <div className="daily-news-pill">
              <strong>21</strong> news selezionate
            </div>
            <div className="daily-news-pill">
              Focus: <strong>AI Agents</strong>, <strong>Agentic Systems</strong>, governance, sicurezza, piattaforme
            </div>
            <div className="daily-news-pill">No duplicati · Solo aggiornamenti / release / linee guida / partnership</div>
          </div>
          <div className="daily-news-divider" />
          <div className="daily-news-note">
            <b>Nota:</b> questa pagina è pensata per una lettura rapida. Ogni card contiene contesto operativo + link
            alla fonte.
          </div>
        </section>

        <section className="daily-news-grid" aria-label="Lista news">
          {news.map((item, index) => (
            <article className="daily-news-card" data-idx={index} key={item.title}>
              <div className="daily-news-card-top">
                <div className="daily-news-tag">News</div>
                <div className="daily-news-meta">
                  {item.source} · <span>{item.date}</span>
                </div>
              </div>
              <h2>{item.title}</h2>
              <div className="daily-news-desc">
                {item.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="daily-news-actions">
                <a className="daily-news-btn-link" href={item.url} target="_blank" rel="noopener noreferrer">
                  Apri fonte
                </a>
              </div>
            </article>
          ))}
        </section>

        <footer className="daily-news-footer">
          <div>TB News Daily · Pubblicazione automatizzata su terabrain.ai · 1 Maggio 2026</div>
        </footer>
      </div>
    </div>
  );
}
