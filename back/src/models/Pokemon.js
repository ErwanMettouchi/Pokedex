import { DataTypes, Model } from "sequelize";
import { sequelize } from "./client.js";

export class Pokemon extends Model { };

Pokemon.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    hp: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    atk: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    def: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    atk_spe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    def_spe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    speed: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nmbr_of_votes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "pokemon",
})