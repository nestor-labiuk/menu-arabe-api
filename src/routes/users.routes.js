import { Router } from 'express'
import { getUsers, getUser, createUser, editUser, deleteUser } from '.././controllers/users.controllers.js'
import { body, check } from 'express-validator'
import { validateField } from '../middlewares/validatesFields.js'
import { existEmail } from '../db/db-validator.js'

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/',
 [
  body('name', 'El nombre es requerido y debe tener entre 3 y 30 caracteres').isLength({min: 3, max: 30}),
  body('email', 'El email es requerido y debe tener formato de mail y un maximo de 40 caracteres').isEmail().isLength({max: 40}),
  check('email').custom(existEmail),
  body('adress','La dirección es requerida y debe tener entre 5 y 30 caracteres').isLength({min: 5, max: 30}),
  body('phoneNumber', 'El telefono es requerido , debe ser un número y tener entre 7 y 18 caracteres').isLength({min: 7, max: 18}).isNumeric(),
  body('password', 'La contraseña es requeroida y debe tener entre 8 y 12 caracteres').isLength({min: 8, max: 12} ),
  validateField
 ],
  createUser)
router.put('/', editUser)
router.delete('/:id', deleteUser)

export default router
