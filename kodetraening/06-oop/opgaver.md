# 06 · OOP – objektorienteret JavaScript

I modul 04 fandt du **objekterne** (OOUX). Nu bygger vi dem som **klasser**.

| OOUX | OOP (JavaScript) |
|------|------------------|
| Objekt (Projekt) | `class Projekt` |
| Attributter (titel, likes) | egenskaber: `this.titel`, `this.likes` |
| CTAs (like, vis) | metoder: `like()`, `tilHTML()` |
| Relation "Galleri har mange Projekter" | `this.projekter = []` (komposition) |
| "Et VideoProjekt er et Projekt" | `class VideoProjekt extends Projekt` (arv) |

## De 4 ord du skal kende

- **Klasse** – skabelonen (`class Projekt { … }`)
- **Instans** – et konkret objekt lavet med `new Projekt(…)`
- **`this`** – "det objekt, jeg er lige nu"
- **Arv** – en klasse kan *udvide* en anden med `extends` og kalde forælderen med `super`

## Opgaver

1. **Constructor** – Gør `class Projekt` færdig i `oop.js`, så den gemmer alle attributter på `this`.
   Test i Console: `new Projekt(1, "Test", "Web", ["HTML"], "…")`.
2. **Metoder** – Tilføj `like()` og `tilHTML()`. Hvad sker der, hvis du laver to instanser og liker den ene?
   (Svar: kun den ene ændres – hver instans har sine egne data.)
3. **Galleri-klassen** – Lav `class Galleri`, der *har* en liste af projekter og kan `tilføj()` og `vis()`.
   Like-knapperne skal virke. *Hint:* brug en arrow function i `addEventListener`, ellers peger `this` forkert.
4. **Arv** – Lav `class VideoProjekt extends Projekt` med en ekstra attribut `varighed`.
   Overskriv `tilHTML()`, så der vises et badge `▶ 2:30`. Brug `super.tilHTML()` for at genbruge forælderens HTML.
5. **Saml det hele** – Opret et galleri med mindst 3 almindelige projekter og 2 videoprojekter.
   Kobl filterknapperne til `galleri.vis(kategori)`.

## Refleksion 💭

- Galleriet kalder bare `p.tilHTML()` – det ved ikke, om `p` er et Projekt eller et VideoProjekt.
  Det hedder **polymorfi**. Hvorfor er det smart, hvis du senere vil lave et `LydProjekt`?
- Sammenlign med modul 05: Hvor er det nemmest at finde koden for "hvad sker der, når man liker"?

## Bonus ⭐

- Lav en **getter**: `get erPopulær() { return this.likes >= 10; }` og vis et 🔥 på populære kort.
- Lav en `static`-metode `Projekt.fraData(obj)`, der laver en instans ud fra et objekt i `05-javascript/data.js`.
- Lav et `LydProjekt` med en `<audio>`-afspiller i kortet.

👉 Løsning: [`losning/oop.js`](losning/oop.js)
