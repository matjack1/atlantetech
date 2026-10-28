import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { SOGGETTI, TEMI, TIPI } from './lib/tassonomia.mjs';

const chiavi = <T extends object>(o: T) => Object.keys(o) as [keyof T & string, ...(keyof T & string)[]];

// Campi di una scheda-atto. Una pagina è una scheda se ha `estremi`.
const scheda = z.object({
	nome: z.string().optional(),
	estremi: z.string().optional(),
	tipo: z.enum(chiavi(TIPI)).default('atto'),
	// ISO = norme ISO/IEC; INT = altri standard internazionali (NIST, CIS, AICPA, CSA, PCI)
	giurisdizione: z.enum(['UE', 'IT', 'CEI', 'ISO', 'INT']).optional(),
	tema: z.enum(chiavi(TEMI)).optional(),
	soggetti: z.array(z.enum(['tutti', ...chiavi(SOGGETTI)])).default([]),
	condizione: z.string().optional(),
	applicazione: z.coerce.date().optional(),
	scadenze: z.array(z.object({ data: z.coerce.date(), cosa: z.string() })).default([]),
	recepimento: z.string().optional(),
	autorita: z.array(z.string()).default([]),
	fonti: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
	stato: z.enum(['bozza', 'verificata']).default('bozza'),
	verificataIl: z.coerce.date().optional(),
});

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema({ extend: scheda }) }),
};
