import express from 'express'
const router = express.Router()

router.get('/login', (req, res) => {
  res.json({ data: { message: 'Work in progress' }, success: false })
})

export default router
