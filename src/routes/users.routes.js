import { Router } from 'express'
import { getUsers, getUser, createUser, editUser, deleteUser } from '../controllers/user.controller'

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/', editUser)
router.delete('/', deleteUser)

export default router
