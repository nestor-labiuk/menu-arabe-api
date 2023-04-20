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
  body('name', 'El nombre debe tener entre 3 y 30 caracteres').isLength({min: 3, max: 30}),
  body('email', 'El email debe tener formato de mail y un maximo de 40 caracteres').isEmail().isLength({max: 40}),
  check('email').custom(existEmail),
  body('adress','La dirección debe tener entre 5 y 30 caracteres').isLength({min: 5, max: 30}),
  body('phoneNumber', 'El número de telefono debe tener 7 y 18 caracteres').isLength({min: 7, max: 18}),
  body('password', 'La contraseña debe tener entre 8 y 12 caracteres').isLength({min: 8, max: 12} ),
  validateField
 ],
  createUser)
router.put('/', editUser)
router.delete('/:id', deleteUser)

export default router
