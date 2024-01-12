/* 

handler: (request, h) => {

    return 'Hello World!';
} */

import generateToken from '../controllers/generateToken.controller.js'


//rutas para mi generador de token
const securityRoutes=[
            {
                method: 'POST',
                path: '/api/generateToken',
                handler: generateToken,
            },
           /*  {
                method: 'POST',
                path: 'api/validateToken',
                handler: import('./controllers/validateToken'),
            }, */
        ]
export default securityRoutes