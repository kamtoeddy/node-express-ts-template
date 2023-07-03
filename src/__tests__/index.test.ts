import request from 'supertest'

let api: request.SuperTest<request.Test>, server: any

describe('app', () => {
  beforeEach(async () => {
    server = (await import('..')).server
    api = request(server)
  })
  afterEach(() => server?.close?.())

  it('should return greeting message on startup', async () => {
    const res = await api.get('/health')

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ data: { message: 'Hello!' }, success: true })
  })

  it('should return resource not found for unsupported endpoints', async () => {
    const res = await api.get('/invalid-endponit')

    expect(res.status).toBe(404)
    expect(res.body).toEqual({ data: 'Resource not found', success: false })
  })
})
