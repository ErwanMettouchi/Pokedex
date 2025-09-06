import { getAllPokemons } from "./modules/pokemons/pokemons.api.js";
import { fetchAndDisplayPokemons } from "./modules/pokemons/pokemons.module.js";

const base_url = import.meta.env.VITE_API_URL;

function resetAllTemplates() {
	const pokemonContainer = document.querySelector(".pokemons-container");
	pokemonContainer.textContent = "";

	const typeContainer = document.querySelector(".types-container");
	typeContainer.textContent = "";

	const teamContainer = document.querySelector(".teams-container");
	teamContainer.textContent = "";

	const container404 = document.querySelector(".container-404");
	container404.textContent = "";

	document.querySelector(".no-pokemon-found-container").textContent = "";
}

function closeModals() {
	// biome-ignore lint/complexity/noForEach: <explanation>
	document.querySelectorAll('[class*="modal"]').forEach((element) => {
		if (element.classList.contains("is-active")) {
			element.classList.remove("is-active");
		}
	});
}

async function display404() {
	closeModals();
	resetAllTemplates();
	const pokemons = await getAllPokemons();
	const template = document.getElementById("template-404");
	const clone = template.content.cloneNode(true);
	clone.querySelector("a").addEventListener("click", () => {
		fetchAndDisplayPokemons(pokemons);
	});

	document.querySelector(".container-404").appendChild(clone);
}

export { resetAllTemplates, display404, closeModals, base_url };
