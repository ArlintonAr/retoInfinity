
import Hapi from '@hapi/hapi'

import Token from '../models/token.js'
import Client from '../models/client.js'

import generateJWT from '../helpers/generate-JWT.js'
import validateJWT from '../middlewares/validate-jwt.js'

//asigno request y response desde Hapi
const reque = Hapi.request
const respon = Hapi.responseToolKit



//Controlador para generar token
const  generateToken = async (req = reque, res = respon) => {



  const {id}=req

  try {

    const client = await Client.findOne({where:id})

    //Generamos TOKEN
    const value = await generateJWT(client.id)
    const name = client.name


    const newToken = await Token.create({ name, value })
    await newToken.save()


    return res.response({
      name,
      value
    })
  } catch (error) {
    console.log("Ha ocurrido un error: ", error)
    throw new Error(error)
  }

}

const listToken= async(req = reque, res = respon)=>{
  const tokens = await Token.findAll()

  return res.response({
      tokens
  })

}
const updateToken=async(req=reque,res=respon)=>{



}

export {generateToken,updateToken,listToken}

