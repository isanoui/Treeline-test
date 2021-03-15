import { KanbanController } from './controller/kanban.controller'
import express from 'express'
import cors from 'cors'

export function createApp() {
  const kanbanController = new KanbanController()

  const app = express()
  app.use(express.json())
  app.use(cors())
  app.use('/', kanbanController.getRouter())
  return app
}
