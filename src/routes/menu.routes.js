import { Router } from 'express'
import { getMenus,getMenu,createMenu,editMenu,deleteMenu} from '.././controllers/menu.controllers.js'
import { validateToken } from '../middlewares/validatesToken.js'

const router = Router()

router.get('/', validateToken, getMenus)
router.get('/:id', getMenu)
router.post('/', createMenu)
router.put('/:id', editMenu)
router.delete('/:id', deleteMenu)

export default router
