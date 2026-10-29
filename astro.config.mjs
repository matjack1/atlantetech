// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { TEMI } from './src/lib/tassonomia.mjs';
import { satteri } from '@astrojs/markdown-satteri';
import hastBase from './src/lib/hast-base.mjs';

// GitHub Pages di progetto: il sito sta sotto /atlantetech/
const base = '/atlantetech';

// https://astro.build/config
export default defineConfig({
	site: 'https://matjack1.github.io',
	base,
	// Starlight aggiunge i suoi plugin a questo stesso processore
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
				{ label: 'Panoramica', link: '/' },
				{ label: 'Nucleo comune', link: '/nucleo/' },
				{ label: 'Normativa di base', items: [{ autogenerate: { directory: 'fonti' } }] },
				{ label: 'Per soggetto', items: [{ autogenerate: { directory: 'profili' } }] },
				{
					label: 'Ordini professionali',
					items: [{ label: 'Ingegneri', items: [{ autogenerate: { directory: 'ordini/ingegneri' } }] }],
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
