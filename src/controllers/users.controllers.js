import { isValidObjectId } from "mongoose"
import User from "../model/User.js"

export const getUsers = async (req, res) => {
  const { limit = 10, from = 0 } = req.query

  const [users, total] = await Promise.all([
    User.find({})
      .skip(Number(from))
      .limit(Number(limit)),
    User.count()
    ])

  if (users) {
    return res.status(200).json({
      message: 'Usuarios retornados con éxito',
      total,
      users
    })
  }
  res.status(204).json({
    message: 'No hay usuarios',
    data: []
  })
  res.json('obtuviste los usuarios')
}

export const getUser = async (req, res) => {
  const { id } = req.params

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      message: 'El id del usuario no es válido'
    })
  }

  const user = await User.findById(id)
  if (!user) {
    return res.status(404).json({
      message: 'Usuario no encontrado'
    })
  }
  res.status(200).json({
    message: `Obtuviste  usuario llamado ${user.name}`,
    user
  })
}

export const createUser = async (req, res) => {
  const { name, email, adress, phoneNumber, password, isActive, isAdmin } = req.body
  const user = await User({ name, email, adress, phoneNumber, password, isActive, isAdmin })

  try {
    user.save()
    res.status(201).json({
      message: `Usuario ${name} creado`
    })
  } catch (error) {
    res.status(500).json({
      message: 'No se pudo crear el usuario'
    })
    console.log(error)
  }
}

export const editUser = (req, res) => {
  res.status(201).json('Editaste un usuario')
}

export const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      message: 'El id de usuario no es valido'
    })
  }

  const user = await User.findByIdAndDelete(id)
  if (!user) {
    return res.status(404).json({
      message: 'Usuario no encontrado'
    })
  }
  res.status(200).json({
    message: `El usuario con el nombre '${user?.name}' fue eliminado`
  })
}
