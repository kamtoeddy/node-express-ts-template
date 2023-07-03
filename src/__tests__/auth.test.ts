import request from 'supertest'

let api: request.SuperTest<request.Test>, server: any

describe('auth', () => {
  beforeEach(async () => {
    server = (await import('..')).server
    api = request(server)
  })
  afterEach(() => server?.close?.())

  it('should return greeting message on startup', async () => {
    const res = await api.post('/auth/login')

    expect(res.status).toBe(500)
    expect(res.body).toEqual({
      data: { message: 'Work in progress!' },
      success: false
    })
  })
})
