import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.PG_URL, {
	dialect: "postgres",
	define: {
		createdAt: "created_at",
		updatedAt: "updated_at",
	},
	dialectOptions:
		process.env.NODE_ENV === "production"
			? {
					ssl: {
						required: true,
						rejectUnauthorized: false,
					},
				}
			: {},
});
