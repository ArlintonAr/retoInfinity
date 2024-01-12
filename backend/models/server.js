
import Hapi from '@hapi/hapi'


import dataBase from '../database/connect-db.js';


import clientRoutes from '../routes/client.routes.js';
import authRoutes from '../routes/auth.routes.js';
import securityRoutes from '../routes/security.routes.js';




class Server {

    constructor() {
        //Creo una variable a partir de Hapi
        this.PORT=process.env.PORT //llamo mi variable del puerto desde mis variables de entorno 
        this.app = Hapi.Server({
            port: this.PORT,
            host: 'localhost'
        })

        //Conexion a la base de datos
        this.connectDb()
        //Middlewares
        this.middlewares()
        //Rutas de la aplicacion
        this.routes()
    }

    //Conexión a la base de datos

    async connectDb(){
        try {
        
            await dataBase.authenticate()
            console.log('La conexion a base de datos ha sido exitosa')
            
        } catch (error) {
           throw new Error(error)
            
        }
    }
    //Middlewares
    middlewares(){
      
    }
    //Escuchando el servidor
    async listen() {


        await this.app.start();
        console.log('Servidor escuchando en: ', this.app.info.uri);


    };
    //manejo de rutas
    routes() {

        this.app.route(clientRoutes)
        this.app.route(authRoutes)
        
        this.app.route(securityRoutes)
    }


}



export default Server