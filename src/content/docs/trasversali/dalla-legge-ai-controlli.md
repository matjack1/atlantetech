---
title: Dalla legge ai controlli
description: Corrispondenza tra obblighi di sicurezza di GDPR, NIS2 e provvedimenti italiani e i controlli ISO/IEC 27001:2022.
sidebar:
  order: 2
---

:::caution[Bozza]
Mappatura indicativa, scritta a memoria: da validare sui testi e sulle tabelle di corrispondenza ufficiali (es. la guida tecnica ENISA al Reg. 2024/2690) prima di usarla in un audit o in un questionario.
:::

Le leggi dicono **cosa** ottenere (misure "adeguate"), gli standard dicono **come** organizzarlo e dimostrarlo. Questa pagina collega i requisiti di legge ai controlli dell'Allegato A di [ISO/IEC 27001:2022](/atti/standard/iso-27001/) (clausole 4-10 = sistema di gestione; A.5 organizzativi, A.6 persone, A.7 fisici, A.8 tecnologici).

Per le piccole realtà la stessa logica vale con i [Controlli essenziali](/atti/standard/controlli-essenziali/) al posto di ISO 27001.

## NIS2, art. 21(2)

Il [Reg. di esecuzione (UE) 2024/2690](/atti/sicurezza/nis2-requisiti-tecnici/) segue la stessa struttura, in forma più dettagliata, per i fornitori digitali.

| Art. 21(2) | Requisito | ISO 27001:2022 |
|---|---|---|
| a | Analisi dei rischi e politiche di sicurezza | Cl. 5.2, 6.1, 8.2-8.3 · A.5.1 |
| b | Gestione degli incidenti | A.5.24-A.5.28, A.6.8 |
| c | Continuità operativa, backup, disaster recovery, gestione delle crisi | A.5.29, A.5.30, A.8.13, A.8.14 · [ISO 22301](/atti/standard/iso-22301/) |
| d | Sicurezza della catena di approvvigionamento | A.5.19-A.5.23 |
| e | Sicurezza di acquisizione, sviluppo e manutenzione; gestione e divulgazione delle vulnerabilità | A.8.8, A.8.25-A.8.29, A.8.32 |
| f | Valutazione dell'efficacia delle misure | Cl. 9.1-9.3 · A.5.35, A.5.36 |
| g | Igiene informatica di base e formazione | A.6.3, A.8.1, A.8.7, A.8.9 |
| h | Crittografia e cifratura | A.8.24 |
| i | Sicurezza del personale, controllo degli accessi, gestione degli asset | A.6.1-A.6.6, A.5.9-A.5.11, A.5.15-A.5.18, A.8.2-A.8.5 |
| j | Autenticazione a più fattori, comunicazioni protette, comunicazioni di emergenza | A.8.5, A.5.14, A.8.20-A.8.21 |

## GDPR

| Articolo | Requisito | ISO 27001:2022 · altri standard |
|---|---|---|
| 32(1)(a) | Pseudonimizzazione e cifratura | A.8.11, A.8.24 |
| 32(1)(b) | Riservatezza, integrità, disponibilità e resilienza | Allegato A nel suo complesso, a partire dall'analisi dei rischi (cl. 6.1) |
| 32(1)(c) | Ripristino tempestivo dopo un incidente | A.8.13, A.5.30 |
| 32(1)(d) | Test e valutazione periodica delle misure | Cl. 9.2 · A.5.35, A.8.29 |
| 25 | Protezione dei dati fin dalla progettazione e per impostazione predefinita | A.8.25-A.8.27, A.5.34 · [ISO 27701](/atti/standard/iso-27701/) |
| 28 | Garanzie del responsabile, accordi con i sub-responsabili | A.5.19-A.5.20, A.5.34 · [SOC 2](/atti/standard/soc-2/), [ISO 27018](/atti/standard/iso-27017-27018/) |
| 30 | Registro dei trattamenti | A.5.9, A.5.34 (parziale) · ISO 27701 |
| 33-34 | Notifica e comunicazione delle violazioni | A.5.24-A.5.26 · [Notifica degli incidenti](/trasversali/notifica-incidenti/) |
| 5(1)(e) | Limitazione della conservazione | A.5.33, A.8.10 |

## Provvedimenti italiani

| Provvedimento | Requisito | ISO 27001:2022 |
|---|---|---|
| [Amministratori di sistema](/atti/dati/amministratori-di-sistema/) | Designazione, elenco, verifica annuale, log degli accessi per almeno 6 mesi | A.8.2, A.8.15, A.5.18, A.5.35 |
| [Conservazione delle password](/atti/dati/conservazione-password/) | Hash con funzioni crittografiche adeguate | A.5.17, A.8.5, A.8.24 |
| [Metadati email](/atti/lavoro/metadati-email/) | Conservazione limitata dei log di posta | A.8.15, A.5.34 |
| [Linee guida AgID documenti](/atti/documenti/documenti-informatici-agid/) | Integrità e conservazione a norma | A.5.33, A.8.13 |

## Note aperte

- Allineare la tabella NIS2 con le misure di base delle determinazioni ACN.
- Aggiungere le colonne SOC 2 (Trust Services Criteria) e Controlli essenziali.
- Aggiungere DORA (Reg. delegato (UE) 2024/1774 sulla gestione del rischio ICT).
