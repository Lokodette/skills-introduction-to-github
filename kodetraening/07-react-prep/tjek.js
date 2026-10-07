// =========================================
// TEST-MOTOR – du behøver ikke røre denne fil
// (men læs den gerne, den bruger alt det, du øver!)
//
// Bruges af index.html (browser) og kør.js (terminal).
// =========================================

// ---------- Hjælpere ----------

class TodoFejl extends Error {}

// Fryser et objekt helt ned i bunden. Prøver din kode at ændre det,
// kaster JavaScript en fejl – sådan fanger vi mutation.
function frys(værdi) {
  if (værdi && typeof værdi === "object") {
    Object.values(værdi).forEach(frys);
    Object.freeze(værdi);
  }
  return værdi;
}

// Frisk, frosset kopi af testdata til hver test
const ny = (data) => frys(structuredClone(data));

function ens(a, b) {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const nøglerA = Object.keys(a);
  const nøglerB = Object.keys(b);
  return nøglerA.length === nøglerB.length && nøglerA.every((k) => ens(a[k], b[k]));
}

const vis = (v) => (v === undefined ? "undefined" : JSON.stringify(v));

function forvent(faktisk, forventet, hvad = "Resultat") {
  if (faktisk === undefined && forventet !== undefined) {
    throw new TodoFejl("Ikke lavet endnu (funktionen returnerer undefined)");
  }
  if (!ens(faktisk, forventet)) {
    throw new Error(`${hvad}: forventede ${vis(forventet)}, men fik ${vis(faktisk)}`);
  }
}

function nyReference(resultat, original) {
  if (resultat === original) {
    throw new Error("Du returnerede den SAMME array/objekt. Lav en ny kopi med [...] eller {...}");
  }
}

function påkrævet(fn, navn) {
  if (typeof fn !== "function") throw new TodoFejl(`Mangler: export af funktionen "${navn}"`);
}

const test = (navn, fn) => ({ navn, fn });

// ---------- Testdata ----------

const PROJEKTER = [
  { id: 1, titel: "Festivalplakat", kategori: "Grafisk", likes: 12, tags: ["Illustrator"] },
  { id: 2, titel: "Cykel-app", kategori: "UX", likes: 30, tags: ["Figma"] },
  { id: 3, titel: "Café-website", kategori: "Web", likes: 8, tags: ["HTML", "CSS"] },
  { id: 4, titel: "Museums-guide", kategori: "UX", likes: 17, tags: ["Figma", "Maze"] },
];

const TODOS = [
  { id: 1, tekst: "Læs om map", færdig: true },
  { id: 2, tekst: "Øv spread", færdig: false },
  { id: 3, tekst: "Lav todo-app", færdig: false },
];

const ids = (liste) => liste?.map((x) => x.id);

// ---------- Opgaverne ----------

