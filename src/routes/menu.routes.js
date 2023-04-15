import { Router } from 'express'
import { getMenus,getMenu,createMenu,editMenu,deleteMenu} from '.././controllers/menu.controllers.js'

const router = Router()

router.get('/', getMenus)
router.get('/:id', getMenu)
router.post('/', createMenu)
router.put('/:id', editMenu)
router.delete('/:id', deleteMenu)

export default router
