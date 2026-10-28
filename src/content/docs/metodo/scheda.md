---
title: Come si scrive una scheda
sidebar:
  order: 1
---

Ogni atto ha una scheda in `src/content/docs/atti/<tema>/<slug>.md`. Temi e soggetti sono definiti in `src/lib/tassonomia.mjs`. I metadati stanno nel frontmatter: il riquadro sotto il titolo, la matrice in [Panoramica](/), il [Nucleo comune](/nucleo/) e le pagine profilo si generano da lì.

## Frontmatter

```yaml
---
title: "Data Act"
sidebar:
  label: "Data Act"
nome: "Data Act"                 # nome breve, usato nella mappa
estremi: "Reg. (UE) 2023/2854"   # obbligatorio: rende la pagina una scheda
tipo: atto                       # atto | provvedimento | standard (volontario)
giurisdizione: UE                # UE | IT | CEI | ISO | INT
tema: piattaforme                # cartella e chiave di TEMI
soggetti: [saas]                 # chiavi di SOGGETTI; [tutti] = nucleo comune
condizione: "se offri servizi cloud"  # quando scatta, mostrata nelle tabelle
applicazione: 2025-09-12         # data di applicazione principale
recepimento: "D.Lgs. …"          # solo per direttive
scadenze:                        # altre date rilevanti
  - data: 2027-01-12
    cosa: "Eliminazione dei costi di switching"
autorita: [commissione-ue]       # id di src/data/enti.yaml; per gli standard, chi li emette
fonti:
  - label: "Testo (EUR-Lex)"
    url: "https://eur-lex.europa.eu/eli/reg/2023/2854/oj"
stato: bozza                     # bozza | verificata
verificataIl: 2026-10-27         # quando si è controllato sul testo ufficiale
---
```

Il build fallisce se un campo non rispetta lo schema (`src/content.config.ts`) o se `autorita` cita un ente che non esiste.

## Enti

Gli enti stanno in `src/data/enti.yaml`, una voce per ente con `id`, `nome`, `sigla`, `livello`, `tipo`, `poteri`, `temi`, `sito`, `ruolo` e `note` (punti da verificare). Livelli, tipi e poteri sono definiti in `src/lib/tassonomia.mjs`. Le pagine in [Enti e autorità](/enti/) si generano dal registro. Ogni voce elenca le schede che la citano. Un ente nuovo con un `tipo` non ancora presente nella pagina del suo livello richiede una nuova sezione `## …` in `src/content/docs/enti/<livello>.mdx`.

## Sezioni

1. **In breve**: due o tre righe.
2. **Si applica se…**: criteri di ambito, soglie, esclusioni, distinguendo per soggetto quando serve.
3. **Obblighi chiave**: elenco con riferimento all'articolo.
4. **Impatto pratico**: cosa fare in concreto (documenti, sito, contratti, processi), per soggetto quando serve.
5. **Sanzioni**: importi massimi, autorità che le irroga.
6. **Note aperte**: dubbi interpretativi, modifiche in corso.

## Regole

- Citare sempre l'articolo: `art. 28(3) GDPR`.
- Una scheda passa a `verificata` solo dopo il controllo di estremi, date e obblighi sul testo ufficiale (EUR-Lex o Normattiva), compilando `verificataIl`.
