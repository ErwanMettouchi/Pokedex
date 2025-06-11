import { NotFoundError } from "../errors/notfound.error.js";
import { Type } from "../models/associations.js";

export const typeController = {
    getAll: async (_, res) => {
        const types = await Type.findAll();

        return res.status(200).json(types);
    },
    getOneType: async (req, res, next) => {
        const id = req.params.id;
        const type = await Type.findByPk(id, {
            include : 'pokemons'
        });

        if(!type) {
            return next(new NotFoundError('Type non trouvé'));
        }

        return res.status(200).json(type);
    }
}