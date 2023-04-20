import bcrypt from 'bcrypt';

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync()
  const hash = bcrypt.hashSync(password, salt)

  return hash
}

export default encryptPassword
