// =========================================
// 01 · Array-metoder: map, filter, find
// Alle tre laver IKKE originalen om – de returnerer noget nyt.
//
//   map    → nyt array, SAMME længde, hvert element omdannet
//   filter → nyt array, kun de elementer, hvor funktionen giver true
//   find   → det FØRSTE element, der passer (eller undefined)
//
// Et projekt ser sådan ud:
//   { id: 2, titel: "Cykel-app", kategori: "UX", likes: 30, tags: ["Figma"] }
// =========================================

// 1. Returnér et array med kun titlerne.
//    titler(projekter) → ["Festivalplakat", "Cykel-app", ...]
export function titler(projekter) {
  // TODO: brug map
}

// 2. Læg 25 % moms til hver pris.
//    medMoms([100, 200]) → [125, 250]
export function medMoms(priser) {
  // TODO: brug map
}

// 3. Returnér kun projekter i den givne kategori.
//    kunKategori(projekter, "UX") → [ {id: 2 ...}, {id: 4 ...} ]
export function kunKategori(projekter, kategori) {
  // TODO: brug filter
}

// 4. Returnér projekter med mindst `minLikes` likes.
export function populære(projekter, minLikes) {
  // TODO: brug filter
}

// 5. Find projektet med det givne id (eller undefined, hvis det ikke findes).
export function findProjekt(projekter, id) {
  // TODO: brug find
}

// 6. Titlerne på projekterne i én kategori.
//    titlerIKategori(projekter, "UX") → ["Cykel-app", "Museums-guide"]
//    Tip: du kan sætte metoder i kæde: projekter.filter(...).map(...)
export function titlerIKategori(projekter, kategori) {
  // TODO
}

// 7. Lav et <li> pr. projekt (sådan laver man lister i React – bare med JSX).
//    listepunkter(projekter) → ["<li>Festivalplakat</li>", "<li>Cykel-app</li>", ...]
export function listepunkter(projekter) {
  // TODO
}
