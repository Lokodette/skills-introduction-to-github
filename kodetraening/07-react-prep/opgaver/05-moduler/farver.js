// =========================================
// 05a · NAMED exports
// En fil = et modul. Alt er privat, indtil du skriver `export` foran.
//
//   export const navn = ...;          ← named export (kan være mange pr. fil)
//   import { navn } from "./fil.js";  ← importeres med {} og SAMME navn
// =========================================

// TODO: Sæt `export` foran begge konstanter.
const primær = "#e4572e";
const sekundær = "#4f6bed";

// Denne er privat og skal IKKE eksporteres:
const hemmeligFarve = "#000000";
