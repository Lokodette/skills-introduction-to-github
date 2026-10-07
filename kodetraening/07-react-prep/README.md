# 07 · React-forberedelse (Libraries and Frameworks 01)

Forberedelse til **Prep | Libraries and Frameworks 01**, der skal være klar **20. oktober kl. 8:00 (uge 43)**.
Alle emner fra pensum har deres egne opgaver med **automatiske tests**:

| Fil | Emne | MDN (pensum) |
|-----|------|--------------|
| `opgaver/01-array-metoder.js` | `map`, `filter`, `find` | [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) · [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) · [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) |
| `opgaver/02-funktioner-som-vaerdier.js` | callbacks, arrow functions, funktioner der returnerer funktioner | – |
| `opgaver/03-destructuring.js` | objekt- og array-destructuring, standardværdier | [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring) |
| `opgaver/04-spread.js` | spread og rest `...` | [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) |
| `opgaver/05-moduler/` | `import` / `export`, named og default | – |
| `opgaver/06-immutability.js` ⭐ | **tilføj, opdatér og fjern uden mutation** | – |
| `todo-app/` | Det hele samlet i en app, der fungerer som React | – |

## Sådan kører du testene

**I browseren (anbefalet):** Åbn `07-react-prep/index.html` med **Live Server**.
Du ser en liste med ✅ bestået, ⏳ ikke lavet endnu og ❌ fejl. Gem en opgavefil, og genindlæs siden.

**I terminalen:** stå i mappen `07-react-prep` og kør
```bash
npm test
```

> Kan du ikke komme videre? Kig i `losning/`. Siden `index.html?losning` viser, at alle løsninger består.

Testene **fryser** dine data. Hvis din kode ændrer originalen (fx med `push`, `sort` eller `obj.x = …`),
får du beskeden **"🚫 Du ændrede (muterede) originalen!"**. Det er præcis den fejl, React-udviklere skal lære at undgå.

---

## 📅 Læseplan frem til 20. oktober

Cirka 45–60 min om dagen. Skim MDN-linket, **før** du løser opgaverne.

| Dag | Dato | Opgave | Mål |
|-----|------|--------|-----|
| Ons | 7/10 | Skim MDN map/filter/find → **01** | 7/7 ✅ |
| Tor | 8/10 | **02** funktioner som værdier | 7/7 ✅ |
| Fre | 9/10 | Skim MDN destructuring → **03** | 7/7 ✅ |
| Weekend | 10–11/10 | Pause, eller løs 01 igen fra en tom fil | – |
| Man | 12/10 | Skim MDN spread → **04** | 8/8 ✅ |
| Tir | 13/10 | **05** moduler | 4/4 ✅ |
| Ons | 14/10 | **06** immutability, opgave 1–7 (arrays) | – |
| Tor | 15/10 | **06** immutability, opgave 8–12 (objekter) | 45/45 ✅ 🎉 |
| Fre | 16/10 | **todo-app** (TODO 1–5) | Appen virker |
| Weekend | 17–18/10 | Quiz'en "Find fejlen" herunder | – |
| Man | 19/10 | Læs snydearket. Slet dine svar i 06 og løs den igen | Klar! |

---

## 🧠 Den store idé: hvorfor immutability?

React finder ud af, om noget har ændret sig, ved at sammenligne **referencer** med `===`:

```js
const gammel = [1, 2];

gammel.push(3);                 // ❌ samme array – gammel === gammel
// React: "Det er jo samme array, så der er intet nyt at vise" → skærmen opdateres IKKE

const ny = [...gammel, 3];      // ✅ nyt array – ny !== gammel
// React: "Ny reference = noget er ændret" → tegner skærmen igen
```

Prøv det selv i `todo-app/`: knappen **"Prøv at mutere"** ændrer listen med `push`.
Skærmen opdateres ikke, men todo'en **er** i listen. Klik bagefter på et filter, så dukker den
pludselig op, selvom du aldrig har tilføjet den "rigtigt". Sådan opstår mærkelige bugs i React-apps.

## 📋 Snydeark

### Arrays
| Handling | ❌ Muterer | ✅ Immutable |
|----------|-----------|-------------|
| Tilføj sidst | `liste.push(x)` | `[...liste, x]` |
| Tilføj først | `liste.unshift(x)` | `[x, ...liste]` |
| Fjern | `liste.splice(i, 1)` | `liste.filter(x => x.id !== id)` |
| Opdatér én | `liste[i].navn = "Bo"` | `liste.map(x => x.id === id ? { ...x, navn: "Bo" } : x)` |
| Indsæt på plads | `liste.splice(i, 0, x)` | `[...liste.slice(0, i), x, ...liste.slice(i)]` |
| Sortér | `liste.sort()` | `[...liste].sort()` / `liste.toSorted()` |
| Vend om | `liste.reverse()` | `[...liste].reverse()` / `liste.toReversed()` |

