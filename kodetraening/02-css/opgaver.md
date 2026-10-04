# 02 · CSS – udseende og layout

`index.html` er færdig (det er løsningen fra modul 01). Du skriver kun i `style.css`.

## Opgaver

1. **Farvevariabler**: Øverst i `style.css` står `:root { }`. Lav variabler:
   `--farve-baggrund`, `--farve-tekst`, `--farve-accent`, `--radius`, `--afstand`.
   Brug dem senere med `var(--farve-accent)`.
2. **Reset + typografi**: Sæt `box-sizing: border-box` på alt (`*, *::before, *::after`).
   Giv `body` en font (fx fra Google Fonts), `line-height: 1.6`, baggrund og tekstfarve fra dine variabler.
3. **Billeder**: `img { max-width: 100%; display: block; }` – hvorfor? Prøv uden og se forskellen.
4. **Header med flexbox**: Navn til venstre, menu til højre.
   Hint: `display: flex; justify-content: space-between; align-items: center;`
   Fjern prikkerne på menuen (`list-style: none`) og læg linkene på én linje (flex igen!).
5. **Hover**: Links i menuen skifter farve til accentfarven ved hover. Tilføj `transition: color 0.2s`.
6. **Projekt-grid**: Gør `#projekter` til et grid med kort, der selv bryder linjen:
   ```css
   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
   gap: var(--afstand);
   ```
   (Tip: læg `<h2>` over hele bredden med `grid-column: 1 / -1;`)
7. **Kort-design**: `.projekt` får baggrund, `border-radius`, `overflow: hidden` og en `box-shadow`.
   Ved hover løfter kortet sig: `transform: translateY(-4px);`
8. **Tags som "pills"**: `.tags li` vises på linje med lille padding, afrundede hjørner og accentfarve.
9. **Formular**: Labels og felter under hinanden (`display: grid; gap: …`), max-bredde 500px.
   Giv felterne en tydelig `:focus`-stil.
10. **Responsivt**: Brug en `@media (max-width: 600px)` og læg menuen *under* navnet på mobil.

## Tjek dig selv ✅

- [ ] Gør browservinduet smalt og bredt – flytter kortene sig pænt?
- [ ] Skift `--farve-accent` ét sted → ændres farven overalt?
- [ ] Kan du forklare **box model**: content → padding → border → margin?

## Bonus 🌙

Lav et dark mode med `@media (prefers-color-scheme: dark)` hvor du kun ændrer variablerne.

👉 Løsning: [`losning/style.css`](losning/style.css)
