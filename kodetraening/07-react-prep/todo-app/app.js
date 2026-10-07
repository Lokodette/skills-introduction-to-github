// =========================================
// Todo-app · mini-React
// Appen bruger DINE funktioner fra opgaver/06-immutability.js!
// render() og setState() er færdige – du skriver handlingerne under EVENTS.
// =========================================

import { tilføj, fjern, toggle } from "../opgaver/06-immutability.js";

// ---------- STATE ----------
let state = {
  filter: "alle",
  todos: [
    { id: 1, tekst: "Læs om map, filter og find", færdig: true },
    { id: 2, tekst: "Øv destructuring og spread", færdig: false },
    { id: 3, tekst: "Forstå immutability", færdig: false },
  ],
};

// Gamle states gemmes her. Det virker KUN fordi vi aldrig ændrer en gammel state.
const historik = [];
let advarsel = "";

// ---------- setState – ligesom i React ----------
function setState(nyState) {
  // React sammenligner med ===. Samme reference = "intet er ændret" = ingen ny render.
  if (nyState === state) {
    advarsel = "⚠️ Samme objekt som før – derfor opdateres skærmen IKKE (ligesom i React). Har du muteret?";
    console.warn(advarsel);
    document.querySelector(".advarsel").textContent = advarsel; // kun advarslen, ingen render()
    return;
  }
  advarsel = "";
  historik.push(state);
  state = nyState;
  render();
}

// ---------- RENDER – state ind, HTML ud ----------
const escape = (tekst) => tekst.replace(/[&<>"]/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[t]);

function synligeTodos({ todos, filter }) {
  if (filter === "aktive") return todos.filter((t) => !t.færdig);
  if (filter === "færdige") return todos.filter((t) => t.færdig);
  return todos;
}

function render() {
  const { filter, todos } = state;
  const antalAktive = todos.filter((t) => !t.færdig).length;

  const punkter = synligeTodos(state)
    .map(({ id, tekst, færdig }) => `
      <li class="${færdig ? "færdig" : ""}">
        <input type="checkbox" data-toggle="${id}" ${færdig ? "checked" : ""} aria-label="Færdig">
        <span>${escape(tekst)}</span>
        <button data-slet="${id}" aria-label="Slet">✕</button>
      </li>`)
    .join("");

  const filterKnapper = ["alle", "aktive", "færdige"]
    .map((f) => `<button data-filter="${f}" class="${f === filter ? "aktiv" : ""}">${f}</button>`)
    .join("");

  document.querySelector("#app").innerHTML = `
    <form id="ny">
      <input type="text" name="tekst" placeholder="Hvad skal du lave?" aria-label="Ny todo" required>
      <button type="submit">Tilføj</button>
    </form>
    <div class="filtre">${filterKnapper}</div>
    <ul>${punkter}</ul>
    <div class="bund">
      <span>${antalAktive} tilbage · ${historik.length} gemte states</span>
      <span>
        <button data-fortryd ${historik.length === 0 ? "disabled" : ""}>↶ Fortryd</button>
        <button data-muter>Prøv at mutere</button>
      </span>
    </div>
    <p class="advarsel">${advarsel}</p>
  `;
}

// ---------- EVENTS ----------
const app = document.querySelector("#app");

app.addEventListener("submit", (event) => {
  event.preventDefault();
  const tekst = event.target.elements.tekst.value.trim();
  if (!tekst) return;
  // TODO 1: Lav en ny todo { id: Date.now(), tekst, færdig: false }
  //         og kald setState med en NY state, hvor todos = tilføj(state.todos, nyTodo)
  //         Tip: setState({ ...state, todos: ... })
});

app.addEventListener("click", (event) => {
  const { toggle: toggleId, slet, filter } = event.target.dataset;

  // TODO 2: Hvis toggleId findes → setState med todos = toggle(state.todos, Number(toggleId))
  // TODO 3: Hvis slet findes     → setState med todos = fjern(state.todos, Number(slet))
  // TODO 4: Hvis filter findes   → setState({ ...state, filter })

  if ("fortryd" in event.target.dataset && historik.length > 0) {
    // TODO 5: Hent den forrige state med historik.pop(), gem den i state og kald render()
    //         (Ikke setState – så ville fortryd selv havne i historikken!)
  }

  // Demo: den FORKERTE måde. Listen ændres, men state er stadig samme objekt.
  if ("muter" in event.target.dataset) {
    state.todos.push({ id: Date.now(), tekst: "Muteret todo 😈", færdig: false });
    setState(state);
  }
});

render();
