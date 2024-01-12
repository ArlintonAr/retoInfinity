
import {generateToken, updateToken } from '../controllers/generateToken.controller.js'
import validateJWT from '../middlewares/validate-jwt.js'


//rutas para mi generador de token
const securityRoutes=[
            {
                method: 'POST',
                path: '/api/generateToken',
                handler: generateToken
               
            },
            {
                method: 'POST',
                path: '/api/updateToken',
                handler: updateToken,
            },
           /*  {
                method: 'POST',
                path: 'api/validateToken',
                handler: import('./controllers/validateToken'),
            }, */
        ]
export default securityRoutes