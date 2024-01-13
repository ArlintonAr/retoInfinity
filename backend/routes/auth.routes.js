import login from "../controllers/auth.controller.js"


//rutas para autenticación
const authRoutes = [
  
    {
        method: 'POST',
        path: '/api/client/login',
        handler: login,
        
    }
]
export default authRoutes