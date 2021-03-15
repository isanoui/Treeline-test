import axios from 'axios'

const API_URL = 'http://localhost:4000'

class KanbanService {
  getItems() {
    return axios.get(API_URL + '/getItems')
  }

  addItem(newItem: any) {
    return axios.post(API_URL + '/addItem', newItem)
  }

  changeStatus(id: any, newItem: any) {
    return axios.put(API_URL + `/changeStatus/${id}`, newItem)
  }

  deleteItem(id: any) {
    return axios.delete(API_URL + `/deleteItem/${id}`)
  }
}

export default new KanbanService()
