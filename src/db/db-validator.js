import User from "../model/User.js"

export const existEmail = async (email) => {

  const userEmail = await User.findOne({ email })

  if (userEmail) {
   throw new Error(`El correo ${email} ya esta registrado`)
  }
}
