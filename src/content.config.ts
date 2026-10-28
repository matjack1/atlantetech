import { defineCollection, reference } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { FONTI, LIVELLI, LUOGHI, POTERI, SCALE, SOGGETTI, TEMI, TIPI, TIPI_ENTE } from './lib/tassonomia.mjs';

const chiavi = <T extends object>(o: T) => Object.keys(o) as [keyof T & string, ...(keyof T & string)[]];

// Campi di una scheda-atto. Una pagina è una scheda se ha `estremi`.
const scheda = z.object({
	nome: z.string().optional(),
	estremi: z.string().optional(),
	tipo: z.enum(chiavi(TIPI)).default('atto'),
	// solo se quello ricavato dagli estremi è sbagliato (vedi fonteDi in lib/format.ts)
	fonte: z.enum(chiavi(FONTI)).optional(),
	// ISO = norme ISO/IEC; INT = altri standard internazionali (NIST, CIS, AICPA, CSA, PCI)
	giurisdizione: z.enum(['UE', 'IT', 'CEI', 'ISO', 'INT']).optional(),
	tema: z.enum(chiavi(TEMI)).optional(),
	soggetti: z.array(z.enum(['tutti', ...chiavi(SOGGETTI)])).default([]),
	condizione: z.string().optional(),
	applicazione: z.coerce.date().optional(),
	scadenze: z.array(z.object({ data: z.coerce.date(), cosa: z.string() })).default([]),
	recepimento: z.string().optional(),
	// id di src/data/enti.yaml; per gli standard è chi li emette
	autorita: z.array(reference('enti')).default([]),
	fonti: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
	stato: z.enum(['bozza', 'verificata']).default('bozza'),
	verificataIl: z.coerce.date().optional(),
});

// Enti che regolano, vigilano, giudicano o orientano. Uno per voce di src/data/enti.yaml.
const ente = z.object({
	nome: z.string(),
	sigla: z.string().optional(),
	livello: z.enum(chiavi(LIVELLI)),
	tipo: z.enum(chiavi(TIPI_ENTE)),
	poteri: z.array(z.enum(chiavi(POTERI))).min(1),
	temi: z.array(z.enum(chiavi(TEMI))).default([]),
	sito: z.string().url().optional(),
	ruolo: z.string(),
	note: z.string().optional(),
	// Profili per cui l'ente è un riferimento anche se nessuna scheda lo cita; per gli enti del
	// nucleo comune, i soli profili in cui compaiono
	soggetti: z.array(z.enum(chiavi(SOGGETTI))).default([]),
	// Enti locali: compaiono nella pagina del luogo invece che in quella del livello
	luogo: z.enum(chiavi(LUOGHI)).optional(),
	scala: z.enum(chiavi(SCALE)).optional(),
}).refine((e) => !e.luogo === !e.scala, { message: '`luogo` e `scala` vanno indicati insieme' });

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema({ extend: scheda }) }),
	enti: defineCollection({ loader: file('src/data/enti.yaml'), schema: ente }),
};
