const lessons = [
  {
    badge: "Lezione 1",
    meta: "22 slide · Fondamenti",
    theme: "theme-orange",
    title: "Intelligenza Artificiale: introduzione e concetti base",
    summary:
      "La prima lezione costruisce una base chiara e compatta per comprendere cosa sia davvero l'AI e come distinguerla da automazione e software tradizionale. Il percorso affronta contesto e hype, definizione di AI, differenze rispetto al software classico, principali famiglie tecnologiche e impatto sul business.",
    bullets: [
      "Spiega perché oggi tutti parlano di AI e come separare hype e realtà.",
      "Introduce il lessico comune che prepara alle lezioni su LLM, prompt engineering e agenti.",
      "Mostra che il valore reale emerge nei processi e non nella sola dimostrazione tecnologica."
    ],
    objective: "Costruire una base concettuale solida per leggere l'evoluzione dell'AI con maggiore lucidità e spirito critico.",
    focus: "AI basics, software vs AI, automazione, famiglie AI, valore e limiti trasformativi.",
    actions: ["Apri la lezione 1"]
  },
  {
    badge: "Lezione 2",
    meta: "22 slide · LLM, RAG, Agents",
    theme: "theme-cyan",
    title: "LLM e AI Agents per il business",
    summary:
      "La seconda lezione accompagna dai fondamenti dei large language model fino all'impatto operativo degli AI Agents nei processi aziendali. Affronta definizione e training degli LLM, token e transformer, limiti del modello, ruolo del RAG per collegare l'AI ai documenti e ai dati interni, e infine il passaggio dagli assistenti conversazionali agli agenti con tools, memoria e orchestrazione.",
    bullets: [
      "Spiega come funzionano gli LLM e perché il contesto aziendale richiede estensioni come il RAG.",
      "Mostra il passaggio da modello linguistico ad agente capace di agire nei workflow.",
      "Collega tecnologia, organizzazione e use case di business."
    ],
    objective:
      "Capire cosa sono gli LLM, come si collegano alla conoscenza aziendale e perché gli AI Agents rappresentano il salto operativo successivo.",
    focus: "LLM, token, transformer, RAG, memoria, tools, agenti e impatto organizzativo.",
    actions: ["Apri la lezione 2"]
  },
  {
    badge: "Lezione 3",
    meta: "20 slide · Metodo operativo",
    theme: "theme-violet",
    title: "Prompt Engineering per il business",
    summary:
      "Questa lezione presenta il prompt engineering come disciplina progettuale, non come semplice tecnica di scrittura. Vengono affrontati fondamenti, struttura pratica dei prompt, tecniche operative, errori più comuni, best practice ed esempi di impiego in contesto business, con un messaggio centrale: la qualità dell'output dipende dalla qualità dell'input.",
    bullets: [
      "Mostra che un prompt efficace assomiglia più a un brief strutturato che a una domanda generica.",
      "Introduce metodo, contesto, formato e criteri di controllo per ottenere risultati più affidabili.",
      "Collega i prompt ai workflow e agli AI Agents, non solo alla chat."
    ],
    objective: "Capire come progettare prompt efficaci per ottenere output più affidabili, controllabili e utili nei processi aziendali.",
    focus: "Fondamenti del prompt engineering, struttura dei prompt, tecniche operative, best practice e casi d'uso business.",
    actions: ["Apri la lezione 3", "Apri il modulo esempi"]
  },
  {
    badge: "Modulo pratico",
    meta: "9 slide · Scenario commerciale",
    theme: "theme-rose",
    title: "Esempi di Prompt Engineering in area commerciale",
    summary:
      "Questo modulo aggiuntivo utilizza un unico scenario sales per confrontare tecniche diverse di prompting e rendere immediatamente visibili differenze di logica, controllo e risultato atteso. È pensato come laboratorio pratico di accompagnamento alla Lezione 3.",
    bullets: [
      "Confronta più tecniche sullo stesso contesto commerciale.",
      "Aiuta a capire quando usare prompt zero-shot, strutturati e orientati al controllo.",
      "Traduce il metodo in casi d'uso concreti per attività sales."
    ],
    objective: "Rendere immediatamente operative le tecniche di prompting, mostrando l'effetto che struttura e contesto hanno sul risultato.",
    focus: "Esempi sales, confronto tra tecniche, scenario unico, orientamento al business.",
    actions: ["Apri il modulo esempi"]
  },
  {
    badge: "Lezione 4",
    meta: "23 slide · Agent Design",
    theme: "theme-green",
    title: "AI Agents e progettazione di sistemi operativi agentici",
    summary:
      "La quarta lezione porta il corso dal prompt al sistema. Spiega come progettare AI Agents operativi nei processi aziendali, distinguendo LLM, assistente conversazionale e agente vero e proprio. Approfondisce componenti dell'agente, memoria, tools, regole, workflow, controllo, logiche mono-agent e multi-agent, con un forte orientamento all'esecuzione di attività reali.",
    bullets: [
      "Chiarisce il salto dalla conversazione con l'AI all'esecuzione di compiti concreti.",
      "Mostra quali componenti servono a un agente per lavorare davvero nei processi.",
      "Introduce la progettazione di workflow agentici e il tema della governance operativa."
    ],
    objective: "Capire come unire modello, dati, memoria, strumenti e regole in un sistema AI realmente operativo.",
    focus: "AI Agents, tools, memoria, guardrail, workflow, orchestrazione e use case enterprise.",
    actions: ["Apri la lezione 4"]
  }
];

