import { Router } from 'express'
import { loginUser } from '../controllers/login.controllers.js'

const router = Router()

router.post('/', loginUser)

export default router


