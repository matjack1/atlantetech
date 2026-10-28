---
title: Notifica degli incidenti
description: Chi notifica cosa, a chi e in quanto tempo, secondo GDPR, NIS2, DORA e Cyber Resilience Act.
sidebar:
  order: 1
---

:::caution[Bozza]
Termini scritti a memoria e da verificare sul testo ufficiale prima dell'uso.
:::

Lo stesso incidente può far scattare più notifiche: un attacco ransomware a un SaaS in ambito NIS2 che espone dati personali comporta la notifica NIS2 a CSIRT Italia, la comunicazione ai clienti come responsabile del trattamento (art. 33(2) GDPR) e, per ogni cliente titolare, la notifica al Garante.

## Scadenze a confronto

| Atto | Cosa si notifica | A chi | Scadenze |
|---|---|---|---|
| [GDPR](/atti/dati/gdpr/), art. 33 | Violazione di dati personali, salvo improbabilità di rischio | Garante privacy | Senza ingiustificato ritardo, ove possibile entro **72 h** dalla conoscenza |
| GDPR, art. 33(2) | Violazione subita dal responsabile del trattamento | Il titolare (cliente) | Senza ingiustificato ritardo; i DPA fissano di solito 24-48 h |
| GDPR, art. 34 | Violazione con rischio elevato | Gli interessati | Senza ingiustificato ritardo |
| [NIS2](/atti/sicurezza/nis2/), art. 23; D.Lgs. 138/2024, art. 25 | Incidente significativo | CSIRT Italia (ACN) | Preallarme **24 h** · notifica **72 h** · relazione finale **1 mese** |
| [DORA](/atti/sicurezza/dora/), art. 19 | Incidente grave connesso alle TIC | Autorità di vigilanza (Banca d'Italia, Consob, IVASS) | Iniziale entro **4 h** dalla classificazione (max 24 h dalla conoscenza) · intermedia **72 h** · finale **1 mese** |
| [Cyber Resilience Act](/atti/sicurezza/cyber-resilience-act/), art. 14 (dal 11/09/2026) | Vulnerabilità attivamente sfruttata o incidente grave su un prodotto | CSIRT coordinatore ed ENISA (piattaforma unica) | Preallarme **24 h** · notifica **72 h** · relazione finale **14 giorni** (vulnerabilità) o **1 mese** (incidenti) |

## Cosa preparare prima

- **Registro delle violazioni** (art. 33(5) GDPR), obbligatorio anche per le violazioni non notificate.
- **Procedura** con ruoli, contatti delle autorità e criteri per decidere se notificare: in ISO 27001 sono i controlli A.5.24-A.5.28.
- **Clausole contrattuali**: tempi di notifica verso i clienti (DPA) e dai fornitori verso di sé.
- Per i soggetti NIS2: soglie di "incidente significativo" (per i fornitori digitali sono fissate dal [Reg. di esecuzione (UE) 2024/2690](/atti/sicurezza/nis2-requisiti-tecnici/)).

## Note aperte

- Decorrenza in Italia dell'obbligo di notifica NIS2 secondo il calendario ACN.
- Modalità e moduli di notifica del Garante, di ACN e della piattaforma unica CRA.
- Microimprese (meno di cinque dipendenti): procedura di notifica semplificata al Garante prevista dall'art. 2-quaterdecies.1 del [Codice Privacy](/atti/dati/codice-privacy/), non ancora disciplinata dal Garante a fine ottobre 2026.
- Effetti del Digital Omnibus sulla notifica GDPR (soglia di rischio, punto unico di notifica).
