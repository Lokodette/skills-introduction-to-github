// =========================================
// 02 · Funktioner som værdier
// I JavaScript er en funktion en VÆRDI – ligesom et tal eller en tekst.
// Du kan gemme den i en variabel, sende den med som argument (callback)
// og returnere den fra en anden funktion.
//
// I React gør du det hele tiden:  <button onClick={handleClick}>
//                                  liste.map(item => <li>{item}</li>)
// =========================================

// 1. Gem en arrow function i en konstant. dobbelt(4) → 8
export const dobbelt = undefined; // TODO: erstat undefined med en arrow function

// 2. udfør modtager et tal og en FUNKTION, og kalder funktionen med tallet.
//    udfør(5, dobbelt) → 10
export function udfør(tal, fn) {
  // TODO
}

// 3. Byg din egen map – UDEN at bruge .map. Brug en for...of-løkke og push
//    til et NYT array (det er okay at pushe til et array, du selv har lavet).
//    minMap([1, 2, 3], x => x * 10) → [10, 20, 30]
export function minMap(liste, fn) {
  // TODO
}

// 4. Byg din egen filter – UDEN at bruge .filter.
//    minFilter([1, 2, 3, 4], x => x % 2 === 0) → [2, 4]
export function minFilter(liste, fn) {
  // TODO
}

// 5. En funktion, der RETURNERER en funktion.
//    const gangeMed3 = lavGanger(3);
//    gangeMed3(5) → 15
export function lavGanger(faktor) {
  // TODO
}

// 6. Returnér en funktion, der kan bruges direkte i filter:
//    projekter.filter(erKategori("UX"))
export function erKategori(kategori) {
  // TODO
}

// 7. Ligesom en onClick-handler i React: returnér en funktion,
//    som – når den kaldes – returnerer "Hej, <navn>!"
//    lavKlikHandler("Ada")() → "Hej, Ada!"
export function lavKlikHandler(navn) {
  // TODO
}