### Objekter
| Handling | ❌ Muterer | ✅ Immutable |
|----------|-----------|-------------|
| Sæt felt | `obj.navn = "Bo"` | `{ ...obj, navn: "Bo" }` |
| Felt fra variabel | `obj[felt] = v` | `{ ...obj, [felt]: v }` |
| Fjern felt | `delete obj.navn` | `const { navn, ...resten } = obj` |
| Nested | `obj.adresse.by = "Odense"` | `{ ...obj, adresse: { ...obj.adresse, by: "Odense" } }` |
| Array i objekt | `obj.tags.push(t)` | `{ ...obj, tags: [...obj.tags, t] }` |

### map / filter / find
```js
projekter.map(p => p.titel)            // → ["A", "B", "C"]      samme længde
projekter.filter(p => p.likes > 10)    // → [ {...}, {...} ]     færre (eller samme)
projekter.find(p => p.id === 2)        // → { id: 2, ... }       ÉT element eller undefined
```

### Destructuring og spread i React
```js
function Kort({ titel, likes = 0 }) { ... }          // props-destructuring + standardværdi
const [antal, setAntal] = useState(0);               // array-destructuring
setTodos([...todos, nyTodo]);                        // spread = tilføj immutable
import Kort from "./Kort.js";                        // default import
import { useState } from "react";                    // named import
```

---

## 🔍 Quiz: Find fejlen

Hvad er galt med hver funktion? Svarene står under hver opgave. Tænk selv først!

**1.**
```js
function tilføjTodo(todos, todo) {
  todos.push(todo);
  return todos;
}
```
<details><summary>Svar</summary>

`push` ændrer originalen, og funktionen returnerer **samme** array. React ville ikke opdatere skærmen.
Løsning: `return [...todos, todo];`
</details>

**2.**
```js
function omdøb(bruger, navn) {
  const kopi = bruger;
  kopi.navn = navn;
  return kopi;
}
```
<details><summary>Svar</summary>

`const kopi = bruger` laver **ikke** en kopi. Det er bare et nyt navn for det samme objekt.
Løsning: `return { ...bruger, navn };`
</details>

**3.**
```js
function flytBy(bruger, by) {
  const kopi = { ...bruger };
  kopi.adresse.by = by;
  return kopi;
}
```
<details><summary>Svar</summary>

Spread kopierer kun **ét niveau** (en *shallow copy*). `kopi.adresse` er stadig det samme objekt som `bruger.adresse`.
Løsning: `return { ...bruger, adresse: { ...bruger.adresse, by } };`
</details>

**4.**
```js
function nyesteFørst(projekter) {
  return projekter.sort((a, b) => b.år - a.år);
}
```
<details><summary>Svar</summary>

`sort` sorterer **originalen** (og returnerer den). Løsning: `[...projekter].sort(...)` eller `projekter.toSorted(...)`.
</details>

**5.**
```js
const titler = projekter.map(p => { p.titel });
```
<details><summary>Svar</summary>

Med `{ }` skal en arrow function have et `return`, ellers returnerer den `undefined`. Resultatet bliver `[undefined, undefined, …]`.
Løsning: `p => p.titel` eller `p => { return p.titel; }`.
(Vil du returnere et **objekt** direkte, skal det i parentes: `p => ({ titel: p.titel })`.)
</details>

**6.**
```js
const projekt = projekter.filter(p => p.id === 2);
console.log(projekt.titel); // undefined?!
```
<details><summary>Svar</summary>

`filter` returnerer altid et **array**, også selvom der kun er ét match. Brug `find`, når du vil have ét element.
</details>

**7.**
```js
<button onClick={slet(todo.id)}>Slet</button>
```
<details><summary>Svar</summary>

Her **kaldes** `slet` med det samme (når knappen tegnes), i stedet for at blive givet videre som en funktion.
Løsning: `onClick={() => slet(todo.id)}`. Det er "funktioner som værdier" (opgave 02, `lavKlikHandler`).
</details>

**8.**
```js
// farver.js
const primær = "#e4572e";

// main.js
import { primær } from "./farver.js";   // SyntaxError!
```
<details><summary>Svar</summary>

`primær` er ikke eksporteret. Der skal stå `export const primær = …` i `farver.js`.
</details>
