// =========================================
// 06 · IMMUTABILITY ⭐ – modulets vigtigste emne
//
// Regel: ÆNDR ALDRIG det, du får ind. Returnér altid en NY kopi.
//
//   ❌ Mutation (ændrer originalen)     ✅ Immutable (laver noget nyt)
//   liste.push(x)                       [...liste, x]
//   liste.unshift(x)                    [x, ...liste]
//   liste.splice(i, 1)                  liste.filter(...)
//   liste[i].tekst = "ny"               liste.map(... ? { ...t, tekst: "ny" } : t)
//   liste.sort()                        [...liste].sort()   eller liste.toSorted()
//   objekt.navn = "Bo"                  { ...objekt, navn: "Bo" }
//
// Testene FRYSER dine input-data. Prøver du at mutere, får du:
//   "🚫 Du ændrede (muterede) originalen!"
//
// En todo ser sådan ud:  { id: 2, tekst: "Øv spread", færdig: false }
// =========================================

// ---------- ARRAYS ----------

// 1. TILFØJ – nyt array med `todo` til sidst.
export function tilføj(todos, todo) {
  // TODO
}

// 2. TILFØJ FØRST – nyt array med `todo` forrest.
export function tilføjFørst(todos, todo) {
  // TODO
}

// 3. FJERN – nyt array uden todo'en med det givne id.
export function fjern(todos, id) {
  // TODO
}

// 4. OPDATÉR – ny tekst på todo'en med det givne id. Alle andre felter bevares.
//    Tip: map, og for hver todo: er det den rigtige? → { ...t, tekst } ellers → t
export function opdaterTekst(todos, id, tekst) {
  // TODO
}

// 5. TOGGLE – vend `færdig` (true ↔ false) på todo'en med det givne id.
export function toggle(todos, id) {
  // TODO
}

// 6. INDSÆT på en bestemt plads.
//    indsætPå(["a", "c"], 1, "b") → ["a", "b", "c"]
//    Tip: slice laver kopier: liste.slice(0, i) og liste.slice(i)
export function indsætPå(liste, index, element) {
  // TODO
}

// 7. SORTÉR uden at ændre originalen (.sort() alene muterer!).
//    sorteret(["c", "a", "b"]) → ["a", "b", "c"]
export function sorteret(liste) {
  // TODO
}

// ---------- OBJEKTER ----------

// 8. Sæt (eller overskriv) ét felt.
//    sætFelt({ navn: "Ada" }, "alder", 21) → { navn: "Ada", alder: 21 }
//    Tip: et felt-navn fra en variabel skrives i [ ]:  { ...objekt, [felt]: værdi }
export function sætFelt(objekt, felt, værdi) {
  // TODO
}

// 9. NESTED – skift byen inde i adresse. Postnummeret skal bevares.
//    { navn: "Ada", adresse: { by: "Aarhus", postnr: 8000 } }
//    → { navn: "Ada", adresse: { by: "Odense", postnr: 8000 } }
//    Tip: du skal kopiere BEGGE niveauer.
export function opdaterBy(bruger, nyBy) {
  // TODO
}

// 10. Tilføj et tag til projektets tags-array.
//     { titel: "...", tags: ["Illustrator"] } → { titel: "...", tags: ["Illustrator", "Figma"] }
export function tilføjTag(projekt, tag) {
  // TODO
}

// 11. Fjern et tag fra projektets tags-array.
export function fjernTag(projekt, tag) {
  // TODO
}

// ---------- ALT SAMLET (sådan ser state ud i React) ----------

// 12. state = { filter: "alle", projekter: [ {id, titel, likes, ...}, ... ] }
//     Returnér en NY state, hvor projektet med `id` har fået 1 like mere.
//     Tip: { ...state, projekter: state.projekter.map(...) }
export function likeProjekt(state, id) {
  // TODO
}
