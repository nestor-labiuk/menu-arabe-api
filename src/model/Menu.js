import { model, Schema } from 'mongoose'

const MenuSchema = new Schema(
  {
    name:
    {
      type: String,
      required: [true, 'El nombre del menú es requerido']
    },
    state:
    {
      type: Boolean,
      required: [true, 'El estado es requerido']
    },
    price:
    {
      type: Number,
      required: [true, 'En precio es requerido']
    },
    detail:
    {
      type: String,
    },
    category:
    {
      type: String,
      required: [true, 'La categoría es requerida']
    },
    image:
    {
      type: String,
      required: [true, 'La imagen es requerida']
    },
  },
  {
    timestamps: true
  }
)

export default model('Menu', MenuSchema)