export const suiter = [
  {
    fil: "01-array-metoder.js",
    titel: "01 · Array-metoder: map, filter, find",
    tests: [
      test("titler() – map til titler", (m) => {
        påkrævet(m.titler, "titler");
        forvent(m.titler(ny(PROJEKTER)), ["Festivalplakat", "Cykel-app", "Café-website", "Museums-guide"]);
      }),
      test("medMoms() – læg 25 % til", (m) => {
        påkrævet(m.medMoms, "medMoms");
        forvent(m.medMoms(ny([100, 200, 40])), [125, 250, 50]);
      }),
      test("kunKategori() – filter", (m) => {
        påkrævet(m.kunKategori, "kunKategori");
        forvent(ids(m.kunKategori(ny(PROJEKTER), "UX")), [2, 4]);
        forvent(ids(m.kunKategori(ny(PROJEKTER), "Lyd")), [], "Ingen match");
      }),
      test("populære() – filter med minimum", (m) => {
        påkrævet(m.populære, "populære");
        forvent(ids(m.populære(ny(PROJEKTER), 15)), [2, 4]);
      }),
      test("findProjekt() – find", (m) => {
        påkrævet(m.findProjekt, "findProjekt");
        forvent(m.findProjekt(ny(PROJEKTER), 3)?.titel, "Café-website");
        forvent(m.findProjekt(ny(PROJEKTER), 99), undefined, "Ukendt id");
      }),
      test("titlerIKategori() – filter + map i kæde", (m) => {
        påkrævet(m.titlerIKategori, "titlerIKategori");
        forvent(m.titlerIKategori(ny(PROJEKTER), "UX"), ["Cykel-app", "Museums-guide"]);
      }),
      test("listepunkter() – map til <li>-tekst", (m) => {
        påkrævet(m.listepunkter, "listepunkter");
        forvent(m.listepunkter(ny(PROJEKTER))?.slice(0, 2), ["<li>Festivalplakat</li>", "<li>Cykel-app</li>"]);
      }),
    ],
  },
  {
    fil: "02-funktioner-som-vaerdier.js",
    titel: "02 · Funktioner som værdier",
    tests: [
      test("dobbelt – arrow function i en variabel", (m) => {
        påkrævet(m.dobbelt, "dobbelt");
        forvent(m.dobbelt(4), 8);
      }),
      test("udfør() – modtager en funktion", (m) => {
        påkrævet(m.udfør, "udfør");
        forvent(m.udfør(5, (x) => x * 2), 10);
        forvent(m.udfør(5, (x) => x - 1), 4);
      }),
      test("minMap() – din egen map (uden .map)", (m) => {
        påkrævet(m.minMap, "minMap");
        if (m.minMap.toString().includes(".map(")) throw new Error("Snyd! Brug en løkke i stedet for .map 😉");
        forvent(m.minMap(ny([1, 2, 3]), (x) => x * 10), [10, 20, 30]);
      }),
      test("minFilter() – din egen filter (uden .filter)", (m) => {
        påkrævet(m.minFilter, "minFilter");
        if (m.minFilter.toString().includes(".filter(")) throw new Error("Snyd! Brug en løkke i stedet for .filter 😉");
        forvent(m.minFilter(ny([1, 2, 3, 4]), (x) => x % 2 === 0), [2, 4]);
      }),
      test("lavGanger() – funktion der returnerer en funktion", (m) => {
        påkrævet(m.lavGanger, "lavGanger");
        const gangeMed3 = m.lavGanger(3);
        if (typeof gangeMed3 !== "function") throw new TodoFejl("lavGanger(3) skal returnere en funktion");
        forvent(gangeMed3(5), 15);
      }),
      test("erKategori() – lav din egen filter-funktion", (m) => {
        påkrævet(m.erKategori, "erKategori");
        const fn = m.erKategori("UX");
        if (typeof fn !== "function") throw new TodoFejl('erKategori("UX") skal returnere en funktion');
        forvent(ids(ny(PROJEKTER).filter(fn)), [2, 4]);
      }),
      test("lavKlikHandler() – som onClick i React", (m) => {
        påkrævet(m.lavKlikHandler, "lavKlikHandler");
        const handler = m.lavKlikHandler("Ada");
        if (typeof handler !== "function") throw new TodoFejl("lavKlikHandler skal returnere en funktion");
        forvent(handler(), "Hej, Ada!");
      }),
    ],
  },
  {
    fil: "03-destructuring.js",
    titel: "03 · Destructuring",
    tests: [
      test("præsentér() – objekt-destructuring", (m) => {
        påkrævet(m.præsentér, "præsentér");
        forvent(m.præsentér(ny({ navn: "Ada", alder: 21, by: "Aarhus" })), "Ada er 21 år");
      }),
      test("førsteOgResten() – array-destructuring + rest", (m) => {
        påkrævet(m.førsteOgResten, "førsteOgResten");
        forvent(m.førsteOgResten(ny([1, 2, 3])), { første: 1, resten: [2, 3] });
      }),
      test("byt() – byt om på to værdier", (m) => {
        påkrævet(m.byt, "byt");
        forvent(m.byt(ny(["a", "b"])), ["b", "a"]);
      }),
      test("hentBy() – nested + standardværdi", (m) => {
        påkrævet(m.hentBy, "hentBy");
        forvent(m.hentBy(ny({ navn: "Ada", adresse: { by: "Aarhus" } })), "Aarhus");
        forvent(m.hentBy(ny({ navn: "Bo", adresse: {} })), "Ukendt", "Uden by");
      }),
      test("kortTekst() – standardværdi i parameter", (m) => {
        påkrævet(m.kortTekst, "kortTekst");
        forvent(m.kortTekst(ny({ titel: "Plakat", likes: 5 })), "Plakat (5 likes)");
        forvent(m.kortTekst(ny({ titel: "Logo" })), "Logo (0 likes)", "Uden likes");
      }),
      test("lavTæller() – useState-mønsteret [værdi, funktion]", (m) => {
        påkrævet(m.lavTæller, "lavTæller");
        const resultat = m.lavTæller(3);
        if (!Array.isArray(resultat)) throw new TodoFejl("lavTæller skal returnere et array: [værdi, funktion]");
        const [værdi, næste] = resultat;
        forvent(værdi, 3, "Værdi");
        if (typeof næste !== "function") throw new Error("Plads nr. 2 i arrayet skal være en funktion");
        forvent(næste(), 4, "næste()");
      }),
      test("beskrivelser() – destructuring i map-callback", (m) => {
        påkrævet(m.beskrivelser, "beskrivelser");
        forvent(m.beskrivelser(ny(PROJEKTER))?.slice(0, 2), ["Festivalplakat – Grafisk", "Cykel-app – UX"]);
      }),
    ],
  },
  {
    fil: "04-spread.js",
    titel: "04 · Spread og rest (...)",
    tests: [
      test("kopiér() – kopi af array", (m) => {
        påkrævet(m.kopiér, "kopiér");
        const original = ny([1, 2, 3]);
        const kopi = m.kopiér(original);
        forvent(kopi, [1, 2, 3]);
        nyReference(kopi, original);
      }),
      test("sammenlæg() – to arrays til ét", (m) => {
        påkrævet(m.sammenlæg, "sammenlæg");
        forvent(m.sammenlæg(ny([1, 2]), ny([3, 4])), [1, 2, 3, 4]);
      }),
      test("kopiérObjekt() – kopi af objekt", (m) => {
        påkrævet(m.kopiérObjekt, "kopiérObjekt");
        const original = ny({ navn: "Ada", alder: 21 });
        const kopi = m.kopiérObjekt(original);
        forvent(kopi, { navn: "Ada", alder: 21 });
        nyReference(kopi, original);
      }),
      test("flet() – indstillinger overskriver standard", (m) => {
        påkrævet(m.flet, "flet");
        forvent(m.flet(ny({ tema: "lys", sprog: "da" }), ny({ tema: "mørk" })), { tema: "mørk", sprog: "da" });
      }),
      test("største() – spread ind i Math.max", (m) => {
        påkrævet(m.største, "største");
        forvent(m.største(ny([3, 9, 2])), 9);
      }),
      test("tilføjForan() – nyt element først", (m) => {
        påkrævet(m.tilføjForan, "tilføjForan");
        forvent(m.tilføjForan(ny([2, 3]), 1), [1, 2, 3]);
      }),
      test("summér() – rest-parameter", (m) => {
        påkrævet(m.summér, "summér");
        forvent(m.summér(1, 2, 3), 6);
        forvent(m.summér(10), 10, "Ét tal");
      }),
      test("udenFelt() – rest i objekt-destructuring", (m) => {
        påkrævet(m.udenFelt, "udenFelt");
        forvent(m.udenFelt(ny({ id: 1, titel: "Plakat", hemmelig: "x" })), { id: 1, titel: "Plakat" });
      }),
    ],
  },
  {
    fil: "05-moduler/farver.js",
    titel: "05a · Moduler: named exports (farver.js)",
    tests: [
      test("primær og sekundær er eksporteret", (m) => {
        if (m.primær === undefined) throw new TodoFejl('Mangler: export af "primær"');
        if (m.sekundær === undefined) throw new TodoFejl('Mangler: export af "sekundær"');
        if (!String(m.primær).startsWith("#")) throw new Error("primær skal være en hex-farve, fx #e4572e");
      }),
    ],
  },
  {
    fil: "05-moduler/matematik.js",
    titel: "05b · Moduler: default export (matematik.js)",
    tests: [
      test("lægSammen er default export", (m) => {
        påkrævet(m.default, "default (lægSammen)");
        forvent(m.default(2, 3), 5);
      }),
      test("gange er named export", (m) => {
        påkrævet(m.gange, "gange");
        forvent(m.gange(2, 3), 6);
      }),
    ],
  },
  {
    fil: "05-moduler/main.js",
    titel: "05c · Moduler: import (main.js)",
    tests: [
      test("rapport bruger begge imports", (m) => {
        if (m.rapport === undefined) throw new TodoFejl('Mangler: "rapport" (husk imports øverst i main.js)');
        if (!/Primær: #/.test(m.rapport)) throw new Error(`rapport skal indeholde "Primær: #..." – fik "${m.rapport}"`);
        if (!m.rapport.includes("2+3=5")) throw new Error(`rapport skal indeholde "2+3=5" – fik "${m.rapport}"`);
      }),
    ],
  },
  {
    fil: "06-immutability.js",
    titel: "06 · Immutability ⭐ (modulets hovedemne)",
    tests: [
      test("tilføj() – tilføj til sidst", (m) => {
        påkrævet(m.tilføj, "tilføj");
        const todos = ny(TODOS);
        const res = m.tilføj(todos, { id: 4, tekst: "Ny", færdig: false });
        forvent(ids(res), [1, 2, 3, 4]);
        nyReference(res, todos);
      }),
      test("tilføjFørst() – tilføj forrest", (m) => {
        påkrævet(m.tilføjFørst, "tilføjFørst");
        forvent(ids(m.tilføjFørst(ny(TODOS), { id: 0, tekst: "Først", færdig: false })), [0, 1, 2, 3]);
      }),
      test("fjern() – fjern ud fra id", (m) => {
        påkrævet(m.fjern, "fjern");
        forvent(ids(m.fjern(ny(TODOS), 2)), [1, 3]);
      }),
      test("opdaterTekst() – opdatér ét element", (m) => {
        påkrævet(m.opdaterTekst, "opdaterTekst");
        const todos = ny(TODOS);
        const res = m.opdaterTekst(todos, 2, "Øv spread ✨");
        forvent(res?.[1]?.tekst, "Øv spread ✨", "Ny tekst");
        forvent(res[1].færdig, false, "færdig skal bevares");
        nyReference(res[1], todos[1]);
        if (res[0] !== todos[0]) throw new Error("Uændrede todos skal genbruges (returnér p, ikke en kopi)");
      }),
      test("toggle() – vend færdig true/false", (m) => {
        påkrævet(m.toggle, "toggle");
        const res = m.toggle(ny(TODOS), 2);
        forvent(res?.map((t) => t.færdig), [true, true, false]);
      }),
      test("indsætPå() – indsæt på en plads", (m) => {
        påkrævet(m.indsætPå, "indsætPå");
        forvent(m.indsætPå(ny(["a", "c"]), 1, "b"), ["a", "b", "c"]);
      }),
      test("sorteret() – sortér uden at ændre originalen", (m) => {
        påkrævet(m.sorteret, "sorteret");
        forvent(m.sorteret(ny(["c", "a", "b"])), ["a", "b", "c"]);
      }),
      test("sætFelt() – nyt/ændret felt på objekt", (m) => {
        påkrævet(m.sætFelt, "sætFelt");
        const bruger = ny({ navn: "Ada" });
        const res = m.sætFelt(bruger, "alder", 21);
        forvent(res, { navn: "Ada", alder: 21 });
        nyReference(res, bruger);
      }),
      test("opdaterBy() – nested objekt", (m) => {
        påkrævet(m.opdaterBy, "opdaterBy");
        const bruger = ny({ navn: "Ada", adresse: { by: "Aarhus", postnr: 8000 } });
        const res = m.opdaterBy(bruger, "Odense");
        forvent(res, { navn: "Ada", adresse: { by: "Odense", postnr: 8000 } });
        nyReference(res.adresse, bruger.adresse);
      }),
      test("tilføjTag() – array inde i objekt", (m) => {
        påkrævet(m.tilføjTag, "tilføjTag");
        forvent(m.tilføjTag(ny(PROJEKTER[0]), "Figma")?.tags, ["Illustrator", "Figma"]);
      }),
      test("fjernTag() – fjern fra array inde i objekt", (m) => {
        påkrævet(m.fjernTag, "fjernTag");
        forvent(m.fjernTag(ny(PROJEKTER[3]), "Figma")?.tags, ["Maze"]);
      }),
      test("likeProjekt() – state med liste indeni (som i React)", (m) => {
        påkrævet(m.likeProjekt, "likeProjekt");
        const state = ny({ filter: "alle", projekter: PROJEKTER });
        const res = m.likeProjekt(state, 2);
        forvent(res?.projekter?.map((p) => p.likes), [12, 31, 8, 17]);
        forvent(res.filter, "alle", "filter skal bevares");
        nyReference(res, state);
        nyReference(res.projekter, state.projekter);
      }),
    ],
  },
];

// ---------- Kør alle tests ----------

function vurdér(fejl) {
  if (fejl instanceof TodoFejl) return { status: "todo", besked: fejl.message };
  if (fejl instanceof TypeError && /read.only|not extensible|Cannot (add|delete|assign)/i.test(fejl.message)) {
    return {
      status: "fejl",
      besked: "🚫 Du ændrede (muterede) originalen! Lav en kopi i stedet. (" + fejl.message + ")",
    };
  }
  return { status: "fejl", besked: fejl.message };
}

export async function kørAlle({ losning = false } = {}) {
  const mappe = losning ? "./losning/" : "./opgaver/";
  const resultater = [];

  for (const suite of suiter) {
    let modul;
    try {
      modul = await import(new URL(mappe + suite.fil, import.meta.url).href);
    } catch (fejl) {
      resultater.push({
        titel: suite.titel,
        fil: suite.fil,
        tests: suite.tests.map((t) => ({
          navn: t.navn,
          status: "fejl",
          besked: "Filen kunne ikke indlæses: " + fejl.message,
        })),
      });
      continue;
    }

    const tests = suite.tests.map((t) => {
      try {
        t.fn(modul);
        return { navn: t.navn, status: "ok", besked: "" };
      } catch (fejl) {
        return { navn: t.navn, ...vurdér(fejl) };
      }
    });
    resultater.push({ titel: suite.titel, fil: suite.fil, tests });
  }
  return resultater;
}
