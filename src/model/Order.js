import { model, Schema } from 'mongoose';

const orderSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, 'El nombre del usuario es requerido'],
    },
    userAddress: {
      type: String,
      required: [true, 'La dirección del usuario es requerida'],
    },
    menuName: {
      type: String,
      required: [true, 'El pedido es requerido'],
    },
    menuPrice:{
      type: Number,
      required: [true, 'El precio del pedido es requerido'],
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
  }
);

export default model('Order', orderSchema)
