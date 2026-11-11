// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { existsSync } from 'node:fs';
import { SOGGETTI, TEMI } from './src/lib/tassonomia.mjs';
import { ORDINE_SOGGETTI } from './src/lib/ordine-soggetti.mjs';
import { satteri } from '@astrojs/markdown-satteri';
import hastBase from './src/lib/hast-base.mjs';

// GitHub Pages di progetto: il sito sta sotto /atlantetech/
const base = '/atlantetech';

// https://astro.build/config
export default defineConfig({
	site: 'https://matjack1.github.io',
	base,
	// Starlight aggiunge i suoi plugin a questo stesso processore
	// la sezione Ingegneri è confluita nel profilo dei professionisti
	redirects: {
		'/ordini/ingegneri/': `${base}/profili/professionisti/`,
		...Object.fromEntries(
			['obblighi', 'deontologia', 'ordine-ente-pubblico', 'fonti'].map((p) => [`/ordini/ingegneri/${p}/`, `${base}/profili/professionisti/${p}/`])
		),
	},
	markdown: { processor: satteri({ hastPlugins: [hastBase(base)] }) },
	integrations: [
		starlight({
			title: 'Atlante tech',
			description: 'Mappa della normativa italiana ed europea sulla tecnologia per imprese, professionisti ed enti.',
			locales: { root: { label: 'Italiano', lang: 'it' } },
			lastUpdated: true,
			components: {
				// Aggiunge il riquadro con i metadati della scheda sotto il titolo
				PageTitle: './src/components/PageTitle.astro',
			},
			sidebar: [
				{ label: 'Inizio', link: '/' },
				{ label: 'Nucleo comune', link: '/nucleo/' },
				{ label: 'A chi si applica', link: '/a-chi-si-applica/' },
				{ label: 'Normativa di base', items: [{ autogenerate: { directory: 'fonti' } }] },
				{
					label: 'Per soggetto',
					// dal soggetto con più atti specifici a quello con meno; i profili con sottopagine sono gruppi
					items: ORDINE_SOGGETTI.map((k) =>
						existsSync(new URL(`./src/content/docs/profili/${k}/`, import.meta.url))
							? { label: SOGGETTI[k], items: [{ slug: `profili/${k}` }, { autogenerate: { directory: `profili/${k}` } }] }
							: { slug: `profili/${k}` }
					),
				},
				{ label: 'Temi trasversali', items: [{ autogenerate: { directory: 'trasversali' } }] },
				{ label: 'Enti e autorità', items: [{ autogenerate: { directory: 'enti' } }] },
				{
					label: 'Per tema',
					items: Object.entries(TEMI).map(([tema, label]) => ({
						label,
						collapsed: true,
						items: [{ autogenerate: { directory: `atti/${tema}` } }],
					})),
				},
				{ label: 'Metodo', items: [{ autogenerate: { directory: 'metodo' } }] },
			],
		}),
	],
});
