const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const architectureBlocks = [
  {
    number: "01",
    title: "LLM per ogni agent",
    body:
      "Ogni agente puo usare un modello diverso in base al compito: ragionamento profondo, velocita, costo, multimodalita, voce o contesto lungo. La piattaforma puo combinare OpenAI, Claude, Gemini, modelli open source e modelli verticali."
  },
  {
    number: "02",
    title: "Memoria e RAG",
    body:
      "La memoria operativa conserva contesto, storico, preferenze, decisioni e stato del processo. Il layer RAG collega documenti, database, knowledge base, ticket, contratti e procedure aziendali per risposte fondate sui dati reali."
  },
  {
    number: "03",
    title: "Duty dell'agent",
    body:
      "Il duty definisce ruolo, responsabilita, compiti, limiti, tono, priorita, escalation, KPI e modalita di collaborazione. Un agente non e solo un prompt: e una posizione operativa configurata."
  },
  {
    number: "04",
    title: "Skill, MCP Server e Voice BOT",
    body:
      "Le skill sono capacita operative: leggere, scrivere, cercare, chiamare API, usare tool, aprire workflow e collaborare con MCP Server. Il Voice BOT porta gli agenti su telefono, call center e conversazioni vocali."
  }
];

const skillGroups = [
  ["CRM", "lead, opportunita, account, contatti, pipeline, follow-up, attivita e note commerciali"],
  ["ERP", "ordini, DDT, fatture, anagrafiche, magazzino, scadenze, produzione e commesse"],
  ["Email", "lettura inbox, classificazione, bozze, risposte, inoltri, estrazione task e follow-up"],
  ["Calendar", "agenda, disponibilita, appuntamenti, reminder, convocazioni e ripianificazione"],
  ["Documenti", "PDF, Word, Excel, PowerPoint, OCR, estrazione dati, redazione e revisione"],
  ["Knowledge base", "RAG su policy, procedure, manuali, contratti, offerte, schede prodotto e FAQ"],
  ["Database", "SQL, report, query controllate, data validation, riconciliazione e insight finder"],
  ["Web/API", "HTTP API, webhook, scraping controllato, portali, form e sistemi legacy"],
  ["MCP Server", "connessione standardizzata a tool, repository, file system, CRM, database e app aziendali"],
  ["Workflow", "trigger, step, approvazioni, branching, code, retry, escalation e audit trail"],
  ["Voice", "SIP, PBX, trascrizione, sintesi vocale, inbound, outbound e summary chiamata"],
  ["Messaggistica", "Slack, Teams, WhatsApp, chat web, notifiche operative e handoff umano"],
  ["Ricerca", "search interna, web controllato, classificazione fonti, citazioni e sintesi"],
  ["Governance", "policy, permessi, guardrail, log, osservabilita, cost control e compliance"]
];

const agentConfig = [
  ["LLM", "modello primario, modelli fallback, temperature, contesto, costo massimo e strategia di routing"],
  ["Duty", "ruolo aziendale, missione, task ammessi, task vietati, tono, KPI e proprietario umano"],
  ["Skill", "tool abilitati, MCP Server, API, connettori, database, documenti e canali di comunicazione"],
  ["Guardrail", "permessi, limiti, validazioni, privacy, approvazioni obbligatorie e blocchi di sicurezza"],
  ["Processi", "workflow eseguibili, stati, input richiesti, output attesi, handoff ed escalation"],
  ["Scheduling", "azioni ricorrenti, monitor, reminder, batch, finestre operative e trigger evento"]
];

const orchestrationSteps = [
  ["Intake", "Il sistema riceve una richiesta da voce, email, chat, form, CRM, ERP o evento schedulato."],
  ["Routing", "L'orchestratore identifica il processo, assegna l'agente corretto e prepara contesto e memoria."],
  ["Execution", "Gli agenti eseguono task, chiamano skill, interrogano RAG, aggiornano sistemi e producono output."],
  ["Control", "Guardrail, policy, approvazioni e audit verificano che ogni azione resti nel perimetro autorizzato."],
  ["Handoff", "Quando serve giudizio umano, trattativa, eccezione o decisione sensibile, il task passa al referente."],
  ["Learning", "Esiti, KPI e feedback aggiornano memoria, procedure, template e miglioramenti operativi."]
];

