---
title: "Amministratori di sistema"
sidebar:
  label: "Amministratori di sistema"
nome: "Amministratori di sistema"
estremi: "Garante privacy, provv. 27 novembre 2008 (G.U. n. 300 del 24/12/2008), mod. provv. 25 giugno 2009 (G.U. n. 149 del 30/06/2009)"
tipo: provvedimento
giurisdizione: IT
tema: dati
soggetti: [tutti]
condizione: "se qualcuno, anche esterno, amministra i tuoi sistemi"
applicazione: 2009-12-15
autorita: [garante-privacy]
fonti:
  - label: "Provvedimento coordinato e FAQ (Garante, doc. web 1577499)"
    url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/1577499"
  - label: "Provvedimento di modifica del 25/06/2009 (doc. web 1626595)"
    url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/1626595"
stato: verificata
verificataIl: 2026-10-28
---

## In breve

Provvedimento generale del Garante su chi gestisce sistemi, reti e basi di dati con la possibilità tecnica di accedere ai dati personali, anche solo in modo fortuito: sistemisti, amministratori di database e di rete, tecnici esterni, fornitori del gestionale. Chiede di scegliere persone affidabili, designarle per iscritto, tenerne l'elenco, verificarne l'operato ogni anno e registrarne gli accessi. Le prescrizioni sono in vigore dal 15 dicembre 2009 e restano applicabili con il GDPR in quanto compatibili (D.Lgs. 101/2018, art. 22.4).

## Si applica se…

- Tratti dati personali con strumenti elettronici e qualcuno, interno o esterno, ha funzioni di amministratore di sistema, di base di dati o di rete con accesso tecnicamente possibile ai dati (punti 1 e 2).
- Vale anche se il tecnico è un fornitore in outsourcing: in quel caso alcuni adempimenti possono passare al fornitore come responsabile del trattamento (punti 2.d, 2.e e 3-bis).
- **Esclusione**: i trattamenti in ambito pubblico e privato a soli fini amministrativo-contabili, che il Garante considera a minor rischio (punto 2).
- **Caso limite** indicato dalle FAQ (n. 3): se il titolare è l'unico amministratore di sistema, come può accadere in piccolissime imprese, non si applicano la verifica annuale e il log degli accessi.

## Obblighi chiave

Le misure sono al punto 2 del dispositivo.

- **a. Valutazione**: attribuire il ruolo solo a chi ha esperienza, capacità e affidabilità adeguate, anche in materia di sicurezza.
- **b. Designazione individuale**: per iscritto, con l'elenco analitico degli ambiti di operatività consentiti.
- **c. Elenco**: documento interno aggiornato con estremi e funzioni di ogni amministratore, disponibile per il Garante. Se gli amministratori trattano anche indirettamente dati dei lavoratori, la loro identità va resa nota ai lavoratori, ad esempio nell'informativa, nel regolamento informatico o nella intranet.
- **d. Outsourcing**: il titolare, o il fornitore come responsabile, conserva gli estremi delle persone fisiche che amministrano i sistemi.
- **e. Verifica annuale**: almeno una volta l'anno il titolare, o il responsabile, controlla che l'operato degli amministratori rispetti le misure organizzative, tecniche e di sicurezza.
- **f. Log degli accessi**: registrare gli accessi logici degli amministratori, cioè le autenticazioni, a sistemi e archivi, compresi i client (FAQ n. 4). I log devono essere completi, inalterabili e verificabili nell'integrità, avere riferimento temporale e descrizione dell'evento ed essere conservati per almeno sei mesi.

## Impatto pratico

- Fare l'elenco di chi ha accesso amministrativo: IT interno, fornitore del gestionale, del sito o del cloud, tecnico di fiducia.
- Lettera di designazione per ciascuno, con gli ambiti precisi. Con i fornitori: clausole nel contratto ex art. 28 GDPR che affidano a loro elenco nominativo e verifica annuale.
- Attivare la registrazione degli accessi amministrativi, ad esempio su un log server o un SIEM con conservazione non modificabile, e tenerla almeno sei mesi.
- Verbale annuale della verifica sull'operato.
- Con dipendenti: indicare gli amministratori nell'informativa o nel regolamento informatico, coordinando con i [controlli a distanza](/atti/lavoro/controlli-a-distanza/).
- **SaaS**: come responsabile del trattamento, aspettarsi che i clienti chiedano l'elenco degli amministratori e le evidenze dei log; conviene inserirli nel DPA e nella documentazione di sicurezza.

## Sanzioni

Il provvedimento era stato adottato come prescrizione di misure ai sensi del vecchio art. 154 del Codice. Con il GDPR la mancata adozione viene di regola contestata come violazione degli obblighi di sicurezza e di accountability del GDPR (artt. 5.2, 24, 32), con sanzione fino a 10 milioni o al 2% del fatturato (art. 83.4 GDPR), irrogata dal [Garante](/enti/nazionali/#garante-privacy).

## Note aperte

- L'esclusione dei trattamenti amministrativo-contabili si fondava su norme di semplificazione del 2008 (art. 34 del Codice e art. 29 D.L. 112/2008) poi abrogate o superate: la sua portata attuale è incerta, ed è prudente non farci affidamento.
- Sulla pagina del Garante il testo risulta modificato l'ultima volta il 25/06/2009 (consultata il 28/10/2026). Verificare eventuali nuovi provvedimenti o linee guida, anche alla luce delle [linee guida sulle password](/atti/dati/conservazione-password/) e delle misure NIS2 per i soggetti obbligati.
