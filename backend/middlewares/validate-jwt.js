
import Hapi from '@hapi/hapi'
//asigno request y response desde Hapi
const reque = Hapi.request
const respon = Hapi.responseToolKit


import Jwt from "jsonwebtoken"
import Client from "../models/client.js"

const validateJWT = async (req=reque, res = respon, next) => {

    const token = req.headers['x-token']

    if (!token) {
        return res.response({
            msq: 'No hay token en la petición'
        })
    }

    try {
        //verifica el token del id cliente
        const { id } = Jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        //leer el cliente que corresponde a id
        const client = await Client.findOne(id)

        //si el cliente undefined
        if (!client) {
            return res.response({
                msg: "Usuario no existe en base de datos "
            })
        }
        //verificar si el id tiene estado en true
        if (!client.active) {
            return res.response({
                msg: "Token no valido - usuario con estado false"
            })
        }
        req.client = client

    } catch (error) {
        console.log(error)
        res.response({
            msg: 'Token no válido'
        })
    }
    
    next()

}

export default validateJWT 