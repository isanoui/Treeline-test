import React, { useState } from 'react'

// services
import KanbanService from '../services/KanbanService'

const AddItem = ({ setItemsData }: any) => {
  const [titleText, setTitleText] = useState('')
  const [descText, setDescText] = useState('')
  const [status, setStatus] = useState('Backlog')

  const titleTextHandler = (e: any) => {
    setTitleText(e.target.value)
  }

  const descTextHandler = (e: any) => {
    setDescText(e.target.value)
  }

  const statusHandler = (e: any) => {
    setStatus(e.target.value)
  }

  const handleSubmit = () => {
    KanbanService.addItem({
      title: titleText,
      description: descText,
      status: status,
    }).then((res) => {
      setItemsData(res.data)
    })
  }

  return (
    <div className="addItem">
      <h4>Create Kanban Item</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={titleTextHandler}
        />
        <br />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={descTextHandler}
        />
        <br />
        <br />
        <label htmlFor="status">Status:</label>
        <select name="status" id="status" onChange={statusHandler}>
          <option value="Backlog">Backlog</option>
          <option value="In Progress">In Progress</option>
          <option value="QA">QA</option>
          <option value="Ready">Ready</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Create Item" />
      </form>
    </div>
  )
}

export default AddItem
