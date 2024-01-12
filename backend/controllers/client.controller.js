import Hapi from '@hapi/hapi'
import Client from '../models/client.js'

import bcrypt from 'bcryptjs'


//asigno request y response desde Hapi
const reque = Hapi.request
const respon = Hapi.responseToolKit



//Controlador para generar token
const listClients = async (req = reque, res = respon) => {

    const clients = await Client.findAll()

    return res.response({
        clients
    })

}

const addClients = async (req = reque, res = respon) => {
    const payload = req.payload


    try {
        //Validamos si ya existe un cliente con ese email
        const existEmail = await Client.findOne({
            where: {
                email: payload.email
            }
        })
        if (existEmail) {
            return res.response({
                msg: `Ya existe un cliente con el correo: ` + payload.email
            })
        }
        const client = await Client.create(payload)

        //Antes de guardar en la base  de datos encriptamos la contraseña
        const salt = bcrypt.genSaltSync(10)
        client.password = bcrypt.hashSync(payload.password, salt)

        await client.save()

        return res.response({
            client
        })
    } catch (error) {
        throw new Error(error)
    }


}


export { listClients, addClients }
