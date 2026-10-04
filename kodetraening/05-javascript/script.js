// =========================================
// 05 · JavaScript – skriv din kode her
// Åbn Console i DevTools (F12) for at se console.log()
// Følg opgaverne i opgaver.md
// =========================================

console.log("Hej fra script.js 👋");
console.log("Antal projekter:", projekter.length);

// ---------- Opgave 1: Variabler ----------
// TODO: Lav en const med dit navn og en let med et tal.
// Skriv dem ud med en template literal: `Jeg hedder ${navn}`


// ---------- Opgave 2: Find elementer i DOM'en ----------
// TODO: Gem #galleri, #antal og #søg i tre const-variabler med document.querySelector()


// ---------- Opgave 3: En funktion der laver HTML ----------
// TODO: Skriv funktionen lavKortHTML(projekt), der RETURNERER en tekststreng
// med et <article class="projekt"> (billede, titel, beskrivelse, tags og en like-knap).
// Tip: projekt.værktøjer.map(v => `<li>${v}</li>`).join("")


// ---------- Opgave 4: Vis alle projekter ----------
// TODO: Skriv funktionen visProjekter(liste), der
//   1) tømmer galleriet: galleri.innerHTML = ""
//   2) løber listen igennem med forEach og tilføjer lavKortHTML(...)
//   3) skriver "Viser X projekter" i #antal
// Kald den til sidst: visProjekter(projekter);


// ---------- Opgave 5: Like-knap (events) ----------
// TODO: Lyt efter "click" på galleriet. Hvis der blev klikket på en .like-knap:
//   find projektet med .find(), læg 1 til likes og vis listen igen.


// ---------- Opgave 6: Filtrér efter kategori ----------
// TODO: Find alle knapper i .værktøjslinje. Ved klik:
//   læs knap.dataset.kategori, brug projekter.filter(...) og kald visProjekter().
//   Flyt klassen "aktiv" til den knap, der blev klikket på.


// ---------- Opgave 7: Søgning ----------
// TODO: Lyt efter "input" på søgefeltet og vis kun projekter,
//   hvis titel indeholder søgeteksten (brug .toLowerCase() og .includes()).
