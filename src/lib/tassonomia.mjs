// Assi di classificazione delle schede. Usati da schema, sidebar e componenti.

/** A chi si applica un atto. `tutti` = nucleo comune. */
export const SOGGETTI = {
	piva: 'Partite IVA',
	professionisti: 'Professionisti con albo',
	ingegneri: 'Ingegneri',
	ets: 'Associazioni ed ETS',
	parrocchie: 'Parrocchie ed enti ecclesiastici',
	sport: 'ASD e SSD',
	artigiani: 'Artigiani e piccole imprese',
	cooperative: 'Cooperative',
	saas: 'SaaS e imprese digitali',
};

/** Sotto-profili: ereditano gli atti del profilo padre. */
export const PADRI = {
	ingegneri: 'professionisti',
};

/** Pagina profilo, se non è /profili/<soggetto>/. */
export const PAGINE_PROFILO = {
	ingegneri: '/ordini/ingegneri/',
};

/** Ambito tematico; ogni tema è una cartella in src/content/docs/atti/. */
export const TEMI = {
	dati: 'Dati personali',
	web: 'Sito web e comunicazioni',
	documenti: 'Identità, firme e PEC',
	fisco: 'Fisco digitale e pagamenti',
	lavoro: 'Lavoro e controlli',
	ai: 'Intelligenza artificiale',
	contratti: 'Contratti, consumatori, prodotti',
	ip: 'Proprietà intellettuale',
	settore: 'Norme di settore',
	piattaforme: 'Piattaforme e dati',
	sicurezza: 'Cybersicurezza',
	standard: 'Standard e framework (volontari)',
};

/** Natura della fonte: vincolante (atto, provvedimento) o volontaria (standard). */
export const TIPI = {
	atto: 'Atto normativo',
	provvedimento: 'Provvedimento, regolamento o linee guida di un’autorità o di un ordine',
	standard: 'Standard volontario',
};
