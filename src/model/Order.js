import { model, Schema } from 'mongoose'

const orderSchema = new Schema(
  {
    name:
    {
      type: String,

    },
    adress:
    {
      type: String,
      required: [true, 'La dirección es requerida']
    },
    date:
    {
      type: Date,
      default: Date.now()
    },
    price: 
    {
      type: Number,
    },
    menu:
    {
      type: String,
      required: [true, 'El Pedido es requerido']
    },
    state:
    {
      type: Boolean, 
      default: true
    }
  },
  {
    timestamps: true,
  }
  
)
export default model ('Order', orderSchema) 