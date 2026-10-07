// 01 · Array-metoder – løsning

export function titler(projekter) {
  return projekter.map((p) => p.titel);
}

export function medMoms(priser) {
  return priser.map((pris) => pris * 1.25);
}

export function kunKategori(projekter, kategori) {
  return projekter.filter((p) => p.kategori === kategori);
}

export function populære(projekter, minLikes) {
  return projekter.filter((p) => p.likes >= minLikes);
}

export function findProjekt(projekter, id) {
  return projekter.find((p) => p.id === id);
}

export function titlerIKategori(projekter, kategori) {
  return projekter
    .filter((p) => p.kategori === kategori)
    .map((p) => p.titel);
}

export function listepunkter(projekter) {
  return projekter.map((p) => `<li>${p.titel}</li>`);
}
