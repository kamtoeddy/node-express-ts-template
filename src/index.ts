import express from 'express'

import api from '@/api'
import { constants } from '@/config'

const { NODE_ENV, PORT } = constants

const app = express().disable('x-powered-by')

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/health', async (req, res) =>
  res.json({ data: { message: 'Hello!' }, success: true })
)

const server = app.listen(PORT, async () => {
  // eslint-disable-next-line no-console
  if (NODE_ENV != 'test') console.log('Server running on port:', PORT)
})

app.use(api)

export { server }
