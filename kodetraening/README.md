# 🎨 Kodetræning – fra HTML til OOP

Et øve-kit til en multimediedesigner-studerende. Alle seks moduler bygger det **samme projekt**:
et lille **portfolio-galleri**, hvor du viser dine projekter. Hvert modul tilføjer ét nyt lag.

| # | Modul | Hvad du lærer | Tid ca. |
|---|-------|---------------|---------|
| 01 | [HTML](01-html/opgaver.md) | Semantisk struktur: `header`, `main`, `article`, billeder, links, formular | 1–2 t |
| 02 | [CSS](02-css/opgaver.md) | Selektorer, box model, farver som variabler, flexbox, grid, hover | 2–3 t |
| 03 | [SCSS](03-scss/opgaver.md) | Variabler, nesting, partials, mixins, `@each`-løkker | 2 t |
| 04 | [OOUX](04-ooux/opgaver.md) | Tænk i *objekter* før du designer: ORCA-metoden | 1–2 t |
| 05 | [JavaScript](05-javascript/opgaver.md) | Variabler, funktioner, arrays, DOM, events, filter | 3 t |
| 06 | [OOP](06-oop/opgaver.md) | `class`, `constructor`, metoder, arv (`extends`) | 2–3 t |

## Sådan arbejder du

1. Åbn mappen `kodetraening` i **VS Code**.
2. Installer udvidelsen **Live Server** (højreklik på en `.html`-fil → *Open with Live Server*).
3. Til modul 03 (SCSS): installer **Live Sass Compiler** og klik *Watch Sass* nederst i VS Code.
4. Læs `opgaver.md` i hvert modul og løs opgaverne i rækkefølge.
5. Kig først i `losning/`-mappen, når du har prøvet selv. 😉

## Gode vaner fra dag ét

- **Gem og genindlæs ofte.** Små skridt = færre fejl.
- **Brug DevTools** (F12 / Cmd+Opt+I): *Elements* til HTML/CSS, *Console* til JavaScript.
- **Commit efter hver løst opgave**, fx `git commit -m "CSS: opgave 3 – flexbox header"`.
- **Valider din kode**: [HTML-validator](https://validator.w3.org/) · [MDN](https://developer.mozilla.org/da/) er dit opslagsværk.

## Den røde tråd

```
OOUX (hvilke ting findes?)  →  HTML (struktur)  →  CSS/SCSS (udseende)
          ↓                                             ↓
   OOP (ting som klasser)   ←   JavaScript (adfærd og data)
```

Et **Projekt** i dit OOUX-kort bliver til et `<article class="projekt">` i HTML,
til `.projekt { … }` i CSS – og til `class Projekt { … }` i JavaScript. Samme ting, fire sprog.
