
export const getUsers = async (req, res) => {
  res.json('obtuviste los usuarios')
}

export const getUser = (req, res) => {
  res.json('Obtuviste un usuario')
}

export const createUser = async (req, res) => {
  res.json('Creaste un usuario')
} 

export const editUser = (req, res) => {
  res.json('Editaste un usuario')
}

export const deleteUser = (req, res) => {
  res.json('Borraste un usuario')
}
