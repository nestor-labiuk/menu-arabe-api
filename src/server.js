import express from 'express'
import { usersRoutes, menuRoutes, ordersRoutes } from './routes/index.js'
import cors from 'cors'
import { dbConnection } from './db/config.js'
export class Server {

  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
    this.connectionDb()
  }

  async connectionDb() {
    await dbConnection()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes() {
    this.app.use('/api/users', usersRoutes)
    this.app.use('/api/menu', menuRoutes)
    this.app.use('/api/orders', ordersRoutes)
    this.app.use('/api/login', loginRoutes)
  }

  listen() {
    this.app.listen(8080, () => {
      console.log('Servidor corriendo en el puerto 8080')
    })
  }
}
