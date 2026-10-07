// Kør tests i terminalen:   npm test        (eller: node test.js)
// Se løsningernes resultat: npm run losning
import { kørAlle } from "./tjek.js";

const losning = process.argv.includes("losning");
const ikon = { ok: "✅", todo: "⏳", fejl: "❌" };
const resultater = await kørAlle({ losning });

let ok = 0;
let ialt = 0;
for (const suite of resultater) {
  console.log(`\n${suite.titel}   (${losning ? "losning" : "opgaver"}/${suite.fil})`);
  for (const t of suite.tests) {
    ialt++;
    if (t.status === "ok") ok++;
    console.log(`  ${ikon[t.status]} ${t.navn}${t.besked ? "\n       → " + t.besked : ""}`);
  }
}
console.log(`\n${ok} af ${ialt} tests bestået ${ok === ialt ? "🎉" : ""}\n`);
