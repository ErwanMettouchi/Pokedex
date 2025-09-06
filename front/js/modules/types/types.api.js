import { base_url } from "../../helpers.js";

async function getAllTypes() {
	try {
		const httpResponse = await fetch(`${base_url}/types`);
		return await httpResponse.json();
	} catch (error) {
		console.error(error);
	}
}

async function getOneType(id) {
	try {
		const httpResponse = await fetch(`${base_url}/types/${id}`);

		if (!httpResponse.ok) {
			if (httpResponse.status === 404) {
				return null;
			}
			throw new Error("Erreur serveur");
		}
		return await httpResponse.json();
	} catch (error) {
		console.error(error);
	}
}

export { getAllTypes, getOneType };
