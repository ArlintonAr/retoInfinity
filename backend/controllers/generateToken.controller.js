
import Hapi from '@hapi/hapi'

//asigno request y response desde Hapi
const reque = Hapi.request  
const respon= Hapi.responseToolKit 



//Controlador para generar token
const generateToken = (req=reque,res=respon) => {
 

       const data = {
           id: 3,
           name: "Arlinton Arturo"
       }
     return  res.response(data)
   
}



export default generateToken

