# 05 · JavaScript (vanilla) – data og adfærd

Nu gør vi siden **levende**. Projekterne skrives ikke længere i HTML –
de ligger som data i `data.js`, og JavaScript tegner dem på siden.

- `data.js` – dit OOUX-objekt *Projekt* som et array af objekter (læs den først!)
- `script.js` – her skriver du din kode
- `index.html` – rør den ikke (men kig i den)

Åbn `index.html` med Live Server og hav **Console** åben i DevTools hele tiden.

## Opgaver

1. **Variabler** – `const` (kan ikke ændres) vs. `let` (kan ændres). Skriv en sætning ud med en
   template literal: `` `Jeg hedder ${navn}` ``.
2. **DOM** – Gem `#galleri`, `#antal` og `#søg` i variabler med `document.querySelector()`.
   Prøv `console.log(galleri)` – hvad får du?
3. **Funktion** – Skriv `lavKortHTML(projekt)`, der *returnerer* en tekststreng med et projekt-kort.
   Test i Console: `lavKortHTML(projekter[0])`.
4. **Løkke** – Skriv `visProjekter(liste)`, der viser alle kort i galleriet og opdaterer teksten
   "Viser X projekter". Kald `visProjekter(projekter)`.
5. **Events** – Gør like-knappen levende. Brug *event delegation*:
   én `addEventListener("click", …)` på galleriet + `event.target.closest(".like")`.
6. **Filter** – Kategori-knapperne skal vise kun de projekter, der matcher.
   Brug `projekter.filter(p => p.kategori === valgt)`. Knappen `alle` viser alt.
7. **Søgning** – Søgefeltet filtrerer på titel, mens man skriver (`"input"`-eventet).

## Bonus ⭐

- Filter **og** søgning skal virke samtidig (hint: gem begge valg i variabler og lav én `opdater()`-funktion).
- Sortér efter flest likes med `.sort((a, b) => b.likes - a.likes)`.
- Gem likes i `localStorage`, så de huskes efter genindlæsning.

## Array-metoder du lige har brugt

| Metode | Gør | Returnerer |
|--------|-----|-----------|
| `forEach` | gør noget for hvert element | intet |
| `map` | laver hvert element om | nyt array, samme længde |
| `filter` | beholder dem, der passer | nyt array, kortere/samme |
| `find` | finder det første, der passer | ét element |
| `join` | sætter array sammen til tekst | tekst |

## Tjek dig selv ✅

- [ ] Ingen røde fejl i Console.
- [ ] Du kan forklare forskellen på en funktion, der *returnerer*, og en, der *gør noget* (ændrer DOM'en).
- [ ] Du ved, hvorfor `<script defer>` er vigtigt.

👉 Løsning: [`losning/script.js`](losning/script.js)
