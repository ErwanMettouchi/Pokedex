import { closeModals } from "./helpers.js";
import { getAllPokemons, getLeaderboard } from "./modules/pokemons/pokemons.api.js";
import { fetchAndDisplayPokemons, handleVoteFormPokemon, searchPokemon } from "./modules/pokemons/pokemons.module.js";
import { fetchAndDisplayTeams, handleCreateTeam, handleEditTeam, insertPokemonInTeam, openAddTeamModal, openEditTeamModal } from "./modules/teams/teams.module.js";
import { fetchAndDisplayTypes } from "./modules/types/types.module.js";
async function init() {

    const pokemons = await getAllPokemons();

    const closeBtns = document.querySelectorAll('.close');
    for(const btn of closeBtns) {
        btn.addEventListener('click', closeModals);
    }

    const homeBtns = document.querySelectorAll('.back-to-home');
    for(const homebtn of homeBtns) {
        homebtn.addEventListener('click',async () => {
            fetchAndDisplayPokemons(pokemons)
        } );
    }

    document.getElementById('nav-item-type').addEventListener('click', fetchAndDisplayTypes);
    document.getElementById('nav-item-team').addEventListener('click', fetchAndDisplayTeams);
    document.getElementById('nav-item-add-team').addEventListener('click', openAddTeamModal);
    document.getElementById('nav-item-edit-team').addEventListener('click', openEditTeamModal);
    document.getElementById('nav-item-leaderboard').addEventListener('click', async () => {
        const pokemons = await getLeaderboard();
        fetchAndDisplayPokemons(pokemons);
    });
    
    
    document.getElementById('form_team_modal').addEventListener('submit', handleCreateTeam)
    document.getElementById('form_add_pkm_team').addEventListener('submit', insertPokemonInTeam);
    document.getElementById('form_edit_team_modal').addEventListener('submit', handleEditTeam);

    document.querySelector('.vote-btn').addEventListener('click', handleVoteFormPokemon);

    const select = document.querySelector('.select-team');
    select.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        select.dataset.teamId = selectedValue;
        console.log(select);
    })


    await fetchAndDisplayPokemons(pokemons);
    await searchPokemon();
}

document.addEventListener("DOMContentLoaded", async () => {
    init();
});
