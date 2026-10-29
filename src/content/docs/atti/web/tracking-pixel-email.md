---
title: "Tracking pixel nelle email"
sidebar:
  label: "Tracking pixel email"
nome: "Tracking pixel email"
estremi: "Garante privacy, provv. 17 aprile 2026, n. 284 (G.U. n. 98 del 29/04/2026)"
tipo: provvedimento
giurisdizione: IT
tema: web
soggetti: [tutti]
condizione: "se invii newsletter o email con tracciamento delle aperture"
applicazione: 2026-10-29
autorita: [garante-privacy]
fonti:
  - label: "Linee guida (Garante, doc. web 10241943)"
    url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10241943"
  - label: "Comunicato stampa (doc. web 10241977)"
    url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10241977"
  - label: "Newsletter n. 553 dell'8/10/2026 (doc. web 10305399)"
    url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10305399"
stato: verificata
verificataIl: 2026-10-29
---

## In breve

Linee guida del Garante sui pixel di tracciamento nelle email: immagini invisibili, ospitate su un server remoto, che segnalano al mittente se e quando il messaggio è stato aperto, da quale dispositivo e quante volte. Per il Garante il pixel è un accesso al terminale del destinatario (art. 122 Codice Privacy), come i cookie: va sempre dichiarato nell'informativa e, salvo alcune deroghe, richiede il consenso. Il termine per adeguarsi è di sei mesi dalla pubblicazione in G.U., cioè il 29 ottobre 2026.

## Si applica se…

- Usi tracking pixel nelle email, per qualunque scopo e verso qualunque destinatario: newsletter, DEM, email transazionali, email di servizio (par. 3 e dispositivo).
- Il dispositivo si rivolge a fornitori di servizi della società dell'informazione e di servizi online, provider di posta, gestori di piattaforme di invio massivo e a "ogni altro soggetto che, a qualsiasi titolo, faccia uso di tracking pixel".
- Mittente, piattaforma di invio, fornitore di liste a noleggio e fornitore della tecnologia di tracciamento devono definire caso per caso i propri ruoli: titolare, responsabile o contitolare (art. 26 GDPR) (par. 3).

## Obblighi chiave

- **Informativa sempre**: l'uso del pixel va reso noto prima, qualunque sia lo scopo dell'email, altrimenti il trattamento non è lecito (artt. 5.1.a e 12 ss. GDPR; par. 4). Può essere su più livelli: una sintesi nel modulo di raccolta dell'indirizzo e un link all'informativa estesa, anche nella cookie policy.
- **Senza consenso** (deroghe dell'art. 122; par. 5):
  - conteggio statistico del tasso di apertura complessivo, con dati anonimizzati: il Garante suggerisce un pixel uguale per tutti i destinatari della stessa campagna e l'anonimizzazione di IP e client;
  - messaggi di sicurezza legati all'autenticazione: attivazione dell'account, cambio password, risposta a una richiesta di esercizio dei diritti;
  - messaggi istituzionali o di servizio che il titolare deve inviare per legge: avvisi antifrode, modifiche contrattuali o dell'informativa, notifiche di incidenti, promemoria di scadenze.
- **Con consenso preventivo** (par. 6): misurazione individuale delle aperture per ottimizzare le campagne (oggetto, frequenza, interruzione degli invii a chi non apre) e profilazione di gusti e interessi.
- **Consenso unico**: può coincidere con quello alle comunicazioni promozionali, se la richiesta è neutra e senza forzature (par. 6).
- **Revoca granulare**: in ogni email, un link o un'icona nel footer porta a un'area dove si può revocare tutto (disiscrizione) oppure solo il tracciamento, continuando a ricevere email senza pixel. Chi rifiuta il tracciamento non deve subire limitazioni del servizio (art. 7.3 GDPR; par. 6).
- **Registrazione delle scelte**: il titolare deve poter dimostrare consensi e revoche (art. 7.1 GDPR).
- **Privacy by design**: identificativo inintelligibile e non sequenziale associato all'indirizzo in un livello separato della piattaforma, in modo che l'indirizzo email non compaia nella richiesta del pixel (art. 25 GDPR; par. 6).
- **Trattamenti già in corso** (newsletter e liste esistenti, basate su consenso o altra base valida): informativa al primo invio utile, poi un meccanismo di revoca anche granulare, ben visibile. Il regime transitorio vale solo per questi trattamenti; per i nuovi serve il consenso preventivo (par. 4 e 6).

## Impatto pratico

- Verificare nella piattaforma di invio (Mailchimp, Brevo, ecc.) se il tracciamento delle aperture è attivo e se il pixel è individuale.
- Se servono solo statistiche aggregate: configurare un tracciamento anonimo o disattivare quello individuale.
- Se serve il tracciamento individuale: aggiornare il modulo di iscrizione con informativa e consenso; per le liste esistenti, informare al prossimo invio.
- Aggiungere al footer di ogni email il link per revocare solo il tracciamento, oltre alla disiscrizione, e conservare traccia delle scelte.
- Aggiornare informativa e cookie policy con l'uso dei pixel nelle email.
- Con la piattaforma: chiarire i ruoli nel contratto (art. 28 GDPR o accordo di contitolarità).
- **SaaS**: le email transazionali e di sicurezza rientrano nelle deroghe; chi offre una piattaforma di invio deve consentire ai clienti tracciamento anonimo e revoca granulare.

## Sanzioni

La violazione dell'art. 122 del Codice è punita fino a 20 milioni o al 4% del fatturato (art. 166.2 Codice Privacy); lo stesso massimo vale per le violazioni dei principi, della trasparenza e delle condizioni del consenso del GDPR (art. 83.5 GDPR). Le irroga il [Garante](/enti/nazionali/#garante-privacy), che ha inserito la verifica delle linee guida nell'attività ispettiva del secondo semestre 2026 (newsletter n. 553 dell'8 ottobre 2026).

## Note aperte

- La deroga statistica richiede pixel non differenziati per destinatario e dati anonimizzati: con le impostazioni abituali delle piattaforme, che misurano le aperture per contatto, di solito non basta.
- Le linee guida trattano solo i pixel; il tracciamento dei clic sui link non è affrontato espressamente.
- Il regime transitorio per i trattamenti in corso non richiede di raccogliere un nuovo consenso: resta da capire come il Garante valuterà le liste prive di una base valida per il tracciamento.
- Il Digital Omnibus, se approvato, cambierebbe le regole europee sull'accesso al terminale che l'art. 122 recepisce: vedi [Da verificare](/metodo/da-verificare/).
- Vedi anche [Cookie / ePrivacy](/atti/web/cookie-eprivacy/) e il [Codice Privacy](/atti/dati/codice-privacy/).
