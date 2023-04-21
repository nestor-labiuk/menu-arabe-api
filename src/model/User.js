import { model, Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    name:
    {
      type: String,
      required: [true, 'El nombre es requerido']
    },
    email:
    {
      type: String,
      required: [true, 'El mail es requerido']
    },
    adress:
    {
      type: String
      , required: [true, 'La dirección es requerida']
    },
    phoneNumber:
    {
      type: String,
      required: [true, 'En número de teléfono es requerido']
    },
    password:
    {
      type: String,
      required: [true, 'La contraseña es requerida']
    },
    isActive:
    {
      type: Boolean,
      default: true
    },
    isAdmin:
    {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

export default model('User', UserSchema)
