
import { DataTypes } from "sequelize";
import dataBase from "../database/connect-db.js";


//Contruyendo como luce un cliente
const Client = dataBase.define('Client', {

    name: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING

    }, 
    password: {
        type: DataTypes.STRING

    },
    address: {
        type: DataTypes.STRING

    },
    phoneNumber: {
        type: DataTypes.NUMBER

    },
    active: {
        type: DataTypes.BOOLEAN
    }
})

export default Client