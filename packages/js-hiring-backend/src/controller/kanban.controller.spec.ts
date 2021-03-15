import request from 'supertest'
import { createApp } from '../app'

describe('KanbanController', () => {
  it('returns 200 on GET /', (done) => {
    request(createApp()).get('/').expect(200, done)
  })
})
