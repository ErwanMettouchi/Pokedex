
import { display404, resetAllTemplates } from "../../helpers.js";
import { addPokemonsToDom } from "../pokemons/pokemons.module.js";
import { getOneType, getAllTypes } from "./types.api";

function addTypesToDom(type) {
    const template = document.getElementById('type-template');
    const clone = template.content.cloneNode(true);
    clone.querySelector('.type-card').setAttribute('data-type-id', type.id);

    const button = clone.querySelector('button')
    button.style.backgroundColor = type.color;
    button.textContent = type.name;

    button.addEventListener('click', displayPokemonsByType);
    document.querySelector('.types-container').appendChild(clone);
};

async function fetchAndDisplayTypes() {
    resetAllTemplates();
    try {
        const types = await getAllTypes();
        for (const type of types) {
            addTypesToDom(type);
        };
    } catch (error) {
        console.error(error);
    };
};

async function displayPokemonsByType(event) {
    try {
        document.querySelector('.pokemons-container').textContent = '';
        document.querySelector('.no-pokemon-found-container').textContent = '';

        const id = event.target.closest('[data-type-id]').dataset.typeId;
        console.log(id);

        const type = await getOneType(id);

        if (!type) {
            return display404();
        }

        if (type.pokemons.length !== 0) {
            for (const pokemon of type.pokemons) {
                addPokemonsToDom(pokemon)
            };
        } else {
            const template = document.getElementById('template-no-pokemon-found');
            const clone = template.content.cloneNode(true);
            document.querySelector('.no-pokemon-found-container').appendChild(clone);
        }
    } catch (error) {
        console.error(error);
    }
}



export { addTypesToDom, fetchAndDisplayTypes }