export default function PlatformPage() {
  return (
    <div className="bo-page" id="top">
      <main>
        <section className="bo-hero">
          <div className="bo-container">
            <div className="bo-pill">TeraBrain Platform · Agentic AI Architecture</div>
            <h1>
              La piattaforma che trasforma gli AI Agents in <span>processi operativi governati</span>.
            </h1>
            <p className="bo-lead">
              TeraBrain combina modelli LLM, memoria, RAG, skill, MCP Server, Voice BOT e orchestrazione dei processi
              per costruire agenti digitali che lavorano dentro i sistemi aziendali con ruoli, limiti e responsabilita
              chiari.
            </p>
            <div className="bo-actions">
              <a href="#architettura">Architettura</a>
              <a href="#agents">Configurazione agenti</a>
              <a href="#orchestrazione">Orchestrazione</a>
            </div>
            <div className="bo-metrics" aria-label="Caratteristiche piattaforma">
              <p className="bo-metric-highlight">
                <strong>Skills operative</strong> tool, API, workflow, Voice BOT e <em>MCP Server</em>
              </p>
              <p>
                <strong>Multi-LLM</strong> per agenti specializzati
              </p>
              <p>
                <strong>RAG + Memoria</strong> su dati aziendali
              </p>
              <p>
                <strong>MCP Server</strong> come skill standard per collegare tool
              </p>
            </div>

            <div className="bo-agent-card">
              <h2>Un layer operativo sopra modelli, dati, skill e processi.</h2>
              <div className="bo-tags">
                <span>LLM routing</span>
                <span>Memory</span>
                <span>RAG</span>
                <span>Duty</span>
                <span>Skill</span>
                <span>MCP Server</span>
                <span>Voice BOT</span>
                <span>Guardrail</span>
              </div>
              <p>
                La piattaforma separa il cervello dell'agente dal suo ruolo, dai dati che puo consultare, dagli strumenti
                che puo usare e dai processi che puo eseguire. Questo permette di cambiare modello, aggiungere skill,
                limitare permessi o collegare nuovi sistemi senza riscrivere l'intero agente.
              </p>
              <div className="bo-overview-grid">
                {architectureBlocks.map((block) => (
                  <article key={block.number}>
                    <span>{block.number} · Architettura</span>
                    <h3>{block.title}</h3>
                    <p>{block.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bo-section" id="architettura">
          <div className="bo-container">
            <p className="bo-kicker">A · Architettura</p>
            <h2>Quattro componenti centrali per agenti realmente operativi.</h2>
            <p className="bo-muted">
              TeraBrain non vincola ogni agente allo stesso modello o allo stesso comportamento. Ogni agente viene
              composto scegliendo LLM, memoria, duty e skill in funzione del ruolo operativo da svolgere.
            </p>
            <img
              className="bo-wide-image"
              src={`${base}/platform-assets/architecture-infographic.svg`}
              alt="Infografica architettura TeraBrain: LLM, memoria RAG, duty, skill MCP Server e Voice BOT"
            />
            <div className="bo-two-col">
              <div>
                <h3>LLM, memoria e duty</h3>
                <ul>
                  <li>LLM differenziati per agente, task, costo, latenza, qualita e contesto.</li>
                  <li>Fallback automatici e routing verso modelli piu adatti al tipo di richiesta.</li>
                  <li>Memoria breve per la conversazione e memoria lunga per preferenze, storico e stato processo.</li>
                  <li>RAG su knowledge base, documenti, CRM, ERP, ticket, offerte, policy e dati strutturati.</li>
                  <li>Duty esplicito: ruolo, compiti, responsabilita, confini, tono, escalation e KPI.</li>
                </ul>
              </div>
              <div>
                <h3>Skill, MCP Server e Voice BOT</h3>
                <ul>
                  <li>Skill operative assegnate solo agli agenti autorizzati.</li>
                  <li>MCP Server per collegare tool e sistemi con un'interfaccia standard agent-ready.</li>
                  <li>Connettori API verso CRM, ERP, database, documenti, email, calendario e workflow.</li>
                  <li>Voice BOT per conversazioni inbound/outbound con trascrizione e sintesi automatica.</li>
                  <li>Logging, osservabilita e policy applicate a ogni chiamata tool e a ogni azione.</li>
                </ul>
              </div>
            </div>
            <div className="bo-overview-grid">
              {skillGroups.map(([name, body]) => (
                <article key={name}>
                  <span>Skill</span>
                  <h3>{name}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <a className="bo-back" href="#top">Torna alla top / menu</a>
          </div>
        </section>

        <section className="bo-section" id="agents">
          <div className="bo-container">
            <p className="bo-kicker">B · Agents AI</p>
            <h2>Come viene configurato un agente TeraBrain.</h2>
            <p className="bo-muted">
              Un agente e una combinazione governata di modello, ruolo, strumenti, memoria, processi e regole. La
              configurazione rende l'agente utile, controllabile, auditabile e migliorabile nel tempo.
            </p>
            <img
              className="bo-wide-image"
              src={`${base}/platform-assets/agent-config-infographic.svg`}
              alt="Infografica configurazione agent: LLM, duty, skill, guardrail, processi e scheduling"
            />
            <div className="bo-overview-grid">
              {agentConfig.map(([name, body]) => (
                <article key={name}>
                  <span>Agent config</span>
                  <h3>{name}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div className="bo-two-col">
              <div>
                <h3>Guardrail e controllo</h3>
                <ul>
                  <li>Permessi per dati, tool e azioni configurati per singolo agente.</li>
                  <li>Blocco o richiesta di approvazione per azioni economiche, legali, HR o sensibili.</li>
                  <li>Output verificabili, log completi, motivazione delle decisioni e audit trail.</li>
                  <li>Escalation a un referente umano quando il task supera il duty dell'agente.</li>
                </ul>
              </div>
              <div>
                <h3>Processi e scheduling</h3>
                <ul>
                  <li>Trigger da eventi, email, CRM, ERP, ticket, chiamate, calendario o monitor periodici.</li>
                  <li>Task ricorrenti per report, follow-up, controlli, reminder e sincronizzazioni.</li>
                  <li>Stati di processo, code, retry, SLA e notifiche automatiche.</li>
                  <li>Collaborazione tra agenti con handoff e memoria condivisa controllata.</li>
                </ul>
              </div>
            </div>
            <a className="bo-back" href="#top">Torna alla top / menu</a>
          </div>
        </section>

        <section className="bo-section" id="orchestrazione">
          <div className="bo-container">
            <p className="bo-kicker">C · Orchestrazione dei processi</p>
            <h2>Dalla richiesta al risultato, con ruoli e passaggi tracciati.</h2>
            <p className="bo-muted">
              L'orchestrazione coordina agenti, skill, sistemi e persone. Non lascia il modello libero di improvvisare:
              definisce flussi, controlli, dati necessari, condizioni di uscita e responsabilita.
            </p>
            <img
              className="bo-wide-image"
              src={`${base}/platform-assets/process-orchestration-infographic.svg`}
              alt="Infografica orchestrazione processi: intake, routing, execution, control, handoff e learning"
            />
            <div className="bo-overview-grid">
              {orchestrationSteps.map(([name, body]) => (
                <article key={name}>
                  <span>Process flow</span>
                  <h3>{name}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <a className="bo-back" href="#top">Torna alla top / menu</a>
          </div>
        </section>

        <section className="bo-section bo-next" id="cooperazione">
          <div className="bo-container">
            <p className="bo-kicker">D · Cooperazione multi-piattaforma</p>
            <h2>TeraBrain coopera con agenti di altre piattaforme.</h2>
            <p className="bo-muted">
              L'azienda non avra un solo agente e una sola piattaforma. TeraBrain e progettata per collaborare con
              agenti esterni, applicazioni SaaS, automation platform, workflow engine e assistenti AI gia presenti in
              azienda.
            </p>
            <img
              className="bo-wide-image"
              src={`${base}/platform-assets/multi-platform-infographic.svg`}
              alt="Infografica cooperazione multi-piattaforma: TeraBrain, agenti esterni, SaaS, automation, API e MCP Server"
            />
            <div className="bo-two-col">
              <div>
                <h3>Modalita di cooperazione</h3>
                <ul>
                  <li>API e webhook per invocare o essere invocata da sistemi esterni.</li>
                  <li>MCP Server per esporre tool, dati e capacita in modo standardizzato.</li>
                  <li>Handoff verso agenti verticali di altre piattaforme quando hanno competenze specialistiche.</li>
                  <li>Sincronizzazione con CRM, ERP, ticketing, document management e automation suite.</li>
                  <li>Scambio di contesto controllato, con minimizzazione dei dati e policy di accesso.</li>
                </ul>
              </div>
              <div>
                <h3>Ruolo di TeraBrain</h3>
                <p>
                  TeraBrain puo agire da control plane operativo: riceve richieste, assegna task, coordina agenti
                  interni ed esterni, mantiene memoria e audit e garantisce che ogni passaggio resti aderente al
                  processo aziendale.
                </p>
                <p>
                  In questo modo gli agenti non sono isole separate: diventano una rete governata di colleghi digitali
                  che cooperano con persone, sistemi e piattaforme diverse.
                </p>
              </div>
            </div>
            <div className="bo-contact">
              <h3>Platform ready for agents</h3>
              <p>
                La piattaforma TeraBrain e pensata per creare, configurare, orchestrare e monitorare agenti operativi
                connessi a dati, processi e strumenti reali.
              </p>
            </div>
            <a className="bo-back" href="#top">Torna alla top / menu</a>
          </div>
        </section>
      </main>
    </div>
  );
}
