# 04 · OOUX – tænk i objekter, før du designer

**OOUX** (Object-Oriented UX) betyder: Find først de **ting** (objekter), brugeren tænker i –
*så* designer du skærmene. Det er designerens version af OOP, og den gør det meget nemmere
at kode bagefter, fordi dine objekter bliver til klasser (modul 06).

Metoden hedder **ORCA**:

| Trin | Spørgsmål | Eksempel (portfolio) |
|------|-----------|----------------------|
| **O**bjects | Hvilke *navneord* er vigtige for brugeren? | Projekt, Kategori, Værktøj, Designer |
| **R**elationships | Hvordan hænger de sammen? | Et Projekt har én Kategori og mange Værktøjer |
| **C**TAs | Hvad kan man *gøre* med hvert objekt? | Projekt: se, like, dele, filtrere |
| **A**ttributes | Hvilke *egenskaber* har det? | Projekt: titel, billede, beskrivelse, år, likes |

## Gennemarbejdet eksempel: objektet **Projekt**

```
┌──────────────────── PROJEKT ────────────────────┐
│ Attributter (indhold)   │ titel, billede, beskrivelse, år
│ Attributter (metadata)  │ kategori, værktøjer, likes
│ Relationer              │ → 1 Kategori  → mange Værktøjer  → 1 Designer
│ CTAs                    │ Se detaljer · Like · Del · Filtrer efter kategori
└─────────────────────────────────────────────────┘
```

Læg mærke til **genbrug**: Et Projekt vises som et *kort* i galleriet og som en *fuld side*
ved klik. Samme objekt, to visninger – derfor laver vi ÉN komponent `.projekt` i CSS
og ÉN `class Projekt` i JavaScript.

## Opgaver

1. **Navneords-jagt**: Læs denne brugerhistorie og streg alle navneord under:
   > *"Som rekrutterer vil jeg kunne se en designers projekter, filtrere dem efter kategori
   > og se hvilke værktøjer der er brugt, så jeg hurtigt kan vurdere om designeren passer til jobbet."*
   Hvilke er rigtige objekter, og hvilke er bare attributter?
2. **Objekt-kort**: Udfyld skabelonen nedenfor for **Kategori** og **Værktøj** (på papir, i Figma eller FigJam).
3. **Relationsmatrix**: Lav en tabel med objekterne både som rækker og kolonner,
   og skriv i hvert felt hvordan de hænger sammen (fx *"Projekt → har mange → Værktøj"*).
4. **CTA-liste**: For hvert objekt: hvilke handlinger skal brugeren kunne lave?
   Hvem må gøre det (rekrutterer vs. designeren selv)?
5. **Fra objekt til kode**: Skriv for *Projekt* hvordan det bliver til:
   - HTML: `<article class="projekt">` med `<h3>`, `<img>`, …
   - CSS: `.projekt { }`, `.projekt__titel { }`, …
   - JS: `{ titel: "…", kategori: "…", værktøjer: [ … ] }`
6. **Design**: Skitsér (lo-fi) et projekt-kort, hvor alle attributter fra dit objekt-kort er med.

## Skabelon – kopiér pr. objekt

```
OBJEKT:        _______________
Beskrivelse:   _______________
Attributter:   _______________ (indhold)
               _______________ (metadata)
Relationer:    → ____ (1 / mange)
CTAs:          _______________
Visninger:     kort / liste / detaljeside
```

## Tjek dig selv ✅

- [ ] Kan du forklare forskellen på et **objekt** og en **attribut**? (Kan det have egne attributter? Så er det nok et objekt.)
- [ ] Har hvert objekt mindst én relation?
- [ ] Svarer dine objekter til det, *brugeren* kalder tingene – ikke til det, udvikleren kalder dem?

👉 Næste skridt: I modul 05 og 06 bliver dit **Projekt**-objekt til rigtig JavaScript.
