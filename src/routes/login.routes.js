import { Router } from 'express'
import { authUser } from '../controllers/auth.controllers.js'

const router = Router()

router.post('/', authUser)

export default router


