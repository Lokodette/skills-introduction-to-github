// =========================================
// 03 · Destructuring – "pak værdier ud" af objekter og arrays
//
//   const { navn, alder } = person;      // objekt: efter NAVN
//   const [første, anden] = liste;       // array:  efter PLADS
//
// I React ser du det overalt:
//   function Kort({ titel, likes }) { ... }      ← props
//   const [antal, setAntal] = useState(0);       ← state
// =========================================

// 1. Brug destructuring i parameteren.
//    præsentér({ navn: "Ada", alder: 21 }) → "Ada er 21 år"
export function præsentér(person) {
  // TODO: skift parameteren til ({ navn, alder })
}

// 2. Første element for sig, resten i et array (rest: ...).
//    førsteOgResten([1, 2, 3]) → { første: 1, resten: [2, 3] }
export function førsteOgResten(liste) {
  // TODO: const [første, ...resten] = liste;
}

// 3. Byt rundt på to værdier.
//    byt(["a", "b"]) → ["b", "a"]
export function byt(par) {
  // TODO
}

// 4. Hent byen inde i adresse. Hvis der ikke er en by, returnér "Ukendt".
//    hentBy({ navn: "Ada", adresse: { by: "Aarhus" } }) → "Aarhus"
//    Tip: const { adresse: { by = "Ukendt" } } = bruger;
export function hentBy(bruger) {
  // TODO
}

// 5. Standardværdi direkte i parameteren.
//    kortTekst({ titel: "Plakat", likes: 5 }) → "Plakat (5 likes)"
//    kortTekst({ titel: "Logo" })            → "Logo (0 likes)"
export function kortTekst(projekt) {
  // TODO: ({ titel, likes = 0 })
}

// 6. useState-mønsteret: returnér et ARRAY med [værdi, funktion].
//    const [værdi, næste] = lavTæller(3);
//    værdi   → 3
//    næste() → 4
export function lavTæller(start) {
  // TODO
}

// 7. Destructuring i en map-callback.
//    beskrivelser(projekter) → ["Festivalplakat – Grafisk", "Cykel-app – UX", ...]
//    Tip: projekter.map(({ titel, kategori }) => ...)
export function beskrivelser(projekter) {
  // TODO
}
