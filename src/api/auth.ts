import express from 'express'
const router = express.Router()

router.post('/login', (req, res) => {
  res
    .status(500)
    .json({ data: { message: 'Work in progress!' }, success: false })
})

export default router
