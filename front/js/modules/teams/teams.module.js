import { closeModals, display404, resetAllTemplates } from "../../helpers.js";
import { getOnePokemon } from "../pokemons/pokemons.api.js";
import {
	handleDeletePokemonInTeam,
	openPokemonDetailModal,
} from "../pokemons/pokemons.module.js";
import {
	createTeam,
	deleteTeam,
	editTeam,
	getAllTeams,
	getOneTeam,
	putPokemonInTeam,
} from "./teams.api.js";

function addTeamsToDom(team) {
	const template = document.getElementById("team-template");
	const clone = template.content.cloneNode(true);
	clone.querySelector(".team-card").setAttribute("data-team-id", team.id);

	const teamCard = clone.querySelector(".team-card");

	const teamName = clone.querySelector(".team-name");
	teamName.textContent = team.name;

	const teamDescription = clone.querySelector(".team-description");
	teamDescription.textContent = team.description;

	const imgContainer = clone.querySelector(".imgContainer");
	imgContainer.textContent = "";

	const btnModalTeam = clone.querySelector(".btnModalTeam");
	btnModalTeam.addEventListener("click", openTeamModal);

	const trashIcon = document.createElement("i");
	trashIcon.classList.add("fa", "fa-trash");
	teamCard.appendChild(trashIcon);

	trashIcon.addEventListener("click", handleDeleteTeam);

	const modal = clone.querySelector(".box");
	modal.setAttribute("data-team-id", team.id);

	for (const pokemon of team.pokemons) {
		const figure = document.createElement("figure");
		figure.classList.add(
			"has-text-centered",
			"pt-4",
			"is-256x256",
			"mb-6",
			"card",
			"pokemon-team-card",
			"pokemon-card",
			"is-col-min-1",
		);
		figure.setAttribute("data-pokemon-id", pokemon.id);

		const img = document.createElement("img");
		img.src = `../../../integration/assets/img/${pokemon.id}.webp`;
		img.classList.add("pkm_img", "image", "is-128x128");

		figure.appendChild(img);
		imgContainer.appendChild(figure);
		figure.addEventListener("click", openPokemonDetailModal);
	}

	document.querySelector(".teams-container").appendChild(clone);
}

async function fetchAndDisplayTeams() {
	resetAllTemplates();
	try {
		const teams = await getAllTeams();
		for (const team of teams) {
			addTeamsToDom(team);
		}
	} catch (error) {
		console.error(error);
	}
}

function openAddTeamModal() {
	const modal = document.getElementById("add_team_modal");
	modal.classList.add("is-active");
}

async function openTeamModal(event) {
	const modal = document.getElementById("team_modal");
	modal.classList.add("is-active");
	const tbody = document.getElementById("tbody_team");
	tbody.textContent = "";

	document.getElementById("edit_team_modal").dataset.teamId =
		event.target.closest("[data-team-id]").dataset.teamId;

	const teamId = event.target.closest("[data-team-id]").dataset.teamId;
	tbody.setAttribute("data-team-id", teamId);

	const team = await getOneTeam(teamId);
	console.log(team);

	if (!team) {
		return display404();
	}

	displayPokemonStatsInTeamModal(team, tbody);
}

function openEditTeamModal(event) {
	const editModal = document.getElementById("edit_team_modal");
	editModal.classList.add("is-active");
	const id = event.target.closest(".box");
}

function displayPokemonStatsInTeamModal(team, tbody) {
	for (const pokemon of team.pokemons) {
		const tr = document.createElement("tr");
		tr.setAttribute("data-pokemon-id", pokemon.id);

		const pokemonId = document.createElement("td");
		pokemonId.textContent = pokemon.id;
		tr.appendChild(pokemonId);

		const name = document.createElement("td");
		name.textContent = pokemon.name;
		tr.appendChild(name);

		const hp = document.createElement("td");
		hp.textContent = pokemon.hp;
		tr.appendChild(hp);

		const atk = document.createElement("td");
		atk.textContent = pokemon.atk;
		tr.appendChild(atk);

		const def = document.createElement("td");
		def.textContent = pokemon.def;
		tr.appendChild(def);

		const atk_spe = document.createElement("td");
		atk_spe.textContent = pokemon.atk_spe;
		tr.appendChild(atk_spe);

		const def_spe = document.createElement("td");
		def_spe.textContent = pokemon.def_spe;
		tr.appendChild(def_spe);

		const speed = document.createElement("td");
		speed.textContent = pokemon.speed;
		tr.appendChild(speed);

		const type = document.createElement("td");
		type.textContent = pokemon.types.map((type) => type.name).join(", ");
		tr.appendChild(type);

		const trash = document.createElement("td");
		const trashIcon = document.createElement("i");
		trashIcon.classList.add("fa", "fa-trash");
		trash.appendChild(trashIcon);
		tr.appendChild(trash);

		trash.addEventListener("click", handleDeletePokemonInTeam);

		tbody.appendChild(tr);
	}
}

