
export const getUsers = async (req, res) => {
  res.json('obtuviste los usuarios')
}

export const getUser = (req, res) => {
  const { id } = req.params
  res.json(`Obtuviste un usuario con el id ${id}`)
}

export const createUser = (req, res) => {
  const data = req.body
  res.json({
    message: `Usuario ${data.name} creado`,
    data
  })
} 

export const editUser = (req, res) => {
  res.json('Editaste un usuario')
}

export const deleteUser = (req, res) => {
  res.json('Borraste un usuario')
}
