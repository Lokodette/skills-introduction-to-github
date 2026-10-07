// =========================================
// 04 · Spread og rest (...)
// Samme tre prikker – to betydninger:
//
//   SPREAD = "spred ud":  [...liste, 4]   { ...objekt, navn: "Bo" }   Math.max(...tal)
//   REST   = "saml resten": function f(...alle)   const [a, ...resten] = liste
//
// Spread er dit vigtigste værktøj til immutability (opgave 06).
// =========================================

// 1. Returnér en KOPI af arrayet (ikke det samme array!).
export function kopiér(liste) {
  // TODO
}

// 2. Saml to arrays til ét.  sammenlæg([1, 2], [3, 4]) → [1, 2, 3, 4]
export function sammenlæg(a, b) {
  // TODO
}

// 3. Returnér en KOPI af objektet.
export function kopiérObjekt(objekt) {
  // TODO
}

// 4. Flet to objekter – felter i `valg` vinder over `standard`.
//    flet({ tema: "lys", sprog: "da" }, { tema: "mørk" }) → { tema: "mørk", sprog: "da" }
//    Tip: rækkefølgen betyder noget!
export function flet(standard, valg) {
  // TODO
}

// 5. Find det største tal med Math.max og spread.
//    største([3, 9, 2]) → 9     (Math.max([3, 9, 2]) virker IKKE – prøv selv!)
export function største(tal) {
  // TODO
}

// 6. Nyt array med `element` forrest.  tilføjForan([2, 3], 1) → [1, 2, 3]
export function tilføjForan(liste, element) {
  // TODO
}

// 7. REST-parameter: funktionen skal kunne tage et vilkårligt antal tal.
//    summér(1, 2, 3) → 6
export function summér() {
  // TODO: skift parameteren til (...tal) og læg dem sammen
}

// 8. Returnér objektet UDEN feltet "hemmelig".
//    udenFelt({ id: 1, titel: "Plakat", hemmelig: "x" }) → { id: 1, titel: "Plakat" }
//    Tip: const { hemmelig, ...resten } = objekt;
export function udenFelt(objekt) {
  // TODO
}
