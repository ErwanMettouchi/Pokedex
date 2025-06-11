import { DataTypes, Model } from "sequelize";
import { sequelize } from "./client.js";

export class Team extends Model { };

Team.init({
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : DataTypes.TEXT
    }
}, {
    sequelize, 
    tableName : "team",
})
