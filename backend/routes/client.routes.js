import {listClients,  addClients } from "../controllers/client.controller.js"


//rutas para clientes
const clientRoutes = [
    {
        method: 'GET',
        path: '/api/client',
        handler: listClients,
    },
    {
        method: 'POST',
        path: '/api/client',
        handler: addClients,
    }
]
export default clientRoutes