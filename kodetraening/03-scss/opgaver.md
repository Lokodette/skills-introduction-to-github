# 03 · SCSS – CSS med superkræfter

SCSS er CSS + variabler, nesting, mixins og løkker. Browseren forstår **ikke** SCSS,
så den skal **kompileres** til almindelig CSS.

```
scss/_variabler.scss ─┐
scss/_mixins.scss ────┤
scss/_base.scss ──────┼──►  style.scss  ──(kompilér)──►  style.css  ◄── index.html
scss/_header.scss ────┤
scss/_projekt.scss ───┘
```

## Kom i gang

**Mulighed A – VS Code:** Installer *Live Sass Compiler*, åbn `style.scss`, klik **Watch Sass** i bunden.
**Mulighed B – terminal:** stå i mappen `03-scss` og kør
```bash
npx sass style.scss style.css --watch
```

Der kommer nu en `style.css`, hver gang du gemmer. Åbn `index.html` med Live Server.

> Filer der starter med `_` er **partials** – de bliver ikke til deres egen CSS-fil,
> men hentes ind med `@use` i `style.scss`.

## Opgaver

1. **Variabler** – Læs `scss/_variabler.scss`. Skift `$accent` til din egen farve og se siden ændre sig.
   Hvad er forskellen på `$accent` (SCSS) og `--farve-accent` (CSS)? *(SCSS-variabler forsvinder ved kompilering; CSS-variabler lever i browseren og kan ændres med JS.)*
2. **Nesting** – Se hvordan `scss/_header.scss` er skrevet. Kig derefter i den kompilerede `style.css`
   og find de selektorer, SCSS har lavet for dig.
3. **`&`-tegnet** – I `_header.scss` står `&:hover`. Tilføj selv `&:focus-visible` med samme stil.
4. **Base** – Skriv `body`, `img` og reset i `scss/_base.scss` (kopier gerne fra modul 02 og "oversæt").
5. **Mixin** – I `scss/_mixins.scss` findes `flex-center`. Lav selv en mixin `kort($skygge)` der giver
   baggrund, radius og en `box-shadow` med `$skygge` som dybde. Brug den med `@include kort(8px);` i `_projekt.scss`.
6. **Media query mixin** – Brug den færdige mixin `mobil` til at stable headeren på små skærme.
7. **`@each`-løkke** – Lav farvede tags ud fra et map:
   ```scss
   $tag-farver: (ux: #4f6bed, web: #2a9d8f, grafisk: #e4572e);

   @each $navn, $farve in $tag-farver {
     .tag--#{$navn} { background: $farve; }
   }
   ```
   Giv derefter dine `<li>` i `index.html` klasser som `class="tag--ux"`.
8. **Farvefunktioner** – Brug `color.adjust($accent, $lightness: -10%)` til hover-farven på knappen.
   (Kræver `@use "sass:color";` øverst i filen.)

## Tjek dig selv ✅

- [ ] Ingen fejl i terminalen / Live Sass Compiler.
- [ ] Du kan forklare: *variabel, nesting, partial, mixin, `@use`, `@each`*.
- [ ] Rør **aldrig** `style.css` direkte – den overskrives ved næste kompilering!

👉 Løsning: [`scss/losning/`](scss/losning/) – skift `@use`-linjerne i `style.scss` til at pege på `losning/…` for at prøve den.
