
import { Sequelize } from "sequelize"


const dataBase = new Sequelize('challengedb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})


export default dataBase