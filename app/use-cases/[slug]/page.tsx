import Link from "next/link";
import { notFound } from "next/navigation";

type UseCase = {
  slug: string;
  area: string;
  title: string;
  subtitle: string;
  agent: string;
  agentRole: string;
  outcomes: string[];
  process: string[];
  skills: string[];
  systems: string[];
  kpis: string[];
  guardrails: string[];
};

const useCases: UseCase[] = [
  {
    slug: "lead-management",
    area: "Sales",
    title: "Lead Management",
    subtitle:
      "Un agente operativo qualifica, arricchisce e indirizza i lead prima che arrivino al commerciale.",
    agent: "Alex Sales Account Agent",
    agentRole:
      "Alex raccoglie segnali dal form, dal CRM, dalle email e dalle conversazioni, assegna priorita ai lead e prepara il primo follow-up con contesto gia pronto.",
    outcomes: ["Lead qualificati", "Priorita commerciale", "Follow-up automatici", "CRM sempre aggiornato"],
    process: [
      "Acquisizione lead da sito, campagne, email, evento o import CRM.",
      "Arricchimento con dati aziendali, settore, ruolo, interesse e urgenza.",
      "Scoring in base a fit, budget, timing, bisogno e comportamento.",
      "Creazione task per il commerciale o apertura sequenza automatica.",
      "Aggiornamento CRM con note, prossima azione e storico conversazione."
    ],
    skills: [
      "CRM lookup e update",
      "Email drafting",
      "Lead scoring",
      "RAG su offerte e use case",
      "Web/API enrichment",
      "MCP Server CRM",
      "Calendar scheduling",
      "Notification workflow"
    ],
    systems: ["SuiteCRM", "Daylite", "HubSpot-like CRM", "Google Workspace", "Office 365", "Website form"],
    kpis: ["Tempo medio di presa in carico", "Lead qualificati", "Conversione MQL -> SQL", "Follow-up entro SLA"],
    guardrails: [
      "Nessun prezzo o sconto senza autorizzazione.",
      "Escalation al commerciale su lead enterprise o trattativa.",
      "Tracciamento completo delle modifiche CRM."
    ]
  },
  {
    slug: "sales-automation",
    area: "Sales",
    title: "Sales Automation",
    subtitle:
      "Automazione guidata da agenti per follow-up, offerte, task commerciali e coordinamento pipeline.",
    agent: "Alex Sales Account Agent",
    agentRole:
      "Alex lavora come sales assistant: prepara email, ricorda scadenze, aggiorna opportunita e coordina passaggi con marketing, finance e operations.",
    outcomes: ["Pipeline pulita", "Follow-up coerenti", "Task commerciali ridotti", "Prossime azioni chiare"],
    process: [
      "Lettura opportunita aperte, note e attivita CRM.",
      "Identificazione deal senza prossima azione o con SLA scaduto.",
      "Preparazione follow-up e reminder al referente commerciale.",
      "Creazione o aggiornamento task, call, note e forecast.",
      "Escalation quando servono pricing, negoziazione o decisione umana."
    ],
    skills: [
      "CRM automation",
      "Email sequence",
      "Opportunity update",
      "Calendar follow-up",
      "Quote checklist",
      "MCP Server sales tools",
      "Pipeline reporting",
      "Task routing"
    ],
    systems: ["CRM", "Email", "Calendar", "Documenti offerte", "ERP listini", "Slack/Teams"],
    kpis: ["Opportunita con next step", "Follow-up completati", "Pipeline hygiene", "Tempo commerciale risparmiato"],
    guardrails: [
      "Offerte e preventivi restano soggetti ad approvazione.",
      "Nessuna promessa commerciale non presente nei materiali validati.",
      "Escalation per condizioni economiche o contrattuali."
    ]
  },
  {
    slug: "pipeline-intelligence",
    area: "Sales",
    title: "Pipeline Intelligence",
    subtitle:
      "Analisi agentica della pipeline per capire rischi, priorita, forecast e opportunita bloccate.",
    agent: "Marco Insight Finder Agent",
    agentRole:
      "Marco analizza dati CRM, email, storico e report per far emergere anomalie, rischi, deal dormienti e azioni consigliate.",
    outcomes: ["Forecast piu leggibile", "Rischi deal anticipati", "Azioni consigliate", "Dashboard operative"],
    process: [
      "Estrazione dati da CRM, report e storico attivita.",
      "Classificazione opportunita per fase, valore, eta, ultimo contatto e rischio.",
      "Identificazione deal bloccati, duplicati o con informazioni mancanti.",
      "Generazione insight e raccomandazioni per sales manager.",
      "Creazione summary settimanale e task di correzione pipeline."
    ],
    skills: [
      "SQL/reporting",
      "CRM analytics",
      "Forecast analysis",
      "Anomaly detection",
      "RAG su storico clienti",
      "MCP Server database",
      "Dashboard summary",
      "Executive brief"
    ],
    systems: ["CRM", "Database", "BI export", "Email", "Fogli di calcolo", "Dashboard"],
    kpis: ["Deal a rischio", "Forecast accuracy", "Pipeline coverage", "Opportunity aging"],
    guardrails: [
      "Insight sempre marcati come raccomandazioni, non decisioni automatiche.",
      "Nessuna modifica massiva senza approvazione.",
      "Fonti dati e timestamp visibili nel report."
    ]
  },
  {
    slug: "customer-service",
    area: "Operations",
    title: "Customer Service",
    subtitle:
      "Un agente risponde ai clienti, consulta knowledge base e sistemi interni, e passa all'umano quando serve.",
    agent: "Elena Executive Assistant Agent",
    agentRole:
      "Elena gestisce richieste operative, recupera informazioni, prepara risposte e coordina escalation verso il referente corretto.",
    outcomes: ["Risposte piu rapide", "Customer care tracciato", "Escalation ordinate", "Knowledge base valorizzata"],
    process: [
      "Ricezione richiesta da email, telefono, chat o form.",
      "Classificazione intenzione, urgenza e cliente.",
      "Ricerca risposta su knowledge base, CRM, ticket e documenti.",
      "Invio bozza o risposta automatica se nel perimetro.",
      "Apertura ticket o handoff a operatore con sintesi completa."
    ],
    skills: [
      "Ticket classification",
      "Knowledge RAG",
      "Email reply",
      "Voice BOT",
      "CRM lookup",
      "MCP Server support",
      "Sentiment detection",
      "Handoff summary"
    ],
    systems: ["Helpdesk", "CRM", "Knowledge base", "Email", "PBX/SIP", "Document repository"],
    kpis: ["First response time", "Ticket deflection", "Customer satisfaction", "Escalation quality"],
    guardrails: [
      "Escalation obbligatoria per reclami, temi legali o richieste fuori policy.",
      "Risposte basate solo su knowledge base e dati disponibili.",
      "Dati cliente consultati secondo permessi e logging."
    ]
  },
  {
    slug: "ticketing",
    area: "Operations",
    title: "Ticketing",
    subtitle:
      "Classificazione, routing e avanzamento ticket con agenti che leggono, sintetizzano e assegnano priorita.",
    agent: "Elena Executive Assistant Agent",
    agentRole:
      "Elena agisce da dispatcher operativo: legge i ticket, capisce priorita e categoria, collega documenti e assegna il flusso corretto.",
    outcomes: ["Ticket ordinati", "Priorita coerenti", "Meno backlog", "Handoff piu chiari"],
    process: [
      "Lettura nuovo ticket e allegati.",
      "Classificazione per categoria, cliente, severita e SLA.",
      "Ricerca ticket simili, procedure e asset collegati.",
      "Routing al team o all'agente specializzato.",
      "Aggiornamento stato, summary e prossima azione."
    ],
    skills: [
      "Ticket triage",
      "Document OCR",
      "SLA check",
      "Routing workflow",
      "RAG procedure",
      "MCP Server helpdesk",
      "Duplicate detection",
      "Status update"
    ],
    systems: ["Ticketing", "Email", "CRM", "Knowledge base", "Asset repository", "Slack/Teams"],
    kpis: ["Backlog", "SLA compliance", "Tempo di assegnazione", "Ticket duplicati"],
    guardrails: [
      "Cambio priorita soggetto a regole SLA.",
      "Nessuna chiusura ticket senza evidenza o approvazione configurata.",
      "Escalation automatica per criticita alta."
    ]
  },
  {
    slug: "back-office",
    area: "Operations",
    title: "Back Office Automation",
    subtitle:
      "Agenti per attivita ripetitive di back office: controlli, inserimenti, riconciliazioni e documenti.",
    agent: "Alberto Invoice Compliance Agent",
    agentRole:
      "Alberto controlla dati, documenti e coerenza tra sistemi, riducendo errori manuali e tempi di gestione amministrativa.",
    outcomes: ["Meno errori", "Controlli piu rapidi", "Processi documentati", "Operativita scalabile"],
    process: [
      "Raccolta input da email, cartelle, ERP o portali.",
      "Estrazione dati da PDF, fogli, ordini, DDT e fatture.",
      "Confronto con anagrafiche, regole e dati ERP.",
      "Segnalazione anomalie e preparazione correzioni.",
      "Aggiornamento sistemi o invio a validazione umana."
    ],
    skills: [
      "OCR documentale",
      "ERP lookup",
      "Data validation",
      "Invoice matching",
      "Exception workflow",
      "MCP Server ERP",
      "Email processing",
      "Audit trail"
    ],
    systems: ["ERP", "Email", "SharePoint/Drive", "Database", "Portali fornitori", "Fogli di calcolo"],
    kpis: ["Documenti processati", "Anomalie rilevate", "Tempo ciclo", "Errori evitati"],
    guardrails: [
      "Pagamenti, note credito e modifiche contabili richiedono approvazione.",
      "Ogni correzione proposta mantiene evidenza dei dati originali.",
      "Accesso limitato ai documenti autorizzati."
    ]
  },
  {
    slug: "campaign-operations",
    area: "Marketing",
    title: "Campaign Operations",
    subtitle:
      "Agenti per pianificare, coordinare e monitorare campagne marketing multi-canale.",
    agent: "Vittorio Marketing Agent",
    agentRole:
      "Vittorio organizza campagne, segmenti, contenuti, checklist, asset e report, coordinando marketing e sales.",
    outcomes: ["Campagne piu ordinate", "Asset coerenti", "Report automatici", "Allineamento sales-marketing"],
    process: [
      "Definizione obiettivo, pubblico, canali e messaggio.",
      "Generazione checklist operativa e calendario campagna.",
      "Preparazione asset, email, landing, post e materiali sales.",
      "Controllo coerenza brand, segmentazione e tracking.",
      "Monitoraggio risultati e raccomandazioni di ottimizzazione."
    ],
    skills: [
      "Content planning",
      "Audience segmentation",
      "Campaign calendar",
      "Email draft",
      "Asset checklist",
      "MCP Server marketing tools",
      "Analytics summary",
      "Sales enablement"
    ],
    systems: ["Marketing automation", "CRM", "Email platform", "CMS", "Analytics", "Drive/SharePoint"],
    kpis: ["Campaign readiness", "CTR", "Lead generati", "Asset completati"],
    guardrails: [
      "Contenuti pubblici soggetti ad approvazione.",
      "Nessun invio massivo senza consenso e verifica lista.",
      "Rispetto tono di brand e claim validati."
    ]
  },
  {
    slug: "content-workflows",
    area: "Marketing",
    title: "Content Workflows",
    subtitle:
      "Workflow agentici per ideare, produrre, revisionare e distribuire contenuti aziendali.",
    agent: "MoltBook Publisher Agent",
    agentRole:
      "MoltBook coordina contenuti lunghi, materiali editoriali, revisioni, trasformazioni multiformato e pubblicazione controllata.",
    outcomes: ["Produzione piu veloce", "Revisioni tracciate", "Contenuti riutilizzabili", "Distribuzione multi-canale"],
    process: [
      "Raccolta brief, fonti, audience e obiettivo.",
      "Ricerca e organizzazione materiali tramite RAG.",
      "Produzione bozza, outline, varianti e asset derivati.",
      "Revisione con guardrail editoriali e approvazione umana.",
      "Pubblicazione o consegna nei canali configurati."
    ],
    skills: [
      "Long-form drafting",
      "RAG fonti",
      "Document editing",
      "Slide generation",
      "SEO checklist",
      "MCP Server content repository",
      "Versioning",
      "Publishing workflow"
    ],
    systems: ["CMS", "Documenti", "Drive/SharePoint", "Email", "Social planner", "Knowledge base"],
    kpis: ["Tempo di produzione", "Revisioni per contenuto", "Asset riutilizzati", "Contenuti pubblicati"],
    guardrails: [
      "Fonti e claim devono essere verificabili.",
      "Pubblicazione finale soggetta ad approvazione.",
      "Contenuti sensibili o legali inviati a revisione."
    ]
  }
];

