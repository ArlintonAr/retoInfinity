import 'dotenv/config'

import Server from "./models/server.js"

const server =new Server()

//llamamos al metodo escuchar servidor
await server.listen()