import { model, Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    email:
    {
      type: String,
      required: [true, 'El mail es requerido']
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

export default model('Login', UserSchema)
