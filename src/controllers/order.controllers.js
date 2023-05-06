import Order from '../model/Order.js'
import { isValidObjectId } from "mongoose";

export const getOrders = async (req, res) => {
  const [orders, total] = await Promise.all([
    Order.find({})
  ])
  if (total === 0) {
    return res.status(404).json({
      message: "No hay pedidos",
    })
  }
  if (orders) {
    return res.status(200).json({
      message: "Pedidos retornados exitosamente",
      orders
    })
  }
}

export const getOrder = async (req, res) => {
  const { id } = req.params
  if (!isValidObjectId(id)) {
    return res.status(500).json({
      message: 'No se pudo obtener el Pedido'
    })
  }
  const order = await Order.findById(id)
  if (!order) {
    return res.status(404).json({
      message: 'No se encontro el Pedido'
    })
  }
  res.json({
    message: `Obtuviste el Pedido con id ${id}`,
    order
  })
}

export const createOrder = async (req, res) => {
  const {
    userName,
    userAddress,
    menuName,
    menuPrice,
    status
  } = req.body  
  const order = await Order({
    userName,
    userAddress,
    menuName,
    menuPrice,
    status
  })  
  try {
    await order.save()
    res.status(201).json({
      message: `Pedido ${userName} creado`,
    })
  } catch (error) {
    res.status(400).json({
      message: 'Ha ocurrido un error',
      fields: {
        userName: error.errors?.userName?.message,
        userAddress: error.errors?.userAddress?.message,
        menuName: error.errors?.menuName?.message,
        menuPrice: error.errors?.menuPrice?.message,
        status: error.errors?.status?.message,
      },
    })
  }
}

export const deleteOrder = async (req, res) => {
  const { id } = req.params
  if (!order) {
    return res.status(404).json({
      message: 'No se pudo borrar el Pedido'
    })
  }
  const order = await orders.findByIdAndDelete(id)
  if (!order) {
    return res.status(404).json({
      message: 'No hay Pedidos'
    })
  }
  res.json({
    message: `order: ${order?.name} eliminado exitosamente`
  })
}

export const editOrder = async (req, res) => {
  const {id} = req.params
  const {status} = req.body
  if(!isValidObjectId(id)){
    return res.status(404).json({
      message:`No es un id valido`
    })
  }
  try {
    await Order.findByIdAndUpdate({_id:id},{status} )
    res.status(201).json ({
      message: `Pedido con Id ${id} editado`,
    })
  } catch (error) {
    res.status(400).json({
      message:'Ha ocurrido un error',
      fields:{
        status:error.errors?.status?.message,               
      },
    })
  }
}
