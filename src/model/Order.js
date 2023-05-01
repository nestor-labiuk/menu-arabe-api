import { model, Schema } from 'mongoose';

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre del usuario es requerido'],
    },
    address: {
      type: String,
      required: [true, 'La dirección del usuario es requerida'],
    },
    menu: {
      type: String,
      required: [true, 'El pedido es requerido'],
    },
    price: {
      type: Number,
      required: [true, 'El precio del pedido es requerido'],
    },
    status: {
      type: String,
      default: 'Pendiente',
      enum: ['Pendiente', 'Enviado'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Order', orderSchema);