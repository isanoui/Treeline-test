import { Request, Response, Router } from 'express'

import Item from '../model/item'

export class KanbanController {
  getRouter(): Router {
    const router = Router()
    router.get('/', this.bootup.bind(this))
    router.get('/getItems', this.getItems.bind(this))
    router.post('/addItem', this.addItem.bind(this))
    router.put('/changeStatus/:id', this.changeStatusById.bind(this))
    router.delete('/deleteItem/:id', this.deleteItem.bind(this))
    return router
  }

  bootup(req: Request, res: Response) {
    res.send('Server is on').status(200)
  }

  async getItems(req: Request, res: Response) {
    try {
      const items = await Item.find({})

      return res.json(items)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Server Error' })
    }
  }

  async addItem(req: Request, res: Response) {
    try {
      await Item.create(req.body)

      const items = await Item.find({})

      return res.json(items)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Server Error' })
    }
  }

  async changeStatusById(req: Request, res: Response) {
    try {
      const { id } = req.params

      await Item.findByIdAndUpdate(id, req.body)

      const items = await Item.find({})

      return res.json(items)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Server Error' })
    }
  }

  async deleteItem(req: Request, res: Response) {
    try {
      const { id } = req.params

      await Item.findByIdAndRemove(id)

      const items = await Item.find({})

      return res.json(items)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Server Error' })
    }
  }
}