const bySlug = new Map(useCases.map((useCase) => [useCase.slug, useCase]));

export const dynamicParams = false;

export function generateStaticParams() {
  return useCases.map((useCase) => ({ slug: useCase.slug }));
}

function allOtherCases(currentSlug: string) {
  return useCases.filter((useCase) => useCase.slug !== currentSlug);
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = bySlug.get(slug);

  if (!useCase) {
    notFound();
  }

  return (
    <div className="bo-page" id="top">
      <main>
        <section className="bo-hero">
          <div className="bo-container">
            <div className="bo-pill">Use Case · {useCase.area}</div>
            <h1>
              {useCase.title}: <span>agenti operativi</span> dentro il processo.
            </h1>
            <p className="bo-lead">{useCase.subtitle}</p>
            <div className="bo-actions">
              <a href="#processo">Processo</a>
              <a href="#skills">Skill e sistemi</a>
              <a href="#governance">KPI e guardrail</a>
            </div>
            <div className="bo-metrics" aria-label="Risultati attesi">
              {useCase.outcomes.map((outcome) => (
                <p key={outcome}>
                  <strong>{outcome}</strong>
                </p>
              ))}
            </div>

            <div className="bo-agent-card">
              <h2>{useCase.agent}</h2>
              <div className="bo-tags">
                <span>{useCase.area}</span>
                <span>Agent duty</span>
                <span>Skill operative</span>
                <span>MCP Server</span>
                <span>Human handoff</span>
              </div>
              <p>{useCase.agentRole}</p>
              <div className="bo-overview-grid">
                <article>
                  <span>Duty</span>
                  <h3>Ruolo dell'agente</h3>
                  <p>Lavora come collega digitale specializzato, con compiti, limiti e responsabilita definiti.</p>
                </article>
                <article>
                  <span>Memoria</span>
                  <h3>Contesto operativo</h3>
                  <p>Usa storico, documenti, CRM, ERP e knowledge base per non ripartire da zero a ogni interazione.</p>
                </article>
                <article>
                  <span>Azioni</span>
                  <h3>Tool e workflow</h3>
                  <p>Esegue task sui sistemi collegati tramite skill autorizzate, API e MCP Server.</p>
                </article>
                <article>
                  <span>Controllo</span>
                  <h3>Guardrail</h3>
                  <p>Escala all'umano quando il processo richiede approvazione, giudizio o responsabilita decisionale.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bo-section" id="processo">
          <div className="bo-container">
            <p className="bo-kicker">Processo operativo</p>
            <h2>Dal trigger alla prossima azione.</h2>
            <p className="bo-muted">
              Il use case viene trattato come un flusso di lavoro: input, classificazione, azione, controllo e handoff.
            </p>
            <div className="bo-overview-grid">
              {useCase.process.map((step, index) => (
                <article key={step}>
                  <span>{String(index + 1).padStart(2, "0")} · Step</span>
                  <h3>{step.split(" ").slice(0, 4).join(" ")}</h3>
                  <p>{step}</p>
                </article>
              ))}
            </div>
            <a className="bo-back" href="#top">Torna alla top / menu</a>
          </div>
        </section>

        <section className="bo-section" id="skills">
          <div className="bo-container">
            <p className="bo-kicker">Skill e sistemi</p>
            <h2>Le capacita operative dell'agente.</h2>
            <p className="bo-muted">
              Ogni use case abilita solo le skill necessarie: tool, API, workflow, RAG, Voice BOT e MCP Server quando
              serve collegare sistemi aziendali.
            </p>
            <div className="bo-two-col">
              <div className="bo-contact">
                <h3>Skill</h3>
                <ul>
                  {useCase.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="bo-contact">
                <h3>Sistemi collegati</h3>
                <ul>
                  {useCase.systems.map((system) => (
                    <li key={system}>{system}</li>
                  ))}
                </ul>
              </div>
            </div>
            <a className="bo-back" href="#top">Torna alla top / menu</a>
          </div>
        </section>

        <section className="bo-section" id="governance">
          <div className="bo-container">
            <p className="bo-kicker">KPI e governance</p>
            <h2>Misurabile, controllato, migliorabile.</h2>
            <div className="bo-two-col">
              <div>
                <h3>KPI principali</h3>
                <ul>
                  {useCase.kpis.map((kpi) => (
                    <li key={kpi}>{kpi}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Guardrail</h3>
                <ul>
                  {useCase.guardrails.map((guardrail) => (
                    <li key={guardrail}>{guardrail}</li>
                  ))}
                </ul>
              </div>
            </div>
            <a className="bo-back" href="#top">Torna alla top / menu</a>
          </div>
        </section>

        <section className="bo-section bo-next">
          <div className="bo-container">
            <p className="bo-kicker">Altri use cases</p>
            <h2>Esplora gli altri processi agent-ready.</h2>
            <div className="bo-overview-grid">
              {allOtherCases(useCase.slug).map((item) => (
                <article key={item.slug}>
                  <span>{item.area}</span>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <Link className="bo-back" href={`/use-cases/${item.slug}`}>
                    Apri use case
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
