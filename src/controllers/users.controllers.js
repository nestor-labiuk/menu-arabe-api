import User from "../model/User.js"

export const getUsers = async (req, res) => {
  res.json('obtuviste los usuarios')
}

export const getUser = (req, res) => {
  const { id } = req.params
  res.json(`Obtuviste un usuario con el id ${id}`)
}

export const createUser = async (req, res) => {
  const { name, email, adress, phoneNumber, password } = req.param
  const user = await User({ name, email, adress, phoneNumber, password })
  try {
    user.save()
    res.status(201).json({
      message: `Usuario ${data.name} creado`
    })
  } catch (error) {
    res.status(500).json({
      message: 'No se pudo crear el usuario'
    })
    console.log(error)
  }
}

export const editUser = (req, res) => {
  res.json('Editaste un usuario')
}

export const deleteUser = (req, res) => {
  res.json('Borraste un usuario')
}
