import React from 'react'

// components
import KanbanItem from './KanbanItem'

// services
import KanbanService from '../services/KanbanService'

const KanbanBoard = ({ itemsData, setItemsData }: any) => {
  const handleStatusChange = (id: any, newItem: any) => {
    KanbanService.changeStatus(id, newItem).then((res) => {
      setItemsData(res.data)
    })
  }

  const handleDelete = (id: string) => {
    KanbanService.deleteItem(id).then((res) => {
      setItemsData(res.data)
    })
  }

  const backlogList = itemsData.filter((item: any) => item.status === 'Backlog')
  const ipList = itemsData.filter((item: any) => item.status === 'In Progress')
  const qaList = itemsData.filter((item: any) => item.status === 'QA')
  const readyList = itemsData.filter((item: any) => item.status === 'Ready')

  const backlogItems = backlogList.map((item: any) => (
    <KanbanItem
      key={item._id}
      kanbanItem={item}
      handleStatusChange={handleStatusChange}
      handleDelete={handleDelete}
    />
  ))

  const ipItems = ipList.map((item: any) => (
    <KanbanItem
      key={item._id}
      kanbanItem={item}
      handleStatusChange={handleStatusChange}
      handleDelete={handleDelete}
    />
  ))

  const qaItems = qaList.map((item: any) => (
    <KanbanItem
      key={item._id}
      kanbanItem={item}
      handleStatusChange={handleStatusChange}
      handleDelete={handleDelete}
    />
  ))

  const readyItems = readyList.map((item: any) => (
    <KanbanItem
      key={item._id}
      kanbanItem={item}
      handleStatusChange={handleStatusChange}
      handleDelete={handleDelete}
    />
  ))

  return (
    <div className="kanbanBoard">
      <div className="container">
        <div className="backlogCol col">
          <h4>Backlog</h4>
          {backlogItems}
        </div>
        <div className="ipCol col">
          <h4>In Progress</h4>
          {ipItems}
        </div>
        <div className="qaCol col">
          <h4>QA</h4>
          {qaItems}
        </div>
        <div className="completeCol col">
          <h4>Ready</h4>
          {readyItems}
        </div>
      </div>
    </div>
  )
}

export default KanbanBoard
