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

/** Livello di un ente; ogni livello è una pagina /enti/<livello>/. */
export const LIVELLI = {
	internazionali: 'Internazionali',
	ue: 'Unione europea',
	nazionali: 'Nazionali',
	territoriali: 'Territoriali',
};

/** Natura di un ente; raggruppa gli enti nella pagina del livello. */
export const TIPI_ENTE = {
	istituzioni: 'Istituzioni e organizzazioni',
	autorita: 'Autorità indipendenti',
	agenzie: 'Agenzie ed enti pubblici',
	reti: 'Comitati e reti di cooperazione',
	internet: 'Governance di internet',
	standard: 'Normazione, accreditamento e standard',
	categoria: 'Ordini, casse ed enti di riferimento',
	ricerca: 'Ricerca, innovazione e investimenti',
	giudici: 'Giudici',
	polizia: 'Forze dell’ordine',
};

/** Cosa può fare un ente. Le prime quattro voci hanno effetti vincolanti. */
export const POTERI = {
	legifera: 'Adotta leggi o trattati',
	regola: 'Emana atti attuativi vincolanti',
	vigila: 'Vigila e sanziona',
	giudica: 'Decide ricorsi e controversie',
	autorizza: 'Autorizza, accredita o certifica',
	registra: 'Tiene albi e registri',
	indaga: 'Svolge indagini penali',
	indirizza: 'Linee guida e pareri non vincolanti',
	norma: 'Standard tecnici volontari',
	supporta: 'Supporto e risposta agli incidenti',
};

/** Approfondimenti locali; ogni luogo è una pagina /enti/<luogo>/. Gli enti con `luogo` compaiono solo lì. */
export const LUOGHI = {
	torino: 'Torino',
};

/** Scala di un ente locale, dal micro al macro. */
export const SCALE = {
	citta: 'Città',
	metropoli: 'Area metropolitana',
	regione: 'Regione',
	transfrontaliero: 'Oltre confine',
};
