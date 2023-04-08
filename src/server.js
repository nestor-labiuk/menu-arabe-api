import express  from 'express'
import cors from 'cors' 

export class Server {

  constructor() {
    this.app = express()
    this.routes()
  }

  middleware() {
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes() {
    this.app.use('api/users', router)
    
  }

  listen() {
    this.app.listen(8080, () => {
      console.log('Servidor corriendo en el puerto 8080')
    }) 
  }
}
