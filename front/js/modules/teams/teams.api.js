import { base_url } from "../../helpers";

async function getAllTeams() {
    try {
        const httpResponse = await fetch(`${base_url}/teams`);
        return await httpResponse.json();
    }catch(error) {
        console.error(error);
    }
}

async function getOneTeam(id) {
    try {
        const httpResponse = await fetch(`${base_url}/teams/${id}`);
    
        if(!httpResponse.ok){
            if(httpResponse.status === 404) {
                return null;
            }
            throw new Error('Erreur serveur');
        }
        return await httpResponse.json();
    }catch(error) {
        console.error(error);
    }
}

async function createTeam(data) {
    try {
        const httpResponse = await fetch(`${base_url}/teams`, {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(data)
        });
        const response = await httpResponse.json();
        return response;
    }catch(error) {
        console.error(error);
    }
}

async function putPokemonInTeam(data,teamId, pokemonId) {
    try {
        const httpResponse = await fetch(`${base_url}/teams/${teamId}/pokemons/${pokemonId}`,{
            method : "PUT",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(data)
        });
        const response = await httpResponse.json();
        return response;
    }catch(error) {
        console.error(error);
    }
} 

async function deleteTeam(id) {
    await fetch(`${base_url}/teams/${id}`, {
        method : "DELETE"
    })
}

async function editTeam(data, id) {
    const httpResponse = await fetch(`${base_url}/teams/${id}`, {
        method : "PATCH",
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(data)
    });
    const response = await httpResponse.json();
    return response;
}

export {
    getOneTeam,
    getAllTeams,
    createTeam,
    putPokemonInTeam,
    deleteTeam,
    editTeam
}