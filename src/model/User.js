import { Schema } from "mongoose"

const UserSchema = new Schema({
  name: { type: String},
  email: { type: String},
  adress: { type: String },
  password: { type: String },
  isActive: { type: Boolean },
  isAdmin: { type: Boolean },
})
