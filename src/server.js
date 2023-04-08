import express from 'express'
import { usersRoutes } from './routes/index.js'
import cors from 'cors'
export class Server {
 
  constructor () {
    this.app = express()
    this.middlewares()
    this.routes()
  }

 

  middlewares () {
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes () {
    this.app.use('/api/users', usersRoutes)
  }

  listen () {
    this.app.listen(8080, () => {
      console.log('Servidor corriendo en el puerto 8080')
    })
  }
}
