import mongoose from 'mongoose'

// export interface IMessage extends mongoose.Document {
//   text: string
// }

// Still learning TS, created model in the way I knew how without an interface, given the time constraint

export const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
})

const Item = mongoose.model('item', itemSchema)
export default Item
