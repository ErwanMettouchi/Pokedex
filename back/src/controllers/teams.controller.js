import { NotFoundError } from "../errors/notfound.error.js";
import { Team, Pokemon, Type } from "../models/associations.js";
import sanitize from "sanitize-html";

export const teamController = {
    getAllTeams: async (_, res) => {
        const teams = await Team.findAll({
            include: 'pokemons',
            order : [['id', 'ASC']]
        });
        return res.status(200).json(teams);
    },
    getOneTeam: async (req, res, next) => {
        const id = req.params.id;
        const team = await Team.findByPk(id, {
            include: {
                model : Pokemon,
                as : 'pokemons',
                include : {
                    model : Type,
                    as : 'types',
                    through : {attributes : []}
                }
            }
        });

        if (!team) {
            return next(new NotFoundError('Equipe non trouvée'));
        }

        return res.status(200).json(team);
    },
    createTeam: async (req, res) => {
        const { name, description } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({
                "error": "Bad request",
                "message": "Le champ name est requis."
            })
        }

        const sanitizedName = sanitize(name.trim());
        const sanitizedDescription = description ? sanitize(description.trim()) : null;

        const newTeam = await Team.create({
            name: sanitizedName,
            description: sanitizedDescription
        })

        return res.status(201).json(newTeam);
    },
    deleteTeam : async (req, res, next) => {
        const id = req.params.id;
        const team = await Team.findByPk(id);

        if(!team) {
            return next(new NotFoundError('Cette équipe n\'existe pas'));
        }

        await team.destroy();
        
        return res.status(204).json({
            message : "Equipé supprimée"
        })
    },
    editTeam : async (req, res, next) => {
        const id = req.params.id;
        const team = await Team.findByPk(id);

        if(!team) {
            return next(new NotFoundError('Cette équipe n\'existe pas'));
        }
        
        const {name, description} = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({
                "error": "Bad request",
                "message": "Le champ name est requis."
            })
        }

        const sanitizedName = sanitize(name);
        const sanitizedDescription = sanitize(description);
        const updatedTeam = await team.update({
            name : sanitizedName.trim(),
            description : sanitizedDescription.trim()
        });

        return res.status(200).json(updatedTeam);
    },
    addPokemonInTeam: async (req, res, next) => {
        const { teamId, pokemonId } = req.params;

        const team = await Team.findByPk(teamId, {
            include : "pokemons"
        });

        const isPokemonAlreadyInTeam = team.pokemons.find(pokemon => pokemon.id === pokemonId);

        if(isPokemonAlreadyInTeam) {
            res.status(409);
            throw new Error('Ce pokemon est déjà dans l\'équipe.');
        }

        if (!team) {
            return next(new NotFoundError('Equipe non trouvée'));
        }

        if(team.pokemons.length >= 6) {
            res.status(403);
            throw new Error('Impossible d\'ajouter plus de pokemon à cette team');
        }

        const pokemon = await Pokemon.findByPk(pokemonId);
        if (!pokemon) {
            return next(new NotFoundError('Pokemon non trouvé'));
        }

        await team.addPokemon(pokemon);

        const updatedTeam = await Team.findByPk(teamId, {
            include: 'pokemons'
        });

        return res.status(200).json(updatedTeam);
    },
    deletePokemonInTeam : async (req, res, next) => {
        const {teamId, pokemonId} = req.params;

        const team = await Team.findByPk(teamId);
        if(!team) {
            return next(new NotFoundError('Equipe non trouvée'));
        }

        const pokemon = await Pokemon.findByPk(pokemonId)
        if(!pokemon) {
            return next(new NotFoundError('Pokémon non trouvé'));
        }

        const isPokemonInTeam = await team.hasPokemon(pokemon);
        if(!isPokemonInTeam) {
            return next(new NotFoundError('Ce pokémon n\'est pas dans cette équipe'));
        }

        await team.removePokemon(pokemon);
        return res.status(200).json({
            message : 'Pokémon supprimé de l\'équipe avec succès'
        });
    }
}