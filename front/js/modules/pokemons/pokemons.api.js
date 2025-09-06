import { base_url } from "../../helpers.js";

async function getAllPokemons() {
	try {
		const httpResponse = await fetch(`${base_url}/pokemons`);
		const data = await httpResponse.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

async function getOnePokemon(id) {
	try {
		const httpResponse = await fetch(`${base_url}/pokemons/${id}`);
		return await httpResponse.json();
	} catch (error) {
		console.error(error);
	}
}

async function deletePokemonInTeam(teamId, pokemonId) {
	try {
		const httpResponse = await fetch(
			`${base_url}/teams/${teamId}/pokemons/${pokemonId}`,
			{
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			},
		);

		const response = await httpResponse.json();
		return response;
	} catch (error) {
		console.error(error);
	}
}

async function getOnePokemonByName(name) {
	const httpResponse = await fetch(`${base_url}/pokemons/${name}`);
	return await httpResponse.json();
}

async function getLeaderboard() {
	const httpResponse = await fetch(`${base_url}/pokemons/leaderboard`);
	return await httpResponse.json();
}

async function voteForPokemon(data, id) {
	const httpResponse = await fetch(`${base_url}/pokemons/${id}/votes`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	const response = await httpResponse.json();
	return response;
}

export {
	getAllPokemons,
	getOnePokemon,
	deletePokemonInTeam,
	getOnePokemonByName,
	getLeaderboard,
	voteForPokemon,
};
