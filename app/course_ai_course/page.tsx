const lessons = [
  {
    badge: "Lezione 1",
    meta: "25 slide · AI Act",
    theme: "theme-orange",
    title: "AI Act: quadro normativo, logica del rischio e cantieri di adeguamento",
    summary:
      "La prima lezione fornisce una lettura ampia e strutturata dell'AI Act europeo: filosofia risk-based, pratiche vietate, sistemi ad alto rischio, obblighi di trasparenza e GPAI. La seconda parte traduce il quadro normativo in cantieri concreti per l'impresa: AI literacy, policy interna, dati e riservatezza, procurement AI, governance e mappatura dei sistemi.",
    bullets: [
      "Aiuta a comprendere il regolamento come architettura di governance e non come semplice adempimento.",
      "Collega il principio di proporzionalità alla realtà dei casi d'uso aziendali.",
      "Trasforma il quadro normativo in un percorso di adeguamento organizzativo."
    ],
    objective: "Fornire una chiave di lettura chiara dell'AI Act e tradurla in azioni concrete per l'azienda.",
    focus: "Normativa AI Act, risk-based approach, classificazione, literacy, policy, procurement e governance interna.",
    actions: ["Apri la lezione 1"]
  },
  {
    badge: "Lezione 2",
    meta: "8 slide · Casi ad alto rischio",
    theme: "theme-rose",
    title: "AI Act: casi di esempio ad alto rischio",
    summary:
      "La seconda lezione approfondisce quattro casi pratici ad alto impatto: screening CV e selezione candidati, valutazione lavoratori, sistemi che influenzano accesso a opportunità o servizi e supporti decisionali in contesti sensibili. Ogni esempio viene letto con un taglio operativo, mettendo in evidenza scenario, rischio, domande di governance, controlli richiesti e criteri di valutazione finale.",
    bullets: [
      "Mostra come il rischio emerga quando l'AI valuta persone o influenza opportunità concrete.",
      "Aiuta a tradurre il quadro normativo in casi aziendali immediatamente comprensibili.",
      "Offre una griglia pratica per leggere selezione, valutazione, accesso e decision support in chiave AI Act."
    ],
    objective: "Far comprendere in modo concreto quando un sistema AI entra in zone sensibili e quali presidi servono per governarlo correttamente.",
    focus: "Recruitment, worker management, accesso a servizi, supporti decisionali sensibili, controlli e supervisione reale.",
    actions: ["Apri la lezione 2"]
  },
  {
    badge: "Lezione 3",
    meta: "14 slide · Executive governance",
    theme: "theme-cyan",
    title: "AI e responsabilità del vertice aziendale",
    summary:
      "La terza lezione è dedicata a CEO, Direzione Generale e Consiglio di Amministrazione. Analizza il rapporto tra AI, assetti organizzativi, rischio, responsabilità e doveri di supervisione, con un taglio executive e non tecnico. Il focus è sul ruolo del vertice nel pretendere visibilità, attivare presidi, strutturare il reporting e rendere l'adozione dell'AI difendibile nel tempo.",
    bullets: [
      "Chiarisce perché l'AI sale automaticamente al livello della governance.",
      "Mostra come leggere il tema in termini di assetti, controlli, reporting e accountability.",
      "Aiuta il vertice a capire quali domande porre e quali presidi richiedere."
    ],
    objective: "Aiutare il vertice a comprendere responsabilità, rischi e leve di governo nell'onboarding dell'AI nei processi aziendali.",
    focus: "CEO, CdA, supervisione, responsabilità, reporting, assetti organizzativi e presidio del rischio.",
    actions: ["Apri la lezione 3"]
  }
];

export default function CourseAiCoursePage() {
  return (
    <div className="course-page">
      <header className="course-topbar">
        <div className="course-topbar-inner">
          <div className="course-brand">
            <div className="course-brand-dot" />
            <strong>AI ACT COURSE</strong>
            <span>Governance, rischio e responsabilità aziendale</span>
          </div>
          <a className="course-voice-cta" href="tel:0459812721">
            Chiama 0459812721 · Federico Virtual Tutor
          </a>
        </div>
      </header>

      <section className="course-hero">
        <div className="course-hero-grid">
          <div className="course-hero-main">
            <div className="course-kicker">Corso AI ACT per management, compliance e governance</div>
            <h1>AI ACT Governance Program</h1>
            <p className="course-lead">
              Un percorso focalizzato sull'AI ACT europeo, sulla logica del rischio, sui casi ad alto impatto e sulle responsabilità del
              vertice aziendale. Le lezioni sono progettate per aiutare management, compliance, HR, IT e funzioni di controllo a trasformare
              il quadro normativo in presidi operativi concreti.
            </p>
          </div>
          <div className="course-hero-side">
            <div className="course-side-box">
              <h3>Obiettivo del corso</h3>
              <p>
                Aiutare manager, imprenditori, professionisti e team aziendali a leggere l'AI ACT come architettura di governance, distinguendo
                obblighi, rischi, controlli, responsabilità e cantieri di adeguamento realmente necessari.
              </p>
            </div>
            <div className="course-stats">
              <div className="course-stat">
                <strong>3</strong>
                <span>Lezioni AI ACT</span>
              </div>
              <div className="course-stat">
                <strong>1</strong>
                <span>Modulo casi</span>
              </div>
              <div className="course-stat">
                <strong>45+</strong>
                <span>Slide web</span>
              </div>
            </div>
            <div className="course-side-box">
              <h3>Didattica</h3>
              <p>
                Ogni modulo è disponibile in HTML, con spiegazioni estese, struttura leggibile anche in autonomia e una navigazione pensata
                per aula, ripasso, studio individuale e confronto interno sui presidi di governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="course-info">
        <div className="course-goal-box">
          <h2>Obiettivo generale del percorso</h2>
          <p>
            Il corso accompagna i partecipanti in una progressione chiara: prima si comprende la struttura dell'AI ACT e la sua logica
            risk-based; poi si entra nei casi concreti ad alto rischio; infine si affrontano responsabilità del vertice, assetti organizzativi,
            reporting, supervisione e accountability.
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
            Il questionario può includere domande teoriche, casi applicativi, classificazione dei rischi, governance dei sistemi AI, controlli,
            responsabilità manageriali e criteri di adozione responsabile.
          </p>
        </div>
      </section>

      <section className="course-info course-info-compact">
        <div className="course-path-box">
          <h2>Struttura del percorso</h2>
          <p>
            Il programma si sviluppa in tre lezioni rinumerate. La Lezione 1 affronta AI ACT, quadro normativo, logica del rischio e cantieri
            di adeguamento. La Lezione 2 mantiene il modulo di approfondimento sui casi ad alto rischio, trasformandolo in una lezione autonoma.
            La Lezione 3 chiude il percorso con responsabilità del vertice aziendale, assetti organizzativi, reporting e supervisione.
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

      <div className="course-footer">Home page del corso AI ACT · panoramica delle lezioni, obiettivi formativi e accesso riservato ai moduli HTML.</div>
    </div>
  );
}
