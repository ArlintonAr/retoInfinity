import Hapi from '@hapi/hapi'

import bcrypt from 'bcryptjs'

import Client from '../models/client.js'
import Token from '../models/token.js'

import generateJWT from '../helpers/generate-JWT.js'
//asigno request y response desde Hapi
const reque = Hapi.request
const respon = Hapi.responseToolKit



//Controlador para generar token
const login = async (req = reque, res = respon) => {

    const { email, password } = req.payload

    try {
        const client = await Client.findOne({ where: { email } })

        //Si el cliente no existe
        if (!client) {
            return res.response({
                msg: "El Usuario / Password no son correctos"
            })
        }
        //Verificamos la contraseña
        const validPassword = bcrypt.compareSync(password, client.password)
        if (!validPassword) {
            return res.response({
                msg: "El Usuario / Password no son correctos"
            })
        }
        
        //Generamos TOKEN
        const token = await generateJWT(client.id)
       
        return res.response({
            client,
            token
          
        })
    } catch (error) {
        console.log("Ha ocurrido un error: ",error)
        throw new Error(error)
    }

}


export default login