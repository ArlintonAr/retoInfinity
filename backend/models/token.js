
import { DataTypes } from "sequelize";
import dataBase from "../database/connect-db.js";



//Contruyendo como luce un cliente
const Token = dataBase.define('Token', {

    name: {
        type: DataTypes.STRING,
       
    },
    value: {
        type: DataTypes.STRING
    }
})

export default Token