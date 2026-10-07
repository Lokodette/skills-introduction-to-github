// =========================================
// Todo-app · mini-React – løsning
// =========================================

import { tilføj, fjern, toggle } from "../../losning/06-immutability.js";

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
  const nyTodo = { id: Date.now(), tekst, færdig: false };
  setState({ ...state, todos: tilføj(state.todos, nyTodo) });
});

app.addEventListener("click", (event) => {
  const { toggle: toggleId, slet, filter } = event.target.dataset;

  if (toggleId) setState({ ...state, todos: toggle(state.todos, Number(toggleId)) });
  if (slet) setState({ ...state, todos: fjern(state.todos, Number(slet)) });
  if (filter) setState({ ...state, filter });

  if ("fortryd" in event.target.dataset && historik.length > 0) {
    state = historik.pop();
    advarsel = "";
    render();
  }

  // Demo: den FORKERTE måde. Listen ændres, men state er stadig samme objekt.
  if ("muter" in event.target.dataset) {
    state.todos.push({ id: Date.now(), tekst: "Muteret todo 😈", færdig: false });
    setState(state);
  }
});

render();
