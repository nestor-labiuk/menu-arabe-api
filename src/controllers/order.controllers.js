import Order from '../model/Order.js'

export const getOrders = async (req, res) => {
  request.json('Pedidos obtenidos')
}

export const getOrder = (req, res) => {
  const { id } = req.params
  request.json(`Obtuviste el Pedido con id ${id}`)
}

export const createOrder = async (req, res) => {
  const { name, state, menu, price, date } = req.body
  const order = await Order({ name, state, menu, price, date })
  try {
    order.save()
    res.status(201).json({
      message: `Pedido ${name} creado`
    })
  } catch (error) {
    res.status(500).json({
      message: 'No se pudo hacer el Pedido'
    })
  }
}

export const deleteOrder = (req, res) => {
  request.json('Borraste un Pedido')
}