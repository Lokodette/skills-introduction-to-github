// =========================================
// 06 · OOP – klasser i JavaScript
// En class er en "skabelon" (opskrift). Et objekt lavet med `new` er en "instans" (kagen).
// Følg opgaverne i opgaver.md
// =========================================

// ---------- Opgave 1: Klassen Projekt ----------
// Eksemplet er påbegyndt – gør det færdigt.
class Projekt {
  constructor(id, titel, kategori, værktøjer, billede) {
    this.id = id;
    this.titel = titel;
    // TODO: gem kategori, værktøjer og billede på `this`
    this.likes = 0;
  }

  // ---------- Opgave 2: Metoder ----------
  // TODO: like() – lægger 1 til this.likes

  // TODO: tilHTML() – returnerer HTML for kortet (ligesom lavKortHTML i modul 05,
  //       men nu bruger du this.titel i stedet for projekt.titel)
}

// Test i Console:
// const test = new Projekt(1, "Test", "Web", ["HTML"], "https://picsum.photos/400/300");
// test.like(); console.log(test.likes);


// ---------- Opgave 4: Arv ----------
// TODO: class VideoProjekt extends Projekt { ... }
//   - constructor tager også `varighed` (fx "2:30") og kalder super(...)
//   - tilHTML() viser et <span class="badge">▶ 2:30</span> + resten af kortet


// ---------- Opgave 3: Klassen Galleri ----------
// TODO: class Galleri
//   - constructor(selector): gem elementet og en tom liste: this.projekter = []
//   - tilføj(projekt): push til listen
//   - vis(kategori = "alle"): tegn de projekter, der passer, ind i elementet
//   - lyt efter klik på like-knapper (event delegation) og kald projekt.like()


// ---------- Opgave 5: Brug det hele ----------
// TODO: const galleri = new Galleri("#galleri");
//       galleri.tilføj(new Projekt(...)); osv.
//       galleri.vis();
//       Kobl filter-knapperne til galleri.vis(knap.dataset.kategori)
