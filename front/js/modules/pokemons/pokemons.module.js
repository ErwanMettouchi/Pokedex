import Awesomplete from "awesomplete";
import { closeModals, display404, resetAllTemplates } from "../../helpers.js";
import { getAllTeams, getOneTeam } from "../teams/teams.api.js";
import { fetchAndDisplayTeams } from "../teams/teams.module.js";
import {
	deletePokemonInTeam,
	getAllPokemons,
	getOnePokemon,
	getOnePokemonByName,
	voteForPokemon,
} from "./pokemons.api.js";
import "awesomplete/awesomplete.css";

function addPokemonsToDom(pokemon) {
	const pokemonTemplate = document.getElementById("pokemon-template");

	const clone = pokemonTemplate.content.cloneNode(true);

	const img = clone.querySelector(".pkm_img");
	img.setAttribute("src", `../../../integration/assets/img/${pokemon.id}.webp`);

	const card = clone.querySelector(".pokemon-card");
	card.setAttribute("data-pokemon-id", pokemon.id);

	const cardContent = clone.querySelector(".card-content p");
	cardContent.textContent = pokemon.name;

	const nbOfVotes = clone.querySelector("#votes");
	nbOfVotes.textContent = `${pokemon.nmbr_of_votes} ${pokemon.nmbr_of_votes <= 1 ? "vote" : "votes"}`;

	card.addEventListener("click", openPokemonDetailModal);

	document.querySelector(".pokemons-container").appendChild(clone);
}

async function fetchAndDisplayPokemons(pokemons) {
	try {
		resetAllTemplates();
		// ? Boucle afin d'afficher tous les pokemons présents dans la bdd
		for (const pokemon of pokemons) {
			addPokemonsToDom(pokemon);
		}
	} catch (error) {
		console.error(error);
	}
}

async function displayPokemonStats(id) {
	const pokemonDetailModal = document.getElementById("pkm_detail");

	try {
		const pokemon = await getOnePokemon(id);
		if (!pokemon) {
			display404();
			return;
		}

		const img = pokemonDetailModal.querySelector(".pkm_img_modal");

		img.setAttribute(
			"src",
			`../../../integration/assets/img/${pokemon.id}.webp`,
		);

		// ? Ajoute les stats du pokemon dans la modal
		document.querySelector(".modal-card-title").textContent = pokemon.name;
		document.getElementById("pokemon-hp").value = pokemon.hp;
		document.getElementById("pokemon-atk").value = pokemon.atk;
		document.getElementById("pokemon-def").value = pokemon.def;
		document.getElementById("pokemon-atk_spe").value = pokemon.atk_spe;
		document.getElementById("pokemon-def_spe").value = pokemon.def_spe;
		document.getElementById("pokemon-speed").value = pokemon.speed;
		document.querySelector(".nmb_of_votes").textContent =
			`Nombre de votes : ${pokemon.nmbr_of_votes}`;

		// ? Affiche les teams dans la balise select
		const teams = await getAllTeams();
		await displayTeamsInSelect(teams);
	} catch (error) {
		console.error("Erreur dans displayPokemonStats :", error);
	}
}

async function displayTeamsInSelect(teams) {
	const formPkmTeam = document.getElementById("form_add_pkm_team");
	const select = formPkmTeam.querySelector("select");
	select.textContent = "";

	// ? Boucle sur les teams, crée un élément option pour chaque team et ajoute cet élément en enfant de la balise select
	for (const team of teams) {
		const option = document.createElement("option");
		option.value = team.id;
		option.textContent = team.name;
		select.appendChild(option);
	}
}

async function openPokemonDetailModal(event = null, pokemonId = null) {
	const select = document.querySelector(".select-team");

	const allTeams = await getAllTeams();

	select.dataset.teamId = allTeams[0].id;

	if (document.getElementById("pokemon-already-in-team")) {
		document.getElementById("pokemon-already-in-team").remove();
	}

	const pokemonDetailModal = document.getElementById("pkm_detail");

	// biome-ignore lint/complexity/useOptionalChain: <explanation>
	if (event && event.target) {
		pokemonDetailModal.dataset.id =
			event.target.closest(".card").dataset.pokemonId;
		pokemonDetailModal.classList.add("is-active");
	} else {
		pokemonDetailModal.dataset.id = pokemonId;
		pokemonDetailModal.classList.add("is-active");
	}

	const id = pokemonDetailModal.dataset.id;

	const pokemon = await getOnePokemon(id);

	if (pokemon.error === "Pokemon non trouvé") {
		display404();
		return;
	}

	await displayPokemonStats(id);
}

async function handleDeletePokemonInTeam(event) {
	const teamId = event.target.closest("[data-team-id]").dataset.teamId;
	const pokemonId = event.target.closest("[data-pokemon-id]").dataset.pokemonId;

	const team = await getOneTeam(teamId);
	const pokemon = await getOnePokemon(pokemonId);

	if (!team) {
		display404();
		return;
	}

	if (!pokemon) {
		display404();
		return;
	}

	const isPokemonInTeam = team.pokemons.find(
		(pokemon) => pokemon.id === Number.parseInt(pokemonId, 10),
	);

	if (!isPokemonInTeam) {
		display404();
		return;
	}

	await deletePokemonInTeam(teamId, pokemonId);

	const tbody = document.getElementById("tbody_team");

	const trToDelete = tbody.querySelector(`tr[data-pokemon-id="${pokemonId}"]`);
	trToDelete.remove();
	console.log(trToDelete);

	resetAllTemplates();
	fetchAndDisplayTeams();
}

async function searchPokemon() {
	const input = document.getElementById("search-bar");
	const pokemons = await getAllPokemons();
	new Awesomplete(input, {
		list: pokemons.map((pokemon) => pokemon.name),
		minChars: 1,
		autoFirst: true,
	});

	input.addEventListener("awesomplete-selectcomplete", async (event) => {
		const selectedPokemon = event.text;

		const pokemon = await getOnePokemonByName(selectedPokemon.value);
		openPokemonDetailModal(null, pokemon.id);
		input.value = "";
	});
}

async function handleVoteFormPokemon() {
	const id = document.getElementById("pkm_detail").getAttribute("data-id");
	const pokemon = await getOnePokemon(id);

	if (!pokemon) {
		return display404();
	}

	await voteForPokemon(pokemon, id);

	const pokemons = await getAllPokemons();

	resetAllTemplates();
	await fetchAndDisplayPokemons(pokemons);
	closeModals();
	openPokemonDetailModal(null, pokemon.id);
}

export {
	addPokemonsToDom,
	fetchAndDisplayPokemons,
	openPokemonDetailModal,
	handleDeletePokemonInTeam,
	searchPokemon,
	handleVoteFormPokemon,
};
