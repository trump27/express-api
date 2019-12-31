const request = require('supertest')
const app = require('../app/app.js')

describe('API test', () => {
  beforeAll(async (done) => {
    done()
  })
  afterAll((done) => {
    done()
  })
  test('test api', async (done) => {
    const res = await request(app).get('/api/v1')
    expect(res.body.success).toBe(true)
    done()
  })
})
