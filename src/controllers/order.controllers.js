import Order from '../model/Order.js'


export const getOrders = async (req, res) => {
  const [ orders, total ]  = await Promise.all([
    Order.find({})
  ])

  if(total===0){
    return res.status(404).json ({
      message: "No hay pedidos",
    })
  }
  if (orders){
    return res.status(200).json ({
      message: "Pedidos retornados exitosamente",
      // total,
      orders
    })
  }
  
}


export const getOrder = async (req, res) => {
  const { id } = req.params
  if(!Order){
    return res.status(500).json({
      message: 'No se pudo obtener el Pedido'
    })
  }
  req.json(`Obtuviste el Pedido con id ${id}`)

  const order = await Orders.findById(id)
    if(!order){
      return res.status(404).json({
        message: 'No se encontro el Pedido'
      })
    }
    res.json({
    order
  })
}

export const createOrder = async (req, res) => {
  const { name, state, menu, price, adress } = req.body
  const order = await Order({ name, state, menu, price, adress })
  
  try {
    order.save()
    res.status(201).json({
      message: `Pedido ${name} creado`
    })
  } catch (error) {
    res.status(500).json({
      message: 'No se pudo hacer el Pedido'
    })
    console.log(error)
  }
}

export const deleteOrder = async (req, res) => {  
  const { id } = req.params
  if(!Orders){
    return res.status(404).json({
      message: 'No se pudo borrar el Pedido'
    })
  }
  const order = await Orders.findByIdAndDelete(id)
  if(! order){
    return res.status(404).json({
      message: 'No hay Pedidos'
    })
  }
  res.json({
    message: `order: ${order?.name} eliminado exitosamente`
  })
  
}