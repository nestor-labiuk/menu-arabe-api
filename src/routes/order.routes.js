import { Router } from 'express'
import { getOrders, getOrder, deleteOrder, createOrder } from '../controllers/order.controllers.js'


const router = Router()

router.get('/', getOrders)
router.get('/:id', getOrder)
router.post('/', createOrder)
router.delete('/', deleteOrder)

export default router