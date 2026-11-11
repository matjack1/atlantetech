// Ordine di presentazione dei soggetti (sidebar, home, matrice): per numero decrescente di atti specifici,
// cioè schede che nominano il soggetto senza essere nel nucleo comune. A parità, l'ordine di SOGGETTI.
// Legge il frontmatter dai file perché serve anche ad astro.config.mjs, dove le collezioni non esistono ancora.
// In `astro dev` è calcolato all'avvio: dopo aver cambiato i soggetti di una scheda, riavviare.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { SOGGETTI } from './tassonomia.mjs';

// dalla radice del progetto: nel bundle di build import.meta.url non punta più a src/
const DOCS = join(process.cwd(), 'src/content/docs');

const schede = readdirSync(DOCS, { recursive: true })
	.filter((f) => /\.mdx?$/.test(f))
	.map((f) => readFileSync(join(DOCS, f), 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '')
	.filter((fm) => /^estremi:/m.test(fm))
	.map((fm) => (fm.match(/^soggetti:\s*\[([^\]]*)\]/m)?.[1] ?? '').split(',').map((s) => s.trim()).filter(Boolean));

/** Numero di atti specifici per soggetto. */
export const ATTI_SPECIFICI = Object.fromEntries(
	Object.keys(SOGGETTI).map((k) => [k, schede.filter((l) => !l.includes('tutti') && l.includes(k)).length])
);

/** Chiavi di SOGGETTI, dal soggetto con più atti specifici a quello con meno. */
export const ORDINE_SOGGETTI = Object.keys(SOGGETTI).sort((a, b) => ATTI_SPECIFICI[b] - ATTI_SPECIFICI[a]);
