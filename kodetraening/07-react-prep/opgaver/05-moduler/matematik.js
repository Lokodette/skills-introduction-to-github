// =========================================
// 05b · DEFAULT export
//
//   export default function lægSammen() {}   ← højst ÉN default pr. fil
//   import lægSammen from "./fil.js";        ← importeres UDEN {} (og du må vælge navnet)
//
// I React har hver komponent-fil typisk én default export:
//   export default function Kort() { ... }
// =========================================

// TODO: Gør lægSammen til filens DEFAULT export.
function lægSammen(a, b) {
  return a + b;
}

// TODO: Gør gange til en NAMED export.
function gange(a, b) {
  return a * b;
}
