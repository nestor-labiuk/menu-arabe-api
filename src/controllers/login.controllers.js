import { compareSync } from 'bcrypt'
import User from '../model/User.js'
import jwt from 'jsonwebtoken'
export const authUser = async (req, res) => {
  const SIGNATURE = process.env.SIGNATURE
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(400).json({
      message: 'La información ingresada no es correcta'
    })
  }
  const isPasswordsValid = compareSync(password, user.password)
  if (!isPasswordsValid) {
    return res.status(400).json({
      message: 'La información ingresada no es correcta'
    })
  }
  const payload = {
    id: user.id,
  }
  const accesstoken = jwt.sign(payload, SIGNATURE, {expiresIn: "1h"})
  res.json({
    message: `Bienvenido ${user.name}`,
    accesstoken,
  })
}