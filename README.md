# Normativa ICT

Mappa della normativa italiana ed europea sul digitale per imprese, professionisti ed enti (Astro + Starlight).

```sh
npm run dev     # http://localhost:4321
npm run build   # sito statico in dist/
```

- Schede: `src/content/docs/atti/<tema>/*.md`
- Profili per soggetto: `src/content/docs/profili/`, ingegneri in `src/content/docs/ordini/ingegneri/`
- Enti: registro in `src/data/enti.yaml`, pagine in `src/content/docs/enti/`
- Tassonomie (soggetti, temi, livelli, poteri): `src/lib/tassonomia.mjs`
- Schema: `src/content.config.ts`
- Come scrivere una scheda: `src/content/docs/metodo/scheda.md`
