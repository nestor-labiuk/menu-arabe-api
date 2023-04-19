import { Router } from 'express'
import { getUsers, getUser, createUser, editUser, deleteUser } from '.././controllers/users.controllers.js'

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/', editUser)
router.delete('/:id', deleteUser)

export default router
