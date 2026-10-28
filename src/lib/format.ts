import { getCollection } from 'astro:content';
import { PADRI, PAGINE_PROFILO, SOGGETTI } from './tassonomia.mjs';

const fmt = new Intl.DateTimeFormat('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });

export const formatData = (d?: Date) => (d ? fmt.format(d) : '—');

export const etichettaSoggetti = (s: string[]) =>
	s.includes('tutti') ? 'Tutti' : s.map((k) => SOGGETTI[k as keyof typeof SOGGETTI]).join(', ');

export const siApplica = (soggetti: string[], soggetto: string): boolean => {
	const padre = PADRI[soggetto as keyof typeof PADRI];
	return soggetti.includes('tutti') || soggetti.includes(soggetto) || (!!padre && siApplica(soggetti, padre));
};

export const paginaProfilo = (k: string) =>
	`${import.meta.env.BASE_URL.replace(/\/$/, '')}${PAGINE_PROFILO[k as keyof typeof PAGINE_PROFILO] ?? `/profili/${k}/`}`;

export const getSchede = async () =>
	(await getCollection('docs', (e) => !!e.data.estremi)).sort((a, b) =>
		(a.data.nome ?? a.data.title).localeCompare(b.data.nome ?? b.data.title, 'it')
	);

export const href = (id: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${id}/`;

/** Link alla voce di un ente nella pagina del suo livello. */
export const hrefEnte = (e: { id: string; data: { livello: string; luogo?: string } }) =>
	`${import.meta.env.BASE_URL.replace(/\/$/, '')}/enti/${e.data.luogo ?? e.data.livello}/#${e.id}`;

export const nomeBreve = (e: { data: { nome: string; sigla?: string } }) => e.data.sigla ?? e.data.nome;

type Scheda = { id: string; data: { tipo: string; giurisdizione?: string; estremi?: string; fonte?: string } };

/** Tipo di fonte di una scheda (chiave di FONTI). */
export const fonteDi = ({ id, data }: Scheda): string => {
	if (data.fonte) return data.fonte;
	if (data.tipo === 'standard') return 'standard';
	if (data.tipo === 'provvedimento' || data.giurisdizione === 'CEI') return 'provvedimenti';
	const e = data.estremi ?? '';
	if (/^Costituzione/.test(e)) return 'costituzione';
	if (/^(TUE|TFUE|Trattat|Carta)/.test(e)) return 'trattati';
	if (data.giurisdizione === 'INT') return 'convenzioni';
	if (/^Reg\./.test(e)) return 'regolamenti';
	if (/^Dir\./.test(e)) return 'direttive';
	if (/^(D\.Lgs\.|D\.L\.)/.test(e)) return 'decreti';
	if (/^(D\.P\.R\.|D\.M\.)/.test(e)) return 'regolamenti_it';
	if (/^(L\.|R\.D\.)/.test(e)) return 'leggi';
	throw new Error(`Fonte non riconosciuta per ${id}: aggiungere \`fonte\` al frontmatter`);
};

/** Anno dell'atto, il primo che compare negli estremi. */
export const annoDi = (estremi = '') => Number(estremi.match(/\b(1[89]|20)\d\d\b/)?.[0] ?? 9999);
