import { NotFoundError } from "../errors/notfound.error.js";
import { Pokemon } from "../models/associations.js";

export const pokemonController = {
	getAllPokemons: async (_, res) => {
		const pokemons = await Pokemon.findAll({
			order: [["id", "ASC"]],
		});

		res.status(200).json(pokemons);
	},
	getOnePokemon: async (req, res, next) => {
		const id = req.params.id;
		const pokemon = await Pokemon.findByPk(id, {
			include: "teams",
		});

		if (!pokemon) {
			return next(new NotFoundError("Pokemon non trouvé"));
		}

		return res.status(200).json(pokemon);
	},
	getOnePokemonByName: async (req, res, next) => {
		const name = req.params.name;
		const pokemon = await Pokemon.findOne({
			where: {
				name: name,
			},
			include: "teams",
		});

		if (!pokemon) {
			return next(new NotFoundError("Pokemon non trouvé"));
		}

		return res.status(200).json(pokemon);
	},
	getAllPokemonsOrderedByVotes: async (_, res, next) => {
		const pokemons = await Pokemon.findAll({
			order: [["nmbr_of_votes", "DESC"]],
			limit: 20,
		});
		res.status(200).json(pokemons);
	},
	voteForPokemon: async (req, res, next) => {
		const { id } = req.params;

		const pokemon = await Pokemon.findByPk(id);

		if (!pokemon) {
			return next(new NotFoundError("Pokémon non trouvé"));
		}

		await pokemon.increment("nmbr_of_votes", { by: 1 });

		const updatedPokemon = await Pokemon.findByPk(id);

		return res.status(200).json(updatedPokemon);
	},
};
