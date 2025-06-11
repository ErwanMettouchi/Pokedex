import { Router } from 'express';
import { pokemonController } from '../controllers/pokemons.controller.js';
import { controllerWrapper } from '../middlewares/controller.wrapper.js';
import { errorMiddleware } from '../middlewares/error.middleware.js';
import { typeController } from '../controllers/types.controller.js';
import { teamController } from '../controllers/teams.controller.js';
import { NotFoundError } from '../errors/notfound.error.js';


export const router = Router();

router.route('/pokemons/')
      .get(controllerWrapper(pokemonController.getAllPokemons))

router.route('/pokemons/:id(\\d+)')
      .get(controllerWrapper(pokemonController.getOnePokemon))

router.get('/pokemons/leaderboard', controllerWrapper(pokemonController.getAllPokemonsOrderedByVotes))

router.route('/pokemons/:name')
      .get(controllerWrapper(pokemonController.getOnePokemonByName))

router.post('/pokemons/:id(\\d+)/votes', controllerWrapper(pokemonController.voteForPokemon));

router.route('/types/')
      .get(controllerWrapper(typeController.getAll))

router.route('/types/:id(\\d+)')
      .get(controllerWrapper(typeController.getOneType))

router.route('/teams')
      .get(controllerWrapper(teamController.getAllTeams))
      .post(controllerWrapper(teamController.createTeam))

router.route('/teams/:teamId(\\d+)/pokemons/:pokemonId(\\d+)')
      .put(teamController.addPokemonInTeam)
      .delete(teamController.deletePokemonInTeam);

router.route('/teams/:id(\\d+)')
      .get(controllerWrapper(teamController.getOneTeam))
      .delete (controllerWrapper(teamController.deleteTeam))
      .patch(controllerWrapper(teamController.editTeam));

router.use((_, res, next) => {
      next(new NotFoundError('Resource not Found'));
});

router.use(errorMiddleware);