// 02 · Funktioner som værdier – løsning

export const dobbelt = (x) => x * 2;

export function udfør(tal, fn) {
  return fn(tal);
}

export function minMap(liste, fn) {
  const resultat = [];
  for (const element of liste) {
    resultat.push(fn(element));
  }
  return resultat;
}

export function minFilter(liste, fn) {
  const resultat = [];
  for (const element of liste) {
    if (fn(element)) resultat.push(element);
  }
  return resultat;
}

export function lavGanger(faktor) {
  return (tal) => tal * faktor;
}

export function erKategori(kategori) {
  return (projekt) => projekt.kategori === kategori;
}

export function lavKlikHandler(navn) {
  return () => `Hej, ${navn}!`;
}
