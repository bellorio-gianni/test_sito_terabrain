export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type BlogArticle = {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  sourceUrl?: string;
  content: BlogContentBlock[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "ai-agents-telefonia-aziendale-centralini-cognitivi",
    title: "L’AI Agents Entrano nella Telefonia Aziendale: l’Inizio dell’Era dei Centralini Cognitivi",
    date: "2025-12-06",
    category: "Voice AI",
    author: "TeraBrain",
    excerpt:
      "Un cambiamento strutturale che ridefinisce customer care, operation e produttività: la telefonia diventa workflow e il centralino diventa agente cognitivo.",
    image: "/blog-assets/centralini-cognitivi.jpg",
    imageAlt: "Operatore al telefono con agenti AI in un contact center",
    sourceUrl:
      "https://www.linkedin.com/pulse/lai-agents-entrano-nella-telefonia-aziendale-linizio-dellera-dei-lqirf/",
    content: [
      {
        type: "paragraph",
        text: "Un cambiamento strutturale che ridefinisce customer care, operation e produttività."
      },
      {
        type: "paragraph",
        text: "Per oltre vent'anni la telefonia aziendale è rimasta sorprendentemente immobile. Centralini più moderni, più flessibili, più cloud... ma sempre con la stessa logica: rispondere, instradare, attendere."
      },
      {
        type: "paragraph",
        text: "Nel 2025 sta accadendo qualcosa di diverso."
      },
      {
        type: "paragraph",
        text: "Qualcosa di strutturale, non cosmetico. Secondo un recente studio di MIT Technology Review, più del 46% delle aziende globali sta introducendo sistemi di AI conversazionale direttamente nei flussi telefonici, trasformando la gestione delle chiamate in un vero processo di automazione intelligente. McKinsey segnala che l'impiego di agenti AI nei contact center può ridurre i tempi medi di gestione fino al 30-45%, migliorando la customer experience e liberando capacità operativa nei team (“The State of AI in 2025”). Gartner va oltre: entro il 2026, il 60% delle comunicazioni inbound delle aziende sarà gestito inizialmente da un agente AI, non da un essere umano."
      },
      {
        type: "quote",
        text: "La telefonia non è più un canale. È un workflow."
      },
      {
        type: "quote",
        text: "Il centralino non è più un dispositivo. È un agente cognitivo."
      },
      {
        type: "heading",
        text: "Perché questa trasformazione sta esplodendo a livello mondiale"
      },
      {
        type: "paragraph",
        text: "Ci sono tre fattori globali che stanno convergendo in modo potente:"
      },
      {
        type: "list",
        items: [
          "La saturazione dei canali digitali: mentre email, chat e ticket aumentano, la voce resta il canale preferito per richieste critiche. Ma non ci sono abbastanza persone per gestirle.",
          "La carenza di personale qualificato: secondo Accenture, il 74% delle aziende europee fatica a trovare risorse con competenze adeguate nei servizi al cliente e nelle operation. La telefonia è uno dei reparti più colpiti.",
          "L'evoluzione dell'AI verso sistemi agentici: gli LLM non sono più “motori linguistici”: stanno diventando agenti operativi capaci di agire, non solo di rispondere. Il telefono è il primo territorio dove questo cambiamento è immediatamente percepibile."
        ]
      },
      {
        type: "paragraph",
        text: "È una trasformazione globale, trasversale e soprattutto irreversibile."
      },
      {
        type: "heading",
        text: "Centralini cognitivi: come funzionano davvero"
      },
      {
        type: "paragraph",
        text: "Un sistema telefonico cognitivo non si limita a “parlare”. Lavora: gestisce conversazioni reali, comprende contesto, analizza intenzioni, recupera dati dai sistemi aziendali e prende decisioni operative in tempo reale."
      },
      {
        type: "paragraph",
        text: "Un centralino AI può:"
      },
      {
        type: "list",
        items: [
          "Riconoscere automaticamente chi sta chiamando, identificando il cliente e il suo storico.",
          "Comprendere la richiesta con linguaggio naturale, interpretando tono, intenzione e bisogno reale.",
          "Verificare in tempo reale ordini, appuntamenti, consegne e documenti, accedendo ai sistemi interni.",
          "Rispondere in autonomia in modo preciso e contestuale, gestendo l'intera interazione senza intervento umano.",
          "Svolgere attività operative come invio email, pianificazione appuntamenti, creazione ticket, promozione prodotti e aggiornamento del CRM.",
          "Indirizzare la chiamata alla persona giusta solo quando necessario, con trasferimenti intelligenti e controllati.",
          "Registrare e sintetizzare automaticamente la conversazione, generando log chiari e utilizzabili."
        ]
      },
      {
        type: "paragraph",
        text: "Non è un “bot telefonico”. È un collega digitale specializzato nel canale voce."
      },
      {
        type: "heading",
        text: "Il ruolo di TeraBrain: VoiceBOT SIP nativo e routing intelligente"
      },
      {
        type: "paragraph",
        text: "Mentre molti player stanno iniziando ora a sperimentare l'AI nella telefonia, la piattaforma TeraBrain ha già integrato nativamente un VoiceBOT con supporto SIP e capacità agentiche avanzate."
      },
      {
        type: "paragraph",
        text: "Questo significa:"
      },
      {
        type: "list",
        items: [
          "Risposte naturali e immediate, con tono umano e contestuale.",
          "Comprensione del linguaggio senza menu o tasti, dialogo libero e fluido.",
          "Accesso diretto ai sistemi aziendali: CRM, ERP, SQL, O365 e documenti.",
          "Gestione autonoma dell'intera conversazione, anche in scenari complessi.",
          "Messa in pausa con musica di attesa, quando serve raccogliere informazioni.",
          "Gestione elegante di rifiuti o indisponibilità, proponendo alternative.",
          "Trasferimenti intelligenti e controllati ai referenti umani, solo quando necessario.",
          "Log dettagliato e sintesi automatica della chiamata, pronti per CRM.",
          "Apprendimento continuo dal contesto, migliorando accuratezza e tempi di risposta."
        ]
      },
      {
        type: "quote",
        text: "La telefonia non risponde più: lavora."
      },
      {
        type: "heading",
        text: "Telefonate outbound: quando è l'AI a chiamare"
      },
      {
        type: "paragraph",
        text: "Le chiamate outbound sono fondamentali per molte aziende: conferme appuntamenti, solleciti, follow-up commerciali, verifiche di consegne, raccolta feedback. Il problema? Servono tempo, continuità e precisione."
      },
      {
        type: "paragraph",
        text: "Gli Agenti AI TeraBrain possono gestirle in autonomia e seguendo processi definiti:"
      },
      {
        type: "list",
        items: [
          "Avviano campagne outbound programmate, su liste e segmenti definiti.",
          "Personalizzano il dialogo in base al cliente, usando dati e storico in tempo reale.",
          "Consultano CRM/ERP istantaneamente, per verifiche su ordini, fatture e appuntamenti.",
          "Aggiornano i sistemi dopo ogni chiamata, registrando esito, note e next step.",
          "Inviano follow-up automatici via email, SMS o notifiche interne.",
          "Trasferiscono all'operatore solo se necessario, con passaggio contestuale e controllato."
        ]
      },
      {
        type: "heading",
        text: "Perché è un vantaggio competitivo per le aziende"
      },
      {
        type: "paragraph",
        text: "Secondo dati pubblicati da Zendesk e CallMiner:"
      },
      {
        type: "list",
        items: [
          "Il 76% dei clienti preferisce ancora la voce quando il problema è critico.",
          "Il 67% delle aziende dichiara carenza di personale nei contact center.",
          "Il 54% delle chiamate ripetute è dovuto a mancanza di accesso immediato ai dati."
        ]
      },
      {
        type: "paragraph",
        text: "Ecco perché l'AI nella telefonia non è un optional: è un acceleratore operativo. Riduce tempi, aumenta qualità, evita errori, abbatte i costi e garantisce continuità anche fuori orario."
      },
      {
        type: "paragraph",
        text: "Se vuoi approfondire come integrare AI nella telefonia della tua azienda, TeraBrain può trasformare il canale voce in un processo operativo intelligente."
      }
    ]
  }
];

export function getArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
