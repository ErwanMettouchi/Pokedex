import cors from "cors";
import express from "express";
import { router } from "./src/routers/router.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

const corsOptions = {
	origin: [
		"http://localhost:5174",
		"http://localhost:5173",
		"https://pokedex-chi-ruby.vercel.app",
	],
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
	console.log(`Serveur lancé http://localhost:${PORT}`);
});
