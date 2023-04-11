import { Schema } from 'mongoose'

const UserSchema = new Schema({
  name: { type: String, required:[true, 'El nombre es requerido']},
  email: { type: String, required:[true, 'El mail es requerido']}, 
  adress: { type: String, required:[true, 'La dirección es requerida'] },
  PhoneNumber: { type: Number, required:[true, 'En número de teléfono es requerido']},
  password: { type: String, required:[true, 'La contraseña es requerida']},
  isActive: { type: Boolean,},
  isAdmin: { type: Boolean }
})

export default model('User', UserSchema)
