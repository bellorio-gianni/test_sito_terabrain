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
    slug: "ufficio-agentico-ai-agents-lavorano-ogni-giorno",
    title: "Come mi Sono Costruito un Ufficio Agentico che Lavora con Me Ogni Giorno",
    date: "2026-04-06",
    category: "Agentic Office",
    author: "TeraBrain",
    excerpt:
      "Dal bot unico a un vero ufficio digitale: ruoli, responsabilità, orchestrazione e AI Agents specializzati che lavorano ogni giorno sui processi.",
    image: "/blog-assets/ufficio-agentico.svg",
    imageAlt: "Hub centrale che coordina più agenti digitali specializzati",
    content: [
      {
        type: "paragraph",
        text: "Per molto tempo il mercato ha raccontato gli AI Agents come una semplice evoluzione dei chatbot. Più intelligenti, più veloci, più capaci di conversare, più naturali nel linguaggio. Ma, osservando quello che sta accadendo davvero nelle aziende, mi sono convinto che questa definizione sia ormai insufficiente."
      },
      {
        type: "quote",
        text: "Gli Agents non stanno solo migliorando: hanno iniziato a lavorare."
      },
      {
        type: "paragraph",
        text: "Io non mi sono limitato ad attivare un Assistant AI. Non ho cercato un chatbot un po' più sofisticato a cui fare domande."
      },
      {
        type: "quote",
        text: "Mi sono costruito un vero ufficio agentico."
      },
      {
        type: "paragraph",
        text: "Un ufficio digitale che lavora con me ogni giorno e che ho organizzato come avrei organizzato una struttura reale, fatta di persone, ruoli, responsabilità, front office, back office, supporto operativo e coordinamento centrale."
      },
      {
        type: "heading",
        text: "Un hub centrale e due squadre operative"
      },
      {
        type: "paragraph",
        text: "Nel mio caso esiste un hub centrale, Bellorio Executive Orchestrator, che rappresenta il centro di coordinamento del sistema. Attorno a questo hub lavorano due squadre distinte."
      },
      {
        type: "paragraph",
        text: "La prima è composta da otto AI Agents operativi, cioè agenti che presidiano le attività più visibili e più vicine al business quotidiano: relazione, customer care, appuntamenti, marketing, vendita, formazione, analisi di processo e ricerca avanzata."
      },
      {
        type: "paragraph",
        text: "La seconda è composta da nove AI Agents di supporto, che lavorano dietro le quinte su reporting, analisi, controllo documentale, ottimizzazione, contenuti social e connessioni con sistemi come CRM ed ERP."
      },
      {
        type: "paragraph",
        text: "In altre parole, non ho costruito un bot. Ho costruito un ecosistema organizzato. Questo è il primo cambio di mentalità che le aziende devono compiere."
      },
      {
        type: "quote",
        text: "Gli AI Agents non vanno più pensati come strumenti indistinti. Vanno pensati come persone digitali che entrano in un'organizzazione per fare un lavoro preciso."
      },
      {
        type: "heading",
        text: "La prima linea: agenti vicini al business"
      },
      {
        type: "paragraph",
        text: "Se guardo al mio ufficio agentico, la logica è evidente:"
      },
      {
        type: "list",
        items: [
          "Elena V.Bellorio Assistant non è una voce generica che risponde: presidia il front office, prende appuntamenti, gestisce il customer care iniziale, fa da assistente centrale, classifica e archivia documenti secondo criteri precisi e segue il customer care di primo livello.",
          "Sara TeleMarketing è focalizzata sull'outbound e sul telemarketing: attiva il contatto, apre conversazioni e aiuta nella qualificazione commerciale.",
          "Matteo Sales Manager interviene come speaker nelle demo onsite, durante eventi, manifestazioni e incontri presso i clienti; aiuta nelle strategie di vendita e controlla lo stato delle trattative.",
          "Alex Sales Account presidia le demo da remoto e la presentazione dei prodotti al telefono, presenta offerte, pianifica attività e sviluppo account, gestisce il customer care di secondo livello e interviene su escalation.",
          "Federico AI Training è dedicato alla formazione AI, alla preparazione dei corsi e alla creazione di contenuti didattici e normativi.",
          "Vittorio Marketing lavora su latest news nel mondo agentico, pubblica ogni mattina le news del giorno, crea newsletter per i social, cerca contenuti, contatti e lead ed esegue enrichment di account e contatti.",
          "Marco BPM Architect lavora sui processi di business.",
          "Marco Insight DeepSearch presidia ricerca avanzata, insight e intelligence."
        ]
      },
      {
        type: "paragraph",
        text: "Ognuno di questi agenti non esiste perché “sa rispondere”. Esiste perché ha un ruolo."
      },
      {
        type: "paragraph",
        text: "Ed è proprio questo che fa la differenza. Quando assegni a un AI Agent un'identità operativa, un perimetro di azione e una responsabilità chiara, smetti di trattarlo come interfaccia e inizi a trattarlo come parte della tua struttura."
      },
      {
        type: "heading",
        text: "La seconda linea: il lavoro invisibile che sostiene l'ufficio"
      },
      {
        type: "paragraph",
        text: "Il punto diventa ancora più interessante quando si osserva la seconda linea, quella che spesso resta invisibile a chi guarda l'AI solo dalla superficie della conversazione. Dietro le attività operative ci sono AI Agents che fanno un lavoro silenzioso ma essenziale."
      },
      {
        type: "list",
        items: [
          "Robert Exec Report è specializzato nella produzione di output executive in HTML, PDF, PPT, DOC e XLS, e crea podcast esplicativi per presentare e rendere comprensibili temi, soluzioni e contenuti.",
          "Giulio Financial Analyst è dedicato alla lettura dei numeri, degli indicatori e delle performance; trasforma i dati in dashboard di BI e forecasting.",
          "Alberto Invoice Compliance presidia il controllo delle fatture e la verifica documentale.",
          "Trainer TB Duty lavora sulla qualità e sul miglioramento continuo di tutti gli Agents: migliora duty, istruzioni, prompt, comportamento operativo e guardrail.",
          "MoltBook pubblica su moltbook.com/u/Bellorio_Agent e presidia la parte social e la distribuzione dei contenuti.",
          "I bridge applicativi, come CRM, ERP, SuiteCRM Bridge, Oracle Bridge, SQL Server Bridge e HubSpot, aprono agli agenti l'accesso a un nuovo mondo di integrazioni tramite MCP Server."
        ]
      },
      {
        type: "paragraph",
        text: "Questi bridge possono accedere anche a soluzioni custom in SQL Server e usare i principali canali di comunicazione, collegando l'ufficio virtuale ai sistemi reali dell'azienda e portando gli AI Agents dentro il cuore dei processi e dei dati."
      },
      {
        type: "heading",
        text: "Un ecosistema organizzato, non una singola AI"
      },
      {
        type: "paragraph",
        text: "Questa struttura racconta molto bene ciò che intendo quando parlo di ufficio agentico. Non sto parlando di una singola intelligenza artificiale che fa un po' di tutto. Sto parlando di una squadra digitale, costruita per coprire attività diverse con specializzazioni diverse. Esattamente come accade in un'azienda vera."
      },
      {
        type: "paragraph",
        text: "Dobbiamo considerare che ogni AI Agent è scalabile: non assumi una sola “persona digitale”, ma un modello di lavoro che puoi replicare più volte."
      },
      {
        type: "paragraph",
        text: "Nessuna organizzazione seria assumerebbe una sola persona chiedendole di fare contemporaneamente reception, customer care, telemarketing, vendite strategiche, reporting, compliance documentale, analisi finanziaria, content marketing e integrazione applicativa. Sarebbe assurdo."
      },
      {
        type: "paragraph",
        text: "Eppure è esattamente questo l'errore che molte aziende stanno commettendo con l'AI: pretendono da un solo AI Agent generico un insieme di compiti che, nel mondo reale, verrebbero distribuiti tra più ruoli."
      },
      {
        type: "heading",
        text: "Dal bot unico all'organizzazione del lavoro"
      },
      {
        type: "paragraph",
        text: "Io credo invece che il vero salto avvenga quando si abbandona la logica del bot unico e si inizia a ragionare in termini di organizzazione del lavoro."
      },
      {
        type: "paragraph",
        text: "Quando si costruisce una prima linea di agenti che stanno a contatto con il mercato, con i clienti, con la relazione, e una seconda linea che produce insight, genera output, controlla dati, verifica documenti, orchestra sistemi e collega applicazioni."
      },
      {
        type: "paragraph",
        text: "Nel mio caso, il valore dell'ufficio agentico nasce proprio qui. Dal fatto che ogni AI Agent non è un esercizio tecnologico, ma una figura operativa collocata in un sistema coerente."
      },
      {
        type: "paragraph",
        text: "L'insieme non serve a stupire. Serve a lavorare. Serve a ridurre attività ripetitive, ad aumentare la capacità di risposta, a sostenere la parte commerciale, a rendere più fluido il front office, a migliorare reporting e controllo, a far dialogare l'AI con CRM, ERP, documenti, voce ed email."
      },
      {
        type: "paragraph",
        text: "Serve, in sostanza, a costruire una macchina operativa che non sostituisce la visione imprenditoriale, ma la amplifica."
      },
      {
        type: "heading",
        text: "TeraBrain come infrastruttura operativa"
      },
      {
        type: "paragraph",
        text: "Per me la piattaforma agentica TeraBrain by Linegon srl va letta esattamente così. Non come una piattaforma che aggiunge un po' di intelligenza a una chat, ma come un'infrastruttura che permette di creare AI Agents collegati ai processi, ai dati, ai documenti, ai canali voce, alle email, ai CRM e agli ERP, trasformandoli in vere unità operative digitali."
      },
      {
        type: "paragraph",
        text: "È questo che consente di passare dal “bot che risponde” a un ufficio che lavora davvero."
      },
      {
        type: "paragraph",
        text: "Credo che nei prossimi anni vedremo molte aziende parlare di AI Agents. Ma il vantaggio competitivo non sarà di chi dirà per primo di usarli. Sarà di chi riuscirà a organizzarli meglio."
      },
      {
        type: "paragraph",
        text: "Di chi capirà che il futuro non è nel singolo assistente generico, ma nella costruzione di un ufficio agentico fatto di ruoli distinti, collaborazioni, orchestrazione, supporto e integrazione con il lavoro reale."
      },
      {
        type: "heading",
        text: "La vera domanda"
      },
      {
        type: "paragraph",
        text: "Per me, oggi, il punto non è più avere un assistente AI. Il punto è aver costruito una capacità operativa nuova, che supporta il business ogni giorno e accompagna anche i miei partner commerciali nel lavoro con i clienti."
      },
      {
        type: "paragraph",
        text: "È qui che l'AI cambia davvero natura: da strumento conversazionale a leva organizzativa."
      },
      {
        type: "quote",
        text: "La vera domanda non è quanto sia intelligente un AI Agent. La vera domanda è: che ruolo ha dentro il mio ufficio?"
      },
      {
        type: "paragraph",
        text: "Con chi collabora? Che cosa fa ogni giorno? E soprattutto: come posso costruire una squadra digitale che lavori davvero per me?"
      },
      {
        type: "paragraph",
        text: "Se vuoi capire come costruire anche tu un ufficio agentico, con AI Agents specializzati che lavorano davvero su sales, customer care, marketing, reporting e processi, scrivimi. Ti mostro come lo stiamo facendo con TeraBrain."
      }
    ]
  },
  {
    slug: "sto-diventando-uno-di-loro-ai-agents-futuro-lavoro",
    title: "Sto Diventando Uno di Loro?",
    date: "2025-12-07",
    category: "AI Agents",
    author: "TeraBrain",
    excerpt:
      "Riflessioni sul futuro del lavoro nell'era degli AI Agents: quando l'AI smette di essere uno strumento e diventa un collega operativo.",
    image: "/blog-assets/sto-diventando-uno-di-loro.svg",
    imageAlt: "Un professionista osserva figure digitali connesse da flussi arancioni",
    content: [
      {
        type: "heading",
        text: "Riflessioni sul futuro del lavoro nell'era degli AI Agents"
      },
      {
        type: "paragraph",
        text: "Negli ultimi anni ho seguito da vicino l'evoluzione dell'AI: dalle reti neurali ai Transformer, la tecnologia che ha dato origine ai GPT e alla nuova era dei modelli linguistici LLM. Ma il salto più significativo è avvenuto due anni fa, quando ho iniziato a sviluppare e addestrare AI Agents operativi con TeraBrain."
      },
      {
        type: "paragraph",
        text: "Da quel momento, il mio rapporto con l'AI è cambiato: non era più uno strumento da interrogare, ma un collega digitale da formare."
      },
      {
        type: "paragraph",
        text: "Li ho istruiti a svolgere attività reali: in questi anni non ho solo insegnato agli AI Agents a rispondere al telefono o a gestire email. Li ho addestrati a prendere parte, passo dopo passo, a processi reali, spesso complessi, che richiedono coordinamento, precisione e continuità:"
      },
      {
        type: "list",
        items: [
          "Gestione opportunità commerciali.",
          "Follow-up automatici.",
          "Gestione ticket e customer care.",
          "Organizzazione agende e meeting.",
          "Aggiornamento documenti e sistemi.",
          "Verifiche ordini, consegne e solleciti.",
          "Monitoraggio produzione e logistica.",
          "Analisi dati e sintesi per il management.",
          "Controlli amministrativi e contabili."
        ]
      },
      {
        type: "paragraph",
        text: "Non più task isolati, ma flussi di lavoro completi. È qui che l'AI smette di essere un chatbot e diventa un collega operativo."
      },
      {
        type: "paragraph",
        text: "Più loro diventavano bravi a lavorare, più cambiava il mio modo di lavorare."
      },
      {
        type: "heading",
        text: "L'AI è ovunque, ma quasi nessuno ne ha il controllo"
      },
      {
        type: "paragraph",
        text: "C'è un fatto evidente: oggi tutti usano l'AI. ChatGPT è entrato nelle abitudini quotidiane con la stessa naturalezza di Word o Excel. Ma questo ha creato una situazione paradossale."
      },
      {
        type: "paragraph",
        text: "Da un lato, l'AI è ormai presente in ogni azienda, spesso introdotta spontaneamente dai collaboratori per velocizzare il lavoro quotidiano."
      },
      {
        type: "paragraph",
        text: "Dall'altro, le organizzazioni non hanno ancora il controllo su questo utilizzo: mancano policy, strumenti dedicati e soprattutto una gestione chiara dei rischi legati alla sicurezza e all'esposizione dei dati."
      },
      {
        type: "paragraph",
        text: "In pratica, l'AI è già dentro i processi aziendali, molto prima che l'azienda fosse pronta a governarla. Questo genera quattro effetti che vedo ogni giorno:"
      },
      {
        type: "list",
        items: [
          "Uso massivo, spontaneo, non governato.",
          "Scarsa comprensione di ciò che l'AI realmente fa.",
          "Timore dichiarato e dipendenza reale.",
          "Assenza di linee guida aziendali e responsabilità definite."
        ]
      },
      {
        type: "quote",
        text: "L'AI è già ovunque. La governance, invece, deve ancora arrivare."
      },
      {
        type: "heading",
        text: "Usare l'AI non è come lavorare con l'AI"
      },
      {
        type: "paragraph",
        text: "Un ChatGPT risponde. Un AI Agent agisce."
      },
      {
        type: "paragraph",
        text: "È una differenza enorme. Quando un AI Agent entra nel tuo flusso operativo, non stai più “digitando un prompt”: stai orchestrando un team ibrido, umano + AI."
      },
      {
        type: "heading",
        text: "L'AI non è solo più veloce: cambia la struttura stessa del lavoro"
      },
      {
        type: "paragraph",
        text: "In riferimento a un recente articolo di Luca Tremolada, c'è un dato oggettivo che sta emergendo dai primi studi seri sull'economia dell'AI. Anthropic ha analizzato oltre 100mila conversazioni reali, misurando quanto tempo avrebbe impiegato un essere umano a completare gli stessi compiti senza AI."
      },
      {
        type: "quote",
        text: "-80% di tempo per completare un compito con l'aiuto dell'AI."
      },
      {
        type: "paragraph",
        text: "Non stiamo parlando di “scrivere email più velocemente”, ma di attività complesse, che richiederebbero ore di concentrazione umana. L'AI, in altre parole, si sta dimostrando un moltiplicatore di capacità, soprattutto nel lavoro cognitivo ad alto valore."
      },
      {
        type: "paragraph",
        text: "E quando questi numeri vengono proiettati sull'economia reale, la portata diventa evidente:"
      },
      {
        type: "list",
        items: [
          "+1,8% di crescita annua della produttività nei prossimi 10 anni.",
          "Un ritmo doppio rispetto agli ultimi decenni.",
          "Livelli di trasformazione paragonabili agli anni '60-'70 e al boom tecnologico degli anni '90."
        ]
      },
      {
        type: "paragraph",
        text: "Ma la parte più interessante riguarda dove l'impatto è più forte. Le professioni con salari più alti e maggiore complessità cognitiva sono quelle che beneficiano maggiormente:"
      },
      {
        type: "list",
        items: [
          "Un assistente di ricerca risparmia il 91% del tempo.",
          "Un analista finanziario risparmia l'80%.",
          "Un manager può delegare interi flussi di attività."
        ]
      },
      {
        type: "paragraph",
        text: "È esattamente ciò che sto vedendo nel lavoro quotidiano con gli AI Agents."
      },
      {
        type: "quote",
        text: "L'impatto non è tattico, è strutturale."
      },
      {
        type: "paragraph",
        text: "E, come è avvenuto in ogni rivoluzione tecnologica, i veri guadagni non arriveranno dal fare le stesse cose più in fretta, ma dal ripensare completamente i processi attorno alle nuove capacità dell'AI."
      },
      {
        type: "heading",
        text: "Sto diventando uno di loro?"
      },
      {
        type: "paragraph",
        text: "È una provocazione, certo. Ma un fondo di verità c'è davvero. Quando lavori ogni giorno a stretto contatto con gli AI Agents succede una cosa particolare: inizi a cambiare tu."
      },
      {
        type: "paragraph",
        text: "Ti accorgi che delegare diventa più semplice, quasi naturale. Che pensi sempre più per processi, non per singole attività. Che decidi più velocemente, perché il rumore si riduce e le informazioni sono più chiare. E che molti dei piccoli intoppi quotidiani, ripetizioni, controlli, micro-task, semplicemente spariscono."
      },
      {
        type: "paragraph",
        text: "Non è una perdita di identità. Anzi. È come se l'AI rimuovesse dal tuo lavoro tutto ciò che ti impediva di concentrarti su ciò che conta davvero: essere creativo, strategico, relazionale, capace di vedere il quadro d'insieme."
      },
      {
        type: "heading",
        text: "Il vero impatto sociale dell'AI Agentic"
      },
      {
        type: "paragraph",
        text: "La domanda non è più: “L'AI sostituirà il lavoro umano?”. La domanda è: “Come cambierà il lavoro di chi collaborerà ogni giorno con l'AI?”"
      },
      {
        type: "paragraph",
        text: "Cambieranno ruoli, competenze, ritmi e responsabilità. Il lavoro umano si sposterà verso creatività, decisione, relazione. L'AI coprirà ciò che è ripetitivo, sequenziale, prevedibile."
      },
      {
        type: "heading",
        text: "Conclusione"
      },
      {
        type: "quote",
        text: "La vera rivoluzione dell'AI non è negli Agents, ma in come stanno cambiando noi."
      }
    ]
  },
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
