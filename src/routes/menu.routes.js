import { Router } from 'express'
import { getMenus,getMenu,createMenu,editMenu,deleteMenu} from '.././controllers/menu.controllers.js'
import { validateToken } from '../middlewares/validatesToken.js'

const router = Router()
router.get('/', getMenus)
router.get('/:id', getMenu)
router.post('/', validateToken, createMenu)
router.put('/:id', validateToken, editMenu)
router.delete('/:id', validateToken, deleteMenu)

export default router
