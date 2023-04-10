import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION)
    console.log('Conexión exitosa')
  } catch (error) {
    console.log('Falló la conexión')
  }
}
