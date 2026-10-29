# Atlante tech

Mappa della normativa italiana ed europea sulla tecnologia per imprese, professionisti ed enti (Astro + Starlight).

```sh
npm run dev     # http://localhost:4321/atlantetech/
npm run build   # sito statico in dist/
```

Pubblicato su https://matjack1.github.io/atlantetech/ a ogni push su `main` (`.github/workflows/deploy.yml`). Il base path sta in `astro.config.mjs`; i link nelle schede si scrivono dalla radice (`/nucleo/`) e `src/lib/hast-base.mjs` aggiunge il prefisso in build.

- Schede: `src/content/docs/atti/<tema>/*.md`
- Profili per soggetto: `src/content/docs/profili/`, ingegneri in `src/content/docs/ordini/ingegneri/`
- Normativa di base (fonti e indice degli atti): `src/content/docs/fonti/`
- Enti: registro in `src/data/enti.yaml`, pagine in `src/content/docs/enti/`
- Tassonomie (soggetti, temi, fonti, livelli, poteri): `src/lib/tassonomia.mjs`
- Schema: `src/content.config.ts`
- Come scrivere una scheda: `src/content/docs/metodo/scheda.md`
