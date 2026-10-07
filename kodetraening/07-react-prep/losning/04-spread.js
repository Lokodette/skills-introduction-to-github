// 04 · Spread og rest – løsning

export function kopiér(liste) {
  return [...liste];
}

export function sammenlæg(a, b) {
  return [...a, ...b];
}

export function kopiérObjekt(objekt) {
  return { ...objekt };
}

export function flet(standard, valg) {
  return { ...standard, ...valg };
}

export function største(tal) {
  return Math.max(...tal);
}

export function tilføjForan(liste, element) {
  return [element, ...liste];
}

export function summér(...tal) {
  let sum = 0;
  for (const t of tal) sum += t;
  return sum;
}

export function udenFelt(objekt) {
  const { hemmelig, ...resten } = objekt;
  return resten;
}
