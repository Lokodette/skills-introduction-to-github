# 01 · HTML – struktur og semantik

HTML beskriver **hvad** indholdet er – ikke hvordan det ser ud.
Åbn `index.html`. Den er næsten tom, og der står `TODO` de steder, du skal skrive kode.

## Opgaver

1. **Head**: Giv siden en `<title>` med dit navn + "Portfolio". Tjek at `lang="da"` står på `<html>`.
2. **Header**: Lav en `<header>` med en `<h1>` (dit navn) og en `<nav>` med en `<ul>` og tre links:
   *Projekter*, *Om mig*, *Kontakt*. Linkene skal pege på `#projekter`, `#om` og `#kontakt`.
3. **Projekter**: Inde i `<main>` laver du en `<section id="projekter">` med en `<h2>`.
   Tilføj **tre** `<article class="projekt">`. Hver skal have:
   - et `<img>` (brug `https://picsum.photos/400/300?random=1` osv.) **med en god `alt`-tekst**
   - en `<h3>` med projektets titel
   - en `<p>` med en kort beskrivelse
   - en `<ul class="tags">` med 2–3 `<li>` (fx *Grafisk design*, *Figma*)
4. **Om mig**: En `<section id="om">` med en overskrift og to afsnit.
5. **Kontakt**: En `<section id="kontakt">` med en `<form>`:
   - `<label>` + `<input type="text">` til navn
   - `<label>` + `<input type="email">` til e-mail
   - `<label>` + `<textarea>` til besked
   - en `<button type="submit">`
   Husk: `for` på label skal matche `id` på input!
6. **Footer**: `<footer>` med `&copy; 2026` og dit navn.

## Tjek dig selv ✅

- [ ] Kun **én** `<h1>` på siden, og overskrifterne går i rækkefølge (h1 → h2 → h3).
- [ ] Alle billeder har en beskrivende `alt`.
- [ ] Klik på et label → kommer markøren i det rigtige felt?
- [ ] Kør koden igennem [validator.w3.org](https://validator.w3.org/#validate_by_input) – 0 fejl.

## Ord du skal kende

`element` · `tag` · `attribut` · `semantisk` · `nesting (indlejring)` · `block vs. inline`

👉 Løsning: [`losning/index.html`](losning/index.html)
