import jwt from 'jsonwebtoken'

export const validateToken = (req, res, next) => {
  const token = req.headers['accesstoken']
  if (!token) {
    return res.status(401).json({
      message: 'No tiene acceso a esta página',
      token: 'No hay token'
    })
  }
  const signature = process.env.SIGNATURE
  try {
    const data = jwt.verify(token, signature)
  } catch (error) {
    return res.status(401).json({
      message: 'No tiene acceso a esta página',
      token: 'token inválido'
    })
  }
  next()
}
