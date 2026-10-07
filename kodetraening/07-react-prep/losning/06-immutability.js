// 06 · Immutability – løsning

// ---------- ARRAYS ----------

export function tilføj(todos, todo) {
  return [...todos, todo];
}

export function tilføjFørst(todos, todo) {
  return [todo, ...todos];
}

export function fjern(todos, id) {
  return todos.filter((t) => t.id !== id);
}

export function opdaterTekst(todos, id, tekst) {
  return todos.map((t) => (t.id === id ? { ...t, tekst } : t));
}

export function toggle(todos, id) {
  return todos.map((t) => (t.id === id ? { ...t, færdig: !t.færdig } : t));
}

export function indsætPå(liste, index, element) {
  return [...liste.slice(0, index), element, ...liste.slice(index)];
}

export function sorteret(liste) {
  return [...liste].sort();
  // Nyere alternativ: return liste.toSorted();
}

// ---------- OBJEKTER ----------

export function sætFelt(objekt, felt, værdi) {
  return { ...objekt, [felt]: værdi };
}

export function opdaterBy(bruger, nyBy) {
  return {
    ...bruger,
    adresse: { ...bruger.adresse, by: nyBy },
  };
}

export function tilføjTag(projekt, tag) {
  return { ...projekt, tags: [...projekt.tags, tag] };
}

export function fjernTag(projekt, tag) {
  return { ...projekt, tags: projekt.tags.filter((t) => t !== tag) };
}

// ---------- ALT SAMLET ----------

export function likeProjekt(state, id) {
  return {
    ...state,
    projekter: state.projekter.map((p) =>
      p.id === id ? { ...p, likes: p.likes + 1 } : p
    ),
  };
}
