// 03 · Destructuring – løsning

export function præsentér({ navn, alder }) {
  return `${navn} er ${alder} år`;
}

export function førsteOgResten(liste) {
  const [første, ...resten] = liste;
  return { første, resten };
}

export function byt([a, b]) {
  return [b, a];
}

export function hentBy(bruger) {
  const {
    adresse: { by = "Ukendt" },
  } = bruger;
  return by;
}

export function kortTekst({ titel, likes = 0 }) {
  return `${titel} (${likes} likes)`;
}

export function lavTæller(start) {
  const næste = () => start + 1;
  return [start, næste];
}

export function beskrivelser(projekter) {
  return projekter.map(({ titel, kategori }) => `${titel} – ${kategori}`);
}