export default function AiAgentsPlatformPage() {
  return (
    <div className="course-page">
      <header className="course-topbar">
        <div className="course-topbar-inner">
          <div className="course-brand">
            <div className="course-brand-dot" />
            <strong>AI AGENTS PLATFORM</strong>
            <span>AI Business Transformation Program</span>
          </div>
          <a className="course-voice-cta" href="tel:0459812721">
            Chiama 0459812721 · Federico Virtual Tutor
          </a>
        </div>
      </header>

      <section className="course-hero">
        <div className="course-hero-grid">
          <div className="course-hero-main">
            <div className="course-kicker">Percorso formativo per business, management e innovazione</div>
            <h1>AI Agents Platform</h1>
            <p className="course-lead">
              Un percorso strutturato per comprendere l'intelligenza artificiale dalla base concettuale fino agli agenti AI. Le lezioni
              sono progettate per un pubblico aziendale e combinano fondamenti, architetture, metodo operativo, casi d'uso e presidi di
              governance.
            </p>
          </div>
          <div className="course-hero-side">
            <div className="course-side-box">
              <h3>Obiettivo del corso</h3>
              <p>
                Aiutare manager, imprenditori, professionisti e team aziendali a leggere l'AI come leva concreta di trasformazione dei
                processi, distinguendo hype e valore reale, comprendendo modelli, agenti, regole di utilizzo e responsabilità organizzative.
              </p>
            </div>
            <div className="course-stats">
              <div className="course-stat">
                <strong>4</strong>
                <span>Lezioni principali</span>
              </div>
              <div className="course-stat">
                <strong>1</strong>
                <span>Modulo esempi</span>
              </div>
              <div className="course-stat">
                <strong>90+</strong>
                <span>Slide web</span>
              </div>
            </div>
            <div className="course-side-box">
              <h3>Didattica</h3>
              <p>
                Ogni modulo è disponibile in HTML, con spiegazioni estese, struttura leggibile anche in autonomia e una navigazione pensata
                per aula, ripasso e studio individuale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="course-info">
        <div className="course-goal-box">
          <h2>Obiettivo generale del percorso</h2>
          <p>
            Il corso accompagna i partecipanti in una progressione chiara: prima si costruisce una base comune sull'AI e sulle sue famiglie
            tecnologiche; poi si entra nei large language model, nel retrieval e negli agenti; successivamente si affronta il prompt
            engineering come metodo; infine si approfondisce il design degli agenti AI e la loro integrazione nei workflow.
          </p>
        </div>
        <div className="course-notice-box">
          <h2>Questionario di apprendimento via email</h2>
          <p>
            Al termine del percorso, o anche dopo singole lezioni, i partecipanti possono ricevere via email un questionario di verifica
            dell'apprendimento. Il test serve a consolidare i concetti chiave, misurare il livello di comprensione e favorire un confronto
            più strutturato sui contenuti affrontati.
          </p>
          <p>
            Il questionario può includere domande teoriche, casi applicativi, confronto tra approcci tecnologici e criteri di utilizzo
            dell'AI nei processi aziendali.
          </p>
        </div>
      </section>

      <section className="course-info course-info-compact">
        <div className="course-path-box">
          <h2>Struttura del percorso</h2>
          <p>
            Il programma si sviluppa in quattro lezioni principali e un modulo aggiuntivo di approfondimento pratico. La Lezione 1 costruisce
            il lessico di base e distingue AI, automazione e software tradizionale. La Lezione 2 entra in LLM, RAG e AI Agents, mostrando il
            passaggio dal modello al sistema operativo aziendale. La Lezione 3 presenta il prompt engineering come disciplina metodologica,
            mentre il modulo esempi collega le tecniche a scenari commerciali concreti. La Lezione 4 approfondisce il design degli agenti AI
            e la loro integrazione nei workflow.
          </p>
        </div>
      </section>

      <section className="course-lessons">
        <div className="course-lessons-head">
          <h2>Panoramica delle lezioni</h2>
          <p>
            Ogni scheda riassume contenuto, focus e obiettivo didattico del modulo. I pulsanti aprono la popup di login per accedere al
            dettaglio delle lezioni.
          </p>
        </div>

        <div className="course-lesson-grid">
          {lessons.map((lesson) => (
            <article className={`course-lesson-card ${lesson.theme}`} key={lesson.title}>
              <div className="course-lesson-top">
                <span className="course-badge">{lesson.badge}</span>
                <span className="course-meta">{lesson.meta}</span>
              </div>
              <h3>{lesson.title}</h3>
              <div className="course-lesson-summary">{lesson.summary}</div>
              <ul className="course-lesson-bullets">
                {lesson.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="course-mini-panels">
                <div className="course-mini">
                  <h4>Obiettivo</h4>
                  <p>{lesson.objective}</p>
                </div>
                <div className="course-mini">
                  <h4>Focus</h4>
                  <p>{lesson.focus}</p>
                </div>
              </div>
              <div className="course-actions">
                {lesson.actions.map((action, index) => (
                  <button className={index === 0 ? "course-lesson-link" : "course-lesson-link secondary"} data-open-login type="button" key={action}>
                    {action}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="course-footer">Home page del corso AI · panoramica delle lezioni, obiettivi formativi e accesso riservato ai moduli HTML.</div>
    </div>
  );
}
