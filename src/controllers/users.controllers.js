import { isValidObjectId } from 'mongoose'
import User from '../model/User.js'
import encryptPassword from '../helpers/encryptPassword.js'

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
    message: `Obtuviste un usuario llamado ${user.name}`,
    user
  })
}

export const createUser = async (req, res) => {
  const { name, email, adress, phoneNumber, password, isActive, isAdmin } = req.body
  
  const user = await User({ name, email, adress, phoneNumber, password, isActive, isAdmin })
  user.password = encryptPassword(password)

  try {
    await user.save()
    res.status(201).json({
      message: `Usuario ${name} creado`,
      user: user.name
    })
  } catch (error) {
    res.status(500).json({
      message: 'No se pudo crear el usuario',
      fields: {
        name: error.errors?.name?.message,
        email: error.errors?.email?.message,
        adress: error.errors?.adress?.message,
        phoneNumber: error.errors?.phoneNumber?.message,
        password: error.errors?.password?.message
      }
    })
    console.log(error)
  }
}

export const editUser = async (req, res) => {
  const {id} = req.params
  const {name, email, adress,phoneNumber,password,isActive,isAdmin} = req.body
  if(!isValidObjectId(id)){
    return res.status(404).json({
      message:`Usuario: no es valido para edición`
    })
  }
  const userById = await User.findById(id)
  if (! userById){
    return res.status(404).json({
      message:`Usuario: no existente para edición`
    })
  }

  const userByEmail = await User.findOne({email})
  if (userByEmail && userById.email !== email){
    return res.status(400).json({
      message:'Ya existe un usuario con este email'
    })
  }


  try {
    await User.findByIdAndUpdate({_id:id},{name, email, adress,phoneNumber,password,isActive,isAdmin} )
    res.status(201).json ({
      message: `Usuario ${name} editado`,
    })
  } catch (error) {
    res.status(400).json({
      message:'Ha ocurrido un error',
      fields:{
        name:error.errors?.name?.message,
        email:error.errors?.email?.message,
        address:error.errors?.address?.message,
        phoneNumber:error.errors?.phoneNumber?.message,
        password:error.errors?.password?.message,
        isActive:error.errors?.isActive?.message,
        isAdmin:error.errors?.isAdmin?.message,
      },
    })
  }

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
