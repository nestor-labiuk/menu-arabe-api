import { Router } from 'express'
import { getOrders, editOrder, getOrder, deleteOrder, createOrder } from '../controllers/order.controllers.js'


const router = Router()

router.get('/', getOrders)
router.get('/:id', getOrder)
router.put('/:id', editOrder)
router.post('/', createOrder)
router.delete('/', deleteOrder)

export default router