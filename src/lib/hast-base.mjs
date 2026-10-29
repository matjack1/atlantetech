// Plugin hast per Sätteri: antepone il base path ai link assoluti delle schede
// ("/nucleo/" → "/atlantetech/nucleo/"), così il contenuto resta scritto con link dalla radice del sito.
export default function hastBase(base) {
	const prefix = base.replace(/\/$/, '');
	const needsPrefix = (url) =>
		typeof url === 'string' && url.startsWith('/') && !url.startsWith('//') && !url.startsWith(`${prefix}/`);
	return {
		name: 'base-path',
		element: [
			{
				filter: ['a', 'img'],
				visit(node, ctx) {
					if (!prefix) return;
					for (const key of ['href', 'src']) {
						const url = node.properties?.[key];
						if (needsPrefix(url)) ctx.setProperty(node, key, prefix + url);
					}
				},
			},
		],
	};
}
