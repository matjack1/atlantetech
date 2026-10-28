// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { TEMI } from './src/lib/tassonomia.mjs';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Normativa ICT',
			description: 'Mappa della normativa italiana ed europea sul digitale per imprese, professionisti ed enti.',
			locales: { root: { label: 'Italiano', lang: 'it' } },
			lastUpdated: true,
			components: {
				// Aggiunge il riquadro con i metadati della scheda sotto il titolo
				PageTitle: './src/components/PageTitle.astro',
			},
			sidebar: [
				{ label: 'Panoramica', link: '/' },
				{ label: 'Nucleo comune', link: '/nucleo/' },
				{ label: 'Per soggetto', items: [{ autogenerate: { directory: 'profili' } }] },
				{
					label: 'Ordini professionali',
					items: [{ label: 'Ingegneri', items: [{ autogenerate: { directory: 'ordini/ingegneri' } }] }],
				},
				{ label: 'Temi trasversali', items: [{ autogenerate: { directory: 'trasversali' } }] },
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
