// =========================================
// 06 · OOP – løsning
// =========================================

// ---------- Opgave 1 + 2: Klassen Projekt ----------
class Projekt {
  constructor(id, titel, kategori, værktøjer, billede) {
    this.id = id;
    this.titel = titel;
    this.kategori = kategori;
    this.værktøjer = værktøjer;
    this.billede = billede;
    this.likes = 0;
  }

  like() {
    this.likes++;
  }

  // Lille hjælpemetode – bruges af tilHTML() og af VideoProjekt
  tagsHTML() {
    return this.værktøjer.map((v) => `<li>${v}</li>`).join("");
  }

  tilHTML() {
    return `
      <article class="projekt">
        <img src="${this.billede}" alt="${this.titel}">
        <h3>${this.titel}</h3>
        <ul class="tags">${this.tagsHTML()}</ul>
        <footer>
          <small>${this.kategori}</small>
          <button class="like" data-id="${this.id}">❤️ ${this.likes}</button>
        </footer>
      </article>
    `;
  }
}

// ---------- Opgave 4: Arv ----------
// VideoProjekt ER ET Projekt – det arver alt og tilføjer lidt ekstra
class VideoProjekt extends Projekt {
  constructor(id, titel, kategori, værktøjer, billede, varighed) {
    super(id, titel, kategori, værktøjer, billede); // kør Projekt's constructor først
    this.varighed = varighed;
  }

  // Overskriver (override) forælderens metode
  tilHTML() {
    const kort = super.tilHTML(); // hent forælderens HTML…
    // …og sæt et badge ind lige efter <article>
    return kort.replace(
      '<article class="projekt">',
      `<article class="projekt"><span class="badge">▶ ${this.varighed}</span>`
    );
  }
}

// ---------- Opgave 3: Klassen Galleri ----------
// Galleri HAR projekter (komposition) – det er ikke selv et projekt
class Galleri {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.antalElement = document.querySelector("#antal");
    this.projekter = [];
    this.kategori = "alle";

    // Arrow function, så `this` stadig peger på Galleri inde i lytteren
    this.element.addEventListener("click", (event) => {
      const knap = event.target.closest(".like");
      if (!knap) return;
      const projekt = this.find(Number(knap.dataset.id));
      projekt.like();
      this.vis(this.kategori);
    });
  }

  tilføj(projekt) {
    this.projekter.push(projekt);
  }

  find(id) {
    return this.projekter.find((p) => p.id === id);
  }

  vis(kategori = "alle") {
    this.kategori = kategori;
    const synlige = this.projekter.filter(
      (p) => kategori === "alle" || p.kategori === kategori
    );
    // Polymorfi: hvert objekt ved selv, hvordan det skal tegnes
    this.element.innerHTML = synlige.map((p) => p.tilHTML()).join("");
    this.antalElement.textContent = `Viser ${synlige.length} projekter`;
  }
}

// ---------- Opgave 5: Brug det hele ----------
const galleri = new Galleri("#galleri");

galleri.tilføj(new Projekt(1, "Festivalplakat", "Grafisk", ["Illustrator"], "https://picsum.photos/400/300?random=1"));
galleri.tilføj(new Projekt(2, "Cykel-app", "UX", ["Figma"], "https://picsum.photos/400/300?random=2"));
galleri.tilføj(new Projekt(3, "Café-website", "Web", ["HTML", "CSS"], "https://picsum.photos/400/300?random=3"));
galleri.tilføj(new VideoProjekt(4, "Motion-intro", "Grafisk", ["After Effects"], "https://picsum.photos/400/300?random=4", "0:45"));
galleri.tilføj(new VideoProjekt(5, "UX-case video", "UX", ["Premiere Pro"], "https://picsum.photos/400/300?random=5", "2:30"));

galleri.vis();

const knapper = document.querySelectorAll(".værktøjslinje button");
knapper.forEach((knap) => {
  knap.addEventListener("click", () => {
    knapper.forEach((k) => k.classList.remove("aktiv"));
    knap.classList.add("aktiv");
    galleri.vis(knap.dataset.kategori);
  });
});
