// =========================================
// 05 · JavaScript – løsning
// =========================================

// ---------- Opgave 1: Variabler ----------
const navn = "Mit Navn";
let semester = 1;
console.log(`Jeg hedder ${navn} og går på ${semester}. semester.`);

// ---------- Opgave 2: Find elementer i DOM'en ----------
const galleri = document.querySelector("#galleri");
const antal = document.querySelector("#antal");
const søgefelt = document.querySelector("#søg");
const filterKnapper = document.querySelectorAll(".værktøjslinje button");

// Husker hvad brugeren har valgt, så filter og søgning virker sammen
let valgtKategori = "alle";
let søgetekst = "";

// ---------- Opgave 3: En funktion der laver HTML ----------
function lavKortHTML(projekt) {
  const tags = projekt.værktøjer.map((v) => `<li>${v}</li>`).join("");

  return `
    <article class="projekt">
      <img src="${projekt.billede}" alt="${projekt.titel}">
      <h3>${projekt.titel}</h3>
      <p>${projekt.beskrivelse}</p>
      <ul class="tags">${tags}</ul>
      <footer>
        <small>${projekt.kategori} · ${projekt.år}</small>
        <button class="like" data-id="${projekt.id}">❤️ ${projekt.likes}</button>
      </footer>
    </article>
  `;
}

// ---------- Opgave 4: Vis alle projekter ----------
function visProjekter(liste) {
  galleri.innerHTML = "";
  liste.forEach((projekt) => {
    galleri.innerHTML += lavKortHTML(projekt);
  });
  antal.textContent = `Viser ${liste.length} projekter`;
}

// Samler filter + søgning ét sted
function opdater() {
  const resultat = projekter.filter((p) => {
    const passerKategori = valgtKategori === "alle" || p.kategori === valgtKategori;
    const passerSøgning = p.titel.toLowerCase().includes(søgetekst);
    return passerKategori && passerSøgning;
  });
  visProjekter(resultat);
}

// ---------- Opgave 5: Like-knap (events) ----------
// "Event delegation": én lytter på galleriet i stedet for én pr. knap
galleri.addEventListener("click", (event) => {
  const knap = event.target.closest(".like");
  if (!knap) return; // der blev ikke klikket på en like-knap

  const id = Number(knap.dataset.id);
  const projekt = projekter.find((p) => p.id === id);
  projekt.likes++;
  opdater();
});

// ---------- Opgave 6: Filtrér efter kategori ----------
filterKnapper.forEach((knap) => {
  knap.addEventListener("click", () => {
    filterKnapper.forEach((k) => k.classList.remove("aktiv"));
    knap.classList.add("aktiv");
    valgtKategori = knap.dataset.kategori;
    opdater();
  });
});

// ---------- Opgave 7: Søgning ----------
søgefelt.addEventListener("input", () => {
  søgetekst = søgefelt.value.toLowerCase();
  opdater();
});

// Start
opdater();