async function handleCreateTeam(event) {
	try {
		event.preventDefault();
		const form = event.target;
		const formData = Object.fromEntries(new FormData(form));

		const fieldName = document.getElementById("field-name");

		if (!document.getElementById("nameErrorMessage")) {
			const nameErrorMessage = document.createElement("p");
			nameErrorMessage.id = "nameErrorMessage";
			nameErrorMessage.style.color = "red";
			fieldName.appendChild(nameErrorMessage);
		}

		const message = document.getElementById("nameErrorMessage");

		if (!formData.name.trim()) {
			message.textContent = "Veuillez remplir le champ";
			return;
		}

		if (/<[^>]*>/.test(formData.name.trim())) {
			message.textContent = "Les balises HTML sont interdites";
			return;
		}

		await createTeam(formData);
		resetAllTemplates();
		fetchAndDisplayTeams();
		closeModals();
		form.reset();
	} catch (error) {
		console.error(error);
	}
}

async function handleDeleteTeam(event) {
	const id = event.target.closest("[data-team-id]").dataset.teamId;
	console.log(id);

	const team = await getOneTeam(id);

	if (!team) {
		display404();
		return;
	}

	await deleteTeam(id);

	document.querySelector(`[data-team-id="${id}"]`).remove();

	resetAllTemplates();
	fetchAndDisplayTeams();
}

async function handleEditTeam(event) {
	event.preventDefault();
	const form = event.target;
	const id = form.closest("[data-team-id]").dataset.teamId;
	const formData = Object.fromEntries(new FormData(form));

	const fieldName = document.getElementById("field-name-edit");

	if (!document.getElementById("nameErrorMessage")) {
		const nameErrorMessage = document.createElement("p");
		nameErrorMessage.id = "nameErrorMessage";
		nameErrorMessage.style.color = "red";
		fieldName.appendChild(nameErrorMessage);
	}

	const message = document.getElementById("nameErrorMessage");

	if (!formData.name.trim()) {
		message.textContent = "Veuillez remplir le champ";
		return;
	}

	if (/<[^>]*>/.test(formData.name.trim())) {
		message.textContent = "Les balises HTML sont interdites";
		return;
	}

	await editTeam(formData, id);

	resetAllTemplates();
	fetchAndDisplayTeams();
	closeModals();
	form.reset();
}

async function insertPokemonInTeam(event) {
	event.preventDefault();
	const form = event.target;
	const formData = Object.fromEntries(new FormData(form));

	const pokemonId = form.closest("[data-id]").dataset.id;
	const select = form.querySelector(".select-team");
	const teamId = select.dataset.teamId;

	const isVerificationOk = await verificationsBeforeInsertPokemonInTeam(
		form,
		teamId,
		pokemonId,
	);

	if (!isVerificationOk) {
		return;
	}

	await putPokemonInTeam(formData, teamId, pokemonId);

	resetAllTemplates();
	closeModals();
	fetchAndDisplayTeams();
}

async function verificationsBeforeInsertPokemonInTeam(form, teamId, pokemonId) {
	try {
		const team = await getOneTeam(teamId);
		const pokemon = await getOnePokemon(pokemonId);
		let isVerificationOk = true;

		if (!team) {
			display404();
			isVerificationOk = false;
			return;
		}

		if (!pokemon) {
			isVerificationOk = false;
			display404();
			return;
		}

		if (!document.getElementById("pokemon-already-in-team")) {
			const pokemonErrorMessage = document.createElement("p");
			pokemonErrorMessage.id = "pokemon-already-in-team";
			pokemonErrorMessage.style.color = "red";
			form.appendChild(pokemonErrorMessage);
		}

		const message = document.getElementById("pokemon-already-in-team");

		const isPokemonInTeam = team.pokemons.find(
			(pokemon) => pokemon.id === Number.parseInt(pokemonId, 10),
		);

		if (isPokemonInTeam) {
			isVerificationOk = false;
			message.textContent =
				"Le pokémon est déjà dans l'équipe, veuillez en choisir un autre.";
			return;
		}

		if (team.pokemons.length >= 6) {
			isVerificationOk = false;
			message.textContent =
				"L'équipe est déjà au complet, veuillez entrer ce pokémon dans une autre équipe.";
			return;
		}
		return isVerificationOk;
	} catch (error) {
		console.error(error);
	}
}

export {
	addTeamsToDom,
	fetchAndDisplayTeams,
	openAddTeamModal,
	handleCreateTeam,
	insertPokemonInTeam,
	handleDeleteTeam,
	openEditTeamModal,
	handleEditTeam,
};
